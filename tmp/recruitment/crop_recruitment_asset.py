import math
import sys
from pathlib import Path

from PIL import Image, ImageEnhance, ImageStat


RATIOS = {
    "16:9": (16, 9, (1536, 864)),
    "16:9-home": (16, 9, (1920, 1080)),
    "2:3": (2, 3, (720, 1080)),
    "4:5": (4, 5, (1024, 1280)),
    "1:1": (1, 1, (768, 768)),
}


def corner_average(image):
    rgb = image.convert("RGB")
    width, height = rgb.size
    sample = max(8, min(width, height) // 24)
    boxes = [
        (0, 0, sample, sample),
        (width - sample, 0, width, sample),
        (0, height - sample, sample, height),
        (width - sample, height - sample, width, height),
    ]
    means = [ImageStat.Stat(rgb.crop(box)).mean for box in boxes]
    return tuple(int(sum(color[i] for color in means) / len(means)) for i in range(3))


def replace_flat_background(image, background):
    rgb = image.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()
    luminance = 0.2126 * background[0] + 0.7152 * background[1] + 0.0722 * background[2]
    fill = (13, 11, 9) if luminance > 185 else background
    threshold = 34
    for y in range(height):
        for x in range(width):
            color = pixels[x, y]
            distance = sum(abs(color[i] - background[i]) for i in range(3))
            if distance <= threshold:
                pixels[x, y] = fill
    return rgb


def content_bbox(image, background):
    rgb = image.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()
    threshold = 34
    min_x, min_y = width, height
    max_x, max_y = -1, -1

    for y in range(height):
        for x in range(width):
            color = pixels[x, y]
            distance = sum(abs(color[i] - background[i]) for i in range(3))
            if distance > threshold:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    if max_x < min_x or max_y < min_y:
        return (0, 0, width, height)

    margin = max(4, min(width, height) // 120)
    return (
        max(0, min_x - margin),
        max(0, min_y - margin),
        min(width, max_x + margin + 1),
        min(height, max_y + margin + 1),
    )


def fill_color(background):
    luminance = 0.2126 * background[0] + 0.7152 * background[1] + 0.0722 * background[2]
    if luminance > 190:
        return (12, 10, 8)
    return background


def replace_background_pixels(image, background, replacement):
    rgb = image.convert("RGB")
    pixels = rgb.load()
    width, height = rgb.size
    threshold = 42
    for y in range(height):
        for x in range(width):
            color = pixels[x, y]
            distance = sum(abs(color[i] - background[i]) for i in range(3))
            if distance <= threshold:
                pixels[x, y] = replacement
    return rgb


def crop_or_pad_to_2x3(image):
    image = image.convert("RGB")
    background = corner_average(image)
    fill = fill_color(background)
    target_ratio = 2 / 3

    width, height = image.size
    ratio = width / height
    if 0.85 <= ratio <= 1.15:
        crop_width = min(width, round(height * 0.70))
        left = max(0, (width - crop_width) // 2)
        content = image.crop((left, 0, left + crop_width, height))
    else:
        bbox = content_bbox(image, background)
        content = image.crop(bbox)

    content = replace_background_pixels(content, background, fill)
    content_width, content_height = content.size

    canvas_width = max(content_width, round(content_height * target_ratio))
    canvas_height = round(canvas_width / target_ratio)
    if canvas_height < content_height:
        canvas_height = content_height
        canvas_width = round(canvas_height * target_ratio)

    canvas = Image.new("RGB", (canvas_width, canvas_height), fill)
    left = (canvas_width - content_width) // 2
    top = (canvas_height - content_height) // 2
    canvas.paste(content, (left, top))
    return canvas.resize((720, 1080), Image.Resampling.LANCZOS), (720, 1080)


def center_crop(image, ratio_key):
    ratio_w, ratio_h, target_size = RATIOS[ratio_key]
    target_ratio = ratio_w / ratio_h
    image = replace_flat_background(image.convert("RGB"), corner_average(image))
    width, height = image.size
    current_ratio = width / height

    if current_ratio > target_ratio:
        crop_width = round(height * target_ratio)
        left = max(0, (width - crop_width) // 2)
        cropped = image.crop((left, 0, left + crop_width, height))
    else:
        crop_height = round(width / target_ratio)
        top = max(0, (height - crop_height) // 2)
        cropped = image.crop((0, top, width, top + crop_height))

    return cropped.resize(target_size, Image.Resampling.LANCZOS), target_size


def lift_dark_midtones(image, target_mean=55):
    sample = image.convert("L").resize((96, 54), Image.Resampling.BILINEAR)
    mean = max(1, ImageStat.Stat(sample).mean[0])
    gamma = math.log(target_mean / 255) / math.log(mean / 255)
    gamma = min(0.78, max(0.56, gamma))
    table = [round(255 * ((value / 255) ** gamma)) for value in range(256)]
    lifted = image.convert("RGB").point(table * 3)
    return ImageEnhance.Color(lifted).enhance(1.04)


def main():
    if len(sys.argv) not in (4, 5):
        raise SystemExit("Usage: crop_recruitment_asset.py <ratio> <source> <output> [--lift-dark]")

    ratio_key = sys.argv[1]
    if ratio_key not in RATIOS:
        raise SystemExit(f"Unknown ratio: {ratio_key}")

    source = Path(sys.argv[2])
    output = Path(sys.argv[3])
    output.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as image:
        if ratio_key == "2:3":
            processed, size = crop_or_pad_to_2x3(image)
        else:
            processed, size = center_crop(image, ratio_key)
        if len(sys.argv) == 5:
            if sys.argv[4] != "--lift-dark":
                raise SystemExit(f"Unknown option: {sys.argv[4]}")
            processed = lift_dark_midtones(processed)
        processed.save(output, "WEBP", quality=94, method=6)

    print(f"{output}|{size[0]}x{size[1]}|{output.stat().st_size}")


if __name__ == "__main__":
    main()

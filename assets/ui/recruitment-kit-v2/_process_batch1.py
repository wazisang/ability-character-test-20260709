from pathlib import Path
from PIL import Image
import json
import shutil

src = Path(r"C:\Users\Administrator\.cursor\projects\h-AI-ability-character-test-20260709\assets")
kit = Path(r"H:\AI\ability-character-test-20260709\assets\ui\recruitment-kit-v2")

for name in [
    "parchment_poster.png",
    "grunge_texture.png",
    "paper_scraps.png",
    "document_stack.png",
    "map_fragment.png",
]:
    shutil.copy2(src / name, kit / name)


def cut_near_white(path: Path, thresh: int = 245, soft: int = 12) -> str:
    im = Image.open(path).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r >= thresh and g >= thresh and b >= thresh:
                px[x, y] = (r, g, b, 0)
            elif r >= thresh - soft and g >= thresh - soft and b >= thresh - soft:
                m = min(r, g, b)
                alpha = int(max(0, min(255, (thresh - m) / soft * 255)))
                px[x, y] = (r, g, b, alpha)
    im.save(path)
    return path.name


for name in ["paper_scraps.png", "document_stack.png", "map_fragment.png"]:
    print("cut", cut_near_white(kit / name))

p = Image.open(kit / "parchment_poster.png").convert("RGB")
samples = [
    p.getpixel((10, 10)),
    p.getpixel((p.width - 10, 10)),
    p.getpixel((10, p.height - 10)),
    p.getpixel((p.width // 2, p.height // 2)),
]
print("parchment_corner_samples", samples)

man = json.loads((kit / "manifest.json").read_text(encoding="utf-8"))
ready = {
    "parchment_poster",
    "grunge_texture",
    "paper_scraps",
    "document_stack",
    "map_fragment",
}
for a in man["assets"]:
    if a["id"] in ready:
        a["status"] = "ready"
(kit / "manifest.json").write_text(
    json.dumps(man, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print("manifest ok")

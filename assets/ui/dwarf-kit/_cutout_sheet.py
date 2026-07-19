"""Cut dwarf UI assets with edge flood-fill + chroma keep."""
from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(__file__).with_name("_source-sheet.png")
OUT = Path(__file__).parent

CROPS = {
    "dwarf_portrait": (6, 6, 308, 297),
    "parchment": (328, 8, 631, 233),
    "mountain_fortress": (651, 14, 1017, 245),
    "banner": (6, 304, 308, 569),
    "crossed_hammers": (314, 251, 644, 417),
    "ornate_ring": (651, 251, 1017, 417),
    "title_plaque": (314, 423, 644, 569),
    "wax_seal": (651, 423, 815, 569),
    "grunge_texture": (821, 424, 1017, 569),
}

# Pieces that should punch enclosed dark holes (ring center, between hammers)
HOLE_PIECES = {"crossed_hammers", "ornate_ring", "banner", "wax_seal", "dwarf_portrait"}


def flood_bg(is_bg: np.ndarray) -> np.ndarray:
    """Mark background pixels reachable from the crop border."""
    h, w = is_bg.shape
    reach = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for y in range(h):
        for x in (0, w - 1):
            if is_bg[y, x]:
                reach[y, x] = True
                q.append((x, y))
    for x in range(w):
        for y in (0, h - 1):
            if is_bg[y, x] and not reach[y, x]:
                reach[y, x] = True
                q.append((x, y))
    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and is_bg[ny, nx] and not reach[ny, nx]:
                reach[ny, nx] = True
                q.append((nx, ny))
    return reach


def cut_piece(arr: np.ndarray, bg: np.ndarray, box: tuple[int, int, int, int], name: str) -> Image.Image:
    x0, y0, x1, y1 = box
    crop = arr[y0 : y1 + 1, x0 : x1 + 1].astype(np.float32)
    h, w = crop.shape[:2]
    diff = np.linalg.norm(crop - bg, axis=2)
    lum = 0.2126 * crop[:, :, 0] + 0.7152 * crop[:, :, 1] + 0.0722 * crop[:, :, 2]
    chroma = crop.max(axis=2) - crop.min(axis=2)

    # Likely sheet background: near bg color, low chroma, dark
    is_bg = (diff < 32) & (chroma < 18) & (lum < 55)

    # Strong subject lock: colorful or clearly brighter than sheet
    is_subject = (chroma > 14) | (diff > 42) | (lum > 70)

    # Don't treat strong subject as bg
    is_bg = is_bg & (~is_subject)

    remove = flood_bg(is_bg)

    # Enclosed dark holes for open shapes
    if name in HOLE_PIECES:
        hole = (diff < 28) & (chroma < 16) & (lum < 48) & (~is_subject) & (~remove)
        remove = remove | hole

    # Soft edge alpha
    alpha = np.ones((h, w), dtype=np.float32)
    alpha[remove] = 0.0
    # Feather near-bg leftover
    fringe = (~remove) & (diff < 26) & (chroma < 14)
    alpha[fringe] = np.clip((diff[fringe] - 10) / 16.0, 0.0, 1.0)

    rgba = np.dstack([crop.astype(np.uint8), (alpha * 255).astype(np.uint8)])
    ys, xs = np.where(rgba[:, :, 3] > 8)
    if len(xs) == 0:
        return Image.fromarray(rgba, "RGBA")
    return Image.fromarray(rgba[ys.min() : ys.max() + 1, xs.min() : xs.max() + 1], "RGBA")


def main() -> None:
    img = Image.open(SRC).convert("RGB")
    arr = np.asarray(img)
    h, w = arr.shape[:2]
    samples = []
    for y in range(0, h, max(1, h // 50)):
        for x in (0, 1, 2, w - 3, w - 2, w - 1):
            samples.append(arr[y, x])
    for x in range(0, w, max(1, w // 50)):
        for y in (0, 1, 2, h - 3, h - 2, h - 1):
            samples.append(arr[y, x])
    bg = np.median(np.stack(samples).astype(np.float32), axis=0)
    print("bg", bg)

    for name, box in CROPS.items():
        out_img = cut_piece(arr, bg, box, name)
        path = OUT / f"{name}.png"
        out_img.save(path)
        a = np.asarray(out_img)[:, :, 3]
        print(
            f"{name:20s} {out_img.size[0]:4d}x{out_img.size[1]:<4d} "
            f"transparent%={100 * (a < 8).mean():5.1f} meanA={a.mean():5.1f}"
        )


if __name__ == "__main__":
    main()

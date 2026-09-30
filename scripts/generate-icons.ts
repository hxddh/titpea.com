// App icons for products without their own artwork, and official artwork
// clipped to the site's tile. Sources live in design/icons:
//   <slug>.svg            — site-designed icon (1024×1024 tile)
//   <slug>-official.png   — the product's own icon, masked to the same tile
// Writes public/assets/icons/<slug>.webp at 208px (2× the largest use).
//   npm run assets:icons
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const source = "design/icons";
const target = "public/assets/icons";
const size = 208;
const radius = Math.round(size * 0.225);
const mask = Buffer.from(
  `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}"/></svg>`,
);

/**
 * Store-style artwork pads its tile with transparent margin and a drop
 * shadow (Chrome extension icons use about 75% of the canvas). Crop to the
 * opaque tile so every icon fills the site tile at the same size.
 */
async function opaqueTile(input: string) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width;
  let top = info.height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] < 250) continue;
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }
  if (right < 0) return { left: 0, top: 0, width: info.width, height: info.height };
  const side = Math.min(right - left + 1, bottom - top + 1);
  return { left, top, width: side, height: side };
}

for (const file of fs.readdirSync(source).sort()) {
  const match = file.match(/^(.+?)(-official)?\.(svg|png)$/);
  if (!match) continue;
  const [, slug] = match;
  const input = path.join(source, file);
  const image = sharp(input, { density: 72 });
  if (file.endsWith(".png")) image.extract(await opaqueTile(input));
  const resized = await image.resize(size, size).png().toBuffer();
  const out = path.join(target, `${slug}.webp`);
  await sharp(resized)
    .composite([{ input: mask, blend: "dest-in" }])
    .webp({ quality: 92 })
    .toFile(out);
  console.log(`${out} (${fs.statSync(out).size} bytes)`);
}

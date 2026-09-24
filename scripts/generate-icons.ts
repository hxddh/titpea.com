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

for (const file of fs.readdirSync(source).sort()) {
  const match = file.match(/^(.+?)(-official)?\.(svg|png)$/);
  if (!match) continue;
  const [, slug] = match;
  const input = path.join(source, file);
  const resized = await sharp(input, { density: 72 }).resize(size, size).png().toBuffer();
  const out = path.join(target, `${slug}.webp`);
  await sharp(resized)
    .composite([{ input: mask, blend: "dest-in" }])
    .webp({ quality: 92 })
    .toFile(out);
  console.log(`${out} (${fs.statSync(out).size} bytes)`);
}

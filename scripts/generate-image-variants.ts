// Screenshot variants for srcset: every screenshot in public/assets gets a
// `-<width>w.webp` sibling at 900px and 1200px, each only when narrower than
// the original, so phones and tablets download a fraction of the pixels. Re-run after replacing a
// screenshot:
//   npm run assets:images
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = "public/assets";
const variantWidths = [900, 1200];

for (const file of fs.readdirSync(dir)) {
  if (!/\.(webp|png|jpg)$/.test(file) || file.startsWith("og-") || /-\d+w\./.test(file)) continue;
  const source = path.join(dir, file);
  const { width = 0 } = await sharp(source).metadata();
  for (const variantWidth of variantWidths.filter((variantWidth) => variantWidth < width)) {
    const target = path.join(dir, file.replace(/\.(webp|png|jpg)$/, `-${variantWidth}w.webp`));
    await sharp(source).resize({ width: variantWidth }).webp({ quality: 82 }).toFile(target);
    console.log(`${target} (${fs.statSync(target).size} bytes)`);
  }
}

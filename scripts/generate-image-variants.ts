// Screenshot variants for srcset: every screenshot in public/assets that is
// 1400px or wider gets 900px and 1200px `-<width>w.webp` siblings, so phones
// and tablets download a fraction of the pixels. Re-run after replacing a
// screenshot:
//   npm run assets:images
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = "public/assets";
const variantWidths = [900, 1200];

for (const file of fs.readdirSync(dir)) {
  if (!/\.(webp|png|jpg)$/.test(file) || file.startsWith("og-") || file.includes("-900w.")) continue;
  const source = path.join(dir, file);
  const { width = 0 } = await sharp(source).metadata();
  if (width < 1400) continue;
  for (const variantWidth of variantWidths) {
    const target = path.join(dir, file.replace(/\.(webp|png|jpg)$/, `-${variantWidth}w.webp`));
    await sharp(source).resize({ width: variantWidth }).webp({ quality: 82 }).toFile(target);
    console.log(`${target} (${fs.statSync(target).size} bytes)`);
  }
}

// Screenshot variants for srcset: every screenshot in public/assets that is
// 1400px or wider gets 900px and 1200px `-<width>w.webp` siblings, so phones
// and tablets download a fraction of the pixels; Home's featured captures also
// get the `-detail.webp` crop phones show. Re-run after replacing a
// screenshot:
//   npm run assets:images
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { products } from "../src/content/products";

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

// Phone crops of the Home featured captures (see `featured.detail`).
for (const product of products) {
  const detail = product.featured?.detail;
  if (!detail) continue;
  const source = path.join("public", product.featured!.image.src);
  const target = source.replace(/\.(webp|png|jpg)$/, "-detail.webp");
  await sharp(source)
    .extract({ left: detail.x, top: detail.y, width: detail.width, height: detail.height })
    .webp({ quality: 84 })
    .toFile(target);
  console.log(`${target} (${fs.statSync(target).size} bytes)`);
}

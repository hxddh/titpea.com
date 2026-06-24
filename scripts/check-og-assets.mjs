import path from "node:path";
import sharp from "sharp";
import fs from "node:fs";
import { images, renderOg } from "./generate-og-images.mjs";

const { siteRoutes } = await import(new URL("../src/content/siteModel.ts", import.meta.url));
const assetsDir = new URL("../public", import.meta.url);
const imagesByFile = new Map(images.map((image) => [image.file, image]));
const uniqueImages = [...new Set(siteRoutes.map((route) => route.ogImage))];
const failures = [];

for (const imagePath of uniqueImages) {
  const filePath = path.join(assetsDir.pathname, imagePath);

  if (!fs.existsSync(filePath)) {
    failures.push(`${imagePath}: missing file`);
    continue;
  }

  const metadata = await sharp(filePath).metadata();

  if (metadata.format !== "png") failures.push(`${imagePath}: expected png, got ${metadata.format}`);
  if (metadata.width !== 1200 || metadata.height !== 630) {
    failures.push(`${imagePath}: expected 1200x630, got ${metadata.width}x${metadata.height}`);
  }

  // Detect drift: the committed file must match what the generator produces now.
  const definition = imagesByFile.get(path.basename(imagePath));
  if (!definition) {
    failures.push(`${imagePath}: no generator definition; cannot verify it is up to date`);
    continue;
  }
  const expected = await renderOg(definition);
  const actual = fs.readFileSync(filePath);
  if (!expected.equals(actual)) {
    failures.push(`${imagePath}: out of date — run npm run assets:og and commit the result`);
  }
}

if (failures.length > 0) {
  console.error("OG asset check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`OG asset check passed: ${uniqueImages.length} images verified against the generator`);

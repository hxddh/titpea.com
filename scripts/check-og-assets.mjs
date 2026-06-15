import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const manifest = JSON.parse(fs.readFileSync(new URL("../src/content/siteManifest.json", import.meta.url), "utf8"));
const assetsDir = new URL("../public", import.meta.url);
const uniqueImages = [...new Set(manifest.routes.map((route) => route.ogImage))];
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
}

if (failures.length > 0) {
  console.error("OG asset check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`OG asset check passed: ${uniqueImages.length} images`);

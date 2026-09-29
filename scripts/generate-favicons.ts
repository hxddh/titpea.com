// The site mark (design/brand/titpea-mark.svg) as browser and home-screen icons:
//   public/favicon.svg           — the mark itself
//   public/favicon.ico           — 16, 32 and 48 px PNGs in one ICO
//   public/apple-touch-icon.png  — 180 px on the light page colour (iOS fills
//                                  transparency with black)
//   npm run assets:favicon
import fs from "node:fs";
import sharp from "sharp";

const source = "design/brand/titpea-mark.svg";
const svg = fs.readFileSync(source);
fs.copyFileSync(source, "public/favicon.svg");

const png = (size: number) => sharp(svg, { density: 300 }).resize(size, size).png().toBuffer();

// ICO: a 6-byte header, one 16-byte entry per image, then the PNGs.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, i) => {
  const entry = 6 + 16 * i;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[i].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[i].length;
});
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, ...images]));

const touch = 180;
const inset = Math.round(touch * 0.14);
await sharp({ create: { width: touch, height: touch, channels: 4, background: "#fbfbfd" } })
  .composite([{ input: await png(touch - inset * 2), left: inset, top: inset }])
  .png()
  .toFile("public/apple-touch-icon.png");

for (const file of ["public/favicon.svg", "public/favicon.ico", "public/apple-touch-icon.png"])
  console.log(`${file} (${fs.statSync(file).size} bytes)`);

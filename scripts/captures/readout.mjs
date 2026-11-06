// Readout's site images, cut from the repository's own screenshot gallery
// (docs/screenshots/, real 2x captures on macOS). The gallery places each
// window on a cream backdrop with a drop shadow; the site shows the window
// only, cut 12 px inside its edge, clear of the rounded corners.
//   node scripts/captures/readout.mjs ../readout   (a checkout at the release, e.g. v5.2.0)
// Bounds were measured on the v5.2.0 gallery; a new gallery may place the
// window elsewhere: check the corners of the written files before committing.
import path from "node:path";
import sharp from "sharp";

const repo = path.resolve(process.argv[2] ?? "../readout");
const shots = path.join(repo, "docs/screenshots");
// [gallery file, site file, left, top, width, height]
const crops = [
  ["01-live-reading-en", "readout-live-en", 135, 237, 2489, 1328],
  ["05-chinese-reader-zh", "readout-live-zh", 135, 237, 2489, 1328],
  ["02-what-changed-en", "readout-changed-en", 135, 237, 2489, 1328],
  ["04-tabs-en", "readout-tabs-en", 136, 255, 2488, 1291],
  ["06-dark-diagram-en", "readout-dark-en", 137, 167, 2487, 1469],
  // Home's card: the full window height from the left edge, at the card's 16:11.
  ["01-live-reading-en", "readout-featured-en", 135, 237, 1932, 1328],
  ["05-chinese-reader-zh", "readout-featured-zh", 135, 237, 1932, 1328],
];

for (const [from, to, left, top, width, height] of crops) {
  const info = await sharp(path.join(shots, `${from}.png`))
    .extract({ left, top, width, height })
    .webp({ quality: 82 })
    .toFile(`public/assets/${to}.webp`);
  console.log(`public/assets/${to}.webp ${info.width}×${info.height}`);
}
console.log("Then: npm run assets:images");

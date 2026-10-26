// Cuts the Chinese display face to the characters the site's Chinese display
// lines use, and writes it under a content-hash name.
//   npm run build && npm run assets:fonts && npm run build
// Source: Noto Serif SC SemiBold (SIL OFL 1.1) from notofonts/noto-cjk at a
// pinned commit, downloaded once into node_modules/.cache. The characters
// covered are written to design/fonts/zh-display-chars.txt, which check:dist
// compares with the built headings.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import subsetFont from "subset-font";
import { ui } from "../src/content/site.ts";
import { needsSerifSc, zhDisplayChars } from "./zh-display-text.mjs";

const commit = "f8d157532fbfaeda587e826d4cd5b21a49186f7c";
const sourceUrl = `https://raw.githubusercontent.com/notofonts/noto-cjk/${commit}/Serif/SubsetOTF/SC/NotoSerifSC-SemiBold.otf`;
const sourceSha256 = "517d9736136b3b4e9aea742a7e1acda1922aea91a4425bd8db79281934055bf5";
const cache = "node_modules/.cache/titpea-fonts/NotoSerifSC-SemiBold.otf";
const fontsCss = "src/styles/fonts.css";
const charsFile = "design/fonts/zh-display-chars.txt";
const prefix = "noto-serif-sc-display.";

if (!fs.existsSync("dist")) {
  console.error("dist/ is missing — run npm run build first (the subset is cut from the built headings)");
  process.exit(1);
}

if (!fs.existsSync(cache)) {
  console.log(`Downloading ${sourceUrl}`);
  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error(`${sourceUrl}: HTTP ${response.status}`);
  fs.mkdirSync(path.dirname(cache), { recursive: true });
  fs.writeFileSync(cache, Buffer.from(await response.arrayBuffer()));
}
const source = fs.readFileSync(cache);
const digest = crypto.createHash("sha256").update(source).digest("hex");
if (digest !== sourceSha256) throw new Error(`${cache}: sha256 ${digest}, expected ${sourceSha256}`);

// Headings that only appear with synced release data (the "What's new" h2
// needs release notes, which only CI's sync fetches), so a local build may not
// contain them. Their fixed words are added explicitly.
const conditionalLines = [ui.zh.whatsNew.replace("{version}", "")];
const chars = [...new Set([...zhDisplayChars(), ...conditionalLines.join("").split("").filter(needsSerifSc)])].sort();
const subset = await subsetFont(source, chars.join(""), {
  targetFormat: "woff2",
  // Display sizes need no hinting; vertical and other alternate glyphs that
  // GSUB could reach are left out (headings are set horizontally).
  noHinting: true,
  noLayoutClosure: true,
  preserveNameIds: [0, 1, 2, 3, 4, 5, 6, 13, 14],
});
const hash = crypto.createHash("sha256").update(subset).digest("hex").slice(0, 8);
const name = `${prefix}${hash}.woff2`;

for (const file of fs.readdirSync("public/fonts")) {
  if (file.startsWith(prefix) && file !== name) fs.rmSync(path.join("public/fonts", file));
}
fs.writeFileSync(path.join("public/fonts", name), subset);

const css = fs.readFileSync(fontsCss, "utf8");
const updated = css.replace(/\/fonts\/noto-serif-sc-display\.[0-9a-f]+\.woff2/, `/fonts/${name}`);
if (updated === css && !css.includes(`/fonts/${name}`))
  throw new Error(`${fontsCss}: no Noto Serif SC @font-face to update`);
fs.writeFileSync(fontsCss, updated);

fs.mkdirSync(path.dirname(charsFile), { recursive: true });
fs.writeFileSync(charsFile, `${chars.join("")}\n`);
console.log(`${name}: ${chars.length} characters, ${(subset.length / 1024).toFixed(1)} KB`);

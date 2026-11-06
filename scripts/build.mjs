// npm run build: build the site, recut the Chinese display font to the
// characters the built headings use (scripts/subset-zh-display-font.mjs), and
// build again only when that set changed, so a new heading never ships with
// characters the subset lacks and nobody has to remember the second pass.
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const charsFile = "design/fonts/zh-display-chars.txt";
const run = (command, args) => execFileSync(command, args, { stdio: "inherit" });
const read = () => (fs.existsSync(charsFile) ? fs.readFileSync(charsFile, "utf8") : "");

run("npx", ["astro", "build"]);
const before = read();
run("npx", ["tsx", "scripts/subset-zh-display-font.mjs"]);
if (read() !== before) {
  console.log("Chinese display font recut; building again with the new subset.");
  run("npx", ["astro", "build"]);
}

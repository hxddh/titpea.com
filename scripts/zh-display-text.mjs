// The Chinese display lines in the built site: every h1, h2 and closing-band
// name on a Chinese page. The display font subset (npm run assets:fonts) is
// cut to these characters, and check:dist fails when one is missing from it.
import fs from "node:fs";
import path from "node:path";

const entities = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", nbsp: " " };
const decode = (value) =>
  value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z#0-9]+);/gi, (match, name) => entities[name] ?? match);

/** Text of the display lines in one page, or "" for a page that is not Chinese. */
export function zhDisplayText(html) {
  if (!/<html[^>]*\blang="zh/.test(html)) return "";
  const lines = [
    ...html.matchAll(/<h([12])\b[^>]*>([\s\S]*?)<\/h\1>/g),
    ...html.matchAll(/<p class="final-cta-name"[^>]*>([\s\S]*?)<\/p>/g),
  ];
  return lines.map((match) => decode(match[match.length - 1].replace(/<[^>]+>/g, ""))).join("\n");
}

/** Every character the font must carry: the non-Latin ones (Fraunces sets the Latin). */
export const needsSerifSc = (char) => char.codePointAt(0) > 0x2000 && !/\s/.test(char);

export function zhDisplayChars(distDir = "dist") {
  const chars = new Set();
  for (const file of fs.readdirSync(distDir, { recursive: true })) {
    if (typeof file !== "string" || !file.endsWith(".html")) continue;
    for (const char of zhDisplayText(fs.readFileSync(path.join(distDir, file), "utf8"))) {
      if (needsSerifSc(char)) chars.add(char);
    }
  }
  return [...chars].sort();
}

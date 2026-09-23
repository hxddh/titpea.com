// Render the 1200×630 share images from the same copy the pages use:
// a centered headline over the hero wash, the product name above it, and
// the catalog line below. `npm run assets:og [slug ...]` rewrites them.
import fs from "node:fs/promises";
import sharp from "sharp";
import { products } from "../src/content/products/index.ts";
import { site, ui } from "../src/content/site.ts";

type Card = { file: string; eyebrow: string; title: string; body: string };

export const cards: Card[] = [
  { file: site.og.home, eyebrow: site.brand, title: ui.en.homeTitle, body: ui.en.homeLead },
  { file: site.og.about, eyebrow: ui.en.aboutTitle, title: ui.en.aboutHeadline, body: ui.en.aboutLead },
  ...products.map((product) => ({
    file: product.og,
    eyebrow: product.en.title,
    title: product.en.headline,
    body: product.en.catalog.text,
  })),
];

const escape = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

/** Greedy word wrap; resvg has no text layout of its own. */
function wrap(text: string, maxChars: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && `${line} ${word}`.length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const sans = "-apple-system, 'SF Pro Display', Inter, 'Helvetica Neue', Arial, sans-serif";

function svg({ eyebrow, title, body }: Card) {
  const titleLines = wrap(title, 26);
  const bodyLines = wrap(body, 52).slice(0, 2);
  const titleSize = titleLines.length > 1 ? 72 : 84;
  const titleTop = 300 - ((titleLines.length - 1) * titleSize * 1.04) / 2;
  const bodyTop = titleTop + (titleLines.length - 1) * titleSize * 1.04 + 82;
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="w1" cx="22%" cy="42%" r="40%"><stop offset="0" stop-color="#5aa0ff" stop-opacity=".30"/><stop offset="1" stop-color="#5aa0ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="w2" cx="80%" cy="36%" r="38%"><stop offset="0" stop-color="#ff96be" stop-opacity=".24"/><stop offset="1" stop-color="#ff96be" stop-opacity="0"/></radialGradient>
    <radialGradient id="w3" cx="55%" cy="86%" r="44%"><stop offset="0" stop-color="#78dcc8" stop-opacity=".24"/><stop offset="1" stop-color="#78dcc8" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#fbfbfd"/>
  <rect width="1200" height="630" fill="url(#w1)"/>
  <rect width="1200" height="630" fill="url(#w2)"/>
  <rect width="1200" height="630" fill="url(#w3)"/>
  <rect x="470" y="48" width="260" height="52" rx="26" fill="#ffffff" fill-opacity=".72" stroke="#000000" stroke-opacity=".08"/>
  <text x="600" y="82" text-anchor="middle" fill="#1d1d1f" font-family="${sans}" font-size="24" font-weight="600">titpea.com</text>
  <text x="600" y="${titleTop - 92}" text-anchor="middle" fill="#6e6e73" font-family="${sans}" font-size="30" font-weight="600">${escape(eyebrow)}</text>
  <text text-anchor="middle" fill="#1d1d1f" font-family="${sans}" font-size="${titleSize}" font-weight="700" letter-spacing="-2">${titleLines
    .map((line, index) => `<tspan x="600" y="${titleTop + index * titleSize * 1.04}">${escape(line)}</tspan>`)
    .join("")}</text>
  <text text-anchor="middle" fill="#6e6e73" font-family="${sans}" font-size="30">${bodyLines
    .map((line, index) => `<tspan x="600" y="${bodyTop + index * 42}">${escape(line)}</tspan>`)
    .join("")}</text>
  <rect x="540" y="560" width="120" height="6" rx="3" fill="#0071e3"/>
</svg>`;
}

export const renderOg = (card: Card) =>
  sharp(Buffer.from(svg(card)))
    .png()
    .toBuffer();

const requested = new Set(process.argv.slice(2));
const selected =
  requested.size > 0 ? cards.filter((card) => [...requested].some((name) => card.file.includes(name))) : cards;
for (const card of selected) {
  await fs.writeFile(new URL(`../public${card.file}`, import.meta.url), await renderOg(card));
  console.log(`generated ${card.file}`);
}

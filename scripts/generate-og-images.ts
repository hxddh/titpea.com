// Render the 1200×630 share images from the same copy and assets the pages
// use. A product with a screenshot gets a split card: icon, name, headline,
// and catalog line on the left, the screenshot bleeding off the right edge.
// Other products get a centered card with their icon when they have one;
// Home shows the row of app icons. `npm run assets:og [slug ...]` rewrites them
// and records their input fingerprints in design/og-manifest.json (og-cards.ts).
import fs from "node:fs/promises";
import sharp from "sharp";
import { cards, ogFingerprint, ogManifestPath, readOgManifest, type Card } from "./og-cards.ts";

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
const W = 1200;
const H = 630;

const wash = `<defs>
    <radialGradient id="w1" cx="22%" cy="42%" r="40%"><stop offset="0" stop-color="#5aa0ff" stop-opacity=".30"/><stop offset="1" stop-color="#5aa0ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="w2" cx="80%" cy="36%" r="38%"><stop offset="0" stop-color="#ff96be" stop-opacity=".24"/><stop offset="1" stop-color="#ff96be" stop-opacity="0"/></radialGradient>
    <radialGradient id="w3" cx="55%" cy="86%" r="44%"><stop offset="0" stop-color="#78dcc8" stop-opacity=".24"/><stop offset="1" stop-color="#78dcc8" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="22"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#fbfbfd"/>
  <rect width="${W}" height="${H}" fill="url(#w1)"/>
  <rect width="${W}" height="${H}" fill="url(#w2)"/>
  <rect width="${W}" height="${H}" fill="url(#w3)"/>`;

const textLines = (lines: string[], x: number, top: number, step: number, anchor: string) =>
  lines.map((line, index) => `<tspan x="${x}" y="${top + index * step}">${escape(line)}</tspan>`).join("");

async function roundedImage(file: string, width: number, height: number, radius: number) {
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/></svg>`,
  );
  const resized = await sharp(`public${file}`)
    .resize(width, height, { fit: "cover", position: "top" })
    .png()
    .toBuffer();
  return sharp(resized)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

/** Split card: copy on the left, the screenshot bleeding off the right edge. */
async function splitCard(card: Card) {
  const meta = await sharp(`public${card.screenshot!}`).metadata();
  const shotWidth = 700;
  const shotHeight = Math.round((shotWidth * (meta.height ?? 1)) / (meta.width ?? 1));
  const shotX = 590;
  const shotY = 118;
  const visibleWidth = W - shotX;
  const visibleHeight = Math.min(shotHeight, H - shotY);
  const hasIcon = Boolean(card.icons?.length);
  const titleLines = wrap(card.title, 15).slice(0, 3);
  const bodyLines = wrap(card.body, 30).slice(0, 3);
  const eyebrowY = hasIcon ? 250 : 170;
  const titleTop = eyebrowY + 76;
  const bodyTop = titleTop + (titleLines.length - 1) * 64 + 64;
  const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${wash}
  <rect x="${shotX + 20}" y="${shotY + 34}" width="${shotWidth - 40}" height="${shotHeight}" rx="18" fill="#141e3c" fill-opacity=".30" filter="url(#shadow)"/>
  <text x="72" y="${eyebrowY}" fill="#6e6e73" font-family="${sans}" font-size="30" font-weight="600">${escape(card.eyebrow)}</text>
  <text fill="#1d1d1f" font-family="${sans}" font-size="62" font-weight="700" letter-spacing="-1.6">${textLines(titleLines, 72, titleTop, 64, "start")}</text>
  <text fill="#6e6e73" font-family="${sans}" font-size="26">${textLines(bodyLines, 72, bodyTop, 36, "start")}</text>
  <text x="72" y="578" fill="#1d1d1f" font-family="${sans}" font-size="22" font-weight="600">titpea.com</text>
  <rect x="72" y="592" width="64" height="5" rx="2.5" fill="#0071e3"/>
</svg>`;
  const shot = await roundedImage(card.screenshot!, shotWidth, shotHeight, 18);
  const visible = await sharp(shot).extract({ left: 0, top: 0, width: visibleWidth, height: visibleHeight }).toBuffer();
  const layers: sharp.OverlayOptions[] = [{ input: visible, left: shotX, top: shotY }];
  if (hasIcon) layers.push({ input: await roundedImage(card.icons![0], 96, 96, 22), left: 72, top: 96 });
  return sharp(Buffer.from(svg)).composite(layers).png().toBuffer();
}

/** Centered card: icons (if any), eyebrow, headline, and body over the wash. */
async function centeredCard(card: Card) {
  const icons = card.icons ?? [];
  const iconGap = 16;
  // A row of icons fits the card with 48px to spare on each side; never wider than 76px.
  const iconSize =
    icons.length > 1 ? Math.min(76, Math.floor((1200 - 96 - (icons.length - 1) * iconGap) / icons.length)) : 96;
  const titleLines = wrap(card.title, 26);
  const bodyLines = wrap(card.body, 52).slice(0, 2);
  const titleSize = titleLines.length > 1 ? 72 : 84;
  const shift = icons.length ? 58 : 0;
  const titleTop = 300 + shift - ((titleLines.length - 1) * titleSize * 1.04) / 2;
  const bodyTop = titleTop + (titleLines.length - 1) * titleSize * 1.04 + 78;
  const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${wash}
  ${
    icons.length
      ? ""
      : `<rect x="470" y="48" width="260" height="52" rx="26" fill="#ffffff" fill-opacity=".72" stroke="#000000" stroke-opacity=".08"/>
  <text x="600" y="82" text-anchor="middle" fill="#1d1d1f" font-family="${sans}" font-size="24" font-weight="600">titpea.com</text>`
  }
  <text x="600" y="${titleTop - 88}" text-anchor="middle" fill="#6e6e73" font-family="${sans}" font-size="30" font-weight="600">${escape(card.eyebrow)}</text>
  <text text-anchor="middle" fill="#1d1d1f" font-family="${sans}" font-size="${titleSize}" font-weight="700" letter-spacing="-2">${textLines(titleLines, 600, titleTop, titleSize * 1.04, "middle")}</text>
  <text text-anchor="middle" fill="#6e6e73" font-family="${sans}" font-size="30">${textLines(bodyLines, 600, bodyTop, 42, "middle")}</text>
  ${icons.length ? `<text x="600" y="586" text-anchor="middle" fill="#1d1d1f" font-family="${sans}" font-size="22" font-weight="600">titpea.com</text>` : `<rect x="540" y="560" width="120" height="6" rx="3" fill="#0071e3"/>`}
</svg>`;
  const rowWidth = icons.length * iconSize + (icons.length - 1) * iconGap;
  const layers = await Promise.all(
    icons.map(async (icon, index) => ({
      input: await roundedImage(icon, iconSize, iconSize, Math.round(iconSize * 0.23)),
      left: Math.round(600 - rowWidth / 2 + index * (iconSize + iconGap)),
      top: 52,
    })),
  );
  return sharp(Buffer.from(svg)).composite(layers).png().toBuffer();
}

export const renderOg = (card: Card) => (card.screenshot ? splitCard(card) : centeredCard(card));

const requested = new Set(process.argv.slice(2));
const selected =
  requested.size > 0
    ? cards.filter((card) => [...requested].some((name) => card.name === name || card.file.includes(name)))
    : cards;
const manifest = readOgManifest();
for (const card of selected) {
  const png = await sharp(await renderOg(card))
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.writeFile(new URL(`../public${card.file}`, import.meta.url), png);
  manifest[card.file] = ogFingerprint(card);
  console.log(`generated ${card.file}`);
}
// Keyed by image file, in site order; npm run check compares it with the cards.
const ordered = Object.fromEntries(
  cards.filter((card) => manifest[card.file]).map((card) => [card.file, manifest[card.file]]),
);
await fs.writeFile(ogManifestPath, `${JSON.stringify(ordered, null, 2)}\n`);

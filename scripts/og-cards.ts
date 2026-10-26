// What each share image shows, and a fingerprint of everything it is drawn
// from. `npm run assets:og` renders the cards and records their fingerprints
// in design/og-manifest.json; `npm run check` fails when a card's inputs no
// longer match, so a changed headline, icon or hero screenshot cannot ship
// with a stale share image.
import crypto from "node:crypto";
import fs from "node:fs";
import { products } from "../src/content/products/index.ts";
import { site, ui } from "../src/content/site.ts";
import { featuredSrc, type Product } from "../src/content/schema.ts";

/** Bump when the drawing in generate-og-images.ts changes, so every card is redrawn. */
export const OG_GENERATOR_VERSION = 1;

export const ogManifestPath = new URL("../design/og-manifest.json", import.meta.url);

export type Card = {
  /** The product's slug, or "home" / "about". */
  name: string;
  file: string;
  eyebrow: string;
  title: string;
  body: string;
  icons?: string[];
  screenshot?: string;
};

const heroScreenshot = (product: Product) => {
  const visual = product.en.visual;
  if (visual.kind === "screenshot") return visual.image.src;
  if (visual.kind === "clockScreenshots") return visual.images[0]?.src;
  return (product.featured && featuredSrc(product.featured, "en")) ?? product.en.showcases?.[0]?.src;
};

export const cards: Card[] = [
  {
    name: "home",
    file: site.og.home,
    eyebrow: site.brand,
    title: ui.en.homeTitle,
    body: ui.en.homeLead,
    icons: products.flatMap((product) => (product.icon ? [product.icon] : [])),
  },
  {
    name: "about",
    file: site.og.about,
    eyebrow: ui.en.aboutEyebrow,
    title: ui.en.aboutHeadline.replace("{count}", String(products.length)),
    body: ui.en.aboutLead,
    icons: products.flatMap((product) => (product.icon ? [product.icon] : [])),
  },
  ...products.map((product) => ({
    name: product.slug,
    file: product.og,
    eyebrow: product.en.title,
    title: product.en.headline,
    body: product.en.catalog.text,
    icons: product.icon ? [product.icon] : undefined,
    screenshot: heroScreenshot(product),
  })),
];

const sha256 = (data: string | Buffer) => crypto.createHash("sha256").update(data).digest("hex");

/** The card's text, the bytes of every image it draws, and the generator version. */
export function ogFingerprint(card: Card): string {
  const images = [...(card.icons ?? []), ...(card.screenshot ? [card.screenshot] : [])].map((file) => [
    file,
    sha256(fs.readFileSync(new URL(`../public${file}`, import.meta.url))),
  ]);
  const { name, ...drawn } = card;
  return sha256(JSON.stringify({ version: OG_GENERATOR_VERSION, card: drawn, images }));
}

export const readOgManifest = (): Record<string, string> =>
  fs.existsSync(ogManifestPath) ? JSON.parse(fs.readFileSync(ogManifestPath, "utf8")) : {};

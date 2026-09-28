// Source checks: product files, site copy, releases, share images, and the
// style rules DESIGN.md makes measurable. Runs before the build.
//   npm run check
import fs from "node:fs";
import sharp from "sharp";
import releases from "../src/content/releases.json" with { type: "json" };
import { products } from "../src/content/products/index.ts";
import { locales, type Locale, type Product, type ProductCopy } from "../src/content/schema.ts";
import { site, ui } from "../src/content/site.ts";
import { allPages, siteRoutes } from "../src/lib/pages.ts";
import { sectionIndexPolicy } from "../src/scripts/section-index-policy.ts";
import { copyIssues } from "./copy-rules.mjs";

const failures: string[] = [];
const fail = (message: string) => failures.push(message);
const read = (path: string) => fs.readFileSync(path, "utf8");
const norm = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

/* ---------- Registry ---------- */

const files = fs
  .readdirSync("src/content/products")
  .filter((file) => file.endsWith(".ts") && file !== "index.ts")
  .map((file) => file.replace(/\.ts$/, ""));
const slugs = products.map((product) => product.slug);
if (new Set(slugs).size !== slugs.length) fail("products/index.ts lists a product twice");
for (const file of files) if (!slugs.includes(file)) fail(`products/${file}.ts is not listed in products/index.ts`);
for (const product of products) {
  if (!files.includes(product.slug)) fail(`${product.slug}: slug must match its file name`);
}
const featuredCount = products.filter((product) => product.featured).length;
if (featuredCount < 2 || featuredCount > 3) fail("two or three products lead Home as featured");

/* ---------- Releases ---------- */

const releaseTags = releases as Record<string, { repo: string; version: string }>;
for (const [slug, entry] of Object.entries(releaseTags)) {
  const product = products.find((item) => item.slug === slug);
  if (!product) fail(`releases.json: ${slug} is not a product`);
  else if (product.repo !== entry.repo)
    fail(`releases.json: ${slug} repo ${entry.repo} differs from product ${product.repo}`);
}
for (const product of products) {
  const usesVersion = JSON.stringify(product).includes("{version}");
  if (usesVersion && !releaseTags[product.slug]) fail(`${product.slug}: uses {version} but has no releases.json entry`);
  if (product.repo && !releaseTags[product.slug])
    fail(`${product.slug}: repo ${product.repo} has no releases.json entry`);
}

/* ---------- Copy ---------- */

const genericHeadings = new Set(
  [
    "learn more",
    "details",
    "overview",
    "on this page",
    "questions & how-to",
    "fit and limits",
    "local by design",
    "use it when",
    "current platforms",
    "out of scope",
    "what it isn't",
    "what it is not",
    "private by design",
    "更多",
    "概览",
    "页面内容",
    "常见问题与用法",
    "适用与边界",
    "本地优先",
    "什么时候用",
    "当前支持范围",
    "本地运行",
    "明确不做",
    "它不是什么",
  ].map(norm),
);
const maxCards = 6;
const headlineLimit: Record<Locale, number> = { en: 24, zh: 18 };
const leadLimit: Record<Locale, number> = { en: 220, zh: 110 };

/** Every visible string in a product's copy, without links, image paths, or commands. */
function visibleStrings(value: unknown, key = ""): string[] {
  if (typeof value === "string")
    return ["href", "src", "command", "capturedOutput", "className", "kind", "id", "frame"].includes(key)
      ? []
      : [value];
  if (Array.isArray(value)) return value.flatMap((item) => visibleStrings(item, key));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => visibleStrings(v, k));
  return [];
}

function checkCopy(product: Product, locale: Locale, copy: ProductCopy) {
  const at = `${product.slug} (${locale})`;
  const claim = copy.headline.replace(/[.。]$/, "");
  if (claim.length > headlineLimit[locale]) {
    fail(`${at}: headline "${copy.headline}" is ${claim.length} characters (max ${headlineLimit[locale]})`);
  }
  if (norm(copy.headline) === norm(copy.title)) fail(`${at}: the h1 is the claim, not the product name`);

  // Omni voice: short declarative claims, fragment cards, questions in the FAQ.
  if (locale === "en" && !copy.headline.endsWith(".")) fail(`${at}: the English headline ends with a period`);
  if (locale === "zh" && /[。.！!]$/.test(copy.headline))
    fail(`${at}: the Chinese headline has no closing punctuation`);
  const words = (text: string) => text.trim().split(/\s+/).length;
  // CJK characters count one each; a Latin name or number counts as one unit.
  const cjk = (text: string) =>
    text.replace(/[A-Za-z0-9][\w.+-]*/g, "x").replace(/[\s，。、；：！？（）“”]/g, "").length;
  const tooLong = (text: string, en: number, zh: number) => (locale === "en" ? words(text) > en : cjk(text) > zh);
  if (tooLong(copy.lead, 14, 36)) fail(`${at}: lead is not 2–3 short fragments: "${copy.lead}"`);
  for (const section of copy.sections) {
    if (product.sectionIndex && !section.nav) fail(`${at}: section "${section.id}" needs a short nav label`);
    if (section.nav && tooLong(section.nav, 4, 8)) fail(`${at}: nav label "${section.nav}" is longer than 4 words`);
    if (section.kind === "faq") {
      if (section.label !== (locale === "en" ? "FAQ" : "常见问题")) fail(`${at}: the FAQ heading is FAQ / 常见问题`);
      for (const item of section.items) {
        if (!/[?？]$/.test(item.title)) fail(`${at}: FAQ entry is not a question: "${item.title}"`);
      }
    }
    if (section.kind === "cards") {
      for (const item of section.items) {
        if (tooLong(item.title, 5, 10)) fail(`${at}: card title is long: "${item.title}"`);
        if (tooLong(item.body, 12, 24)) fail(`${at}: card body is not a short fragment: "${item.body}"`);
      }
    }
  }
  // Simplicity: one page carries at most six cards, feature cards and numbered
  // steps together, and a card body adds to its title instead of repeating it.
  const cards = copy.sections.reduce(
    (count, section) =>
      count + (section.kind === "cards" ? section.items.length : section.kind === "flow" ? section.steps.length : 0),
    0,
  );
  if (cards > maxCards) fail(`${at}: ${cards} cards on one page (max ${maxCards})`);
  for (const section of copy.sections) {
    if (section.kind !== "cards") continue;
    for (const item of section.items) {
      if (norm(item.body).startsWith(norm(item.title)))
        fail(`${at}: card "${item.title}" repeats its title in the body`);
    }
  }
  if (copy.lead.length > leadLimit[locale])
    fail(`${at}: lead is ${copy.lead.length} characters (max ${leadLimit[locale]})`);
  if (copy.primaryCta.href === copy.secondaryCta.href)
    fail(`${at}: primary and secondary actions go to the same place`);
  if (copy.sections.length === 0) fail(`${at}: needs at least one section`);
  const ids = copy.sections.map((section) => section.id);
  if (new Set(ids).size !== ids.length) fail(`${at}: duplicate section ids ${ids.join(", ")}`);
  for (const section of copy.sections) {
    const heading = "title" in section ? section.title : section.label;
    if (genericHeadings.has(norm(heading))) fail(`${at}: generic section heading "${heading}"`);
    if (norm(heading) === norm(copy.headline)) fail(`${at}: section "${section.id}" restates the headline`);
    if ("items" in section && section.kind !== "cases") {
      for (const item of section.items) {
        if (typeof item === "object" && "title" in item && genericHeadings.has(norm(item.title))) {
          fail(`${at}: generic card title "${item.title}"`);
        }
      }
    }
  }
  if (product.schema.category === "BrowserApplication") {
    const privacy =
      locale === "zh" ? /声明不收集数据|不使用分析服务|没有分析服务|无分析服务/ : /no data collection|analytics/i;
    if (!privacy.test(visibleStrings(copy).join("\n"))) fail(`${at}: browser extension must state its data posture`);
  }
  if (locale === "zh") for (const issue of copyIssues(visibleStrings(copy))) fail(`${at}: ${issue}`);
}

const shape = (copy: ProductCopy) =>
  JSON.stringify({
    sections: copy.sections.map((section) => [section.kind, section.id, "items" in section ? section.items.length : 0]),
    showcases: copy.showcases?.length ?? 0,
    stats: copy.stats?.items.length ?? 0,
    commands: copy.commands?.items.map((item) => item.command) ?? [],
    visual: copy.visual.kind,
  });

for (const product of products) {
  for (const locale of locales) checkCopy(product, locale, product[locale]);
  if (shape(product.en) !== shape(product.zh)) fail(`${product.slug}: English and Chinese pages differ in structure`);
}

for (const issue of copyIssues(visibleStrings(ui.zh))) fail(`site copy (zh): ${issue}`);
for (const key of Object.keys(ui.en)) if (!(key in ui.zh)) fail(`site copy: "${key}" is missing in zh`);

/* ---------- Pages and routes ---------- */

const paths = new Set(siteRoutes.map((route) => route.path));
for (const page of allPages) {
  const { seo } = page;
  if (seo.title.length < 3 || seo.title.length > 70) fail(`${page.path}: title must be 3–70 characters`);
  const minDescription = page.locale === "zh" ? 18 : 50;
  if (seo.description.length < minDescription || seo.description.length > 180) {
    fail(`${page.path}: description must be ${minDescription}–180 characters`);
  }
  if (!paths.has(page.alternatePath)) fail(`${page.path}: alternate ${page.alternatePath} is not a route`);
  if (!seo.canonicalUrl.startsWith(site.baseUrl)) fail(`${page.path}: canonical URL must be absolute`);
}

/* ---------- App icons ---------- */

// Every product shows an icon wherever products appear together; a missing
// one breaks the row. Sources live in design/icons (npm run assets:icons).
for (const product of products) {
  if (!product.icon) {
    fail(`${product.slug}: missing icon — add design/icons/${product.slug}.svg and run npm run assets:icons`);
    continue;
  }
  const file = `public${product.icon}`;
  if (!fs.existsSync(file)) {
    fail(`${product.icon}: missing — run npm run assets:icons`);
    continue;
  }
  const meta = await sharp(file).metadata();
  if (meta.width !== meta.height || (meta.width ?? 0) < 160) {
    fail(`${product.icon}: must be square and at least 160px, got ${meta.width}×${meta.height}`);
  }
}

/* ---------- Share images ---------- */

for (const image of new Set(siteRoutes.map((route) => route.ogImage))) {
  const file = `public${image}`;
  if (!fs.existsSync(file)) {
    fail(`${image}: missing — run npm run assets:og`);
    continue;
  }
  const meta = await sharp(file).metadata();
  if (meta.format !== "png" || meta.width !== 1200 || meta.height !== 630) {
    fail(`${image}: must be a 1200×630 PNG, got ${meta.format} ${meta.width}×${meta.height}`);
  }
}

/* ---------- Style ---------- */

const tokens = read("src/styles/tokens.css");
const defined = new Set([...tokens.matchAll(/(--[a-z0-9-]+):/g)].map((match) => match[1]));
const styleFiles = fs.readdirSync("src/styles").map((file) => `src/styles/${file}`);
for (const file of styleFiles) {
  const css = read(file);
  for (const match of css.matchAll(/var\((--[a-z0-9-]+)/g)) {
    if (!defined.has(match[1]) && !/--stat-columns/.test(match[1])) fail(`${file}: ${match[1]} is not a token`);
  }
  if (/Noto Sans CJK|Source Han|LXGW|Sarasa|WenQuanYi/i.test(css) && file !== "src/styles/tokens.css") {
    fail(`${file}: CJK text uses the system face; do not load a CJK webfont`);
  }
}

// Depth is a token decision: page styles may use shadow, blur, and the wash
// only through tokens, so light and dark stay in step.
for (const file of ["base.css", "chrome.css", "pages.css", "product.css"].map((name) => `src/styles/${name}`)) {
  const lines = read(file).split("\n");
  lines.forEach((line, index) => {
    const declaration = /^\s*(box-shadow|text-shadow|backdrop-filter|-webkit-backdrop-filter|filter)\s*:/.exec(line);
    if (declaration) {
      let value = line.slice(line.indexOf(":") + 1);
      for (let next = index + 1; !value.includes(";") && next < lines.length; next += 1) value += lines[next];
      if (/rgba?\(|#[0-9a-f]{3,8}\b/i.test(value)) fail(`${file}:${index + 1}: raw color in ${declaration[1]}`);
    }
    if (/(linear|radial|conic)-gradient/.test(line) && !/var\(--wash-|mask-image|#000/.test(line)) {
      fail(`${file}:${index + 1}: gradient outside the hero wash`);
    }
  });
}

const base = read("src/styles/base.css");
for (const selector of [".about-hero h1", ".home-hero h1", ".product-hero h1", ".lead"]) {
  if (!base.includes(`:lang(zh) ${selector}`)) fail(`base.css: missing :lang(zh) rule for ${selector}`);
}
if (!/font-family:\s*Inter;/.test(read("src/styles/fonts.css"))) fail("fonts.css must declare Inter for Latin text");

const tokenPx = (name: string) => Number(tokens.match(new RegExp(`${name}:\\s*(\\d+)px`))?.[1]);
if (tokenPx("--section-index-sticky-top") !== sectionIndexPolicy.stickyTopPx) {
  fail("--section-index-sticky-top must match sectionIndexPolicy.stickyTopPx");
}
if (tokenPx("--section-index-desktop-scroll-margin") !== sectionIndexPolicy.desktopScrollMarginPx) {
  fail("--section-index-desktop-scroll-margin must match sectionIndexPolicy.desktopScrollMarginPx");
}
if (tokenPx("--section-index-mobile-scroll-margin") !== sectionIndexPolicy.mobileScrollMarginPx) {
  fail("--section-index-mobile-scroll-margin must match sectionIndexPolicy.mobileScrollMarginPx");
}

/* ---------- Report ---------- */

if (failures.length > 0) {
  console.error(`Check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Check passed: ${products.length} products, ${allPages.length} pages`);

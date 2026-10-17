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
import { copyIssues, enCopyIssues } from "./copy-rules.mjs";

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
const featuredOrder = products.flatMap((product) => (product.featured ? [product.featured.order] : [])).sort();
if (featuredOrder.some((order, index) => order !== index + 1)) fail("featured rows are ordered 1, 2, 3 without gaps");

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
    return [
      "href",
      "src",
      "command",
      "capturedOutput",
      "asOf",
      "className",
      "kind",
      "id",
      "frame",
      "zone",
      "country",
      "fen",
      "from",
      "to",
      "san",
    ].includes(key)
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
    if (section.kind === "data") {
      if (section.items.length < 2 || section.items.length > 3)
        fail(`${at}: the data section says two or three things`);
      for (const item of section.items) {
        if (tooLong(item, 22, 48)) fail(`${at}: data sentence is long: "${item}"`);
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
  for (const issue of enCopyIssues(visibleStrings(copy))) fail(`${at}: ${issue}`);
}

const shape = (copy: ProductCopy) =>
  JSON.stringify({
    sections: copy.sections.map((section) => [section.kind, section.id, "items" in section ? section.items.length : 0]),
    // A demo runs the same thing in both languages: the same zones, or the same position and line.
    demos: copy.sections.flatMap((section) =>
      section.kind !== "demo"
        ? []
        : section.demo.kind === "worldClock"
          ? [[section.demo.kind, ...section.demo.cities.map((city) => city.zone)]]
          : section.demo.kind === "chessPuzzle"
            ? [[section.demo.kind, section.demo.fen, ...section.demo.line.map((move) => move.from + move.to)]]
            : [
                [
                  section.demo.kind,
                  ...[section.demo.blocks.length, ...section.demo.writes.map((write) => write.after)].map(String),
                ],
              ],
    ),
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
for (const locale of locales)
  for (const issue of enCopyIssues(visibleStrings(ui[locale]))) fail(`site copy (${locale}): ${issue}`);
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

/* ---------- Product images ---------- */

// Every screenshot, showcase, featured photograph, demo fallback and
// recording a product names must exist, and an image's declared width and
// height (which size the frame and the srcset) must be the file's own.
type ImageRef = { at: string; src: string; width?: number; height?: number };

function productImages(value: unknown, at: string): ImageRef[] {
  if (Array.isArray(value)) return value.flatMap((item, index) => productImages(item, `${at}[${index}]`));
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  const refs: ImageRef[] = [];
  const size = {
    width: typeof record.width === "number" ? record.width : undefined,
    height: typeof record.height === "number" ? record.height : undefined,
  };
  if (typeof record.src === "string") refs.push({ at, src: record.src, ...size });
  // A featured photograph may carry one capture per locale.
  if (record.src && typeof record.src === "object") {
    for (const [locale, src] of Object.entries(record.src)) {
      if (typeof src === "string") refs.push({ at: `${at}.src.${locale}`, src, ...size });
    }
  }
  for (const key of ["mp4", "webm"]) {
    if (typeof record[key] === "string") refs.push({ at: `${at}.${key}`, src: record[key] as string });
  }
  for (const [key, child] of Object.entries(record)) {
    if (key !== "src") refs.push(...productImages(child, `${at}.${key}`));
  }
  return refs;
}

const imageSizes = new Map<string, Promise<{ width?: number; height?: number }>>();
for (const product of products) {
  const refs = [
    ...(product.featured ? productImages(product.featured, `${product.slug}.featured`) : []),
    ...locales.flatMap((locale) => productImages(product[locale], `${product.slug}.${locale}`)),
  ];
  for (const ref of refs) {
    // Only files the site serves itself; external links are not images here.
    if (!ref.src.startsWith("/")) continue;
    const file = `public${ref.src.split(/[?#]/)[0]}`;
    if (!fs.existsSync(file)) {
      fail(`${ref.at}: ${ref.src} does not exist`);
      continue;
    }
    if (ref.width === undefined && ref.height === undefined) continue;
    if (!imageSizes.has(file)) imageSizes.set(file, sharp(file).metadata());
    const meta = await imageSizes.get(file)!;
    if (meta.width !== ref.width || meta.height !== ref.height) {
      fail(`${ref.at}: ${ref.src} is declared ${ref.width}×${ref.height} but the file is ${meta.width}×${meta.height}`);
    }
  }
}

/* ---------- Provenance ---------- */

// `asOf` names the release a screenshot, showcase, captured output or FAQ
// answer describes. A product whose synced release is a whole major version
// ahead gets a warning (not a failure), listing every such item to recheck.
const tagPattern = /^v?(\d+)\.\d+(\.\d+)?([-+][\w.]+)?$/;
const majorOf = (tag: string) => Number(tagPattern.exec(tag)?.[1]);
const staleClaims: string[] = [];

function asOfRefs(value: unknown, at: string): Array<{ at: string; asOf: string }> {
  if (Array.isArray(value)) return value.flatMap((item, index) => asOfRefs(item, `${at}[${index}]`));
  if (!value || typeof value !== "object") return [];
  const record = value as Record<string, unknown>;
  const label = typeof record.title === "string" ? ` "${record.title}"` : "";
  return [
    ...(typeof record.asOf === "string" ? [{ at: `${at}${label}`, asOf: record.asOf }] : []),
    ...Object.entries(record).flatMap(([key, child]) => asOfRefs(child, `${at}.${key}`)),
  ];
}

for (const product of products) {
  const release = (releases as Record<string, { version?: string }>)[product.slug]?.version;
  for (const locale of locales) {
    for (const ref of asOfRefs(product[locale], `${product.slug}.${locale}`)) {
      if (!tagPattern.test(ref.asOf)) {
        fail(`${ref.at}: asOf "${ref.asOf}" is not a release tag like v1.2.3`);
        continue;
      }
      if (!release) {
        fail(`${ref.at}: asOf ${ref.asOf}, but ${product.slug} has no releases.json entry`);
        continue;
      }
      if (majorOf(release) > majorOf(ref.asOf)) staleClaims.push(`${ref.at}: as of ${ref.asOf}, release is ${release}`);
    }
  }
}

/* ---------- Style ---------- */

const tokens = read("src/styles/tokens.css");

function contrastOnWhite(hex: string): number {
  const channel = (offset: number) => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const luminance = 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
  return 1.05 / (luminance + 0.05);
}

// Each product page wears its own color pair (DESIGN.md): --tint-<slug> and
// --ink-<slug> in the light :root, in both dark blocks (the toggle and the OS
// preference), and the body[data-product] rule that maps them.
function cssBlock(css: string, selector: string): string | undefined {
  const start = css.indexOf(`${selector} {`);
  if (start === -1) return undefined;
  let depth = 0;
  for (let index = css.indexOf("{", start); index < css.length; index += 1) {
    if (css[index] === "{") depth += 1;
    if (css[index] === "}" && --depth === 0) return css.slice(start, index + 1);
  }
  return undefined;
}
const darkMedia = cssBlock(tokens, "@media (prefers-color-scheme: dark)");
const colorBlocks: Array<[string, string | undefined]> = [
  ["light :root", cssBlock(tokens, ":root")],
  [':root[data-theme="dark"]', cssBlock(tokens, ':root[data-theme="dark"]')],
  ["prefers-color-scheme: dark", darkMedia && cssBlock(darkMedia, ':root:not([data-theme="light"])')],
];
for (const [name, block] of colorBlocks) if (!block) fail(`tokens.css: cannot find the ${name} block`);
for (const product of products) {
  for (const [name, block] of colorBlocks) {
    if (!block) continue;
    for (const token of [`--tint-${product.slug}`, `--ink-${product.slug}`]) {
      if (!new RegExp(`${token}:\\s*[^;]+;`).test(block)) fail(`tokens.css: ${token} is missing in the ${name} block`);
    }
  }
  const mapping = cssBlock(tokens, `body[data-product="${product.slug}"]`);
  if (
    !mapping?.includes(`--product-tint: var(--tint-${product.slug})`) ||
    !mapping.includes(`--product-ink: var(--ink-${product.slug})`)
  ) {
    fail(`tokens.css: body[data-product="${product.slug}"] must map --product-tint/--product-ink to its pair`);
  }
  // The filled primary action: one colour in both themes, under a white label.
  const fill = colorBlocks[0][1]?.match(new RegExp(`--fill-${product.slug}:\\s*(#[0-9a-f]{6});`))?.[1];
  if (!fill) fail(`tokens.css: --fill-${product.slug} (a #rrggbb) is missing in the light :root block`);
  else if (contrastOnWhite(fill) < 4.5)
    fail(`tokens.css: white on --fill-${product.slug} is ${contrastOnWhite(fill).toFixed(2)}:1, below 4.5:1`);
  if (!mapping?.includes(`--product-fill: var(--fill-${product.slug})`)) {
    fail(`tokens.css: body[data-product="${product.slug}"] must map --product-fill to --fill-${product.slug}`);
  }
}
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
for (const file of ["base.css", "chrome.css", "pages.css", "product.css", "demos.css"].map(
  (name) => `src/styles/${name}`,
)) {
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

if (staleClaims.length > 0) {
  console.warn(`Warning: ${staleClaims.length} capture(s) or claim(s) are a major release behind (asOf):`);
  for (const claim of staleClaims) console.warn(`- ${claim}`);
}
if (failures.length > 0) {
  console.error(`Check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Check passed: ${products.length} products, ${allPages.length} pages`);

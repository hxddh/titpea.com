// Scaffold a product: `npm run new:product <slug> -- --type <type> --line <line>`.
// Writes src/content/products/<slug>.ts from a template, adds it to
// products/index.ts after the last product of its line, and adds placeholder
// colours to tokens.css (alphabetical, like the rest). Every placeholder
// carries the marker below, which `npm run check` rejects, so a half-filled
// product cannot ship.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";

export const MARKER = "TODO(new-product)";
export const types = ["cli", "pi", "actions", "desktop", "mac", "extension", "game", "experiment"];
export const lines = ["storage", "agents", "everyday", "games"];

export const camelCase = (slug) => slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());

/** The schema.org fields a type implies; the author checks them. */
export function defaultsFor(type) {
  if (type === "extension") return { category: "BrowserApplication", os: "Chrome" };
  if (type === "game" || type === "experiment") return { category: "GameApplication", os: "macOS" };
  if (type === "mac") return { category: "DeveloperApplication", os: "macOS" };
  return { category: "DeveloperApplication", os: "Cross-platform" };
}

function copyBlock(locale, slug) {
  const t = (text) => JSON.stringify(`${MARKER}: ${text}`);
  return `  ${locale}: {
    title: ${t(locale === "zh" ? "中文名" : "Name")},
    description: ${t("one sentence for search results and share cards, 70–160 characters")},
    eyebrow: ${t("what it is, in a few words")},
    headline: ${t("the claim")},
    lead: ${t("three short sentences")},
    catalog: { role: "", text: ${t("the one line in the catalog")} },
    primaryCta: { label: ${t("Download")}, href: "https://github.com/hxddh/${slug}/releases/latest" },
    secondaryCta: { label: ${t("View source")}, href: "https://github.com/hxddh/${slug}" },
    meta: ${t("platform · licence · version")},
    visual: {
      kind: "screenshot",
      label: ${t("name")},
      image: { src: "/assets/${slug}-hero.webp", alt: ${t("what the capture shows")}, width: 1200, height: 800 },
    },
    sections: [
      {
        kind: "faq",
        id: "faq",
        label: ${t(locale === "zh" ? "常见问题" : "FAQ")},
        items: [{ title: ${t("a question")}, body: ${t("its answer, from the product's own docs")} }],
      },
    ],
  },`;
}

export function productSource({ slug, type, line }) {
  const facts = defaultsFor(type);
  return `import { defineProduct } from "../schema";

// Scaffolded by npm run new:product. Replace every ${MARKER}; npm run check lists what is left.
export default defineProduct({
  slug: "${slug}",
  line: "${line}",
  type: "${type}",
  icon: "/assets/icons/${slug}.webp",
  og: "/assets/og-${slug}.png",
  schema: {
    category: "${facts.category}",
    os: "${facts.os}",
  },
  sectionIndex: false,
${copyBlock("en", slug)}
${copyBlock("zh", slug)}
});
`;
}

/** Product slugs in site order with their line, read from the product files. */
export function siteOrder(indexSource, readProduct) {
  return [...indexSource.matchAll(/^import \w+ from "\.\/([\w-]+)";$/gm)].map(([, slug]) => ({
    slug,
    line: readProduct(slug).match(/^\s*line: "(\w+)",/m)?.[1],
  }));
}

/** Add the import and list entry after the last product of the same line (or at the end). */
export function insertIntoIndex(indexSource, order, slug, line) {
  if (order.some((entry) => entry.slug === slug)) throw new Error(`${slug} is already in products/index.ts`);
  const sameLine = order.filter((entry) => entry.line === line);
  const after = (sameLine.at(-1) ?? order.at(-1)).slug;
  const name = camelCase(slug);
  const importLine = `import ${camelCase(after)} from "./${after}";`;
  const entryLine = `  ${camelCase(after)},`;
  if (!indexSource.includes(importLine) || !indexSource.includes(`\n${entryLine}\n`))
    throw new Error(`cannot find ${after} in products/index.ts`);
  return indexSource
    .replace(importLine, `${importLine}\nimport ${name} from "./${slug}";`)
    .replace(`\n${entryLine}\n`, `\n${entryLine}\n  ${name},\n`);
}

/**
 * Insert `make(indent)` lines into every run of lines whose key matches
 * `pattern` (group 1 = indent, group 2 = slug), before the first slug that
 * sorts after `slug`, or after the run.
 */
function insertSorted(source, pattern, slug, make, runLength = 1) {
  const rows = source.split("\n");
  const out = [];
  let index = 0;
  while (index < rows.length) {
    const match = rows[index].match(pattern);
    if (!match) {
      out.push(rows[index]);
      index += 1;
      continue;
    }
    let inserted = false;
    while (index < rows.length) {
      const row = rows[index].match(pattern);
      if (!row) break;
      if (!inserted && row[2] > slug) {
        out.push(...make(row[1]));
        inserted = true;
      }
      out.push(...rows.slice(index, index + runLength));
      index += runLength;
    }
    if (!inserted) out.push(...make(match[1]));
  }
  return out.join("\n");
}

export function insertTokens(tokensSource, slug) {
  if (tokensSource.includes(`--tint-${slug}:`)) throw new Error(`tokens.css already has --tint-${slug}`);
  let css = insertSorted(
    tokensSource,
    /^(\s*)--tint-([\w-]+):/,
    slug,
    (indent) => [
      `${indent}--tint-${slug}: #8e8e93; /* ${MARKER}: sample the icon's colour */`,
      `${indent}--ink-${slug}: #636366; /* ${MARKER}: readable variant, at least 4.8:1 on paper */`,
    ],
    2,
  );
  css = insertSorted(css, /^(\s*)--fill-([\w-]+):/, slug, (indent) => [
    `${indent}--fill-${slug}: #636366; /* ${MARKER}: the light ink; white on it at least 4.5:1 */`,
  ]);
  const block = [
    `body[data-product="${slug}"] {`,
    `  --product-tint: var(--tint-${slug});`,
    `  --product-ink: var(--ink-${slug});`,
    `  --product-fill: var(--fill-${slug});`,
    `}`,
  ];
  const rows = css.split("\n");
  const heads = rows
    .map((row, index) => ({ index, slug: row.match(/^body\[data-product="([\w-]+)"\] \{$/)?.[1] }))
    .filter((row) => row.slug);
  if (heads.length === 0) throw new Error('tokens.css has no body[data-product="…"] rules');
  const next = heads.find((row) => row.slug > slug);
  if (next) rows.splice(next.index, 0, ...block);
  else {
    let end = heads.at(-1).index;
    while (rows[end] !== "}") end += 1;
    rows.splice(end + 1, 0, ...block);
  }
  return rows.join("\n");
}

function parseArgs(argv) {
  const args = { slug: undefined, type: undefined, line: undefined };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--type") args.type = argv[++index];
    else if (value === "--line") args.line = argv[++index];
    else if (!value.startsWith("--")) args.slug = value;
  }
  if (!args.slug || !/^[a-z][a-z0-9-]*$/.test(args.slug)) throw new Error("slug: lowercase letters, digits and -");
  if (!types.includes(args.type)) throw new Error(`--type must be one of ${types.join(", ")}`);
  if (!lines.includes(args.line)) throw new Error(`--line must be one of ${lines.join(", ")}`);
  return args;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const at = (file) => path.join(root, file);
  try {
    const { slug, type, line } = parseArgs(process.argv.slice(2));
    const productFile = at(`src/content/products/${slug}.ts`);
    if (fs.existsSync(productFile)) throw new Error(`${path.relative(root, productFile)} already exists`);
    const indexFile = at("src/content/products/index.ts");
    const indexSource = fs.readFileSync(indexFile, "utf8");
    const order = siteOrder(indexSource, (other) => fs.readFileSync(at(`src/content/products/${other}.ts`), "utf8"));
    const nextIndex = insertIntoIndex(indexSource, order, slug, line);
    const tokensFile = at("src/styles/tokens.css");
    const nextTokens = insertTokens(fs.readFileSync(tokensFile, "utf8"), slug);
    const options = { ...(await prettier.resolveConfig(productFile)), filepath: productFile };
    fs.writeFileSync(productFile, await prettier.format(productSource({ slug, type, line }), options));
    fs.writeFileSync(indexFile, nextIndex);
    fs.writeFileSync(tokensFile, nextTokens);
    console.log(`Created src/content/products/${slug}.ts, added it to products/index.ts and tokens.css.

Still to do (npm run check lists every ${MARKER} left):
  1. Write both locales in src/content/products/${slug}.ts; keep section ids identical.
  2. Colours in src/styles/tokens.css, sampled from the icon.
  3. Icon: design/icons/${slug}-official.png or design/icons/${slug}.svg, then npm run assets:icons.
  4. Screenshots as WebP under public/assets/, then npm run assets:images.
  5. If it ships GitHub releases: set repo, add it to src/content/releases.json, write {version} in meta.
  6. npm run assets:og ${slug} for its share image.`);
  } catch (error) {
    console.error(`new:product: ${error.message}`);
    process.exit(1);
  }
}

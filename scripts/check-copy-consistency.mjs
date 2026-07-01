import fs from "node:fs";
import path from "node:path";
import { ui } from "../src/content/i18n/siteCopy.ts";
import { catalogCopy } from "../src/content/i18n/pageCopy.ts";
import { products } from "../src/content/products.ts";

// Content-quality guards that the export-level deadcode check cannot see:
//   1. en/zh copy dictionaries must declare the same keys (no locale drift).
//   2. Per-product array fields must have equal length across en/zh, so a
//      feature/positioning/faq entry can't be added to one locale only.
//   3. Every top-level ui/catalog copy key must be referenced by a page or
//      model — this is what lets stale hero/flow copy linger after a redesign.

const failures = [];

// --- 1. en/zh key parity for the shared copy dictionaries --------------------
function diffKeys(label, en, zh) {
  const enKeys = new Set(Object.keys(en));
  const zhKeys = new Set(Object.keys(zh));
  for (const key of enKeys)
    if (!zhKeys.has(key)) failures.push(`${label}: key "${key}" present in en but missing in zh`);
  for (const key of zhKeys)
    if (!enKeys.has(key)) failures.push(`${label}: key "${key}" present in zh but missing in en`);
}

diffKeys("ui", ui.en, ui.zh);
diffKeys("catalogCopy", catalogCopy.en, catalogCopy.zh);

// --- 2. per-product array-length parity across locales -----------------------
for (const [slug, product] of Object.entries(products)) {
  const en = product.locales.en;
  const zh = product.locales.zh;
  diffKeys(`product ${slug}`, en, zh);
  for (const [field, value] of Object.entries(en)) {
    if (!Array.isArray(value)) continue;
    const zhValue = zh[field];
    if (!Array.isArray(zhValue)) {
      failures.push(`product ${slug}: field "${field}" is an array in en but not in zh`);
      continue;
    }
    if (value.length !== zhValue.length) {
      failures.push(`product ${slug}: field "${field}" length differs — en ${value.length}, zh ${zhValue.length}`);
    }
  }
}

// --- 3. every copy key must be referenced outside its definition file --------
const definitionFiles = new Set([
  path.join("src", "content", "i18n", "siteCopy.ts"),
  path.join("src", "content", "i18n", "pageCopy.ts"),
]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx|astro)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const usageText = walk("src")
  .filter((file) => !definitionFiles.has(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

function assertReferenced(label, keys) {
  for (const key of keys) {
    if (!new RegExp(`\\b${key}\\b`).test(usageText))
      failures.push(`${label}: copy key "${key}" is never referenced by any page or model`);
  }
}

assertReferenced("ui", Object.keys(ui.en));
assertReferenced("catalogCopy", Object.keys(catalogCopy.en));

if (failures.length > 0) {
  console.error("Copy consistency check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

const productCount = Object.keys(products).length;
console.log(`Copy consistency check passed: ui + catalog parity, ${productCount} products, all copy keys referenced`);

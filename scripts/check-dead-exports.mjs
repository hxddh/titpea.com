import fs from "node:fs";
import path from "node:path";

// Guard against the recurring "dead content/export drift" in the content
// layer: every named export under src/content and src/lib must be referenced
// somewhere outside the file that declares it. This catches model fields and
// helpers that stop being rendered but linger in the source.

const declarationRoots = ["src/content", "src/lib"];
const usageRoots = ["src", "scripts"];
const usageExtensions = new Set([".ts", ".tsx", ".astro", ".mjs", ".js"]);

// Names intentionally exported as public API even when currently unreferenced.
const allowlist = new Set([]);

function walk(dir, predicate) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, predicate));
    else if (predicate(full)) out.push(full);
  }
  return out;
}

const declarationFiles = declarationRoots.flatMap((root) =>
  walk(root, (file) => file.endsWith(".ts") && !file.endsWith(".d.ts")),
);
const usageFiles = usageRoots.flatMap((root) => walk(root, (file) => usageExtensions.has(path.extname(file))));
const fileText = new Map(usageFiles.map((file) => [file, fs.readFileSync(file, "utf8")]));

const exportPattern = /export\s+(?:const|function|class|(?:abstract\s+)?interface|type|enum)\s+([A-Za-z0-9_$]+)/g;

const declarations = [];
for (const file of declarationFiles) {
  const text = fileText.get(file) ?? fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(exportPattern)) {
    declarations.push({ name: match[1], file });
  }
}

function countOccurrences(name) {
  const usage = new RegExp(`\\b${name}\\b`, "g");
  let total = 0;
  for (const text of fileText.values()) total += (text.match(usage) ?? []).length;
  return total;
}

// A name that appears exactly once across the whole repo only occurs at its
// own declaration — it is referenced nowhere (same file or otherwise) and is
// genuinely dead. Same-file-only usage (e.g. a type composed in the file that
// declares it) counts as referenced and is intentionally allowed.
const dead = [];
for (const { name, file } of declarations) {
  if (allowlist.has(name)) continue;
  if (countOccurrences(name) <= 1) dead.push({ name, file });
}

if (dead.length > 0) {
  console.error("Dead export check failed — these exports are never referenced outside their file:");
  for (const { name, file } of dead) console.error(`- ${name} (${file})`);
  process.exit(1);
}

console.log(`Dead export check passed: ${declarations.length} content/lib exports all referenced`);

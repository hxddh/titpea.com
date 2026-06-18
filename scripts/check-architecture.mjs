import fs from "node:fs";

const checks = [];

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function lineCount(path) {
  return read(path).split("\n").length;
}

function fail(name, detail) {
  checks.push({ name, ok: false, detail });
}

function pass(name) {
  checks.push({ name, ok: true });
}

function assertNoMatch(name, files, pattern) {
  const hits = files.flatMap((file) =>
    read(file)
      .split("\n")
      .flatMap((line, index) => (pattern.test(line) ? [`${file}:${index + 1}: ${line.trim()}`] : [])),
  );
  if (hits.length > 0) fail(name, hits.join("\n"));
  else pass(name);
}

assertNoMatch(
  "product cards use object records, not tuple pairs",
  [
    "src/content/products/s3-turbo-list.ts",
    "src/content/products/storageops.ts",
    "src/content/products/world-clock.ts",
    "src/content/products/douban-movie-rating.ts",
  ],
  /^\s*\[\s*(?:"|`)/,
);

assertNoMatch(
  "no ProductContentInput compatibility layer",
  ["src/lib/site.ts", "src/content/productSections.ts"],
  /ProductContentInput|\[string, string\]|Array<\[string, string\]>/,
);

assertNoMatch(
  "productSections is declarative",
  ["src/content/productSections.ts"],
  /product\.archetype\s*===|switch\s*\(\s*product\.archetype\s*\)/,
);

assertNoMatch(
  "product templates consume page models, not product identity",
  [
    "src/components/ProductPage.astro",
    "src/components/ProductInside.astro",
    "src/components/ProductDeepDive.astro",
    "src/components/ProductVisual.astro",
  ],
  /product\.(role|category|archetype|current|visual)|ProductPageProfile|productPageProfile|productNavItems/,
);

assertNoMatch(
  "site manifest is derived from page model",
  ["src/content/siteManifest.ts"],
  /product\.(role|category|archetype|current|visual)|productExpectedText|sectionIndex:\s*product\./,
);

assertNoMatch(
  "Home and About do not branch on product identity",
  ["src/components/HomePage.astro", "src/components/AboutPage.astro"],
  /item\.id\s*===|item\.kind|product\.role|product\.category|product\.archetype/,
);

assertNoMatch(
  "home copy has no retired duplicate content models",
  ["src/content/home.ts"],
  /homeProductLines|homeStorageFlow|homeBrowserTools|aboutProductGroups/,
);

assertNoMatch(
  "product source keeps rendering strategy out of raw product records",
  [
    "src/content/products/s3-turbo-list.ts",
    "src/content/products/storageops.ts",
    "src/content/products/world-clock.ts",
    "src/content/products/douban-movie-rating.ts",
  ],
  /\b(current|category|role|visual):/,
);

const pagesCssLines = lineCount("src/styles/pages.css");
if (pagesCssLines > 150) fail("pages.css stays thin", `src/styles/pages.css has ${pagesCssLines} lines`);
else pass("pages.css stays thin");

const qaPagesLines = lineCount("scripts/qa-pages.mjs");
if (qaPagesLines > 80) fail("qa-pages.mjs stays an orchestrator", `scripts/qa-pages.mjs has ${qaPagesLines} lines`);
else pass("qa-pages.mjs stays an orchestrator");

const failures = checks.filter((check) => !check.ok);
if (failures.length > 0) {
  console.error("Architecture check failed:");
  failures.forEach((check) => {
    console.error(`- ${check.name}`);
    console.error(check.detail);
  });
  process.exit(1);
}

console.log(`Architecture check passed: ${checks.length} checks`);

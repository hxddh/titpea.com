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
    "src/content/products/httpmon.ts",
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
  "page components render models without business-copy locale branching",
  [
    "src/components/HomePage.astro",
    "src/components/AboutPage.astro",
    "src/components/ProductPage.astro",
    "src/components/SiteHeader.astro",
  ],
  /locale\s*===|isZh|productSystem|productEvidence\s*\(|from\s+["']\.\.\/content\/home["']/,
);

assertNoMatch(
  "visual components render visual models without facts or locale branching",
  [
    "src/components/ProductVisual.astro",
    "src/components/visuals/S3BenchmarkVisual.astro",
    "src/components/visuals/StorageOpsAgentVisual.astro",
    "src/components/visuals/WorldClockVisual.astro",
    "src/components/visuals/DoubanRatingVisual.astro",
  ],
  /locale\s*===|isZh|productEvidenceFacts|s3EvidenceFacts|storageOpsEvidenceFacts/,
);

assertNoMatch(
  "site routes are derived from site model",
  ["src/content/siteModel.ts"],
  /product\.(role|category|archetype|current|visual)|productExpectedText|sectionIndex:\s*product\./,
);

assertNoMatch(
  "Home and About do not branch on product identity",
  ["src/components/HomePage.astro", "src/components/AboutPage.astro"],
  /item\.id\s*===|item\.kind|product\.role|product\.category|product\.archetype/,
);

assertNoMatch(
  "home copy has no retired duplicate content models",
  ["src/content/i18n/siteCopy.ts", "src/content/productCatalogModel.ts"],
  /homeProductLines|homeStorageFlow|homeBrowserTools|aboutProductGroups|productSystem|productEvidence\s*\(/,
);

assertNoMatch(
  "legacy content sources stay deleted",
  ["src/components/HomePage.astro", "src/components/AboutPage.astro", "src/content/siteModel.ts"],
  /content\/productSystem|content\/evidence|siteManifest|sitePageModels|homePageModel|aboutPageModel/,
);

assertNoMatch(
  "product source keeps rendering strategy out of raw product records",
  [
    "src/content/products/s3-turbo-list.ts",
    "src/content/products/storageops.ts",
    "src/content/products/httpmon.ts",
    "src/content/products/world-clock.ts",
    "src/content/products/douban-movie-rating.ts",
  ],
  /\b(current|category|role|visual):/,
);

// File budgets. These line limits are tripwires, not style nits: each file
// has a structural role, and crossing the budget is a signal it is drifting
// back into doing too much. Raise a budget only alongside a deliberate call
// about that file's responsibility, not to make a check pass.
const fileBudgets = [
  { path: "src/styles/pages.css", maxLines: 150, role: "pages.css stays thin" },
  { path: "scripts/qa-pages.mjs", maxLines: 80, role: "qa-pages.mjs stays an orchestrator" },
  { path: "src/content/pages/product.ts", maxLines: 140, role: "product page model stays an assembler" },
  { path: "src/components/HomePage.astro", maxLines: 180, role: "HomePage stays a renderer" },
];

for (const budget of fileBudgets) {
  const lines = lineCount(budget.path);
  if (lines > budget.maxLines) fail(budget.role, `${budget.path} has ${lines} lines (budget ${budget.maxLines})`);
  else pass(budget.role);
}

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

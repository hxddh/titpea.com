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

assertNoMatch(
  "retired editorial layer stays deleted",
  ["src/styles/global.css"],
  /components\.css|home-about\.css|layouts\.css|cards\.css|responsive\.css/,
);

assertNoMatch(
  "no CJK webfont",
  ["src/styles/fonts.css", "src/styles/global.css"],
  /Noto Sans CJK|Noto Serif CJK|Source Han|WenQuanYi|Sarasa|LXGW|SourceHan/i,
);

if (!/font-family:\s*Inter;/.test(read("src/styles/fonts.css"))) {
  fail("Latin webfont stays Inter", "src/styles/fonts.css must declare font-family: Inter");
} else {
  pass("Latin webfont stays Inter");
}

const baseCss = read("src/styles/base.css");
if (
  !/:lang\(zh\) \.about-hero h1/.test(baseCss) ||
  !/:lang\(zh\) \.home-hero h1/.test(baseCss) ||
  !/:lang\(zh\) \.product-hero h1/.test(baseCss)
) {
  fail(
    "Chinese optical rules for product/about/home display type",
    "src/styles/base.css must set :lang(zh) tracking on .about-hero h1, .home-hero h1, and .product-hero h1",
  );
} else {
  pass("Chinese optical rules for product/about/home display type");
}

if (!/:lang\(zh\) \.lead/.test(baseCss)) {
  fail("Chinese optical rules for body type", "src/styles/base.css must set :lang(zh) line-height on .lead");
} else {
  pass("Chinese optical rules for body type");
}

if (!/--text-list-body:/.test(read("src/styles/tokens.css"))) {
  fail("list body size is a token", "src/styles/tokens.css must declare --text-list-body");
} else {
  pass("list body size is a token");
}

if (!/\.feature-card\.primary \{\s*grid-column:\s*1\s*\/\s*-1/.test(read("src/styles/product.css"))) {
  fail("primary cards take the full row", "src/styles/product.css must let .feature-card.primary span the row");
} else {
  pass("primary cards take the full row");
}

const pageStyles = [
  "src/styles/base.css",
  "src/styles/chrome.css",
  "src/styles/pages.css",
  "src/styles/product.css",
  "src/styles/global.css",
];

// Depth is a token decision. Page stylesheets may use shadows, glass blur,
// and the hero wash, but only through tokens.css, so light and dark stay in
// step and one-off glows cannot creep back in.
function assertDepthUsesTokens() {
  const hits = [];
  for (const file of pageStyles) {
    const lines = read(file).split("\n");
    lines.forEach((line, index) => {
      const declaration = /^\s*(box-shadow|text-shadow|backdrop-filter|-webkit-backdrop-filter|filter)\s*:/.exec(line);
      if (declaration) {
        // Multi-line values continue until the terminating semicolon.
        let value = line.slice(line.indexOf(":") + 1);
        for (let next = index + 1; !value.includes(";") && next < lines.length; next += 1) value += lines[next];
        if (/rgba?\(|#[0-9a-f]{3,8}\b/i.test(value)) hits.push(`${file}:${index + 1}: raw color in ${declaration[1]}`);
      }
      if (/(linear|radial|conic)-gradient/.test(line) && !/var\(--wash-|mask-image|#000/.test(line)) {
        hits.push(`${file}:${index + 1}: gradient outside the hero wash`);
      }
    });
  }
  if (hits.length > 0) fail("shadows, glass, and wash come from tokens", hits.join("\n"));
  else pass("shadows, glass, and wash come from tokens");
}

assertDepthUsesTokens();

// File budgets. These line limits are tripwires, not style nits: each file
// has a structural role, and crossing the budget is a signal it is drifting
// back into doing too much. Raise a budget only alongside a deliberate call
// about that file's responsibility, not to make a check pass.
const fileBudgets = [
  { path: "src/styles/pages.css", maxLines: 360, role: "pages.css holds only Home, About, and legal pages" },
  { path: "src/styles/product.css", maxLines: 560, role: "product.css holds only product page sections" },
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

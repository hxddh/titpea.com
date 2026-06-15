import fs from "node:fs";
import { createRequire } from "node:module";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.QA_OUT_DIR ?? "/tmp/titpea-page-qa";
const pages = [
  "/",
  "/about/",
  "/s3-turbo-list/",
  "/storageops/",
  "/zh/",
  "/zh/about/",
  "/zh/s3-turbo-list/",
  "/zh/storageops/",
];
const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 850, height: 1100 },
  { name: "mobile", width: 390, height: 920 },
];

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("Playwright is required for qa:pages. Install it locally or run this script in the Codex bundled runtime.");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });

  for (const path of pages) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
    const metrics = await page.evaluate(() => {
      const nav = document.querySelector(".nav");
      const mobile = document.querySelector(".mobile-menu");
      const h1 = document.querySelector("h1");
      const rect = h1?.getBoundingClientRect();
      const lineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;

      return {
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        nav: nav ? getComputedStyle(nav).display : null,
        mobile: mobile ? getComputedStyle(mobile).display : null,
        h1: h1?.textContent?.trim() ?? "",
        h1Lines: rect && lineHeight ? Math.round(rect.height / lineHeight) : 0,
      };
    });

    const filename = `${viewport.name}${path.replaceAll("/", "_") || "_home"}.png`;
    await page.screenshot({ path: `${outDir}/${filename}`, fullPage: false });
    results.push({ viewport: viewport.name, path, ...metrics });
  }

  await page.close();
}

await browser.close();
console.table(results);

const failures = results.filter((result) => result.overflow > 1 || result.h1Lines > 3);
if (failures.length > 0) {
  console.error("QA failed:", failures);
  process.exit(1);
}

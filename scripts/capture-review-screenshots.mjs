import fs from "node:fs";
import { createRequire } from "node:module";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.REVIEW_SCREENSHOT_DIR ?? "/tmp/titpea-review-screens";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const targets = [
  { route: "/", name: "home" },
  { route: "/zh/", name: "home-zh" },
  { route: "/about/", name: "about" },
  { route: "/zh/about/", name: "about-zh" },
  { route: "/s3-turbo-list/", name: "s3-turbo-list" },
  { route: "/zh/s3-turbo-list/", name: "s3-turbo-list-zh" },
  { route: "/storageops/", name: "storageops" },
  { route: "/zh/storageops/", name: "storageops-zh" },
  { route: "/world-clock/", name: "world-clock" },
  { route: "/douban-movie-rating/", name: "douban-movie-rating" },
];
const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "mobile", width: 390, height: 920 },
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const manifest = [];

for (const viewport of viewports) {
  for (const target of targets) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(8_000);
    await page.goto(`${baseUrl}${target.route}`, { waitUntil: "domcontentloaded", timeout: 8_000 });
    await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });

    const file = `${viewport.name}-${target.name}.png`;
    const path = `${outDir}/${file}`;
    await page.screenshot({ path, fullPage: false });
    const size = fs.statSync(path).size;
    if (size < 20_000) {
      await browser.close();
      throw new Error(`${file} is too small to review (${size} bytes)`);
    }
    manifest.push({ file, route: target.route, viewport: viewport.name, size });
    await page.close();
  }
}

await browser.close();
fs.writeFileSync(`${outDir}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(`Review screenshot package captured: ${manifest.length} screenshots in ${outDir}`);

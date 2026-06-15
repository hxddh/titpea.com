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
const expectedText = {
  "/": ["S3 operations toolkit", "Product evidence"],
  "/about/": ["Object storage tools", "A narrow product line"],
  "/s3-turbo-list/": ["Fast list and diff for S3 buckets", "Usage examples"],
  "/storageops/": ["S3 diagnosis agent for Pi", "Usage examples"],
  "/zh/": ["S3 运维工具集", "先看事实"],
  "/zh/about/": ["对象存储工具", "一条很窄的产品线"],
  "/zh/s3-turbo-list/": ["高速 S3 list / diff CLI", "用法示例"],
  "/zh/storageops/": ["Pi 的 S3 诊断 agent", "用法示例"],
};
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
  console.error(
    "Playwright is required for qa:pages. Install it locally or run this script in the Codex bundled runtime.",
  );
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
        anchorCount: document.querySelectorAll(".product-anchor-nav a").length,
        text: document.body.innerText,
      };
    });

    const filename = `${viewport.name}${path.replaceAll("/", "_") || "_home"}.png`;
    await page.screenshot({ path: `${outDir}/${filename}`, fullPage: false });
    const textOk = (expectedText[path] ?? []).every((text) => metrics.text.includes(text));
    delete metrics.text;
    results.push({ viewport: viewport.name, path, textOk, ...metrics });
  }

  if (viewport.name === "mobile") {
    await page.goto(`${baseUrl}/zh/s3-turbo-list/`, { waitUntil: "networkidle" });
    await page.locator(".mobile-menu summary").click();
    const menuState = await page.evaluate(() => ({
      open: document.querySelector(".mobile-menu")?.hasAttribute("open") ?? false,
      linkCount: document.querySelectorAll(".mobile-menu-panel a").length,
      currentCount: document.querySelectorAll(".mobile-menu-panel a[aria-current='page']").length,
    }));
    await page.screenshot({ path: `${outDir}/mobile-menu-open.png`, fullPage: false });
    results.push({
      viewport: "mobile",
      path: "/zh/s3-turbo-list/ menu",
      overflow: 0,
      nav: "none",
      mobile: "block",
      h1: "menu",
      h1Lines: 1,
      anchorCount: 0,
      textOk: menuState.open && menuState.linkCount >= 8 && menuState.currentCount === 1,
    });
  }

  await page.close();
}

await browser.close();
console.table(results);

const failures = results.filter((result) => {
  const isDesktop = result.viewport === "desktop";
  const isProductPage = result.path.includes("s3-turbo-list") || result.path.includes("storageops");
  const navOk = isDesktop
    ? result.nav === "flex" && result.mobile === "none"
    : result.nav === "none" && result.mobile === "block";
  const anchorOk = isProductPage && !result.path.includes("menu") ? result.anchorCount >= 7 : true;

  return result.overflow > 1 || result.h1Lines > 3 || !result.textOk || !navOk || !anchorOk;
});
if (failures.length > 0) {
  console.error("QA failed:", failures);
  process.exit(1);
}

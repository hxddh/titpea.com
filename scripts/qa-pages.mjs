import fs from "node:fs";
import { createRequire } from "node:module";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.QA_OUT_DIR ?? "/tmp/titpea-page-qa";
const pages = [
  "/",
  "/about/",
  "/s3-turbo-list/",
  "/storageops/",
  "/world-clock/",
  "/douban-movie-rating/",
  "/zh/",
  "/zh/about/",
  "/zh/s3-turbo-list/",
  "/zh/storageops/",
  "/zh/world-clock/",
  "/zh/douban-movie-rating/",
];
const expectedText = {
  "/": ["S3 automation toolkit", "Product evidence"],
  "/about/": ["Object storage tools", "A narrow product line"],
  "/s3-turbo-list/": ["Automatic S3 inventory and diff", "Automation"],
  "/storageops/": ["S3 diagnosis agent for Pi", "Skills and tools"],
  "/world-clock/": ["A timezone feed in one click", "Questions & how-to"],
  "/douban-movie-rating/": ["Global ratings inside Douban", "Questions & how-to"],
  "/zh/": ["S3 自动化工具集", "先看事实"],
  "/zh/about/": ["对象存储工具", "一条很窄的产品线"],
  "/zh/s3-turbo-list/": ["自动化 S3 list / diff CLI", "自动化"],
  "/zh/storageops/": ["Pi 的 S3 诊断 agent", "技能和工具"],
  "/zh/world-clock/": ["一键看世界时间", "问题与用法"],
  "/zh/douban-movie-rating/": ["把海外评分补到豆瓣电影页", "问题与用法"],
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
        anchorCount: document.querySelectorAll(".product-section-index a").length,
        productIndex: (() => {
          const index = document.querySelector(".product-section-index");
          if (!index) return null;
          const style = getComputedStyle(index);
          return {
            position: style.position,
            overflow: index.scrollWidth - index.clientWidth,
            top: Math.round(index.getBoundingClientRect().top),
          };
        })(),
        featuresGrid: document.querySelector(".features-grid, .automation-grid")
          ? getComputedStyle(document.querySelector(".features-grid, .automation-grid")).display
          : null,
        imageCount: document.querySelectorAll("img").length,
        brokenImages: Array.from(document.querySelectorAll("img")).filter(
          (image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0,
        ).length,
        oldS3Facts: document.body.innerText.includes("MIT License") || document.body.innerText.includes("v0.5.0"),
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

  for (const path of ["/s3-turbo-list/", "/zh/s3-turbo-list/", "/storageops/", "/zh/storageops/"]) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
    const target = page.locator(".product-section-index a").first();
    if ((await target.count()) === 0) continue;
    await target.click();
    await page.waitForTimeout(150);
    const scrollState = await page.evaluate(() => {
      const index = document.querySelector(".product-section-index");
      const inside = document.querySelector("#inside");
      const rect = inside?.getBoundingClientRect();
      return {
        indexPosition: index ? getComputedStyle(index).position : null,
        indexOverflow: index ? index.scrollWidth - index.clientWidth : 0,
        targetTop: rect ? Math.round(rect.top) : 0,
      };
    });
    await page.screenshot({
      path: `${outDir}/${viewport.name}${path.replaceAll("/", "_")}_anchor-click.png`,
      fullPage: false,
    });
    results.push({
      viewport: viewport.name,
      path: `${path} anchor-click`,
      overflow: 0,
      nav: viewport.name === "desktop" ? "flex" : "none",
      mobile: viewport.name === "desktop" ? "none" : "block",
      h1: "anchor-click",
      h1Lines: 1,
      anchorCount: 1,
      textOk:
        scrollState.indexPosition !== "sticky" &&
        scrollState.indexOverflow <= 1 &&
        scrollState.targetTop >= 0 &&
        scrollState.targetTop < viewport.height * 0.4,
    });
  }

  await page.close();
}

await browser.close();
console.table(results);

const failures = results.filter((result) => {
  const isDesktop = result.viewport === "desktop";
  const isProductPage =
    result.path.includes("s3-turbo-list") ||
    result.path.includes("storageops") ||
    result.path.includes("world-clock") ||
    result.path.includes("douban-movie-rating");
  const isMainProductPage = result.path.includes("s3-turbo-list") || result.path.includes("storageops");
  const isBrowserProductPage = result.path.includes("world-clock") || result.path.includes("douban-movie-rating");
  const navOk = isDesktop
    ? result.nav === "flex" && result.mobile === "none"
    : result.nav === "none" && result.mobile === "block";
  const isAuxCheck = result.path.includes("menu") || result.path.includes("anchor-click");
  const anchorOk =
    isProductPage && !isAuxCheck ? (isMainProductPage ? result.anchorCount >= 5 : result.anchorCount === 0) : true;
  const productIndexOk = result.productIndex
    ? result.productIndex.position !== "sticky" && result.productIndex.overflow <= 1
    : true;
  const featuresGridOk = isProductPage && !isAuxCheck ? result.featuresGrid === "grid" : true;
  const imagesOk = isBrowserProductPage ? result.imageCount > 0 && result.brokenImages === 0 : true;

  return (
    result.overflow > 1 ||
    result.h1Lines > 3 ||
    result.oldS3Facts ||
    !result.textOk ||
    !navOk ||
    !anchorOk ||
    !productIndexOk ||
    !featuresGridOk ||
    !imagesOk
  );
});
if (failures.length > 0) {
  console.error("QA failed:", failures);
  process.exit(1);
}

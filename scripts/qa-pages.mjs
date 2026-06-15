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

function screenshotName(viewport, path, suffix = "") {
  const cleanPath = path.replaceAll("/", "_") || "_home";
  return `${viewport}${cleanPath}${suffix}.png`;
}

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
            currentCount: index.querySelectorAll("a[aria-current]").length,
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

    const filename = screenshotName(viewport.name, path);
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
    const anchors = await page.locator(".product-section-index a").evaluateAll((links) =>
      links.map((link, index) => ({
        index,
        href: link.getAttribute("href") ?? "",
        label: link.textContent?.trim() ?? "",
      })),
    );

    for (const anchor of anchors) {
      await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      await page.locator(".product-section-index a").nth(anchor.index).click();
      await page.waitForTimeout(700);
      const scrollState = await page.evaluate((href) => {
        const targetId = decodeURIComponent(href.slice(1));
        const index = document.querySelector(".product-section-index");
        const target = document.getElementById(targetId);
        const indexRect = index?.getBoundingClientRect();
        const rect = target?.getBoundingClientRect();
        const active = index?.querySelector("a[aria-current]");
        return {
          targetId,
          indexPosition: index ? getComputedStyle(index).position : null,
          indexOverflow: index ? index.scrollWidth - index.clientWidth : 0,
          indexTop: indexRect ? Math.round(indexRect.top) : null,
          indexBottom: indexRect ? Math.round(indexRect.bottom) : null,
          currentCount: index ? index.querySelectorAll("a[aria-current]").length : 0,
          currentHref: active?.getAttribute("href") ?? null,
          targetTop: rect ? Math.round(rect.top) : null,
          targetExists: Boolean(target),
        };
      }, anchor.href);
      const anchorScreenshot = screenshotName(viewport.name, path, `_anchor-${scrollState.targetId}`);
      await page.screenshot({
        path: `${outDir}/${anchorScreenshot}`,
        fullPage: false,
      });
      results.push({
        viewport: viewport.name,
        path: `${path} anchor:${anchor.label}`,
        overflow: 0,
        nav: viewport.name === "desktop" ? "flex" : "none",
        mobile: viewport.name === "desktop" ? "none" : "block",
        h1: "anchor-click",
        h1Lines: 1,
        anchorCount: anchors.length,
        textOk:
          scrollState.targetExists &&
          scrollState.indexPosition === "sticky" &&
          scrollState.indexOverflow <= 1 &&
          scrollState.indexTop !== null &&
          scrollState.indexTop >= 0 &&
          scrollState.currentCount === 1 &&
          scrollState.currentHref === anchor.href &&
          scrollState.targetTop !== null &&
          scrollState.targetTop >= (scrollState.indexBottom ?? 0) &&
          scrollState.targetTop < viewport.height - 24,
        details: scrollState,
        screenshot: anchorScreenshot,
      });
    }

    await page.evaluate(() => window.scrollTo({ top: 2600, left: 0, behavior: "instant" }));
    await page.waitForTimeout(100);
    const stickyState = await page.evaluate(() => {
      const index = document.querySelector(".product-section-index");
      const rect = index?.getBoundingClientRect();
      return {
        indexPosition: index ? getComputedStyle(index).position : null,
        indexTop: rect ? Math.round(rect.top) : null,
        indexOverflow: index ? index.scrollWidth - index.clientWidth : 0,
        currentCount: index ? index.querySelectorAll("a[aria-current]").length : 0,
      };
    });
    await page.screenshot({
      path: `${outDir}/${screenshotName(viewport.name, path, "_sticky-scroll")}`,
      fullPage: false,
    });
    results.push({
      viewport: viewport.name,
      path: `${path} sticky-scroll`,
      overflow: 0,
      nav: viewport.name === "desktop" ? "flex" : "none",
      mobile: viewport.name === "desktop" ? "none" : "block",
      h1: "sticky-scroll",
      h1Lines: 1,
      anchorCount: 1,
      textOk:
        stickyState.indexPosition === "sticky" &&
        stickyState.indexTop === 0 &&
        stickyState.indexOverflow <= 1 &&
        stickyState.currentCount === 1,
      details: stickyState,
      screenshot: screenshotName(viewport.name, path, "_sticky-scroll"),
    });
  }

  await page.close();
}

await browser.close();
console.table(results);

const failures = results.flatMap((result) => {
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
  const isAuxCheck =
    result.path.includes("menu") ||
    result.path.includes("anchor-click") ||
    result.path.includes("anchor:") ||
    result.path.includes("sticky-scroll");
  const anchorOk =
    isProductPage && !isAuxCheck ? (isMainProductPage ? result.anchorCount >= 5 : result.anchorCount === 0) : true;
  const productIndexOk = result.productIndex
    ? result.productIndex.position === "sticky" &&
      result.productIndex.overflow <= 1 &&
      result.productIndex.currentCount === 1
    : true;
  const featuresGridOk = isProductPage && !isAuxCheck ? result.featuresGrid === "grid" : true;
  const imagesOk = isBrowserProductPage ? result.imageCount > 0 && result.brokenImages === 0 : true;
  const reasons = [];

  if (result.overflow > 1) reasons.push(`horizontal overflow ${result.overflow}px`);
  if (result.h1Lines > 3) reasons.push(`h1 wraps to ${result.h1Lines} lines`);
  if (result.oldS3Facts) reasons.push("outdated s3-turbo-list facts are still visible");
  if (!result.textOk)
    reasons.push(`content or interaction check failed${result.details ? `: ${JSON.stringify(result.details)}` : ""}`);
  if (!navOk) reasons.push(`navigation visibility mismatch: nav=${result.nav}, mobile=${result.mobile}`);
  if (!anchorOk) reasons.push(`anchor count mismatch: ${result.anchorCount}`);
  if (!productIndexOk) reasons.push(`product index state invalid: ${JSON.stringify(result.productIndex)}`);
  if (!featuresGridOk) reasons.push(`feature grid display mismatch: ${result.featuresGrid}`);
  if (!imagesOk) reasons.push(`image check failed: imageCount=${result.imageCount}, broken=${result.brokenImages}`);

  return reasons.map((reason) => ({
    viewport: result.viewport,
    path: result.path,
    reason,
    screenshot: result.screenshot ?? screenshotName(result.viewport, result.path.split(" ")[0]),
  }));
});
if (failures.length > 0) {
  console.error("QA failed:", failures);
  process.exit(1);
}

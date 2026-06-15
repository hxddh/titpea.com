import fs from "node:fs";
import { createRequire } from "node:module";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.QA_OUT_DIR ?? "/tmp/titpea-page-qa";
const manifest = JSON.parse(fs.readFileSync(new URL("../src/content/siteManifest.json", import.meta.url), "utf8"));
const routes = manifest.routes;
const zhForbiddenTerms = [" inventory", " artifact", " bucket", " endpoint", " provider", "warnings", "exit codes"];
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

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

function screenshotName(viewport, path, suffix = "") {
  const cleanPath = path.replaceAll("/", "_") || "_home";
  return `${viewport}${cleanPath}${suffix}.png`;
}

async function visit(page, path, label) {
  console.error(`[qa] ${label}: ${path}`);
  await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded", timeout: 8_000 });
  await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });
}

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  page.setDefaultTimeout(8_000);

  for (const route of routes) {
    const path = route.path;
    await visit(page, path, `${viewport.name} route`);
    const metrics = await page.evaluate(
      ({ route, zhForbiddenTerms }) => {
        const nav = document.querySelector(".nav");
        const mobile = document.querySelector(".mobile-menu");
        const h1 = document.querySelector("h1");
        const rect = h1?.getBoundingClientRect();
        const lineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;
        const origin = window.location.origin;
        const expectedPrimary = route.primaryCta ? new URL(route.primaryCta, origin).href : null;
        const primaryCta = document.querySelector(".button.primary");
        const structuredData = document.querySelector('script[type="application/ld+json"]')?.textContent ?? null;

        return {
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          title: document.title,
          canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
          alternate:
            document
              .querySelector(`link[rel="alternate"][hreflang="${route.locale === "zh" ? "en" : "zh-CN"}"]`)
              ?.getAttribute("href") ?? null,
          ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? null,
          twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute("content") ?? null,
          primaryCta: primaryCta instanceof HTMLAnchorElement ? primaryCta.href : null,
          expectedPrimary,
          structuredDataOk:
            route.kind === "product" ? Boolean(structuredData?.includes('"SoftwareApplication"')) : true,
          visibleForbiddenTerms:
            route.locale === "zh"
              ? zhForbiddenTerms.filter((term) =>
                  (document.body.innerText ?? "").toLowerCase().includes(term.trim().toLowerCase()),
                )
              : [],
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
              linkRows: new Set(
                Array.from(index.querySelectorAll("a")).map((link) => Math.round(link.getBoundingClientRect().top)),
              ).size,
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
      },
      { route, zhForbiddenTerms },
    );

    const filename = screenshotName(viewport.name, path);
    await page.screenshot({ path: `${outDir}/${filename}`, fullPage: false });
    const textOk = route.expectedText.every((text) => metrics.text.includes(text));
    delete metrics.text;
    results.push({ viewport: viewport.name, path, textOk, route, ...metrics });
  }

  if (viewport.name === "mobile") {
    await visit(page, "/zh/s3-turbo-list/", "mobile menu");
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

  for (const { path } of routes.filter((route) => route.sectionIndex)) {
    await visit(page, path, `${viewport.name} anchors`);
    const anchors = await page.locator(".product-section-index a").evaluateAll((links) =>
      links.map((link, index) => ({
        index,
        href: link.getAttribute("href") ?? "",
        label: link.textContent?.trim() ?? "",
      })),
    );

    for (const anchor of anchors) {
      await visit(page, path, `${viewport.name} anchor ${anchor.label}`);
      const anchorLink = page.locator(".product-section-index a").nth(anchor.index);
      await anchorLink.evaluate((link) => {
        link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
        link.click();
      });
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
          (viewport.name === "desktop" ? scrollState.indexOverflow <= 1 : scrollState.indexOverflow >= 0) &&
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
        (viewport.name === "desktop" ? stickyState.indexOverflow <= 1 : stickyState.indexOverflow >= 0) &&
        stickyState.currentCount === 1,
      details: stickyState,
      screenshot: screenshotName(viewport.name, path, "_sticky-scroll"),
    });
  }

  await page.close();
}

await browser.close();

for (const route of routes) {
  const imageUrl = new URL(route.ogImage, baseUrl);
  const response = await fetch(imageUrl, { method: "HEAD" });
  results.push({
    viewport: "asset",
    path: `${route.path} og-image`,
    overflow: 0,
    nav: "asset",
    mobile: "asset",
    h1: "og-image",
    h1Lines: 1,
    anchorCount: 0,
    textOk: response.ok && (response.headers.get("content-type") ?? "").includes("image/png"),
    details: {
      url: imageUrl.href,
      status: response.status,
      contentType: response.headers.get("content-type"),
    },
  });
}

console.table(results);

const failures = results.flatMap((result) => {
  const isDesktop = result.viewport === "desktop";
  const isAsset = result.viewport === "asset";
  const isProductPage =
    !isAsset &&
    (result.path.includes("s3-turbo-list") ||
      result.path.includes("storageops") ||
      result.path.includes("world-clock") ||
      result.path.includes("douban-movie-rating"));
  const isMainProductPage = !isAsset && (result.path.includes("s3-turbo-list") || result.path.includes("storageops"));
  const isBrowserProductPage =
    !isAsset && (result.path.includes("world-clock") || result.path.includes("douban-movie-rating"));
  const navOk = isDesktop
    ? result.nav === "flex" && result.mobile === "none"
    : isAsset
      ? true
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
      (isDesktop ? result.productIndex.overflow <= 1 : result.productIndex.overflow >= 0) &&
      result.productIndex.currentCount === 1 &&
      (isDesktop || result.productIndex.linkRows === 1)
    : true;
  const featuresGridOk = isProductPage && !isAuxCheck ? result.featuresGrid === "grid" : true;
  const imagesOk = isBrowserProductPage ? result.imageCount > 0 && result.brokenImages === 0 : true;
  const reasons = [];
  const route = result.route;

  if (result.overflow > 1) reasons.push(`horizontal overflow ${result.overflow}px`);
  if (result.h1Lines > 3) reasons.push(`h1 wraps to ${result.h1Lines} lines`);
  if (route && result.title !== route.title)
    reasons.push(`title mismatch: expected ${route.title}, got ${result.title}`);
  if (route && result.canonical !== `https://titpea.com${route.canonicalPath}`)
    reasons.push(`canonical mismatch: ${result.canonical}`);
  if (route && result.alternate !== `https://titpea.com${route.alternatePath}`)
    reasons.push(`alternate mismatch: ${result.alternate}`);
  if (route && result.ogImage !== `https://titpea.com${route.ogImage}`)
    reasons.push(`og:image mismatch: ${result.ogImage}`);
  if (route && result.twitterImage !== `https://titpea.com${route.ogImage}`)
    reasons.push(`twitter:image mismatch: ${result.twitterImage}`);
  if (route?.primaryCta && result.primaryCta !== result.expectedPrimary)
    reasons.push(`primary CTA mismatch: expected ${result.expectedPrimary}, got ${result.primaryCta}`);
  if (route?.kind === "product" && !result.structuredDataOk)
    reasons.push("missing SoftwareApplication structured data");
  if (result.visibleForbiddenTerms?.length > 0)
    reasons.push(`Chinese copy contains forbidden terms: ${result.visibleForbiddenTerms.join(", ")}`);
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

import fs from "node:fs";
import { createRequire } from "node:module";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.REVIEW_SCREENSHOT_DIR ?? "/tmp/titpea-review-screens";
const minimumScreenshotBytes = 10_000;
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
  { route: "/httpmon/", name: "httpmon" },
  { route: "/zh/httpmon/", name: "httpmon-zh" },
  { route: "/world-clock/", name: "world-clock" },
  { route: "/douban-movie-rating/", name: "douban-movie-rating" },
];
const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "tablet", width: 850, height: 1100 },
  { name: "mobile", width: 390, height: 920 },
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const manifest = [];

async function capture(page, viewport, target, suffix = "") {
  const file = `${viewport.name}-${target.name}${suffix}.png`;
  const path = `${outDir}/${file}`;
  const metrics = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const lead = document.querySelector(".lead");
    const h1Rect = h1?.getBoundingClientRect();
    const leadRect = lead?.getBoundingClientRect();
    const h1LineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;
    const leadLineHeight = lead ? Number.parseFloat(getComputedStyle(lead).lineHeight) : 0;
    const index = document.querySelector(".product-section-index");
    return {
      title: document.title,
      h1: h1?.textContent?.trim() ?? "",
      h1Lines: h1Rect && h1LineHeight ? Math.round(h1Rect.height / h1LineHeight) : 0,
      leadLines: leadRect && leadLineHeight ? Math.round(leadRect.height / leadLineHeight) : 0,
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      sectionIndexTop: index ? Math.round(index.getBoundingClientRect().top) : null,
      sectionCurrentCount: index ? index.querySelectorAll("a[aria-current]").length : null,
    };
  });
  await page.screenshot({ path, fullPage: false });
  const size = fs.statSync(path).size;
  // Sparse mobile states compress well; this only guards against blank or truncated captures.
  if (size < minimumScreenshotBytes) {
    await browser.close();
    throw new Error(`${file} is too small to review (${size} bytes)`);
  }
  manifest.push({
    file,
    route: target.route,
    viewport: viewport.name,
    size,
    state: suffix.replace(/^-/, "") || "top",
    metrics,
  });
}

for (const viewport of viewports) {
  for (const target of targets) {
    const page = await browser.newPage({ viewport });
    page.setDefaultTimeout(8_000);
    await page.goto(`${baseUrl}${target.route}`, { waitUntil: "domcontentloaded", timeout: 8_000 });
    await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });

    await capture(page, viewport, target);

    if (viewport.name === "mobile" && target.route === "/zh/s3-turbo-list/") {
      await page.locator(".mobile-menu summary").click();
      await capture(page, viewport, target, "-menu-open");
    }

    if (
      viewport.name === "desktop" &&
      (target.route.includes("s3-turbo-list") ||
        target.route.includes("storageops") ||
        target.route.includes("httpmon"))
    ) {
      await page.evaluate(() => window.scrollTo({ top: 2600, left: 0, behavior: "instant" }));
      await page.waitForTimeout(120);
      await capture(page, viewport, target, "-sticky-scroll");

      const firstAnchor = page.locator(".product-section-index a").first();
      if ((await firstAnchor.count()) > 0) {
        await firstAnchor.click();
        await page.waitForTimeout(300);
        await capture(page, viewport, target, "-anchor-click");
      }
    }
    await page.close();
  }
}

await browser.close();
fs.writeFileSync(`${outDir}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(`Review screenshot package captured: ${manifest.length} screenshots in ${outDir}`);

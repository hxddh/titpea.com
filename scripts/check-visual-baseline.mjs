import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import sharp from "sharp";
import baseline from "./visual-targets.json" with { type: "json" };
import { assertServesThisBuild, baseUrl } from "./qa/config.mjs";

await assertServesThisBuild();
const outDir = process.env.VISUAL_BASELINE_OUT_DIR ?? "/tmp/titpea-visual-baseline";
const baselinePlatform = process.env.VISUAL_BASELINE_PLATFORM ?? process.platform;
const baselineDir = path.join("tests/visual-baselines", baselinePlatform);
const approve = process.env.VISUAL_APPROVE === "1";
// A few screens, compared loosely: layout regressions move far more than
// 1% of pixels, while font rasterization and release-tag bumps move less.
const changedPixelLimit = 0.01;
const faqChangedPixelLimit = 0.05; // sticky index + scroll snap still leave ~4% churn on CI re-runs
const viewports = {
  desktop: { width: 1440, height: 1100 },
  mobile: { width: 390, height: 920 },
};

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const failures = [];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
if (approve) fs.mkdirSync(baselineDir, { recursive: true });

function screenshotName(target) {
  const route = target.path.replaceAll("/", "_") || "_home";
  const state = target.state === "section" ? `section-${target.section}` : target.state;
  return `${target.viewport}${route}_${state}.png`;
}

async function changedPixelRatio(actualPath, expectedPath) {
  const actual = await sharp(actualPath).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const expected = await sharp(expectedPath).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  if (actual.info.width !== expected.info.width || actual.info.height !== expected.info.height) return 1;

  let changed = 0;
  for (let offset = 0; offset < actual.data.length; offset += actual.info.channels) {
    const delta =
      Math.abs(actual.data[offset] - expected.data[offset]) +
      Math.abs(actual.data[offset + 1] - expected.data[offset + 1]) +
      Math.abs(actual.data[offset + 2] - expected.data[offset + 2]);
    if (delta > 45) changed += 1;
  }
  return changed / (actual.info.width * actual.info.height);
}

const browser = await chromium.launch({ headless: true });
for (const target of baseline.targets) {
  // Reduced motion: scroll reveal and smooth scrolling never race a capture.
  const page = await browser.newPage({ viewport: viewports[target.viewport], reducedMotion: "reduce" });
  page.setDefaultTimeout(8_000);
  await page.goto(`${baseUrl}${target.path}`, { waitUntil: "networkidle", timeout: 12_000 });
  await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await document.fonts.load("600 56px Inter");
  });
  await page.locator("[data-theme-toggle]").waitFor({ state: "visible" });

  if (target.state === "menu") await page.locator(".mobile-menu summary").click();
  if (target.state === "section") {
    // Pin a section (target.section is its id) just under the sticky chrome.
    await page.evaluate((id) => {
      const section = document.getElementById(id);
      if (section)
        window.scrollTo(0, Math.max(0, Math.round(section.getBoundingClientRect().top + window.scrollY - 96)));
    }, target.section);
    await page.waitForTimeout(150);
  }
  if (target.state === "faq") {
    // The local nav appears once the site header has scrolled away (chrome.css).
    await page.evaluate(() => {
      const header = document.querySelector(".site-header");
      window.scrollTo(0, Math.round((header?.getBoundingClientRect().height ?? 0) + 400));
    });
    await page.locator(".product-section-index[data-pinned]").waitFor({ state: "attached" });
    await page.waitForTimeout(250);
    if (target.viewport === "mobile") await page.locator("[data-section-index-toggle]").click();
    const faqLink = page.locator('.product-section-index a[href="#faq"]');
    const count = await faqLink.count();
    if (count !== 1) failures.push(`${target.path} ${target.viewport}: expected one FAQ section link, found ${count}`);
    else {
      await faqLink.click();
      // Pin both page scroll and the sticky section-index strip. Hash nav +
      // scrollIntoView(inline:center) left ~4% FAQ screenshot churn on CI.
      await page.evaluate(() => {
        const faq = document.getElementById("faq");
        const index = document.querySelector(".product-section-index-links");
        const faqNav = document.querySelector('.product-section-index a[href="#faq"]');
        if (!faq) return;
        const margin = Number.parseFloat(getComputedStyle(faq).scrollMarginTop) || 0;
        const y = Math.round(faq.getBoundingClientRect().top + window.scrollY - margin);
        window.scrollTo(0, Math.max(0, y));
        document.querySelectorAll(".product-section-index [data-section-link][aria-current]").forEach((link) => {
          link.removeAttribute("aria-current");
        });
        if (faqNav instanceof HTMLElement) {
          faqNav.setAttribute("aria-current", "location");
          if (index) index.scrollLeft = Math.max(0, faqNav.offsetLeft - 16);
        }
      });
      try {
        await page.waitForFunction(() => {
          const faq = document.getElementById("faq");
          if (!faq) return false;
          const margin = Number.parseFloat(getComputedStyle(faq).scrollMarginTop) || 0;
          const top = Math.round(faq.getBoundingClientRect().top);
          if (Math.abs(top - Math.round(margin)) <= 8) return true;
          const maxY = document.documentElement.scrollHeight - window.innerHeight;
          return window.scrollY >= maxY - 1 && top >= 0;
        });
      } catch {
        failures.push(`${target.path} ${target.viewport}: FAQ did not pin within 8s`);
      }
    }
  }

  const metrics = await page.evaluate((currentTarget) => {
    const h1 = document.querySelector("h1");
    const h1Rect = h1?.getBoundingClientRect();
    const h1LineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;
    const index = document.querySelector(".product-section-index");
    const active = index?.querySelector("[data-section-link][aria-current]");
    const faq = document.getElementById("faq");
    const menu = document.querySelector(".mobile-menu");
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    return {
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      h1Lines: h1Rect && h1LineHeight ? Math.round(h1Rect.height / h1LineHeight) : 0,
      navDisplay: getComputedStyle(document.querySelector(".nav")).display,
      mobileDisplay: getComputedStyle(menu).display,
      menuOpen: menu?.hasAttribute("open") ?? false,
      activeHref: active?.getAttribute("href") ?? null,
      faqTop: faq ? Math.round(faq.getBoundingClientRect().top) : null,
      scrolledToEnd: window.scrollY >= maxY - 1,
      state: currentTarget.state,
    };
  }, target);

  const name = screenshotName(target);
  const actualPath = path.join(outDir, name);
  const expectedPath = path.join(baselineDir, name);
  // Blocks filled from live data at build time (the Home "Just shipped"
  // strip quotes the latest release notes) are taken out of the layout, so
  // a new release never moves a baseline.
  await page.evaluate(() => {
    for (const element of document.querySelectorAll("[data-visual-live]")) element.style.display = "none";
  });
  // A section target captures only its own section, so data synced at build
  // time elsewhere on the page (versions, release notes) never moves it.
  const clip =
    target.state === "section"
      ? await page.evaluate((id) => {
          const box = document.getElementById(id)?.closest("section")?.getBoundingClientRect();
          return box
            ? {
                x: 0,
                y: Math.max(0, box.top),
                width: window.innerWidth,
                height: Math.min(box.height, window.innerHeight - Math.max(0, box.top)),
              }
            : undefined;
        }, target.section)
      : undefined;
  await page.screenshot({ path: actualPath, fullPage: false, animations: "disabled", clip });
  const screenshotSize = fs.statSync(actualPath).size;

  if (metrics.overflow > 1)
    failures.push(`${target.path} ${target.viewport}: horizontal overflow ${metrics.overflow}px`);
  if (metrics.h1Lines > 2) failures.push(`${target.path} ${target.viewport}: h1 wraps to ${metrics.h1Lines} lines`);
  if (target.viewport === "mobile" && metrics.navDisplay !== "none")
    failures.push(`${target.path} mobile: desktop nav visible`);
  if (target.viewport === "mobile" && metrics.mobileDisplay !== "block")
    failures.push(`${target.path} mobile: mobile menu hidden`);
  if (target.state === "menu" && !metrics.menuOpen) failures.push(`${target.path} mobile: menu baseline did not open`);
  if (target.state === "faq" && metrics.activeHref !== "#faq")
    failures.push(`${target.path} ${target.viewport}: FAQ baseline active href is ${metrics.activeHref}`);
  if (target.state === "faq" && (metrics.faqTop === null || metrics.faqTop < 0))
    failures.push(`${target.path} ${target.viewport}: FAQ top is ${metrics.faqTop}`);
  // Short FAQ sections cannot pin under the sticky index; max-scroll is enough.
  if (target.state === "faq" && metrics.faqTop > 220 && !metrics.scrolledToEnd)
    failures.push(`${target.path} ${target.viewport}: FAQ top is ${metrics.faqTop}`);
  if (screenshotSize < 10_000) failures.push(`${target.path} ${target.viewport}: screenshot too small`);

  if (approve) fs.copyFileSync(actualPath, expectedPath);
  else if (!fs.existsSync(expectedPath)) failures.push(`${name}: missing committed visual baseline`);
  else {
    const ratio = await changedPixelRatio(actualPath, expectedPath);
    const limit = target.state === "faq" ? faqChangedPixelLimit : changedPixelLimit;
    if (ratio > limit)
      failures.push(`${name}: ${(ratio * 100).toFixed(2)}% pixels changed (limit ${(limit * 100).toFixed(2)}%)`);
  }
  await page.close();
}
await browser.close();

if (failures.length > 0) {
  console.error("Visual baseline check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `${approve ? "Visual baselines approved" : "Visual baseline check passed"}: ${baseline.targets.length} screenshots`,
);

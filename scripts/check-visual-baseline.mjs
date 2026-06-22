import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import sharp from "sharp";
import baseline from "../src/content/visualBaseline.json" with { type: "json" };

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outDir = process.env.VISUAL_BASELINE_OUT_DIR ?? "/tmp/titpea-visual-baseline";
const baselinePlatform = process.env.VISUAL_BASELINE_PLATFORM ?? process.platform;
const baselineDir = path.join("tests/visual-baselines", baselinePlatform);
const approve = process.env.VISUAL_APPROVE === "1";
const changedPixelLimit = 0.004;
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
  return `${target.viewport}${route}_${target.state}.png`;
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
  const page = await browser.newPage({ viewport: viewports[target.viewport] });
  page.setDefaultTimeout(8_000);
  await page.goto(`${baseUrl}${target.path}`, { waitUntil: "networkidle", timeout: 12_000 });
  await page.locator("body").waitFor({ state: "visible", timeout: 8_000 });

  if (target.state === "menu") await page.locator(".mobile-menu summary").click();
  if (target.state === "faq") {
    const faqLink = page.locator('.product-section-index a[href="#faq"]');
    const count = await faqLink.count();
    if (count !== 1) failures.push(`${target.path} ${target.viewport}: expected one FAQ section link, found ${count}`);
    else {
      await faqLink.evaluate((link) => link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" }));
      await faqLink.click();
      await page.waitForTimeout(250);
    }
  }

  const metrics = await page.evaluate((currentTarget) => {
    const h1 = document.querySelector("h1");
    const h1Rect = h1?.getBoundingClientRect();
    const h1LineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;
    const index = document.querySelector(".product-section-index");
    const active = index?.querySelector("a[aria-current]");
    const faq = document.getElementById("faq");
    const menu = document.querySelector(".mobile-menu");
    return {
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      h1Lines: h1Rect && h1LineHeight ? Math.round(h1Rect.height / h1LineHeight) : 0,
      navDisplay: getComputedStyle(document.querySelector(".nav")).display,
      mobileDisplay: getComputedStyle(menu).display,
      menuOpen: menu?.hasAttribute("open") ?? false,
      activeHref: active?.getAttribute("href") ?? null,
      faqTop: faq ? Math.round(faq.getBoundingClientRect().top) : null,
      state: currentTarget.state,
    };
  }, target);

  const name = screenshotName(target);
  const actualPath = path.join(outDir, name);
  const expectedPath = path.join(baselineDir, name);
  await page.screenshot({ path: actualPath, fullPage: false, animations: "disabled" });
  const screenshotSize = fs.statSync(actualPath).size;

  if (metrics.overflow > 1)
    failures.push(`${target.path} ${target.viewport}: horizontal overflow ${metrics.overflow}px`);
  if (metrics.h1Lines > 3) failures.push(`${target.path} ${target.viewport}: h1 wraps to ${metrics.h1Lines} lines`);
  if (target.viewport === "mobile" && metrics.navDisplay !== "none")
    failures.push(`${target.path} mobile: desktop nav visible`);
  if (target.viewport === "mobile" && metrics.mobileDisplay !== "block")
    failures.push(`${target.path} mobile: mobile menu hidden`);
  if (target.state === "menu" && !metrics.menuOpen) failures.push(`${target.path} mobile: menu baseline did not open`);
  if (target.state === "faq" && metrics.activeHref !== "#faq")
    failures.push(`${target.path} ${target.viewport}: FAQ baseline active href is ${metrics.activeHref}`);
  if (target.state === "faq" && (metrics.faqTop === null || metrics.faqTop < 0 || metrics.faqTop > 220))
    failures.push(`${target.path} ${target.viewport}: FAQ top is ${metrics.faqTop}`);
  if (screenshotSize < 10_000) failures.push(`${target.path} ${target.viewport}: screenshot too small`);

  if (approve) fs.copyFileSync(actualPath, expectedPath);
  else if (!fs.existsSync(expectedPath)) failures.push(`${name}: missing committed visual baseline`);
  else {
    const ratio = await changedPixelRatio(actualPath, expectedPath);
    if (ratio > changedPixelLimit)
      failures.push(
        `${name}: ${(ratio * 100).toFixed(2)}% pixels changed (limit ${(changedPixelLimit * 100).toFixed(2)}%)`,
      );
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

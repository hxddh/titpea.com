import { baseUrl, outDir, screenshotName } from "./config.mjs";
import { visit } from "./browser.mjs";
import { sectionIndexPolicy } from "../../src/scripts/section-index-policy.ts";

async function sectionState(page, href) {
  return page.evaluate((href) => {
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
  }, href);
}

function checkClickedSection(viewport, path, anchors, anchor, state, screenshot, pointer = false) {
  return {
    viewport: viewport.name,
    path: `${path} ${pointer ? "pointer" : "anchor"}:${anchor.label}`,
    overflow: 0,
    nav: viewport.name === "desktop" ? "flex" : "none",
    mobile: viewport.name === "desktop" ? "none" : "block",
    h1: pointer ? "pointer-click" : "anchor-click",
    h1Lines: 1,
    anchorCount: anchors.length,
    textOk:
      state.targetExists &&
      state.indexPosition === (viewport.name === "desktop" ? "sticky" : "static") &&
      (viewport.name === "desktop" ? state.indexOverflow <= 1 : state.indexOverflow >= 0) &&
      (viewport.name !== "desktop" || (state.indexTop !== null && state.indexTop >= 0)) &&
      state.currentCount === 1 &&
      state.currentHref === anchor.href &&
      state.targetTop !== null &&
      state.targetTop >= (viewport.name === "desktop" ? (state.indexBottom ?? 0) : 0) &&
      state.targetTop < viewport.height - 24,
    details: state,
    screenshot,
  };
}

export async function checkSectionIndex(page, viewport, route) {
  const path = route.path;
  const results = [];
  await visit(page, new URL(path, baseUrl), `${viewport.name} anchors`);
  const anchors = await page.locator(".product-section-index a").evaluateAll((links) =>
    links.map((link, index) => ({
      index,
      href: link.getAttribute("href") ?? "",
      label: link.textContent?.trim() ?? "",
    })),
  );

  for (const anchor of anchors) {
    await visit(page, new URL(path, baseUrl), `${viewport.name} anchor ${anchor.label}`);
    const anchorLink = page.locator(".product-section-index a").nth(anchor.index);
    await anchorLink.evaluate((link) => {
      link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
      link.click();
    });
    await page.waitForTimeout(sectionIndexPolicy.qaClickWaitMs);
    const scrollState = await sectionState(page, anchor.href);
    const anchorScreenshot = screenshotName(viewport.name, path, `_anchor-${scrollState.targetId}`);
    await page.screenshot({ path: `${outDir}/${anchorScreenshot}`, fullPage: false });
    results.push(checkClickedSection(viewport, path, anchors, anchor, scrollState, anchorScreenshot));

    if (viewport.name !== "desktop") {
      await visit(page, new URL(path, baseUrl), `${viewport.name} pointer ${anchor.label}`);
      await page.locator("[data-section-index-toggle]").click();
      const pointerAnchor = page.locator(".product-section-index a").nth(anchor.index);
      await pointerAnchor.evaluate((link) => {
        link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
      });
      await pointerAnchor.click();
      await page.waitForTimeout(sectionIndexPolicy.qaClickWaitMs);
      const pointerState = await sectionState(page, anchor.href);
      const pointerScreenshot = screenshotName(viewport.name, path, `_pointer-${pointerState.targetId}`);
      await page.screenshot({ path: `${outDir}/${pointerScreenshot}`, fullPage: false });
      results.push(checkClickedSection(viewport, path, anchors, anchor, pointerState, pointerScreenshot, true));
    }
  }

  if (viewport.name !== "desktop") return results;

  await page.evaluate(() => window.scrollTo({ top: 2600, left: 0, behavior: "instant" }));
  await page.waitForTimeout(sectionIndexPolicy.qaStickyWaitMs);
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
  const screenshot = screenshotName(viewport.name, path, "_sticky-scroll");
  await page.screenshot({ path: `${outDir}/${screenshot}`, fullPage: false });
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
      stickyState.indexTop === sectionIndexPolicy.stickyTopPx &&
      (viewport.name === "desktop" ? stickyState.indexOverflow <= 1 : stickyState.indexOverflow >= 0) &&
      stickyState.currentCount === 1,
    details: stickyState,
    screenshot,
  });

  return results;
}

import { baseUrl, outDir, screenshotName } from "./config.mjs";
import { settle, visit } from "./browser.mjs";
import { sectionIndexPolicy } from "../../src/scripts/section-index-policy.ts";

// Past the index's own re-read after a click, plus a few frames for it to land.
const clickSettleMs = sectionIndexPolicy.clickStabilizeDelayMs + 100;

async function sectionState(page, href) {
  return page.evaluate((href) => {
    const targetId = decodeURIComponent(href.slice(1));
    const index = document.querySelector(".product-section-index");
    const target = document.getElementById(targetId);
    const indexRect = index?.getBoundingClientRect();
    const rect = target?.getBoundingClientRect();
    const active = index?.querySelector("[data-section-link][aria-current]");
    return {
      targetId,
      indexPosition: index ? getComputedStyle(index).position : null,
      indexOverflow: index ? index.scrollWidth - index.clientWidth : 0,
      indexTop: indexRect ? Math.round(indexRect.top) : null,
      indexBottom: indexRect ? Math.round(indexRect.bottom) : null,
      currentCount: index ? index.querySelectorAll("[data-section-link][aria-current]").length : 0,
      currentHref: active?.getAttribute("href") ?? null,
      targetTop: rect ? Math.round(rect.top) : null,
      targetExists: Boolean(target),
    };
  }, href);
}

function checkClickedSection(viewport, path, anchorCount, anchor, state, screenshot, pointer = false) {
  return {
    viewport: viewport.name,
    path: `${path} ${pointer ? "pointer" : "anchor"}:${anchor.label}`,
    overflow: 0,
    nav: viewport.name === "desktop" ? "flex" : "none",
    mobile: viewport.name === "desktop" ? "none" : "block",
    h1: pointer ? "pointer-click" : "anchor-click",
    h1Lines: 1,
    anchorCount,
    textOk:
      Boolean(anchor.href) &&
      state.targetExists &&
      state.indexPosition === "sticky" &&
      state.indexOverflow <= 1 &&
      state.indexTop !== null &&
      state.indexTop >= 0 &&
      state.currentCount === 1 &&
      state.currentHref === anchor.href &&
      state.targetTop !== null &&
      state.targetTop >= (state.indexBottom ?? 0) &&
      state.targetTop < viewport.height - 24,
    details: state,
    screenshot,
  };
}

/**
 * One task per local-nav link and viewport (a scripted click; on tablet and
 * phone also a real pointer click through the opened menu), plus one sticky
 * scroll check. Each starts from a fresh load, so tasks run in any order.
 */
export function sectionIndexTasks(routes, viewports) {
  return viewports.flatMap((viewport) =>
    routes
      .filter((route) => route.sectionIndex)
      .flatMap((route) => [
        ...Array.from({ length: route.sectionLinks ?? 0 }, (_, index) => [
          { kind: "anchor", viewport, route, index },
          ...(viewport.name !== "desktop" ? [{ kind: "pointer", viewport, route, index }] : []),
        ]).flat(),
        { kind: "sticky", viewport, route },
      ]),
  );
}

async function anchorAt(page, index) {
  return page.locator(".product-section-index [data-section-link]").evaluateAll(
    (links, index) => ({
      count: links.length,
      index,
      href: links[index]?.getAttribute("href") ?? "",
      label: links[index]?.textContent?.trim() ?? `#${index}`,
    }),
    index,
  );
}

export async function runSectionIndexTask(page, task) {
  const { viewport, route } = task;
  const path = route.path;
  await visit(page, new URL(path, baseUrl), `${viewport.name} ${task.kind} ${path}`, { images: false });
  await page.evaluate(() => document.fonts.ready);

  if (task.kind === "sticky") return checkSticky(page, viewport, path);

  const anchor = await anchorAt(page, task.index);
  const link = page.locator(".product-section-index [data-section-link]").nth(task.index);
  if (task.kind === "anchor") {
    await link.evaluate((link) => {
      link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
      link.click();
    });
  } else {
    // The local nav appears once the site header has scrolled away (chrome.css),
    // so a reader reaches its menu after scrolling, not at the top of the page.
    await page.evaluate(() => {
      const header = document.querySelector(".site-header");
      window.scrollTo({ top: (header?.getBoundingClientRect().height ?? 0) + 400, left: 0, behavior: "instant" });
    });
    await page.locator(".product-section-index[data-pinned]").waitFor({ state: "attached" });
    await settle(page, 250);
    await page.locator("[data-section-index-toggle]").click();
    await link.evaluate((link) => {
      link.scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
    });
    await link.click();
  }
  await settle(page, clickSettleMs);
  const state = await sectionState(page, anchor.href);
  const screenshot = screenshotName(viewport.name, path, `_${task.kind}-${state.targetId || task.index}`);
  await page.screenshot({ path: `${outDir}/${screenshot}`, fullPage: false });
  return checkClickedSection(viewport, path, anchor.count, anchor, state, screenshot, task.kind === "pointer");
}

async function checkSticky(page, viewport, path) {
  await page.evaluate(() => window.scrollTo({ top: 2600, left: 0, behavior: "instant" }));
  await settle(page, 0);
  const stickyState = await page.evaluate(() => {
    const index = document.querySelector(".product-section-index");
    const rect = index?.getBoundingClientRect();
    return {
      indexPosition: index ? getComputedStyle(index).position : null,
      indexTop: rect ? Math.round(rect.top) : null,
      indexOverflow: index ? index.scrollWidth - index.clientWidth : 0,
      currentCount: index ? index.querySelectorAll("[data-section-link][aria-current]").length : 0,
    };
  });
  const screenshot = screenshotName(viewport.name, path, "_sticky-scroll");
  await page.screenshot({ path: `${outDir}/${screenshot}`, fullPage: false });
  return {
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
      stickyState.indexOverflow <= 1 &&
      stickyState.currentCount === 1,
    details: stickyState,
    screenshot,
  };
}

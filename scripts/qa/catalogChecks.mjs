import { baseUrl, outDir } from "./config.mjs";
import { visit } from "./browser.mjs";

/** One facet task per Home page and viewport. */
export function catalogTasks(routes, viewports) {
  return routes
    .filter((route) => route.kind === "home")
    .flatMap((route) => viewports.map((viewport) => ({ kind: "catalog", viewport, route })));
}

/**
 * Home catalog facets: the script reveals both rows; "For" and "Runs on"
 * combine (a card shows only when it matches both); pressing a value again
 * returns to all; and on phones each row stays one line that scrolls inside
 * itself, never widening the page.
 */
export async function checkCatalogFacets(page, task) {
  const { viewport, route } = task;
  await visit(page, new URL(route.path, baseUrl), `${viewport.name} catalog`, { images: false });
  const state = () =>
    page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll("[data-home-catalog] > li"));
      const shown = cards.filter((card) => !card.hidden && card.getBoundingClientRect().height > 0);
      const rows = Array.from(document.querySelectorAll(".home-facet"));
      return {
        facetsVisible: Boolean(document.querySelector("[data-home-filter]:not([hidden])")),
        cards: cards.length,
        shown: shown.length,
        shownMatch: shown.every(
          (card) =>
            card.dataset.purposes.split(" ").includes("agents") && card.dataset.platforms.split(" ").includes("mac"),
        ),
        count: document.querySelector("[data-count-template]")?.textContent?.trim() ?? "",
        // Buttons in a row share one top edge: the row does not wrap.
        rowLines: rows.map(
          (row) => new Set(Array.from(row.querySelectorAll("button"), (button) => Math.round(button.offsetTop))).size,
        ),
        pressed: Array.from(
          document.querySelectorAll(".home-facet button[aria-pressed='true']"),
          (button) => button.dataset.value,
        ),
        overflow: document.documentElement.scrollWidth - window.innerWidth,
      };
    });
  const before = await state();
  await page.locator('[data-facet="purpose"][data-value="agents"]').click();
  await page.locator('[data-facet="platform"][data-value="mac"]').click();
  const filtered = await state();
  await page.screenshot({
    path: `${outDir}/${viewport.name}-catalog-filtered${route.locale === "zh" ? "-zh" : ""}.png`,
  });
  await page.locator('[data-facet="platform"][data-value="mac"]').click();
  const toggledBack = await state();
  const expected = route.catalogCounts;
  const phone = viewport.name === "mobile";
  const ok =
    before.facetsVisible &&
    before.cards === expected.all &&
    before.shown === expected.all &&
    filtered.shown === expected.agentsOnMac &&
    filtered.shown > 0 &&
    filtered.shownMatch &&
    filtered.count.includes(String(expected.agentsOnMac)) &&
    filtered.pressed.join(",") === "agents,mac" &&
    toggledBack.shown === expected.agents &&
    toggledBack.pressed.join(",") === "agents,all" &&
    (!phone || before.rowLines.every((lines) => lines === 1)) &&
    Math.max(before.overflow, filtered.overflow) <= 1;
  return {
    viewport: viewport.name,
    path: `${route.path} catalog`,
    overflow: Math.max(before.overflow, filtered.overflow),
    nav: viewport.name === "desktop" ? "flex" : "none",
    mobile: viewport.name === "desktop" ? "none" : "block",
    h1: "catalog",
    h1Lines: 1,
    anchorCount: 0,
    textOk: ok,
    details: ok ? undefined : { expected, before, filtered, toggledBack },
    screenshot: `${viewport.name}-catalog-filtered${route.locale === "zh" ? "-zh" : ""}.png`,
  };
}

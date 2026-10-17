import { baseUrl, outDir } from "./config.mjs";
import { visit } from "./browser.mjs";

/** The phone menu opens and marks exactly one current page; checked on the first Chinese product page. */
export async function checkMobileMenu(page, routes) {
  const route = routes.find((route) => route.kind === "product" && route.locale === "zh") ?? routes[0];
  await visit(page, new URL(route.path, baseUrl), "mobile menu", { images: false });
  await page.locator(".mobile-menu summary").click();
  const menuState = await page.evaluate(() => ({
    open: document.querySelector(".mobile-menu")?.hasAttribute("open") ?? false,
    linkCount: document.querySelectorAll(".mobile-menu-panel a").length,
    currentCount: document.querySelectorAll(".mobile-menu-panel a[aria-current='page']").length,
  }));
  await page.screenshot({ path: `${outDir}/mobile-menu-open.png`, fullPage: false });
  return {
    viewport: "mobile",
    path: `${route.path} menu`,
    overflow: 0,
    nav: "none",
    mobile: "block",
    h1: "menu",
    h1Lines: 1,
    anchorCount: 0,
    textOk: menuState.open && menuState.linkCount >= 8 && menuState.currentCount === 1,
    details: menuState,
    screenshot: "mobile-menu-open.png",
  };
}

import { baseUrl, outDir } from "./config.mjs";
import { visit } from "./browser.mjs";

export async function checkMobileMenu(page) {
  await visit(page, new URL("/zh/s3-turbo-list/", baseUrl), "mobile menu");
  await page.locator(".mobile-menu summary").click();
  const menuState = await page.evaluate(() => ({
    open: document.querySelector(".mobile-menu")?.hasAttribute("open") ?? false,
    linkCount: document.querySelectorAll(".mobile-menu-panel a").length,
    currentCount: document.querySelectorAll(".mobile-menu-panel a[aria-current='page']").length,
  }));
  await page.screenshot({ path: `${outDir}/mobile-menu-open.png`, fullPage: false });
  return {
    viewport: "mobile",
    path: "/zh/s3-turbo-list/ menu",
    overflow: 0,
    nav: "none",
    mobile: "block",
    h1: "menu",
    h1Lines: 1,
    anchorCount: 0,
    textOk: menuState.open && menuState.linkCount >= 8 && menuState.currentCount === 1,
  };
}

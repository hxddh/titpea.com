import fs from "node:fs";
import { baseUrl, outDir, screenshotName } from "./config.mjs";
import { visit } from "./browser.mjs";
import { zhForbiddenTerms } from "../copy-rules.mjs";

export async function checkRoute(page, viewport, route) {
  const path = route.path;
  await visit(page, new URL(path, baseUrl), `${viewport.name} route`);
  const metrics = await page.evaluate(
    ({ route, zhForbiddenTerms }) => {
      const nav = document.querySelector(".nav");
      const mobile = document.querySelector(".mobile-menu");
      const h1 = document.querySelector("h1");
      const lead = document.querySelector(".lead");
      const rect = h1?.getBoundingClientRect();
      const lineHeight = h1 ? Number.parseFloat(getComputedStyle(h1).lineHeight) : 0;
      const leadRect = lead?.getBoundingClientRect();
      const leadLineHeight = lead ? Number.parseFloat(getComputedStyle(lead).lineHeight) : 0;
      const origin = window.location.origin;
      const expectedPrimary = route.primaryCta ? new URL(route.primaryCta, origin).href : null;
      const primaryCta = document.querySelector(".home-featured-card, .button.primary");
      const structuredData = document.querySelector('script[type="application/ld+json"]')?.textContent ?? null;
      const hero = document.querySelector(".home-hero, .about-hero, .product-hero");
      const heroActions = hero?.querySelectorAll(".actions a") ?? [];
      const cards = Array.from(document.querySelectorAll(".section-card-grid > article"));
      const cardHeights = cards.map((card) => Math.round(card.getBoundingClientRect().height));

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
        structuredDataOk: route.kind === "product" ? Boolean(structuredData?.includes('"SoftwareApplication"')) : true,
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
        leadLines: leadRect && leadLineHeight ? Math.round(leadRect.height / leadLineHeight) : 0,
        heroCtaCount: heroActions.length,
        heroTop: hero ? Math.round(hero.getBoundingClientRect().top) : null,
        cardHeightSpread: cardHeights.length > 1 ? Math.max(...cardHeights) - Math.min(...cardHeights) : 0,
        anchorCount: document.querySelectorAll(".product-section-index [data-section-link]").length,
        productIndex: (() => {
          const index = document.querySelector(".product-section-index");
          if (!index) return null;
          const style = getComputedStyle(index);
          return {
            position: style.position,
            overflow: index.scrollWidth - index.clientWidth,
            top: Math.round(index.getBoundingClientRect().top),
            currentCount: index.querySelectorAll("[data-section-link][aria-current]").length,
            linkRows: new Set(
              Array.from(index.querySelectorAll("[data-section-link]")).map((link) =>
                Math.round(link.getBoundingClientRect().top),
              ),
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
        browserVisual: route.browserVisual
          ? (() => {
              const images = Array.from(document.querySelectorAll(".product-scene img"));
              return {
                imageCount: images.length,
                hasChromeCta: Boolean(
                  document.querySelector(`a.button.primary[href^="https://chromewebstore.google.com/detail"]`),
                ),
                hasPrivacyText:
                  route.locale === "zh"
                    ? /声明不收集数据|不使用分析服务|没有分析服务|无分析服务/.test(document.body.innerText ?? "")
                    : /No data collection disclosed|does not use analytics|no analytics/i.test(
                        document.body.innerText ?? "",
                      ),
                images: images.map((image) => ({
                  src: image.getAttribute("src"),
                  alt: image.getAttribute("alt") ?? "",
                  naturalWidth: image.naturalWidth,
                  naturalHeight: image.naturalHeight,
                })),
              };
            })()
          : null,
        oldS3Facts: document.body.innerText.includes("MIT License") || document.body.innerText.includes("v0.5.0"),
        text: document.body.innerText,
      };
    },
    { route, zhForbiddenTerms },
  );

  const filename = screenshotName(viewport.name, path);
  await page.screenshot({ path: `${outDir}/${filename}`, fullPage: false });
  const screenshotSize = fs.statSync(`${outDir}/${filename}`).size;
  const textOk = route.expectedText.every((text) => metrics.text.includes(text));
  delete metrics.text;
  return { viewport: viewport.name, path, textOk, route, screenshotSize, ...metrics };
}

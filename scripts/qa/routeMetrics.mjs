import fs from "node:fs";
import { baseUrl, outDir, screenshotName } from "./config.mjs";
import { visit } from "./browser.mjs";
import { forbiddenTermQuotes, zhForbiddenTerms } from "../copy-rules.mjs";

export async function checkRoute(page, viewport, route) {
  const path = route.path;
  await visit(page, new URL(path, baseUrl), `${viewport.name} route`, { images: true });
  const metrics = await page.evaluate(
    ({ route, zhForbiddenTerms, forbiddenTermQuotes }) => {
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
      const heroActions = hero?.querySelectorAll(".actions a, .actions .button.is-soon") ?? [];
      // Height spread among the cards of one grid; the worst grid on the page counts.
      const gridSpreads = Array.from(document.querySelectorAll(".feature-grid")).map((grid) => {
        const heights = Array.from(grid.querySelectorAll(":scope > article"), (card) =>
          Math.round(card.getBoundingClientRect().height),
        );
        return heights.length > 1 ? Math.max(...heights) - Math.min(...heights) : 0;
      });

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
        // Prose only: commands and code are quoted verbatim from the product's docs.
        visibleForbiddenTerms:
          route.locale === "zh"
            ? (() => {
                const prose = document.body.cloneNode(true);
                prose.querySelectorAll("pre, code, script").forEach((node) => node.remove());
                // A product's own UI label, quoted as it appears, is allowed (copy-rules.mjs).
                const quoted = forbiddenTermQuotes.reduce(
                  (rest, quote) => rest.split(quote).join(""),
                  prose.textContent ?? "",
                );
                const text = quoted.toLowerCase();
                return zhForbiddenTerms.filter((term) => text.includes(term.trim().toLowerCase()));
              })()
            : [],
        nav: nav ? getComputedStyle(nav).display : null,
        mobile: mobile ? getComputedStyle(mobile).display : null,
        h1: h1?.textContent?.trim() ?? "",
        h1Lines: rect && lineHeight ? Math.round(rect.height / lineHeight) : 0,
        leadLines: leadRect && leadLineHeight ? Math.round(leadRect.height / leadLineHeight) : 0,
        heroCtaCount: heroActions.length,
        heroTop: hero ? Math.round(hero.getBoundingClientRect().top) : null,
        cardHeightSpread: Math.max(0, ...gridSpreads),
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
        featuresGrid: document.querySelector(".feature-grid")
          ? getComputedStyle(document.querySelector(".feature-grid")).display
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
                // A working copy of the extension as the hero object stands in for its screenshot.
                liveDemo: Boolean(document.querySelector(".hero-demo .demo-figure")),
                // A listing still in review shows the unlinked "coming soon" action instead.
                hasChromeCta: Boolean(
                  document.querySelector(
                    `a.button.primary[href^="https://chromewebstore.google.com/detail"], .product-hero .button.primary.is-soon`,
                  ),
                ),
                hasPrivacyText:
                  route.locale === "zh"
                    ? /声明不收集数据|不收集数据|不收集任何数据|不使用分析服务|没有分析服务|无分析服务/.test(
                        document.body.innerText ?? "",
                      )
                    : /No data collection|does not use analytics|no analytics/i.test(document.body.innerText ?? ""),
                images: images.map((image) => ({
                  src: image.getAttribute("src"),
                  alt: image.getAttribute("alt") ?? "",
                  // The source screenshot's size (width/height attributes), not the
                  // srcset candidate this viewport happened to load.
                  sourceWidth: Number(image.getAttribute("width")),
                  sourceHeight: Number(image.getAttribute("height")),
                  loaded: image.complete && image.naturalWidth > 0,
                })),
              };
            })()
          : null,
        text: document.body.innerText,
      };
    },
    { route, zhForbiddenTerms, forbiddenTermQuotes },
  );

  const filename = screenshotName(viewport.name, path);
  await page.screenshot({ path: `${outDir}/${filename}`, fullPage: false });
  const screenshotSize = fs.statSync(`${outDir}/${filename}`).size;
  const textOk = route.expectedText.every((text) => metrics.text.includes(text));
  delete metrics.text;
  return { viewport: viewport.name, path, textOk, route, screenshotSize, ...metrics };
}

import { screenshotName } from "./config.mjs";

// The build appends ?v=<content hash> to asset URLs (src/integrations/asset-versions.mjs).
const unversioned = (url) => url?.replace(/\?v=[0-9a-f]+$/, "");

export function failureReasons(result) {
  const isDesktop = result.viewport === "desktop";
  const isAsset = result.viewport === "asset";
  // A route visit carries its route; menu, anchor, pointer and sticky checks do not.
  const isAuxCheck = !isAsset && !result.route;
  // Which pages are product pages, and how many section links each shows,
  // come from the product data (siteRoutes), never from a list of slugs.
  const isProductPage = !isAsset && result.route?.kind === "product";
  const isBrowserProductPage = !isAsset && result.route?.browserVisual;
  const isPrivacy = result.route?.kind === "privacy";
  const navOk = isDesktop
    ? result.nav === "flex" && result.mobile === "none"
    : isAsset
      ? true
      : result.nav === "none" && result.mobile === "block";
  const anchorOk = isProductPage ? result.anchorCount === (result.route.sectionLinks ?? 0) : true;
  // Every product page pins its local nav; pages with sections also mark one active.
  const productIndexOk = result.productIndex
    ? result.productIndex.position === "sticky" &&
      result.productIndex.overflow <= 1 &&
      result.productIndex.currentCount === (result.anchorCount > 0 ? 1 : 0) &&
      (isDesktop || result.productIndex.linkRows <= 1)
    : !isProductPage || isAuxCheck;
  const featuresGridOk =
    isProductPage && !isAuxCheck && result.featuresGrid !== null ? result.featuresGrid === "grid" : true;
  // Every route visit loads every image; none may be broken. Extension pages must also show some.
  const imagesOk =
    isAsset || isAuxCheck ? true : result.brokenImages === 0 && (!isBrowserProductPage || result.imageCount > 0);
  const browserVisualOk = result.browserVisual
    ? result.browserVisual.hasChromeCta &&
      result.browserVisual.hasPrivacyText &&
      result.browserVisual.imageCount > 0 &&
      result.browserVisual.images.every(
        (image) => image.alt.length > 12 && image.loaded && image.sourceWidth >= 600 && image.sourceHeight >= 600,
      )
    : true;
  const route = result.route;
  const isHome = route?.kind === "home";
  const reasons = [];
  if (result.overflow > 1) reasons.push(`horizontal overflow ${result.overflow}px`);
  if (result.h1Lines > 2) reasons.push(`h1 wraps to ${result.h1Lines} lines`);
  // A privacy policy is a document: its lead is a paragraph and it has no actions.
  if (!isAsset && !isAuxCheck && !isPrivacy && result.leadLines > (result.viewport === "mobile" ? 5 : 4)) {
    reasons.push(`lead wraps to ${result.leadLines} lines`);
  }
  if (!isAsset && !isAuxCheck && isHome && result.heroCtaCount !== 2) {
    reasons.push(`home hero should have 2 CTAs, got ${result.heroCtaCount}`);
  }
  // About keeps its actions in the closing band; its hero has none, and nor
  // do the Releases and Privacy index pages, whose hero only names the list.
  const isAbout = ["about", "releases", "privacy"].includes(route?.kind);
  if (!isAsset && !isAuxCheck && isAbout && result.heroCtaCount !== 0) {
    reasons.push(`about hero should have no CTAs, got ${result.heroCtaCount}`);
  }
  if (
    !isAsset &&
    !isAuxCheck &&
    !isHome &&
    !isAbout &&
    !isPrivacy &&
    (result.heroCtaCount < 2 || result.heroCtaCount > 3)
  ) {
    reasons.push(`hero CTA count should be 2-3, got ${result.heroCtaCount}`);
  }
  if (!isAsset && !isAuxCheck && result.cardHeightSpread > 220) {
    reasons.push(`card height spread too large: ${result.cardHeightSpread}px`);
  }
  if (!isAsset && !isAuxCheck && result.screenshotSize < 20_000) {
    reasons.push(`screenshot too small: ${result.screenshotSize}`);
  }
  if (route && result.title !== route.title)
    reasons.push(`title mismatch: expected ${route.title}, got ${result.title}`);
  if (route && result.canonical !== `https://titpea.com${route.canonicalPath}`)
    reasons.push(`canonical mismatch: ${result.canonical}`);
  if (route && result.alternate !== `https://titpea.com${route.alternatePath}`)
    reasons.push(`alternate mismatch: ${result.alternate}`);
  if (route && unversioned(result.ogImage) !== `https://titpea.com${route.ogImage}`)
    reasons.push(`og:image mismatch: ${result.ogImage}`);
  if (route && unversioned(result.twitterImage) !== `https://titpea.com${route.ogImage}`)
    reasons.push(`twitter:image mismatch: ${result.twitterImage}`);
  if (route?.primaryCta && result.primaryCta !== result.expectedPrimary)
    reasons.push(`primary CTA mismatch: expected ${result.expectedPrimary}, got ${result.primaryCta}`);
  if (route?.kind === "product" && !result.structuredDataOk)
    reasons.push("missing SoftwareApplication structured data");
  if (result.visibleForbiddenTerms?.length > 0)
    reasons.push(`Chinese copy contains forbidden terms: ${result.visibleForbiddenTerms.join(", ")}`);
  if (!result.textOk)
    reasons.push(`content or interaction check failed${result.details ? `: ${JSON.stringify(result.details)}` : ""}`);
  if (!navOk) reasons.push(`navigation visibility mismatch: nav=${result.nav}, mobile=${result.mobile}`);
  if (!anchorOk) reasons.push(`anchor count mismatch: ${result.anchorCount}`);
  if (!productIndexOk) reasons.push(`product index state invalid: ${JSON.stringify(result.productIndex)}`);
  if (!featuresGridOk) reasons.push(`feature grid display mismatch: ${result.featuresGrid}`);
  if (!imagesOk) reasons.push(`image check failed: imageCount=${result.imageCount}, broken=${result.brokenImages}`);
  if (!browserVisualOk) reasons.push(`browser visual invalid: ${JSON.stringify(result.browserVisual)}`);

  return reasons;
}

export function collectFailures(results) {
  return results.flatMap((result) =>
    failureReasons(result).map((reason) => ({
      viewport: result.viewport,
      path: result.path,
      reason,
      screenshot: result.screenshot ?? screenshotName(result.viewport, result.path.split(" ")[0]),
    })),
  );
}

export function printQaReport(results) {
  const failures = collectFailures(results);
  if (process.env.QA_VERBOSE === "1") {
    console.table(results);
  }

  if (failures.length > 0) {
    console.error("QA failed:");
    failures.forEach((failure) => {
      console.error(`- [${failure.viewport}] ${failure.path}: ${failure.reason} (${failure.screenshot})`);
    });
    process.exit(1);
  }

  console.log(`QA passed: ${results.length} checks`);
}

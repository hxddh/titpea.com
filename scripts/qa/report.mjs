import { screenshotName } from "./config.mjs";

export function failureReasons(result) {
  const isDesktop = result.viewport === "desktop";
  const isAsset = result.viewport === "asset";
  const isProductPage =
    !isAsset &&
    (result.path.includes("s3-turbo-list") ||
      result.path.includes("storageops") ||
      result.path.includes("httpmon") ||
      result.path.includes("world-clock") ||
      result.path.includes("douban-movie-rating"));
  const isMainProductPage =
    !isAsset &&
    (result.path.includes("s3-turbo-list") || result.path.includes("storageops") || result.path.includes("httpmon"));
  const isBrowserProductPage = !isAsset && result.route?.browserVisual;
  const navOk = isDesktop
    ? result.nav === "flex" && result.mobile === "none"
    : isAsset
      ? true
      : result.nav === "none" && result.mobile === "block";
  const isAuxCheck =
    result.path.includes("menu") ||
    result.path.includes("anchor-click") ||
    result.path.includes("anchor:") ||
    result.path.includes("pointer:") ||
    result.path.includes("sticky-scroll");
  const anchorOk =
    isProductPage && !isAuxCheck ? (isMainProductPage ? result.anchorCount >= 4 : result.anchorCount === 0) : true;
  const productIndexOk = result.productIndex
    ? result.productIndex.position === (isDesktop ? "sticky" : "static") &&
      (isDesktop ? result.productIndex.overflow <= 1 : result.productIndex.overflow >= 0) &&
      result.productIndex.currentCount === 1 &&
      (isDesktop || result.productIndex.linkRows === 1)
    : true;
  const featuresGridOk =
    isProductPage && !isAuxCheck && result.featuresGrid !== null ? result.featuresGrid === "grid" : true;
  const imagesOk = isBrowserProductPage ? result.imageCount > 0 && result.brokenImages === 0 : true;
  const browserVisualOk = result.browserVisual
    ? result.browserVisual.hasChromeCta &&
      result.browserVisual.hasPrivacyText &&
      result.browserVisual.imageCount > 0 &&
      result.browserVisual.images.every(
        (image) => image.alt.length > 12 && image.naturalWidth >= 600 && image.naturalHeight >= 600,
      )
    : true;
  const route = result.route;
  const isHome = route?.kind === "home";
  const reasons = [];
  if (result.overflow > 1) reasons.push(`horizontal overflow ${result.overflow}px`);
  if (result.h1Lines > 3) reasons.push(`h1 wraps to ${result.h1Lines} lines`);
  if (!isAsset && !isAuxCheck && result.leadLines > (result.viewport === "mobile" ? 5 : 4)) {
    reasons.push(`lead wraps to ${result.leadLines} lines`);
  }
  if (!isAsset && !isAuxCheck && isHome && result.heroCtaCount !== 0) {
    reasons.push(`home hero should have no CTAs, got ${result.heroCtaCount}`);
  }
  if (!isAsset && !isAuxCheck && !isHome && (result.heroCtaCount < 2 || result.heroCtaCount > 3)) {
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
  if (route && result.ogImage !== `https://titpea.com${route.ogImage}`)
    reasons.push(`og:image mismatch: ${result.ogImage}`);
  if (route && result.twitterImage !== `https://titpea.com${route.ogImage}`)
    reasons.push(`twitter:image mismatch: ${result.twitterImage}`);
  if (route?.primaryCta && result.primaryCta !== result.expectedPrimary)
    reasons.push(`primary CTA mismatch: expected ${result.expectedPrimary}, got ${result.primaryCta}`);
  if (route?.kind === "product" && !result.structuredDataOk)
    reasons.push("missing SoftwareApplication structured data");
  if (result.visibleForbiddenTerms?.length > 0)
    reasons.push(`Chinese copy contains forbidden terms: ${result.visibleForbiddenTerms.join(", ")}`);
  if (result.oldS3Facts) reasons.push("outdated s3-turbo-list facts are still visible");
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

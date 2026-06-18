import { homeModelCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const pageCopy = homeModelCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = pageCopy.description;

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    title: siteConfig.brand,
    description,
    ogImage: siteConfig.assets.og.home,
    primaryCta: catalog.featuredProductPath,
    expectedText: [copy.homeTitle, pageCopy.expectedEvidence],
    seo: buildPageSeo({
      title: pageTitle(siteConfig.brand),
      description,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.home,
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: copy.productIndex,
      title: copy.homeTitle,
      lead: copy.homeLead,
      actions: [
        { label: copy.homePrimary, href: catalog.featuredProductPath, style: "primary" },
        { label: copy.homeSecondary, href: catalog.secondaryProductPath, style: "ghost" },
        { label: copy.homeAbout, href: pagePath(locale, "about"), style: "ghost" },
      ],
      proofLabel: pageCopy.proofLabel,
      proofItems: copy.proofItems,
    },
    flow: {
      label: copy.flowLabel,
      title: copy.flowTitle,
      body: copy.flowBody,
      items: catalog.storage,
    },
    evidence: {
      kicker: pageCopy.evidenceKicker,
      title: pageCopy.evidenceTitle,
      body: pageCopy.evidenceBody,
      cards: catalog.evidence,
    },
    thesis: {
      label: copy.thesisLabel,
      title: copy.thesisTitle,
      body: copy.thesisBody,
    },
    catalog: {
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    browser: {
      label: copy.browserLine,
      title: copy.browserTitle,
      body: pageCopy.browserBody,
      tools: catalog.browser,
      screenshotLabel: pageCopy.screenshotLabel,
      screenshots: [
        {
          href: pagePath(locale, "world-clock"),
          className: "browser-screenshot clock",
          src: siteConfig.assets.screenshots.worldClockDark,
          alt: pageCopy.worldClockAlt,
        },
        {
          href: pagePath(locale, "douban-movie-rating"),
          className: "browser-screenshot douban",
          src: siteConfig.assets.screenshots.doubanRatingAssistant,
          alt: pageCopy.doubanAlt,
        },
      ],
    },
  };
}

import { buildFeed } from "./home";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { buildSiteChrome } from "../siteChromeModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { AboutPageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildAboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale, "about");
  const alternatePath = pagePath(alternateLocale(locale), "about");
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage,
    mainEntity: {
      "@type": "Person",
      name: "hxddh",
      description: copy.aboutDescription,
      url: absoluteUrl(path),
      sameAs: [siteConfig.githubProfile],
      email: `mailto:${siteConfig.email}`,
    },
  };

  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    expectedText: [copy.aboutLead, catalog.storage[0]?.name ?? "", catalog.personal[0]?.name ?? ""],
    seo: buildPageSeo({
      title: pageTitle(copy.aboutTitle),
      description: copy.aboutDescription,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.about,
      structuredData,
    }),
    language: languageLink(locale, alternatePath),
    chrome: buildSiteChrome(locale, "about"),
    hero: {
      eyebrow: copy.aboutTitle,
      lead: copy.aboutLead,
    },
    feed: buildFeed(locale),
  };
}

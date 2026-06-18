import { ui } from "../i18n/siteCopy";
import { siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    primaryCta: pagePath(locale, "s3-turbo-list"),
    expectedText: [copy.homeTitle, copy.homeLead],
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
        { label: "s3-turbo-list", href: pagePath(locale, "s3-turbo-list"), style: "primary" },
        { label: "StorageOps", href: pagePath(locale, "storageops"), style: "ghost" },
        { label: "httpmon", href: siteConfig.externalLinks.httpmon, style: "ghost" },
      ],
    },
  };
}

import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import { pathFor, type Locale } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    primaryCta: catalog.featuredProductPath,
    expectedText: [copy.homeTitle, copy.storageTitle, copy.browserTitle],
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
        { label: "s3-turbo-list", href: catalog.featuredProductPath, style: "primary" },
        { label: "StorageOps", href: catalog.secondaryProductPath, style: "ghost" },
        { label: "httpmon", href: pathFor(locale, "httpmon"), style: "ghost" },
      ],
    },
    storage: {
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    browser: {
      label: copy.browserLine,
      title: copy.browserTitle,
      items: catalog.browser,
    },
  };
}

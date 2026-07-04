import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";
import { pathFor } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.storage.find((item) => item.slug === "storage-agent-workbench");
  const personalFlagship = catalog.personal.find((item) => item.slug === "pagewise");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: absoluteUrl(path),
    inLanguage,
    description,
    publisher: {
      "@type": "Person",
      name: "hxddh",
      url: siteConfig.githubProfile,
    },
  };

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    primaryCta: flagship?.href ?? catalog.featuredProductPath,
    expectedText: [copy.homeTitle, copy.storageTitle, copy.personalTitle],
    seo: buildPageSeo({
      title: pageTitle(siteConfig.brand),
      description,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.home,
      structuredData,
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: copy.productIndex,
      title: copy.homeTitle,
      lead: copy.homeLead,
      actions: [
        {
          label: flagship?.name ?? "Storage Agent",
          href: flagship?.href ?? catalog.featuredProductPath,
          style: "primary",
        },
        {
          label: personalFlagship?.name ?? "PageWise",
          href: personalFlagship?.href ?? pathFor(locale, "pagewise"),
          style: "ghost",
        },
      ],
    },
    storage: {
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    personal: {
      label: copy.personalLine,
      title: copy.personalTitle,
      items: catalog.personal,
    },
  };
}

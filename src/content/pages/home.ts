import { catalogCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { visualModel } from "../visualModels";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";
import { pathFor } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const pageCopy = catalogCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.flagship;
  const personalFlagship = catalog.personalFlagship;
  const flagshipHref = flagship?.href ?? catalog.featuredProductPath;
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
    primaryCta: flagshipHref,
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
          href: flagshipHref,
          style: "primary",
        },
        {
          label: personalFlagship?.name ?? "PageWise",
          href: personalFlagship?.href ?? pathFor(locale, "pagewise"),
          style: "ghost",
        },
      ],
      visual: visualModel("storageWorkbench", locale, pageCopy.homeFlagshipVisual),
      visualHref: flagshipHref,
      proofCaption: pageCopy.proofCaption,
    },
    storage: {
      id: "storage",
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    personal: {
      id: "personal",
      label: copy.personalLine,
      title: copy.personalTitle,
      items: catalog.personal,
    },
  };
}

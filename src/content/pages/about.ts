import { aboutModelCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { AboutPageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildAboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const pageCopy = aboutModelCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale, "about");
  const alternatePath = pagePath(alternateLocale(locale), "about");

  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    title: copy.aboutTitle,
    description: copy.aboutDescription,
    ogImage: siteConfig.assets.og.about,
    expectedText: [copy.aboutHeadline, copy.profileTitle],
    seo: buildPageSeo({
      title: pageTitle(copy.aboutTitle),
      description: copy.aboutDescription,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.about,
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: "hxddh",
      title: copy.aboutHeadline,
      lead: copy.aboutLead,
      contactLabel: pageCopy.contactLabel,
      actions: [
        { label: "GitHub", href: siteConfig.externalLinks.github, style: "primary" },
        { label: "Chrome Web Store", href: siteConfig.externalLinks.worldClockChrome, style: "ghost" },
        { label: "Email", href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
      systemLabel: pageCopy.systemLabel,
      groups: catalog.groups,
    },
    products: {
      label: copy.productsLabel,
      title: pageCopy.productsTitle,
      items: catalog.all,
    },
    profile: {
      label: copy.profileLabel,
      title: copy.profileTitle,
      body: copy.profileBody,
    },
    focus: {
      label: copy.focusLabel,
      title: pageCopy.focusTitle,
      items: copy.focusItems,
    },
  };
}

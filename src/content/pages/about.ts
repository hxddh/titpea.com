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
    expectedText: [copy.aboutHeadline, copy.profileTitle, pageCopy.productsTitle],
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
      eyebrow: copy.aboutTitle,
      title: copy.aboutHeadline,
      lead: copy.aboutLead,
      contactLabel: pageCopy.contactLabel,
      actions: [
        { label: "GitHub", href: siteConfig.externalLinks.github, style: "primary" },
        { label: "Email", href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
    },
    profile: {
      label: copy.profileLabel,
      title: copy.profileTitle,
      body: [...copy.profileBody],
    },
    focus: {
      label: copy.focusLabel,
      items: [...copy.focusItems],
    },
    products: {
      label: copy.productsLabel,
      title: pageCopy.productsTitle,
      items: catalog.all,
    },
  };
}

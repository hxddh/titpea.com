import { aboutModelCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { AboutPageModel } from "./types";
import type { Locale } from "../../lib/site";

export function buildAboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const pageCopy = aboutModelCopy[locale];
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
    expectedText: [copy.aboutLead, pageCopy.whyTitle, pageCopy.toolsLabel, catalog.storage[0]?.name ?? ""],
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
    hero: {
      eyebrow: copy.aboutTitle,
      lead: copy.aboutLead,
      body: pageCopy.heroBody,
    },
    why: {
      label: pageCopy.whyLabel,
      title: pageCopy.whyTitle,
      body: pageCopy.whyBody,
      lines: [
        { label: pageCopy.whyStorageLabel, body: pageCopy.whyStorageBody },
        { label: pageCopy.whyPersonalLabel, body: pageCopy.whyPersonalBody },
      ],
      closing: pageCopy.whyClosing,
    },
    tools: {
      label: pageCopy.toolsLabel,
      lines: [
        {
          label: copy.storageLine,
          items: catalog.storage.map((item) => ({
            name: item.name,
            href: item.href,
            role: item.displayRole,
            text: item.text,
          })),
        },
        {
          label: copy.personalLine,
          items: catalog.personal.map((item) => ({
            name: item.name,
            href: item.href,
            role: item.displayRole,
            text: item.text,
          })),
        },
      ],
    },
    contact: {
      label: pageCopy.contactLabel,
      actions: [
        { label: "GitHub", href: siteConfig.externalLinks.github, style: "primary", external: true },
        { label: "Email", href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
    },
  };
}

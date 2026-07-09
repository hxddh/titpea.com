import { aboutModelCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { AboutPageModel } from "./types";
import type { Locale } from "../../lib/site";
import { pathFor } from "../../lib/site";

export function buildAboutPage(locale: Locale): AboutPageModel {
  const copy = ui[locale];
  const pageCopy = aboutModelCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale, "about");
  const alternatePath = pagePath(alternateLocale(locale), "about");
  const homePath = pathFor(locale);
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.flagship;
  const personalFlagship = catalog.personalFlagship;
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

  const featuredItems = [flagship, personalFlagship]
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => ({
      name: item.name,
      href: item.href,
      text: item.text,
    }));

  return {
    kind: "about",
    locale,
    current: "about",
    path,
    alternatePath,
    expectedText: [copy.aboutLead, pageCopy.whyTitle, pageCopy.productsLabel, flagship?.name ?? ""],
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
        {
          label: pageCopy.whyStorageLabel,
          body: pageCopy.whyStorageBody,
          href: `${homePath}#storage`,
          browseLabel: `${pageCopy.browseLine} →`,
        },
        {
          label: pageCopy.whyPersonalLabel,
          body: pageCopy.whyPersonalBody,
          href: `${homePath}#personal`,
          browseLabel: `${pageCopy.browseLine} →`,
        },
      ],
      closing: pageCopy.whyClosing,
    },
    featured: {
      label: pageCopy.productsLabel,
      items: featuredItems,
      allProducts: {
        label: pageCopy.allProductsLabel,
        href: homePath,
      },
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

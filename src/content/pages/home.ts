import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { buildSiteChrome } from "../siteChromeModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { FeedFilterModel, HomePageModel } from "./types";
import type { Locale } from "../../lib/site";
import { pathFor } from "../../lib/site";

const homeCopy = {
  en: {
    surfacesTitle: "Two lines of tools",
    storageCount: (n: number) => `${n} CLI tools`,
    personalCount: (n: number) => `${n} extensions & apps`,
    explore: "Explore",
    filterLabel: "Filter",
    filterAll: "All",
    filterStorage: "Storage",
    filterPersonal: "Personal",
  },
  zh: {
    surfacesTitle: "两块工具",
    storageCount: (n: number) => `${n} 个 CLI 工具`,
    personalCount: (n: number) => `${n} 个扩展与应用`,
    explore: "查看",
    filterLabel: "筛选",
    filterAll: "全部",
    filterStorage: "存储",
    filterPersonal: "阅读与影音",
  },
} as const;

function buildFeed(locale: Locale): FeedFilterModel {
  const pageCopy = homeCopy[locale];
  const catalog = productCatalogModel(locale);
  return {
    filterLabel: pageCopy.filterLabel,
    filters: [
      { id: "all", label: pageCopy.filterAll },
      { id: "storage", label: pageCopy.filterStorage },
      { id: "personal", label: pageCopy.filterPersonal },
    ],
    items: catalog.all,
  };
}

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const pageCopy = homeCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.storage.find((item) => item.slug === "storage-agent-workbench");
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
    expectedText: [copy.homeTitle, copy.storageTitle, copy.personalTitle, pageCopy.surfacesTitle],
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
    chrome: buildSiteChrome(locale, "home"),
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
      ],
    },
    surfaces: {
      chapterTitle: pageCopy.surfacesTitle,
      items: [
        {
          label: copy.storageLine,
          title: copy.storageTitle,
          count: pageCopy.storageCount(catalog.storage.length),
          href: pathFor(locale, "s3-turbo-list"),
          ctaLabel: pageCopy.explore,
        },
        {
          label: copy.personalLine,
          title: copy.personalTitle,
          count: pageCopy.personalCount(catalog.personal.length),
          href: pathFor(locale, "pagewise"),
          ctaLabel: pageCopy.explore,
        },
      ],
    },
    feed: buildFeed(locale),
  };
}

export { buildFeed };

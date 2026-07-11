import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import { pathFor, type Locale } from "../../lib/site";

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
    expectedText: [copy.homeTitle, copy.featuredTitle, copy.moreToolsTitle],
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
    featured: {
      label: copy.featuredLabel,
      title: copy.featuredTitle,
      items: [
        {
          name: flagship?.name ?? "Storage Agent",
          href: flagship?.href ?? catalog.featuredProductPath,
          text: copy.featuredStorageText,
          image: {
            src: siteConfig.assets.screenshots.storageAgentWelcome,
            alt:
              locale === "en"
                ? "Storage Agent welcome screen with read-only investigation tasks"
                : "Storage Agent 欢迎页与只读调查任务",
            width: 1800,
            height: 1290,
          },
        },
        {
          name: personalFlagship?.name ?? "PageWise",
          href: personalFlagship?.href ?? pathFor(locale, "pagewise"),
          text: copy.featuredPagewiseText,
          image: {
            src: siteConfig.assets.screenshots.pagewiseAnalysis,
            alt:
              locale === "en"
                ? "PageWise analyzing a financial table beside its source PDF page"
                : "PageWise 在 PDF 原页旁分析财务表格",
            width: 1800,
            height: 1200,
          },
        },
      ],
    },
    more: {
      label: copy.moreToolsLabel,
      title: copy.moreToolsTitle,
      groups: [
        {
          label: copy.lineStorageLabel,
          items: catalog.storage.filter((item) => item.slug !== "storage-agent-workbench"),
        },
        {
          label: copy.linePersonalLabel,
          items: catalog.personal.filter((item) => item.slug !== "pagewise"),
        },
      ],
    },
  };
}

import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { alternateLocale, buildPageSeo, languageLink, pagePath } from "./seo";
import type { HomePageModel } from "./types";
import { pathFor, type Locale } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.storage.find((item) => item.isPrimary);
  const personalFlagship = catalog.personal.find((item) => item.isPrimary);
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
      title: copy.homeMetaTitle,
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
    },
    featured: {
      label: copy.featuredLabel,
      title: copy.featuredTitle,
      items: [
        {
          name: flagship?.name ?? "Storage Agent",
          description:
            locale === "en"
              ? "Investigate S3-compatible storage with read-only tools in chat."
              : "在对话中调用只读工具调查 S3 兼容存储。",
          href: flagship?.href ?? catalog.featuredProductPath,
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
          description:
            locale === "en"
              ? "Read PDFs page by page, with a trail you can revisit."
              : "按页阅读 PDF，保留可回看的阅读轨迹。",
          href: personalFlagship?.href ?? pathFor(locale, "pagewise"),
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
          items: catalog.storage.filter((item) => !item.isPrimary),
        },
        {
          label: copy.linePersonalLabel,
          items: catalog.personal.filter((item) => !item.isPrimary),
        },
      ],
    },
  };
}

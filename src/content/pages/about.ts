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
      name: copy.aboutHeadline,
      description: copy.aboutLead,
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
    expectedText: [copy.aboutHeadline, copy.profileTitle, pageCopy.productsTitle],
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
      moreLabel: pageCopy.moreLabel,
      current: [
        {
          name: "Storage Agent",
          href:
            catalog.storage.find((item) => item.slug === "storage-agent-workbench")?.href ??
            "/storage-agent-workbench/",
          text:
            locale === "en"
              ? "Read-only investigations for S3-compatible storage, with the inspected evidence beside each conclusion."
              : "只读调查 S3 兼容存储，并把检查过的现场依据放在结论旁边。",
          image: {
            src: siteConfig.assets.screenshots.storageAgentInvestigation,
            alt:
              locale === "en"
                ? "Storage Agent explaining a storage-class mismatch from inspected object evidence"
                : "Storage Agent 根据对象证据解释存储类型差异",
            width: 1800,
            height: 1301,
          },
        },
        {
          name: "PageWise",
          href: catalog.personal.find((item) => item.slug === "pagewise")?.href ?? "/pagewise/",
          text:
            locale === "en"
              ? "Analyze documents with the source page, read activity, and answer visible in one desktop workspace."
              : "在同一个桌面工作区里查看原文页面、读取过程与分析回答。",
          image: {
            src: siteConfig.assets.screenshots.pagewiseAnalysis,
            alt:
              locale === "en"
                ? "PageWise analyzing a financial table beside its source PDF page"
                : "PageWise 在 PDF 原页旁分析财务表格",
            width: 1800,
            height: 1197,
          },
        },
      ],
      others: catalog.all.filter((item) => item.slug !== "storage-agent-workbench" && item.slug !== "pagewise"),
    },
  };
}

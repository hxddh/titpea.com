import { ui } from "./home";
import { productCatalogModel } from "./productCatalogModel";
import { siteConfig } from "./siteConfig";
import { pathFor, type Locale } from "../lib/site";

export function homePageModel(locale: Locale) {
  const copy = ui[locale];
  const catalog = productCatalogModel(locale);

  return {
    kind: "home" as const,
    locale,
    current: "home" as const,
    path: pathFor(locale),
    alternatePath: pathFor(locale === "zh" ? "en" : "zh"),
    title: siteConfig.brand,
    description:
      locale === "zh"
        ? "Titpea 是 hxddh 的个人网站和产品索引。"
        : "Titpea is the personal site and product index for hxddh.",
    ogImage: siteConfig.assets.og.home,
    primaryCta: catalog.featuredProductPath,
    expectedText: [copy.homeTitle, locale === "zh" ? "先看事实" : "Product evidence"],
    hero: {
      eyebrow: copy.productIndex,
      title: copy.homeTitle,
      lead: copy.homeLead,
      actions: [
        { label: copy.homePrimary, href: catalog.featuredProductPath, style: "primary" },
        { label: copy.homeSecondary, href: catalog.secondaryProductPath, style: "ghost" },
        { label: copy.homeAbout, href: pathFor(locale, "about"), style: "ghost" },
      ],
      proofLabel: locale === "zh" ? "产品主线" : "Product spine",
      proofItems: copy.proofItems,
    },
    flow: {
      label: copy.flowLabel,
      title: copy.flowTitle,
      body: copy.flowBody,
      items: catalog.storage,
    },
    evidence: {
      kicker: locale === "zh" ? "主产品证据" : "Product evidence",
      title: locale === "zh" ? "先看事实，再看功能" : "Evidence before features",
      body:
        locale === "zh"
          ? "主产品先给可检查的证据：一个有压测结果，一个说明 Pi 诊断包到底装了什么。"
          : "The main products lead with checkable evidence: one shows benchmark data, the other shows what the agent package installs.",
      cards: catalog.evidence,
    },
    thesis: {
      label: copy.thesisLabel,
      title: copy.thesisTitle,
      body: copy.thesisBody,
    },
    catalog: {
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    browser: {
      label: copy.browserLine,
      title: copy.browserTitle,
      body:
        locale === "zh"
          ? "这两件工具不做平台，只解决一个浏览器里的小问题：一个看时间，一个补评分。"
          : "These two tools stay intentionally narrow: one checks time, the other adds rating context where you are already reading.",
      tools: catalog.browser,
      screenshotLabel: locale === "zh" ? "浏览器扩展截图" : "Browser extension screenshots",
      screenshots: [
        {
          href: pathFor(locale, "world-clock"),
          className: "browser-screenshot clock",
          src: siteConfig.assets.screenshots.worldClockDark,
          alt: locale === "zh" ? "世界时钟深色界面截图" : "World Clock dark interface screenshot",
        },
        {
          href: pathFor(locale, "douban-movie-rating"),
          className: "browser-screenshot douban",
          src: siteConfig.assets.screenshots.doubanRatingAssistant,
          alt: locale === "zh" ? "豆瓣电影评分助手页面截图" : "Douban Movie Rating Assistant page screenshot",
        },
      ],
    },
  };
}

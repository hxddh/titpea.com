import type { BrowserExtensionProduct } from "../../lib/site";
import { doubanMovieRatingFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const doubanMeta = `Chrome Web Store · ${doubanMovieRatingFacts.category} · No data collection disclosed`;
const doubanMetaZh = "Chrome 网上应用店 · 娱乐 · 声明不收集数据";

export const doubanMovieRatingProduct: BrowserExtensionProduct = {
  slug: "douban-movie-rating",
  name: "Douban Movie Rating Assistant",
  archetype: "browserExtension",
  locales: {
    en: {
      title: "Douban Movie Rating Assistant",
      description: "A Chrome extension that shows IMDb, Rotten Tomatoes, and Metacritic ratings on Douban movie pages.",
      eyebrow: "Chrome Extension",
      headline: "Ratings beside Douban",
      lead: "Compare IMDb, Rotten Tomatoes, and Metacritic beside the Douban rating. External scores appear only when the film match is reliable.",
      primaryCta: {
        label: "Install",
        href: siteConfig.externalLinks.doubanChrome,
      },
      secondaryCta: { label: "Privacy details", href: siteConfig.externalLinks.doubanPrivacy },
      meta: doubanMeta,
      proof: [],
      positioningLabel: "Context, not a new site",
      positioning: [
        {
          title: "Ratings refresh after the cache expires",
          body: "Matched ratings are cached in your browser. A visit after expiry fetches fresh data; unmatched films are retried sooner.",
          intent: "capability",
          surface: "browser",
        },
      ],
      faqLabel: "Matching and sources",
      faq: [],
    },
    zh: {
      title: "豆瓣电影评分助手",
      description: "在豆瓣电影页面补充 IMDb、Rotten Tomatoes 和 Metacritic 评分的 Chrome 扩展。",
      eyebrow: "Chrome 扩展",
      headline: "在豆瓣，对照其他评分",
      lead: "在豆瓣电影页对照 IMDb、烂番茄和 Metacritic 评分。只有影片匹配可靠时才显示外部评分。",
      primaryCta: {
        label: "安装扩展",
        href: siteConfig.externalLinks.doubanChrome,
      },
      secondaryCta: { label: "隐私说明", href: siteConfig.externalLinks.doubanPrivacy },
      meta: doubanMetaZh,
      proof: [],
      positioningLabel: "补充对照，不另开站点",
      positioning: [
        {
          title: "缓存过期后更新评分",
          body: "已匹配的评分保存在浏览器缓存中。缓存过期后，再次访问影片页会获取新数据；未匹配影片的重试间隔更短。",
          intent: "capability",
          surface: "browser",
        },
      ],
      faqLabel: "匹配与来源",
      faq: [],
    },
  },
};

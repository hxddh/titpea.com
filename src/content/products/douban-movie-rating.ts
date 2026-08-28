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
      headline: "More rating context inside Douban",
      lead: "IMDb, Rotten Tomatoes, and Metacritic appear beside the Douban rating while you stay on the movie page.",
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
          title: "Other ratings in place",
          body: "You browse Douban movie pages but want quick context from IMDb, Rotten Tomatoes, and Metacritic before deciding what to watch.",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "Douban stays the page",
          body: "It does not replace Douban ratings; it adds context from other rating sources.",
          intent: "boundary",
          surface: "browser",
        },
      ],
      faqLabel: "Matching and sources",
      faq: [
        {
          title: "Ratings refresh after the cache expires",
          body: "Found ratings are cached locally in your browser and unmatched results are retried on a shorter interval. After the cache expires, the next visit fetches fresh source data. External ratings appear only when the match is reliable; an uncertain match adds nothing.",
        },
      ],
    },
    zh: {
      title: "豆瓣电影评分助手",
      description: "在豆瓣电影页面补充 IMDb、Rotten Tomatoes 和 Metacritic 评分的 Chrome 扩展。",
      eyebrow: "Chrome 扩展",
      headline: "在豆瓣页顺手对照其他评分",
      lead: "不离开豆瓣电影页，IMDb、Rotten Tomatoes 和 Metacritic 会在旁边补充参考信息。",
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
          title: "想在页内对照其他评分",
          body: "浏览豆瓣电影页时，想顺手看看 IMDb、Rotten Tomatoes 或 Metacritic 的参考评分。",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "豆瓣仍是这一页",
          body: "它不替代豆瓣评分，只补充其他来源的参考信息。",
          intent: "boundary",
          surface: "browser",
        },
      ],
      faqLabel: "匹配与来源",
      faq: [
        {
          title: "缓存过期后再取新分",
          body: "已匹配的评分会在浏览器本地缓存，未匹配结果会在更短间隔后重试。缓存过期后，下次打开对应页面时会重新获取来源数据。只有匹配可靠时才显示外部评分；无法确认时不加，豆瓣页面照常使用。",
        },
      ],
    },
  },
};

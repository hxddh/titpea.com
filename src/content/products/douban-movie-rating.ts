import type { BrowserExtensionProduct } from "../../lib/site";
import { doubanMovieRatingFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const doubanMeta = `Chrome Web Store · ${doubanMovieRatingFacts.category} · No data collection disclosed`;
const doubanMetaZh = `Chrome Web Store · ${doubanMovieRatingFacts.category} · 声明不收集数据`;

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
      lead: "Keep reading the Douban movie page while IMDb, Rotten Tomatoes, and Metacritic appear beside the rating you already know.",
      primaryCta: {
        label: "Install",
        href: siteConfig.externalLinks.doubanChrome,
      },
      secondaryCta: { label: "Back to profile", href: "/about/" },
      meta: doubanMeta,
      proof: [
        "Chrome Web Store: Entertainment",
        "IMDb context",
        "Rotten Tomatoes context",
        "Metacritic context",
        "No data collection disclosed",
      ],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You browse Douban movie pages but want quick context from IMDb and Rotten Tomatoes before deciding what to watch.",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "It is not",
          body: "A rating authority or recommendation engine. It simply brings external rating context into the page you are already reading.",
          intent: "boundary",
          surface: "browser",
        },
        {
          title: "What you get",
          body: "IMDb score, Rotten Tomatoes freshness, Metacritic score when available, direct links, runtime and genre context, and title matching across Chinese and English names.",
          intent: "fit",
          surface: "browser",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "IMDb rating",
          body: "Automatically shows IMDb scores on Douban movie detail pages.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Rotten Tomatoes",
          body: "Adds Rotten Tomatoes freshness when a reliable match is available.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Metacritic",
          body: "Shows Metacritic when the source data is available for the matched movie.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Direct jumps",
          body: "Click a rating to open the matching IMDb or Rotten Tomatoes page.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Title matching",
          body: "Matches movies across their Chinese and English titles.",
          intent: "capability",
          surface: "browser",
        },
      ],
      rationaleLabel: "Details",
      rationaleTitle: "Ratings in one view",
      rationaleBody: [
        "The Chrome Web Store listing places the extension under Entertainment and identifies titpea.com as the publisher.",
        "The store privacy disclosure states that the developer does not collect or use user data and links to the privacy policy on GitHub.",
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "What happens when a movie cannot be matched?",
          body: "The extension only shows external ratings when it can find a reliable match. The Douban page remains usable without the extra context.",
        },
        {
          title: "Does it replace Douban ratings?",
          body: "No. It keeps Douban as the main page and adds IMDb or Rotten Tomatoes context so you can compare rating systems in place.",
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
      secondaryCta: { label: "返回简介", href: "/zh/about/" },
      meta: doubanMetaZh,
      proof: [
        "Chrome Web Store: Entertainment",
        "IMDb 参考评分",
        "烂番茄参考评分",
        "Metacritic 参考评分",
        "声明不收集数据",
      ],
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "浏览豆瓣电影页时，想顺手看看 IMDb、Rotten Tomatoes 或 Metacritic 的参考评分。",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "它不是什么",
          body: "不是评分权威，也不是推荐引擎。它只是把外部评分放到你正在看的豆瓣页面里。",
          intent: "boundary",
          surface: "browser",
        },
        {
          title: "补充哪些信息",
          body: "匹配到的 IMDb 分数、烂番茄新鲜度、Metacritic 分数、类型和片长、跳转链接，以及中英文片名匹配。",
          intent: "fit",
          surface: "browser",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "IMDb 评分",
          body: "在豆瓣电影详情页显示 IMDb 分数。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "烂番茄新鲜度",
          body: "匹配可靠时，补充 Rotten Tomatoes 新鲜度。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Metacritic",
          body: "有可用数据时，显示 Metacritic 分数。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "直接跳转",
          body: "点击评分，打开对应 IMDb 或 Rotten Tomatoes 页面。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "片名匹配",
          body: "支持中英文电影标题匹配。",
          intent: "capability",
          surface: "browser",
        },
      ],
      rationaleLabel: "详情",
      rationaleTitle: "在同一页对照不同评分",
      rationaleBody: [
        "Chrome Web Store 将该扩展归类为 Entertainment，由 titpea.com 提供。",
        "商店隐私说明显示，开发者声明不会收集或使用用户数据，并提供了 GitHub 上的隐私政策链接。",
      ],
      faqLabel: "常见问题",
      faq: [
        {
          title: "匹配不到电影时怎么办？",
          body: "找不到可靠匹配就不显示外部评分，豆瓣页面本身照常使用。",
        },
        {
          title: "它会替代豆瓣评分吗？",
          body: "不会。豆瓣仍然是主页面；扩展只是在旁边补充 IMDb 或 Rotten Tomatoes，方便对比。",
        },
      ],
    },
  },
};

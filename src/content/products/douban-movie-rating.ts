import { defineProduct } from "../schema";

export default defineProduct({
  slug: "douban-movie-rating",
  line: "everyday",
  og: "/assets/og-douban-movie-rating.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "Douban Movie Rating Assistant",
    navLabel: "Douban Ratings",
    description: "A Chrome extension that shows IMDb, Rotten Tomatoes, and Metacritic ratings on Douban movie pages.",
    eyebrow: "Chrome Extension",
    headline: "Ratings beside Douban",
    lead: "Compare IMDb, Rotten Tomatoes, and Metacritic beside the Douban rating. External scores appear only when the film match is reliable.",
    catalog: {
      role: "On Douban",
      text: "IMDb, Rotten Tomatoes, and Metacritic — only when the match is reliable.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "Privacy details",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif#privacy",
    },
    meta: "Chrome Web Store · Entertainment · No data collection disclosed",
    visual: {
      kind: "screenshot",
      label: "Douban Movie Rating Assistant",
      image: {
        src: "/assets/douban-rating-assistant.png",
        alt: "Douban Movie Rating Assistant showing IMDb, Rotten Tomatoes, and Metacritic inside a Douban movie page",
        width: 1442,
        height: 886,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "Context, not a new site",
        items: [
          {
            title: "Ratings refresh after the cache expires",
            body: "Matched ratings are cached in your browser. A visit after expiry fetches fresh data; unmatched films are retried sooner.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "豆瓣电影评分助手",
    navLabel: "豆瓣电影评分",
    description: "在豆瓣电影页面补充 IMDb、Rotten Tomatoes 和 Metacritic 评分的 Chrome 扩展。",
    eyebrow: "Chrome 扩展",
    headline: "在豆瓣，对照其他评分",
    lead: "在豆瓣电影页对照 IMDb、烂番茄和 Metacritic 评分。只有影片匹配可靠时才显示外部评分。",
    catalog: {
      role: "豆瓣页上",
      text: "影片匹配可靠时，才对照 IMDb、烂番茄和 Metacritic。",
    },
    primaryCta: {
      label: "安装扩展",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "隐私说明",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif#privacy",
    },
    meta: "Chrome 网上应用店 · 娱乐 · 声明不收集数据",
    visual: {
      kind: "screenshot",
      label: "豆瓣电影评分助手",
      image: {
        src: "/assets/douban-rating-assistant.png",
        alt: "豆瓣电影评分助手在豆瓣电影页中显示 IMDb、Rotten Tomatoes 和 Metacritic 评分的截图",
        width: 1442,
        height: 886,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "补充对照，不另开站点",
        items: [
          {
            title: "缓存过期后更新评分",
            body: "已匹配的评分保存在浏览器缓存中。缓存过期后，再次访问影片页会获取新数据；未匹配影片的重试间隔更短。",
          },
        ],
      },
    ],
  },
});

import { defineProduct } from "../schema";

export default defineProduct({
  slug: "douban-movie-rating",
  line: "everyday",
  icon: "/assets/icons/douban-movie-rating.webp",
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
    eyebrow: "Chrome extension",
    headline: "Ratings beside Douban.",
    lead: "IMDb, Rotten Tomatoes, Metacritic. Shown only when the film match is reliable.",
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
        src: "/assets/douban-rating-assistant.webp",
        alt: "Douban Movie Rating Assistant showing IMDb, Rotten Tomatoes, and Metacritic inside a Douban movie page",
        width: 1442,
        height: 886,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Context on the Douban page.",
        items: [
          { title: "Three outside scores", body: "IMDb, Rotten Tomatoes, and Metacritic beside Douban." },
          { title: "Reliable matches only", body: "External scores appear only when the film match is reliable." },
          { title: "Cached in your browser", body: "Refreshed after expiry; unmatched films are retried sooner." },
          { title: "No data collection disclosed", body: "See the privacy details on the store." },
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
    lead: "对照 IMDb、烂番茄和 Metacritic。影片匹配可靠时才显示。",
    catalog: {
      role: "豆瓣页上",
      text: "影片匹配可靠时，才对照 IMDb、烂番茄和 Metacritic。",
    },
    primaryCta: {
      label: "安装",
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
        src: "/assets/douban-rating-assistant.webp",
        alt: "豆瓣电影评分助手在豆瓣电影页中显示 IMDb、Rotten Tomatoes 和 Metacritic 评分的截图",
        width: 1442,
        height: 886,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "补充对照，不另开站点",
        items: [
          { title: "三个外部评分", body: "对照 IMDb、烂番茄和 Metacritic。" },
          { title: "只认可靠匹配", body: "只有影片匹配可靠时才显示外部评分。" },
          { title: "缓存在浏览器", body: "缓存过期后再访问会更新；未匹配影片重试更快。" },
          { title: "声明不收集数据", body: "详见应用店隐私说明。" },
        ],
      },
    ],
  },
});

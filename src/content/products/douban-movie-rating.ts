import { defineProduct } from "../schema";

export default defineProduct({
  slug: "douban-movie-rating",
  line: "everyday",
  type: "extension",
  platforms: [{ id: "chrome" }],
  version: "v1.7",
  icon: "/assets/icons/douban-movie-rating.webp",
  og: "/assets/og-douban-movie-rating.png",
  schema: {
    category: "BrowserApplication",
  },
  sectionIndex: false,
  en: {
    title: "Douban Movie Rating Assistant",
    description:
      "An unofficial Chrome extension that adds IMDb, Rotten Tomatoes, and Metacritic ratings to Douban movie pages.",
    eyebrow: "Ratings extension for Douban",
    headline: "See IMDb and other scores on Douban film pages.",
    lead: "Rotten Tomatoes and Metacritic scores join IMDb’s, and film links you hover get them too. Scores matched by title alone are marked.",
    summary: "IMDb, Rotten Tomatoes and Metacritic scores on Douban film pages and film links you hover.",
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "Privacy policy",
      href: "/douban-movie-rating/privacy/",
    },
    privacy: {
      network: "automatic",
      networkNote:
        "On Douban film pages, the title, year and IMDb ID go only to OMDb. No server, no analytics, no tracking.",
      stays: "Settings and your optional key in Chrome sync storage; ratings cached locally for up to 7 days.",
      policy: {
        label: "Privacy policy",
        href: "/douban-movie-rating/privacy/",
      },
    },
    visual: {
      kind: "screenshot",
      label: "Douban Movie Rating Assistant",
      image: {
        src: "/assets/douban-movie-rating-ratings.webp",
        alt: "Store image: a Douban film info panel for The Shawshank Redemption ending in an Other ratings line written like the director and cast lines, as blue links split by slashes: IMDb 9.3 (3.01 million votes) / Rotten Tomatoes 89% / Metacritic 82",
        width: 2560,
        height: 1600,
      },
      asOf: "v1.7",
      caption: "Illustration: the store image, made on a test page with sample ratings.",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "It works as you browse Douban.",
        items: [
          {
            title: "Written the Douban way",
            body: "An “Other ratings” line styled like Douban’s own, with IMDb’s vote count; each score links to its site.",
          },
          {
            title: "On Top 250 and the charts",
            body: "Rest the pointer on a film link for about 0.3 seconds and its ratings appear under it.",
          },
          {
            title: "Matched by IMDb ID",
            body: "When the page has no IMDb ID, it falls back to searching by title.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Is it an official Douban extension?",
            body: "No. It is an independent third-party tool, not affiliated with Douban, IMDb, Rotten Tomatoes, Metacritic, or OMDb. The scores are the ones each site publishes.",
          },
          {
            title: "Which pages does it run on?",
            body: "Only on movie.douban.com, and you can switch it off in the toolbar popup. Away from a film’s own info panel, as in a detail page’s recommendations, it looks a film up only when you rest the pointer on its link.",
          },
          {
            title: "Why are ratings sometimes missing?",
            body: "Either OMDb has no rating for that film, or the built-in shared key has used up its daily limit.",
            steps: [
              "When the limit is used up, the page offers a link to enter your own free OMDb key; it is checked before it is saved.",
              "A lookup that fails or takes longer than 8 seconds can be retried with a click.",
              "On hover, a failed lookup simply shows nothing.",
            ],
          },
        ],
      },
    ],
  },
  zh: {
    title: "豆瓣电影评分助手",
    description: "在豆瓣电影页面补充 IMDb、烂番茄和 Metacritic 评分的 Chrome 扩展（非豆瓣官方）。",
    eyebrow: "豆瓣评分扩展",
    headline: "在豆瓣影片页看到 IMDb 等评分",
    lead: "除了 IMDb，还补上烂番茄和 Metacritic 评分；鼠标停在影片链接上也能看。只按片名匹配到的评分会标注出来。",
    summary: "在豆瓣影片页和你悬停的影片链接上，显示 IMDb、烂番茄和 Metacritic 评分。",
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "隐私政策",
      href: "/zh/douban-movie-rating/privacy/",
    },
    privacy: {
      network: "automatic",
      networkNote: "在豆瓣影片页，片名、年份和 IMDb 编号只发送给 OMDb。没有服务器，没有分析服务，也没有追踪代码。",
      stays: "设置和你填写的密钥在 Chrome 同步存储；评分在本机缓存，最长 7 天。",
      policy: {
        label: "隐私政策",
        href: "/zh/douban-movie-rating/privacy/",
      },
    },
    visual: {
      kind: "screenshot",
      label: "豆瓣电影评分助手",
      image: {
        src: "/assets/douban-movie-rating-ratings.webp",
        alt: "商店图片：《肖申克的救赎》的豆瓣影片信息末尾多出一行“其他评分”，与导演、主演行写法相同，蓝色链接以斜杠分隔：IMDb 9.3（301万人）/ 烂番茄 89% / Metacritic 82",
        width: 2560,
        height: 1600,
      },
      asOf: "v1.7",
      caption: "示意图：商店宣传图，在测试页面上制作，评分为示例。",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "逛豆瓣时直接看到",
        items: [
          {
            title: "沿用豆瓣的写法",
            body: "多出的一行“其他评分”和导演、主演行写法一样，IMDb 附评分人数；点评分可打开对应网站。",
          },
          { title: "Top 250 和排行榜也能看", body: "鼠标在影片链接上停约 0.3 秒，评分就显示在链接下方。" },
          { title: "按 IMDb 编号匹配", body: "页面上没有 IMDb 编号时，改按片名查找。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "是豆瓣官方的扩展吗？",
            body: "不是。这是个人开发的第三方工具，与豆瓣、IMDb、烂番茄、Metacritic 及 OMDb 均无关联，评分以各网站为准。",
          },
          {
            title: "在哪些页面上运行？",
            body: "只在 movie.douban.com 上运行，也可以在工具栏弹窗里关掉。影片信息以外的地方，比如详情页的推荐，只有鼠标停在影片链接上时才查询该片。",
          },
          {
            title: "为什么有时看不到评分？",
            body: "要么 OMDb 没有这部片的评分，要么内置公共密钥当天的额度已经用完。",
            steps: [
              "额度用完时，页面上会给出入口，可填入你自己免费申请的 OMDb 密钥，保存前会先验证。",
              "查询出错或超过 8 秒没有返回时，点一下即可重试。",
              "悬停查询出错时，什么也不显示。",
            ],
          },
        ],
      },
    ],
  },
});

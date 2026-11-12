import { defineProduct } from "../schema";

export default defineProduct({
  slug: "douban-movie-rating",
  line: "everyday",
  type: "extension",
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
    description:
      "An unofficial Chrome extension that adds IMDb, Rotten Tomatoes, and Metacritic ratings to Douban movie pages.",
    eyebrow: "Chrome extension",
    headline: "Other ratings on Douban.",
    lead: "Adds IMDb, Rotten Tomatoes and Metacritic scores to Douban film pages, and under film links you hover. Scores matched by title alone are marked.",
    catalog: {
      role: "On Douban",
      text: "IMDb, Rotten Tomatoes and Metacritic scores on Douban film pages and film links you hover.",
    },
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
      networkNote: "On Douban film pages, the title, year and IMDb ID go only to OMDb.",
      stays: "Settings and your optional key in Chrome sync storage; ratings cached locally for up to 7 days.",
      policy: {
        label: "Privacy policy",
        href: "/douban-movie-rating/privacy/",
      },
    },
    meta: "Chrome Web Store · 1.7 · Ratings from OMDb",
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
            title: "Looks like Douban",
            body: "An “Other ratings” line in Douban’s style, with IMDb’s vote count. Scores link to their sites.",
          },
          {
            title: "Top 250 and charts",
            body: "Rest the pointer on a film link for about 0.3 seconds; ratings appear under it.",
          },
          { title: "Matched by IMDb ID", body: "Without an IMDb ID, it searches by title and marks the result." },
          { title: "Your own free key", body: "If the shared key’s daily limit runs out, add your own OMDb key." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "It reads the title, year, and IMDb ID from the open film page, or fetches a hovered film’s page from Douban.",
          "It sends them, with an API key, only to OMDb. Your settings and optional key stay in Chrome sync storage.",
          "Ratings stay on your computer for up to 7 days. No server, no analytics, no tracking; uninstalling removes it all.",
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
            body: "Only on movie.douban.com. Film detail pages get the ratings line; elsewhere, such as Top 250, charts, and a detail page’s recommendations, it looks a film up only when you rest the pointer on its link for about 0.3 seconds. You can switch it off in the toolbar popup.",
          },
          {
            title: "How reliable is a title match?",
            body: "When the Douban page lists no IMDb ID, the extension searches OMDb by title and may accept a year one off. The result is marked as a title match; hover over the mark to see the film and year it matched.",
          },
          {
            title: "Why are ratings sometimes missing?",
            body: "Either OMDb has no rating for that film, or the built-in shared key has used up its daily limit. In that case the page offers a link to enter your own free OMDb key, which is checked before it is saved. A lookup that fails or takes longer than 8 seconds can be retried with a click; on hover, a failed lookup simply shows nothing.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "豆瓣电影评分助手",
    navLabel: "豆瓣电影评分",
    description: "在豆瓣电影页面补充 IMDb、烂番茄和 Metacritic 评分的 Chrome 扩展（非豆瓣官方）。",
    eyebrow: "Chrome 扩展",
    headline: "豆瓣页上的其他评分",
    lead: "在豆瓣影片页补上 IMDb、烂番茄和 Metacritic 评分，鼠标停在影片链接上也能看。只按片名匹配到的评分会标注出来。",
    catalog: {
      role: "豆瓣页上",
      text: "在豆瓣影片页和你悬停的影片链接上，显示 IMDb、烂番茄和 Metacritic 评分。",
    },
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
      networkNote: "在豆瓣影片页，片名、年份和 IMDb 编号只发送给 OMDb。",
      stays: "设置和你填写的密钥在 Chrome 同步存储；评分在本机缓存，最长 7 天。",
      policy: {
        label: "隐私政策",
        href: "/zh/douban-movie-rating/privacy/",
      },
    },
    meta: "Chrome 网上应用店 · 1.7 · 评分来自 OMDb",
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
          { title: "沿用豆瓣写法", body: "新增一行“其他评分”，IMDb 附评分人数；点评分可打开对应网站。" },
          { title: "Top 250 与排行榜", body: "鼠标在影片链接上停约 0.3 秒，评分显示在链接下方。" },
          { title: "按 IMDb 编号匹配", body: "页面没有 IMDb 编号时按片名查找，并标注结果。" },
          { title: "自己的免费密钥", body: "公共密钥当天额度用完时，可以填入你自己的 OMDb 密钥。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "在影片详情页读取片名、年份和 IMDb 编号；鼠标停在其他影片链接上时，会向豆瓣请求该片页面取得同样信息。",
          "这些信息连同 API 密钥只发送给提供评分的 OMDb。设置和你填写的 OMDb 密钥存在 Chrome 同步存储中。",
          "评分缓存在本机，最长 7 天。没有服务器，没有分析服务、广告或追踪代码；卸载即删除全部设置与缓存。",
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
            body: "只在 movie.douban.com 上运行。电影详情页的影片信息末尾多一行其他评分；在 Top 250、排行榜、详情页的推荐等处，只有鼠标在影片链接上停留约 0.3 秒时才查询该片。可以在工具栏弹窗里关闭。",
          },
          {
            title: "按片名匹配可靠吗？",
            body: "豆瓣页面没有 IMDb 编号时，扩展按片名向 OMDb 查询，年份允许相差一年。结果旁会标注“按片名匹配”，鼠标悬停可查看匹配到的影片和年份。",
          },
          {
            title: "为什么有时看不到评分？",
            body: "要么 OMDb 没有这部片的评分，要么内置公共密钥当天的额度已经用完。额度用完时，页面上会给出入口，可填入你自己免费申请的 OMDb 密钥，保存前会先验证。查询出错或超过 8 秒没有返回时，点一下即可重试；悬停查询出错时则什么也不显示。",
          },
        ],
      },
    ],
  },
});

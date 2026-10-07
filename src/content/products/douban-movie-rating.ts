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
    description:
      "An unofficial Chrome extension that adds IMDb, Rotten Tomatoes, and Metacritic ratings to Douban movie pages.",
    eyebrow: "Chrome extension",
    headline: "Ratings beside Douban.",
    lead: "IMDb, Rotten Tomatoes, Metacritic. In the film details and on hover. Title matches labelled.",
    catalog: {
      role: "On Douban",
      text: "IMDb, Rotten Tomatoes, and Metacritic in the film info and on hover; title matches labelled.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "Privacy details",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif#privacy",
    },
    meta: "Chrome Web Store · 1.7 · Ratings from OMDb",
    visual: {
      kind: "screenshot",
      label: "Douban Movie Rating Assistant",
      image: {
        src: "/assets/douban-movie-rating-ratings.webp",
        alt: "Store image: a Douban film info panel for The Shawshank Redemption ending in an Other ratings line written like the director and cast lines, as blue links split by slashes: IMDb 9.3 (3.01 million votes) / Rotten Tomatoes 89% / Metacritic 82",
        width: 1280,
        height: 800,
      },
      caption: "Illustration: store image on a test page with sample ratings",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Context on the Douban page.",
        items: [
          { title: "In Douban’s own style", body: "IMDb with its vote count; click a score to open its site." },
          { title: "Hover a film link", body: "Top 250, charts, recommendations: its ratings appear under the link." },
          { title: "Says how it matched", body: "By the page’s IMDb ID; otherwise by title, and marked so." },
          { title: "Your own free key", body: "When the shared daily quota runs out, add an OMDb key." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "It reads the title, year, and IMDb ID from the open film page, or fetches a hovered film’s page from Douban.",
          "It sends them, with an API key, only to OMDb. Settings and your optional key sit in Chrome sync storage.",
          "Ratings are cached locally for up to 7 days. No server, no analytics, no tracking; uninstalling removes its settings and cache.",
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
            body: "When OMDb has no entry or no rating for a film, nothing is shown. Ratings come from the OMDb API, and the built-in shared key has a daily limit. When it runs out, the page offers a link to enter a free OMDb key of your own, which is checked before it is saved. A request that fails or takes longer than 8 seconds can be retried with a click. A hover shows nothing when a lookup fails, and a note only when the quota is used up, a key is invalid, or requests are rate-limited.",
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
    headline: "在豆瓣，对照其他评分",
    lead: "对照 IMDb、烂番茄和 Metacritic。写在影片信息末尾，列表里悬停片名也能看。按片名匹配时会标注。",
    catalog: {
      role: "豆瓣页上",
      text: "在影片信息里或悬停片名时对照 IMDb、烂番茄和 Metacritic，按片名匹配会标注。",
    },
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
    },
    secondaryCta: {
      label: "隐私说明",
      href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif#privacy",
    },
    meta: "Chrome 网上应用店 · 1.7 · 评分来自 OMDb",
    visual: {
      kind: "screenshot",
      label: "豆瓣电影评分助手",
      image: {
        src: "/assets/douban-movie-rating-ratings.webp",
        alt: "商店图片：《肖申克的救赎》的豆瓣影片信息末尾多出一行“其他评分”，与导演、主演行写法相同，蓝色链接以斜杠分隔：IMDb 9.3（301万人）/ 烂番茄 89% / Metacritic 82",
        width: 1280,
        height: 800,
      },
      caption: "示意图：商店图片，测试页面，评分为示例",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "补充对照，不另开站点",
        items: [
          { title: "豆瓣原有写法", body: "IMDb 附评分人数；点任一评分即可打开原站。" },
          { title: "悬停即看", body: "Top 250、排行榜和推荐里，鼠标停在影片链接上即显示评分。" },
          { title: "写明匹配方式", body: "优先用页面上的 IMDb 编号；没有时按片名匹配并标注。" },
          { title: "自己的免费密钥", body: "公共密钥每日额度用完时，填入你的 OMDb 密钥。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "在影片详情页读取片名、年份和 IMDb 编号；鼠标停在其他影片链接上时，会向豆瓣请求该片页面取得同样信息。",
          "这些信息连同 API 密钥只发送给 OMDb。设置和你填写的 OMDb 密钥存在 Chrome 同步存储中。",
          "评分缓存在本机，最长 7 天。没有服务器，无分析服务，没有广告或追踪代码；卸载即删除全部设置与缓存。",
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
            body: "OMDb 未收录该片或暂无评分时，不显示任何内容。评分来自 OMDb API，内置的公共密钥每日额度有限。额度用完时，页面上会给出入口，可填入自己免费申请的 OMDb 密钥，保存前自动验证。请求出错或超过 8 秒未返回时，点击即可重试。悬停查询出错时不显示任何内容，只在额度用完、密钥无效或请求过于频繁时给出提示。",
          },
        ],
      },
    ],
  },
});

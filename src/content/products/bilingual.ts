import { defineProduct } from "../schema";

export default defineProduct({
  slug: "bilingual",
  line: "everyday",
  featured: {
    order: 3,
    image: {
      src: { en: "/assets/bilingual-en.webp", zh: "/assets/bilingual-zh.webp" },
      width: 1280,
      height: 800,
      alt: {
        en: "Store image: a French article with one paragraph’s English translation in the right margin",
        zh: "商店图片：英文文章中一段的中文译文显示在右侧边注",
      },
    },
    caption: {
      en: "Illustration: store image with sample translations",
      zh: "示意图：商店图片，译文为示例",
    },
  },
  icon: "/assets/icons/bilingual.webp",
  og: "/assets/og-bilingual.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "Bilingual",
    description:
      "Chrome extension that shows the original page, and a paragraph's translation only while you hold a key, or both languages together.",
    eyebrow: "Chrome extension",
    headline: "Hold a key to translate.",
    lead: "The original by default. Hold a key for a paragraph’s translation. Double-tap for both.",
    catalog: {
      role: "Translation",
      text: "Read the original; hold a key for the translation.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/fpdeaghfidcmigonjajbmllmcleoklip",
    },
    secondaryCta: {
      label: "Privacy policy",
      href: "https://hxddh.github.io/bilingual-site/",
    },
    meta: "Chrome extension · Chrome 138+ · 1.6.5 · On-device translation",
    visual: {
      kind: "screenshot",
      label: "Bilingual",
      frame: "wide",
      image: {
        src: "/assets/bilingual-en.webp",
        alt: "Store image: a French article with one paragraph’s English translation in the right margin",
        width: 1280,
        height: 800,
      },
      caption: "Illustration: store image with sample translations",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "The translation waits until you ask.",
        items: [
          { title: "Hold to see", body: "Point at a paragraph; its translation floats beside it." },
          { title: "Both languages", body: "In the margin when there is room, otherwise below each paragraph." },
          {
            title: "Tuned for six sites",
            body: "X, Reddit, GitHub, Hacker News, Wikipedia, Stack Overflow: content only, no buttons.",
          },
          { title: "Sentence alignment", body: "Point at a sentence; its counterpart lights up." },
          { title: "Word lookup", body: "Hold the key and rest on a word to see its meaning." },
          { title: "38 target languages", body: "Where on-device translation lacks a pair, switch to Precise." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Translation runs on Chrome’s built-in on-device model by default, inside the extension’s own hidden document; page text stays on your computer.",
          "Only when you ask, Precise translation sends paragraphs straight to your chosen provider; your own key stays in the extension’s IndexedDB.",
          "No account, analytics, or data collection; site access only for sites you switch on; Incognito keeps no translations, terms, or site layouts.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "What do I need to run it?",
            body: "Desktop Chrome 138 or later. Turning on a language pair downloads Chrome’s language pack once; after that the pair works on every site, because translation runs in the extension’s own offscreen document. Local files work too, once you turn on “Allow access to file URLs” for it in `chrome://extensions`.",
          },
          {
            title: "Which key do I hold?",
            body: "⌥ on Mac, Shift on other systems. You can also assign a shortcut for switching modes at `chrome://extensions/shortcuts`.",
          },
          {
            title: "Which languages does it translate into?",
            body: "Chinese (Simplified and Traditional), Japanese, Korean, English, French, German, Spanish, Portuguese, Russian, Italian, and 27 more. It defaults to your browser’s language, or English when that is not on the list.",
          },
          {
            title: "Is it free?",
            body: "Yes. On-device translation is free, with no account or subscription. Precise translation uses your own API key, so the provider bills you for it.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "对读",
    description: "Chrome 扩展：默认只显示原文，按住一个键看这一段的译文，也能切到双语对照。",
    eyebrow: "Chrome 扩展",
    headline: "按住一个键，看译文",
    lead: "默认只看原文。按住一个键，看这一段的译文。连按两下，双语对照。",
    catalog: {
      role: "网页翻译",
      text: "默认只看原文，按住一个键看译文。",
    },
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/fpdeaghfidcmigonjajbmllmcleoklip",
    },
    secondaryCta: {
      label: "隐私政策",
      href: "https://hxddh.github.io/bilingual-site/",
    },
    meta: "Chrome 扩展 · Chrome 138+ · 1.6.5 · 本地翻译",
    visual: {
      kind: "screenshot",
      label: "对读",
      frame: "wide",
      image: {
        src: "/assets/bilingual-zh.webp",
        alt: "商店图片：英文文章中一段的中文译文显示在右侧边注",
        width: 1280,
        height: 800,
      },
      caption: "示意图：商店图片，译文为示例",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "译文等你来叫",
        items: [
          { title: "按住即现", body: "指向哪段，那段译文就浮在旁边。" },
          { title: "双语对照", body: "右侧有空放边注，否则放在每段下方。" },
          {
            title: "常用网站适配",
            body: "X、Reddit、GitHub、Hacker News、维基百科、Stack Overflow：只译正文，不碰按钮。",
          },
          { title: "句级对齐", body: "指向一句，另一侧的对应句同时高亮。" },
          { title: "查词", body: "按住键停在词上，看它的意思。" },
          { title: "38 种译文语言", body: "本地不支持的语言组合，可改用精译。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "默认使用 Chrome 内置的本地翻译模型，在扩展自己的隐藏页面里运行，网页文字不离开你的电脑。",
          "精译用你自己的密钥，存在扩展的 IndexedDB 中；只有你要看时，段落文字才从浏览器直接发给你选择的服务商。",
          "没有账号，无分析服务，不收集任何数据；只为你打开开关的网站申请权限；无痕窗口里不存译文、术语和各站排版。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "需要什么环境？",
            body: "桌面版 Chrome 138 或更高版本。启用一个语言对时，Chrome 会下载一次语言包，之后这个语言对在所有网站上都能用（翻译在扩展自己的隐藏页面里运行）。在 `chrome://extensions` 里为它打开“允许访问文件网址”后，本地文件也能用。",
          },
          {
            title: "按哪个键？",
            body: "Mac 上是 ⌥，其他系统是 Shift。也可以在 `chrome://extensions/shortcuts` 给切换指定一个快捷键。",
          },
          {
            title: "能译成哪些语言？",
            body: "简体中文、繁體中文、日语、韩语、英语、法语、德语、西班牙语、葡萄牙语、俄语、意大利语，以及另外 27 种。默认译成浏览器界面语言，不在列表里就译成英文。",
          },
          {
            title: "免费吗？",
            body: "免费。本地翻译不需要账号，也没有订阅。精译用你自己的 API 密钥，费用由服务商向你收取。",
          },
        ],
      },
    ],
  },
});

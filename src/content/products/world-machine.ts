import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "experimental",
  repo: "hxddh/world-machine",
  icon: "/assets/icons/world-machine.webp",
  og: "/assets/og-world-machine.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "World Machine",
    description:
      "A small persistent world that keeps living while you are away and tells you what changed when you return. An experimental macOS app in pre-alpha.",
    eyebrow: "Experimental macOS project",
    headline: "A world that keeps going.",
    lead: "Leave it. Come back to the news. macOS pre-alpha.",
    catalog: {
      role: "Pre-alpha",
      text: "A world that keeps living while you are away. macOS, pre-alpha.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    meta: "Experimental · pre-alpha · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-day-600.webp",
        alt: "World Machine showing a Tiny Society World 600 days in, at day 602: harbour residents in front of the lighthouse, pub, bakery and school, gauges for work, money in town and spirits, and a Let the day pass card. Captured from the app running in its Linux preview.",
        width: 1100,
        height: 900,
      },
    },
    showcases: [
      {
        src: "/assets/world-machine-return.webp",
        width: 1100,
        height: 900,
        alt: "A return to Tiny Society on day 27: a While you were away card, 1 of 9, says the great storm caught the harbour unready, while Noah says Nobody was ready for that. Captured from the app running in its Linux preview.",
        title: "While you were away.",
        body: "The return tells what happened, one beat at a time.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Live in it, or leave it.",
        items: [
          { title: "Talk to anyone", body: "People understand everyday phrasing, in English or Chinese." },
          { title: "Build and suggest", body: "Make a bench or a well; suggest a picnic." },
          { title: "Keepsakes and letters", body: "Friends leave things to keep; letters arrive while you are away." },
          { title: "On your desktop", body: "Show a World as a strip along the screen." },
          { title: "Share a World", body: "Save postcards; World codes open as read-only visits." },
          { title: "A file you keep", body: "Each World is a `.world` document, replayed from its events." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Your Worlds are files on your Mac; there is no account or telemetry, and nothing is uploaded.",
          "Once per launch, the app asks `api.github.com` for the latest release.",
          "World voice is off by default; with your API key, each return sends that World's recorded facts to `api.anthropic.com`.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is it stable?",
            body: "No. World Machine is an experimental pre-alpha. A World saved by an earlier Pack version may not open after an update; nothing is deleted, and the file keeps its whole history.",
          },
          {
            title: "How do I open it the first time?",
            body: "Download the DMG from the Releases page and drag World Machine onto Applications; it runs on Apple Silicon or Intel. Builds are not notarized, so the first launch needs a one-time Open Anyway step, described in the install guide.",
          },
          {
            title: "How far does a World move while I am away?",
            body: "One period for every six hours you were away, at most 28 periods (a week) per return. The return briefing says how many.",
          },
          {
            title: "Do people understand everything I type?",
            body: "Not everything. Without World voice, people hear 28 kinds of everyday talk in English and Chinese, and some new phrasing is missed.",
          },
          {
            title: "Can I add other World Packs?",
            body: "Yes. The app activates its included Packs on first launch; any other `.worldpack` runs only after you review its executable identity and SHA-256.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "World Machine",
    description: "一个在你离开时仍在继续的小世界，回来时告诉你发生了什么。面向 macOS 的实验性应用，当前为早期预览版。",
    eyebrow: "macOS 实验项目",
    headline: "离开时，世界仍在继续",
    lead: "放着它。回来听新鲜事。macOS 早期预览版。",
    catalog: {
      role: "早期预览",
      text: "你离开时仍在继续的小世界。macOS，早期预览版。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    meta: "实验 · 早期预览 · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-day-600.webp",
        alt: "World Machine 显示已运行 600 天的 Tiny Society 世界（第 602 天）。港口居民站在灯塔、酒馆、面包店和学校前，上方是工作、镇上的钱和心情三条指标，下方是「让这一天过去」卡片。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        width: 1100,
        height: 900,
      },
    },
    showcases: [
      {
        src: "/assets/world-machine-return.webp",
        width: 1100,
        height: 900,
        alt: "第 27 天回到 Tiny Society：「While you were away」卡片第 1 / 9 条写着大风暴让港口措手不及，Noah 说没人准备好。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "你不在的时候",
        body: "回来时，发生的事一件一件讲给你。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "住进去，或放着它",
        items: [
          { title: "和谁都能聊", body: "听得懂日常说法，中文英文都行。" },
          { title: "建造与提议", body: "造一张长椅或一口井，提议一次野餐。" },
          { title: "纪念品与来信", body: "朋友留下纪念品，你不在时也有来信。" },
          { title: "放到桌面上", body: "把世界显示为屏幕边的一条长带。" },
          { title: "分享一个世界", body: "保存明信片；World 代码以只读访问打开。" },
          { title: "留在文件里", body: "每个世界是一个 `.world` 文档，由事件重放。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据",
        title: "数据的去向",
        items: [
          "世界是你 Mac 上的文件；没有账户、没有遥测，什么都不上传。",
          "每次启动，应用向 `api.github.com` 查询一次最新版本。",
          "世界之声默认关闭；使用你的 API 密钥时，每次回来会把该世界已记录的事实发给 `api.anthropic.com`。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "现在稳定吗？",
            body: "不稳定。World Machine 是实验性的早期预览版。更新后，旧版 Pack 保存的世界可能打不开；文件不会被删除，完整历史仍在其中。",
          },
          {
            title: "第一次怎么打开？",
            body: "从 Releases 页面下载 DMG，把 World Machine 拖进「应用程序」，Apple 芯片与 Intel 都能运行。构建尚未公证，首次启动需要一次「仍要打开」，步骤见安装指南。",
          },
          {
            title: "离开时世界会走多远？",
            body: "每离开六小时前进一个周期，每次回来最多 28 个周期（一周）。回来时的简报会说明走了多少。",
          },
          {
            title: "我打的每句话都能听懂吗？",
            body: "不是每句。不开世界之声时，居民能听懂中英文里 28 类日常话题，部分新说法会听不懂。",
          },
          {
            title: "能添加其他 World Pack 吗？",
            body: "可以。应用首次启动时启用自带的 Pack；其他 `.worldpack` 要先审阅其可执行身份与 SHA-256 才会运行。",
          },
        ],
      },
    ],
  },
});

import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "games",
  type: "experiment",
  repo: "hxddh/world-machine",
  icon: "/assets/icons/world-machine.webp",
  og: "/assets/og-world-machine.png",
  schema: {
    category: "GameApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "World Machine",
    description:
      "A small persistent world that grows a day at a time: each day you sit down with it, a morning brings a letter, a choice and a find. An experimental macOS app in pre-alpha.",
    eyebrow: "Experimental macOS project",
    headline: "It grows a day at a time.",
    lead: "A small harbour town on your Mac whose people work, marry and grow old. Each morning brings a letter, a choice and a find.",
    catalog: {
      role: "Pre-alpha",
      text: "A small world with a morning for every day you visit. macOS, pre-alpha.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    installNote: "Not notarized: the first launch needs a one-time Open Anyway step.",
    releaseHighlights: {
      version: "v0.30.0",
      items: [
        "A World no longer moves while you are away: each sitting on a new day passes one World day, or three on a World’s very first.",
        "Each new day starts with a morning: a letter, today’s choice, something looked after overnight, and a find for a new Finds shelf.",
        "The town is drawn closer, with residents doing what the record says, and every recorded story, such as a festival, a birth or a storm, can play as a scene.",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote: "Once per launch it asks `api.github.com` for the latest release; World voice is off by default.",
      stays: "Worlds are files on your Mac; no account, no telemetry, nothing uploaded.",
    },
    meta: "Experimental · pre-alpha · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-morning.webp",
        alt: "Tiny Society's morning on day 21, the harbour still dark: the letter from Noah, today's choice about money in town, what Mia looked after overnight, and the gull's feather found by Island School. Captured from the app on macOS.",
        width: 2560,
        height: 1430,
      },
      caption: "Captured from the app on macOS.",
      asOf: "v0.30.0",
    },
    showcases: [
      {
        src: "/assets/world-machine-ares.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Pocket Universe on Ares, sol 35: domes, habitat modules and a greenhouse on red regolith, gauges for trust, tension and stores, and Nia asking whether the grow lights can run an hour longer because the beans are sulking. Captured from the app running in its Linux preview.",
        title: "Not only a harbour town.",
        body: "Pocket Universe settles Ares, Maple Street in 1987, or Icebridge, each drawn as itself.",
        caption: "Captured from the app running in its Linux preview.",
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "A moment in Tiny Society on day 360: a three-panel strip titled Rosa settles for good, captioned before, during and after, over the harbour. Captured from the app running in its Linux preview.",
        title: "Big moments, in three panels.",
        body: "Weddings, births and farewells, drawn before, during and after.",
        caption: "Captured from the app running in its Linux preview.",
      },
      {
        src: "/assets/world-machine-night.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Tiny Society at night in spring: lit windows along the harbour, the gauges and zoom buttons dark to match, while the drawer, listing the new pier and a lamp on the point under way, and Mia's card with today's choice are warm paper. Captured from the app running in its Linux preview.",
        title: "At night, the windows light up.",
        body: "Even in the light appearance, gauges and buttons darken with the sky, while the drawer and cards stay light and readable.",
        caption: "Captured from the app running in its Linux preview.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Its people act on their own.",
        items: [
          {
            title: "What a morning brings",
            body: "A letter, today's choice, word of what was looked after overnight, and a find.",
          },
          { title: "Lives with an arc", body: "People are born, grow up, grow old and die." },
          {
            title: "Build, paint, name",
            body: "Scaffolding goes up at once; paint a flag, and name boats and babies.",
          },
          { title: "Talk with a goal", body: "When someone asks a favour, you do it by talking with them." },
          { title: "Three languages", body: "The interface, stories and talk come in English, Chinese or Japanese." },
          {
            title: "Optional World voice",
            body: "Off by default: an AI model can word the World’s news and people’s replies.",
          },
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
          "World voice is off by default; with your API key, it sends only that World's facts and your words to `api.anthropic.com`.",
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
            body: "No. World Machine is an experimental pre-alpha. It opens Worlds saved by v0.20 or later and carries on with them; Worlds from v0.28 and v0.29 should open too, but no test covers them yet. A World made with a version of its World Pack (the place it is built from, such as Tiny Society) that this app does not include will not open, but the file is left untouched with its whole history. Each save keeps the previous one as a backup, `<name>.world.bak`, and a file from a newer version of the app opens read-only and is never saved over.",
          },
          {
            title: "How do I open it the first time?",
            body: "Download the DMG from GitHub Releases and drag World Machine onto Applications; it runs on Apple Silicon or Intel. Builds are not notarized, so the first launch needs a one-time Open Anyway step, described in the install guide.",
          },
          {
            title: "Is there a free demo?",
            body: "Yes. World Machine Demo, also on GitHub Releases, is 20 to 30 minutes of Tiny Society, up to day 8. Your harbour stays in My Worlds, and the full app opens it and carries on.",
          },
          {
            title: "Does a World move while I am away?",
            body: "No, not since v0.30. Opening a World on a new day of this computer's calendar begins a sitting, which passes one World day, or three on a World's very first. A week or a month away still brings one day. A World from v0.29 or earlier gets one day at its next sitting, and the time it was away is not caught up. When the day is spent, a Goodnight card comes up and the World sleeps until tomorrow.",
          },
          {
            title: "What does World voice do?",
            body: "It is off by default. Turned on in Settings, an AI model words what the World tells you when you return and answers for the people you talk to; that model can be Pi (an open-source coding agent you install), your own API key, or this Mac’s built-in model, which has not yet been tried on a real Mac. Automatic checks and a second model screen its answers, though some bad ones still get through; each answer is marked “Written by AI” with a Report button, and crisis and sexual topics are never sent. What talk changes, such as warmth or a favour done, is decided by the World itself, and your API key stays in your login keychain.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "World Machine",
    description:
      "一个一天一天长大的小世界：每天陪它坐一会儿，早晨会带来一封信、一个选择和一件新发现。面向 macOS 的实验性应用，当前为早期预览版。",
    eyebrow: "macOS 实验项目",
    headline: "世界一天一天地长大",
    lead: "Mac 上的一座海港小镇，居民工作、成家、变老。每天早晨，都有一封信、一个选择和一件新发现等着你。",
    catalog: {
      role: "早期预览",
      text: "每天来，都有早晨等你的小世界。macOS，早期预览版。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/world-machine/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    installNote: "尚未公证：首次启动需要一次“仍要打开”。",
    releaseHighlights: {
      version: "v0.30.0",
      items: [
        "你不在时，世界不再自己往前走：在新的一天打开，世界走一天，全新世界的第一次走三天。",
        "每个新的一天都从早晨开始：一封信、今天的选择、昨夜照料了些什么，还有一件放进新“发现”书架的东西。",
        "小镇画得更近，居民按记录做事；每个记下的故事，比如节庆、出生或暴风雨，都能作为一幕播放。",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote: "每次启动向 `api.github.com` 查询一次最新版本；世界之声默认关闭。",
      stays: "世界是你 Mac 上的文件；没有账户、没有遥测，什么都不上传。",
    },
    meta: "实验 · 早期预览 · macOS 14+ · {version} · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "World Machine",
      frame: "wide",
      image: {
        src: "/assets/world-machine-morning.webp",
        alt: "Tiny Society 第 21 天的早晨，港口还未天亮：Noah 的信、今天的选择（镇上的钱紧）、Mia 夜里照看过的门，以及在学校岛捡到的海鸥羽毛。截自 macOS 应用，界面为英文。",
        width: 2560,
        height: 1430,
      },
      caption: "截自 macOS 应用；本页截图界面均为英文。",
      asOf: "v0.30.0",
    },
    showcases: [
      {
        src: "/assets/world-machine-ares.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Pocket Universe 的 Ares 第 35 个火星日：红色风化层上的穹顶、居住舱和温室，信任、紧张与储备三个指标，Nia 问能不能让补光灯多开一小时，因为豆子在闹脾气。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "不只是港口",
        body: "Pocket Universe 可以落在 Ares、1987 年的 Maple Street 或 Icebridge，各有各的样子。",
        caption: "截自应用在 Linux 预览环境中的运行画面。",
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Tiny Society 第 360 天的一个时刻：港口上方一组三格画，标题“Rosa settles for good”，分别配着之前、当时、之后的说明。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "大事画成三格",
        body: "婚礼、出生、告别，画成之前、当时、之后。",
        caption: "截自应用在 Linux 预览环境中的运行画面。",
      },
      {
        src: "/assets/world-machine-night.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "春天夜里的 Tiny Society：港口沿岸窗里亮着灯，指标和缩放按钮随之变暗；右侧抽屉列着在建的新码头和岬角上的灯，Mia 的今日选择卡片，二者都是暖色的纸。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "夜里，窗户亮起灯",
        body: "即使用浅色外观，指标和按钮也会随夜空变暗；抽屉和卡片仍是浅色，清楚易读。",
        caption: "截自应用在 Linux 预览环境中的运行画面。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "居民自己过日子",
        items: [
          { title: "早晨带来什么", body: "一封信、今天的选择、昨夜照料了些什么，还有一件新发现。" },
          { title: "有始有终的一生", body: "居民出生、长大、变老、离世。" },
          { title: "建造、绘制、命名", body: "一开工就搭起脚手架；画一面旗，给船和新生儿起名。" },
          { title: "带着目的去聊", body: "有人托你帮忙，聊一聊就能办成。" },
          { title: "三种语言", body: "界面、故事和对话：中文、英文或日文。" },
          { title: "可选的世界之声", body: "默认关闭；打开后，可由 AI 模型讲述世界的消息、替居民回答。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "世界是你 Mac 上的文件；没有账户、没有遥测，什么都不上传。",
          "每次启动，应用向 `api.github.com` 查询一次最新版本。",
          "世界之声默认关闭；使用你的 API 密钥时，只会把该世界已记录的事实和你说的话发给 `api.anthropic.com`。",
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
            body: "不稳定。World Machine 是实验性的早期预览版。它能打开 v0.20 及以后保存的世界并接着玩；v0.28 和 v0.29 的世界应该也能打开，只是还没有测试覆盖。如果世界所用的 World Pack（构成这个世界的地方，比如 Tiny Society）版本不在这个应用里，它就打不开，但文件原样保留，完整历史都在。每次保存都会把上一份留作备份 `<name>.world.bak`；更新版本应用写的文件会以只读方式打开，绝不会被覆盖。",
          },
          {
            title: "第一次怎么打开？",
            body: "从 GitHub Releases 下载 DMG，把 World Machine 拖进“应用程序”，Apple 芯片与 Intel 都能运行。构建尚未公证，首次启动需要一次“仍要打开”，步骤见安装指南。",
          },
          {
            title: "有免费试玩版吗？",
            body: "有。同样在 GitHub Releases 上的 World Machine Demo 是 Tiny Society 的 20 到 30 分钟，玩到第 8 天。你的港口会留在“我的世界”里，完整版应用能打开它接着玩。",
          },
          {
            title: "我不在时世界还会走吗？",
            body: "不会，v0.30 起是这样。在这台电脑日历上的新一天打开世界，就是一次到访：世界走一天，全新世界的第一次走三天。离开一周或一个月，也只走一天。v0.29 及更早版本的世界，下次到访只走一天，离开的时间不会补上。这一天过完后会出现“晚安”卡片，世界睡到明天。",
          },
          {
            title: "世界之声能做什么？",
            body: "默认关闭。在设置里打开后，由 AI 模型讲述你回来时世界告诉你的事，并替你搭话的居民回答；模型可以是 Pi（一个需自行安装的开源编码 Agent）、你自己的 API 密钥，或这台 Mac 自带的模型，后者还没在真正的 Mac 上试过。自动检查和第二个模型会筛查它的回答，但仍有一些不合适的会漏过；每句回答都标有“AI 撰写”并带“举报”按钮，涉及危机和性的话题从不发给模型。对话带来的结果，比如好感或帮成的忙，由世界自己决定；你的 API 密钥保存在登录钥匙串中。",
          },
        ],
      },
    ],
  },
});

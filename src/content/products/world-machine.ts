import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "games",
  type: "experiment",
  featured: {
    order: 1,
    image: {
      src: "/assets/world-machine-town.webp",
      width: 2200,
      height: 1696,
      alt: {
        en: "World Machine on day 1,080 of a Tiny Society town at dusk: the whole town up the hill, lit windows, a lighthouse, beach huts and an orchard, and Sofia asking how to open the new tea rooms on the pier. Captured from the app running in its Linux preview.",
        zh: "World Machine 里 Tiny Society 小镇的第 1080 天黄昏：整座小镇沿山坡排开，窗里亮着灯，有灯塔、海滩小屋和果园，Sofia 在问码头上新茶室怎么开张。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
      },
    },
  },
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
    lead: "Come back each day. A morning waits. macOS pre-alpha.",
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
        src: "/assets/world-machine-noon.webp",
        alt: "Tiny Society on day 21 at noon, drawn with hand-inked outlines: gauges for work, money in town and spirits, a bakery, a shop and houses above the quay, scaffolding going up, and Mia's card with today's choice: her books are older than Emma's. Captured from the app running in its Linux preview.",
        width: 2200,
        height: 1696,
      },
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
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "A moment in Tiny Society on day 360: a three-panel strip titled Rosa settles for good, captioned before, during and after, over the harbour. Captured from the app running in its Linux preview.",
        title: "Big moments, in three panels.",
        body: "Weddings, births and farewells, drawn before, during and after.",
      },
      {
        src: "/assets/world-machine-night.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Tiny Society at night in spring: lit windows along the harbour, the gauges and zoom buttons dark to match, while the drawer, listing the new pier and a lamp on the point under way, and Mia's card with today's choice are warm paper. Captured from the app running in its Linux preview.",
        title: "At night, the windows light up.",
        body: "In the light appearance, the drawer and cards stay readable; gauges and buttons go as dark as the sky.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Its people act on their own.",
        items: [
          { title: "What a morning brings", body: "A letter, today's choice, something looked after, a find." },
          { title: "Lives with an arc", body: "People are born, grow up, grow old and die." },
          { title: "Build, paint, name", body: "Scaffolding at once; paint a flag; name boats and babies." },
          { title: "Talk with a goal", body: "Someone asks a favour; you do it by talking." },
          { title: "Three languages", body: "Interface, stories and talk in English, Chinese or Japanese." },
          { title: "Agent-ready", body: "A local agent like Pi, or your API key, can voice it." },
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
            body: "No. World Machine is an experimental pre-alpha. The app opens and plays on Worlds saved by v0.20 or later, up to its own version; Worlds saved by v0.28 and v0.29 open too, though no test holds one of their files. Each World Pack has its own version, and a World saved by a Pack version the app does not ship does not open; nothing is deleted, and the file keeps its whole history. Each save keeps the previous one as `<name>.world.bak`, and a file written by a newer app opens read-only and is never saved over.",
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
            body: "When you turn it on in Settings, a model words what the World tells you when you come back and answers for the people you talk to. It can be a local program such as Pi, your own API key, or this Mac's own model, which has not yet been run on a Mac. The model only proposes: checks refuse some answers outright, and a judge (Claude Haiku 4.5 by default, this Mac's model, or off) gives a second opinion on the rest. Some bad answers still get through, and a declined one is replaced by the World's own words. Crisis and sexual topics are never sent to a model, and each model answer is marked “Written by AI” with a Report button. What talk does, such as warmth or a favour done, is decided only by the World's own reading of your words. Your API key stays in your login keychain and is never handed to a Pack, Pi runs with no tools or extensions and keeps no session on disk, and every verdict is recorded, so replaying a World never asks a model again.",
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
    lead: "每天回来看看。早晨在等你。macOS 早期预览版。",
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
        src: "/assets/world-machine-noon.webp",
        alt: "Tiny Society 第 21 天正午，线条像手绘墨线：工作、镇上的钱与心气三个指标，码头上方的面包店、商店和房子，还有一处正在搭的脚手架。Mia 的卡片写着今天的选择：她的书比 Emma 的旧。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        width: 2200,
        height: 1696,
      },
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
      },
      {
        src: "/assets/world-machine-moment.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "Tiny Society 第 360 天的一个时刻：港口上方一组三格画，标题“Rosa settles for good”，分别配着之前、当时、之后的说明。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "大事画成三格",
        body: "婚礼、出生、告别，画成之前、当时、之后。",
      },
      {
        src: "/assets/world-machine-night.webp",
        width: 2200,
        height: 1696,
        asOf: "v0.30.0",
        alt: "春天夜里的 Tiny Society：港口沿岸窗里亮着灯，指标和缩放按钮随之变暗；右侧抽屉列着在建的新码头和岬角上的灯，Mia 的今日选择卡片，二者都是暖色的纸。截自应用在 Linux 预览环境中的运行画面，界面为英文。",
        title: "夜里，窗户亮起灯",
        body: "浅色外观下，抽屉和卡片仍然清楚易读；指标和按钮随夜空一起变暗。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "居民自己过日子",
        items: [
          { title: "早晨带来什么", body: "一封信、今天的选择、有人照看的东西、一件新发现。" },
          { title: "有始有终的一生", body: "居民出生、长大、变老、离世。" },
          { title: "建造、绘制、命名", body: "一开工就搭起脚手架；画一面旗，给船和新生儿起名。" },
          { title: "带着目的去聊", body: "有人托你帮忙，聊一聊就能办成。" },
          { title: "三种语言", body: "界面、故事和对话：中文、英文或日文。" },
          { title: "可接 Agent", body: "本机 Agent Pi 或你自己的 API 密钥，都能为世界发声。" },
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
            body: "不稳定。World Machine 是实验性的早期预览版。应用能打开 v0.20 起、不晚于自身版本所保存的世界，并继续运行；v0.28 与 v0.29 保存的世界也能打开，只是没有测试用到它们的文件。每个 World Pack 有自己的版本号，由应用未内置的 Pack 版本保存的世界打不开；文件不会被删除，完整历史仍在其中。每次保存都会把上一份留作 `<name>.world.bak`；由更新版本应用写入的文件会以只读方式打开，绝不会被覆盖。",
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
            body: "在设置里打开后，由模型讲述你回来时世界告诉你的事，并替你搭话的居民回答。模型可以是本机程序（如 Pi）、你自己的 API 密钥，或 Mac 自带的模型，后者还没在 Mac 上实际运行过。模型只提出建议：检查会直接拒掉一部分回答，其余的交给评审（默认 Claude Haiku 4.5，也可用 Mac 自带模型或关闭）再看一遍。仍有一些不合适的回答会漏过；被拒的回答会换成世界自己写好的句子。涉及危机和性的话题从不发给模型；模型写的每句回答都标有“AI 撰写”，并带“举报”按钮。对话带来的结果，比如好感或帮成的忙，只由世界自己对你原话的理解决定。你的 API 密钥保存在登录钥匙串中，从不交给任何 Pack；Pi 运行时不带工具和扩展，也不在磁盘上保留会话；每个裁定都会记录下来，回放世界时不会再问模型。",
          },
        ],
      },
    ],
  },
});

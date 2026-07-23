import type { NativeAppProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.goban;

export const gobanProduct: NativeAppProduct = {
  slug: "goban",
  name: "Goban",
  archetype: "nativeApp",
  locales: {
    en: {
      title: "Goban",
      description:
        "A desktop Gomoku game for macOS and Windows, with four AI levels, full-game review, tactical practice, named saves, and SGF tools.",
      eyebrow: "Desktop Gomoku game",
      headline: "A focused Gomoku board for desktop",
      lead: "Play on a clean 15×15 board, challenge four AI levels, review the full game, then drill the mistakes that decided it.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: ["Four AI levels", "Full-game replay", "Tactical practice", "SGF import and export"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "You want a quiet desktop board for a quick game, a harder AI match, a visual post-game review, or short tactical drills built from your own mistakes.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Current platforms",
          body: "Desktop releases for macOS and Windows; no online matchmaking.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Local by design",
          body: "Gameplay, saves, analysis, practice, and imported records run locally with no account required. Goban is a desktop board, not an online game service.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "At the board",
      features: [
        {
          title: "Four AI levels",
          body: "Choose easy, normal, hard, or extreme, then set your color and a fast, standard, or deep thinking budget.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Hints you control",
          body: "Press H to reveal a suggested intersection. The hint never places the stone for you and remains available during review.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Full-game review",
          body: "Open a full-game evaluation curve and a blunder list after a match. Select a point or mistake to jump directly to that move on the board.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Tactical practice",
          body: "Drill winning moves and five-threat defenses on a separate practice board. Built-in positions mix with drills generated from your own blunders.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Named saves and match stats",
          body: "Keep up to 30 named local saves, then resume the position you want. Track wins, losses, streaks, and time by difficulty.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "SGF tools and balanced openings",
          body: "Copy, export, import, paste, or drag in an SGF record. Use the standard opening or swap2 when you want a more balanced start.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      faqLabel: "Questions & download",
      faq: [
        {
          title: "Which systems are supported?",
          body: "The current release provides an Apple Silicon arm64 build for macOS and an x64 build for Windows. An Intel Mac build is not published.",
        },
        {
          title: "Does it need an account or internet connection?",
          body: "No account is required. Gameplay, saves, analysis, practice, and SGF work stay local; you only need the internet to download a release.",
        },
        {
          title: "Can I bring in an existing game?",
          body: "Yes. Import, paste, or drag in an SGF file, review the move list, and continue if the position is not finished.",
        },
      ],
    },
    zh: {
      title: "五子棋 Goban",
      description: "面向 macOS 与 Windows 的桌面五子棋，提供四档 AI、整局复盘、战术练习、命名存档与 SGF 棋谱工具。",
      eyebrow: "桌面五子棋",
      headline: "一张专注对弈的桌面五子棋盘",
      lead: "在干净的 15×15 棋盘上挑战四档 AI；对局结束后回看走势，再把关键失着练成短题。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: ["四档 AI", "整局复盘", "战术练习", "SGF 导入与导出"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "想安静地下一局棋、挑战更高难度 AI、在局后看清转折点，或把失着练成短题。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "当前支持范围",
          body: "提供 macOS 与 Windows 桌面版本，不提供在线匹配。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "本地运行",
          body: "对弈、存档、分析、练习和导入的棋谱都在本地完成，不需要账号。Goban 是桌面棋盘，不是在线对战服务。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "棋盘上的能力",
      features: [
        {
          title: "四档 AI",
          body: "可选简单、普通、困难和极难，设置执子颜色，并在快速、标准、深入三档思考预算之间切换。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "由你决定是否采纳提示",
          body: "按 H 显示建议落点。提示不会替你落子，复盘过程中也能使用。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "整局复盘",
          body: "局后打开全局胜负走势曲线和失着列表；点击曲线节点或失着条目，即可直接跳到棋盘上的对应手数。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "战术练习",
          body: "在独立小棋盘上练习制胜一手与挡住成五威胁；内置题目会与从你对局失着生成的题目混合。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "命名存档与对局统计",
          body: "最多保留 30 个带名称的本地存档，按局面继续；按难度查看胜负、连胜、手数与用时。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "SGF 工具与平衡开局",
          body: "复制、导出、导入、粘贴或拖入 SGF 棋谱；可用标准开局，或选择 swap2 让先手更均衡。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      faqLabel: "常见问题与下载",
      faq: [
        {
          title: "支持哪些系统？",
          body: "当前版本提供 macOS Apple Silicon arm64 与 Windows x64 构建，暂未发布 Intel Mac 版本。",
        },
        {
          title: "需要账号或联网吗？",
          body: "不需要账号。对弈、存档、分析、练习和 SGF 操作都在本地完成；只有下载 release 时需要联网。",
        },
        {
          title: "可以导入已有棋局吗？",
          body: "可以。导入、粘贴或拖入 SGF 文件后，可逐手复盘；棋局未结束时还可以继续下。",
        },
      ],
    },
  },
};

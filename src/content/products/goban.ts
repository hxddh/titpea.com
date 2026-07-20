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
        "A native Gomoku game for Apple Silicon Macs, with four AI levels, hints, review coaching, and SGF tools.",
      eyebrow: "Native macOS game",
      headline: "A focused Gomoku board for Mac",
      lead: "Play on a clean 15×15 board, challenge four AI levels, ask for a hint, or import an SGF game and review every move.",
      primaryCta: { label: "Download for Mac", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.goban },
      meta: `Apple Silicon · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: ["Four AI levels", "Review coaching", "SGF import and export", "No network permission"],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You want a quiet desktop board for a quick game, a harder AI match, or a move-by-move review of an SGF record.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Current platform",
          body: "The published build is for Apple Silicon Macs. It is a local game, not an online match service or a cross-platform client.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Local by construction",
          body: "The app declares no network permissions and denies external navigation. Games and imported records stay on the Mac.",
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
          title: "Review coaching",
          body: "Step through earlier moves to see wins, missed wins, blunders, best moves, and a stronger point marked on the board when available.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "SGF review and continuation",
          body: "Copy, export, import, paste, or drag in an SGF record; jump to any move and continue an unfinished game when you choose.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Board controls that stay close",
          body: "Toggle the sidebar and coordinates, undo or start over from the keyboard, and use native macOS full screen.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      faqLabel: "Questions & download",
      faq: [
        {
          title: "Which Macs are supported?",
          body: "The current release provides an Apple Silicon arm64 build for macOS. An Intel build is not published.",
        },
        {
          title: "Does it need an account or internet connection?",
          body: "No. The app has no account and declares no network permission. Downloading a release is the only online step.",
        },
        {
          title: "Can I bring in an existing game?",
          body: "Yes. Import, paste, or drag in an SGF file, review the move list, and continue if the position is not finished.",
        },
      ],
    },
    zh: {
      title: "五子棋 Goban",
      description: "原生 Apple Silicon macOS 五子棋，提供四档 AI、提示、复盘分析与 SGF 棋谱工具。",
      eyebrow: "原生 macOS 游戏",
      headline: "一张专注对弈的 Mac 五子棋盘",
      lead: "在干净的 15×15 棋盘上对弈，挑战四档 AI，按需查看提示，也可以导入 SGF 棋谱逐手复盘。",
      primaryCta: { label: "下载 Mac 版", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.goban },
      meta: `Apple Silicon · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: ["四档 AI", "复盘分析", "SGF 导入与导出", "无网络权限"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "想安静下一局棋、挑战更高难度 AI，或把一份 SGF 棋谱逐手打开复盘。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "当前支持范围",
          body: "已发布版本面向 Apple Silicon Mac。它是本地棋盘，不提供在线匹配，也不是跨平台客户端。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "本地运行",
          body: "应用不声明网络权限，并禁止外部导航。当前棋局和导入的棋谱都留在 Mac 上。",
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
          title: "复盘教练标注",
          body: "翻看较早手数时，显示制胜、错失胜着、漏防、最佳一手或更优落点；可用时会在棋盘标出建议位置。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "SGF 复盘与续下",
          body: "复制、导出、导入、粘贴或拖入 SGF 棋谱；跳到任意手，未终局时可选择继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "随手可用的棋盘控制",
          body: "切换侧栏和坐标，使用快捷键悔棋或新开一局，也支持 macOS 原生全屏。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      faqLabel: "常见问题与下载",
      faq: [
        {
          title: "支持哪些 Mac？",
          body: "当前 release 提供 macOS Apple Silicon arm64 构建，暂未发布 Intel 版本。",
        },
        {
          title: "需要账号或联网吗？",
          body: "不需要。应用没有账号系统，也不声明网络权限；只有下载 release 时需要联网。",
        },
        {
          title: "可以导入已有棋局吗？",
          body: "可以。导入、粘贴或拖入 SGF 文件后，可逐手复盘；棋局未结束时还可以继续下。",
        },
      ],
    },
  },
};

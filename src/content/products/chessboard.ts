import type { NativeAppProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.chessboard;

export const chessboardProduct: NativeAppProduct = {
  slug: "chessboard",
  name: "Chessboard",
  archetype: "nativeApp",
  locales: {
    en: {
      title: "Chessboard",
      description:
        "A desktop chess app for macOS and Windows, with Stockfish 18, local play, PGN and FEN tools, and full-game review analysis.",
      eyebrow: "Desktop chess",
      headline: "A focused chessboard for desktop",
      lead: "Play against Stockfish 18 or a friend on the same screen, then review the full game with a centipawn curve and annotated mistakes.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: ["Stockfish 18", "Four strength levels", "Full-game review", "PGN and FEN tools"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "You want a quiet desktop board for a quick game against Stockfish, a local two-player match, or a post-game review that shows where the evaluation turned.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Current platforms",
          body: "Desktop releases for macOS and Windows; no online matchmaking or accounts.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Local by design",
          body: "Gameplay, autosave, analysis, and imported records run locally. Chessboard is a desktop board, not an online chess service.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "At the board",
      features: [
        {
          title: "Stockfish at four strengths",
          body: "Play against Stockfish 18 from beginner Elo 1320 through full strength. Choose white or black; playing black flips the board for you.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Two-player on one screen",
          body: "Switch to local two-player mode and take turns on the same board without an engine reply.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Complete rules, clear moves",
          body: "Legal moves highlight as dots and capture rings. Castling, en passant, promotion, checkmate, stalemate, and draw claims are enforced by chess.js.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Full-game review",
          body: "Run an engine pass to build a centipawn curve and annotate mistakes on the move list. Jump to any position, then continue from a chosen move.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "PGN and FEN tools",
          body: "Copy, export, paste, or import a PGN record; copy the current FEN whenever you need the exact position.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Themes, flip, and stats",
          body: "Switch wood, night, day, or paper themes, flip the board with F, and keep win–loss–draw stats by difficulty across restarts.",
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
          body: "No account is required. Gameplay, autosave, analysis, and PGN work stay local; you only need the internet to download a release.",
        },
        {
          title: "Can I bring in an existing game?",
          body: "Yes. Paste or import a PGN file, review the move list, jump to any position, and continue from there if you choose.",
        },
        {
          title: "What license does it use?",
          body: "Chessboard is GPLv3. It vendors Stockfish.js 18 (GPLv3) and chess.js 0.13.4 (BSD-2-Clause).",
        },
      ],
    },
    zh: {
      title: "国际象棋 Chessboard",
      description:
        "面向 macOS 与 Windows 的桌面国际象棋，内置 Stockfish 18，支持本地对弈、PGN/FEN 棋谱工具与整局复盘分析。",
      eyebrow: "桌面国际象棋",
      headline: "一张专注对弈的桌面国际象棋盘",
      lead: "与 Stockfish 18 或同屏好友对弈；局后通过兵分走势曲线和失着标注，回看局势从哪里发生变化。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: ["Stockfish 18", "四档强度", "整局复盘", "PGN 与 FEN 工具"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "想安静地下一局棋、挑战 Stockfish，或在局后直观看清局势从哪一着开始转折。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "当前支持范围",
          body: "提供 macOS 与 Windows 桌面版本，不提供在线匹配或账号体系。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "本地运行",
          body: "对弈、自动存档、分析和导入的棋谱都在本地完成。Chessboard 是桌面棋盘，不是在线对战服务。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "棋盘上的能力",
      features: [
        {
          title: "四档 Stockfish 强度",
          body: "内置 Stockfish 18，从入门 Elo 1320 到满强度。可选执白或执黑；执黑时自动翻转视角。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "同屏双人对弈",
          body: "切换到双人模式后，两人在同一棋盘轮流走子，不需要引擎回着。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "完整规则与清晰走法",
          body: "合法落点以圆点、吃子以圆环标出。王车易位、吃过路兵、升变、将死、逼和与和棋判定由 chess.js 执行。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "整局复盘",
          body: "一键引擎评估生成兵分走势曲线，并在着法列表标注失着；跳到任意局面后，可从该着继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "PGN 与 FEN 工具",
          body: "复制、导出、粘贴或导入 PGN 棋谱；需要精确局面时可随时复制当前 FEN。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "主题、翻转与统计",
          body: "在木色、夜色、日间、纸本主题间切换，按 F 翻转棋盘，并按难度保留胜负和统计。",
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
          body: "不需要账号。对弈、自动存档、分析和 PGN 操作都在本地完成；只有下载 release 时需要联网。",
        },
        {
          title: "可以导入已有棋局吗？",
          body: "可以。粘贴或导入 PGN 后可逐着复盘，跳到任意局面，也可从该着继续下。",
        },
        {
          title: "使用什么许可？",
          body: "Chessboard 使用 GPLv3。内置 Stockfish.js 18（GPLv3）与 chess.js 0.13.4（BSD-2-Clause）。",
        },
      ],
    },
  },
};

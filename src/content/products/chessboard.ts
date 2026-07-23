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
        "A desktop chess app for macOS and Windows, with Stockfish 18, a 24-lesson course, mate drills, local play, clocks, PGN/FEN tools, and full-game review.",
      eyebrow: "Desktop chess",
      headline: "A focused chessboard for desktop",
      lead: "Learn the rules in 24 offline lessons, drill mates through mate-in-three, play Stockfish 18 or a friend on the same screen, then review with a centipawn curve.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: ["24 beginner lessons", "Mate drills", "Stockfish 18", "Full-game review"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "You want to learn chess from scratch, practice mate patterns, play a quiet game against Stockfish, run a timed local match, or review where the evaluation turned.",
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
          body: "Lessons, drills, gameplay, autosave, analysis, and imported records run locally. Chessboard is a desktop board, not an online chess service.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "At the board",
      features: [
        {
          title: "24 beginner lessons",
          body: "An offline course from board coordinates and piece moves through pins, saving attacked pieces, checkmate, draws, notation, and opening principles. Miss twice and the answer appears; progress saves and can be reset.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Mate drills through mate-in-three",
          body: "Practice mate-in-one, mate-in-two, and mate-in-three offline, including promotion and Arabian mates. Wrong answers undo immediately and show how Black escapes; press H for the solution arrow.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Stockfish with hints",
          body: "Play against Stockfish 18 from beginner Elo 1320 through full strength. Press H for a full-strength arrow hint without placing the move for you.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Drag, clocks, draw offers, openings",
          body: "Drag pieces or click to move. Share one screen in two-player mode with optional 3, 5, or 10 minute clocks, offer a draw, and see the current ECO opening name in the sidebar.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Full-game review",
          body: "Run an engine pass to build a centipawn curve, annotate mistakes, and show the principal variation as you scrub the game. Jump to any position, then continue from a chosen move.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "PGN, FEN, themes, and stats",
          body: "Copy, export, paste, or import standard seven-tag PGN, including FEN-start studies; copy the current FEN; switch wood, night, day, or paper themes; and keep win–loss–draw stats by difficulty.",
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
          body: "No account is required. Lessons, drills, gameplay, autosave, analysis, and PGN work stay local; you only need the internet to download a release.",
        },
        {
          title: "Can I bring in an existing game?",
          body: "Yes. Paste or import a PGN file, including FEN-start studies, then review the move list, jump to any position, and continue from there if you choose.",
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
        "面向 macOS 与 Windows 的桌面国际象棋，内置 Stockfish 18、24 课零基础教学与一步到三步杀练习，支持本地对弈、棋钟、PGN/FEN 棋谱工具与整局复盘分析。",
      eyebrow: "桌面国际象棋",
      headline: "一张专注对弈的桌面国际象棋盘",
      lead: "用 24 课离线课程从零上手，练习一步到三步杀，再与 Stockfish 18 或同屏好友对弈；局后通过引擎评估曲线回看转折。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: ["24 课零基础教学", "杀型做题", "Stockfish 18", "整局复盘"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "想从棋盘上学会规则，练经典杀型，安静地挑战 Stockfish，开一局计时双人对弈，或在局后看清局势转折。",
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
          body: "课程、做题、对弈、自动存档、分析和导入的棋谱都在本地完成。Chessboard 是桌面棋盘，不是在线对战服务。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "棋盘上的能力",
      features: [
        {
          title: "24 课零基础教学",
          body: "离线课程覆盖棋盘坐标、棋子走法、牵制、救受攻的子、将杀与和棋、记谱，再到开局三原则。连错两次会标出答案，进度可保存也可重置。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "一步杀到三步杀练习",
          body: "离线练习一步杀、两步杀与三步杀，含升变杀与阿拉伯杀。答错立即回退，并指出黑方如何化解；按 H 显示正解箭头。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Stockfish 与引擎提示",
          body: "内置 Stockfish 18，从入门 Elo 1320 到满强度。按 H 显示满强度推荐箭头，不会替你落子。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "拖拽、棋钟、提和与开局",
          body: "可拖拽棋子，也可点击走子。同屏双人可开 3 / 5 / 10 分钟棋钟、发起提和；侧栏按局面显示主流 ECO 开局名称。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "整局复盘",
          body: "一键引擎评估生成引擎评估曲线并标注失着，复盘时显示引擎主变；跳到任意局面后，可从该着继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "PGN、FEN、主题与统计",
          body: "复制、导出、粘贴或导入带标准七标签的 PGN（含指定 FEN 开局的研究谱）；随时复制当前 FEN；在木色、夜色、日间、纸本主题间切换，并按难度保留胜负统计。",
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
          body: "不需要账号。课程、做题、对弈、自动存档、分析和 PGN 操作都在本地完成；只有下载 release 时需要联网。",
        },
        {
          title: "可以导入已有棋局吗？",
          body: "可以。粘贴或导入 PGN（含指定 FEN 开局的棋谱）后可逐着复盘，跳到任意局面，也可从该着继续下。",
        },
        {
          title: "使用什么许可？",
          body: "Chessboard 使用 GPLv3。内置 Stockfish.js 18（GPLv3）与 chess.js 0.13.4（BSD-2-Clause）。",
        },
      ],
    },
  },
};

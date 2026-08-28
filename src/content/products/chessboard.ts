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
        "A desktop chess app for macOS and Windows, with Stockfish 18, a 72-lesson course, mate drills, local play, clocks, PGN/FEN tools, and full-game review.",
      eyebrow: "Desktop chess",
      headline: "A focused desktop chessboard",
      lead: "72 offline lessons in Chinese, English, or Japanese, mate drills through mate-in-three, local play against Stockfish 18 or a friend, then a centipawn review curve.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: [],
      positioningLabel: "A local chessboard",
      positioning: [
        {
          title: "Learn, drill, then play locally",
          body: "You want to learn chess from scratch, practice mate patterns, play a quiet game against Stockfish, run a timed local match, or review where the evaluation turned.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Apple Silicon and Windows",
          body: "Desktop releases for macOS (Apple Silicon) and Windows; no Intel Mac build, and no online matchmaking or accounts.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Lessons stay on this computer",
          body: "Lessons, drills, gameplay, autosave, analysis, and imported records run locally. Chessboard is a desktop board, not an online chess service.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Bring a PGN",
          body: "Paste or import a PGN file, including FEN-start studies, then review the move list, jump to any position, and continue from there if you choose.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "GPLv3, including Stockfish",
          body: "Chessboard is GPLv3. It vendors Stockfish.js 18 (GPLv3) and chess.js 0.13.4 (BSD-2-Clause).",
          intent: "boundary",
          surface: "protocol",
        },
      ],
    },
    zh: {
      title: "国际象棋 Chessboard",
      description:
        "面向 macOS 与 Windows 的桌面国际象棋，内置 Stockfish 18、72 课零基础教学与一步到三步杀练习，支持本地对弈、棋钟、PGN/FEN 棋谱工具与整局复盘分析。",
      eyebrow: "桌面国际象棋",
      headline: "一张专注对弈的桌面国际象棋盘",
      lead: "72 课离线课程（中文 / English / 日本語），练习一步到三步杀，再与 Stockfish 18 或同屏好友对弈，局后看评估曲线。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: [],
      positioningLabel: "本机国际象棋盘",
      positioning: [
        {
          title: "先学、再练，再本机对弈",
          body: "想从棋盘上学会规则，练经典杀型，安静地挑战 Stockfish，开一局计时双人对弈，或在局后看清局势转折。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Apple Silicon 与 Windows",
          body: "提供 macOS Apple Silicon 与 Windows 桌面版本，没有 Intel Mac 构建，也不提供在线匹配或账号体系。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "课程留在这台电脑",
          body: "课程、做题、对弈、自动存档、分析和导入的棋谱都在本地完成。Chessboard 是桌面棋盘，不是在线对战服务。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "可以带入 PGN",
          body: "粘贴或导入 PGN（含指定 FEN 开局的棋谱）后可逐着复盘，跳到任意局面，也可从该着继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "GPLv3，含 Stockfish",
          body: "Chessboard 使用 GPLv3。内置 Stockfish.js 18（GPLv3）与 chess.js 0.13.4（BSD-2-Clause）。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
    },
  },
};

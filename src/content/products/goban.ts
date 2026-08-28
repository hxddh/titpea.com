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
        "A desktop Gomoku game for macOS and Windows, with free, swap2, or Renju rules, four AI levels, full-game review, 130 tactical drills, a daily challenge, and SGF tools.",
      eyebrow: "Desktop Gomoku game",
      headline: "Gomoku with Renju and daily drills",
      lead: "Free, swap2, or Renju on a 15×15 board, with four AI levels, full-game review, 130 tactical drills including VCF, and a five-puzzle daily streak.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: [],
      positioningLabel: "A local Gomoku board",
      positioning: [
        {
          title: "A quiet board, not a lobby",
          body: "You want a quiet desktop board for free, swap2, or Renju play, a harder AI match, a visual post-game review, tactical drills including VCF, or a five-puzzle daily streak.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Apple Silicon and Windows",
          body: "Desktop releases for macOS (Apple Silicon) and Windows; no Intel Mac build, and no online matchmaking.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "No account, no server",
          body: "Gameplay, saves, analysis, practice, daily challenges, and imported records run locally with no account required. Goban is a desktop board, not an online game service.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Bring an SGF",
          body: "Import, paste, or drag in an SGF file, review the move list, and continue if the position is not finished.",
          intent: "capability",
          surface: "artifact",
        },
      ],
    },
    zh: {
      title: "五子棋 Goban",
      description:
        "面向 macOS 与 Windows 的桌面五子棋，支持自由式、swap2 与连珠禁手，四档 AI、整局复盘、130 道战术题、每日挑战与 SGF 工具。",
      eyebrow: "桌面五子棋",
      headline: "五子棋：连珠规则与战术练习",
      lead: "15×15 棋盘可选自由式、swap2 或连珠禁手，四档 AI、整局复盘、130 道战术题（含 VCF），以及每日五题连打。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: [],
      positioningLabel: "本机五子棋盘",
      positioning: [
        {
          title: "要安静下棋，不要大厅",
          body: "想用自由式、swap2 或连珠下安静一局，挑战更高难度 AI，在局后看清转折，或练含 VCF 的战术题与每日五题。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Apple Silicon 与 Windows",
          body: "提供 macOS Apple Silicon 与 Windows 桌面版本，没有 Intel Mac 构建，也不提供在线匹配。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "没有账号，也没有服务器",
          body: "对弈、存档、分析、练习、每日挑战和导入的棋谱都在本地完成，不需要账号。Goban 是桌面棋盘，不是在线对战服务。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "可以带入 SGF",
          body: "导入、粘贴或拖入 SGF 文件后，可逐手复盘；棋局未结束时还可以继续下。",
          intent: "capability",
          surface: "artifact",
        },
      ],
    },
  },
};

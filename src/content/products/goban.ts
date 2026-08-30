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
        "A desktop Gomoku board for macOS and Windows: free, swap2, or Renju, with review, drills, and a daily streak.",
      eyebrow: "Desktop Gomoku game",
      headline: "Gomoku with Renju drills",
      lead: "A quiet 15×15 board for free, swap2, or Renju — with review and drills when you want them.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: [],
      positioningLabel: "A local Gomoku board",
      positioning: [
        {
          title: "A quiet board, not a lobby",
          body: "You want a local board for an evening of play or review, not a ranked lobby or another account.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "No account, no server",
          body: "No Intel Mac build, no account, no server. Gameplay, saves, and imported records stay local.",
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
      description: "面向 macOS 与 Windows 的桌面五子棋：自由式、swap2 或连珠，需要时再复盘与做题。",
      eyebrow: "桌面五子棋",
      headline: "五子棋：连珠规则与战术练习",
      lead: "安静的 15×15 棋盘：自由式、swap2 或连珠；需要时再复盘、做题。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: [],
      positioningLabel: "本机五子棋盘",
      positioning: [
        {
          title: "要安静下棋，不要大厅",
          body: "想在桌面上安静下完一局或复盘，不要排位大厅，也不要再注册账号。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "没有账号，也没有服务器",
          body: "没有 Intel Mac 构建，没有账号，也没有服务器。对弈、存档和导入的棋谱都在本地。",
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

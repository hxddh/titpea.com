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
      headline: "A game of Gomoku",
      lead: "Play on a 15×15 desktop board with freestyle, swap2, or Renju rules. Review a game or practise a position when you want to.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: [],
      positioningLabel: "A local Gomoku board",
      positioning: [
        {
          title: "Review an SGF",
          body: "Import, paste, or drag in an SGF file to inspect the move list. Continue playing if the position is unfinished.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Local games and records",
          body: "Gameplay, saves, and imported records stay local. No account or server is required. There is no Intel Mac build.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
    },
    zh: {
      title: "五子棋 Goban",
      description: "面向 macOS 与 Windows 的桌面五子棋：自由式、swap2 或连珠，需要时再复盘与做题。",
      eyebrow: "桌面五子棋",
      headline: "下一局五子棋",
      lead: "在桌面的 15×15 棋盘上下棋，选择自由式、swap2 或连珠规则。下完可以复盘，也可以做题练习。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.gobanReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.goban },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: [],
      positioningLabel: "本机五子棋盘",
      positioning: [
        {
          title: "带入 SGF 复盘",
          body: "导入、粘贴或拖入 SGF 文件，逐手查看棋谱。棋局尚未结束时，可以继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "对弈与棋谱保存在本机",
          body: "对弈、存档和导入的棋谱都在本地，无需账号或服务器。目前没有 Intel Mac 构建。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
    },
  },
};

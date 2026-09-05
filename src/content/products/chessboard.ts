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
        "A desktop chessboard for macOS and Windows, with Stockfish 18, offline lessons, mate drills, and local review.",
      eyebrow: "Desktop chess",
      headline: "Learn, then play",
      lead: "Take an offline lesson, practise a mating pattern, then play Stockfish or a friend on the same board. Review the evaluation curve after the game.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · Local app`,
      proof: [],
      positioningLabel: "A local chessboard",
      positioning: [
        {
          title: "Bring a PGN",
          body: "Paste or import a PGN, including FEN-start studies. Review the moves, jump to a position, or continue playing from it.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Lessons and games on this computer",
          body: "Lessons, drills, gameplay, saves, and analysis run locally. Play against the engine or a friend on the same screen; online matchmaking is not included.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
    },
    zh: {
      title: "国际象棋 Chessboard",
      description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 18、离线课程、杀型练习与本机复盘。",
      eyebrow: "桌面国际象棋",
      headline: "学棋、练习，再下一局",
      lead: "离线学棋、练习杀型，再与 Stockfish 或同屏好友对弈。下完一局，查看评估曲线和逐着分析。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.chessboardReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.chessboard },
      meta: `macOS + Windows · ${facts.licenseLabel} · ${facts.latestRelease} · 本地应用`,
      proof: [],
      positioningLabel: "本机国际象棋盘",
      positioning: [
        {
          title: "带入 PGN 复盘",
          body: "粘贴或导入 PGN，支持指定 FEN 开局的棋谱。逐着查看，跳到任意局面，也可从那里继续下。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "在这台电脑上学棋与对弈",
          body: "课程、做题、对弈、存档和分析都在本地完成。可以与引擎或同屏好友下棋，不提供在线匹配。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
    },
  },
};

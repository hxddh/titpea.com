import { defineProduct } from "../schema";

export default defineProduct({
  slug: "chessboard",
  line: "games",
  featured: {
    order: 2,
    image: {
      src: {
        en: "/assets/chessboard-featured-en.webp",
        zh: "/assets/chessboard-featured-zh.webp",
      },
      width: 1800,
      height: 1200,
      alt: {
        en: "Chessboard after a full-game Stockfish review: the final position, the evaluation curve with marked mistakes, and each side's accuracy",
        zh: "Chessboard 用 Stockfish 复盘完整局：终局局面、标出失着的评估曲线，以及双方精准度",
      },
    },
  },
  repo: "hxddh/chessboard",
  icon: "/assets/icons/chessboard.webp",
  og: "/assets/og-chessboard.png",
  schema: {
    category: "GameApplication",
    os: "macOS and Windows",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chess app for macOS and Windows, with Stockfish 19, lessons, 40,000 puzzles, and a searchable game library.",
    eyebrow: "Desktop chess",
    headline: "Learn, then play.",
    lead: "Lessons. 40,000 puzzles. Stockfish or a friend.",
    catalog: {
      role: "Stockfish + lessons",
      text: "Learn, solve puzzles, then play Stockfish or a friend on the same board.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/chessboard",
    },
    meta: "macOS + Windows · GPLv3 · {version} · Local app",
    stats: {
      title: "Lessons, puzzles, openings",
      items: [
        {
          value: "96",
          label: "lessons from zero to intermediate",
        },
        {
          value: "40,000",
          label: "Lichess puzzles, rated 600–2799",
        },
        {
          value: "3,810",
          label: "named opening positions",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-en.webp",
        alt: "Chessboard in light appearance with the wood board, showing a finished game, the move list, and sidebar controls",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-en.webp",
        alt: "Chessboard finishing a Stockfish review of a 17-move game, then stepping through it move by move as the evaluation curve marks mistakes",
        width: 1222,
        height: 768,
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/chessboard-review-en.mp4", webm: "/assets/chessboard-review-en.webm" },
        title: "Mistakes show on the curve.",
        body: "A full-game Stockfish pass draws a win-chance curve and marks mistakes; jump to any position and play on.",
      },
      {
        src: "/assets/chessboard-theme-en.webp",
        alt: "Chessboard in dark appearance with the green board on the final position of the game, preferences closed",
        width: 2446,
        height: 1536,
        title: "Five boards, light or dark.",
        body: "Wood, green, blue, paper, or marble, with a choice of piece sets; the position stays.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Lessons and games stay on this computer.",
        items: [
          { title: "Offline lessons", body: "From zero to intermediate." },
          { title: "Rated puzzles", body: "28 themes, with Sprint and Streak modes." },
          { title: "A twelve-rung ladder", body: "Named Stockfish opponents; each result moves your rating." },
          { title: "A friend, same screen", body: "Two players, one board." },
          { title: "A searchable library", body: "Filter your games and explore their openings." },
          { title: "Retry your mistakes", body: "Each ? and ?? explained; try again from before it." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Games, puzzles, lessons, and progress stay on this computer, in the app's storage and a local data file.",
          "Sync goes online only when you turn it on and press Sync, and sends Lichess or Chess.com only your user name.",
          "Check for updates, in the About panel, asks GitHub for the latest release only when you press it.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can I play online?",
            body: "No. Online matchmaking is not included; play the engine or a friend on the same screen. Optional sync, off by default, can import your recent games from Lichess or Chess.com.",
          },
          {
            title: "What can I do with a PGN?",
            body: "Paste or import a PGN, including FEN-start studies. Review the moves, jump to a position, or continue playing from it.",
          },
          {
            title: "Does it track my progress?",
            body: "Yes. Games against the engine give you a rating, kept apart from your puzzle rating, and the result card shows each change. The Me page adds a rating curve, a practice calendar with your streak, and your strengths and weaknesses.",
          },
          {
            title: "How many games can the library hold?",
            body: "Up to 10,000, stored in the app's database with a mirror in a local data file. On macOS it is not yet confirmed that the packaged app can use that database; if it cannot, the library falls back to its older storage, loses no games, but holds fewer than 10,000.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19、课程、四万道谜题与可搜索的棋谱库。",
    eyebrow: "桌面国际象棋",
    headline: "学棋、练习，再下一局",
    lead: "课程。四万道谜题。与 Stockfish 或好友对弈。",
    catalog: {
      role: "Stockfish 与课程",
      text: "学棋、解谜题，再与 Stockfish 或同屏好友下一局。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/chessboard",
    },
    meta: "macOS + Windows · GPLv3 · {version} · 本地应用",
    stats: {
      title: "课程、题库、开局",
      items: [
        {
          value: "96",
          label: "课，从零基础到中级",
        },
        {
          value: "40,000",
          label: "道 Lichess 谜题，600–2799 分",
        },
        {
          value: "3,810",
          label: "个开局局面可识别",
        },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "国际象棋 Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-zh.webp",
        alt: "Chessboard 浅色外观、木色棋盘上的终局，显示着法列表与侧栏控制",
        width: 2446,
        height: 1536,
      },
    },
    showcases: [
      {
        src: "/assets/chessboard-review-zh.webp",
        alt: "Chessboard 用 Stockfish 分析完一局 17 回合的棋，再逐手回放，评估曲线标出失着",
        width: 1222,
        height: 768,
        video: { mp4: "/assets/chessboard-review-zh.mp4", webm: "/assets/chessboard-review-zh.webm" },
        title: "失着落在曲线上",
        body: "Stockfish 跑完整局，画出胜率曲线并标注失着；跳到任意局面可继续下。",
      },
      {
        src: "/assets/chessboard-theme-zh.webp",
        alt: "Chessboard 深色外观、绿色棋盘，对局终局局面",
        width: 2446,
        height: 1536,
        title: "五种棋盘，浅色或深色",
        body: "木、绿、蓝、纸墨、大理石，棋子也有多套可选，局面不变。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "学棋与对弈都在这台电脑上",
        items: [
          { title: "离线课程", body: "从零基础到中级。" },
          { title: "谜题评级", body: "28 个主题，另有冲刺与连胜。" },
          { title: "十二档对手", body: "每档一个 Stockfish 角色，胜负计入等级分。" },
          { title: "同屏对弈", body: "两人共用一块棋盘。" },
          { title: "可搜索的棋谱库", body: "按条件筛选对局，附开局浏览器。" },
          { title: "失着再试", body: "每个 ? 与 ?? 附一句说明，可回到失着前再试。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "对局、谜题、课程与进度都留在这台电脑上，存在应用自己的存储和本机数据文件里。",
          "只有打开同步并点「同步」时才联网：向 Lichess 或 Chess.com 取回你最近的对局，只发送用户名。",
          "「关于」里的「检查更新」只在你点它时向 GitHub 查询最新版本。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，不提供在线匹配。可以与引擎或同屏好友下棋。可选的同步默认关闭，能从 Lichess 或 Chess.com 导入你最近的对局。",
          },
          {
            title: "PGN 能做什么？",
            body: "粘贴或导入 PGN，支持指定 FEN 开局的棋谱。逐着查看，跳到任意局面，也可从那里继续下。",
          },
          {
            title: "能看到自己的进步吗？",
            body: "能。与引擎对局有自己的等级分，和谜题评级分开记，结果卡上显示每次涨跌。「我的」页还有评级曲线、练习日历与连续天数，以及强项与弱项。",
          },
          {
            title: "棋谱库能存多少局？",
            body: "最多一万局，存在应用的数据库里，并在本机数据文件中另存一份镜像。macOS 打包版能否使用这个数据库尚未在真机上确认；若不能，棋谱库退回旧的存法，不丢棋，但存不到一万局。",
          },
        ],
      },
    ],
  },
});

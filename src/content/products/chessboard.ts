import { defineProduct } from "../schema";

// The demo puzzle: Lichess puzzle 6kxUl (lichess.org/training/6kxUl, CC0),
// one of the 40,000 Chessboard ships, row "6kxUl" in src/web/js/lichess/band-0600.js
// at hxddh/chessboard v8.3.0 (rated 600, themes "sacrifice m2"). The FEN is the
// puzzle position (puzzle-db.js decodeRow; Black to move, so the app turns the
// board). Checked with the app's chess.js: no mate in one, Rxd1 is White's only
// legal reply, and Rxd1# is the only mate after it.
const puzzle = {
  fen: "r2r2k1/5ppp/1p1q4/4B2b/2B1p3/P1Q1P2P/1PP2PP1/2K4R b - - 0 20",
  line: [
    { from: "d6", to: "d1", san: "Qd1+" },
    { from: "h1", to: "d1", san: "Rxd1" },
    { from: "d8", to: "d1", san: "Rxd1#" },
  ],
};

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
    os: "macOS, Windows",
  },
  sectionIndex: false,
  en: {
    title: "Chessboard",
    description:
      "A desktop chess app for macOS and Windows, with Stockfish 19, lessons, 40,000 puzzles, and a searchable game library.",
    eyebrow: "Desktop chess",
    headline: "Chess you can review.",
    lead: "A Stockfish review marks the mistakes. Lessons. 40,000 puzzles.",
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
          value: "120",
          label: "lessons from zero to advanced",
        },
        {
          value: "40,000",
          label: "Lichess puzzles, rated 600–2799",
        },
        {
          value: "3,815",
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
        kind: "demo",
        id: "try",
        title: "Solve one here.",
        body: "Tap a piece, then its square, or use the arrow keys and Enter.",
        caption: "A position from Chessboard’s built-in Lichess puzzle set (puzzle 6kxUl).",
        demo: {
          kind: "chessPuzzle",
          ...puzzle,
          label: "Puzzle board",
          prompt: "Black to move. Mate in two.",
          good: "Right.",
          reply: "Right. White plays {move}. Your move.",
          wrong: "Not this one. Try again.",
          solved: "Checkmate. The app has 40,000 more, rated 600–2799.",
          reset: "Reset",
          selected: "{piece} on {square} selected",
          square: "{square}, {piece}",
          piece: "{color} {piece}",
          colors: { w: "white", b: "black" },
          pieces: { k: "king", q: "queen", r: "rook", b: "bishop", n: "knight", p: "pawn" },
        },
      },
      {
        kind: "cards",
        id: "features",
        label: "Lessons and games stay on this computer.",
        items: [
          { title: "Offline lessons", body: "From first moves to calculation." },
          { title: "Rated puzzles", body: "28 themes; Rush, Streak, Look ahead, Blind mate." },
          { title: "Guess the move", body: "Ten master games; other moves cost win chance." },
          { title: "A 21-rung ladder", body: "Each rung a step harder; results move your rating." },
          { title: "90 endgames", body: "Win or hold them against full-strength Stockfish." },
          { title: "Your opening book", body: "Up to 5,000 lines a side, reviewed on a schedule." },
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
            body: "No. Online matchmaking is not included; play the engine or a friend on the same screen. Optional sync, off by default, imports your new games from Lichess or Chess.com; it runs in the background, so you can keep playing while it fetches.",
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
            title: "How do Look ahead and Blind mate work?",
            body: "Look ahead stops the board at a puzzle and writes the next 2–6 half-moves as text; play them in your head, then say which piece can capture or give check, or whether there is a mate. Once the puzzle’s own line runs out, Stockfish plays on. Blind mate shows a mate in one or two for 3 seconds, then hides the pieces. Both pick puzzles from the built-in Lichess set at your rating in that mode.",
          },
          {
            title: "How many games can the library hold?",
            body: "Up to 10,000. Filter them, find every game that reached a position, and explore their openings. Games are stored in the app's database with a mirror in a local data file. After a restart, a 10,000-game library lists again in about 0.2 seconds.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19、课程、四万道谜题与可搜索的棋谱库。",
    eyebrow: "桌面国际象棋",
    headline: "下完一局，复盘失着",
    lead: "Stockfish 复盘标出失着。课程。四万道谜题。",
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
          value: "120",
          label: "课，从零基础到进阶",
        },
        {
          value: "40,000",
          label: "道 Lichess 谜题，600–2799 分",
        },
        {
          value: "3,815",
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
        kind: "demo",
        id: "try",
        title: "在这里解一道",
        body: "先点棋子，再点目标格；也可以用方向键和回车。",
        caption: "取自 Chessboard 内置的 Lichess 题库（谜题 6kxUl）。",
        demo: {
          kind: "chessPuzzle",
          ...puzzle,
          label: "谜题棋盘",
          prompt: "黑方走，两步杀。",
          good: "对了。",
          reply: "对了。白方走 {move}，轮到你。",
          wrong: "不是这步，再想想。",
          solved: "将死。应用里还有四万道，600–2799 分。",
          reset: "重来",
          selected: "已选中{square}的{piece}",
          square: "{square}，{piece}",
          piece: "{color}{piece}",
          colors: { w: "白", b: "黑" },
          pieces: { k: "王", q: "后", r: "车", b: "象", n: "马", p: "兵" },
        },
      },
      {
        kind: "cards",
        id: "features",
        label: "学棋与对弈都在这台电脑上",
        items: [
          { title: "离线课程", body: "从认识棋盘到计算。" },
          { title: "谜题评级", body: "28 个主题；冲刺、连胜、看 N 步、盲走。" },
          { title: "名局猜着", body: "十局名局，和原着不同就按胜率差扣分。" },
          { title: "二十一档对手", body: "每往上一档都难一截，胜负计入等级分。" },
          { title: "90 个残局", body: "和满强度的 Stockfish 下，赢下来或守和。" },
          { title: "你的开局书", body: "每方最多 5,000 条线，按日程复习。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "对局、谜题、课程与进度都留在这台电脑上，存在应用自己的存储和本机数据文件里。",
          "只有打开同步并点“同步”时才联网：向 Lichess 或 Chess.com 取回你最近的对局，只发送用户名。",
          "“关于”里的“检查更新”只在你点它时向 GitHub 查询最新版本。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，不提供在线匹配。可以与引擎或同屏好友下棋。可选的同步默认关闭，能从 Lichess 或 Chess.com 导入你的新对局；它在后台进行，取棋时照样能下棋。",
          },
          {
            title: "PGN 能做什么？",
            body: "粘贴或导入 PGN，支持指定 FEN 开局的棋谱。逐着查看，跳到任意局面，也可从那里继续下。",
          },
          {
            title: "能看到自己的进步吗？",
            body: "能。与引擎对局有自己的等级分，和谜题评级分开记，结果卡上显示每次涨跌。“我的”页还有评级曲线、练习日历与连续天数，以及强项与弱项。",
          },
          {
            title: "“看 N 步”和“盲走”怎么练？",
            body: "“看 N 步”让棋盘停在题面，接下来的 2–6 个半回合只写成文字，你在脑子里走完，再回答哪个子能吃子、哪个子能将军、有没有一步杀；题目自带的线走完后，由 Stockfish 接着走。“盲走”把一步杀或两步杀的局面亮 3 秒，然后藏起棋子，凭记忆走出杀着。两种都从内置的 Lichess 题库里按你在这个模式的评级出题。",
          },
          {
            title: "棋谱库能存多少局？",
            body: "最多一万局。可以按条件筛选、找出经过某个局面的所有对局，并浏览它们的开局。对局存在应用的数据库里，并在本机数据文件中另存一份镜像。重启后，一万局的棋谱库约 0.2 秒就能列出来。",
          },
        ],
      },
    ],
  },
});

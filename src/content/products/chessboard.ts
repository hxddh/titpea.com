import { defineProduct } from "../schema";

// The demo puzzle: Lichess puzzle GJsTC (lichess.org/training/GJsTC, CC0),
// one of the 40,000 Chessboard ships, row "GJsTC" in src/web/js/lichess/band-0600.js
// (line 18 at hxddh/chessboard v22.0.0, unchanged since v10.0.0; rated 600, themes
// "sacrifice m2"). The FEN is the
// puzzle position (puzzle-db.js decodeRow; Black to move, so the app turns the
// board). Checked with python-chess: no mate in one, Qxf2+ is Black's only mate
// in two, Bxf2 is White's only legal reply, and Rxf2# is the only mate after it.
// (The earlier demo, 6kxUl, left the shipped set with the 8.4 puzzle refresh.)
const puzzle = {
  fen: "5rk1/1p5p/3p2pb/P2P1r2/4pq2/R3B2Q/1P3P2/4RKN1 b - - 4 27",
  line: [
    { from: "f4", to: "f2", san: "Qxf2+" },
    { from: "e3", to: "f2", san: "Bxf2" },
    { from: "f5", to: "f2", san: "Rxf2#" },
  ],
};

export default defineProduct({
  slug: "chessboard",
  line: "games",
  type: "game",
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
        en: "Chessboard after a full-game Stockfish review: the final position, a one-line summary, the win-chance curve with marked mistakes, and the one thing to practise, with a link to its lesson",
        zh: "Chessboard 用 Stockfish 复盘完整局：终局局面、一句总结、标出失着的胜率曲线，以及该练的一件事和它的课程链接",
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
      "A desktop chess app for macOS and Windows, with Stockfish 19 and Maia opponents, lessons, 40,000 puzzles, and a searchable game library.",
    eyebrow: "Desktop chess",
    headline: "Chess you can review.",
    lead: "Play chess on your computer; the Stockfish engine reviews your games and marks your mistakes. Lessons and 40,000 puzzles help you practise.",
    catalog: {
      role: "Stockfish + lessons",
      text: "Learn, solve puzzles, then play the computer or a friend on the same board.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/chessboard",
    },
    installNote:
      "The macOS build is not notarized yet: the first time, click “Open Anyway” in System Settings → Privacy & Security.",
    releaseHighlights: {
      version: "v22.0.0",
      items: [
        "A game review now opens on its first key moment, and “Try again” is on screen without scrolling.",
        "Translated opening names no longer mix in English: a variation without a translated name shows only up to the part that has one.",
        "The blunder warning no longer goes stale: it clears as soon as your opponent replies, you take back your move, or the game ends or restarts.",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "Sync goes online only after you allow it, and sends only your user name; updates are checked only when you ask.",
      stays: "Games, puzzles, lessons and progress stay on this computer.",
    },
    meta: "macOS + Windows · GPLv3 · {version} · Local app",
    visual: {
      kind: "screenshot",
      label: "Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-en.webp",
        alt: "Chessboard in light appearance with the wood board: the rail with Today, Play, Train, Me and Settings, a game at move 17, the full move list from 1. e4 in the side panel, and Offer draw, Resign, Review and More below it",
        width: 2446,
        height: 1536,
      },
      asOf: "v22.0.0",
    },
    showcases: [
      {
        src: "/assets/chessboard-review-en.webp",
        alt: "Chessboard after a Stockfish review of a 17-move game: a one-line summary and the win-chance curve, stepping through six key moments with the moves 1500-rated players choose under the engine line, then the full report with each side's accuracy",
        width: 2446,
        height: 1536,
        asOf: "v22.0.0",
        // Recorded from the app's own review (scripts/record-board-demos.mjs).
        video: { mp4: "/assets/chessboard-review-en.mp4", webm: "/assets/chessboard-review-en.webm" },
        title: "Key moments first.",
        body: "A Stockfish pass gives a one-line summary, the win-chance curve, and key moments you can try again.",
      },
      {
        src: "/assets/chessboard-theme-en.webp",
        alt: "Chessboard in dark appearance with the green board on the final position of the reviewed game",
        width: 2446,
        height: 1536,
        asOf: "v22.0.0",
        title: "Light or dark, three boards to choose.",
        body: "A wood, green or blue board and three piece sets (Merida, Burnett and Classic), all in Settings.",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "Solve one here.",
        body: "Tap a piece, then the square to move it to, or use the arrow keys and Enter.",
        caption: "A position from Chessboard’s built-in Lichess puzzle set (puzzle GJsTC).",
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
        label: "Practice built from your games.",
        items: [
          {
            title: "Hints in two steps",
            body: "The first press circles the piece to move; the second shows the move.",
          },
          {
            title: "What to do next",
            body: "Today shows the one thing to do next; the “Something else” button swaps it.",
          },
          { title: "Your own mistakes", body: "Your mistakes (? and ??) come back after 1, 3, 7 and 21 days." },
          {
            title: "Endgames and classics",
            body: "Play out 90 endgames against full-strength Stockfish, or guess the moves of 40 master games.",
          },
          {
            title: "Your opening book",
            body: "Keep up to 5,000 lines a side, or build it from the built-in openings.",
          },
          {
            title: "Opponents like people",
            body: "The twelve easiest levels use Maia, a neural network that learned from human Lichess games.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Games, puzzles, lessons, and progress stay on this computer, in the app’s storage and its data folder.",
          "Sync goes online only after you allow it in Settings › Data, and sends Lichess or Chess.com only your user name.",
          "A pasted Lichess link fetches that one game by its ID; “Check for updates” asks GitHub only when you press it.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Can I play online?",
            body: "No. Online matchmaking is not included; play the engine or a friend on the same screen. Optional sync, off until you allow the network in Settings › Data, imports your games from Lichess or Chess.com into the library.",
            asOf: "v22.0.0",
          },
          {
            title: "Who plays the other side?",
            body: "A ladder of 21 opponents, each with a name, a portrait, and a rating. The twelve from Gentle (532) to Advanced− (1909) are Maia, neural networks trained on human games from Lichess, so they pick moves the way players at that level do. The other nine are Stockfish 19, strength-limited, and at full strength at the top. Maia runs on this computer from neural networks that ship with the app; if one cannot answer, that level plays its Stockfish settings instead.",
            asOf: "v22.0.0",
          },
          {
            title: "Will my saves from an older version carry over?",
            body: "From 9.0 or later, yes: every version since keeps one save format and reads the saves of the release before it. From 8.x, no: version 9.0 changed the save format and where saves are kept, and it does not read 8.x data or a file saved with 8.x “Export all data”. After upgrading from 8.x, your ratings and records, puzzle and lesson progress, game library, opening book, and review queue start from zero.",
            asOf: "v22.0.0",
          },
          {
            title: "What can I do with a PGN game file?",
            body: "Choose “Review a game” from the ⋯ menu on Today: paste a PGN, open a file, or paste a Lichess game link, and the game opens in the review. “Play on from here” continues from any move. To keep a whole PGN, use “Import to library” or “Paste PGN” on the Me page. Chess.com has no single-game link to fetch, so copy the PGN from its “Share” menu.",
            asOf: "v22.0.0",
          },
          {
            title: "Does it track my progress?",
            body: "Yes. Games against the engine give you a game rating, kept apart from your puzzle rating, and the result bar under the board shows each change. Today shows your streak and one number, “Your level”; the Me page has both ratings with their curves, a practice calendar, and your strengths and weaknesses.",
            asOf: "v22.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "国际象棋 Chessboard",
    description: "面向 macOS 与 Windows 的桌面国际象棋：Stockfish 19 与 Maia 对手、课程、四万道谜题与可搜索的棋谱库。",
    eyebrow: "桌面国际象棋",
    headline: "下完一局，复盘失着",
    lead: "在电脑上下国际象棋，Stockfish 引擎复盘你的对局、标出失着；还有课程和四万道谜题供你练习。",
    catalog: {
      role: "Stockfish 与课程",
      text: "学棋、解谜题，再与电脑或同屏好友下一局。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/chessboard/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/chessboard",
    },
    installNote: "macOS 版尚未公证：第一次打开时，到“系统设置 → 隐私与安全性”点“仍要打开”。",
    releaseHighlights: {
      version: "v22.0.0",
      items: [
        "复盘一打开就是第一处关键时刻，“再试一次”不用滚动就看得到。",
        "开局名不再夹英文：没有译名的变例只显示到有译名的那一段。",
        "失着提醒不再过期：对手应着、你悔棋、开新局或终局时，提醒立刻收起。",
      ],
    },
    privacy: {
      network: "onRequest",
      networkNote: "要先在设置里允许联网才会同步，只发送用户名；“检查更新”只在你点它时查询。",
      stays: "对局、谜题、课程与进度都留在这台电脑上。",
    },
    meta: "macOS + Windows · GPLv3 · {version} · 本地应用",
    visual: {
      kind: "screenshot",
      label: "国际象棋 Chessboard",
      frame: "wide",
      image: {
        src: "/assets/chessboard-game-board-zh.webp",
        alt: "Chessboard 浅色外观、木色棋盘：左侧是今天、下棋、训练、我的与设置，棋盘停在第 17 回合，侧栏列出从 1. e4 起的全部着法，下方是提和、认输、复盘与更多",
        width: 2446,
        height: 1536,
      },
      asOf: "v22.0.0",
    },
    showcases: [
      {
        src: "/assets/chessboard-review-zh.webp",
        alt: "Chessboard 用 Stockfish 复盘完一局 17 回合的棋：一句总结和胜率曲线，逐个翻看六个关键时刻，引擎线下列着 1500 分棋手常走的几步，再展开写着双方精准度的完整报告",
        width: 2446,
        height: 1536,
        asOf: "v22.0.0",
        video: { mp4: "/assets/chessboard-review-zh.mp4", webm: "/assets/chessboard-review-zh.webm" },
        title: "先看关键时刻",
        body: "Stockfish 跑完整局，先给一句总结、胜率曲线和关键时刻，每个都能再试一次。",
      },
      {
        src: "/assets/chessboard-theme-zh.webp",
        alt: "Chessboard 深色外观、绿色棋盘，复盘后的终局局面",
        width: 2446,
        height: 1536,
        asOf: "v22.0.0",
        title: "浅色或深色，三种棋盘可选",
        body: "木、绿、蓝三种棋盘，另有三套棋子（Merida、伯内特、经典），都在设置里。",
      },
    ],
    sections: [
      {
        kind: "demo",
        id: "try",
        title: "在这里解一道",
        body: "先点棋子，再点要走到的格子；也可以用方向键和回车。",
        caption: "取自 Chessboard 内置的 Lichess 题库（谜题 GJsTC）。",
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
        label: "练习从你的对局里来",
        items: [
          { title: "提示分两步", body: "第一下圈出要动的子，第二下给出着法。" },
          { title: "接下来练什么", body: "今天页最上面是接下来最该做的一件事；点“换一件事”换下一件。" },
          { title: "自己的失着", body: "你的失着（? 和 ??）会在 1、3、7、21 天后再出现。" },
          { title: "残局与名局", body: "90 个残局和满强度的 Stockfish 下到出结果；40 局名局可以猜着。" },
          { title: "你的开局书", body: "每方最多 5,000 条线，也可以从内置开局生成。" },
          { title: "像人的对手", body: "最低的十二档用 Maia：一种从 Lichess 真人对局学来的神经网络。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "对局、谜题、课程与进度都留在这台电脑上，存在应用自己的存储和本机数据文件夹里。",
          "要先在“设置 › 数据”里允许联网，才能从 Lichess 或 Chess.com 同步，只发送用户名。",
          "粘贴的 Lichess 链接只按编号取那一局；“检查更新”只在你点它时向 GitHub 查询。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "能在线对战吗？",
            body: "不能，不提供在线匹配。可以与引擎或同屏好友下棋。可选的同步要先在“设置 › 数据”里允许联网，能把你在 Lichess 或 Chess.com 的对局导入棋谱库。",
            asOf: "v22.0.0",
          },
          {
            title: "对面是谁在下？",
            body: "一条 21 档的阶梯，每档有名字、头像和等级分。新手（532）到高级−（1909）这十二档是 Maia：用 Lichess 真人对局训练的神经网络，按这个分段的人会怎么走来选着。其余九档是 Stockfish 19，限制强度，最上面满强度。Maia 在这台电脑上运行，神经网络随应用附带；它答不上来时，这一档改用原来的 Stockfish 设置。",
            asOf: "v22.0.0",
          },
          {
            title: "旧版本的存档能带过来吗？",
            body: "9.0 及以后的可以：此后每一版都沿用同一种存档格式，都读得了上一版的存档。8.x 的不能：9.0 换了存档格式和存储位置，不读 8.x 的档案，也不认 8.x“导出全部数据”存下的文件。从 8.x 升级后，战绩、谜题与课程进度、棋谱库、开局书、复习队列都从零开始。",
            asOf: "v22.0.0",
          },
          {
            title: "PGN 棋谱文件能做什么？",
            body: "在今天页右上角的 ⋯ 里选“复盘一局”：粘贴 PGN、打开文件，或粘贴 Lichess 对局链接，直接进到复盘。任意一手都能“从这里续下”。要把整份 PGN 收进棋谱库，用“我的”页的“导入到库”或“粘贴 PGN”。Chess.com 没有单局接口，要去它的“分享”里复制 PGN。",
            asOf: "v22.0.0",
          },
          {
            title: "能看到自己的进步吗？",
            body: "能。与引擎对局有自己的对局等级分，和谜题等级分分开记，棋盘下沿的结果条显示每次涨跌。今天页有连续练习的天数和一个数：“你的水平”；“我的”页有两个等级分和各自的曲线、练习日历，以及强项与弱项。",
            asOf: "v22.0.0",
          },
        ],
      },
    ],
  },
});

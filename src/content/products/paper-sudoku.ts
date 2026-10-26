import { defineProduct } from "../schema";

// The app's repository is private and it is not on Google Play yet, so there is
// no download link and no `repo` for releases:sync: the version is written in
// the meta line, and the primary action stays an unlinked "coming" label until
// the Play listing exists. Facts: the app's README, CHANGELOG (13.0.0), PRIVACY.md
// and docs/store-listing.md. Pictures: the app's own StoreScreenshotsTest at Play's
// sizes, from the 13.0 captures (English UI only). No `asOf`: check ties it to a
// releases.json entry, which a product without `repo` does not have.
export default defineProduct({
  slug: "paper-sudoku",
  line: "games",
  type: "game",
  runsOn: ["android"],
  purposes: ["games"],
  icon: "/assets/icons/paper-sudoku.webp",
  og: "/assets/og-paper-sudoku.png",
  schema: {
    category: "GameApplication",
    os: "Android",
  },
  sectionIndex: false,
  en: {
    title: "Paper Sudoku",
    description:
      "A Sudoku notebook for Android: one page a day, a practice stack that grows harder as you learn, and a Coach in the margin. No network.",
    eyebrow: "Sudoku notebook for Android",
    headline: "One page a day.",
    lead: "Today’s page on top. A Coach in the margin. No network.",
    catalog: {
      role: "",
      text: "A Sudoku notebook for Android: one page a day, a Coach in the margin.",
    },
    primaryCta: {
      label: "Coming to Google Play",
      href: "/paper-sudoku/",
      soon: true,
    },
    secondaryCta: {
      label: "Privacy policy",
      href: "/paper-sudoku/privacy/",
    },
    privacy: {
      network: "none",
      networkNote: "No INTERNET permission: no ads, accounts, analytics or server.",
      stays: "Games, results and settings in the app’s local database on your phone.",
      policy: {
        label: "Privacy policy",
        href: "/paper-sudoku/privacy/",
      },
    },
    meta: "Android 8.0+ · 13.0 · Phones and tablets · No network permission",
    visual: {
      kind: "screenshot",
      label: "Paper Sudoku",
      frame: "wide",
      image: {
        src: "/assets/paper-sudoku-tablet.webp",
        alt: "Paper Sudoku on a tablet: a 9×9 practice page on the left with printed digits, blue ink and pencil marks; on the right the page title, the line “Tap cells to write 4. Tap 4 again to put it down.”, Undo, Pencil and Coach, and the digit keys with 4 picked up",
        width: 1080,
        height: 608,
      },
      caption: "Drawn by the app’s own screenshot test at Google Play’s tablet size (13.0)",
    },
    showcases: [
      {
        src: "/assets/paper-sudoku-coach.webp",
        alt: "A 6×6 daily page for Wednesday, October 21: the Coach has outlined the top-right box in terracotta, and its note above the tools reads “Hidden single. Look at the top-right box.”",
        width: 1080,
        height: 1920,
        title: "The Coach writes in the margin.",
        body: "Look, then Why, and the answer only if you ask. Its marks stay on the board until you write in the cell it means.",
        caption: "Screenshot test, 13.0",
      },
      {
        src: "/assets/paper-sudoku-notebook.webp",
        alt: "The notebook: Today, the 21st, in progress; a 6×6 page from October 15 to continue; and Practice, “Learning: Naked pair · Known: 4 of 11”, each card with a thumbnail of its page",
        width: 1080,
        height: 1920,
        title: "Every day stays in the notebook.",
        body: "Today’s page is on top: a 6×6 on weekdays, a 9×9 at the weekend. Turn back and every earlier day is there, stamped when it was done.",
        caption: "Screenshot test, 13.0",
      },
      {
        src: "/assets/paper-sudoku-handbook.webp",
        alt: "The handbook’s X-Wing page, 7 of 11: a 9×9 example with two rows and two columns outlined in terracotta, crossed-out candidates, and “Seen” under the board",
        width: 1080,
        height: 1920,
        title: "A handbook that teaches.",
        body: "Every technique with a worked example from a real page, drawn the way the Coach draws it, and how well you know it: seen, practised, known.",
        caption: "Screenshot test, 13.0",
      },
      {
        src: "/assets/paper-sudoku-solved.webp",
        alt: "A solved 6×6 page with a terracotta “Solved” stamp over the grid, and below it “A clean page. Solved in 2:05. A new page tomorrow.” with share and print buttons",
        width: 1080,
        height: 1920,
        title: "A stamp, not a score.",
        body: "A solved page says what you found. No streak. Share a result without the answers, or print a blank copy of any page.",
        caption: "Screenshot test, 13.0",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Printed digits, your ink, pencil notes.",
        items: [
          { title: "A path that knows you", body: "9×9 pages that get harder after three solved unaided." },
          { title: "Pages of your own", body: "Type in a puzzle from a book; it is checked and coached." },
          { title: "Read a page back", body: "Every digit in order, with the technique behind it." },
          { title: "Press and slide", body: "A loupe shows the cell you aim at; lift to write." },
          { title: "Today on your home screen", body: "A widget with today’s page." },
          { title: "A quiet clock", body: "Hidden while you play, and paused when you leave." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "No INTERNET permission, and no ads, accounts, analytics or server; a build check fails if the app asks for more.",
          "Games, results and settings stay in the app’s local database; Android’s own backup may include them, and you can turn it off.",
          "Sharing sends only the text you see in the share sheet; printing uses Android’s print service.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "What does it need?",
            body: "Android 8.0 or later, on a phone, a tablet or a foldable. On a wide screen the notebook and the open page sit side by side. It works offline.",
          },
          {
            title: "Where can I get it?",
            body: "It is not on Google Play yet. A Play build is being prepared; until then the builds are sideload builds for testing outside Play.",
          },
          {
            title: "Will a new build update the one I have?",
            body: "From 9.0, sideload builds can be signed with one fixed key, so later builds update in place. Moving from an earlier build needs one last uninstall.",
          },
          {
            title: "Which languages does it speak?",
            body: "English, Simplified Chinese and Traditional Chinese. On Android 13 and later, the app’s language can be set in its Settings.",
          },
          {
            title: "Does it work with TalkBack and a keyboard?",
            body: "Yes. With TalkBack each cell can be written or erased from the cell itself, and the keys come straight after the board; a hardware keyboard writes digits too.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "纸上数独",
    description: "Android 上的数独本：每天一页，练习本越做越难，卡住时教练在页边提示。不联网。",
    eyebrow: "Android 数独本",
    headline: "每天一页数独",
    lead: "打开就是今天这一页。教练在页边。不联网。",
    catalog: {
      role: "",
      text: "Android 上的数独本：每天一页，卡住时教练在页边提示。",
    },
    primaryCta: {
      label: "即将上架 Google Play",
      href: "/zh/paper-sudoku/",
      soon: true,
    },
    secondaryCta: {
      label: "隐私政策",
      href: "/zh/paper-sudoku/privacy/",
    },
    privacy: {
      network: "none",
      networkNote: "不申请联网权限：没有广告、账号、统计分析，也没有服务器。",
      stays: "对局、成绩和设置存在手机上应用自己的本地数据库里。",
      policy: {
        label: "隐私政策",
        href: "/zh/paper-sudoku/privacy/",
      },
    },
    meta: "Android 8.0+ · 13.0 · 手机与平板 · 不申请联网权限",
    visual: {
      kind: "screenshot",
      label: "纸上数独",
      frame: "wide",
      image: {
        src: "/assets/paper-sudoku-tablet.webp",
        alt: "纸上数独在平板上（英文界面）：左边是一页 9×9 练习，有印刷数字、蓝色笔迹和铅笔标记；右边是页面标题、提示“点格子写 4，再点 4 放下”、撤销、铅笔和教练按钮，以及选中 4 的数字键",
        width: 1080,
        height: 608,
      },
      caption: "由应用自带的截图测试按 Google Play 平板尺寸绘制（13.0，英文界面）",
    },
    showcases: [
      {
        src: "/assets/paper-sudoku-coach.webp",
        alt: "10 月 21 日星期三的 6×6 每日一页（英文界面）：教练用赭红色框出右上宫，工具上方的提示写着“唯余解：看右上宫”",
        width: 1080,
        height: 1920,
        title: "教练在页边写字",
        body: "先说看哪里，再说为什么，你要了才给答案。它的标记留在棋盘上，直到你写下它说的那一格。",
        caption: "截图测试 · 13.0 · 英文界面",
      },
      {
        src: "/assets/paper-sudoku-notebook.webp",
        alt: "数独本首页（英文界面）：今天 21 日，进行中；10 月 15 日的 6×6 待继续；练习卡写着“正在学：显性数对 · 已掌握 11 项中的 4 项”，每张卡片带着这一页的缩略图",
        width: 1080,
        height: 1920,
        title: "每一天都留在本子里",
        body: "最上面是今天这一页：工作日 6×6，周末 9×9。往回翻是过去的每一天，做完的页面盖着印章。",
        caption: "截图测试 · 13.0 · 英文界面",
      },
      {
        src: "/assets/paper-sudoku-handbook.webp",
        alt: "手册里的 X-Wing 一页，第 7 / 11 页（英文界面）：一道 9×9 例题，两行两列用赭红色框出，被划掉的候选数，盘下写着“见过”",
        width: 1080,
        height: 1920,
        title: "一本会教的手册",
        body: "每种技巧配一道真实例题，画法和教练一样，并标出你对它的掌握：见过、练过、掌握。",
        caption: "截图测试 · 13.0 · 英文界面",
      },
      {
        src: "/assets/paper-sudoku-solved.webp",
        alt: "做完的一页 6×6（英文界面）：盘面上盖着赭红色的“已解”印章，下方写着“独立完成，用时 2:05，明天有新的一页”，还有分享和打印按钮",
        width: 1080,
        height: 1920,
        title: "盖印章，不打分",
        body: "做完的一页只写你找到了什么，也没有连续打卡。可以分享不含答案的结果，或把任意一页空白打印出来。",
        caption: "截图测试 · 13.0 · 英文界面",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "印刷数字、你的笔迹和铅笔标记",
        items: [
          { title: "认得你的练习", body: "一叠 9×9 练习页，不看答案连做三页之后就变难一些。" },
          { title: "自己的题", body: "把书报上的题输进来，检查、评级，教练照常帮忙。" },
          { title: "回看一页", body: "按顺序看每个数字，以及当时用的技巧和教练帮过的地方。" },
          { title: "按住滑动", body: "放大镜显示你瞄准的格子，松手就写。" },
          { title: "桌面上的今天", body: "一个显示今天这一页的小组件。" },
          { title: "安静的计时", body: "做题时不显示，离开时自动暂停。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "纸上数独不申请联网权限，没有广告、账号、统计分析，也没有服务器。应用一旦申请别的权限，构建检查就会失败。",
          "对局、成绩和设置存在应用的本地数据库里。Android 自带的备份可能会把它们存进你的 Google 账号，可以在 Android 设置里关闭。",
          "分享只发送分享面板里你看到的文字；打印使用 Android 的打印服务。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "需要什么设备？",
            body: "Android 8.0 或更高版本的手机、平板或折叠屏。宽屏上，数独本和打开的那一页并排显示。离线也能用。",
          },
          {
            title: "在哪里下载？",
            body: "还没有上架 Google Play，上架版本正在准备中；在那之前的版本都是用于 Play 之外测试的侧载版。",
          },
          {
            title: "新版本能直接覆盖安装吗？",
            body: "从 9.0 起，侧载版可以用同一把固定密钥签名，之后的版本能直接覆盖安装。从更早的版本升级，需要最后卸载一次。",
          },
          {
            title: "支持哪些语言？",
            body: "英文、简体中文和繁体中文。Android 13 及以上可以在应用的设置里单独选择语言。",
          },
          {
            title: "能用 TalkBack 和键盘吗？",
            body: "能。开启 TalkBack 时，每一格都可以在格子上直接写入或擦除，数字键紧跟在棋盘之后；实体键盘也可以输入数字。",
          },
        ],
      },
    ],
  },
});

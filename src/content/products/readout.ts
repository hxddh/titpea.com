import { defineProduct } from "../schema";

export default defineProduct({
  slug: "readout",
  line: "agents",
  type: "mac",
  repo: "hxddh/readout",
  featured: {
    order: 3,
    image: {
      src: "/assets/readout-live-en.webp",
      width: 2760,
      height: 1840,
      alt: {
        en: "A plan open in Readout, with the outline on the left, task progress under the title, and unread changes marked in the right margin.",
        zh: "Readout 中打开的计划：左侧是标题目录，标题下方是任务进度，右侧页边是未读改动。",
      },
    },
  },
  icon: "/assets/icons/readout.webp",
  og: "/assets/og-readout.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "Readout",
    description:
      "A native, read-only Markdown reader for macOS, made for what AI agents write: it opens their new documents, follows them live and marks what changed since you last read.",
    eyebrow: "Markdown reader for macOS",
    headline: "Read what agents write.",
    lead: "A Mac reader for the Markdown that coding agents write. It follows the file live, marks what changed, and never edits it.",
    catalog: {
      role: "",
      text: "Read an agent’s Markdown as it changes, with edits marked.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/readout/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/readout",
    },
    installNote: "Not notarized: for each release, click Open Anyway once in System Settings → Privacy & Security.",
    privacy: {
      network: "automatic",
      networkNote: "A weekly update check against GitHub Releases, which you can turn off.",
      stays: "On your Mac: rendering a document sends no network request.",
    },
    meta: "macOS 26+ · MIT · {version} · Quick Look",
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "wide",
      image: {
        src: "/assets/readout-live-en.webp",
        alt: "A plan open in Readout, with the outline on the left, task progress under the title, and unread changes marked in the right margin.",
        width: 2760,
        height: 1840,
      },
      caption: "Readout 5.0 on macOS 26, from its repository’s screenshot gallery.",
      asOf: "v5.0.0",
    },
    showcases: [
      {
        src: "/assets/readout-changed-en.webp",
        width: 2760,
        height: 1840,
        asOf: "v5.0.0",
        alt: "An edited front matter block with “in progress” struck through and “ready to ship” added, under a notice saying what changed since when.",
        title: "Marked until you read it.",
        body: "New and edited blocks get a bar in the margin; on an edited block, the changed words show.",
        caption: "Readout 5.0, from its repository’s screenshot gallery.",
      },
      {
        src: "/assets/readout-history-en.webp",
        width: 2920,
        height: 1960,
        asOf: "v5.0.0",
        alt: "The View menu’s Compare with Earlier Version submenu listing two earlier versions with their times and block differences.",
        title: "Any earlier version.",
        body: "Readout keeps each version it sees for 30 days; compare with one, or open it read-only.",
        caption: "Readout 5.0, from its repository’s screenshot gallery.",
      },
      {
        src: "/assets/readout-unread-en.webp",
        width: 2920,
        height: 1960,
        asOf: "v5.0.0",
        alt: "The Unread Changes menu listing a changed report, a plan with 11 unread changes, and a notes file not looked at yet.",
        title: "Everything waiting, in one place.",
        body: "Unread Changes lists every document with something new; choose one to go to its first change.",
        caption: "Readout 5.0, from its repository’s screenshot gallery.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Built for files agents keep rewriting.",
        items: [
          { title: "Your place holds", body: "Block-by-block updates; at the end, it follows like a terminal." },
          {
            title: "Which words changed",
            body: "N opens an edited block’s changed words; so does its bar.",
          },
          { title: "Width you choose", body: "Drag the column’s edge; double-click it to go back to Standard." },
          {
            title: "Outline with progress",
            body: "Headings with tasks done; a dot marks sections with unread changes.",
          },
          {
            title: "GitHub-flavoured Markdown",
            body: "Tables, alerts, footnotes, highlighted code, KaTeX math and Mermaid.",
          },
          { title: "Opens new documents", body: "New Markdown in an agent folder opens in the background." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Rendering a document sends no network request; remote images show as placeholders naming the host.",
          "A clicked image downloads without cookies, never from your Mac or local network; one more click loads the rest from that host.",
          "The only automatic network access is a weekly update check against GitHub Releases, which you can turn off.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "How do I install it?",
            body: "Download `Readout-x.y.z.dmg` from GitHub Releases, open it and drag Readout to Applications. Readout → Check for Updates… looks for newer releases.",
          },
          {
            title: "Can I open files from the terminal?",
            body: "Agents need no setup: the folders in Settings are enough. For a `readout` command, choose Readout → Install Command Line Tool… (or the step on the welcome window); it shows and copies the command that links the script inside the app: `mkdir -p ~/.local/bin && ln -sf /Applications/Readout.app/Contents/Resources/readout ~/.local/bin/readout`, with `~/.local/bin` on your `PATH`. Then `readout plan.md` opens a file, `readout plan.md#risks` opens it at a section, and `readout ~/.claude/plans` opens the newest Markdown file in a folder. `readout -b plan.md` opens it as a tab behind the one you are reading, without switching apps, and `readout --version` prints the version.",
          },
          {
            title: "Can a Claude Code hook open what it writes?",
            body: "Yes, instead of a watched folder and without the `readout` link. In `~/.claude/settings.json`, add `/Applications/Readout.app/Contents/Resources/readout --hook` as a `PostToolUse` command for `Write|Edit|MultiEdit`. Every Markdown file Claude Code writes or edits then opens in the background. The hook also passes the folder Claude Code works in, so file paths in a plan kept in `~/.claude/plans` link to the files in that project. The same command works as a Cursor hook (`afterFileEdit`) or a Gemini CLI hook (`AfterTool`); the README shows both.",
            asOf: "v3.9.1",
          },
          {
            title: "Which folders does Readout watch?",
            body: "The Agent folders you add in Settings, and Claude Code’s `~/.claude/plans`, which is watched from the start, even before it exists. Using Codex? Add your project folder. A new Markdown document there opens as a tab behind the one you are reading, and your terminal keeps focus. Edits to files that were already there open nothing, and when more than three new documents appear at once, only the newest opens. ⌃⌥⌘R opens the newest one from anywhere; Settings can turn that global shortcut off, and it still works inside Readout.",
            asOf: "v3.9.1",
          },
          {
            title: "Does it work in Quick Look?",
            body: "Yes, once Readout has been opened from Applications: select a Markdown file in Finder and press Space. Quick Look never loads remote images; it shows the placeholders only.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Readout",
    description:
      "为 AI Agent 写的文档打造的 macOS 原生只读 Markdown 阅读器：自动打开 Agent 新建的文档，跟随写入实时更新，标出自你上次阅读以来哪里变了。",
    eyebrow: "macOS Markdown 阅读器",
    headline: "读 Agent 写的文档",
    lead: "Mac 上的 Markdown 阅读器，读编码 Agent 写的文档。实时跟随写入，标出改动，从不修改文件。",
    catalog: {
      role: "",
      text: "边写边读 Agent 的 Markdown，改动处一目了然。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/readout/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/readout",
    },
    installNote: "未经公证：每个新版本首次打开时，到“系统设置 → 隐私与安全性”点“仍要打开”。",
    privacy: {
      network: "automatic",
      networkNote: "每周一次 GitHub Releases 更新检查，可在设置中关闭。",
      stays: "在本机：渲染文档时不发出任何网络请求。",
    },
    meta: "macOS 26+ · MIT · {version} · Quick Look",
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "wide",
      image: {
        src: "/assets/readout-live-zh.webp",
        alt: "中文界面的中文计划，中英混排，包含提示、任务列表和表格。",
        width: 2760,
        height: 1840,
      },
      caption: "Readout 5.0，macOS 26，取自仓库的截图集。",
      asOf: "v5.0.0",
    },
    showcases: [
      {
        src: "/assets/readout-changed-en.webp",
        width: 2760,
        height: 1840,
        asOf: "v5.0.0",
        alt: "被修改的 front matter：in progress 被划掉，改为 ready to ship，上方说明这是与哪个时刻相比的改动。",
        title: "改动标着，读过才消",
        body: "新增和修改的段落在页边有细线；修改过的段落直接标出改了哪几个词。",
        caption: "Readout 5.0 英文界面，取自仓库的截图集。",
      },
      {
        src: "/assets/readout-history-en.webp",
        width: 2920,
        height: 1960,
        asOf: "v5.0.0",
        alt: "“显示”菜单中的“与较早版本比较”子菜单，列出两个较早版本及各自的时间和块差异。",
        title: "和任意历史版本对照",
        body: "看过的每个版本保留 30 天；可以对照，也能只读打开。",
        caption: "Readout 5.0 英文界面，取自仓库的截图集。",
      },
      {
        src: "/assets/readout-unread-en.webp",
        width: 2920,
        height: 1960,
        asOf: "v5.0.0",
        alt: "“未读改动”菜单：一份阅读后有改动的报告、一份有 11 处未读的计划，以及一份尚未查看的笔记。",
        title: "所有待读文档，归到一处",
        body: "“未读改动”列出所有有新内容的文档，选一个就跳到它的第一处改动。",
        caption: "Readout 5.0 英文界面，取自仓库的截图集。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "为 Agent 反复改写的文件而做",
        items: [
          { title: "读到哪停在哪", body: "按段落增量更新；读到末尾时，像终端一样跟着走。" },
          { title: "改了哪些词", body: "按 N 停在修改过的段落，直接显示改动的词；点细线也行。" },
          { title: "栏宽由你定", body: "拖动正文栏的边缘调宽窄，双击恢复标准宽度。" },
          { title: "带进度的大纲", body: "标题旁显示任务完成数，有未读变更的章节标出圆点。" },
          { title: "GitHub 风格 Markdown", body: "表格、提示块、脚注、代码高亮、KaTeX 公式和 Mermaid 图表。" },
          { title: "自动打开新文档", body: "Agent 文件夹里新建的 Markdown 在后台打开，不抢焦点。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "渲染文档时不发出任何网络请求：远程图片只显示为注明来源的占位按钮。",
          "点击后 Readout 才下载图片，不携带 cookie，也不会从本机或局域网下载；同一来源的其余图片可再点一次全部加载。",
          "唯一的自动联网是每周一次的 GitHub Releases 更新检查，可在设置中关闭。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "怎样安装？",
            body: "从 GitHub Releases 下载 `Readout-x.y.z.dmg`，打开后把 Readout 拖进“应用程序”。之后可用“Readout → 检查更新…”查找新版本。",
          },
          {
            title: "能从终端打开文件吗？",
            body: "配合 Agent 使用无需任何配置，设置里的文件夹就够了。如果想要 `readout` 命令，选“Readout → 安装命令行工具…”（欢迎窗口里也有这一步），它会显示并拷贝链接命令，`~/.local/bin` 需要在 `PATH` 中。先建目录：`mkdir -p ~/.local/bin`。再链接：`ln -sf /Applications/Readout.app/Contents/Resources/readout ~/.local/bin/readout`。之后 `readout plan.md` 打开文件，`readout plan.md#风险` 打开并跳到对应章节。`readout ~/.claude/plans` 打开文件夹中最新的 Markdown 文件；`readout -b plan.md` 在后台打开，作为标签页排在正在阅读的文档之后，不切换应用。`readout --version` 显示版本号。",
          },
          {
            title: "能用 Claude Code hook 打开它写的文件吗？",
            body: "能，可以代替文件夹监视，也不需要链接 `readout`。在 `~/.claude/settings.json` 里添加 `PostToolUse` hook，matcher 设为 `Write|Edit|MultiEdit`。命令填 `/Applications/Readout.app/Contents/Resources/readout --hook`。之后 Claude Code 写入或修改的每个 Markdown 文件都会在后台打开。hook 还会传入 Claude Code 的工作目录，因此保存在 `~/.claude/plans` 中的计划里的文件路径会链接到该项目中的文件。同一条命令也可以作为 Cursor hook（`afterFileEdit`）或 Gemini CLI hook（`AfterTool`）使用，README 里有两者的写法。",
            asOf: "v3.9.1",
          },
          {
            title: "Readout 会监视哪些文件夹？",
            body: "在设置里添加的“Agent 文件夹”，以及 Claude Code 的 `~/.claude/plans`：它从一开始就被监视，即使还不存在。用 Codex 的话，在设置里添加项目文件夹即可。Agent 在这里新建的 Markdown 文档会作为标签页排在正在阅读的文档之后打开，终端保持焦点。修改已有文件不会打开任何文档；同时出现超过三个新文档时，只打开最新的一个。在任何地方按 ⌃⌥⌘R 可打开最新的一个；全局快捷键可以在设置里关闭，在 Readout 里仍然可用。",
            asOf: "v3.9.1",
          },
          {
            title: "支持 Quick Look 吗？",
            body: "支持，但需先从“应用程序”文件夹打开过一次 Readout。之后在访达中选中 Markdown 文件，按空格即可预览。Quick Look 从不加载远程图片，只显示注明来源的占位框。",
          },
        ],
      },
    ],
  },
});

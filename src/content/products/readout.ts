import { defineProduct } from "../schema";

export default defineProduct({
  slug: "readout",
  line: "agents",
  repo: "hxddh/readout",
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
    lead: "Follows the file live. Marks what changed. Read-only.",
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
    meta: "macOS 26+ · MIT · {version} · Quick Look",
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "wide",
      image: {
        src: "/assets/readout-window.webp",
        alt: "A Readout window: an agent’s plan with its outline and task counts in the sidebar, and unread changes marked in the margin.",
        width: 1024,
        height: 674,
      },
      caption: "Readout on macOS, from its repository.",
    },
    showcases: [
      {
        src: "/assets/readout-dark-en.webp",
        width: 900,
        height: 665,
        alt: "Readout’s reading view in dark mode: an architecture plan from rexleimo/aios with a heading, its Date, Status and Scope lines one under another, short paragraphs and a bulleted list with inline code paths.",
        title: "Dark when your Mac is.",
        body: "The page follows the system appearance, Mermaid diagrams included.",
        caption: "Rendered in WebKit by Readout’s test suite; the window around it is not shown.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Read as the agent writes.",
        items: [
          { title: "Follows the file", body: "Updates land block by block; the paragraph you are reading stays put." },
          { title: "Marks what changed", body: "New and edited blocks get a bar; click it for the words." },
          { title: "Remembers what you read", body: "Marks fade once read, and survive a relaunch." },
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
            title: "Why does macOS refuse to open it the first time?",
            body: "Builds are ad-hoc signed and not notarized. Open System Settings → Privacy & Security, find the message about Readout and click Open Anyway. You do this once for each release.",
          },
          {
            title: "Can I open files from the terminal?",
            body: "Agents need no setup: the folders in Settings are enough. For a `readout` command, link the script inside the app with `mkdir -p ~/.local/bin && ln -sf /Applications/Readout.app/Contents/Resources/readout ~/.local/bin/readout`, with `~/.local/bin` on your `PATH`. Then `readout plan.md` opens a file, `readout plan.md#risks` opens it at a section, and `readout ~/.claude/plans` opens the newest Markdown file in a folder. `readout -b plan.md` opens it as a tab behind the one you are reading, without switching apps, and `readout --version` prints the version.",
          },
          {
            title: "Can a Claude Code hook open what it writes?",
            body: "Yes, instead of a watched folder and without the `readout` link. In `~/.claude/settings.json`, add `/Applications/Readout.app/Contents/Resources/readout --hook` as a `PostToolUse` command for `Write|Edit|MultiEdit`. Every Markdown file Claude Code writes or edits then opens in the background. The hook also passes the folder Claude Code works in, so file paths in a plan kept in `~/.claude/plans` link to the files in that project.",
          },
          {
            title: "Which folders does Readout watch?",
            body: "The Agent folders you add in Settings, and Claude Code’s `~/.claude/plans`, which is watched from the start, even before it exists. Using Codex? Add your project folder. A new Markdown document there opens as a tab behind the one you are reading, and your terminal keeps focus. Edits to files that were already there open nothing, and when more than three new documents appear at once, only the newest opens. ⌃⌥⌘R opens the newest one from anywhere; the shortcut can be changed or turned off in Settings.",
          },
          {
            title: "Does it work in Quick Look?",
            body: "Yes, once Readout has been opened from Applications: select a Markdown file in Finder and press Space. Quick Look never loads remote images; it shows the placeholders only.",
          },
          {
            title: "Can code references open in my editor?",
            body: "Yes. References such as `src/app.ts:42`, `src/app.ts#L42` or `src/app.ts#L42-L50` open at that line in the editor chosen in Settings: the default app, Visual Studio Code, Cursor, Zed, Xcode or Sublime Text. ⌘E opens the document itself there, at the line you are reading.",
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
    lead: "实时跟随写入。标出改动。始终只读。",
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
    meta: "macOS 26+ · MIT · {version} · Quick Look",
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "wide",
      image: {
        src: "/assets/readout-window.webp",
        alt: "Readout 窗口：一份 Agent 写的计划，侧栏是大纲和各节任务进度，页边标出未读的改动。",
        width: 1024,
        height: 674,
      },
      caption: "macOS 上的 Readout，图片来自它的仓库。",
    },
    showcases: [
      {
        src: "/assets/readout-dark-zh.webp",
        width: 900,
        height: 632,
        alt: "深色模式下 Readout 的阅读视图：一份中文功能设计文档（来自 zhukunpenglinyutong/jetbrains-cc-gui），有标题、段落、编号列表和项目符号列表。",
        title: "Mac 用深色，它也用深色",
        body: "页面跟随系统外观切换，Mermaid 图表也一样。",
        caption: "由 Readout 的测试在 WebKit 中渲染，未包含窗口外框。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "Agent 边写，你边读",
        items: [
          { title: "跟随写入", body: "按段落增量更新，你正在读的段落不会跳动。" },
          { title: "标出变更", body: "新增和修改的段落旁有一条细线，点开看改了哪些词。" },
          { title: "记得读过哪里", body: "读过后标记自动消退，重启后仍然保留。" },
          { title: "带进度的大纲", body: "标题旁显示任务完成数，有未读变更的章节标出圆点。" },
          { title: "完整 GFM", body: "表格、提示块、脚注、代码高亮、KaTeX 公式和 Mermaid 图表。" },
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
            title: "为什么首次打开被 macOS 拦下？",
            body: "构建是 ad-hoc 签名、未经公证。打开“系统设置 → 隐私与安全性”，找到关于 Readout 的提示，点击“仍要打开”。每个新版本需要这样做一次。",
          },
          {
            title: "能从终端打开文件吗？",
            body: "配合 Agent 使用无需任何配置，设置里的文件夹就够了。如果想要 `readout` 命令，可以把 App 里自带的脚本链接出来，`~/.local/bin` 需要在 `PATH` 中。先建目录：`mkdir -p ~/.local/bin`。再链接：`ln -sf /Applications/Readout.app/Contents/Resources/readout ~/.local/bin/readout`。之后 `readout plan.md` 打开文件，`readout plan.md#风险` 打开并跳到对应章节。`readout ~/.claude/plans` 打开文件夹中最新的 Markdown 文件；`readout -b plan.md` 在后台打开，作为标签页排在正在阅读的文档之后，不切换应用。`readout --version` 显示版本号。",
          },
          {
            title: "能用 Claude Code hook 打开它写的文件吗？",
            body: "能，可以代替文件夹监视，也不需要链接 `readout`。在 `~/.claude/settings.json` 里添加 `PostToolUse` hook，matcher 设为 `Write|Edit|MultiEdit`。命令填 `/Applications/Readout.app/Contents/Resources/readout --hook`。之后 Claude Code 写入或修改的每个 Markdown 文件都会在后台打开。hook 还会传入 Claude Code 的工作目录，因此保存在 `~/.claude/plans` 中的计划里的文件路径会链接到该项目中的文件。",
          },
          {
            title: "Readout 会监视哪些文件夹？",
            body: "在设置里添加的“Agent 文件夹”，以及 Claude Code 的 `~/.claude/plans`：它从一开始就被监视，即使还不存在。用 Codex 的话，在设置里添加项目文件夹即可。Agent 在这里新建的 Markdown 文档会作为标签页排在正在阅读的文档之后打开，终端保持焦点。修改已有文件不会打开任何文档；同时出现超过三个新文档时，只打开最新的一个。在任何地方按 ⌃⌥⌘R 可打开最新的一个，这个全局快捷键可以在设置里更换或关闭。",
          },
          {
            title: "支持 Quick Look 吗？",
            body: "支持，但需先从“应用程序”文件夹打开过一次 Readout。之后在访达中选中 Markdown 文件，按空格即可预览。Quick Look 从不加载远程图片，只显示注明来源的占位框。",
          },
          {
            title: "代码引用能在编辑器中打开吗？",
            body: "能。`src/app.ts:42`、`src/app.ts#L42` 或 `src/app.ts#L42-L50` 这样的引用，会在设置里选定的编辑器中打开并定位到该行。可选默认应用、Visual Studio Code、Cursor、Zed、Xcode 或 Sublime Text。按 ⌘E 则在这个编辑器中打开当前文档，定位到正在阅读的行。",
          },
        ],
      },
    ],
  },
});

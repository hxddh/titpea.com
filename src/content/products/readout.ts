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
      "A native, read-only Markdown reader for macOS, made for what AI agents write: it follows the file live and marks what changed since you last read it.",
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
    commands: {
      title: "Get started",
      sub: "First choose Readout → Install Command Line Tool… to get `readout`.",
      items: [
        { comment: "Open a file and bring Readout forward", command: "readout plan.md" },
        { comment: "Open a file without switching apps", command: "readout -b plan.md" },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "narrow",
      image: {
        src: "/assets/readout-plan-en.webp",
        alt: "Readout’s reading view at the top of an implementation plan written for coding agents (from obra/superpowers): the title, a quoted note for agentic workers, then Goal, Architecture, Tech Stack and Design spec paragraphs with inline code.",
        width: 900,
        height: 690,
      },
      caption: "Readout’s reading view, rendered in WebKit by its own test suite; the window around it is not shown.",
    },
    showcases: [
      {
        src: "/assets/readout-dark-en.webp",
        width: 900,
        height: 665,
        alt: "Readout’s reading view in dark mode: an architecture plan from rexleimo/aios with a heading, short paragraphs and bulleted lists with inline code paths.",
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
          { title: "Outline with progress", body: "Headings in the sidebar, with tasks done in each section." },
          {
            title: "GitHub-flavoured Markdown",
            body: "Tables, alerts, footnotes, highlighted code, KaTeX math and Mermaid.",
          },
          { title: "Newest file, one key", body: "⌥⌘R opens the latest Markdown in your agents’ folders." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Rendering a document sends no network request; remote images show as placeholders naming the host.",
          "A clicked image downloads without cookies, and never from your own Mac or local network.",
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
            body: "Builds are ad-hoc signed and not notarized. Open System Settings → Privacy & Security, find the message about Readout and click Open Anyway.",
          },
          {
            title: "How do I have Claude Code open files in Readout?",
            body: "Install the command line tool, then add a `PostToolUse` hook to `~/.claude/settings.json` with the matcher `Write|Edit|MultiEdit` and the command `readout --hook`. The hook opens the written file in the background, and only when it is Markdown.",
          },
          {
            title: "Which folders does ⌥⌘R look in?",
            body: "The Agent folders you add in Settings; Claude Code’s `~/.claude/plans` is added on first launch when it exists. The global shortcut can be changed or turned off there.",
          },
          {
            title: "Does it work in Quick Look?",
            body: "Yes. Select a Markdown file in Finder and press Space. Quick Look never loads remote images; it shows the placeholders only.",
          },
          {
            title: "Can code references open in my editor?",
            body: "Yes. A reference like `src/app/main.swift:42` opens in the editor chosen in Settings: the default app, Visual Studio Code, Cursor, Zed, Xcode or Sublime Text.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Readout",
    description:
      "为 AI Agent 写的文档打造的 macOS 原生只读 Markdown 阅读器：跟随文件实时更新，标出自你上次阅读以来哪里变了。",
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
    commands: {
      title: "开始使用",
      sub: "先选择 Readout → 安装命令行工具…，即可使用 `readout`。",
      items: [
        { comment: "打开文件并切换到 Readout", command: "readout plan.md" },
        { comment: "打开文件但不切换应用", command: "readout -b plan.md" },
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Readout",
      frame: "narrow",
      image: {
        src: "/assets/readout-plan-zh.webp",
        alt: "Readout 的阅读视图，显示一份中英混排的 Agent 实现计划（来自 zkywsg/Daily-LLM）。可以看到标题、引用说明、Goal 等段落、任务复选框和代码块。",
        width: 900,
        height: 800,
      },
      caption: "Readout 的阅读视图，由它自己的测试在 WebKit 中渲染，未包含窗口外框。",
    },
    showcases: [
      {
        src: "/assets/readout-dark-zh.webp",
        width: 900,
        height: 660,
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
          { title: "带进度的大纲", body: "侧边栏列出标题，以及每节任务的完成数。" },
          { title: "完整 GFM", body: "表格、提示块、脚注、代码高亮、KaTeX 公式和 Mermaid 图表。" },
          { title: "一键打开最新文件", body: "按 ⌥⌘R 打开 Agent 文件夹里最新的 Markdown。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "渲染文档时不发出任何网络请求：远程图片只显示为注明来源的占位按钮。",
          "点击后 Readout 才下载图片，不携带 cookie，也不会从本机或局域网下载。",
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
            body: "构建是 ad-hoc 签名、未经公证。打开“系统设置 → 隐私与安全性”，找到关于 Readout 的提示，点击“仍要打开”。",
          },
          {
            title: "怎样让 Claude Code 写完就在 Readout 中打开？",
            body: "先安装命令行工具，再在 `~/.claude/settings.json` 中加入 `PostToolUse` hook。matcher 设为 `Write|Edit|MultiEdit`，命令为 `readout --hook`。只有写入的是 Markdown 文件时，它才在后台打开。",
          },
          {
            title: "⌥⌘R 会在哪些文件夹里找？",
            body: "在设置里添加的“Agent 文件夹”；首次启动时，如果 Claude Code 的 `~/.claude/plans` 存在，会自动加入。全局快捷键也可以在那里更换或关闭。",
          },
          {
            title: "支持 Quick Look 吗？",
            body: "支持。在访达中选中 Markdown 文件，按空格即可预览。Quick Look 从不加载远程图片，只显示占位按钮。",
          },
          {
            title: "代码引用能在编辑器中打开吗？",
            body: "能。`src/app/main.swift:42` 这样的引用会在设置里选定的编辑器中打开。可选默认应用、Visual Studio Code、Cursor、Zed、Xcode 或 Sublime Text。",
          },
        ],
      },
    ],
  },
});

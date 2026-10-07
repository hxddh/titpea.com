import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pulse",
  line: "agents",
  repo: "hxddh/Pulse",
  icon: "/assets/icons/pulse.webp",
  og: "/assets/og-pulse.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: false,
  en: {
    title: "Pulse",
    description:
      "Check local coding-agent sessions in the macOS menu bar: red when one is blocked, a quiet count when it is your turn. Seven agents, through their own hooks.",
    eyebrow: "Menu-bar status for coding agents",
    headline: "Which agent needs you.",
    lead: "Red means blocked. Your turn stays quiet. Every lamp says why.",
    catalog: {
      role: "",
      text: "The menu-bar lamp for coding agents that need you.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/Pulse/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/Pulse",
    },
    meta: "macOS 14+ · MIT · {version} · Menu bar",
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "Illustrative session list",
      glanceTitle: "1 · 4m",
      headerStatus: "1 needs you · 1 running · 1 your turn",
      sections: [
        {
          // One list in lamp order, no group headings; only waiting, stalled and
          // running rows have a second line (Pulse 29 tray).
          rows: [
            {
              title: "Add a package · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4m",
            },
            {
              title: "Fix the flaky test · Claude",
              meta: "Bash · swift test · 12m ago",
              state: "running",
              chip: "14m",
            },
            {
              title: "Review failing CI · Codex",
              state: "recent",
              chip: "Your turn",
            },
            {
              title: "Terminal session running · Pi",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook events · processes", "Click a row to go · › for details"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Know which session needs you.",
        items: [
          { title: "Red means blocked", body: "A permission or question waits; its banner leaves once answered." },
          { title: "Your turn, quietly", body: "Finished turns are counted in the header; no banner, no sound." },
          { title: "Last step, turn time", body: "Running rows show the latest tool step and the turn's length." },
          { title: "Orange means stalled", body: "Twenty minutes without news; the row names the last step." },
          { title: "Seven agents, own hooks", body: "Five turn red; Codex and Cursor show running and your turn." },
          { title: "Click to go", body: "Its terminal when known, else the app; › shows details." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "State comes only from each agent's own hooks; Pulse reads no session files, transcripts or protected app data.",
          "The event log, readable only by you, keeps prompts cut to 200 characters with credentials redacted, on this Mac.",
          "Pulse makes no network connection: no update check, nothing reported. Releases… in Settings only opens the releases page in your browser.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "Five: Claude Code, Gemini CLI, Copilot CLI, OpenCode and Pi, through the hook, plugin or extension each vendor documents. Codex and Cursor show running and your turn only, and say they do not report waiting. A session that started before Pulse shows as process only until its next step.",
          },
          {
            title: "What does installing the hooks change?",
            body: "Install them from the setup card on first open or with Install all in Settings → Hooks; for Codex, Pulse writes only `~/.codex/hooks.json`, then you run `/hooks` in Codex to trust it. Only observe-only events are added, and removing them restores each file byte for byte; a file changed since then loses only Pulse's entries.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → Hooks. Each agent on this Mac has a row: whether its hook is installed (or why it failed) and how long ago its last event arrived; Install all and Remove all sit above the rows. Copy report gives the same as plain text, without paths, prompts, sessions or projects.",
          },
          {
            title: "Does Ignore answer the agent?",
            body: "No. Ignore on the banner, like ⌘D in the tray, only stops Pulse reminding you of that wait and withdraws its banner. The prompt still waits in the agent's own window, and Pulse stays in the background.",
          },
          {
            title: "Why does macOS block the first open?",
            body: "Current builds are ad-hoc signed and not notarized. Click Open Anyway in System Settings → Privacy & Security, or clear quarantine with `xattr -dr com.apple.quarantine /Applications/Pulse.app`. Since macOS 15, Control-click Open no longer lets it through.",
          },
          {
            title: "How do I remove Pulse?",
            body: "In Settings → Hooks, Remove all puts every agent's files back byte for byte. Then choose Quit Pulse from the menu-bar icon's right-click menu, drag Pulse.app to the Trash, and delete `~/Library/Application Support/Pulse`. If you turned on Open at login, also remove Pulse in System Settings → General → Login Items.",
          },
          {
            title: "Is there a keyboard shortcut?",
            body: "Pulse has no global shortcut of its own. Open Pulse again from Spotlight, Raycast or the Finder and the tray opens with the oldest wait selected; ↩ takes you to its prompt. For a key, give Pulse a shortcut in your launcher.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Pulse",
    description:
      "本机编码 Agent 会话的 macOS 菜单栏状态灯：阻塞时亮红灯，轮到你时只安静计数。支持七个 Agent，走它们自己的 hook。",
    eyebrow: "编码 Agent 的菜单栏状态灯",
    headline: "看看哪个 Agent 需要你",
    lead: "红灯只给阻塞。轮到你只安静计数。每盏灯都说出原因。",
    catalog: {
      role: "",
      text: "菜单栏上看哪个编码 Agent 需要你。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/Pulse/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/Pulse",
    },
    meta: "macOS 14+ · MIT · {version} · 菜单栏",
    visual: {
      kind: "menuBar",
      label: "Pulse",
      menubarLabel: "会话列表示意",
      glanceTitle: "1·4分钟",
      headerStatus: "1 需要你 · 1 运行中 · 1 轮到你",
      sections: [
        {
          rows: [
            {
              title: "添加依赖 · Claude",
              meta: "Bash: npm install",
              state: "waiting",
              chip: "4分钟",
            },
            {
              title: "修好不稳定的测试 · Claude",
              meta: "Bash · swift test · 12分钟前",
              state: "running",
              chip: "14分钟",
            },
            {
              title: "查看失败的 CI · Codex",
              state: "recent",
              chip: "轮到你",
            },
            {
              title: "终端会话正在运行 · Pi",
              state: "process",
            },
          ],
        },
      ],
      footnotes: ["hook 事件 · 进程", "点一行前往 · 点“›”看详情"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "哪个会话需要你，一眼可见",
        items: [
          { title: "红灯只给阻塞", body: "授权或提问在等你；回答后横幅自动撤回。" },
          { title: "轮到你不报警", body: "做完的回合只在头部计数，不弹通知、不响。" },
          { title: "上一步与本回合", body: "运行中的行写出最近一步工具，和这一回合跑了多久。" },
          { title: "橙色表示停滞", body: "二十分钟没有新动静，行上点名上一步。" },
          { title: "七个 Agent", body: "五个会亮红；Codex 与 Cursor 只报运行和轮到你。" },
          { title: "点一下就去", body: "能精确落点就去终端，否则打开应用；点“›”看详情。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "状态只来自各 Agent 自己的 hook；Pulse 不读取会话文件、transcript 或受 macOS 保护的应用数据。",
          "事件日志里的提示至多 200 字、凭据已抹掉，文件只有你能读，只在本机。",
          "Pulse 不连网络：不检查更新，不上报任何东西。设置里的“版本发布…”只在浏览器里打开发布页。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "五个：Claude Code、Gemini CLI、Copilot CLI、OpenCode 和 Pi，走各家文档里的 hook、插件或扩展。Codex 与 Cursor 只显示运行中和轮到你，并注明不会报告它在等你。Pulse 启动前就在跑的会话，在它的下一步之前只显示为“仅进程”。",
          },
          {
            title: "安装 hook 会改动什么？",
            body: "首次打开时在托盘的设置卡里连接，或在“设置 → Hooks”点“全部安装”；Codex 只写入 `~/.codex/hooks.json`，之后在 Codex 里运行 `/hooks` 信任 Pulse。只装观察型事件，移除时逐字节还原每个文件；之后改过的文件只删掉 Pulse 的条目。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开“设置 → Hooks”。这台 Mac 上的每个 Agent 一行：hook 装没装（装失败会写原因）、最近一次事件是多久前；列表上方是“全部安装”和“全部移除”。“复制报告”给出同样内容的纯文本，不含路径、提示、会话或项目。",
          },
          {
            title: "横幅上的“忽略”会替我回答吗？",
            body: "不会。横幅上的“忽略”和托盘里的 ⌘D 一样，只让 Pulse 不再提醒这个等待，并撤回横幅。提示仍在 Agent 自己的窗口里等着，Pulse 也不会跳到前台。",
          },
          {
            title: "为什么首次打开被 macOS 拦下？",
            body: "当前构建是 ad-hoc 签名、未公证。在“系统设置 → 隐私与安全性”里点“仍要打开”，或用 `xattr -dr com.apple.quarantine /Applications/Pulse.app` 清掉隔离属性。macOS 15 起，右键选“打开”已不能放行。",
          },
          {
            title: "怎样卸载 Pulse？",
            body: "在“设置 → Hooks”点“全部移除”，逐字节还原每个 Agent 的配置。然后右键菜单栏图标选“退出 Pulse”，把 Pulse.app 拖进废纸篓，再删除 `~/Library/Application Support/Pulse`。开过“登录时打开”的话，也在“系统设置 → 通用 → 登录项”里移除 Pulse。",
          },
          {
            title: "有快捷键吗？",
            body: "Pulse 没有自己的全局快捷键。在 Spotlight、Raycast 或访达里再打开 Pulse，托盘就会打开并选中最久的等待，按 ↩ 就到提示。想要按键，就在启动器里给 Pulse 设一个快捷方式。",
          },
        ],
      },
    ],
  },
});

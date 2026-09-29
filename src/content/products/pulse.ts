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
      "Check local coding-agent sessions in the macOS menu bar: red when one is blocked, a quiet count when it is your turn. Support varies by agent.",
    eyebrow: "Waiting lamp for agent sessions",
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
      headerStatus: "Needs you · 1 · Your turn · 1",
      headerAgents: "Claude · Codex",
      sections: [
        {
          title: "Needs you · 1",
          rows: [
            {
              title: "Approve package install",
              meta: "Red: Claude's hook reported permission, 4m ago",
              state: "waiting",
              chip: "4m",
            },
          ],
        },
        {
          title: "Your turn · 1",
          rows: [
            {
              title: "Review failing CI",
              meta: "~/code/titpea · Codex · turn ended 1m ago",
              state: "recent",
              chip: "Your turn",
            },
          ],
        },
        {
          title: "Running · 1",
          rows: [
            {
              title: "Draft release notes",
              meta: "~/code/pulse · 2m ago",
              state: "running",
            },
          ],
        },
      ],
      footnotes: ["local probe · harvest · hooks", "a row focuses its tab, workspace, or app when known"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Know which session needs you.",
        items: [
          { title: "Red means blocked", body: "A permission request or a question is waiting." },
          { title: "Your turn, quietly", body: "Finished turns are counted in the header; no banner, no sound." },
          { title: "Every lamp says why", body: "Which signal, what kind, and how long ago." },
          { title: "Support varies by agent", body: "32 agents; some have no waiting signal." },
          { title: "Back to the session", body: "Focus its tab, workspace, or app when known." },
          { title: "No blind approve", body: "Allow appears only beside the full request." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Session detection, collection, and hooks run on this Mac; hook history never leaves it.",
          "Update checks read the public GitHub releases with an anonymous request.",
          "With a Respond key file, remote verdicts travel only through your own sync tool.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Which agents show waiting?",
            body: "It depends on the agent. Claude Code turns red from its hooks, or from its own `claude agents --json` report when hooks are not installed. Codex waits come from its session data, and its hooks add Your turn once you trust them with `/hooks` in Codex. Your turn comes only from Claude Code and Codex hooks. Some agents, such as Aider and Continue, have no waiting signal and show Running. Install or reinstall hooks in Settings → Waiting signals.",
          },
          {
            title: "Why is an agent not turning red?",
            body: "Open Settings → About → Run self-check. It runs only when you click, reads without changing anything, and says which signal is verified, unconfirmed, or needs action on this Mac.",
          },
          {
            title: "Can I answer a request from Pulse?",
            body: "Only after you opt in to Respond with a key file. The row and banner offer Deny; there is no rules engine, always-allow, or auto-approve, and every failure falls back to the agent's own prompt.",
          },
          {
            title: "Why does macOS block the first open?",
            body: "Current builds are ad-hoc signed, so the first open may need Open from the context menu, or clearing quarantine with xattr.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Pulse",
    description: "本机编码 Agent 会话的 macOS 菜单栏状态灯：阻塞时亮红灯，轮到你时只安静计数。支持程度因 Agent 而异。",
    eyebrow: "编码 Agent 的状态灯",
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
      glanceTitle: "1 · 4m",
      headerStatus: "需要你 · 1 · 轮到你 · 1",
      headerAgents: "Claude · Codex",
      sections: [
        {
          title: "需要你 · 1",
          rows: [
            {
              title: "批准安装依赖",
              meta: "红灯：Claude 的 hook 报告了「权限」· 4 分钟前",
              state: "waiting",
              chip: "4m",
            },
          ],
        },
        {
          title: "轮到你 · 1",
          rows: [
            {
              title: "查看失败的 CI",
              meta: "~/code/titpea · Codex · 1 分钟前回合结束",
              state: "recent",
              chip: "轮到你",
            },
          ],
        },
        {
          title: "运行中 · 1",
          rows: [
            {
              title: "起草 Release 说明",
              meta: "~/code/pulse · 2 分钟前",
              state: "running",
            },
          ],
        },
      ],
      footnotes: ["本地探测 · 采集 · hooks", "有句柄时聚焦对应标签页、工作区或应用"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "哪个会话需要你，一眼可见",
        items: [
          { title: "红灯只给阻塞", body: "授权请求或提问正在等你。" },
          { title: "轮到你不报警", body: "做完的回合只在头部计数，不弹通知、不响。" },
          { title: "每盏灯说原因", body: "哪个信号、哪一类、多久之前。" },
          { title: "支持因 Agent 而异", body: "共 32 个 Agent，部分没有等待信号。" },
          { title: "回到原会话", body: "有可靠句柄时聚焦标签页、工作区或应用。" },
          { title: "不盲目批准", body: "「同意」只出现在完整请求旁。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "会话探测、采集和 hooks 都在本机进行，hook 事件记录不出这台 Mac。",
          "更新检查以匿名请求读取公开的 GitHub Release。",
          "配置 Respond 密钥文件后，远端判决只经你自己的同步工具送回。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "哪些 Agent 能显示等待？",
            body: "取决于 Agent 本身。Claude Code 靠 hooks 亮红灯；没装 hooks 时，靠它自己的 `claude agents --json` 报告。Codex 的等待来自会话数据；在 Codex 里用 `/hooks` 信任一次后，它的 hooks 会补上「轮到你」。「轮到你」只来自 Claude Code 与 Codex 的 hooks。Aider、Continue 等部分 Agent 没有等待信号，只显示运行中。在「偏好设置 → 等待信号」安装或重新安装 hooks。",
          },
          {
            title: "Agent 为什么没亮红灯？",
            body: "打开「偏好设置 → 关于 → 运行自检」。自检只在点击时运行、只读，逐条说明这台 Mac 上哪条信号已验证、未证实或需处理。",
          },
          {
            title: "能在 Pulse 里回应请求吗？",
            body: "只有放置密钥文件、启用 Respond 之后才能。行与横幅只给「拒绝」；没有规则引擎、总是允许或自动批准，任何失败都回落到 Agent 自己的提示。",
          },
          {
            title: "为什么首次打开被 macOS 拦下？",
            body: "当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
          },
        ],
      },
    ],
  },
});

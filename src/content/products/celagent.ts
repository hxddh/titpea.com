import { defineProduct } from "../schema";

export default defineProduct({
  slug: "celagent",
  line: "agents",
  type: "pi",
  repo: "hxddh/celagent",
  icon: "/assets/icons/celagent.webp",
  og: "/assets/og-celagent.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "celagent",
    description:
      "Pi, the open-source terminal coding agent, with sessions saved to Baidu Object Storage (BOS) and restored by ID on another configured machine.",
    eyebrow: "Built on Pi, the open-source terminal coding agent",
    headline: "Resume on another device.",
    lead: "Pi sessions, saved to Baidu Object Storage (BOS). Resume on another configured machine.",
    catalog: {
      role: "Session recovery",
      text: "Park the Pi session on BOS, resume it on another machine.",
    },
    primaryCta: {
      label: "Install",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/celagent",
    },
    privacy: {
      network: "automatic",
      networkNote: "Each prompt goes to the model you configure; each completed turn is written to your BOS bucket.",
      stays:
        "Sessions in your own BOS bucket, cached by local Celld nodes; storage keys from your environment or ~/.aws/credentials.",
    },
    meta: "Pi Coding Agent TUI · Baidu BOS · MIT · {version}",
    commands: {
      title: "Get started",
      sub: "The installer fetches the GitHub Release binary with the celld runtime.",
      items: [
        {
          comment: "Install",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "Check configuration, credentials, and BOS access",
          command: "celagent doctor",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · BOS session",
      status: "command reference",
      command: "celagent",
      filesLabel: "COMMANDS",
      files: ["celagent", "celagent list", "celagent <id>  # restore from BOS", "celagent task ledger"],
      briefLabel: "persistence",
      brief: "Completed turns → BOS write queue → restore by session ID after a successful write",
      footnotes: ["Configure both machines", "Conditional writes detect conflicts"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "The full Pi session, not a summary.",
        items: [
          { title: "Pi, unchanged", body: "Its terminal interface, engine, and tools; history stays native JSONL." },
          { title: "Saved per turn", body: "Completed turns queue for BOS; conditional writes catch conflicts." },
          { title: "BOS first", body: "Failed writes stay queued; no silent fallback to a truncated cache." },
          { title: "Configure storage", body: "Set up BOS, then run `celagent doctor` and `celagent cas-probe`." },
          { title: "Wait for the write", body: "Recovery needs a successful BOS write." },
          { title: "Resume by ID", body: "`celagent list`, then `celagent <id>` on a configured machine." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Each completed turn is written to your own BOS bucket as Pi JSONL; a local Celld node keeps a cached copy.",
          "Prompts and tool results go to the model you configure, DeepSeek by default; without a key, replies are mocked locally.",
          "Storage keys come from environment variables or the `[bos]` profile in `~/.aws/credentials`; `celagent rm <id>` deletes a session.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Does it sync my workspace?",
            body: "No. Session recovery does not set up the project files or environment on the other machine. Wait for the BOS write to succeed before relying on remote recovery.",
          },
          {
            title: "What if a BOS write fails?",
            body: "Retryable failures stay queued, and cross-machine recovery waits for a successful write. Recovery reads BOS first; only a missing object falls back to the worker cache. A BOS timeout or permission error does not fall back to truncated cache.",
          },
          {
            title: "How is history stored?",
            body: "sessions/<id>.jsonl stores Pi history, including tool calls and branches. Older JSON sessions use a legacy text recovery path.",
          },
          {
            title: "How do I install it?",
            body: "celagent reuses the Pi engine and its tools. Install from the GitHub release with install.sh, or install.ps1 on Windows; upstream Celld has no Windows package.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "celagent",
    description: "基于开源终端编码 Agent Pi，把会话保存在百度对象存储（BOS），按 ID 在另一台已配置的机器上恢复。",
    eyebrow: "基于开源终端编码 Agent Pi",
    headline: "换台机器，接着聊",
    lead: "Pi 编码会话存进百度对象存储（BOS）。在已配置的另一台机器上，按 ID 接着用。",
    catalog: {
      role: "会话恢复",
      text: "把 Pi 会话停在 BOS，换一台机器继续。",
    },
    primaryCta: {
      label: "安装",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/celagent",
    },
    privacy: {
      network: "automatic",
      networkNote: "每次提问发往你配置的模型，每个完成的轮次写入你自己的 BOS 存储桶。",
      stays: "会话在你自己的 BOS 存储桶里，本机 Celld 节点留有缓存；存储凭证来自环境变量或 ~/.aws/credentials。",
    },
    meta: "Pi 编码 Agent 终端界面 · 百度 BOS · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "安装脚本从 GitHub Release 下载二进制，含 celld 运行时。",
      items: [
        {
          comment: "一键安装",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "自检：配置、凭证、节点、BOS 连通",
          command: "celagent doctor",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · BOS 会话",
      status: "命令参考",
      command: "celagent",
      filesLabel: "命令",
      files: ["celagent", "celagent list", "celagent <id>  # 从 BOS 恢复", "celagent task ledger"],
      briefLabel: "持久化",
      brief: "完成回合 → BOS 写入队列 → 写入成功后按会话 ID 恢复",
      footnotes: ["两台机器均需配置", "条件写入检测冲突"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "完整的 Pi 会话，不是摘要",
        items: [
          { title: "原样的 Pi", body: "终端界面、引擎和工具不变；历史仍是原生 JSONL。" },
          { title: "每轮保存", body: "完成的回合进入 BOS 写入队列；条件写入检测冲突。" },
          { title: "先读 BOS", body: "写入失败留在队列；不静默退回截断缓存。" },
          { title: "先配置存储", body: "配好 BOS，运行 doctor 和 cas-probe。" },
          { title: "等写入成功", body: "BOS 写入成功后才能跨机恢复。" },
          { title: "按 ID 恢复", body: "在已配置的机器上 list，再按 ID 打开。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "每个完成的轮次以 Pi JSONL 写入你自己的 BOS 存储桶，本机 Celld 节点另存一份缓存。",
          "提问和工具结果发往你配置的模型，默认 DeepSeek；没有密钥时在本机生成模拟回复。",
          "存储凭证来自环境变量或 `~/.aws/credentials` 里的 `[bos]` profile；`celagent rm <id>` 删除会话。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "会同步工作区吗？",
            body: "不会。恢复会话不会在另一台机器上准备项目文件和运行环境。依赖跨机恢复前，先确认 BOS 写入成功。",
          },
          {
            title: "BOS 写入失败会怎样？",
            body: "可重试的失败会留队，跨机恢复要等写入成功。恢复先读 BOS，仅对象不存在时才回退到 worker 缓存；BOS 超时或权限失败时，不会静默退回截断缓存。",
          },
          {
            title: "历史怎么保存？",
            body: "sessions/<id>.jsonl 保存 Pi 历史，包含工具调用和分支。旧 JSON 会话使用兼容的文本恢复路径。",
          },
          {
            title: "怎么安装？",
            body: "celagent 复用 Pi 引擎及其工具。从 GitHub Release 用 install.sh 安装，Windows 使用 install.ps1；上游 Celld 没有 Windows 包。",
          },
        ],
      },
    ],
  },
});

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
    headline: "Resume on a new machine.",
    lead: "Saves each Pi coding-agent session to Baidu Object Storage (BOS), turn by turn. Resume it on another machine you have set up.",
    catalog: {
      role: "Session recovery",
      text: "Save a Pi coding-agent session to Baidu Object Storage, then resume it on another machine.",
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
      sub: "After installing, check that celagent can reach your BOS bucket.",
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
      footnotes: ["Configure both machines", "Conflicting writes from two machines are caught"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "The full Pi session, not a summary.",
        items: [
          {
            title: "Pi, unchanged",
            body: "Pi's own terminal interface, engine and tools. History stays in Pi's JSONL files.",
          },
          {
            title: "Saved per turn",
            body: "Each finished turn is queued and written to BOS; conflicting writes are caught.",
          },
          {
            title: "No silent fallback",
            body: "A failed write stays queued to retry; a truncated cached copy never replaces history.",
          },
          {
            title: "Configure storage",
            body: "Set up BOS; `celagent doctor` checks access, `celagent cas-probe` checks conflict detection.",
          },
          {
            title: "Resume by ID",
            body: "On a configured machine, `celagent list` shows sessions; `celagent <id>` opens one.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Each completed turn is written to your BOS bucket as Pi JSONL; Celld, a local runtime that celagent starts, caches it.",
          "Prompts and tool results go to the model you configure, DeepSeek by default.",
          "Without a model API key, celagent answers with placeholder replies so you can test storage.",
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
            body: "Retryable failures stay queued, and recovery on another machine waits for a successful write. Recovery reads BOS first and uses the local Celld cache only when the session is not in BOS at all. A BOS timeout or permission error never falls back to that cache, which may be truncated.",
          },
          {
            title: "How is history stored?",
            body: "Each session is saved in your bucket as `sessions/<id>.jsonl`, Pi's own history format, with tool calls and branches. Older `.json` sessions can still be read and are restored as text.",
          },
          {
            title: "How do I install it?",
            body: "Run the install script under Get started. On Windows, run the README’s `install.ps1` command in PowerShell; it installs celagent without Celld, which has no Windows package upstream. Then run `celagent doctor`.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "celagent",
    description: "基于开源终端编码 Agent Pi，把会话保存在百度对象存储（BOS），按 ID 在另一台已配置的机器上恢复。",
    eyebrow: "基于开源终端编码 Agent Pi",
    headline: "换台机器，接着写",
    lead: "把 Pi 编码 Agent 的会话逐轮存进百度对象存储（BOS），在另一台配置好的机器上按 ID 接着用。",
    catalog: {
      role: "会话恢复",
      text: "把 Pi 编码会话存进百度对象存储（BOS），换一台机器接着用。",
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
      stays: "会话在你自己的 BOS 存储桶里，本机 Celld 节点留有缓存；存储凭据来自环境变量或 ~/.aws/credentials。",
    },
    meta: "Pi 编码 Agent 终端界面 · 百度 BOS · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "装好后，检查 celagent 能否连上你的 BOS 存储桶。",
      items: [
        {
          comment: "一键安装",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "检查配置、凭据和 BOS 连接",
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
      brief: "完成的轮次 → BOS 写入队列 → 写入成功后按会话 ID 恢复",
      footnotes: ["两台机器均需配置", "两台机器的写入冲突会被发现"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "完整的 Pi 会话，不是摘要",
        items: [
          { title: "原样的 Pi", body: "终端界面、引擎和工具都是 Pi 自己的，历史仍存为 Pi 的 JSONL 文件。" },
          { title: "每轮保存", body: "每完成一轮就排队写入 BOS，冲突的写入会被发现。" },
          { title: "不静默回退", body: "写入失败就留在队列里重试，不拿截断的缓存冒充完整历史。" },
          {
            title: "先配置存储",
            body: "配好 BOS 后，`celagent doctor` 检查连接，`celagent cas-probe` 确认能发现写入冲突。",
          },
          { title: "按 ID 恢复", body: "在已配置的机器上，`celagent list` 列出会话，`celagent <id>` 打开其中一个。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "每个完成的轮次以 Pi JSONL 写入你自己的 BOS 存储桶；celagent 在本机启动的 Celld 另存一份缓存。",
          "提问和工具结果发往你配置的模型，默认是 DeepSeek。",
          "没有模型 API 密钥时，celagent 用占位回复作答，方便先测试存储。",
          "存储凭据来自环境变量或 `~/.aws/credentials` 里的 `[bos]` profile；`celagent rm <id>` 删除会话。",
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
            body: "可重试的失败会留在队列里，换机恢复要等写入成功。恢复时先读 BOS，只有 BOS 里根本没有这个会话，才改用本机 Celld 的缓存；BOS 超时或权限出错时不会改用缓存，因为缓存可能被截断。",
          },
          {
            title: "历史怎么保存？",
            body: "每个会话以 `sessions/<id>.jsonl` 存在存储桶里，这是 Pi 自己的历史格式，含工具调用和分支。旧的 `.json` 会话仍能读取，按文本恢复。",
          },
          {
            title: "怎么安装？",
            body: "运行“开始使用”里的安装脚本。Windows 上在 PowerShell 里运行 README 中的 `install.ps1` 安装命令；它只装 celagent，不含 Celld，因为上游 Celld 没有 Windows 包。装好后运行 `celagent doctor`。",
          },
        ],
      },
    ],
  },
});

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
      "Pi, the open-source terminal coding agent, run under a supervisor that outlives your terminal, with sessions and workspace checkpoints in your own BOS, S3, R2 or Tigris bucket.",
    eyebrow: "Durable Pi coding agent",
    headline: "Your agent keeps running.",
    lead: "Runs the Pi coding agent under a supervisor that outlives your terminal, and saves its session and files to your own bucket.",
    catalog: {
      role: "Durable agent",
      text: "Run the Pi coding agent in the background and keep its session and files in your own bucket.",
    },
    primaryCta: {
      label: "Install",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/celagent",
    },
    releaseHighlights: {
      version: "v4.1.0",
      items: [
        "Closing the terminal no longer stops the agent: it runs under a tmux supervisor, and `celagent attach` takes you back to it.",
        "Workspace files are now checkpointed to your bucket too, so `--restore` brings them back when you continue on another machine.",
        "New `delegate` and `goal` commands: sub-agents work on their own git branches, and a goal retries until your test command passes.",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote:
        "Each prompt goes to the model you configure; sessions and workspace checkpoints are written to your bucket.",
      stays:
        "Sessions and file checkpoints in your own bucket, held in a local outbox until each upload succeeds; storage keys from your environment or ~/.aws/credentials.",
    },
    meta: "Node.js 22.19+ · tmux · MIT · {version}",
    commands: {
      title: "Get started",
      sub: "After installing, check that your bucket passes the conditional-write probe, then start a session.",
      items: [
        {
          comment: "Install",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "Check configuration, aws CLI, tmux and conditional writes",
          command: "celagent doctor",
        },
        {
          comment: "Start a supervised session in a repository and attach",
          command: "celagent up fix-auth --cwd ~/repo --attach",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · durable session",
      status: "command reference",
      command: "celagent",
      filesLabel: "COMMANDS",
      files: [
        "celagent up <id> --attach",
        "celagent attach <id>",
        "celagent up <id> --restore",
        "celagent goal start …",
      ],
      briefLabel: "persistence",
      brief: "Each turn → local outbox → segments and manifest in your bucket; changed files → checkpoints",
      footnotes: ["Same bucket and key on both machines", "One writer at a time"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Close the terminal; the work goes on.",
        items: [
          {
            title: "Pi, unchanged",
            body: "Pi's own terminal interface and tools; `/new`, `/fork` and `/resume` still work.",
          },
          {
            title: "Outlives the terminal",
            body: "A tmux supervisor keeps Pi running; `celagent attach <id>` returns to it.",
          },
          {
            title: "Workspace checkpoints",
            body: "Changed files upload after tool results; `celagent up <id> --restore` rebuilds them elsewhere.",
          },
          {
            title: "Goals with a test",
            body: "`celagent goal start` retries until your `--accept` command exits 0, or asks you.",
          },
          {
            title: "Sub-agents in worktrees",
            body: "`celagent delegate spawn` gives each child its own git branch; you merge.",
          },
          {
            title: "No silent replay",
            body: "A watchdog restarts a killed agent; an unfinished tool call is marked unknown, not rerun.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Sessions and workspace checkpoints go to your own bucket: Baidu BOS by default, or AWS S3, Cloudflare R2 or Tigris.",
          "Prompts and tool results go to the model you configure, DeepSeek by default; OpenAI, Anthropic or Pi `/login` also work.",
          "Set `CELAGENT_ENCRYPTION_KEY` to encrypt what celagent writes with AES-256-GCM; without that key the data cannot be read.",
          "Storage keys come from environment variables or a `~/.aws/credentials` profile, `[bos]` by default; `celagent rm <id> --yes` deletes a session.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Does restore bring back running processes?",
            body: "No. A checkpoint holds files, not process memory, open sockets or running databases. It skips `.git`, `node_modules`, `dist` and similar folders, and by default caps one file at 128 MB and a workspace at 1 GB.",
            asOf: "v4.1.0",
          },
          {
            title: "Can two machines work on one session?",
            body: "Not at the same time. One machine holds the session's lease; another can take over 15 seconds after it expires, and the old machine's writes are then refused.",
            asOf: "v4.1.0",
          },
          {
            title: "Does it work on Windows?",
            body: "Partly. Windows has no tmux supervisor, so `up`, `attach`, `delegate` and `goal` are unavailable; `run`, `list` and `workspace` still work.",
            asOf: "v4.1.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "celagent",
    description:
      "基于开源终端编码 Agent Pi，跑在不随终端退出的 supervisor 里，会话和工作区检查点存在你自己的 BOS、S3、R2 或 Tigris 存储桶。",
    eyebrow: "持久运行的 Pi Agent",
    headline: "关掉终端，Agent 还在跑",
    lead: "让 Pi 编码 Agent 跑在不随终端关闭而退出的 supervisor 里，会话和工作区文件都存进你自己的存储桶。",
    catalog: {
      role: "持久运行的 Agent",
      text: "让 Pi 编码 Agent 在后台一直跑，会话和文件存进你自己的存储桶。",
    },
    primaryCta: {
      label: "安装",
      href: "https://github.com/hxddh/celagent/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/celagent",
    },
    releaseHighlights: {
      version: "v4.1.0",
      items: [
        "关掉终端不再停掉 Agent：它跑在 tmux supervisor 里，用 `celagent attach` 随时回去。",
        "工作区文件现在也会做检查点存进存储桶，换一台机器继续时，`--restore` 会把文件一起恢复。",
        "新增 `delegate` 和 `goal` 命令：子 Agent 各在自己的 git 分支上干活，goal 会一直重试，直到你的测试命令通过。",
      ],
    },
    privacy: {
      network: "automatic",
      networkNote: "每次提问发往你配置的模型，会话和工作区检查点写入你自己的存储桶。",
      stays:
        "会话和文件检查点在你自己的存储桶里，上传成功前先留在本机 outbox；存储凭据来自环境变量或 ~/.aws/credentials。",
    },
    meta: "Node.js 22.19+ · tmux · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "装好后，确认存储桶通过条件写探测，再启动会话。",
      items: [
        {
          comment: "一键安装",
          command: "curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh",
        },
        {
          comment: "检查配置、aws CLI、tmux 和条件写",
          command: "celagent doctor",
        },
        {
          comment: "在仓库里启动受看护的会话并附着",
          command: "celagent up fix-auth --cwd ~/repo --attach",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "celagent",
      kicker: "celagent · 持久会话",
      status: "命令参考",
      command: "celagent",
      filesLabel: "命令",
      files: [
        "celagent up <id> --attach",
        "celagent attach <id>",
        "celagent up <id> --restore",
        "celagent goal start …",
      ],
      briefLabel: "持久化",
      brief: "每轮 → 本机 outbox → 存储桶里的分段和 manifest；改动的文件 → 检查点",
      footnotes: ["两台机器用同一个存储桶和密钥", "同一时间只有一个写者"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "关掉终端，活接着干",
        items: [
          { title: "原样的 Pi", body: "终端界面和工具都是 Pi 自己的，`/new`、`/fork`、`/resume` 照常可用。" },
          { title: "不随终端退出", body: "tmux supervisor 让 Pi 一直跑，`celagent attach <id>` 随时回去。" },
          {
            title: "工作区检查点",
            body: "工具结果之后上传改动的文件，`celagent up <id> --restore` 在别处恢复。",
          },
          { title: "带验收的目标", body: "`celagent goal start` 一直重试，直到 `--accept` 命令返回 0，或停下来问你。" },
          { title: "子 Agent 独立分支", body: "`celagent delegate spawn` 给每个子 Agent 一个 git 分支，由你来合并。" },
          { title: "不静默重放", body: "Agent 被杀会由 watchdog 拉起；没跑完的工具调用标为 unknown，不会重跑。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "会话和工作区检查点存进你自己的存储桶：默认百度 BOS，也可以用 AWS S3、Cloudflare R2 或 Tigris。",
          "提问和工具结果发往你配置的模型，默认是 DeepSeek；也可以用 OpenAI、Anthropic 或 Pi 的 `/login`。",
          "设置 `CELAGENT_ENCRYPTION_KEY` 后，celagent 写入的内容用 AES-256-GCM 加密；没有这个密钥就读不出数据。",
          "存储凭据来自环境变量或 `~/.aws/credentials` 里的 profile（默认 `[bos]`）；`celagent rm <id> --yes` 删除会话。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "恢复时会带回运行中的进程吗？",
            body: "不会。检查点只存文件，不含进程内存、打开的 socket 或运行中的数据库。它跳过 `.git`、`node_modules`、`dist` 等目录，默认单个文件上限 128 MB，整个工作区上限 1 GB。",
            asOf: "v4.1.0",
          },
          {
            title: "两台机器能同时用一个会话吗？",
            body: "不能同时用。会话的租约在一台机器手里；租约过期 15 秒后另一台才能接管，之后旧机器的写入会被拒绝。",
            asOf: "v4.1.0",
          },
          {
            title: "Windows 上能用吗？",
            body: "部分可用。Windows 没有 tmux supervisor，`up`、`attach`、`delegate` 和 `goal` 用不了；`run`、`list` 和 `workspace` 仍然可以。",
            asOf: "v4.1.0",
          },
        ],
      },
    ],
  },
});

import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storageops",
  line: "storage",
  og: "/assets/og-storageops.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "StorageOps",
    description: "A Pi Coding Agent extension and skill pack for diagnosing S3-compatible object storage.",
    eyebrow: "Pi Coding Agent extension",
    headline: "S3 diagnosis for Pi",
    lead: "Pi skills and tools that diagnose S3-compatible failures from the logs, errors, config, and traces you provide.",
    catalog: {
      role: "Pi extension",
      text: "Storage diagnosis for Pi, from logs and traces already in the chat.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/storageops",
    },
    secondaryCta: {
      label: "Quick start",
      href: "https://github.com/hxddh/storageops#quick-start",
    },
    meta: "Python · Pi Coding Agent · S3-compatible · MIT",
    stats: {
      title: "What Pi gets",
      items: [
        {
          value: "16",
          label: "skill packs, including triage, evidence reporting, and eval",
        },
        {
          value: "4",
          label: "Pi extension tools",
        },
      ],
    },
    commands: {
      title: "Get started",
      sub: "storageops install also installs Pi Coding Agent. Configure a model key before the first diagnosis.",
      items: [
        {
          comment: "Install StorageOps",
          command: "python3 -m pip install storageops -i https://pypi.org/simple",
        },
        {
          comment: "Install the skills and tools into Pi",
          command: "storageops install",
        },
        {
          comment: "Run a diagnosis",
          command: "storageops --print 's5cmd sync reports 429 SlowDown; diagnose likely cause'",
        },
      ],
    },
    visual: {
      kind: "skillMap",
      label: "StorageOps",
      kicker: "Pi Agent",
      title: "A Pi diagnosis uses skills, then tools",
      body: "StorageOps gives Pi a storage-specific route: a skill chooses the method, then an extension tool handles the evidence safely.",
      cards: [
        {
          number: "SKILL",
          title: "16 skill packs",
          body: "Pi can load a focused method for access, protocol compatibility, performance, lifecycle, migration, consistency, or another storage domain.",
        },
        {
          number: "ROUTE",
          title: "detect_domain",
          body: "Rank likely domains and suggest which skill Pi should read next.",
        },
        {
          number: "SAFE",
          title: "scan_secrets",
          body: "Redact credential values before material is returned to the agent context.",
        },
        {
          number: "TRACE",
          title: "capture_http_trace",
          body: "Observe one bounded read-only storage command through the managed httpmon helper.",
        },
      ],
      flow: ["input: error, command, config, redacted log", "Pi: skills + tools + deterministic helpers"],
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "What Pi can load and call",
        title: "Skills set the method, tools inspect the evidence",
        body: "Pi is the runtime. StorageOps supplies the storage-specific knowledge and actions that let Pi investigate a case without touching your cloud account.",
        steps: [
          {
            label: "Pick the storage domain",
            body: "`detect_domain` ranks likely areas such as access, signing, throttling, migration, or networking and points Pi to the next skill.",
          },
          {
            label: "Load a focused skill",
            body: "A skill defines how to investigate a specific storage problem, from SigV4 and IAM to lifecycle, replication, or Spark S3A behavior.",
          },
          {
            label: "Call an evidence tool",
            body: "Tools redact secrets, search past sessions, parse supplied material, or capture one bounded read-only HTTP trace when that adds evidence.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "From material to next check",
        items: [
          {
            title: "Bring the material",
            body: "Start with a short description, exact error, `@log` file, configuration excerpt, or a command's debug output.",
          },
          {
            title: "Let Pi choose the path",
            body: "Pi loads the relevant StorageOps skill, then calls focused tools instead of treating the entire case as plain text.",
          },
          {
            title: "Inspect the right evidence",
            body: "StorageOps can redact credentials, parse supplied evidence, search prior sessions, or observe one bounded read-only command through httpmon.",
          },
          {
            title: "Make the change yourself",
            body: "The result distinguishes likely cause, supporting material, and the manual check or change still required from you.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cases",
        id: "cases",
        label: "Failure classes Pi can load",
        title: "Storage problems with a known domain",
        items: [
          "AccessDenied",
          "SignatureDoesNotMatch",
          "SlowDown",
          "checksum mismatches",
          "lifecycle rules",
          "replication",
          "migration",
          "stale reads",
        ],
        body: "The skill packs cover recurring S3-compatible failures. Pi loads only the expertise that fits the material in front of it.",
      },
      {
        kind: "faq",
        id: "faq",
        label: "Pi, buckets, Storage Agent",
        items: [
          {
            title: "Skills on top of Pi",
            body: "Object-storage skills, a Pi extension, and helpers. Pi stays the runtime; StorageOps does not add a second agent or a cloud console.",
          },
          {
            title: "No cloud account required",
            body: "It diagnoses from the logs, errors, config, and traces you bring. It does not take cloud credentials or open its own cloud session.",
          },
          {
            title: "It does not mutate storage",
            body: "StorageOps does not mutate storage. When you choose trace capture, it only observes the bounded command you provide through httpmon.",
          },
          {
            title: "When to open Storage Agent",
            body: "Choose StorageOps when you already use Pi and want storage-specific diagnosis. Choose Storage Agent when you want a complete desktop app with built-in tools, local analysis, and approval flows.",
            link: {
              label: "Open Storage Agent",
              href: "/storage-agent-workbench/",
            },
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "StorageOps",
    description: "面向 S3 兼容对象存储的 Pi Coding Agent 扩展与 skill pack。",
    eyebrow: "Pi Coding Agent 扩展",
    headline: "在 Pi 里排查对象存储",
    lead: "用你提供的日志、报错、配置和 trace，帮 Pi 排查 S3 兼容存储问题的 skills 和工具。",
    catalog: {
      role: "Pi 扩展",
      text: "用聊天里已有的日志和 trace，在 Pi 里做存储排查。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/storageops",
    },
    secondaryCta: {
      label: "快速开始",
      href: "https://github.com/hxddh/storageops#quick-start",
    },
    meta: "Python · Pi Coding Agent · S3-compatible · MIT",
    stats: {
      title: "Pi 多了什么",
      items: [
        {
          value: "16",
          label: "个技能包，含分诊、证据报告和评测",
        },
        {
          value: "4",
          label: "个 Pi 扩展工具",
        },
      ],
    },
    commands: {
      title: "开始使用",
      sub: "storageops install 会一并安装 Pi Coding Agent。第一次诊断前先配置模型密钥。",
      items: [
        {
          comment: "安装 StorageOps",
          command: "python3 -m pip install storageops -i https://pypi.org/simple",
        },
        {
          comment: "把技能和工具装进 Pi",
          command: "storageops install",
        },
        {
          comment: "跑一次诊断",
          command: "storageops --print 's5cmd sync reports 429 SlowDown; diagnose likely cause'",
        },
      ],
    },
    visual: {
      kind: "skillMap",
      label: "StorageOps",
      kicker: "Pi Agent",
      title: "Pi 先加载 skill，再调用工具",
      body: "StorageOps 给 Pi 一条对象存储排查路径：skill 决定方法，扩展工具再安全地处理现场证据。",
      cards: [
        {
          number: "SKILL",
          title: "16 组诊断 skills",
          body: "Pi 可按需加载鉴权、协议兼容、性能、生命周期、迁移、一致性等对象存储领域的排查方法。",
        },
        {
          number: "ROUTE",
          title: "detect_domain",
          body: "判断优先排查方向，并提示 Pi 接下来该读取哪份 skill。",
        },
        {
          number: "SAFE",
          title: "scan_secrets",
          body: "在材料进入 Agent 上下文前，先脱敏凭据值。",
        },
        {
          number: "TRACE",
          title: "capture_http_trace",
          body: "通过受管的 httpmon helper 观察一条受限的只读存储命令。",
        },
      ],
      flow: ["输入：报错、命令、配置、脱敏日志", "Pi：skills、工具与确定性辅助脚本"],
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "Pi 会加载什么、调用什么",
        title: "技能决定排查方法，工具读取现场证据",
        body: "Pi 是运行时。StorageOps 提供对象存储领域的知识和动作，让 Pi 能根据现场材料排查问题，但不会连接或修改你的云账号。",
        steps: [
          {
            label: "先识别问题领域",
            body: "`detect_domain` 会从鉴权、签名、限流、迁移、网络等方向里给出优先级，并提示 Pi 加载下一份 skill。",
          },
          {
            label: "再加载对应 skill",
            body: "每份 skill 都定义了一类对象存储问题的排查方法，例如 SigV4、IAM、生命周期、复制或 Spark S3A。",
          },
          {
            label: "按需调用工具",
            body: "工具会脱敏、检索历史会话、解析输入材料；需要补充证据时，也可对一条只读命令采集 HTTP trace。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "从材料到下一步核对",
        items: [
          {
            title: "带上现场材料",
            body: "先提供问题描述、原始报错、`@日志文件`、相关配置片段，或命令的 debug 输出。",
          },
          {
            title: "让 Pi 选择路径",
            body: "Pi 会加载合适的 StorageOps skill，再调用对应工具，不会把整份材料只当作普通文本来猜。",
          },
          {
            title: "读取需要的证据",
            body: "StorageOps 可以脱敏凭据、解析输入材料、检索历史会话；需要补充证据时，也能通过 httpmon 观察一条受限的只读命令。",
          },
          {
            title: "由你完成修改",
            body: "结果会区分可能原因、依据，以及仍需你手动确认或修改的部分。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cases",
        id: "cases",
        label: "可加载的故障类型",
        title: "有明确排查领域的对象存储问题",
        items: [
          "AccessDenied",
          "SignatureDoesNotMatch",
          "SlowDown",
          "校验和不匹配",
          "生命周期规则",
          "复制",
          "迁移",
          "读取结果过期",
        ],
        body: "每份 skill 对应一类常见的 S3 兼容问题。Pi 会根据材料加载需要的能力，而不是走一套固定套路。",
      },
      {
        kind: "faq",
        id: "faq",
        label: "Pi、桶与 Storage Agent",
        items: [
          {
            title: "给 Pi 加上存储 skills",
            body: "对象存储 skills、一份 Pi 扩展和辅助脚本。Pi 仍是运行时；StorageOps 不会再加一个 Agent，也不会变成云控制台。",
          },
          {
            title: "不必接入云账号",
            body: "根据你提供的日志、报错、配置和 trace 排查，不收取云凭证，也不自建云账号会话。",
          },
          {
            title: "不改你的存储",
            body: "StorageOps 不改存储资源；若启用 trace，只观察你提供的那条受限命令。",
          },
          {
            title: "何时改用 Storage Agent",
            body: "已经使用 Pi、只想增加对象存储排查能力时，选择 StorageOps；需要完整桌面应用、内置工具、本地分析和确认流程时，选择 Storage Agent。",
            link: {
              label: "打开 Storage Agent",
              href: "/zh/storage-agent-workbench/",
            },
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});

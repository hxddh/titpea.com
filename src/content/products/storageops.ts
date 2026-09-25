import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storageops",
  line: "storage",
  icon: "/assets/icons/storageops.webp",
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
    headline: "S3 diagnosis for Pi.",
    lead: "Skills and tools for Pi. Your logs and traces. No cloud account.",
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
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Pi stays the runtime.",
        items: [
          { title: "Skills on Pi", body: "No second agent, no cloud console, no cloud account." },
          { title: "Secrets redacted", body: "Before material reaches the agent context." },
          { title: "Storage untouched", body: "At most one read-only traced command; you make the change." },
        ],
      },
      {
        kind: "flow",
        id: "how",
        nav: "How it works",
        kicker: "What Pi loads and calls",
        title: "Skills set the method. Tools read the evidence.",
        body: "Pi is the runtime. StorageOps supplies the storage knowledge and the tools.",
        steps: [
          { label: "Bring the material", body: "An exact error, `@log` file, config excerpt, or debug output." },
          { label: "Pick the domain", body: "`detect_domain` ranks likely areas and points Pi to a skill." },
          { label: "Load a skill", body: "SigV4, IAM, lifecycle, replication, Spark S3A; tools read the evidence." },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        nav: "Failures",
        label: "Failure classes",
        title: "Storage problems with a known domain.",
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
        body: "The skill packs cover recurring S3-compatible failures. Pi loads only what fits the material in front of it.",
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is it a second agent?",
            body: "No. StorageOps is object-storage skills, a Pi extension, and helpers. Pi stays the runtime; StorageOps does not add a second agent or a cloud console.",
          },
          {
            title: "Does it need my cloud account?",
            body: "No. It diagnoses from the logs, errors, config, and traces you bring. It does not take cloud credentials or open its own cloud session.",
          },
          {
            title: "Can it change my storage?",
            body: "No. StorageOps does not mutate storage. When you choose trace capture, it only observes the bounded read-only command you provide through httpmon.",
          },
          {
            title: "When should I open Storage Agent?",
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
    lead: "给 Pi 的 skills 和工具。用你的日志和 trace 排查。不接云账号。",
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
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "Pi 仍是运行时",
        items: [
          { title: "装在 Pi 上", body: "不加第二个 Agent，不做云控制台，不接云账号。" },
          { title: "先脱敏", body: "凭据值在进入 Agent 上下文前脱敏。" },
          { title: "不改存储", body: "最多只读 trace 一条命令；改动由你来做。" },
        ],
      },
      {
        kind: "flow",
        id: "how",
        nav: "排查过程",
        kicker: "Pi 加载什么、调用什么",
        title: "skill 定方法，工具读证据",
        body: "Pi 是运行时。StorageOps 补上对象存储领域的知识和工具。",
        steps: [
          { label: "带上材料", body: "原始报错、`@日志文件`、配置片段或 debug 输出。" },
          { label: "识别领域", body: "`detect_domain` 给出优先方向，提示 Pi 读哪份 skill。" },
          { label: "加载 skill", body: "SigV4、IAM、生命周期、复制、Spark S3A；再由工具读证据。" },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        nav: "故障类型",
        label: "故障类型",
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
        body: "skill 包覆盖常见的 S3 兼容故障。Pi 只加载与眼前材料相符的那部分。",
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "它是另一个 Agent 吗？",
            body: "不是。StorageOps 是对象存储 skills、一份 Pi 扩展和辅助脚本。Pi 仍是运行时；StorageOps 不会再加一个 Agent，也不是云控制台。",
          },
          {
            title: "需要接入云账号吗？",
            body: "不需要。它根据你提供的日志、报错、配置和 trace 排查，不收取云凭证，也不自建云账号会话。",
          },
          {
            title: "会改动我的存储吗？",
            body: "不会。StorageOps 不修改存储资源；若启用 trace，只经 httpmon 观察你提供的那条受限只读命令。",
          },
          {
            title: "什么时候改用 Storage Agent？",
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

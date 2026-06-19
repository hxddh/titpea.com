import type { AgentPackageProduct } from "../../lib/site";
import { storageOpsEvidenceFacts } from "../productEvidenceFacts";
import { siteConfig } from "../siteConfig";

const storageOpsMeta = `Python · Pi Coding Agent · S3-compatible · ${storageOpsEvidenceFacts.skillsCount} skills · ${storageOpsEvidenceFacts.toolsCount} tools`;
const storageOpsProof = [
  `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
  `${storageOpsEvidenceFacts.toolsCount} registered tools`,
  "CLI / Web API / MCP",
  "Secret redaction",
];
const storageOpsProofZh = [
  `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`,
  `${storageOpsEvidenceFacts.toolsCount} 个注册工具`,
  "CLI / Web API / MCP",
  "凭据脱敏",
];

export const storageOpsProduct: AgentPackageProduct = {
  slug: "storageops",
  name: "StorageOps",
  archetype: "agentPackage",
  locales: {
    en: {
      title: "StorageOps",
      description:
        "StorageOps is an S3 diagnostics agent for logs, errors, configs, HTTP traces, and structured remediation.",
      eyebrow: "Pi Agent",
      headline: "S3 diagnostics agent",
      lead: "Paste logs, errors, configs, or traces. StorageOps routes the case through skills and tools, then returns root cause, evidence, and remediation steps.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageops },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.storageopsQuickStart },
      meta: storageOpsMeta,
      proof: storageOpsProof,
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You need to diagnose S3-compatible failures such as AccessDenied, SlowDown, SignatureDoesNotMatch, CORS failures, lifecycle surprises, replication issues, or migration drift.",
          intent: "fit",
          surface: "agent",
          priority: "primary",
        },
        {
          title: "It is not",
          body: "A cloud console, SDK, or auto-remediation bot. It does not connect to cloud accounts or modify resources; it diagnoses from evidence you provide.",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "What you get",
          body: `${storageOpsEvidenceFacts.skillsCount} diagnostic skills, ${storageOpsEvidenceFacts.toolsCount} registered tools, parsers, analyzers, memory search, Web UI, HTTP API, and MCP stdio server.`,
          intent: "fit",
          surface: "agent",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Diagnostic skills",
          body: "Skills cover IAM, signing, throttling, CORS, CLI/SDK behavior, networking, lifecycle, replication, migration, consistency, logs, notifications, and triage.",
          intent: "capability",
          evidence: `${storageOpsEvidenceFacts.skillsCount} skills`,
          surface: "agent",
        },
        {
          title: "Registered tools",
          body: "Tools parse rclone, AWS CLI, s5cmd, CORS, lifecycle XML, replication status, Hadoop S3A, network diagnostics, and httpmon logs.",
          intent: "capability",
          evidence: `${storageOpsEvidenceFacts.toolsCount} tools`,
          surface: "agent",
        },
        {
          title: "Analyzers and fixes",
          body: "Analyzers trace AccessDenied, throughput bottlenecks, CORS, network failures, replication issues, and cost signals; generators produce policy and lifecycle fixes.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Safe evidence flow",
          body: "Secrets and Authorization headers are redacted before analysis, and reports separate summary, evidence, and remediation.",
          intent: "evidence",
          evidence: "golden cases",
          surface: "agent",
        },
      ],
      rationaleLabel: "Why it exists",
      rationaleTitle: "Evidence before advice",
      rationaleBody: [
        "Object storage errors are rarely solved by the message alone. StorageOps first classifies the failure domain, then uses parsers, analyzers, prior memory, and optional HTTP traces to build a diagnosis.",
        "Pi is the runtime. StorageOps is the object-storage layer around it: skills, tools, reports, API surfaces, and safety rules for S3-compatible troubleshooting.",
      ],
      workflowLabel: "Workflow",
      workflow: [
        {
          title: "Start a case",
          body: 'Run `storageops`, pass a prompt with `storageops "getting 429 SlowDown"`, reference `@error.log`, or pipe CLI output into a session.',
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Route the domain",
          body: "The triage layer routes evidence into IAM, signing, throttling, CORS, lifecycle, replication, migration, network, or another storage domain.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Parse evidence",
          body: "Tools parse debug logs, XML errors, HTTP traces, policies, lifecycle rules, network output, and prior StorageOps sessions.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Return a report",
          body: "The report includes category, root cause, confidence, key evidence, and remediation steps with manual-only changes.",
          intent: "workflow",
          surface: "agent",
        },
      ],
      examplesLabel: "Usage examples",
      examples: [
        {
          title: "Signature mismatch",
          body: "Parse `SignatureDoesNotMatch` XML, compare canonical request inputs, and identify the signing mismatch.",
          intent: "example",
          surface: "protocol",
        },
        {
          title: "Slow or throttled list",
          body: "Parse CLI or SDK traces, detect SlowDown patterns, and separate hot prefixes from network or client bottlenecks.",
          intent: "example",
          surface: "agent",
        },
        {
          title: "AccessDenied",
          body: "Trace IAM and bucket policy evidence, then generate the missing resource or action statement as a manual fix.",
          intent: "example",
          surface: "agent",
        },
      ],
      casesLabel: "Cases",
      casesTitle: "Object storage diagnosis domains",
      casesBody:
        "StorageOps is organized around recurring S3-compatible failure domains, with skills and tools that help Pi reason inside each one.",
      cases: [
        "AccessDenied",
        "SlowDown",
        "SignatureDoesNotMatch",
        "BadDigest",
        "stale reads",
        "lifecycle surprises",
        "failed notifications",
        "migration drift",
      ],
      finalCta: "Bring the error, leave out the secrets",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "What makes it an agent rather than a checklist?",
          body: "The Pi runtime can load StorageOps skills, call registered tools, search prior sessions, and combine parsed evidence with reasoning.",
        },
        {
          title: "What should I paste first?",
          body: "Start with the exact error, command or SDK call, endpoint style, relevant config names, and a redacted log excerpt.",
        },
        {
          title: "What about secrets?",
          body: "StorageOps treats logs as untrusted input, redacts credentials and Authorization headers, and does not connect to cloud accounts or modify resources.",
        },
      ],
    },
    zh: {
      title: "StorageOps",
      description: "StorageOps 是一套 S3 诊断 Agent，可根据日志、错误、配置和 HTTP trace 给出原因、证据与修复建议。",
      eyebrow: "Pi Agent",
      headline: "S3 诊断 Agent",
      lead: "输入日志、错误、配置或 trace。StorageOps 会调用对应的技能和工具，给出原因、证据与修复建议。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageops },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.storageopsQuickStart },
      meta: storageOpsMeta,
      proof: storageOpsProofZh,
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "排查 S3 兼容故障，例如 AccessDenied、SlowDown、SignatureDoesNotMatch、CORS、生命周期、复制或迁移问题。",
          intent: "fit",
          surface: "agent",
          priority: "primary",
        },
        {
          title: "它不是什么",
          body: "不是云控制台、SDK 或自动修复工具。它不连接云账号，不替你修改资源，只根据你提供的证据做诊断。",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "内置能力",
          body: `${storageOpsEvidenceFacts.skillsCount} 个诊断技能、${storageOpsEvidenceFacts.toolsCount} 个注册工具，以及解析器、分析器、历史检索、Web UI、HTTP API 和 MCP stdio server。`,
          intent: "fit",
          surface: "agent",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "诊断技能",
          body: "覆盖 IAM、签名、限流、CORS、CLI/SDK 行为、网络、生命周期、复制、迁移、一致性、日志、通知和初步归类。",
          intent: "capability",
          evidence: `${storageOpsEvidenceFacts.skillsCount} 个 skills`,
          surface: "agent",
        },
        {
          title: "注册工具",
          body: "工具可解析 rclone、AWS CLI、s5cmd、CORS、生命周期 XML、复制状态、Hadoop S3A、网络诊断和 httpmon 日志。",
          intent: "capability",
          evidence: `${storageOpsEvidenceFacts.toolsCount} 个 tools`,
          surface: "agent",
        },
        {
          title: "分析与建议",
          body: "分析 AccessDenied、吞吐瓶颈、CORS、网络、复制和成本信号，并生成 policy 或 lifecycle 修改建议。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "先保护凭据",
          body: "分析前会脱敏凭据和 Authorization 请求头；报告也会区分摘要、证据和修复步骤。",
          intent: "evidence",
          evidence: "golden cases",
          surface: "agent",
        },
      ],
      rationaleLabel: "为什么做",
      rationaleTitle: "先看证据，再给建议",
      rationaleBody: [
        "对象存储错误很少能只凭一句报错判断。StorageOps 先识别问题领域，再用解析器、分析器、历史记录和可选 HTTP trace 组织证据。",
        "Pi 是运行时；StorageOps 是其上的对象存储诊断层。技能、工具、报告、API 和安全规则共同约束诊断过程。",
      ],
      workflowLabel: "怎么用",
      workflow: [
        {
          title: "提交问题",
          body: '运行 `storageops`，或使用 `storageops "getting 429 SlowDown"`、`storageops @error.log`，也可以从管道输入。',
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "判断方向",
          body: "分诊层会把证据归入 IAM、签名、限流、CORS、生命周期、复制、迁移、网络等领域。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "解析线索",
          body: "工具会解析 debug log、XML 错误、HTTP trace、policy、生命周期规则、网络输出和历史会话。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "给出报告",
          body: "报告包含分类、根因、置信度、关键证据和修复步骤；资源修改仍由你手动执行。",
          intent: "workflow",
          surface: "agent",
        },
      ],
      examplesLabel: "用法示例",
      examples: [
        {
          title: "签名不匹配",
          body: "解析 `SignatureDoesNotMatch` XML，对比 canonical request 的输入，定位签名差异。",
          intent: "example",
          surface: "protocol",
        },
        {
          title: "list 变慢或被限流",
          body: "解析 CLI 或 SDK trace，识别 SlowDown 模式，区分热点前缀、网络和客户端瓶颈。",
          intent: "example",
          surface: "agent",
        },
        {
          title: "AccessDenied",
          body: "根据 IAM 和存储桶策略定位缺失的资源或动作，并给出手动修复建议。",
          intent: "example",
          surface: "agent",
        },
      ],
      casesLabel: "场景",
      casesTitle: "常见诊断场景",
      casesBody: "StorageOps 围绕常见 S3 兼容故障组织技能和取证工具，让 Pi 在具体领域内分析，而不是泛泛而谈。",
      cases: [
        "AccessDenied",
        "SlowDown",
        "SignatureDoesNotMatch",
        "BadDigest",
        "stale reads",
        "lifecycle surprises",
        "failed notifications",
        "migration drift",
      ],
      finalCta: "带上报错，别带凭据",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题",
      faq: [
        {
          title: "为什么它是 Agent，不是一张检查清单？",
          body: "Pi 运行时可以加载 StorageOps 技能、调用注册工具、检索历史会话，并把解析后的证据和推理结合起来。",
        },
        {
          title: "一开始该提供什么？",
          body: "先给完整错误、命令或 SDK 调用、端点形式、相关配置名，以及脱敏后的日志片段。",
        },
        {
          title: "凭据会泄露吗？",
          body: "StorageOps 把日志视为不可信输入，会脱敏凭据和 Authorization 请求头，也不会连接云账号或修改资源。",
        },
      ],
    },
  },
};

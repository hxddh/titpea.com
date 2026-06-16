import type { Product } from "../../lib/site";
import { storageOpsEvidenceFacts } from "../productEvidenceFacts";

const storageOpsMeta = `Python · Pi Coding Agent · S3-compatible · ${storageOpsEvidenceFacts.skillsCount} skills · ${storageOpsEvidenceFacts.toolsCount} tools`;
const storageOpsProof = [
  `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
  `${storageOpsEvidenceFacts.toolsCount} Pi extension tools`,
  "Managed httpmon helper",
  "Golden-case evals",
];
const storageOpsProofZh = [
  `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`,
  `${storageOpsEvidenceFacts.toolsCount} 个 Pi 扩展工具`,
  "托管 httpmon helper",
  "Golden-case evals",
];

export const storageOpsProduct: Product = {
  slug: "storageops",
  current: "storageops",
  name: "StorageOps",
  category: "storage",
  archetype: "agentPackage",
  role: "diagnosis",
  visual: "diagnostic",
  locales: {
    en: {
      title: "StorageOps",
      description:
        "StorageOps is an object storage diagnosis agent built on Pi Coding Agent, with S3 diagnostic skills, Pi tools, helper scripts, and evals.",
      eyebrow: "Pi Agent / Object Storage Diagnosis",
      headline: "S3 diagnosis agent for Pi",
      lead: "StorageOps turns Pi Coding Agent into an object storage specialist by installing S3 diagnostic skills, Pi extension tools, deterministic helpers, and compact eval cases.",
      primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/storageops" },
      secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/storageops#quick-start" },
      meta: storageOpsMeta,
      proof: storageOpsProof,
      positioningLabel: "Positioning",
      positioning: [
        [
          "Use it when",
          "You want Pi to diagnose S3-compatible failures such as AccessDenied, SlowDown, SignatureDoesNotMatch, checksum drift, lifecycle issues, or migration surprises.",
        ],
        [
          "It is not",
          "A cloud console, storage SDK, or standalone monitoring platform. It is an agent package: skills, tools, helper scripts, and routing rules for Pi.",
        ],
        [
          "What you install",
          `A Pi extension, ${storageOpsEvidenceFacts.skillsCount} diagnostic skill packs, ${storageOpsEvidenceFacts.toolsCount} tools for bounded evidence collection, a managed httpmon helper, deterministic scripts, and eval cases.`,
        ],
      ],
      featuresLabel: "Capabilities",
      features: [
        [
          "Skill coverage",
          "Skills cover security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle cost, replication, migration, consistency, logs, notifications, and triage.",
        ],
        [
          "Pi extension tools",
          "`scan_secrets`, `detect_domain`, `search_memory`, and `capture_http_trace` help Pi route the issue and gather redacted evidence.",
        ],
        [
          "Helper scripts",
          "Deterministic scripts inspect policies, SigV4 inputs, payload hashes, ETags, throttling, access logs, migration estimates, and endpoint reachability.",
        ],
        [
          "Eval discipline",
          "Golden cases, skill/eval packs, size gates, and validation targets keep the agent package compact, repeatable, and safer to change.",
        ],
      ],
      rationaleLabel: "Why it exists",
      rationaleTitle: "Skills and tools define the agent",
      rationaleBody: [
        "Pi is the runtime. StorageOps is the object-storage expertise layer: domain-specific skills decide how to reason, while extension tools collect bounded evidence without dumping secrets into the prompt.",
        "The product is useful because the agent has a taxonomy, tools, helper scripts, and regression cases. It is not a generic chatbot wrapper around S3 error messages.",
      ],
      workflowLabel: "Workflow",
      workflow: [
        [
          "Invoke Pi",
          "Run `storageops --print` or start an interactive Pi session with logs, errors, configs, or a short failure description.",
        ],
        [
          "Route to skills",
          "`detect_domain` and the skill taxonomy steer Pi toward auth, signing, throttling, consistency, lifecycle, migration, or another storage domain.",
        ],
        [
          "Use tools",
          "Pi can scan secrets, search prior sessions, or capture a sanitized HTTP trace through the managed httpmon helper.",
        ],
        [
          "Diagnose",
          "The agent returns likely cause, confidence, evidence, next checks, and safe changes grounded in the selected skills and tool output.",
        ],
      ],
      examplesLabel: "Usage examples",
      examples: [
        [
          "Signature mismatch",
          "Route SignatureDoesNotMatch into signing skills, inspect canonical request inputs, and compare provider-specific behavior.",
        ],
        [
          "Slow or throttled list",
          "Use performance and throttling skills with bounded helper output instead of guessing from SDK retries.",
        ],
        [
          "Migration drift",
          "Combine inventory evidence, lifecycle rules, checksum hints, and redacted traces before recommending the next check.",
        ],
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
        [
          "What makes it an agent rather than a checklist?",
          "The Pi runtime can call StorageOps tools, load domain skills, search prior sessions, and combine deterministic helper output with reasoning.",
        ],
        [
          "What should I paste first?",
          "Start with the exact error, command or SDK call, endpoint style, relevant config names, and a redacted log excerpt. The skills and tools narrow the next evidence request.",
        ],
        [
          "When does capture_http_trace matter?",
          "Use it when the diagnosis depends on request details hidden by a CLI or SDK: headers, redirects, retry behavior, canonical request shape, payload hashes, or provider metadata.",
        ],
      ],
    },
    zh: {
      title: "StorageOps",
      description:
        "StorageOps 是构建在 Pi Coding Agent 之上的对象存储诊断 agent，包含诊断技能、Pi 工具、确定性脚本和回归用例。",
      eyebrow: "Pi Agent / 对象存储诊断",
      headline: "Pi 的 S3 诊断 agent",
      lead: "StorageOps 给 Pi 装上一套对象存储诊断能力：领域技能、扩展工具、确定性脚本，以及约束输出口径的回归用例。",
      primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
      secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
      meta: storageOpsMeta,
      proof: storageOpsProofZh,
      positioningLabel: "边界",
      positioning: [
        [
          "什么时候用",
          "希望让 Pi 排查 S3 兼容故障：AccessDenied、SlowDown、SignatureDoesNotMatch、checksum 异常、生命周期问题或迁移差异。",
        ],
        ["它不是什么", "不是云控制台、存储 SDK 或监控平台。它是给 Pi 安装的一套诊断能力：技能、工具、脚本和路由规则。"],
        [
          "安装后有什么",
          `Pi extension、${storageOpsEvidenceFacts.skillsCount} 个诊断技能包、${storageOpsEvidenceFacts.toolsCount} 个有界取证工具、托管的 httpmon helper、确定性脚本和回归用例。`,
        ],
      ],
      featuresLabel: "能力",
      features: [
        [
          "诊断技能",
          "覆盖安全、协议兼容、CLI/SDK 行为、性能、网络、生命周期成本、复制、迁移、一致性、日志、通知和初步分诊。",
        ],
        ["Pi 工具", "`scan_secrets`、`detect_domain`、`search_memory`、`capture_http_trace` 负责问题路由和脱敏取证。"],
        ["辅助脚本", "确定性脚本检查 policy、SigV4 输入、payload hash、ETag、限流、访问日志、迁移估算和端点可达性。"],
        ["回归约束", "Golden cases、技能/评测包、size gates 和验证目标让 agent 包保持紧凑、可重复，也更容易安全修改。"],
      ],
      rationaleLabel: "为什么做",
      rationaleTitle: "agent 的能力来自技能和工具",
      rationaleBody: [
        "Pi 是运行时，StorageOps 是对象存储专家层。领域技能决定怎么判断问题，扩展工具负责收集有边界的上下文，避免把密钥直接塞进对话里。",
        "它的价值不在于“把错误丢给模型”，而在于问题分类、取证工具、确定性脚本和回归用例共同限定了 agent 的工作方式。",
      ],
      workflowLabel: "怎么用",
      workflow: [
        ["启动 Pi", "用 `storageops --print` 或交互式 Pi session 输入日志、错误、配置或简短故障描述。"],
        ["路由技能", "`detect_domain` 和技能分类把问题导向鉴权、签名、限流、一致性、生命周期、迁移等领域。"],
        ["调用工具", "Pi 可以扫描密钥、搜索历史 session，或通过托管 httpmon helper 捕获脱敏 HTTP trace。"],
        ["生成诊断", "agent 基于选中的技能和工具输出可能原因、置信度、证据、下一步检查和安全修改建议。"],
      ],
      examplesLabel: "用法示例",
      examples: [
        ["签名错误", "把 SignatureDoesNotMatch 路由到签名诊断，检查 canonical request 输入，并对照服务商行为。"],
        ["List 变慢或被限流", "用性能和限流诊断加上 helper 输出判断，而不是只看 SDK 重试日志猜原因。"],
        ["迁移差异", "先组合对象清单、生命周期规则、checksum 线索和脱敏 trace，再给下一步检查建议。"],
      ],
      casesLabel: "场景",
      casesTitle: "对象存储诊断领域",
      casesBody: "StorageOps 围绕常见 S3 兼容故障组织诊断技能和取证工具，让 Pi 在具体领域内推理，而不是泛泛回答。",
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
      finalCta: "带上错误，不带凭据",
      finalCtaLabel: "打开仓库",
      faqLabel: "问题与用法",
      faq: [
        [
          "为什么说它是 agent，而不是 checklist？",
          "Pi 运行时可以调用 StorageOps 工具、加载领域技能、搜索历史 session，并把确定性 helper 输出和推理结合起来。",
        ],
        [
          "一开始应该粘贴什么？",
          "先给完整错误、命令或 SDK 调用、端点形式、相关配置名，以及脱敏后的日志片段。技能和工具会继续收窄证据。",
        ],
        [
          "什么时候需要 capture_http_trace？",
          "当诊断依赖 CLI 或 SDK 隐藏的请求细节时使用：headers、redirect、retry、canonical request、payload hash 或服务商响应元数据。",
        ],
      ],
    },
  },
};

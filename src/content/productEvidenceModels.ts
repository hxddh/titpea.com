import type { ProductEvidenceModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

export const productEvidenceModels: Partial<Record<ProductSlug, Record<Locale, ProductEvidenceModel>>> = {
  "s3-turbo-list": {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "scanPlan",
      kicker: "How list adapts",
      title: "The scan plan follows the bucket",
      body: "The first list reads the bucket's structure, opens parallel work where that structure exists, then only splits the segments that remain long.",
      cards: [
        { label: "Read the shape", body: "Probe real prefix boundaries before recursive work begins." },
        {
          label: "Run segments",
          body: "Use those boundaries to open parallel list work without a prepared hints file.",
        },
        {
          label: "Split the long tail",
          body: "Only fan out segments that remain long while useful capacity is available.",
        },
        {
          label: "Write the list",
          body: "Finish with an analysis-ready object list instead of terminal-only output.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "scanPlan",
      kicker: "list 如何自动展开",
      title: "扫描会根据桶的结构调整",
      body: "第一次 list 先识别桶里的前缀边界，有结构就并行展开；剩下的长尾片段再按需拆分。",
      cards: [
        { label: "识别结构", body: "先探测真实的前缀边界，再开始递归扫描。" },
        { label: "并行列举", body: "利用这些边界展开并行任务，不必预先准备 hints 文件。" },
        { label: "处理长尾", body: "只有仍然耗时的片段，才会在有可用性能时继续拆分。" },
        { label: "写出 list", body: "最终留下可分析的 Parquet list，而不只是终端输出。" },
      ],
    },
  },
  storageops: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "What Pi can load and call",
      title: "Skills set the method, tools inspect the evidence",
      body: "Pi is the runtime. StorageOps supplies the storage-specific knowledge and actions that let Pi investigate a case without touching your cloud account.",
      cards: [
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
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "Pi 会加载什么、调用什么",
      title: "技能决定排查方法，工具读取现场证据",
      body: "Pi 是运行时。StorageOps 提供对象存储领域的知识和动作，让 Pi 能根据现场材料排查问题，但不会连接或修改你的云账号。",
      cards: [
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
  },
  httpmon: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "One command, one local layer",
      title: "Only the wrapped process is configured",
      body: "httpmon starts a local MITM proxy, gives its address and temporary CA to one child process, and forwards the original response stream to that process unchanged.",
      cards: [
        {
          label: "Start locally",
          value: "01",
          body: "Put `httpmon` before curl, aws, Python, Node, or another proxy-aware command. No system proxy is changed.",
        },
        {
          label: "Configure one child",
          value: "02",
          body: "The proxy address and ephemeral CA live in that command's environment, not in your global network settings.",
        },
        {
          label: "Forward and display",
          value: "03",
          body: "The command receives its original stream. Beside it, httpmon shows headers, status, timing, and a decoded preview.",
        },
        {
          label: "Save when needed",
          value: "04",
          body: "Write NDJSON, HAR, or a recording when the session needs to be replayed or shared.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "一条命令，一层本地观察",
      title: "只配置当前这条命令",
      body: "httpmon 启动本地 MITM 代理，把代理地址和临时 CA 传给一个子进程。子进程仍会收到原始响应流，终端则显示请求、响应和耗时。",
      cards: [
        {
          label: "本地启动",
          value: "01",
          body: "在 curl、aws、Python、Node 或其他支持代理的命令前加上 `httpmon`，系统代理不会变化。",
        },
        {
          label: "只配置子进程",
          value: "02",
          body: "代理地址和临时 CA 只存在于这条命令的环境变量中，不会写进全局网络设置。",
        },
        {
          label: "转发并显示",
          value: "03",
          body: "原命令照常收到响应；终端同时显示请求头、响应头、状态码、耗时和解压后的预览。",
        },
        { label: "按需留存", value: "04", body: "需要复查或分享时，再导出 NDJSON、HAR 或录制文件。" },
      ],
    },
  },
  "agent-radar": {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "Auditable state",
      title: "What the pipeline leaves in Git",
      body: "The runner updates weekly theses, the agent watchlist, field notes, and storage implications within fixed write bounds. When a candidate enters the watchlist or brief, the change remains reviewable in repository history.",
      cards: [
        {
          label: "Weekly thesis",
          value: "01",
          body: "Current judgment, what changed, and open questions for the Agent industry.",
        },
        {
          label: "Watchlist",
          value: "02",
          body: "Mainstream and emerging agents with evidence labels — not a raw link dump.",
        },
        {
          label: "Field notes",
          value: "03",
          body: "Real workflows and reusable patterns captured as they show up in the wild.",
        },
        {
          label: "Storage implications",
          value: "04",
          body: "Where agents keep workspace state, sandboxes, logs, and replay — a side lens, not the whole product.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "可审计状态",
      title: "流水线留在 Git 里的结果",
      body: "Runner 在写入边界内更新每周论点、观察名单、现场笔记与存储影响。候选被纳入观察名单或周报后，每次变化都能在仓库历史里核对。",
      cards: [
        { label: "每周论点", value: "01", body: "当前判断、已变化点，以及对 Agent 产业的开放问题。" },
        { label: "观察名单", value: "02", body: "主流与新兴 agent，并标注证据强度——不是原始链接堆。" },
        {
          label: "现场笔记",
          value: "03",
          body: "记录真实工作流和可复用模式，随公开信号积累。",
        },
        {
          label: "存储影响",
          value: "04",
          body: "Agent 把工作区、沙箱、日志与回放放在哪里——侧重视角，不是产品全部。",
        },
      ],
    },
  },
  celagent: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "Persistence model",
      title: "BOS is authority; the worker is a cache",
      body: "Each turn dual-writes a local worker SQLite cache and BOS with CAS optimistic locking. Restore reads BOS first; the worker is only a miss fallback (RPO≈0).",
      cards: [
        {
          label: "Pi TUI turn",
          body: "The pi-coding-agent engine handles interaction, tools, and models. A turn_end hook persists without blocking the chat.",
        },
        {
          label: "Worker cache",
          body: "Local SQLite holds a fast cache with a short write budget. Lost cache can be rebuilt from BOS.",
        },
        {
          label: "BOS CAS write",
          body: "Direct BOS writes use If-Match optimistic locking, idempotent dedupe, and an async queue. sessions/<id>.json keeps full turns.",
        },
        {
          label: "Cross-machine restore",
          body: "`celagent <id>` loads history from BOS. `list`, `doctor`, and `cas-probe` check recoverability and conditional-write readiness.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "持久化模型",
      title: "BOS 是权威，worker 是缓存",
      body: "每轮双写本地 worker SQLite 缓存与带 CAS 乐观锁的 BOS。恢复先读 BOS；worker 仅作 miss 回退（RPO≈0）。",
      cards: [
        {
          label: "Pi TUI 回合",
          body: "pi-coding-agent 引擎负责交互、工具与模型。turn_end 钩子在不阻塞对话的情况下持久化。",
        },
        {
          label: "Worker 缓存",
          body: "本地 SQLite 做快速缓存，写入预算很短。缓存丢失可从 BOS 重建。",
        },
        {
          label: "BOS CAS 写入",
          body: "直写 BOS 使用 If-Match 乐观锁、幂等去重与异步队列。sessions/<id>.json 保留完整轮次。",
        },
        {
          label: "跨机恢复",
          body: "`celagent <id>` 从 BOS 加载历史。`list`、`doctor`、`cas-probe` 检查可恢复性与条件写就绪。",
        },
      ],
    },
  },
};

export const productEvidenceModel = (slug: ProductSlug, locale: Locale) =>
  productEvidenceModels[slug]?.[locale] ?? null;

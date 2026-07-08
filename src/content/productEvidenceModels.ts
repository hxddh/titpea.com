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
      kicker: "Core Markdown files",
      title: "A simple structure for high-signal tracking",
      body: "Each file has a clear job. Daily and weekly folders append signals; automation and cloud-agent workflows keep the cadence without turning the repo into a platform.",
      cards: [
        {
          label: "Thesis",
          value: "01",
          body: "`radar.md` holds current thesis, changed thesis, and open questions.",
        },
        {
          label: "Watchlist",
          value: "02",
          body: "`agent-watchlist.md` tracks mainstream and emerging agents with evidence labels.",
        },
        {
          label: "Field notes",
          value: "03",
          body: "`user-field-notes.md` and `playbook.md` capture real workflows and reusable patterns.",
        },
        {
          label: "Storage angle",
          value: "04",
          body: "`storage-angle.md` records workspace, sandbox, artifact, log, and replay implications.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "核心 Markdown 文件",
      title: "用简单结构跟踪高信号变化",
      body: "每个文件职责清晰。`daily/` 与 `weekly/` 追加信号；自动化与 cloud-agent 工作流维持节奏，不把仓库做成平台。",
      cards: [
        { label: "判断", value: "01", body: "`radar.md` 维护当前判断、已变化判断和开放问题。" },
        { label: "观察名单", value: "02", body: "`agent-watchlist.md` 跟踪主流与新兴 agent，并标注证据强度。" },
        {
          label: "现场与 playbook",
          value: "03",
          body: "`user-field-notes.md` 与 `playbook.md` 记录真实工作流和可复用模式。",
        },
        {
          label: "存储视角",
          value: "04",
          body: "`storage-angle.md` 记录 workspace、sandbox、产物、日志与回放相关影响。",
        },
      ],
    },
  },
};

export const productEvidenceModel = (slug: ProductSlug, locale: Locale) =>
  productEvidenceModels[slug]?.[locale] ?? null;

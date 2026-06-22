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
          label: "Write the inventory",
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
        { label: "写出清单", body: "最终留下可分析的对象清单，而不只是终端输出。" },
      ],
    },
  },
  storageops: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "A diagnosis path",
      title: "From the symptom to a bounded next step",
      body: "StorageOps turns the evidence you bring into a diagnosis a person can inspect and act on. It does not modify the storage account for you.",
      cards: [
        {
          label: "Classify the case",
          body: "Distinguish access, signing, throttling, consistency, migration, networking, or another storage domain.",
        },
        {
          label: "Read the evidence",
          body: "Use focused tools for logs, policies, XML errors, HTTP traces, and prior sessions instead of treating every input as plain text.",
        },
        {
          label: "Return a bounded report",
          body: "Separate likely cause, confidence, supporting evidence, and the change a person should make.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "diagnosisFlow",
      kicker: "一次诊断如何展开",
      title: "从症状到可执行的下一步",
      body: "StorageOps 把你提供的证据整理成可以检查和执行的诊断结论，不会替你修改存储账号。",
      cards: [
        { label: "先归类", body: "区分鉴权、签名、限流、一致性、迁移、网络等具体领域。" },
        {
          label: "再读证据",
          body: "按需解析日志、策略、XML 错误、HTTP trace 和历史会话，而不是把所有输入当作一段文本。",
        },
        { label: "给出有边界的结论", body: "报告分别说明可能原因、置信度、关键依据，以及需要人来执行的修改。" },
      ],
    },
  },
  httpmon: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "How capture works",
      title: "The command keeps running normally",
      body: "httpmon adds a local observation layer around one child process. The process still gets its response stream; the terminal gets the HTTP conversation beside it.",
      cards: [
        {
          label: "Wrap",
          value: "01",
          body: "Run `httpmon` before curl, aws, Python, Node, or another proxy-aware command.",
        },
        {
          label: "Inject",
          value: "02",
          body: "It supplies the local proxy address and an ephemeral CA through the child process environment.",
        },
        {
          label: "Inspect",
          value: "03",
          body: "Read request and response headers, decoded body previews, status, and timing in real time.",
        },
        {
          label: "Keep",
          value: "04",
          body: "Write NDJSON, HAR, or a recording when the session needs to be replayed or shared.",
        },
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "trafficFlow",
      kicker: "流量如何被看到",
      title: "原命令照常运行，终端同时看到交互",
      body: "httpmon 只在一个子进程周围加上本地观察层。子进程照常收到响应，终端同时显示 HTTP 交互。",
      cards: [
        { label: "运行命令", value: "01", body: "在 curl、aws、Python、Node 或其他支持代理的命令前加上 `httpmon`。" },
        { label: "临时接管", value: "02", body: "它只为这个子进程注入本地代理地址和临时 CA。" },
        { label: "查看请求", value: "03", body: "实时查看请求和响应头、解压后的响应体预览、状态码和耗时。" },
        { label: "保存现场", value: "04", body: "需要复现或分享时，导出 NDJSON、HAR 或录制文件。" },
      ],
    },
  },
};

export const productEvidenceModel = (slug: ProductSlug, locale: Locale) =>
  productEvidenceModels[slug]?.[locale] ?? null;

export type ProductEvidenceSummary = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

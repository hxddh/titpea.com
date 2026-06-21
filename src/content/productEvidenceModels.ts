import { storageOpsEvidenceFacts } from "./productEvidenceFacts";
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
      variant: "agentTopology",
      kicker: "Agent topology",
      title: "Skills decide; tools collect evidence",
      body: "StorageOps gives Pi domain skills, registered tools, parsers, analyzers, reports, and secret-redaction rules.",
      cards: storageOpsEvidenceFacts.capabilityCards.map((card) => ({
        label: card.label.en,
        value: card.value,
        body: card.body.en,
      })),
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "agentTopology",
      kicker: "诊断结构",
      title: "技能做判断，工具找证据",
      body: "StorageOps 的核心不是提示词，而是给 Pi 一套对象存储诊断能力：领域技能、注册工具、解析器、分析器、报告和凭据脱敏。",
      cards: storageOpsEvidenceFacts.capabilityCards.map((card) => ({
        label: card.label.zh,
        value: card.value,
        body: card.body.zh,
      })),
    },
  },
  httpmon: {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "runChain",
      kicker: "Capture path",
      title: "Wrap, inspect, keep moving",
      body: "httpmon puts inspection around an existing command. The command still receives its normal response stream; httpmon shows the traffic beside it.",
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
      variant: "runChain",
      kicker: "工作方式",
      title: "不改原命令，直接看请求",
      body: "httpmon 只是在原命令外包一层本地代理。子进程照常接收响应，终端同时显示请求和响应。",
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

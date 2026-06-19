import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import type { ProductEvidenceModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

export const productEvidenceModels: Partial<Record<ProductSlug, Record<Locale, ProductEvidenceModel>>> = {
  "s3-turbo-list": {
    en: {
      id: "evidence",
      kind: "evidence",
      variant: "runChain",
      kicker: "Evidence chain",
      title: "One run from discovery to verification",
      body: "s3-turbo-list is not a pile of knobs. It pulls the error-prone parts of large object-storage list and diff runs into the default path.",
      cards: s3EvidenceFacts.deepDiveCards.map((card, index) => ({
        label: card.label.en,
        value: String(index + 1).padStart(2, "0"),
        body: card.body.en,
      })),
      benchmark: [
        { label: "Third-party OSS run", value: "1M objects" },
        ...s3EvidenceFacts.parallelRuns.map((run) => ({
          label: run.label,
          value: `${run.seconds}s`,
          body: `${run.throughput.toLocaleString()} objects/s`,
        })),
      ],
    },
    zh: {
      id: "evidence",
      kind: "evidence",
      variant: "runChain",
      kicker: "证据链",
      title: "从发现到校验，一次跑完",
      body: "s3-turbo-list 不靠堆参数取胜，而是把大型对象存储 list / diff 最容易出错的环节放进默认流程。",
      cards: s3EvidenceFacts.deepDiveCards.map((card, index) => ({
        label: card.label.zh,
        value: String(index + 1).padStart(2, "0"),
        body: card.body.zh,
      })),
      benchmark: [
        { label: "第三方 OSS 测试", value: "1M 对象" },
        ...s3EvidenceFacts.parallelRuns.map((run) => ({
          label: run.label,
          value: `${run.seconds}s`,
          body: `${run.throughput.toLocaleString()} objects/s`,
        })),
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

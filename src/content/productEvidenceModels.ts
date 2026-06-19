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
      title: "从发现到校验，一次运行闭环",
      body: "s3-turbo-list 的重点不是多给参数，而是把大型对象存储 list / diff 里最容易出错的步骤收进默认路径。",
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
      kicker: "Agent 拓扑",
      title: "技能决定判断，工具负责取证",
      body: "StorageOps 的核心不是提示词，而是给 Pi 提供领域技能、注册工具、解析器、分析器、报告和凭据脱敏规则。",
      cards: storageOpsEvidenceFacts.capabilityCards.map((card) => ({
        label: card.label.zh,
        value: card.value,
        body: card.body.zh,
      })),
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

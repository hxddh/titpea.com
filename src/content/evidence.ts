import { pathFor, type Locale } from "../lib/site";
import { s3EvidenceFacts, storageOpsEvidenceFacts } from "./productEvidenceFacts";
import { s3TurboListFacts } from "./productFacts";

export type ProductEvidence = {
  label: string;
  title: string;
  body: string;
  href: string;
  stats: string[];
};

export const s3BenchmarkEvidence = s3EvidenceFacts;

export const productEvidence = (locale: Locale): ProductEvidence[] => {
  const isZh = locale === "zh";

  return [
    {
      label: "s3-turbo-list benchmark",
      title: isZh ? "1M 对象，~55s 到 ~19s" : "1M objects, ~55s to ~19s",
      body: isZh
        ? "最新 README 引用的第三方 Alibaba Cloud OSS 测试：1M 对象单流约 55s，`-c 8` 约 19s。默认路径会自动发现和并发。"
        : "The current README cites a third-party Alibaba Cloud OSS benchmark: 1M objects in ~55s single-stream and ~19s with `-c 8`.",
      href: pathFor(locale, "s3-turbo-list"),
      stats: [s3EvidenceFacts.version, s3TurboListFacts.licenseLabel ?? "current license", "agent-safe JSON"],
    },
    {
      label: "StorageOps agent package",
      title: isZh ? "Pi 的对象存储诊断层" : "The storage diagnosis layer for Pi",
      body: isZh
        ? "StorageOps 不是提示词集合。它把诊断技能、取证工具、确定性脚本和回归用例装进 Pi，让诊断路径和证据边界更清楚。"
        : "StorageOps is not a prompt pack. It gives Pi skills, tools, helpers, and evals that constrain the diagnostic path and evidence boundary.",
      href: pathFor(locale, "storageops"),
      stats: [
        `${storageOpsEvidenceFacts.skillsCount} diagnostic skills`,
        `${storageOpsEvidenceFacts.toolsCount} Pi tools`,
        "golden-case evals",
      ],
    },
  ];
};

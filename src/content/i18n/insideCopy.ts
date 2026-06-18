import { storageOpsEvidenceFacts } from "../productEvidenceFacts";

export const insideValueCopy = {
  s3MetricValues: {
    en: {
      "zero hints": "zero hints",
    },
    zh: {
      "zero hints": "零 hints",
    },
  },
  s3ArtifactLabels: {
    en: {
      artifacts: "artifacts",
      "provider logs": "provider logs",
    },
    zh: {
      artifacts: "产物",
      "provider logs": "服务商日志",
    },
  },
  storageOpsValues: {
    en: {
      "15 diagnostic skills": "15 diagnostic skills",
      "4 Pi tools": "4 Pi tools",
      "deterministic helpers": "deterministic helpers",
      "eval cases": "eval cases",
    },
    zh: {
      "15 diagnostic skills": `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`,
      "4 Pi tools": `${storageOpsEvidenceFacts.toolsCount} 个 Pi 工具`,
      "deterministic helpers": "确定性脚本",
      "eval cases": "回归用例",
    },
  },
} as const;

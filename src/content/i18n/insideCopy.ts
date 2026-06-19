import { storageOpsEvidenceFacts } from "../productEvidenceFacts";

export const insideValueCopy = {
  s3MetricValues: {
    en: {
      "zero hints": "zero hints",
    },
    zh: {
      "zero hints": "无需 hints",
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
      "21 tools": "21 tools",
      "Web API + MCP": "Web API + MCP",
      "safe reports": "safe reports",
    },
    zh: {
      "15 diagnostic skills": `${storageOpsEvidenceFacts.skillsCount} 个诊断技能`,
      "21 tools": `${storageOpsEvidenceFacts.toolsCount} 个工具`,
      "Web API + MCP": "Web API + MCP",
      "safe reports": "安全报告",
    },
  },
} as const;

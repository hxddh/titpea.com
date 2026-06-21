export const visualCopy = {
  s3Benchmark: {
    en: {
      kicker: "v0.21.0 field benchmark",
      title: "1M objects in 18.8s",
      body: "2 vCPU host · default list QPS · OSS Beijing. Observed under constraint, not a throughput ceiling.",
      objectUnit: "objects",
      chartLabel: "Elapsed time by concurrency",
      chartCaption: "c=8 is the Parquet reference run. c=24 is a scheduling outlier, not a general limit.",
      outputPrefix: "Output",
    },
    zh: {
      kicker: "v0.21.0 实测",
      title: "18.8 秒列举 100 万对象",
      body: "2 vCPU 云主机 · 默认 list QPS · 北京 OSS。受限环境实测，不是性能上限。",
      objectUnit: "对象",
      chartLabel: "不同并发下的完成耗时",
      chartCaption: "c=8 是 Parquet 参考运行；c=24 是特定调度异常，不代表通用性能边界。",
      outputPrefix: "输出",
    },
  },
  storageAgent: {
    en: {
      kicker: "Pi Agent",
      title: "Skills and tools define the diagnosis",
      body: "StorageOps wraps Pi with S3 skills, registered tools, parsers, analyzers, memory, reports, API surfaces, and secret redaction.",
      skillsSuffix: "diagnostic skills",
      skillsBody:
        "Security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle, migration, consistency, logs, notifications, and triage.",
      toolsSuffix: "registered tools",
      helpersTitle: "parsers and analyzers",
      helpersBody:
        "Parse logs and HTTP traces, analyze IAM, CORS, throttling, network, replication, cost, and policy fixes.",
      evalsTitle: "safe reports",
      evalsBody: "Secrets are redacted; reports separate root cause, evidence, confidence, and remediation.",
      flow: ["input: error, command, config, redacted log", "output: cause, evidence, confidence, next checks"],
    },
    zh: {
      kicker: "Pi Agent",
      title: "诊断能力来自技能和工具",
      body: "StorageOps 围绕 Pi 组织 S3 诊断技能、注册工具、解析器、分析器、历史记录、报告、API 和凭据脱敏。",
      skillsSuffix: "个诊断技能",
      skillsBody: "覆盖安全、协议兼容、CLI/SDK、性能、网络、生命周期、迁移、一致性、日志、通知和初步归类。",
      toolsSuffix: "个注册工具",
      helpersTitle: "解析器和分析器",
      helpersBody: "解析日志和 HTTP trace，分析 IAM、CORS、限流、网络、复制、成本，并给出 policy 修改建议。",
      evalsTitle: "安全报告",
      evalsBody: "凭据会先脱敏；报告区分根因、证据、置信度和修复步骤。",
      flow: ["输入：错误、命令、配置、脱敏日志", "输出：原因、证据、置信度、下一步建议"],
    },
  },
  screenshots: {
    en: {
      worldClockLight: "World Clock light theme timezone feed screenshot",
      worldClockDark: "World Clock dark theme timezone feed screenshot",
      douban: "Douban Movie Rating Assistant showing IMDb, Rotten Tomatoes, and Metacritic inside a Douban movie page",
    },
    zh: {
      worldClockLight: "世界时钟浅色主题时区列表截图",
      worldClockDark: "世界时钟深色主题时区列表截图",
      douban: "豆瓣电影评分助手在豆瓣电影页中显示 IMDb、Rotten Tomatoes 和 Metacritic 评分的截图",
    },
  },
} as const;

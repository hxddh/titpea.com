export const visualCopy = {
  s3Benchmark: {
    en: {
      kicker: "Current evidence",
      title: "1M objects, ~19s at -c 8",
      body: "The benchmark chart stays on checkable measurements; product behavior lives in the list / diff path.",
      objectUnit: "objects",
      barsLabel: "Parallel scan throughput",
      barsHead: ["Benchmark path", "approx objects/s"],
      pathLabel: "Default list / diff path",
      pathBody: "Segmented list, resume, trace JSONL, dry-run plans, and manifests sit on one path.",
      outputPrefix: "Output",
    },
    zh: {
      kicker: "当前证据",
      title: "1M 对象，-c 8 约 19s",
      body: "图表只放可复查的测试结果，产品能力则放回 list / diff 路径。",
      objectUnit: "对象",
      barsLabel: "并发扫描吞吐量",
      barsHead: ["测试路径", "约 objects/s"],
      pathLabel: "默认 list / diff 路径",
      pathBody: "分段 list、恢复、trace JSONL、dry-run plan 和运行记录，是同一条路径。",
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
      title: "诊断能力由 skills 和 tools 定义",
      body: "StorageOps 在 Pi 周围组织 S3 skills、注册工具、解析器、分析器、历史记录、报告、API 形态和凭据脱敏。",
      skillsSuffix: "个诊断技能",
      skillsBody: "覆盖安全、协议兼容、CLI/SDK、性能、网络、生命周期、迁移、一致性、日志、通知和初步分诊。",
      toolsSuffix: "个注册工具",
      helpersTitle: "解析器和分析器",
      helpersBody: "解析日志和 HTTP trace，分析 IAM、CORS、限流、网络、复制、成本和 policy 修复。",
      evalsTitle: "安全报告",
      evalsBody: "凭据会先脱敏；报告区分根因、证据、置信度和修复步骤。",
      flow: ["输入：错误、命令、配置、脱敏日志", "输出：原因、证据、置信度、下一步检查"],
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

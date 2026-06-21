export const visualCopy = {
  s3Benchmark: {
    en: {
      kicker: "v0.21.0 field benchmark",
      title: "1M objects in 18.8s on a small cloud host",
      body: "Measured with default list QPS on a 2 vCPU, 3.4 GiB host. s3-turbo-list discovers boundaries and keeps splitting work while capacity remains; this is an observed run, not a throughput ceiling.",
      objectUnit: "objects",
      barsLabel: "Observed throughput by concurrency in this environment",
      barsHead: ["Concurrency", "objects/s · elapsed"],
      pathLabel: "What the run demonstrates",
      pathBody:
        "The service-side limit appears near 55K objects/s in this run. More concurrency is not automatically better, while automatic discovery and runtime splitting keep the work moving.",
      outputPrefix: "Output",
      formatLabel: "Output formats at c=8",
      versionLabel: "Single-segment change from v0.20.0",
      checkLabel: "Reliability checks",
      checks: [
        { value: "6/6", label: "compat-probe passed" },
        { value: "0", label: "HTTP errors" },
        { value: "2.9%", label: "c=64, three-run deviation" },
      ],
    },
    zh: {
      kicker: "v0.21.0 实测",
      title: "低配置云主机，18.8 秒列举 100 万对象",
      body: "测试使用 2 vCPU、3.4 GiB 云主机和默认 list QPS。s3-turbo-list 会自动发现边界，并在仍有可用性能时继续拆分任务；这是一组实测结果，不是性能上限。",
      objectUnit: "对象",
      barsLabel: "此环境下，不同并发的实测吞吐",
      barsHead: ["并发", "对象/s · 耗时"],
      pathLabel: "这组测试说明什么",
      pathBody:
        "本次服务端限制大约出现在 55K 对象/s 附近。提高并发并不一定更快；自动发现和运行时拆分会让任务持续利用可用性能。",
      outputPrefix: "输出",
      formatLabel: "输出格式，c=8",
      versionLabel: "单段扫描，对比 v0.20.0",
      checkLabel: "可靠性检查",
      checks: [
        { value: "6/6", label: "compat-probe 通过" },
        { value: "0", label: "HTTP 错误" },
        { value: "2.9%", label: "c=64 三轮标准差" },
      ],
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

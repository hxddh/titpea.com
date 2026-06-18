export const visualCopy = {
  s3Benchmark: {
    en: {
      kicker: "Current evidence",
      title: "1M objects, ~19s at -c 8",
      body: "The README cites a third-party Alibaba Cloud OSS benchmark. The chart stays on checkable measurements; product behavior lives in the automation path.",
      objectUnit: "objects",
      barsLabel: "Parallel scan throughput",
      barsHead: ["Benchmark path", "approx objects/s"],
      pathLabel: "Default automation path",
      pathBody: "Startup discovery, runtime splitting, dry-run plans, and manifests sit on one default path.",
      outputPrefix: "Output",
    },
    zh: {
      kicker: "当前证据",
      title: "1M 对象，-c 8 约 19s",
      body: "README 引用的第三方 Alibaba Cloud OSS 测试。页面只把可复查的测试结果放进图表，产品能力则放回自动化路径。",
      objectUnit: "对象",
      barsLabel: "并发扫描吞吐量",
      barsHead: ["测试路径", "约 objects/s"],
      pathLabel: "默认自动化路径",
      pathBody: "自动发现、运行时拆分、dry-run plan 和运行记录，是同一条默认路径。",
      outputPrefix: "输出",
    },
  },
  storageAgent: {
    en: {
      kicker: "Pi Agent package",
      title: "Skills and tools define the diagnosis",
      body: "StorageOps installs object-storage diagnosis into Pi: domain skills choose the path, while tools and helpers collect bounded evidence.",
      skillsSuffix: "diagnostic skills",
      skillsBody:
        "Security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle, migration, consistency, logs, notifications, and triage.",
      toolsSuffix: "Pi extension tools",
      helpersTitle: "deterministic helper scripts",
      helpersBody:
        "Inspect policy, SigV4, payload hashes, ETags, throttling, access logs, migration estimates, and endpoint reachability.",
      evalsTitle: "golden-case evals",
      evalsBody: "Regression cases keep agent output stable as skills and tools evolve.",
      flow: ["input: error, command, config, redacted log", "output: cause, evidence, confidence, next checks"],
    },
    zh: {
      kicker: "Pi Agent package",
      title: "诊断能力由 skills 和 tools 定义",
      body: "StorageOps 给 Pi 安装一套对象存储诊断能力：领域技能负责判断路径，扩展工具和脚本负责有边界地取证。",
      skillsSuffix: "个诊断技能",
      skillsBody: "覆盖安全、协议兼容、CLI/SDK、性能、网络、生命周期、迁移、一致性、日志、通知和初步分诊。",
      toolsSuffix: "个 Pi 扩展工具",
      helpersTitle: "确定性脚本",
      helpersBody: "检查 policy、SigV4、payload hash、ETag、限流、访问日志、迁移估算和端点可达性。",
      evalsTitle: "回归用例",
      evalsBody: "用可复现 case 约束 agent 输出，避免诊断口径漂移。",
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

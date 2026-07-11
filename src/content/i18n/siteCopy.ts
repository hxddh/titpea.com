export const ui = {
  en: {
    productIndex: "hxddh / tools",
    homeTitle: "Local-first tools that leave the evidence visible",
    homeDescription:
      "By hxddh — local-first tools for investigating S3-compatible storage and reading complex documents.",
    homeLead:
      "Investigate S3-compatible storage with read-only checks, or analyze documents with the source page beside the answer. Built by hxddh; small enough to inspect.",
    featuredLabel: "Featured tools",
    featuredTitle: "Two tools, two kinds of evidence",
    featuredStorageText:
      "Ask about a bucket, object, log, or error. The agent performs read-only checks and returns the inspected evidence behind its conclusion.",
    featuredPagewiseText:
      "Open a PDF, keep the source page beside the answer, and analyze sections, tables, or trends with the model you choose.",
    principlesLabel: "Working principles",
    principlesTitle: "Small enough to inspect",
    principlesLead:
      "The tools do different jobs, but they share the same boundary: show what was inspected and leave the final decision with you.",
    principles: [
      {
        title: "Evidence stays visible",
        body: "Source pages, object metadata, logs, and tool activity sit beside the conclusion.",
      },
      {
        title: "Local before hosted",
        body: "Files, imported evidence, settings, and keys stay on the machine wherever the workflow allows.",
      },
      {
        title: "Read-only by default",
        body: "Storage checks do not mutate cloud state, and data movement requires explicit approval.",
      },
    ],
    storageLine: "Object storage",
    storageTitle: "Storage tools for separate jobs",
    personalLine: "Knowledge & personal tools",
    personalTitle: "Documents, research, time zones, film",
    aboutTitle: "About",
    aboutDescription:
      "About hxddh — building local-first tools for object storage investigations and document analysis.",
    aboutHeadline: "hxddh",
    aboutLead:
      "I build local-first tools for work that benefits from evidence: investigating object storage and reading complex documents.",
    productsLabel: "Product lines",
    profileLabel: "Profile",
    profileTitle: "Two lines, one habit",
    profileBody: [
      "My background is in cloud object storage. That work became focused tools for inventory, protocol inspection, and read-only diagnosis.",
      "The same habit shapes PageWise: keep the source page beside the answer, expose what the agent read, and let the user decide what to trust.",
      "Across both lines, I prefer narrow tools, visible evidence, local state, and explicit consent before data moves.",
    ],
    focusLabel: "Working principles",
    focusItems: ["Evidence over claims", "Local before hosted", "Read-only by default", "Narrow tools, open source"],
  },
  zh: {
    productIndex: "hxddh / 工具",
    homeTitle: "本地优先，也把依据留在你眼前",
    homeDescription: "hxddh 的作品——用于排查 S3 兼容存储、阅读复杂文档的本地优先工具。",
    homeLead: "用只读检查排查 S3 兼容存储，或对着原文页面分析文档。工具保持小而透明，结果可以复核。",
    featuredLabel: "重点工具",
    featuredTitle: "两种工具，两类可见依据",
    featuredStorageText: "向它询问存储桶、对象、日志或报错。agent 只读检查，并把结论背后的现场依据一起留下。",
    featuredPagewiseText: "打开 PDF，让原文页面与回答并排，用你选择的模型分析段落、表格或趋势。",
    principlesLabel: "工作原则",
    principlesTitle: "小到可以检查",
    principlesLead: "这些工具处理不同问题，但共享同一条边界：展示检查过什么，把最终判断留给你。",
    principles: [
      { title: "依据保持可见", body: "原文页面、对象元数据、日志与工具活动都放在结论旁边。" },
      { title: "本地优先", body: "只要工作流允许，文件、导入材料、设置与密钥都留在本机。" },
      { title: "默认只读", body: "存储检查不改云端状态；涉及数据移动时，先明确征得同意。" },
    ],
    storageLine: "对象存储",
    storageTitle: "各自解决一个问题的存储工具",
    personalLine: "知识与个人工具",
    personalTitle: "文档、研究、时区与观影",
    aboutTitle: "关于",
    aboutDescription: "关于 hxddh——为对象存储排查与文档分析制作本地优先工具。",
    aboutHeadline: "hxddh",
    aboutLead: "我做本地优先、能看见依据的工具，主要解决两类问题：对象存储排查，以及复杂文档阅读。",
    productsLabel: "产品线",
    profileLabel: "简介",
    profileTitle: "两条线，同一个习惯",
    profileBody: [
      "我的工作背景是云对象存储。这些经验逐渐变成一组专注的工具，用来做清单、协议观察和只读诊断。",
      "同一个习惯也延伸到 PageWise：让原文页面和回答并排，显示 agent 读过什么，把最终判断留给用户。",
      "两条产品线共享几条原则：工具范围要窄，依据要可见，状态尽量留在本机，移动数据前明确征得同意。",
    ],
    focusLabel: "工作原则",
    focusItems: ["依据胜过宣传", "本地优先于托管", "默认只读", "工具专注、源码开放"],
  },
} as const;

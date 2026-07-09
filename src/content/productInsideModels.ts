import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

export const productInsideModels: Record<ProductSlug, Record<Locale, ProductInsideModel>> = {
  "s3-turbo-list": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "What it does",
      title: "Answers for large buckets",
      body: "One CLI for the two questions that matter before a migration or investigation: what is here, and what changed?",
      panel: {
        kind: "s3Purpose",
        label: "What s3-turbo-list is for",
        items: [
          {
            label: "LIST",
            title: "Know what is in a bucket",
            body: "Turn a large S3-compatible bucket into an analysis-ready object list without hand-tuning a scanner first.",
          },
          {
            label: "DIFF",
            title: "Know what changed between two buckets",
            body: "Compare source and target object metadata, then work from one ordered difference dataset.",
          },
        ],
        boundaryLabel: "Not a sync engine",
        boundary:
          "s3-turbo-list does not copy objects or replace a storage browser. It produces a reliable basis for the next decision.",
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "它解决什么",
      title: "先回答大桶里的两个问题",
      body: "迁移、排查或盘点之前，先弄清两件事：桶里有什么，以及两端到底差了什么。",
      panel: {
        kind: "s3Purpose",
        label: "s3-turbo-list 的用途",
        items: [
          {
            label: "LIST",
            title: "弄清桶里有什么",
            body: "把大规模 S3 兼容存储写成可分析的 Parquet list，不必先手动调一套扫描参数。",
          },
          {
            label: "DIFF",
            title: "弄清两端差了什么",
            body: "对比源端和目标端的对象元数据，得到一份有序的差异结果。",
          },
        ],
        boundaryLabel: "不负责同步对象",
        boundary: "它不复制对象，也不替代存储浏览器；它负责给后续判断留下可靠的依据。",
      },
    },
  },
  "storage-agent-workbench": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Evidence first",
      title: "Ask about your storage, get evidence back",
      body: "Start a chat or pick a task — bucket config, access logs, inventory, errors, or cost. The agent plans read-only checks, works in DuckDB on imported evidence, and cites the log rows or config lines behind each finding.",
      panel: {
        kind: "agentEvidence",
        label: "Sample finding with citations",
        eyebrow: "Evidence sample",
        title: "Public-access audit · logs-prod",
        metrics: [
          {
            label: "Finding",
            value: "GET on public prefix",
            body: "Anonymous reads concentrate on `exports/` overnight; policy allows GetObject for that prefix.",
          },
          {
            label: "Cited log",
            value: "access.log:4412",
            body: "`REST.GET.OBJECT exports/… 200` from an unauthenticated principal.",
          },
          {
            label: "Cited config",
            value: "bucket policy",
            body: "`s3:GetObject` on `arn:…:exports/*` with Principal `*`.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "先看证据",
      title: "问一句存储，拿回一份证据",
      body: "开对话或选任务——桶配置、访问日志、清单、错误或成本。agent 规划只读检查，在 DuckDB 里分析导入材料，每条结论都带上对应的日志行或配置行。",
      panel: {
        kind: "agentEvidence",
        label: "带引用的结论样例",
        eyebrow: "证据样例",
        title: "公开访问审查 · logs-prod",
        metrics: [
          {
            label: "结论",
            value: "公开前缀被读取",
            body: "夜间匿名 GET 集中在 `exports/`；策略允许该前缀的 GetObject。",
          },
          {
            label: "引用日志",
            value: "access.log:4412",
            body: "未认证主体 `REST.GET.OBJECT exports/… 200`。",
          },
          {
            label: "引用配置",
            value: "桶策略",
            body: "`exports/*` 上 `s3:GetObject`，Principal 为 `*`。",
          },
        ],
      },
    },
  },
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi extension + skill pack",
      title: "Storage expertise for Pi",
      body: "StorageOps gives Pi the skills, extension tools, and deterministic helpers needed to investigate S3-compatible storage from the evidence you provide.",
      panel: {
        kind: "agentEvidence",
        label: "Sample diagnosis path",
        eyebrow: "Case sample",
        title: "AccessDenied on PutObject",
        metrics: [
          {
            label: "Material in",
            value: "error + policy snippet",
            body: "You paste the exact AccessDenied message and the relevant IAM or bucket policy fragment.",
          },
          {
            label: "Skill loaded",
            value: "access / IAM path",
            body: "`detect_domain` ranks access control; Pi loads the matching StorageOps skill instead of free-form guessing.",
          },
          {
            label: "You still change",
            value: "policy by hand",
            body: "Output separates likely cause, supporting lines, and the manual fix still required from you.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi 扩展与 skill pack",
      title: "Pi 可用的对象存储 skills 与工具",
      body: "把报错、日志、配置或 trace 交给 Pi。StorageOps 提供对象存储技能、扩展工具和确定性脚本，供 Pi 按需调用。",
      panel: {
        kind: "agentEvidence",
        label: "排查路径样例",
        eyebrow: "案例样例",
        title: "PutObject 返回 AccessDenied",
        metrics: [
          {
            label: "输入材料",
            value: "报错 + 策略片段",
            body: "你贴上原始 AccessDenied 文案，以及相关 IAM 或桶策略片段。",
          },
          {
            label: "加载 skill",
            value: "鉴权 / IAM 路径",
            body: "`detect_domain` 先归到访问控制；Pi 加载对应 StorageOps skill，而不是通篇自由猜测。",
          },
          {
            label: "你来改",
            value: "策略仍手动",
            body: "输出区分可能原因、依据行，以及仍需你亲手改的部分。",
          },
        ],
      },
    },
  },
  httpmon: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "A look inside",
      title: "The command runs as before",
      body: "httpmon starts a local proxy for one subprocess. It supplies the proxy and CA through that process only, then clears the temporary setup when it exits.",
      panel: {
        kind: "agentEvidence",
        label: "Before and after wrapping",
        eyebrow: "Terminal contrast",
        title: "curl alone vs httpmon curl",
        metrics: [
          {
            label: "Without httpmon",
            value: "body only",
            body: "`curl https://api.example/health` prints the response body; status, headers, and timing stay invisible.",
          },
          {
            label: "With httpmon",
            value: "request + response",
            body: "`httpmon curl …` keeps the same body for the command, and shows method, URL, status, timing, and a decoded preview beside it.",
          },
          {
            label: "System proxy",
            value: "unchanged",
            body: "Only the child process receives proxy and temporary CA settings.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "看一眼",
      title: "命令照常运行，请求同时可见",
      body: "httpmon 只为当前子进程启动本地代理，并向它传入代理和 CA。命令退出后，临时设置会自动清理。",
      panel: {
        kind: "agentEvidence",
        label: "包装前后对照",
        eyebrow: "终端对照",
        title: "单独 curl 与 httpmon curl",
        metrics: [
          {
            label: "不用 httpmon",
            value: "只见 body",
            body: "`curl https://api.example/health` 只打印响应体；状态码、请求头和耗时都看不见。",
          },
          {
            label: "用上 httpmon",
            value: "请求 + 响应",
            body: "`httpmon curl …` 仍把同一份 body 交给命令，并在旁边显示方法、URL、状态、耗时和解压预览。",
          },
          {
            label: "系统代理",
            value: "不变",
            body: "只有子进程会收到代理和临时 CA 设置。",
          },
        ],
      },
    },
  },
  "agent-radar": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Markdown-first radar",
      title: "Signals you can edit and version",
      body: "Agent Radar keeps thesis, watchlist, field notes, playbooks, and storage implications in plain Markdown files — plus a stdlib Python CLI to scaffold, validate, and brief the repo.",
      panel: {
        kind: "agentEvidence",
        label: "radar.md excerpt",
        eyebrow: "Editable thesis",
        title: "radar.md · current week",
        metrics: [
          {
            label: "Current thesis",
            value: "Local agents win on evidence",
            body: "Coding agents that keep workspace artifacts local are easier to audit than chat-only hosted flows.",
          },
          {
            label: "Changed",
            value: "Sandbox + snapshot noise",
            body: "More products advertise sandboxes; few document snapshot retention or replay cost.",
          },
          {
            label: "Open questions",
            value: "Who owns the artifact store?",
            body: "When agents write logs, checkpoints, and playbooks, which storage path is intentional vs incidental?",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Markdown 优先雷达",
      title: "可编辑、可版本管理的信号",
      body: "Agent Radar 把判断、观察名单、现场笔记、playbook 和存储视角放在纯 Markdown 文件里，并用标准库 Python CLI 脚手架化、校验和生成简报。",
      panel: {
        kind: "agentEvidence",
        label: "radar.md 摘录",
        eyebrow: "可编辑判断",
        title: "radar.md · 本周",
        metrics: [
          {
            label: "当前判断",
            value: "本地 agent 更易审计",
            body: "把工作区产物留在本地的 coding agent，比纯托管聊天流更容易核对证据。",
          },
          {
            label: "已变化",
            value: "沙箱与快照噪声",
            body: "更多产品宣传 sandbox；很少写清快照保留期或回放成本。",
          },
          {
            label: "开放问题",
            value: "产物存在谁的存储里",
            body: "当 agent 写日志、checkpoint 和 playbook 时，哪条存储路径是有意设计、哪条只是附带？",
          },
        ],
      },
    },
  },
  pagewise: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Citations first",
      title: "Read documents page by page",
      body: "Open a PDF or image, extract text locally, and ask the agent about specific pages. The preview follows what it reads so you can verify every citation.",
      panel: {
        kind: "agentEvidence",
        label: "Sample answer with page citations",
        eyebrow: "Citation sample",
        title: "Q3-report.pdf",
        metrics: [
          {
            label: "Question",
            value: "Revenue vs last quarter",
            body: "What changed in revenue quarter-over-quarter, and what drove it?",
          },
          {
            label: "Answer",
            value: "+12% QoQ",
            body: "Revenue grew 12% quarter-over-quarter, mainly from enterprise renewals in APAC.",
          },
          {
            label: "Cited pages",
            value: "p.7 · p.12",
            body: "Summary on page 7; regional breakdown table on page 12.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "先看引用",
      title: "按页读懂你的文档",
      body: "打开 PDF 或图片，在本地提取文本，向 agent 提问具体页面。预览会跟着它读的页走，方便核对每条引用。",
      panel: {
        kind: "agentEvidence",
        label: "带页码引用的回答样例",
        eyebrow: "引用样例",
        title: "Q3-report.pdf",
        metrics: [
          {
            label: "问题",
            value: "收入 vs 上季度",
            body: "收入环比有什么变化，主要驱动是什么？",
          },
          {
            label: "回答",
            value: "环比 +12%",
            body: "收入环比增长 12%，主要来自亚太区企业客户续约。",
          },
          {
            label: "引用页",
            value: "p.7 · p.12",
            body: "第 7 页摘要；第 12 页分区明细表。",
          },
        ],
      },
    },
  },
  "world-clock": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "A look inside",
      title: "Time, checked quickly",
      body: "World Clock is not a scheduling system. It is a compact context tool: open it, glance at city time, and return to the task.",
      panel: {
        kind: "agentEvidence",
        label: "Before a remote standup",
        eyebrow: "3-second check",
        title: "Work-hours glance",
        metrics: [
          {
            label: "San Francisco",
            value: "09:12 · work",
            body: "Still early local morning — good time for a shared standup.",
          },
          {
            label: "London",
            value: "17:12 · work",
            body: "Late afternoon; short window before end of day.",
          },
          {
            label: "Tokyo",
            value: "01:12 · off",
            body: "After hours — async update beats a live call.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "看一眼",
      title: "看一眼，就知道几点",
      body: "世界时钟不是排期工具。打开弹窗，一眼看清城市时间、工作时段和日期，然后继续手头的事。",
      panel: {
        kind: "agentEvidence",
        label: "远程站会前",
        eyebrow: "三秒确认",
        title: "工作时段一览",
        metrics: [
          {
            label: "旧金山",
            value: "09:12 · 工作中",
            body: "当地早晨刚开始，适合一起开短会。",
          },
          {
            label: "伦敦",
            value: "17:12 · 工作中",
            body: "接近下班，窗口已经不宽。",
          },
          {
            label: "东京",
            value: "01:12 · 休息",
            body: "已过工作时间，更适合异步同步。",
          },
        ],
      },
    },
  },
  "douban-movie-rating": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "A look inside",
      title: "Ratings without leaving Douban",
      body: "The extension adds context rather than replacing Douban: when a reliable match exists, IMDb, Rotten Tomatoes, and Metacritic appear in the page you are already reading.",
      panel: {
        kind: "agentEvidence",
        label: "One title, four scores",
        eyebrow: "In-page comparison",
        title: "Example film card",
        metrics: [
          {
            label: "Douban",
            value: "8.3",
            body: "The score you already trust on the page you are reading.",
          },
          {
            label: "IMDb · RT · MC",
            value: "7.8 · 91% · 84",
            body: "External context beside Douban so one community score is not the only signal.",
          },
          {
            label: "If no match",
            value: "stay quiet",
            body: "No reliable match means no extra numbers — Douban remains usable alone.",
          },
        ],
      },
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "看一眼",
      title: "不离开豆瓣，也能对照评分",
      body: "豆瓣电影评分助手只补充参考信息。匹配到影片后，它会把 IMDb、Rotten Tomatoes 和 Metacritic 放到豆瓣详情页，不打断原本的阅读。",
      panel: {
        kind: "agentEvidence",
        label: "同一部片，四个分数",
        eyebrow: "页内对照",
        title: "示例影片卡片",
        metrics: [
          {
            label: "豆瓣",
            value: "8.3",
            body: "你正在读的页面上，已经熟悉的分数。",
          },
          {
            label: "IMDb · RT · MC",
            value: "7.8 · 91% · 84",
            body: "在豆瓣旁补充外部参考，避免只看单一社区分。",
          },
          {
            label: "匹配失败",
            value: "保持安静",
            body: "没有可靠匹配就不显示额外分数，豆瓣页仍可单独使用。",
          },
        ],
      },
    },
  },
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug][locale];

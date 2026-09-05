import type { ProductInsideModel } from "./productPageTypes";
import type { Locale, ProductSlug } from "../lib/site";

type LocalizedText = Record<Locale, string>;

const productInside = (
  kicker: LocalizedText,
  title: LocalizedText,
  body: LocalizedText,
): Record<Locale, ProductInsideModel> => ({
  en: { id: "inside", kind: "inside", kicker: kicker.en, title: title.en, body: body.en },
  zh: { id: "inside", kind: "inside", kicker: kicker.zh, title: title.zh, body: body.zh },
});

export const productInsideModels: Partial<Record<ProductSlug, Record<Locale, ProductInsideModel>>> = {
  "s3-turbo-list": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "List and diff",
      title: "Answers for large buckets",
      body: "One CLI for the two questions that matter before a migration or investigation: what is here, and what changed?",
      panel: {
        kind: "s3Purpose",
        label: "List and diff outputs",
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
      kicker: "list 与 diff",
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
      kicker: "An investigation example",
      title: "Compare storage classes",
      body: "The investigation above compares object metadata and content to explain a storage-class difference. Open its evidence to inspect the objects behind the answer.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "调查示例",
      title: "对比对象的存储类型",
      body: "上图对比对象元数据与内容，解释存储类型差异。打开对应证据，可以查看结论涉及的对象。",
    },
  },
  storageops: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Pi extension + skill pack",
      title: "Domain skills Pi can load on demand",
      body: "Pi stays the runtime. StorageOps does not open a cloud session; diagnosis stays on material already in the chat.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "Pi 扩展与 skill pack",
      title: "按需加载的对象存储技能",
      body: "Pi 仍是运行时。StorageOps 不接入云账号；排查只根据聊天里已有的材料。",
    },
  },
  httpmon: productInside(
    { en: "Local proxy, one process", zh: "本地代理，只包住子进程" },
    { en: "The command runs as before", zh: "命令照常运行，请求同时可见" },
    {
      en: "httpmon starts a local proxy for one subprocess. It supplies the proxy and CA through that process only, then clears the temporary setup when it exits.",
      zh: "httpmon 只为当前子进程启动本地代理，并向它传入代理和 CA。命令退出后，临时设置会自动清理。",
    },
  ),
  "agent-radar": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "One research loop",
      title: "Research you can review in Git",
      body: "Markdown files hold the research. A lightweight model screens sources and another drafts the report; the runner checks proposed changes before committing them.",
      panel: {
        kind: "agentEvidence",
        label: "radar.md excerpt",
        eyebrow: "Illustrative sample",
        title: "radar.md · sample week",
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
      kicker: "一条研究循环",
      title: "在 Git 里查看研究记录",
      body: "Markdown 文件保存研究内容。轻量模型筛选来源，另一模型起草报告；程序校验修改后提交到 Git。",
      panel: {
        kind: "agentEvidence",
        label: "radar.md 摘录",
        eyebrow: "示例摘录",
        title: "radar.md · 示例周",
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
      kicker: "Continue reading",
      title: "Return to the same document",
      body: "Each document keeps one local conversation. Open it again to continue asking questions and annotating.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "继续阅读",
      title: "接着读同一份文件",
      body: "每份文档保留一条本地会话。再次打开时，继续提问和批注。",
    },
  },
  celagent: {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "Storage setup",
      title: "Use the same BOS configuration",
      body: "Configure the bucket and credential profile on both machines. Run `celagent doctor` to verify access and `celagent cas-probe` to check conditional writes before relying on recovery.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "存储配置",
      title: "两台机器连接同一个 BOS 桶",
      body: "在两台机器上配置桶与凭证 profile。用 `celagent doctor` 检查访问，再用 `celagent cas-probe` 检查条件写入，确认后再依赖会话恢复。",
    },
  },
  "world-machine": {
    en: {
      id: "inside",
      kind: "inside",
      kicker: "World documents",
      title: "Keep the earlier branch",
      body: "A .world document stores state and branch history. Inspect its events and replay an earlier path while exploring a different continuation.",
    },
    zh: {
      id: "inside",
      kind: "inside",
      kicker: "世界文档",
      title: "保留之前的分支",
      body: ".world 文档保存世界状态和分支历史。尝试另一条路径时，仍可查看事件和回放之前的分支。",
    },
  },
};

export const productInsideModel = (slug: ProductSlug, locale: Locale) => productInsideModels[slug]?.[locale] ?? null;

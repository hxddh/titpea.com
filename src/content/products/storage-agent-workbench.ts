import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storage-agent-workbench",
  line: "storage",
  repo: "hxddh/storage-agent-workbench",
  icon: "/assets/icons/storage-agent-workbench.webp",
  og: "/assets/og-storage-agent-workbench.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: false,
  en: {
    title: "Storage Agent",
    description:
      "Local-first desktop Agent for S3-compatible storage: read-only tools, keys in a local vault, and Issues it remembers between tasks.",
    eyebrow: "Looks after object storage",
    headline: "Your S3, looked after.",
    lead: "Read-only tools. Local keys. Issues it remembers.",
    catalog: {
      role: "S3 investigation",
      text: "Read-only S3 checks. What needs attention, remembered between tasks.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    meta: "macOS / Windows / Linux · {version} · S3-compatible · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-investigation.webp",
        alt: "Storage Agent comparing object evidence to explain a storage-class mismatch",
        width: 1800,
        height: 1290,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Findings outlast the task.",
        items: [
          { title: "Remembers your storage", body: "Accounts, buckets, and open Issues, most severe first." },
          { title: "Fix packs", body: "An AWS CLI command, a Terraform resource, or the API document." },
          { title: "Fixes you apply", body: "Generated text you run with your own credentials." },
          { title: "Verify, read-only", body: "A re-check that can resolve the Issue." },
          { title: "Opt-in watch", body: "Re-checks an account on a schedule you set." },
          { title: "Read-only tools", body: "No writes, deletes, or policy changes." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Storage credentials stay in an encrypted vault on this machine and are masked from tool output.",
          "Evidence and task history stay in the app’s local data directory.",
          "Requests go to the model and S3-compatible endpoints you configure.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Does it need a model key?",
            body: "Not for a local model: Ollama, LM Studio, vLLM, and llama.cpp run without one. Hosted providers such as OpenAI, Anthropic, DeepSeek, and OpenRouter need their key. A local model with no context window set is treated as 16,384 tokens; set a larger value in Settings if your server runs one.",
          },
          {
            title: "Will a small local model work?",
            body: "Yes. A local model with a 16k window can finish a first survey, and its first request fits in 8k. With Ollama, the app sends the planned window as `num_ctx`. Test in Settings makes one real tool call and warns when Ollama’s context is smaller than planned.",
          },
          {
            title: "What does the watch do?",
            body: "Nothing until you turn it on for an account; it is off by default. On its schedule it runs a bounded, read-only sweep and opens one task only when something new turns up and a model is configured.",
          },
          {
            title: "What happens when I upgrade from v4?",
            body: "Upgrading from v4 imports your model and storage settings, known buckets and Issues, and past results on first start. The v4 database is left untouched.",
          },
          {
            title: "What will a fix change?",
            body: "Each fix comes with a preview drawn from evidence the app holds, such as anonymous requests in the bucket’s access logs or existing lifecycle rules. When the evidence cannot tell, it says so.",
          },
          {
            title: "How is it different from StorageOps?",
            body: "StorageOps adds storage skills to Pi. Storage Agent is the full desktop app: tasks, read-only tools, local analysis, and the Issues it remembers.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Storage Agent",
    description: "面向 S3 兼容存储的本地优先桌面 Agent：只读工具，密钥在本机，发现的问题跨任务保留。",
    eyebrow: "照看对象存储",
    headline: "替你照看 S3",
    lead: "只读工具。密钥在本机。发现的问题会被记住。",
    catalog: {
      role: "S3 排查",
      text: "只读 S3 排查。需要关注的问题跨任务保留。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    meta: "macOS / Windows / Linux · {version} · S3 兼容 · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-investigation.webp",
        alt: "Storage Agent 对比对象证据，解释存储类型差异",
        width: 1800,
        height: 1290,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "发现不随任务结束",
        items: [
          { title: "记住你的存储", body: "账户、桶和未解决的问题，最严重的在前。" },
          { title: "三种修复格式", body: "AWS CLI 命令、Terraform 资源或 API 文档。" },
          { title: "修复由你执行", body: "生成修复文本，用你自己的凭证执行。" },
          { title: "只读验证", body: "重新检查，可将问题标为已解决。" },
          { title: "可选巡检", body: "按你设定的周期重查账户。" },
          { title: "工具只读", body: "不写入、不删除、不改策略。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "存储凭证保存在本机加密保险库，并在工具输出中遮蔽。",
          "证据和任务记录保存在本机应用数据目录。",
          "请求发往你配置的模型和 S3 兼容存储端点。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "没有模型密钥能用吗？",
            body: "用本地模型就不需要：Ollama、LM Studio、vLLM 和 llama.cpp 无需密钥。OpenAI、Anthropic、DeepSeek、OpenRouter 等托管服务需要各自的密钥。未设置上下文窗口的本地模型按 16,384 个 token 处理；服务端支持更大窗口时，请在设置里调高。",
          },
          {
            title: "小的本地模型够用吗？",
            body: "够用。16k 窗口的本地模型能完成首次盘点，首个请求在 8k 内就放得下。使用 Ollama 时，应用会以 `num_ctx` 把规划好的窗口发给它。设置里的“测试”会真实调用一次工具，并在 Ollama 的上下文小于规划值时提醒你。",
          },
          {
            title: "巡检会做什么？",
            body: "默认关闭，需要你为某个账户开启。开启后按周期做一次受限的只读检查，只有发现新情况且已配置模型时，才会新开一个任务。",
          },
          {
            title: "从 v4 升级会怎样？",
            body: "从 v4 升级后首次启动，会导入模型与存储设置、已知的桶和问题，以及过往结果。v4 的数据库保持原样。",
          },
          {
            title: "修复会改变什么？",
            body: "每个修复都附带影响预估，估算基于应用已有的证据，例如桶访问日志里的匿名请求或现有的生命周期规则。证据不足以判断时，它会直说。",
          },
          {
            title: "和 StorageOps 有什么不同？",
            body: "StorageOps 给 Pi 加存储技能。Storage Agent 是完整桌面应用：任务、只读工具、本地分析，以及它记住的问题。",
          },
        ],
      },
    ],
  },
});

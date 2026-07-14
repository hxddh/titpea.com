import type { DocumentAgentProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const pagewiseProduct: DocumentAgentProduct = {
  slug: "pagewise",
  name: "PageWise",
  archetype: "documentAgent",
  locales: {
    en: {
      title: "PageWise",
      description:
        "Local PDF workbench with a page-wise document agent: the model reads under budgets, and you see the trail.",
      eyebrow: "Local document agent · macOS first",
      headline: "See what the agent read, page by page",
      lead: "A local PDF workbench: the model reads with page-level tools and budgets, while read-page markers, follow-along preview, and clickable citations leave a trail you can revisit.",
      primaryCta: { label: "Download DMG", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      meta: "Tauri desktop · PDF + images · MIT · macOS DMG",
      proof: ["Page-wise reading", "Visible trail", "Files stay local", "OS keychain", "Bring your own model"],
      featuresLabel: "What you get in the workbench",
      features: [
        {
          title: "Reads page by page under a budget",
          body: "Tools force page reads under a character budget. A large lease or report does not flood the first turn with a fake full-coverage summary.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Text layer or vision — same tools",
          body: "Use the PDF text layer when it exists; use vision when the page is image-heavy. The agent calls the same page tools either way.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "The read trail becomes controls",
          body: "Clickable page citations, pages-read chips, follow-along preview, and ask-about-this on a selection let you jump the preview to what the agent just used.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Workbench around the page",
          body: "Preview with thumbnails, zoom, in-doc search, and outline or bookmark tree. One chat thread per document, saved locally, with Markdown export.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "How a session runs",
      workflow: [
        {
          title: "Open a document",
          body: "Pick or drop a PDF or image. PageWise loads the preview and indexes text locally — path permission stays on your machine.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Ask, or select then ask",
          body: "Type a question, or highlight text and ask about the selection. One thread stays with that document.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Watch the tool loop",
          body: "The agent plans outline, search, and page reads inside step and read budgets, then writes a grounded answer on the last step — a search miss is not “does not exist.”",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Follow and verify",
          body: "Jump via page citations or follow-along preview so the preview tracks what was read. Decide what to trust with the source still in view.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Local by design",
      positioning: [
        {
          title: "Documents stay on disk",
          body: "PageWise does not upload your PDFs or images to its own servers. Processing stays on your machine.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Only what the model needs leaves",
          body: "Extracted text — and optional vision payloads you enable — go to the LLM you configure. Nothing else leaves without that setup.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Keys in the OS keychain",
          body: "Credentials use macOS Keychain, Windows Credential Manager, or Linux Secret Service. Assistant and Scan (vision) can use different models, including Ollama.",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Can it run fully local with Ollama?",
          body: "Yes. Point Assistant (and Scan if needed) at an OpenAI-compatible Ollama endpoint. Files stay on disk; only the payloads you enable go to that local model.",
        },
        {
          title: "When should I enable OpenRouter web search?",
          body: "Only when a question needs outside verification. It is opt-in per call and off by default, so ordinary document Q&A is not polluted by web results.",
        },
        {
          title: "Do my files leave my computer?",
          body: "No upload to a PageWise server. Only extracted text — and optional vision payloads — go to the model endpoint you configure.",
        },
        {
          title: "How do scanned pages work?",
          body: "When a text layer is thin or missing, indexing can use a vision / multimodal Scan model. Prefer a vision-capable model for image-heavy PDFs.",
        },
        {
          title: "What platforms does it run on?",
          body: "macOS is the release focus — download a DMG from GitHub Releases. The Tauri 2 app also builds for Windows and Linux; the project is MIT-licensed.",
        },
      ],
      finalCta: "Read page by page — and return to the source",
      finalCtaLabel: "Download DMG",
    },
    zh: {
      title: "PageWise",
      description: "本地 PDF 工作台与按页 Document Agent：模型在预算内读，读迹对你可见。",
      eyebrow: "本地文档 agent · macOS 优先",
      headline: "按页读 PDF，并看见它读了什么",
      lead: "本地 PDF 工作台：模型用带预算的页级工具阅读；页引用、已读标记和跟随预览，共同留下可以回看的阅读轨迹（读迹）。",
      primaryCta: { label: "下载 DMG", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      meta: "Tauri 桌面 · PDF 与图片 · MIT · macOS DMG",
      proof: ["按页阅读", "读迹可见", "文件留本地", "系统钥匙串", "自备模型"],
      featuresLabel: "工作台里有什么",
      features: [
        {
          title: "按页读，受字符预算约束",
          body: "工具强制按页读取，并受字符预算约束。大合同或长报告不会第一轮就塞满模型输入，也不会假装已经全覆盖总结。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "文本层或视觉，同一套工具",
          body: "有文本层就走文本层；扫描或图片页走视觉模型。对 Agent 来说，调用的是同一套页级工具。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "沿着读迹回到原文",
          body: "点击页码引用、已读页标记或开启跟随预览，都可以回到 Agent 刚读过的页面；选中文字后也能直接「就此提问」。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "围着页的工作台",
          body: "预览含缩略图、缩放、文内搜索与大纲或书签树。一文档一线程，本地持久化，可导出 Markdown。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "一次会话怎么跑",
      workflow: [
        {
          title: "打开文档",
          body: "选择或拖入 PDF、图片。PageWise 加载预览并在本地建索引；路径授权留在本机。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "提问，或选中再问",
          body: "在聊天里提问，或选中文字后「就此提问」。该文档只保留一条本地线程。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "看工具循环",
          body: "Agent 在步数与读预算内做大纲、搜索与按页读取，最后一步写出有依据的回答。搜索未命中不等于「文档里没有」。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "跟随并核对",
          body: "点页引用或开跟随预览，预览跟着读过的页走。对着原文决定是否采信。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "本地优先",
      positioning: [
        {
          title: "文档留在磁盘",
          body: "PageWise 不会把 PDF 或图片上传到自己的服务器。处理在本机完成。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "只送出模型需要的内容",
          body: "提取出的文本，以及你启用的可选视觉载荷，会发到你配置的模型。除此之外不会擅自外传。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "密钥进系统钥匙串",
          body: "凭证使用 macOS Keychain、Windows Credential Manager 或 Linux Secret Service。对话与 Scan（视觉）可用不同模型，也可接 Ollama。",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "能否用 Ollama 全本地？",
          body: "可以。把对话（以及需要时的 Scan）指到兼容 OpenAI 接口的 Ollama。文件留在磁盘；只有你启用的内容会发给该本地模型。",
        },
        {
          title: "OpenRouter 网页搜索何时开？",
          body: "只在需要外网核实时按次打开。默认关闭，避免普通文档问答被网页结果干扰。",
        },
        {
          title: "我的文件会离开电脑吗？",
          body: "不会上传到 PageWise 服务器。只有提取文本，以及可选的视觉载荷，会发到你配置的模型。",
        },
        {
          title: "扫描页怎么处理？",
          body: "文本层稀薄或缺失时，索引可用视觉 / 多模态 Scan 模型。图片多的 PDF 请为 Scan 选支持视觉的模型。",
        },
        {
          title: "支持哪些平台？",
          body: "发布重点是 macOS，可从 GitHub Releases 下载 DMG。Tauri 2 应用也可构建 Windows 与 Linux；项目采用 MIT 许可。",
        },
      ],
      finalCta: "按页阅读，沿着读迹回到原文",
      finalCtaLabel: "下载 DMG",
    },
  },
};

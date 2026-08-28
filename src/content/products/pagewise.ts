import type { DocumentAgentProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.pagewise;

export const pagewiseProduct: DocumentAgentProduct = {
  slug: "pagewise",
  name: "PageWise",
  archetype: "documentAgent",
  locales: {
    en: {
      title: "PageWise",
      description:
        "Local PDF workbench with a page-wise document agent: the model reads page by page under budgets, and you see the trail.",
      eyebrow: "Local document agent",
      headline: "See what the agent read, page by page",
      lead: "A local PDF workbench that reads page by page under budgets, keeps marks on the document, and cites back to the source.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      meta: `Tauri desktop · PDF + images · MIT · ${facts.latestRelease} · macOS / Windows / Linux`,
      proof: [],
      featuresLabel: "Beside the PDF",
      features: [
        {
          title: "A character budget on each page tool",
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
          title: "Preview, outline, one thread per document",
          body: "Preview with thumbnails, zoom, in-doc search, and outline or bookmark tree. One chat thread per document, saved locally, with Markdown export.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Marks stay on the document",
          body: "Highlight and note marks persist per document, show in the preview, stay visible to the agent, and export with Markdown.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "From file to citation",
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
      positioningLabel: "What leaves the machine",
      positioning: [
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
      faqLabel: "Ollama, scans, first open",
      faq: [
        {
          title: "Fully local with Ollama",
          body: "Point Assistant (and Scan if needed) at an OpenAI-compatible Ollama endpoint. Files stay on disk; only the payloads you enable go to that local model.",
        },
        {
          title: "OpenRouter web search stays opt-in",
          body: "Only when a question needs outside verification. It is opt-in per call and off by default, so ordinary document Q&A is not polluted by web results.",
        },
        {
          title: "Scanned pages use a vision model",
          body: "When a text layer is thin or missing, indexing can use a vision / multimodal Scan model. Prefer a vision-capable model for image-heavy PDFs.",
        },
        {
          title: "First open may need an OS exception",
          body: "GitHub Releases ship macOS DMG, Windows setup/MSI, and Linux AppImage/deb. Builds are unsigned, so the first open may need an OS exception.",
        },
      ],
      finalCtaLabel: "Download latest release",
    },
    zh: {
      title: "PageWise",
      description: "本地 PDF 工作台与按页 Document Agent：模型在预算内读，阅读轨迹对你可见。",
      eyebrow: "本地文档 agent",
      headline: "按页读 PDF，并看见它读了什么",
      lead: "本地 PDF 工作台按页、按预算阅读，批注留在文档上，页引用与跟随预览带回原文。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      meta: `Tauri 桌面 · PDF 与图片 · MIT · ${facts.latestRelease} · macOS / Windows / Linux`,
      proof: [],
      featuresLabel: "在 PDF 旁边",
      features: [
        {
          title: "每个页工具都有字符预算",
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
          title: "沿着阅读轨迹回到原文",
          body: "点击页码引用、已读页标记或开启跟随预览，都可以回到 Agent 刚读过的页面；选中文字后也能直接「就此提问」。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "预览、大纲，一文档一条线程",
          body: "预览含缩略图、缩放、文内搜索与大纲或书签树。一文档一线程，本地持久化，可导出 Markdown。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "批注留在文档上",
          body: "高亮与笔记按文档保存，预览里可见，Agent 也能看到，并随 Markdown 导出。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "从打开到引用",
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
      positioningLabel: "什么会离开本机",
      positioning: [
        {
          title: "只送出模型需要的内容",
          body: "提取出的文本，以及你启用的图像内容，会发到你配置的模型。除此之外不会擅自外传。",
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
      faqLabel: "Ollama、扫描与首次打开",
      faq: [
        {
          title: "可用 Ollama 全本地",
          body: "把对话（以及需要时的 Scan）指到兼容 OpenAI 接口的 Ollama。文件留在磁盘；只有你启用的内容会发给该本地模型。",
        },
        {
          title: "OpenRouter 网页搜索默认关",
          body: "只在需要外网核实时按次打开。默认关闭，避免普通文档问答被网页结果干扰。",
        },
        {
          title: "扫描页走视觉模型",
          body: "文本层稀薄或缺失时，索引可用视觉 / 多模态 Scan 模型。图片多的 PDF 请为 Scan 选支持视觉的模型。",
        },
        {
          title: "首次打开可能需系统例外",
          body: "GitHub Releases 提供 macOS DMG、Windows 安装包与 Linux AppImage/deb。构建未公证，首次打开可能需系统例外。",
        },
      ],
      finalCtaLabel: "下载最新版本",
    },
  },
};

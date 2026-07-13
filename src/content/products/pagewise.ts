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
        "Local PDF workbench with a tool-loop document agent: it reads page by page, and you see what it read.",
      eyebrow: "Local document agent · macOS first",
      headline: "See what the agent read, page by page",
      lead: "Not dump-the-whole-PDF chat. A local workbench: the model reads with page tools and budgets, while Pages read, Follow Agent, and clickable citations make the trail navigable.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "Download DMG", href: siteConfig.externalLinks.pagewiseReleases },
      meta: "Tauri desktop · PDF + images · MIT · macOS DMG",
      proof: ["Page-wise tools", "Pages read", "Follow Agent", "Local + Keychain", "BYOK"],
      featuresLabel: "What makes it different",
      features: [
        {
          title: "Page-wise, not whole-PDF dump",
          body: "Tools force page reads under a character budget. Large docs do not flood context with a fake full-coverage summary on the first turn.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Two readable channels, one tool surface",
          body: "Native PDF text when a layer exists; vision scan when the page is image-heavy. The agent uses the same tools either way — cache, pdf-text, or vision.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Grounding is navigation",
          body: "Clickable page citations, Pages read chips, Follow Agent, and Ask about this on a selection turn the agent’s trail into controls — not just chat history.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Workbench around the page",
          body: "Preview with thumbnails, zoom, in-doc search, and outline or bookmark tree. One chat thread per document, saved locally, with Markdown export.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Assistant and Scan can split",
          body: "Bring your own OpenAI-compatible stack — OpenAI, DeepSeek, OpenRouter, Ollama, or a custom endpoint. Assistant and Scan (vision) roles can use different models.",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "Local-first credentials",
          body: "Files stay on disk. API keys live in the OS keychain. Optional OpenRouter web search is opt-in per call so document Q&A is not polluted by default.",
          intent: "capability",
          surface: "agent",
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
          body: "Type a question, or highlight text and choose Ask about this. One thread stays with that document.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Watch the tool loop",
          body: "The agent plans outline, search, and page reads inside step and read budgets, then synthesizes on the last step — a search miss is not treated as “does not exist.”",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Follow and verify",
          body: "Jump via page citations or Follow Agent so the preview tracks what was read. Decide what to trust with the source still in view.",
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
          body: "Credentials use macOS Keychain, Windows Credential Manager, or Linux Secret Service. No hosted account or shared API key.",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "How is this different from ChatPDF-style apps?",
          body: "Those often dump or chunk the whole file into chat. PageWise treats the page as first-class: tools read under budgets, and Pages read / Follow Agent make the trail visible and navigable.",
        },
        {
          title: "Which AI model does it use?",
          body: "You bring your own OpenAI-compatible provider and model. Assistant and Scan (vision) can point at different models. Keys stay in the OS keychain.",
        },
        {
          title: "Do my files leave my computer?",
          body: "No upload to a PageWise server. Only extracted text — and optional vision payloads — go to the model endpoint you configure.",
        },
        {
          title: "How do scanned pages work?",
          body: "When a text layer is thin or missing, indexing can use a vision / multimodal model. Prefer a vision-capable Scan model for image-heavy PDFs.",
        },
        {
          title: "What platforms does it run on?",
          body: "macOS is the release focus — download a DMG from GitHub Releases. The Tauri 2 app also builds for Windows and Linux; the project is MIT-licensed.",
        },
      ],
      finalCta: "Read page by page — with the trail still visible",
      finalCtaLabel: "View on GitHub",
    },
    zh: {
      title: "PageWise",
      description: "本地 PDF 工作台 × 工具循环 Document Agent：按页读，并让你看见它读了什么。",
      eyebrow: "本地文档 agent · macOS 优先",
      headline: "按页读 PDF，并看见它读了什么",
      lead: "不是把整份 PDF 塞进聊天。PageWise 是本地工作台：模型用带预算的页级工具阅读；Pages read、Follow Agent 与可点页引用，把读迹做成可导航的痕迹。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "下载 DMG", href: siteConfig.externalLinks.pagewiseReleases },
      meta: "Tauri 桌面 · PDF 与图片 · MIT · macOS DMG",
      proof: ["按页工具", "Pages read", "Follow Agent", "本地 + Keychain", "自带密钥"],
      featuresLabel: "和朴素 PDF+Chat 差在哪",
      features: [
        {
          title: "按页读，不 dump 全文",
          body: "工具强制按页读取，并受字符预算约束。大文档不会第一轮就塞爆上下文，也不会假装已经全覆盖总结。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "双通道可读，同一套工具",
          body: "有文本层走 native；扫描或图片页走 vision。Agent 不感知底层来自 cache、pdf-text 还是 vision。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Grounding 就是导航",
          body: "页码引用可点、Pages read 芯片、Follow Agent，以及选中后的「Ask about this」——把 Agent 的工作痕迹做成控件，而不只是聊天记录。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "围着「页」的工作台",
          body: "预览含缩略图、缩放、站内搜索与大纲或书签树。一文档一线程，本地持久化，可导出 Markdown。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Assistant 与 Scan 可分离",
          body: "自带兼容 OpenAI 接口的模型栈——OpenAI、DeepSeek、OpenRouter、Ollama 或自定义端点。对话与 Scan（vision）可用不同模型。",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "本地优先的凭证",
          body: "文件留在磁盘。API key 进系统钥匙串。OpenRouter 网页搜索按次 opt-in，默认关闭，避免污染文档问答。",
          intent: "capability",
          surface: "agent",
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
          body: "在聊天里提问，或选中文字后用 Ask about this。该文档只保留一条本地线程。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "看工具循环",
          body: "Agent 在步数与读预算内做大纲、搜索与按页读取，最后一步强制综合。搜索未命中不等于「文档里没有」。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "跟随并核对",
          body: "点页引用或开 Follow Agent，预览跟着读过的页走。对着原文决定是否采信。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "本地设计",
      positioning: [
        {
          title: "文档留在磁盘",
          body: "PageWise 不会把 PDF 或图片上传到自己的服务器。处理在本机完成。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "只送出模型需要的内容",
          body: "提取出的文本，以及你启用的可选 vision 载荷，会发到你配置的模型。除此之外不会擅自外传。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "密钥进系统钥匙串",
          body: "凭证使用 macOS Keychain、Windows Credential Manager 或 Linux Secret Service。没有托管账号，也没有共用 API key。",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "和 ChatPDF 一类产品差在哪",
          body: "那些常把整份文件 dump 或切块塞进聊天。PageWise 把「页」当一等公民：工具在预算内读，Pages read 与 Follow Agent 让读迹可见、可跳转。",
        },
        {
          title: "它用哪个 AI 模型",
          body: "你自带兼容 OpenAI 接口的服务与模型。Assistant 与 Scan（vision）可指向不同模型。密钥存在系统钥匙串。",
        },
        {
          title: "我的文件会离开电脑吗",
          body: "不会上传到 PageWise 服务器。只有提取文本，以及可选的 vision 载荷，会发到你配置的模型端点。",
        },
        {
          title: "扫描页怎么处理",
          body: "文本层稀薄或缺失时，索引可用 vision / 多模态模型。图片多的 PDF 请为 Scan 选支持视觉的模型。",
        },
        {
          title: "支持哪些平台",
          body: "发布重点是 macOS，可从 GitHub Releases 下载 DMG。Tauri 2 应用也可构建 Windows 与 Linux；项目采用 MIT 许可。",
        },
      ],
      finalCta: "按页读，读迹还留在眼前",
      finalCtaLabel: "查看 GitHub",
    },
  },
};

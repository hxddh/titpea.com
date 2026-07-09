import type { AgentWorkbenchProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const pagewiseProduct: AgentWorkbenchProduct = {
  slug: "pagewise",
  name: "PageWise",
  archetype: "agentWorkbench",
  locales: {
    en: {
      title: "PageWise",
      description: "Local desktop document agent for PDF text, OCR, and page-wise analysis.",
      eyebrow: "Local desktop agent",
      headline: "Ask documents page by page",
      lead: "Open a PDF or image, chat page by page, and get answers that cite the pages used. Extraction and OCR stay local; only text goes to your model.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "How a session runs", href: "/pagewise/#workflow" },
      meta: "Tauri desktop app · macOS, Windows, Linux · MIT",
      proof: ["Local-first", "BYOK"],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Open PDFs and images",
          body: "Use the file picker or drag and drop. Recent files are remembered locally.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Page preview and navigation",
          body: "Thumbnail sidebar, zoom, page jump, and in-document search with jump-to-page results.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Local text extraction",
          body: "PDF text layers are extracted with Rust pdf-extract; scanned pages and images go through system Tesseract.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Page-wise agent chat",
          body: "Streaming chat with tool-call visibility. The preview follows the page the agent is reading.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Bring your own model",
          body: "OpenAI-compatible providers — OpenAI, DeepSeek, OpenRouter, Ollama, or a custom endpoint.",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "Keys stay local",
          body: "API keys are stored with tauri-plugin-store on your machine, not in the cloud.",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "How a session runs",
      workflow: [
        {
          title: "Open a document",
          body: "Pick a PDF or image from disk. PageWise loads a preview and extracts text locally.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Ask about a page or section",
          body: "Type a question in chat. The agent plans tool calls to read the pages it needs.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Follow along in the preview",
          body: "The document view jumps to the page under analysis so you can verify what the agent read.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Review with citations",
          body: "Answers reference specific pages. You decide what to trust before acting on the output.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Which AI model does it use?",
          body: "You bring your own: choose a provider in Settings, enter an API key and model id, then test and save. Keys stay in tauri-plugin-store.",
        },
        {
          title: "Do my files leave my computer?",
          body: "No. PDFs and images are processed locally. Only extracted text is sent to the model provider you configure.",
        },
        {
          title: "What do I need for OCR?",
          body: "Install Tesseract on your system (for example brew install tesseract tesseract-lang on macOS). PageWise shells out to it for scanned pages and images.",
        },
        {
          title: "How is this different from Storage Agent?",
          body: "Storage Agent investigates S3-compatible storage read-only. PageWise is for local documents — PDFs, OCR, and page-wise Q&A.",
        },
        {
          title: "What platforms does it run on?",
          body: "A Tauri 2 desktop app built with React. Development targets macOS, Windows, and Linux. The project is MIT-licensed.",
        },
      ],
      finalCta: "Try PageWise on your documents",
      finalCtaLabel: "View on GitHub",
    },
    zh: {
      title: "PageWise",
      description: "本地桌面文档 agent：PDF 文本、OCR 与按页分析。",
      eyebrow: "本地桌面 agent",
      headline: "按页向文档提问",
      lead: "打开 PDF 或图片，按页阅读，和 agent 对话——它会标明引用了哪几页。文本提取和 OCR 在本机完成，只有提取出的文字会发给你配置的模型。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "一次会话怎么跑", href: "/zh/pagewise/#workflow" },
      meta: "Tauri 桌面应用 · macOS、Windows、Linux · MIT",
      proof: ["本地优先", "自带模型"],
      featuresLabel: "能做什么",
      features: [
        {
          title: "打开 PDF 与图片",
          body: "文件选择器或拖放即可。最近打开的文件会记在本地。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "页面预览与导航",
          body: "缩略图侧栏、缩放、跳页，以及文档内搜索并跳到对应页。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "本地文本提取",
          body: "PDF 文本层用 Rust pdf-extract；扫描页和图片走系统 Tesseract。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "按页 agent 对话",
          body: "流式聊天，工具调用可见。预览会跟着 agent 正在读的页走。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "自带模型",
          body: "兼容 OpenAI 接口的提供商——OpenAI、DeepSeek、OpenRouter、Ollama 或自定义端点。",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "密钥留在本机",
          body: "API key 存在 tauri-plugin-store，不上云。",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "一次会话怎么跑",
      workflow: [
        {
          title: "打开文档",
          body: "从磁盘选 PDF 或图片。PageWise 加载预览并在本地提取文本。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "问某一页或某一段",
          body: "在聊天里提问。agent 规划工具调用，读取需要的页。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "预览跟着走",
          body: "文档视图会跳到正在分析的页，方便你对照原文。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "带页码引用复核",
          body: "回答会标明具体页码。是否采信由你决定。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "它用哪个 AI 模型",
          body: "你自带：在设置里选提供商，填 API key 和模型 id，测试通过后保存。key 存在 tauri-plugin-store。",
        },
        {
          title: "我的文件会离开电脑吗",
          body: "不会。PDF 和图片在本机处理。只有提取出的文字会发给你配置的模型提供商。",
        },
        {
          title: "OCR 需要什么",
          body: "系统里要装 Tesseract（macOS 上例如 brew install tesseract tesseract-lang）。扫描页和图片由 PageWise 调用它完成。",
        },
        {
          title: "和 Storage Agent 有什么区别",
          body: "Storage Agent 只读调查 S3 兼容存储。PageWise 面向本地文档——PDF、OCR 和按页问答。",
        },
        {
          title: "支持哪些平台",
          body: "基于 Tauri 2 和 React 的桌面应用，开发目标包括 macOS、Windows 和 Linux。项目采用 MIT 许可。",
        },
      ],
      finalCta: "在你的文档上试试 PageWise",
      finalCtaLabel: "查看 GitHub",
    },
  },
};

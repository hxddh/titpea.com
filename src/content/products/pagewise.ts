import type { AgentWorkbenchProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const pagewiseProduct: AgentWorkbenchProduct = {
  slug: "pagewise",
  name: "PageWise",
  archetype: "agentWorkbench",
  locales: {
    en: {
      title: "PageWise",
      description:
        "Local desktop document agent that keeps the source page, read activity, and answer visible together.",
      eyebrow: "Local desktop agent",
      headline: "Keep the source page beside the answer",
      lead: "Open a PDF, ask about a section, table, or trend, and follow the pages the agent reads. Extraction and OCR stay local; only text goes to your model.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "Back to profile", href: "/about/" },
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
          title: "Source page beside the answer",
          body: "Keep the PDF page visible while the agent reads and answers, with page navigation and in-document search close by.",
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
          title: "Visible read activity",
          body: "Streaming chat shows search and read activity. The preview follows the page under analysis.",
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
          title: "Review beside the source",
          body: "Keep the page the agent used next to its answer, then decide what to trust before acting on the output.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Local and private",
      positioning: [
        {
          title: "Documents stay on disk",
          body: "Files are read from your machine. PageWise does not upload your PDFs or images to a server.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Only text goes to your model",
          body: "Extracted text is sent to the LLM provider you configure — nothing else leaves without your setup.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "You own the keys",
          body: "Provider credentials live in a local store. There is no hosted account or shared API key.",
          intent: "boundary",
          surface: "agent",
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
      finalCta: "Read with the source still in view",
      finalCtaLabel: "View on GitHub",
    },
    zh: {
      title: "PageWise",
      description: "本地桌面文档 agent：把原文页面、读取过程与回答放在一起。",
      eyebrow: "本地桌面 agent",
      headline: "让原文页面始终留在回答旁边",
      lead: "打开 PDF，询问段落、表格或趋势，并跟着 agent 查看它读过的页面。文本提取和 OCR 在本机完成，只有文字会发给你配置的模型。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      secondaryCta: { label: "返回简介", href: "/zh/about/" },
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
          title: "原文与回答并排",
          body: "agent 阅读和回答时，PDF 原页始终可见；跳页与文档内搜索也留在手边。",
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
          title: "读取过程可见",
          body: "流式聊天显示搜索与读取过程，预览会跟着正在分析的页面走。",
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
          title: "对着原文复核",
          body: "把 agent 使用的页面和回答放在一起，是否采信由你决定。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "本地 · 私密",
      positioning: [
        {
          title: "文档留在磁盘",
          body: "文件从本机读取。PageWise 不会把你的 PDF 或图片上传到服务器。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "只有文字发给模型",
          body: "提取出的文本会发给你配置的 LLM 提供商——除此之外不会擅自外传。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "密钥在你手里",
          body: "提供商凭证存在本地。没有托管账号，也没有共用 API key。",
          intent: "boundary",
          surface: "agent",
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
      finalCta: "让原文始终留在视线里",
      finalCtaLabel: "查看 GitHub",
    },
  },
};

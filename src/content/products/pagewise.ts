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
      lead: "Get page-cited answers from local PDFs and images—extraction stays on disk; only text goes to your model.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      meta: "Tauri desktop app · macOS, Windows, Linux · MIT",
      proof: [],
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
      ],
      finalCta: "Try PageWise on your documents",
      finalCtaLabel: "Download PageWise",
    },
    zh: {
      title: "PageWise",
      description: "本地桌面文档 agent：PDF 文本、OCR 与按页分析。",
      eyebrow: "本地桌面 agent",
      headline: "按页向文档提问",
      lead: "从本机 PDF 与图片得到带页码引用的回答——提取留在磁盘，只有文字发给你的模型。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      meta: "Tauri 桌面应用 · macOS、Windows、Linux · MIT",
      proof: [],
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
      ],
      finalCta: "在你的文档上试试 PageWise",
      finalCtaLabel: "下载 PageWise",
    },
  },
};

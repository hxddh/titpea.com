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
      description: "Read and annotate PDFs on your desktop, ask questions, and check answers against page citations.",
      eyebrow: "PDF reading and questions",
      headline: "Ask. Check the page.",
      lead: "Open a PDF and ask a question, or select a passage first. Answers include page citations, pages read are visible, and annotations stay on the document.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.pagewise },
      meta: `macOS / Windows / Linux · ${facts.latestRelease} · PDF + images · MIT`,
      proof: [],
      featuresLabel: "Text and scanned pages",
      features: [
        {
          title: "Read within limits",
          body: "Page reads have character and step budgets. A search miss does not mean the document contains no relevant information.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Scans need a vision model",
          body: "PDFs with a text layer can be read directly. Scanned pages and images need a configured vision model.",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "Find the source page",
      workflow: [
        {
          title: "Ask about the document",
          body: "Ask a question or select a passage. PageWise searches the document and reads relevant pages.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Check the answer",
          body: "Open a page citation, inspect the pages read, or let the preview follow the reading progress.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "What the model receives",
      positioning: [
        {
          title: "Text and optional images",
          body: "Files stay on your machine. Extracted text goes to the model you configure; enabling vision also sends the corresponding images. Connect Ollama to use a local model.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Keys in the system keychain",
          body: "Credentials use macOS Keychain, Windows Credential Manager, or Linux Secret Service. Assistant and Scan can use different models.",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "Search and first open",
      faq: [
        {
          title: "Web search is off by default",
          body: "OpenRouter web search is enabled per call when you want to check an external source.",
        },
        {
          title: "First open on macOS",
          body: "The build is not notarized. See the release instructions for the current installation steps.",
        },
      ],
      finalCtaLabel: "Download latest release",
    },
    zh: {
      title: "PageWise",
      description: "在桌面阅读和批注 PDF，围绕文档提问，沿页引用核对回答。",
      eyebrow: "PDF 阅读与问答",
      headline: "问过之后，回到原文",
      lead: "打开 PDF，直接提问，或选中一段再问。回答附带页引用，读过的页面可查看，批注保留在文档上。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pagewiseReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.pagewise },
      meta: `macOS / Windows / Linux · ${facts.latestRelease} · PDF 与图片 · MIT`,
      proof: [],
      featuresLabel: "文本与扫描件",
      features: [
        {
          title: "读取有范围",
          body: "单次读取受字符和步数预算限制。搜索未命中不等于文档没有相关内容。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "扫描页需要视觉模型",
          body: "有文本层的 PDF 可直接读取。扫描页和图片需要配置支持视觉的模型。",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "从问题找到页面",
      workflow: [
        {
          title: "围绕文档提问",
          body: "直接提问，或选中一段再问。PageWise 根据问题搜索文档、读取相关页面。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "核对回答",
          body: "点击引用定位原文，查看已读页，或让预览跟随阅读进度。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "模型会收到什么",
      positioning: [
        {
          title: "文本与可选图像",
          body: "文件保存在本机。问答时，提取的文本会发送给你配置的模型；启用视觉处理时，也会发送相应图像。可连接 Ollama 使用本地模型。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "密钥进系统钥匙串",
          body: "凭证使用 macOS Keychain、Windows Credential Manager 或 Linux Secret Service。对话与 Scan 可使用不同模型。",
          intent: "boundary",
          surface: "agent",
        },
      ],
      faqLabel: "网页搜索与首次打开",
      faq: [
        {
          title: "网页搜索默认关闭",
          body: "需要核对外部来源时，可按次启用 OpenRouter 网页搜索。",
        },
        {
          title: "在 macOS 首次打开",
          body: "构建尚未公证，请按当前版本的发布说明安装。",
        },
      ],
      finalCtaLabel: "下载最新版本",
    },
  },
};

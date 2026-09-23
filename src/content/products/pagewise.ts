import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pagewise",
  line: "everyday",
  featured: {
    image: {
      src: "/assets/pagewise-analysis.webp",
      width: 1800,
      height: 1200,
      alt: {
        en: "PageWise analyzing a financial table beside its source PDF page",
        zh: "PageWise 在 PDF 原页旁分析财务表格",
      },
    },
  },
  repo: "hxddh/pagewise",
  og: "/assets/og-pagewise.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "PageWise",
    description: "Read and annotate PDFs on your desktop, ask questions, and check answers against page citations.",
    eyebrow: "PDF reading and questions",
    headline: "Ask. Check the page.",
    lead: "Open a PDF and ask a question, or select a passage first. Answers include page citations, pages read are visible, and annotations stay on the document.",
    catalog: {
      role: "PDF agent",
      text: "Ask a PDF a question, then follow the citation back to the page.",
    },
    primaryCta: {
      label: "Download latest release",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/pagewise",
    },
    meta: "macOS / Windows / Linux · {version} · PDF + images · MIT",
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise analyzing a financial table beside page 14 of its source PDF",
        width: 1800,
        height: 1200,
      },
    },
    showcases: [
      {
        src: "/assets/pagewise-welcome.webp",
        width: 1800,
        height: 1200,
        alt: "PageWise welcome screen with open-document action and recent files",
        kicker: "Open or continue",
        title: "Start with a document on disk",
        body: "Open a PDF or drag it in. Recent files stay local so you can continue the same thread.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Text and scanned pages",
        items: [
          {
            title: "Read within limits",
            body: "Page reads have character and step budgets. A search miss does not mean the document contains no relevant information.",
          },
          {
            title: "Scans need a vision model",
            body: "PDFs with a text layer can be read directly. Scanned pages and images need a configured vision model.",
          },
          {
            title: "One conversation per document",
            body: "Each file keeps a local thread. Open it again to continue asking and annotating on the same PDF.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "Find the source page",
        items: [
          {
            title: "Ask about the document",
            body: "Ask a question or select a passage. PageWise searches the document and reads relevant pages.",
          },
          {
            title: "Check the answer",
            body: "Open a page citation, inspect the pages read, or let the preview follow the reading progress.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "What the model receives",
        items: [
          {
            title: "Text and optional images",
            body: "Files stay on your machine. Extracted text goes to the model you configure; enabling vision also sends the corresponding images. Connect Ollama to use a local model.",
          },
          {
            title: "Keys in the system keychain",
            body: "Credentials use macOS Keychain, Windows Credential Manager, or Linux Secret Service. Assistant and Scan can use different models.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "Search and first open",
        items: [
          {
            title: "Web search is off by default",
            body: "OpenRouter web search is enabled per call when you want to check an external source.",
          },
          {
            title: "First open on macOS",
            body: "The build is not notarized. See the release instructions for the current installation steps.",
          },
        ],
      },
    ],
    finalCta: "Download latest release",
  },
  zh: {
    title: "PageWise",
    description: "在桌面阅读和批注 PDF，围绕文档提问，沿页引用核对回答。",
    eyebrow: "PDF 阅读与问答",
    headline: "问过之后，回到原文",
    lead: "打开 PDF，直接提问，或选中一段再问。回答附带页引用，读过的页面可查看，批注保留在文档上。",
    catalog: {
      role: "PDF agent",
      text: "问 PDF 一个问题，再顺着页引用回到原文。",
    },
    primaryCta: {
      label: "下载最新版本",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/pagewise",
    },
    meta: "macOS / Windows / Linux · {version} · PDF 与图片 · MIT",
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise 在 PDF 第 14 页旁分析财务表格",
        width: 1800,
        height: 1200,
      },
    },
    showcases: [
      {
        src: "/assets/pagewise-welcome.webp",
        width: 1800,
        height: 1200,
        alt: "PageWise 欢迎页，包含打开文档与最近文件",
        kicker: "打开或继续",
        title: "从磁盘上的文档开始",
        body: "打开 PDF 或拖入文件。最近文档留在本地，可继续同一条线程。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "文本与扫描件",
        items: [
          {
            title: "读取有范围",
            body: "单次读取受字符和步数预算限制。搜索未命中不等于文档没有相关内容。",
          },
          {
            title: "扫描页需要视觉模型",
            body: "有文本层的 PDF 可直接读取。扫描页和图片需要配置支持视觉的模型。",
          },
          {
            title: "每份文档一条会话",
            body: "每份文件保留一条本地线程。再次打开时，继续对同一份 PDF 提问和批注。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "从问题找到页面",
        items: [
          {
            title: "围绕文档提问",
            body: "直接提问，或选中一段再问。PageWise 根据问题搜索文档、读取相关页面。",
          },
          {
            title: "核对回答",
            body: "点击引用定位原文，查看已读页，或让预览跟随阅读进度。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "模型会收到什么",
        items: [
          {
            title: "文本与可选图像",
            body: "文件保存在本机。问答时，提取的文本会发送给你配置的模型；启用视觉处理时，也会发送相应图像。可连接 Ollama 使用本地模型。",
          },
          {
            title: "密钥进系统钥匙串",
            body: "凭证使用 macOS Keychain、Windows Credential Manager 或 Linux Secret Service。对话与 Scan 可使用不同模型。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "网页搜索与首次打开",
        items: [
          {
            title: "网页搜索默认关闭",
            body: "需要核对外部来源时，可按次启用 OpenRouter 网页搜索。",
          },
          {
            title: "在 macOS 首次打开",
            body: "构建尚未公证，请按当前版本的发布说明安装。",
          },
        ],
      },
    ],
    finalCta: "下载最新版本",
  },
});

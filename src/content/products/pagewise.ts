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
    // The question and the start of the cited answer.
    detail: { x: 1080, y: 100, width: 720, height: 576 },
  },
  repo: "hxddh/pagewise",
  icon: "/assets/icons/pagewise.webp",
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
    lead: "Ask a question. Check the cited page. Annotate in place.",
    catalog: {
      role: "PDF agent",
      text: "Ask a PDF. Follow the citation to the page.",
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
        title: "Start from a file on disk.",
        body: "Open or drag in a PDF; recent files stay local.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Notes and threads stay with the file.",
        items: [
          { title: "Annotations stay", body: "Notes stay on the document." },
          { title: "One thread per file", body: "A local thread; reopen to keep asking." },
          { title: "Files stay local", body: "Text goes to the model you configure." },
          { title: "Text layers read directly", body: "Scans and images need a vision model." },
          { title: "Local model option", body: "Connect Ollama for a local model." },
          { title: "Keys in the keychain", body: "macOS, Windows, or Linux system keychain." },
        ],
      },
      {
        kind: "cards",
        id: "how",
        nav: "How it works",
        label: "Answers point back to the page.",
        items: [
          { title: "Ask or select", body: "Ask a question, or select a passage first." },
          { title: "PageWise reads", body: "It searches the document and reads relevant pages." },
          { title: "Check the answer", body: "Open a citation, see pages read, or follow the preview." },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "What does the model receive?",
            body: "Files stay on your machine. Extracted text goes to the model you configure; enabling vision also sends the corresponding images. Connect Ollama to use a local model. Assistant and Scan can use different models.",
          },
          {
            title: "Can it miss something?",
            body: "Yes. Page reads have character and step budgets, so a search miss does not mean the document contains no relevant information.",
          },
          {
            title: "Does it search the web?",
            body: "Not by default. OpenRouter web search is enabled per call when you want to check an external source.",
          },
          {
            title: "How do I open it on macOS?",
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
    lead: "直接提问。按页引用核对。批注留在文档上。",
    catalog: {
      role: "PDF agent",
      text: "向 PDF 提问。顺着页引用回到原文。",
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
        title: "从磁盘上的文件开始",
        body: "打开或拖入 PDF，最近文档留在本机。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "批注和会话跟着文件走",
        items: [
          { title: "批注留在原处", body: "批注保留在文档上。" },
          { title: "每份文件一条线程", body: "本地线程，再次打开接着问。" },
          { title: "文件留在本机", body: "文本发给你配置的模型。" },
          { title: "文本层直接读取", body: "扫描页和图片需要视觉模型。" },
          { title: "可用本地模型", body: "连接 Ollama 使用本地模型。" },
          { title: "密钥进系统钥匙串", body: "macOS、Windows 或 Linux 系统钥匙串。" },
        ],
      },
      {
        kind: "cards",
        id: "how",
        nav: "用法",
        label: "回答附带页引用，可回原页",
        items: [
          { title: "提问或选中", body: "直接提问，或选中一段再问。" },
          { title: "PageWise 读取", body: "搜索文档，读取相关页面。" },
          { title: "核对回答", body: "点开引用、查看已读页，或让预览跟随进度。" },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "模型会收到什么？",
            body: "文件保存在本机。问答时，提取的文本会发送给你配置的模型；启用视觉处理时，也会发送相应图像。可连接 Ollama 使用本地模型。对话与 Scan 可使用不同模型。",
          },
          {
            title: "会漏掉内容吗？",
            body: "可能。单次读取受字符和步数预算限制，搜索未命中不等于文档没有相关内容。",
          },
          {
            title: "会联网搜索吗？",
            body: "默认不会。需要核对外部来源时，可按次启用 OpenRouter 网页搜索。",
          },
          {
            title: "在 macOS 上怎么首次打开？",
            body: "构建尚未公证，请按当前版本的发布说明安装。",
          },
        ],
      },
    ],
    finalCta: "下载最新版本",
  },
});

import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pagewise",
  line: "everyday",
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
    description:
      "Read and annotate PDFs on your desktop, ask questions, and check each citation on its page, scanned pages included.",
    eyebrow: "PDF reading and questions",
    headline: "Ask. Check the page.",
    lead: "Ask a question. Each citation checked on its page. Scans read locally.",
    catalog: {
      role: "PDF agent",
      text: "Ask a PDF. Follow the citation to the page.",
    },
    primaryCta: {
      label: "Download",
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
        title: "Start from a file on disk.",
        body: "Open or drag in a PDF; recent files stay local.",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "how",
        nav: "How it works",
        label: "Answers point back to the page.",
        items: [
          { title: "Ask or select", body: "Ask a question, or select a passage first." },
          { title: "PageWise reads", body: "It searches the document and reads relevant pages." },
          { title: "Follow a citation", body: "Click one to see its quoted words lit on the page." },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Keep what the page confirms.",
        items: [
          { title: "Scanned pages too", body: "Search, highlights, and citation checks work on scans." },
          { title: "Keep what checks out", body: "Save verified sentences to the record, with their evidence." },
          { title: "Export a brief", body: "One Markdown file: conclusions, evidence, and what to re-check." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Files stay on your machine; notes, the record, and threads stay with the document.",
          "Extracted text goes to the model you configure, or Ollama; scans are read locally, with a vision model only as fallback.",
          "API keys stay in the macOS, Windows, or Linux keychain; if it is unavailable, they may go to a local settings file.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Can it miss something?",
            body: "Yes. Page reads have character and step budgets, so a search miss does not mean the document contains no relevant information.",
          },
          {
            title: "Which scans can it read?",
            body: "English and Simplified Chinese. Handwriting, vertical Chinese, and other languages go to the vision model, if you set one. A quote not found on a scan is marked unconfirmed, not absent.",
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
  },
  zh: {
    title: "PageWise",
    description: "在桌面阅读和批注 PDF，围绕文档提问，逐条对照原页核对引用，扫描页也不例外。",
    eyebrow: "PDF 阅读与问答",
    headline: "问过之后，回到原文",
    lead: "直接提问。引用逐条对照原页核对。扫描件在本机识别。",
    catalog: {
      role: "PDF Agent",
      text: "向 PDF 提问。顺着页引用回到原文。",
    },
    primaryCta: {
      label: "下载",
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
        title: "从磁盘上的文件开始",
        body: "打开或拖入 PDF，最近文档留在本机。",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "how",
        nav: "用法",
        label: "回答附带页引用，可回原页",
        items: [
          { title: "提问或选中", body: "直接提问，或选中一段再问。" },
          { title: "PageWise 读取", body: "搜索文档，读取相关页面。" },
          { title: "顺着引用看", body: "点开引用，原页高亮被引用的原文。" },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "留下原页确认过的内容",
        items: [
          { title: "扫描页同样可查", body: "扫描页上也能搜索、高亮和核对引用。" },
          { title: "只留核实过的", body: "把核实过的句子连同依据存入记录。" },
          { title: "导出简报", body: "一份 Markdown：结论、依据和待复核项。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "文件保存在本机；批注、记录和会话留在文档上。",
          "提取的文本发给你配置的模型或本机 Ollama；扫描页在本机识别，视觉模型只作后备。",
          "API 密钥保存在 macOS、Windows 或 Linux 系统钥匙串；钥匙串不可用时，可能暂存在本机设置文件。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "会漏掉内容吗？",
            body: "可能。单次读取受字符和步数预算限制，搜索未命中不等于文档没有相关内容。",
          },
          {
            title: "哪些扫描件能识别？",
            body: "英文和简体中文。手写、竖排中文和其他语言的页面交给视觉模型（如已配置）。在扫描页上找不到的引用标为未确认，而不是判定不存在。",
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
  },
});

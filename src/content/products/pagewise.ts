import { defineProduct } from "../schema";

export default defineProduct({
  slug: "pagewise",
  line: "everyday",
  type: "desktop",
  repo: "hxddh/pagewise",
  icon: "/assets/icons/pagewise.webp",
  og: "/assets/og-pagewise.png",
  schema: {
    category: "BusinessApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "PageWise",
    description:
      "Read and annotate PDFs on your desktop, ask questions, and check each citation and its numbers on the page, scanned pages included.",
    eyebrow: "PDF reading and questions",
    headline: "Ask. Check the page.",
    lead: "Each citation: verified, “check the page”, or not found. Scans read locally.",
    catalog: {
      role: "PDF assistant",
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
    installNote:
      "The macOS build is not notarized: after each install, click Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "onRequest",
      networkNote: "When you ask a question, extracted text goes to the model you configure, or Ollama.",
      stays: "Files, chats, marks and scan text on your machine; API keys in the system keychain; no telemetry.",
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
        id: "features",
        nav: "Features",
        label: "Every answer lists the pages it read.",
        items: [
          { title: "Ask or select", body: "Ask a question, or select a passage first." },
          { title: "PageWise reads", body: "It searches the document and reads relevant pages." },
          { title: "Follow a citation", body: "Click one to see its quoted words lit on the page." },
          { title: "In the page margin", body: "With the panel closed, cited sentences show their state there." },
          { title: "Cited tables", body: "Every cell cited; export as CSV with its sources." },
          { title: "A highlighted PDF copy", body: "Findings and your marks as highlights, from Export…" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Files, chats, marks, the record, and recognised scan text stay on your machine; there is no telemetry.",
          "Extracted text goes to the model you configure, or Ollama; scans are read locally, with a vision model only as fallback.",
          "API keys stay in the system keychain; a key the keychain refuses waits in a local settings file until accepted.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Do I need an API key?",
            body: "Not to read. Reading, search, and recognising scanned pages work on your computer without one. Questions need a model: a key for OpenAI, DeepSeek, OpenRouter, or another OpenAI-compatible service, or Ollama on your machine. A question typed before you connect one is kept and sent once you do.",
            asOf: "v24.0.0",
          },
          {
            title: "Can it miss something?",
            body: "Yes. Each answer reads within a token and step budget, so a search miss does not mean the document contains no relevant information. In the background, PageWise reads at most 50 pages that have no text; the rest are read when needed, or all at once with “Read pages with no text”.",
          },
          {
            title: "Can a found citation still be wrong?",
            body: "Yes. PageWise checks the quoted words and the numbers in the sentence. Other mistakes, such as who owes what, are checked only when you ask your model to review the passages (More, under the answer), up to eight citations per call, and the model can misread too. A review that disagrees lowers the chip to not found; one that agrees never makes it verified. A number the model rounded may show “check the page” even when the answer is right.",
          },
          {
            title: "Which scans can it read?",
            body: "English and Simplified Chinese, whatever the interface language: a page that reads poorly in English is read again with both. Other languages, and pages local recognition reads poorly, go to the vision model, if you set one that reads images. A quote not found on a scan shows “check the page”, not “not found”; in scanned tables and two-column pages that is common.",
          },
          {
            title: "What if a file will not open?",
            body: "PageWise says why and what to do next. A PDF that needs a password to open is not supported yet: print it to a new PDF without the password. One protected only against editing opens. Files over 256 MiB are refused before they are read, so split them; a damaged file needs downloading again, and other types need converting to PDF or JPEG.",
            asOf: "v24.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "PageWise",
    description: "在桌面阅读和批注 PDF，围绕文档提问，逐条对照原页核对引用和其中的数字，扫描页也不例外。",
    eyebrow: "PDF 阅读与问答",
    headline: "问过之后，回到原文",
    lead: "直接提问。每条引用标为已核对、请看原页或未找到。扫描件在本机识别。",
    catalog: {
      role: "PDF 助手",
      text: "向 PDF 提问。顺着引用回到原页。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/pagewise",
    },
    installNote: "macOS 版尚未公证：每装一个新版本，到“系统设置 → 隐私与安全性”点“仍要打开”。",
    privacy: {
      network: "onRequest",
      networkNote: "提问时，提取的文本发给你配置的模型或本机 Ollama。",
      stays: "文件、会话、批注和识别出的文字都在本机；API 密钥在系统钥匙串；没有遥测。",
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
        id: "features",
        nav: "功能",
        label: "每个回答都写明读了哪几页",
        items: [
          { title: "提问或选中", body: "直接提问，或选中一段再问。" },
          { title: "PageWise 读取", body: "搜索文档，读取相关页面。" },
          { title: "顺着引用看", body: "点开引用，原页高亮被引用的原文。" },
          { title: "写在页边", body: "关闭侧栏时，引用本页的句子连同核对状态显示在页边。" },
          { title: "带引用的表格", body: "每格都有引用，可连同来源导出 CSV。" },
          { title: "带高亮的 PDF 副本", body: "结论和你的批注写成高亮，在“导出…”里选。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "文件、会话、批注、记录和扫描页识别出的文字都保存在本机；没有遥测。",
          "提取的文本发给你配置的模型或本机 Ollama；扫描页在本机识别，视觉模型只作后备。",
          "API 密钥保存在系统钥匙串；钥匙串拒绝写入时，密钥暂存在本机设置文件，等钥匙串接受后再移入。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "需要 API 密钥吗？",
            body: "阅读不需要。阅读、搜索和扫描页识别都在本机完成，不用密钥。提问需要模型：OpenAI、DeepSeek、OpenRouter 或其他兼容 OpenAI 的服务需要密钥，也可以用本机的 Ollama。连接之前输入的问题会保留，连接后自动发出。",
            asOf: "v24.0.0",
          },
          {
            title: "会漏掉内容吗？",
            body: "可能。每次回答的读取受 token 和步数预算限制，搜索未命中不等于文档没有相关内容。后台最多读取 50 个没有文字的页，其余的按需读取，也可以用“读取没有文字的页”一次读完。",
          },
          {
            title: "找到原文的引用还会错吗？",
            body: "会。PageWise 核对引文原话和句中的数字。其他错误（比如谁承担什么义务）只有在你从回答下的“更多操作”里让模型复核时才检查，每次调用最多复核八条引用，模型也可能读错。复核认为原文说法不同时，引用降为“未找到”；复核认同也不会把引用升为“已核对”。模型把数字取整或换算时，即使回答正确也可能显示“请看原页”。",
          },
          {
            title: "哪些扫描件能识别？",
            body: "英文和简体中文，与界面语言无关：英文识别效果差的页，会再用中英文一起识别一遍。其他语言和本机识别效果差的页交给视觉模型（需配置能读图的模型）。在扫描页上找不到的引用显示“请看原页”，而不是“未找到”；扫描的表格和双栏页面常会这样。",
          },
          {
            title: "文件打不开怎么办？",
            body: "PageWise 会说明原因和下一步。需要密码才能打开的 PDF 暂不支持，可以先打印成不带密码的新 PDF；只限制编辑的 PDF 能正常打开。超过 256 MiB 的文件在读取前就会被拒绝，需要先拆分；损坏的文件需要重新下载，其他格式需要先转成 PDF 或 JPEG。",
            asOf: "v24.0.0",
          },
        ],
      },
    ],
  },
});

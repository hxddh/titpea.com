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
    eyebrow: "PDF questions, with pages",
    headline: "Ask. Check the page.",
    lead: "Ask a PDF a question. Each citation is marked “verified”, “check the page” or “not found”. Scans are read on your computer.",
    catalog: {
      role: "PDF assistant",
      text: "Ask a PDF. Follow the citation to the page.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/pagewise",
    },
    installNote:
      "The macOS build is not notarized: after each install, click Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "onRequest",
      networkNote: "When you ask a question, extracted text goes to the model you configure, or Ollama.",
      stays: "Files, chats, marks and scan text on your machine; API keys in the system keychain; no telemetry.",
    },
    meta: "macOS / Windows / Linux · MIT · {version}",
    releaseHighlights: {
      version: "v24.0.0",
      items: [
        "In a long answer, pages that had been cut to a one-line summary are read again in full when needed, so citations from the first pages are found again.",
        "More quotes are found on the page: one that copies the page’s Markdown, such as bold text or a heading, and one shortened with “…”.",
        "A file that won’t open now says why, in your language, and what to do next: remove the password by printing to PDF, download it again, split it, or convert it.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise with a sample PDF open and the question “What does this page say?” answered from page 1, with a Read page 1 step and a citation",
        width: 2880,
        height: 1800,
      },
      caption: "Illustration: the app's UI harness, with a sample document and a scripted answer.",
      asOf: "v24.0.0",
    },
    showcases: [
      {
        src: "/assets/pagewise-search-en.webp",
        width: 2048,
        height: 1536,
        alt: "PageWise searching a PDF for “byte miss ratio”: “This document, 4 matches”, each snippet labelled with its page, p. 1, p. 1 and p. 2, over the dimmed page",
        title: "Search the whole document.",
        body: "Every match names its page; search runs on your computer, with no model.",
        caption: "PageWise 24, searching a sample PDF; the paper is fictional.",
        asOf: "v24.0.0",
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
          {
            title: "Cited tables",
            body: "Each cell has a checked citation; export the table as CSV with its sources.",
          },
          {
            title: "A highlighted PDF copy",
            body: "Export a copy with findings and your marks written in as highlights.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Files, chats, marks, the findings recorded from answers, and recognised scan text stay on your machine; there is no telemetry.",
          "When you ask, extracted text goes to the AI model you set up, or to Ollama on your computer.",
          "Scans are read locally; a vision model you set is only a fallback.",
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
        ],
      },
    ],
  },
  zh: {
    title: "PageWise",
    description: "在桌面阅读和批注 PDF，围绕文档提问，逐条对照原页核对引用和其中的数字，扫描页也不例外。",
    eyebrow: "PDF 问答，附页码",
    headline: "问过之后，回到原文",
    lead: "向 PDF 提问。每条引用都标为“已核对”、“请看原页”或“未找到”。扫描件在本机识别。",
    catalog: {
      role: "PDF 助手",
      text: "向 PDF 提问。顺着引用回到原页。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/pagewise",
    },
    installNote: "macOS 版尚未公证：每装一个新版本，到“系统设置 → 隐私与安全性”点“仍要打开”。",
    privacy: {
      network: "onRequest",
      networkNote: "提问时，提取的文本发给你配置的模型或本机 Ollama。",
      stays: "文件、会话、批注和识别出的文字都在本机；API 密钥在系统钥匙串；没有遥测。",
    },
    meta: "macOS / Windows / Linux · MIT · {version}",
    releaseHighlights: {
      version: "v24.0.0",
      items: [
        "回答很长时，前面被压缩成一行摘要的页面，需要时会重新完整读取，开头几页的引用又能找到了。",
        "更多引文能在原页找到：带着页面 Markdown 格式（如粗体或标题）的引文，以及用“…”省略过的引文。",
        "文件打不开时，会用你的语言说明原因和下一步：打印成 PDF 去掉密码、重新下载、拆分文件，或转换格式。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise 打开示例 PDF，回答“What does this page say?”，写明读了第 1 页并给出引用（界面为英文）",
        width: 2880,
        height: 1800,
      },
      caption: "示意图：应用界面测试工具中的示例文档与脚本回答（界面为英文）。",
      asOf: "v24.0.0",
    },
    showcases: [
      {
        src: "/assets/pagewise-search-zh.webp",
        width: 2048,
        height: 1536,
        alt: "PageWise 在 PDF 中搜索“违约金”：显示“本文档 9 处匹配”，每段摘录都标明页码（第 2 页、第 3 页），背后是调暗的页面",
        title: "整份文档都能搜",
        body: "每处匹配都标明页码；搜索在本机进行，不需要模型。",
        caption: "PageWise 24，搜索示例 PDF；内容为虚构。",
        asOf: "v24.0.0",
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
          { title: "带高亮的 PDF 副本", body: "从“导出…”生成一份副本，结论和你的批注都写成高亮。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "文件、会话、批注、从回答里记下的结论，以及扫描页识别出的文字，都保存在本机；没有遥测。",
          "提问时，提取的文本发给你设置的 AI 模型，或本机的 Ollama。",
          "扫描页在本机识别；你设置的视觉模型只作后备。",
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
        ],
      },
    ],
  },
});

import { defineProduct } from "../schema";

// Pictures: the app's UI harness at 25.0.0. The hero closes the assistant
// panel, asks from the margin bar, and shows the scripted answer's three
// cards beside page 1; the search showcase was captured at 24.0.0.
export default defineProduct({
  slug: "pagewise",
  line: "everyday",
  type: "desktop",
  platforms: [{ id: "macos" }, { id: "windows" }, { id: "linux" }],
  license: "MIT",
  firstOpen: { macos: "eachRelease" },
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
    headline: "Ask a PDF, then check each answer on its page.",
    lead: "Ask a PDF a question. Each citation is marked “verified”, “check the page” or “not found”. Scans are read on your computer.",
    summary: "Ask a PDF a question and follow each citation to its page.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/pagewise",
    },
    privacy: {
      network: "onRequest",
      networkNote: "When you ask a question, extracted text goes to the model you configure, or Ollama.",
      stays: "Files, chats, marks and scan text on your machine; API keys in the system keychain; no telemetry.",
    },
    releaseHighlights: {
      version: "v25.0.0",
      items: [
        "With the side panel closed, or in Zen, ask from a small bar; answers appear as cards in the page margin beside the passages they cite.",
        "Text on scanned pages can be selected, highlighted and asked about, as on a digital PDF; dragging a box offers Ask about this or Mark.",
        "Numbers written as −12.5%, (12.5%) or $1.2M are now checked correctly against the page.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise with the assistant panel closed: a question asked from the small bar at the foot of the page, and three answer cards in the page margin beside page 1, each marked Verified.",
        width: 2560,
        height: 1600,
      },
      caption: "Illustration: the UI harness; a sample document and a scripted answer in the margin.",
      asOf: "v25.0.0",
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
        label: "Reading, asking and exporting",
        items: [
          {
            title: "Ask or select",
            body: "Type a question, or select text or drag a box and ask about that; PageWise reads the relevant pages.",
          },
          { title: "Follow a citation", body: "Click a citation and its quoted words light up on the page." },
          {
            title: "Selectable scanned pages",
            body: "Recognised text lies over each scan, so you can select, mark and ask.",
          },
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
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Do I need an API key?",
            body: "Not to read: reading, search and recognising scanned pages work on your computer without one. Questions need a model.",
            steps: [
              "Use a key for OpenAI, DeepSeek, OpenRouter, or another OpenAI-compatible service.",
              "Or use Ollama on your machine.",
              "A question typed before you connect a model is kept and sent once you do.",
            ],
            asOf: "v25.0.0",
          },
          {
            title: "Can it miss something?",
            body: "Yes. Each answer reads within a token and step budget, so a search miss does not mean the document contains no relevant information.",
            steps: [
              "In the background, PageWise reads at most 50 pages that have no text.",
              "The rest are read when needed, or all at once with “Read pages with no text”.",
            ],
            asOf: "v25.0.0",
          },
          {
            title: "Can a found citation still be wrong?",
            body: "Yes. PageWise checks the quoted words and the numbers in the sentence; other mistakes, such as who owes what, are checked only when you ask your model to review the passages.",
            steps: [
              "Ask for a review from More, under the answer; it covers up to eight citations per call, and the model can misread too.",
              "A review that disagrees lowers the chip to not found; one that agrees never makes it verified.",
              "A number the model rounded may show “check the page” even when the answer is right.",
            ],
            asOf: "v25.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "PageWise",
    description: "在桌面阅读和批注 PDF，围绕文档提问，逐条对照原页核对引用和其中的数字，扫描页也不例外。",
    eyebrow: "PDF 问答，附页码",
    headline: "向 PDF 提问，再到原页核对回答",
    lead: "向 PDF 提问。每条引用都标为“已核对”、“请看原页”或“未找到”。扫描件在本机识别。",
    summary: "向 PDF 提问，顺着每条引用回到原页。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/pagewise/releases",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/pagewise",
    },
    privacy: {
      network: "onRequest",
      networkNote: "提问时，提取的文本发给你配置的模型或本机 Ollama。",
      stays: "文件、会话、批注和识别出的文字都在本机；API 密钥在系统钥匙串；没有遥测。",
    },
    releaseHighlights: {
      version: "v25.0.0",
      items: [
        "关闭侧栏或进入 Zen 时，可以在浮动的小输入条里提问，回答以卡片形式出现在页边，挨着它引用的段落。",
        "扫描页上的文字也能选中、高亮和提问，和普通 PDF 一样；框选一块区域后可以直接提问或做批注。",
        "−12.5%、(12.5%)、$1.2M 这类写法的数字，现在能和原页正确核对。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "PageWise",
      frame: "wide",
      image: {
        src: "/assets/pagewise-analysis.webp",
        alt: "PageWise 收起助手面板后：在页面底部的小输入条里提问，三张回答卡片显示在第 1 页旁的页边，均标为已核实（界面为英文）。",
        width: 2560,
        height: 1600,
      },
      caption: "示意图：应用界面测试工具中的示例文档与脚本回答，回答显示在页边（界面为英文）。",
      asOf: "v25.0.0",
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
        label: "阅读、提问和导出",
        items: [
          { title: "提问或选中", body: "输入问题，或选中文字、框选一块区域再问；PageWise 会读取相关页面。" },
          { title: "顺着引用看", body: "点开引用，原页上被引用的原文会高亮。" },
          { title: "扫描页也能选中", body: "识别出的文字铺在扫描页上，可以选中、批注和提问。" },
          { title: "带引用的表格", body: "每格都有引用，可连同来源导出 CSV。" },
          { title: "带高亮的 PDF 副本", body: "从“导出…”生成一份副本，结论和你的批注都写成高亮。" },
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
            body: "阅读不需要：阅读、搜索和扫描页识别都在本机完成，不用密钥。提问需要模型。",
            steps: [
              "OpenAI、DeepSeek、OpenRouter 或其他兼容 OpenAI 的服务，需要密钥。",
              "也可以用本机的 Ollama。",
              "连接模型之前输入的问题会保留，连接后自动发出。",
            ],
            asOf: "v25.0.0",
          },
          {
            title: "会漏掉内容吗？",
            body: "可能。每次回答的读取受 token 和步数预算限制，搜索未命中不等于文档没有相关内容。",
            steps: ["后台最多读取 50 个没有文字的页。", "其余的按需读取，也可以用“读取没有文字的页”一次读完。"],
            asOf: "v25.0.0",
          },
          {
            title: "找到原文的引用还会错吗？",
            body: "会。PageWise 核对引文原话和句中的数字；其他错误（比如谁承担什么义务）只有在你让模型复核时才检查。",
            steps: [
              "复核从回答下的“更多操作”发起，每次调用最多复核八条引用，模型也可能读错。",
              "复核认为原文说法不同时，引用降为“未找到”；复核认同也不会把引用升为“已核对”。",
              "模型把数字取整或换算时，即使回答正确也可能显示“请看原页”。",
            ],
            asOf: "v25.0.0",
          },
        ],
      },
    ],
  },
});

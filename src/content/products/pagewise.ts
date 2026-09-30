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
      "Read and annotate PDFs on your desktop, ask questions, and check each citation and its numbers on the page, scanned pages included.",
    eyebrow: "PDF reading and questions",
    headline: "Ask. Check the page.",
    lead: "Ask a question. Each citation: verified, “check the page”, or not found.",
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
        label: "Evidence that leaves with the document.",
        items: [
          { title: "Numbers checked too", body: "A figure the quoted passage does not state shows “check the page”." },
          { title: "Cited tables", body: "Every cell cited; export as CSV with its sources." },
          { title: "PDF with evidence", body: "Findings as highlights, from the one Export… dialog." },
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
            body: "Yes. Page reads have character and step budgets, so a search miss does not mean the document contains no relevant information. For questions that ask for every item, the first suggestion names unread pages that match.",
          },
          {
            title: "Can a found citation still be wrong?",
            body: "Yes. PageWise checks the quoted words and the numbers in the sentence. Other mistakes, such as who owes what, are checked only when you ask your model to review each passage (More, under the answer), one short call per citation, and the model can misread too. A review that disagrees lowers the chip to not found; one that agrees never raises it. A number the model rounded may show “check the page” even when the answer is right.",
          },
          {
            title: "Which scans can it read?",
            body: "English, plus Simplified Chinese when the interface language is Chinese. Handwriting, vertical Chinese, and other languages go to the vision model, if you set one. A quote not found on a scan shows “check the page”, not “not found”.",
          },
          {
            title: "Does exporting evidence change my PDF?",
            body: "No. It writes a copy to a new file you choose, with only the evidence found on its page. A signed PDF's signature does not survive in the copy, and encrypted PDFs cannot be annotated.",
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
    description: "在桌面阅读和批注 PDF，围绕文档提问，逐条对照原页核对引用和其中的数字，扫描页也不例外。",
    eyebrow: "PDF 阅读与问答",
    headline: "问过之后，回到原文",
    lead: "直接提问。每条引用标为已核对、请看原页或未找到。扫描件在本机识别。",
    catalog: {
      role: "PDF 助手",
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
        label: "证据随文档带走",
        items: [
          { title: "数字也核对", body: "引文段落里没有的数字标为“请看原页”。" },
          { title: "带引用的表格", body: "每格都有引用，可连同来源导出 CSV。" },
          { title: "带证据的 PDF", body: "结论写成高亮，在“导出…”里选。" },
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
            body: "可能。单次读取受字符和步数预算限制，搜索未命中不等于文档没有相关内容。问“全部”“哪些”这类问题时，第一条建议会列出与问题相符但没读过的页。",
          },
          {
            title: "找到原文的引用还会错吗？",
            body: "会。PageWise 核对引文原话和句中的数字。其他错误（比如谁承担什么义务）只有在你从回答下的“更多操作”里让模型逐段复核时才检查，每条引用一次简短调用，模型也可能读错。复核认为原文说法不同时，引用降为“未找到”；复核认同也不会提升等级。模型把数字取整或换算时，即使回答正确也可能显示“请看原页”。",
          },
          {
            title: "哪些扫描件能识别？",
            body: "英文；界面语言为中文时，也识别简体中文。手写、竖排中文和其他语言的页面交给视觉模型（如已配置）。在扫描页上找不到的引用显示“请看原页”，而不是“未找到”。",
          },
          {
            title: "导出证据会改动原 PDF 吗？",
            body: "不会。它写到你另选的新文件里，只写入在原页找到的证据。带数字签名的 PDF，副本里的签名会失效；加密的 PDF 无法写入批注。",
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

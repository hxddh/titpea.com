import type { Locale, ProductArchetype, ProductCopy } from "../lib/site";

export type ContentSectionId =
  | "positioning"
  | "features"
  | "workflow"
  | "automation"
  | "examples"
  | "story"
  | "cases"
  | "faq";
export type PageSectionId = ContentSectionId | "inside" | "evidence" | "results";
export type SectionLayout = "balanced" | "steps" | "dense" | "evidence";
export type ProductCopyCardSource = Extract<
  keyof ProductCopy,
  "positioning" | "features" | "workflow" | "automation" | "examples"
>;
export type VisualPolicy =
  | "s3Benchmark"
  | "storageAgent"
  | "storageWorkbench"
  | "httpmonTerminal"
  | "celagentTerminal"
  | "worldClockScreenshot"
  | "doubanScreenshot"
  | "pagewiseWorkbench"
  | "agentWorkbenchScreenshot"
  | "agentRadarTerminal"
  | "gobanScreenshot"
  | "chessboardScreenshot"
  | "easierBookmarksScreenshot"
  | "pulseMenuBar"
  | "worldMachineProjection";
export type ProductGroup = "storage" | "personal";

export type ArchetypeSectionSpec = {
  id: PageSectionId;
  label: Record<Locale, string>;
  layout?: SectionLayout;
  numbered?: boolean;
  source?: ProductCopyCardSource;
  mergeSources?: ProductCopyCardSource[];
  required?: boolean;
};

export type ProductArchetypeContract = {
  group: ProductGroup;
  pageClass: string;
  sectionIndex: boolean;
  applicationCategory: "DeveloperApplication" | "BrowserApplication" | "GameApplication";
  operatingSystem: "Cross-platform" | "Chrome" | "macOS" | "macOS and Windows";
  defaultVisual: VisualPolicy;
  sections: ArchetypeSectionSpec[];
};

export const productArchetypeContracts: Record<ProductArchetype, ProductArchetypeContract> = {
  s3TurboList: {
    group: "storage",
    pageClass: "product-page product-page-s3TurboList",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "s3Benchmark",
    sections: [
      { id: "inside", label: { en: "List and diff", zh: "list 与 diff" }, required: true },
      { id: "story", label: { en: "Why it exists", zh: "为什么做" }, required: true },
      { id: "evidence", label: { en: "Scan plan", zh: "扫描方式" }, required: true },
      { id: "results", label: { en: "Results", zh: "结果" }, required: true },
      { id: "cases", label: { en: "Compatibility", zh: "兼容性" }, required: true },
      { id: "faq", label: { en: "Before a long run", zh: "开跑之前" }, required: true },
    ],
  },
  storageCli: {
    group: "storage",
    pageClass: "product-page product-page-storageCli",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "s3Benchmark",
    sections: [
      { id: "inside", label: { en: "One command", zh: "一条命令" }, required: true },
      { id: "evidence", label: { en: "Local layer", zh: "本地观察层" }, required: true },
      {
        id: "workflow",
        label: { en: "What you see", zh: "终端里看什么" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "automation",
        label: { en: "Record and export", zh: "记录与导出" },
        layout: "dense",
        source: "automation",
        required: true,
      },
      { id: "faq", label: { en: "Proxy, HTTPS, recordings", zh: "代理、HTTPS 与录音" }, required: true },
    ],
  },
  markdownRadar: {
    group: "personal",
    pageClass: "product-page product-page-markdownRadar",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "agentRadarTerminal",
    sections: [
      { id: "inside", label: { en: "One research loop", zh: "一条研究循环" }, required: true },
      { id: "evidence", label: { en: "Git state", zh: "Git 状态" }, required: true },
      {
        id: "workflow",
        label: { en: "Collect, gate, commit", zh: "采集、门禁、提交" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "automation",
        label: { en: "Actions runs the loop", zh: "Actions 跑这条循环" },
        layout: "dense",
        source: "automation",
        required: true,
      },
      { id: "faq", label: { en: "Audience, Actions, cost", zh: "给谁用、Actions、花费" }, required: true },
    ],
  },
  agentPackage: {
    group: "storage",
    pageClass: "product-page product-page-agentPackage",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "storageAgent",
    sections: [
      { id: "inside", label: { en: "Pi extension + skill pack", zh: "Pi 扩展与 skill pack" }, required: true },
      { id: "evidence", label: { en: "Skills and tools", zh: "技能与工具" }, required: true },
      {
        id: "workflow",
        label: { en: "How a case runs", zh: "一次问题怎么处理" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "Where it helps", zh: "适用问题" }, required: true },
      { id: "faq", label: { en: "Pi, buckets, Storage Agent", zh: "Pi、桶与 Storage Agent" }, required: true },
    ],
  },
  cliAgent: {
    group: "storage",
    pageClass: "product-page product-page-cliAgent",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "celagentTerminal",
    sections: [
      { id: "inside", label: { en: "Pi TUI + BOS persistence", zh: "Pi TUI + BOS 持久化" }, required: true },
      { id: "evidence", label: { en: "Persistence model", zh: "持久化模型" }, required: true },
      {
        id: "workflow",
        label: { en: "Install, write, restore", zh: "安装、写入、恢复" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      { id: "cases", label: { en: "What it covers", zh: "覆盖范围" }, required: true },
      { id: "faq", label: { en: "Install and Pi", zh: "安装与 Pi" }, required: true },
    ],
  },
  agentWorkbench: {
    group: "storage",
    pageClass: "product-page product-page-agentWorkbench",
    sectionIndex: false,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "storageWorkbench",
    sections: [
      { id: "inside", label: { en: "Desktop investigation agent", zh: "桌面调查 Agent" }, required: true },
      {
        id: "workflow",
        label: { en: "Ask, then approve", zh: "先问，再确认" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "positioning",
        label: { en: "Keys on disk, storage read-only", zh: "密钥在本机，存储只读" },
        source: "positioning",
        required: true,
      },
      { id: "faq", label: { en: "Read-only, keys, StorageOps", zh: "只读、密钥与 StorageOps" }, required: true },
    ],
  },
  worldRuntime: {
    group: "personal",
    pageClass: "product-page product-page-worldRuntime",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    defaultVisual: "worldMachineProjection",
    sections: [
      { id: "inside", label: { en: "Experimental semantic runtime", zh: "实验性语义运行时" }, required: true },
      {
        id: "features",
        label: { en: "Loop, host, and packs", zh: "循环、宿主与 Pack" },
        source: "features",
        required: true,
      },
      {
        id: "workflow",
        label: { en: "Open, install, branch", zh: "打开、安装、分支" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "positioning",
        label: { en: "Unstable on purpose", zh: "刻意不稳定" },
        source: "positioning",
        required: true,
      },
      { id: "faq", label: { en: "Pre-alpha and packs", zh: "pre-alpha 与 Pack" }, required: true },
    ],
  },
  documentAgent: {
    group: "personal",
    pageClass: "product-page product-page-documentAgent",
    sectionIndex: true,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    defaultVisual: "pagewiseWorkbench",
    sections: [
      { id: "inside", label: { en: "Local PDF workbench", zh: "本地 PDF 工作台" }, required: true },
      {
        id: "features",
        label: { en: "Beside the PDF", zh: "在 PDF 旁边" },
        source: "features",
        required: true,
      },
      {
        id: "workflow",
        label: { en: "From file to citation", zh: "从打开到引用" },
        layout: "steps",
        numbered: true,
        source: "workflow",
        required: true,
      },
      {
        id: "positioning",
        label: { en: "What leaves the machine", zh: "什么会离开本机" },
        source: "positioning",
        required: true,
      },
      { id: "faq", label: { en: "Ollama, scans, first open", zh: "Ollama、扫描与首次打开" }, required: true },
    ],
  },
  browserExtension: {
    group: "personal",
    pageClass: "product-page product-page-browserExtension",
    sectionIndex: false,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    defaultVisual: "worldClockScreenshot",
    sections: [
      { id: "inside", label: { en: "On the page", zh: "就在页里" } },
      {
        id: "positioning",
        label: { en: "Cities you choose", zh: "你选的城市" },
        source: "positioning",
        required: true,
      },
      { id: "features", label: { en: "Match, then three scores", zh: "匹配后再显示" }, source: "features" },
      { id: "faq", label: { en: "Matching and sources", zh: "匹配与来源" } },
    ],
  },
  nativeApp: {
    group: "personal",
    pageClass: "product-page product-page-nativeApp",
    sectionIndex: false,
    applicationCategory: "GameApplication",
    operatingSystem: "macOS and Windows",
    defaultVisual: "gobanScreenshot",
    sections: [
      { id: "inside", label: { en: "On the board", zh: "棋盘上" } },
      {
        id: "positioning",
        label: { en: "A local board", zh: "本机棋盘" },
        source: "positioning",
        required: true,
      },
      { id: "features", label: { en: "AI, drills, records", zh: "AI、练习、棋谱" }, source: "features" },
      { id: "faq", label: { en: "macOS, Windows, records", zh: "系统、棋谱与下载" } },
    ],
  },
  menuBarApp: {
    group: "personal",
    pageClass: "product-page product-page-menuBarApp",
    sectionIndex: false,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    defaultVisual: "pulseMenuBar",
    sections: [
      { id: "inside", label: { en: "Menu-bar lamp", zh: "菜单栏状态灯" } },
      {
        id: "positioning",
        label: { en: "When the lamp is enough", zh: "这盏灯适合什么时候" },
        source: "positioning",
        required: true,
      },
      {
        id: "features",
        label: { en: "Lamp, tray, snooze", zh: "灯、托盘、稍后" },
        source: "features",
      },
      { id: "faq", label: { en: "macOS, hooks, privacy", zh: "系统、hooks 与隐私" } },
    ],
  },
};

export const productArchetypeLayouts = Object.fromEntries(
  Object.entries(productArchetypeContracts).map(([key, contract]) => [key, contract.sections]),
) as Record<ProductArchetype, ArchetypeSectionSpec[]>;

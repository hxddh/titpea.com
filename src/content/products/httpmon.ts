import type { StorageCliProduct } from "../../lib/site";
import { httpmonFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const meta = `Go · ${httpmonFacts.licenseLabel ?? "MIT"} · ${httpmonFacts.latestRelease ?? "current"} · local proxy · HTTP / HTTPS / wss handshake · NDJSON / HAR`;

export const httpmonProduct: StorageCliProduct = {
  slug: "httpmon",
  name: "httpmon",
  archetype: "storageCli",
  locales: {
    en: {
      title: "httpmon",
      description: "A zero-config terminal inspector for the HTTP and HTTPS traffic from one CLI command.",
      eyebrow: "Go CLI",
      headline: "See HTTP beside the command",
      lead: "Wrap curl, aws, Python, or any proxy-aware command and read its requests and responses live — the command's own response unchanged.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.httpmon },
      secondaryCta: { label: "Usage", href: siteConfig.externalLinks.httpmonQuickStart },
      meta,
      proof: [],
      workflowLabel: "What you see",
      workflow: [
        {
          title: "Request and response",
          body: "Read method, URL, headers, status, timing, and a decoded body preview in text mode or the terminal UI.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "The original stream",
          body: "The wrapped command still receives its original response. Decompression is only for httpmon's display preview.",
          intent: "workflow",
          surface: "protocol",
        },
        {
          title: "Focused traffic",
          body: "Use `--filter` when a command is noisy and only a URL or host matters to the investigation.",
          intent: "workflow",
          surface: "cli",
        },
      ],
      automationLabel: "Keep a session only when useful",
      automation: [
        {
          title: "A structured record",
          body: "Write NDJSON for another command or HAR 1.2 for an inspector that understands web traffic.",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "Record and replay",
          body: "Record request-response pairs, then replay an authorized session against its original target or a comparison environment.",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "Inspect the next command with httpmon",
      finalCtaLabel: "Open repository",
      faqLabel: "Proxy, HTTPS, recordings",
      faq: [
        {
          title: "Does it change my system proxy?",
          body: "No. Proxy and CA settings are passed only to the wrapped child process and are cleaned up when that process exits.",
        },
        {
          title: "How does HTTPS remain readable?",
          body: "httpmon creates a temporary local CA and per-host certificates. It decrypts locally for inspection while forwarding the full response stream unchanged.",
        },
        {
          title: "What does it support beyond HTTP?",
          body: "It handles HTTPS and captures the `wss://` upgrade handshake. After the 101 response, WebSocket frames are spliced in both directions.",
        },
        {
          title: "Can recordings contain sensitive data?",
          body: "Yes. Headers, cookies, query parameters, and response bodies may contain credentials or business data. Capture and replay only in authorized environments, and handle NDJSON, HAR, and recording files as sensitive logs.",
        },
      ],
    },
    zh: {
      title: "httpmon",
      description: "零配置的终端 HTTP 查看器，用来观察一条命令发出的 HTTP/HTTPS 请求与响应。",
      eyebrow: "Go CLI",
      headline: "运行命令时，顺手看 HTTP 请求与响应",
      lead: "用 httpmon 包住 curl、aws、Python 或任何支持代理的命令，实时看请求和响应——命令收到的响应原样不动。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.httpmon },
      secondaryCta: { label: "使用方法", href: siteConfig.externalLinks.httpmonQuickStart },
      meta,
      proof: [],
      workflowLabel: "终端里能看到什么",
      workflow: [
        {
          title: "请求和响应",
          body: "在文本模式或 TUI 里查看方法、URL、请求头、响应头、状态码、耗时和解压后的内容预览。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "原始响应流",
          body: "被包装的命令仍会收到原始响应。解压只用于 httpmon 的终端预览。",
          intent: "workflow",
          surface: "protocol",
        },
        {
          title: "关心的请求",
          body: "命令请求很多时，用 `--filter` 按 URL 或域名筛选，只看需要排查的部分。",
          intent: "workflow",
          surface: "cli",
        },
      ],
      automationLabel: "需要时再保留会话",
      automation: [
        {
          title: "结构化记录",
          body: "输出 NDJSON 交给其他命令处理，或导出 HAR 1.2 到支持检查 HTTP 请求的工具。",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "录制和回放",
          body: "录制请求与响应对，再把已获授权的会话回放到原端点或对比环境。",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "用 httpmon 检查下一条命令",
      finalCtaLabel: "打开仓库",
      faqLabel: "代理、HTTPS 与录音",
      faq: [
        { title: "会改系统代理吗？", body: "不会。代理和 CA 只传给被包装的子进程；命令退出后，临时内容会一并清理。" },
        {
          title: "为什么 HTTPS 也能查看？",
          body: "httpmon 会临时创建本地 CA 和按域名签发的证书，仅在本地解密查看；完整响应流会按原样继续转发。",
        },
        {
          title: "除了 HTTP 还支持什么？",
          body: "支持 HTTPS，也会记录 `wss://` 的升级握手。收到 101 响应后，WebSocket 帧会在两端之间直接转发。",
        },
        {
          title: "记录文件里可能有敏感信息吗？",
          body: "可能。请求头、Cookie、查询参数和响应体可能含有凭据或业务数据。请只在获授权环境采集与回放，并把 NDJSON、HAR 和录制文件按敏感日志保存。",
        },
      ],
    },
  },
};

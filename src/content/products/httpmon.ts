import { defineProduct } from "../schema";

export default defineProduct({
  slug: "httpmon",
  line: "storage",
  repo: "hxddh/https-traffic-inspector",
  og: "/assets/og-httpmon.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "httpmon",
    description: "A terminal inspector for the HTTP and HTTPS traffic from one CLI command.",
    eyebrow: "Go CLI",
    headline: "See the HTTP traffic",
    lead: "Wrap curl, aws, Python, or any proxy-aware command and read its requests and responses live — the command's own response unchanged.",
    catalog: {
      role: "",
      text: "See what a command actually sent.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
    secondaryCta: {
      label: "Usage",
      href: "https://github.com/hxddh/https-traffic-inspector#usage",
    },
    meta: "Go · MIT · {version} · local proxy · HTTP / HTTPS / wss handshake · NDJSON / HAR",
    commands: {
      title: "Get started",
      sub: "Requires Go 1.24+. Pre-built binaries are on the Releases page.",
      items: [
        {
          comment: "Install",
          command: "go install github.com/hxddh/https-traffic-inspector@latest",
        },
        {
          comment: "Wrap a command and watch its traffic",
          command: "httpmon curl https://api.github.com/users/octocat",
        },
      ],
    },
    visual: {
      kind: "httpTerminal",
      label: "httpmon",
      kicker: "httpmon · local proxy",
      status: "capturing",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: api.github.com · Accept: */*",
      responseLabel: "RESPONSE",
      response: "HTTP/1.1 200 OK",
      responseMeta: "Content-Type: application/json · 245ms",
      body: '{"login":"octocat","id":583231,...}',
      footnotes: ["local HTTPS inspection", "original response stream stays with the command"],
      command: "httpmon curl https://api.github.com/users/octocat",
      method: "GET",
      url: "https://api.github.com/users/octocat",
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "One command, one local layer",
        title: "Only the wrapped process is configured",
        body: "httpmon starts a local MITM proxy, gives its address and temporary CA to one child process, and forwards the original response stream to that process unchanged.",
        steps: [
          {
            label: "Start locally",
            body: "Put `httpmon` before curl, aws, Python, Node, or another proxy-aware command. No system proxy is changed.",
          },
          {
            label: "Configure one child",
            body: "The proxy address and ephemeral CA live in that command's environment, not in your global network settings.",
          },
          {
            label: "Forward and display",
            body: "The command receives its original stream. Beside it, httpmon shows headers, status, timing, and a decoded preview.",
          },
          {
            label: "Save when needed",
            body: "Write NDJSON, HAR, or a recording when the session needs to be replayed or shared.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "Beside the wrapped command",
        items: [
          {
            title: "Request and response",
            body: "Read method, URL, headers, status, timing, and a decoded body preview in text mode or the terminal UI.",
          },
          {
            title: "The original stream",
            body: "The wrapped command still receives its original response. Decompression is only for httpmon's display preview.",
          },
          {
            title: "Focused traffic",
            body: "Use `--filter` when a command is noisy and only a URL or host matters to the investigation. When those logs and traces are already in a Pi chat, diagnose them with StorageOps.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "automation",
        label: "Keep a session only when useful",
        items: [
          {
            title: "A structured record",
            body: "Write NDJSON for another command or HAR 1.2 for an inspector that understands web traffic.",
          },
          {
            title: "Record and replay",
            body: "Record request-response pairs, then replay an authorized session against its original target or a comparison environment.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "wss and recordings",
        items: [
          {
            title: "HTTPS and the wss handshake",
            body: "It handles HTTPS and captures the `wss://` upgrade handshake. After the 101 response, WebSocket frames are spliced in both directions.",
          },
          {
            title: "Recordings can hold secrets",
            body: "Headers, cookies, query parameters, and response bodies may contain credentials or business data. Capture and replay only in authorized environments, and handle NDJSON, HAR, and recording files as sensitive logs.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "httpmon",
    description: "在终端查看一条命令发出的 HTTP/HTTPS 请求与响应。",
    eyebrow: "Go CLI",
    headline: "看这条命令发了什么请求",
    lead: "用 httpmon 包住 curl、aws、Python 或任何支持代理的命令，实时看请求和响应——命令收到的响应原样不动。",
    catalog: {
      role: "",
      text: "看这条命令实际发出的请求。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
    secondaryCta: {
      label: "使用方法",
      href: "https://github.com/hxddh/https-traffic-inspector#usage",
    },
    meta: "Go · MIT · {version} · local proxy · HTTP / HTTPS / wss handshake · NDJSON / HAR",
    commands: {
      title: "开始使用",
      sub: "需要 Go 1.24+。Releases 页面也有预编译二进制。",
      items: [
        {
          comment: "安装",
          command: "go install github.com/hxddh/https-traffic-inspector@latest",
        },
        {
          comment: "包住一条命令，看它的流量",
          command: "httpmon curl https://api.github.com/users/octocat",
        },
      ],
    },
    visual: {
      kind: "httpTerminal",
      label: "httpmon",
      kicker: "httpmon · 本地代理",
      status: "正在捕获",
      requestLabel: "请求 #1",
      requestMeta: "Host: api.github.com · Accept: */*",
      responseLabel: "响应",
      response: "HTTP/1.1 200 OK",
      responseMeta: "Content-Type: application/json · 245ms",
      body: '{"login":"octocat","id":583231,...}',
      footnotes: ["HTTPS 只在本地解密查看", "原始响应流继续交给命令"],
      command: "httpmon curl https://api.github.com/users/octocat",
      method: "GET",
      url: "https://api.github.com/users/octocat",
    },
    sections: [
      {
        kind: "flow",
        id: "evidence",
        kicker: "一条命令，一层本地观察",
        title: "只配置当前这条命令",
        body: "httpmon 启动本地 MITM 代理，把代理地址和临时 CA 传给一个子进程。子进程仍会收到原始响应流，终端则显示请求、响应和耗时。",
        steps: [
          {
            label: "本地启动",
            body: "在 curl、aws、Python、Node 或其他支持代理的命令前加上 `httpmon`，系统代理不会变化。",
          },
          {
            label: "只配置子进程",
            body: "代理地址和临时 CA 只存在于这条命令的环境变量中，不会写进全局网络设置。",
          },
          {
            label: "转发并显示",
            body: "原命令照常收到响应；终端同时显示请求头、响应头、状态码、耗时和解压后的预览。",
          },
          {
            label: "按需留存",
            body: "需要复查或分享时，再导出 NDJSON、HAR 或录制文件。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "包住命令后终端里有什么",
        items: [
          {
            title: "请求和响应",
            body: "在文本模式或 TUI 里查看方法、URL、请求头、响应头、状态码、耗时和解压后的内容预览。",
          },
          {
            title: "原始响应流",
            body: "被包装的命令仍会收到原始响应。解压只用于 httpmon 的终端预览。",
          },
          {
            title: "关心的请求",
            body: "命令请求很多时，用 `--filter` 按 URL 或域名筛选，只看需要排查的部分。日志和 trace 已经在 Pi 的聊天里时，用 StorageOps 排查。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "automation",
        label: "需要时再保留会话",
        items: [
          {
            title: "结构化记录",
            body: "输出 NDJSON 交给其他命令处理，或导出 HAR 1.2 到支持检查 HTTP 请求的工具。",
          },
          {
            title: "录制和回放",
            body: "录制请求与响应对，再把已获授权的会话回放到原端点或对比环境。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "wss 与录制",
        items: [
          {
            title: "HTTPS 与 wss 握手",
            body: "支持 HTTPS，也会记录 `wss://` 的升级握手。收到 101 响应后，WebSocket 帧会在两端之间直接转发。",
          },
          {
            title: "录制可能含敏感信息",
            body: "请求头、Cookie、查询参数和响应体可能含有凭据或业务数据。请只在获授权环境采集与回放，并把 NDJSON、HAR 和录制文件按敏感日志保存。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});

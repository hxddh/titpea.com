import { defineProduct } from "../schema";

export default defineProduct({
  slug: "httpmon",
  line: "storage",
  type: "cli",
  repo: "hxddh/https-traffic-inspector",
  icon: "/assets/icons/httpmon.webp",
  og: "/assets/og-httpmon.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "httpmon",
    description:
      "A terminal inspector for the HTTP and HTTPS traffic of a command, kept in sessions to query, diff and replay.",
    eyebrow: "HTTP traffic CLI",
    headline: "See the HTTP traffic.",
    lead: "Put httpmon in front of a command like curl to see its HTTP traffic; keep it in a session to query, diff or replay.",
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
    privacy: {
      network: "onRequest",
      networkNote:
        "Relays only the traffic you route through it, and replays only when you ask; no update check, no telemetry.",
      stays:
        "Traffic shows in your terminal and is saved only to a session you start; a run’s temporary CA key never touches disk.",
    },
    meta: "macOS / Linux / Windows · MIT · {version}",
    releaseHighlights: {
      version: "v4.1.0",
      items: [
        "Traffic is kept in named sessions you can query, diff, replay or export as HAR; these replace `--record` and `--har`.",
        "New `httpmon proxy` captures browsers, phones and containers, and `--mock` and `--fault` make chosen requests fail on purpose.",
        "`go install` now installs a program named `httpmon`, and httpmon’s output goes to stderr, leaving the command’s stdout untouched.",
      ],
    },
    commands: {
      title: "Get started",
      sub: "The install script is for Linux and macOS; `go install` needs Go 1.26+. On Windows, use `install.ps1` or a binary from GitHub Releases.",
      items: [
        {
          comment: "Install (Linux, macOS)",
          command:
            "curl -fsSL https://github.com/hxddh/https-traffic-inspector/releases/latest/download/install.sh | sh",
        },
        {
          comment: "Or install with Go",
          command: "go install github.com/hxddh/https-traffic-inspector/v4/cmd/httpmon@latest",
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
      kicker: "httpmon v1.4.1 · captured output",
      status: "captured",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE #1",
      response: "HTTP/2.0 200 OK (3.21s)",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 91",
      body: "v1.3.0 v1.0.2 v1.0.0 v1.1.1 v1.4.1 …",
      footnotes: ["local HTTPS inspection", "original response stream stays with the command"],
      command: "httpmon curl -sS https://proxy.golang.org/github.com/hxddh/https-traffic-inspector/@v/list",
      method: "GET",
      url: "https://proxy.golang.org:443/github.com/hxddh/https-traffic-inspector/@v/list",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Watch the traffic, keep it, and test against it.",
        items: [
          {
            title: "Request and response",
            body: "Headers, status, timing and decoded bodies on a terminal; one line per exchange elsewhere.",
          },
          {
            title: "HTTP/2, gRPC, WebSocket",
            body: "gRPC messages are decoded without a schema; every WebSocket message shows as it passes.",
          },
          {
            title: "Sessions to query",
            body: "`--session` keeps every exchange; `query` searches it, `diff` compares runs, `replay` re-sends.",
          },
          {
            title: "Mocks and faults",
            body: "Answer, delay, reset or redirect matching requests to test failure paths without touching the server.",
          },
          {
            title: "Standing proxy",
            body: "`httpmon proxy` captures browsers, phones, containers and running services that httpmon does not start.",
          },
          {
            title: "Built for agents",
            body: "Compact output off a terminal, and `httpmon mcp` serves sessions to an agent’s MCP client.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "httpmon sends nothing of its own; it relays traffic you route through it and re-sends requests only when you run replay.",
          "By default the CA lives only in memory for one run; `httpmon ca` writes a persistent key to disk, mode 0600.",
          "Traffic is saved only to a session (`--session`, or `httpmon proxy`), readable by you only, with credentials unless you pass `--redact`.",
          "Output masks credential headers and URL tokens unless you pass `--show-secrets`; bodies are not masked.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Which commands can it wrap?",
            body: "curl, aws, Python, Node, Java, git, cargo, Deno, or any other proxy-aware command. Only that child process gets the proxy address and CA; your system settings stay as they are. Go programs skip the proxy for loopback targets, and a JVM already running before httpmon started, such as a Gradle daemon, is not configured.",
            asOf: "v4.1.0",
          },
          {
            title: "Does it still check certificates?",
            body: "Yes. Because httpmon terminates TLS, it verifies each server’s real certificate on the command’s behalf; a failure is a `502` with a `tls_verify` error. `--insecure-upstream` turns that off; use it only against hosts you control.",
            asOf: "v4.1.0",
          },
          {
            title: "Does it diagnose storage errors?",
            body: "No. httpmon shows the traffic and leaves the judgment to you. To diagnose S3-compatible storage errors in Pi, the open-source terminal coding agent, use StorageOps, which captures traces through httpmon.",
            link: {
              label: "Open StorageOps",
              href: "/storageops/",
            },
            asOf: "v4.1.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "httpmon",
    description: "在终端查看一条命令的 HTTP/HTTPS 请求与响应，存进会话后可以查询、对比和重放。",
    eyebrow: "HTTP 流量命令行工具",
    headline: "看清命令的 HTTP 流量",
    lead: "把 httpmon 放在 curl 这类命令前面，就能看到它的 HTTP 流量；存进会话，之后还能查询、对比或重放。",
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
    privacy: {
      network: "onRequest",
      networkNote: "只转发你让它经手的流量，只在你要求时重放；不检查更新，没有遥测。",
      stays: "流量显示在终端，只有你开了会话才保存；每次运行的临时 CA 私钥从不写入磁盘。",
    },
    meta: "macOS / Linux / Windows · MIT · {version}",
    releaseHighlights: {
      version: "v4.1.0",
      items: [
        "流量存进具名会话，可以查询、对比、重放或导出为 HAR；`--record` 和 `--har` 由此取代。",
        "新增 `httpmon proxy`，能抓浏览器、手机和容器的流量；`--mock` 和 `--fault` 可以让指定请求故意失败。",
        "`go install` 装好的程序现在就叫 `httpmon`；httpmon 的输出改走 stderr，命令自己的 stdout 不受影响。",
      ],
    },
    commands: {
      title: "开始使用",
      sub: "安装脚本适用于 Linux 和 macOS；`go install` 需要 Go 1.26+。Windows 用 `install.ps1`，或从 GitHub Releases 下载二进制文件。",
      items: [
        {
          comment: "安装（Linux、macOS）",
          command:
            "curl -fsSL https://github.com/hxddh/https-traffic-inspector/releases/latest/download/install.sh | sh",
        },
        {
          comment: "或用 Go 安装",
          command: "go install github.com/hxddh/https-traffic-inspector/v4/cmd/httpmon@latest",
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
      kicker: "httpmon v1.4.1 · 实际输出",
      status: "已捕获",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE #1",
      response: "HTTP/2.0 200 OK (3.21s)",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 91",
      body: "v1.3.0 v1.0.2 v1.0.0 v1.1.1 v1.4.1 …",
      footnotes: ["HTTPS 只在本地解密查看", "原始响应流继续交给命令"],
      command: "httpmon curl -sS https://proxy.golang.org/github.com/hxddh/https-traffic-inspector/@v/list",
      method: "GET",
      url: "https://proxy.golang.org:443/github.com/hxddh/https-traffic-inspector/@v/list",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "看流量，留下来，再拿它做测试",
        items: [
          {
            title: "请求和响应",
            body: "终端里看头字段、状态码、耗时和解码后的内容；别处每次交换一行。",
          },
          {
            title: "HTTP/2、gRPC、WebSocket",
            body: "gRPC 消息无需 schema 就能解码；WebSocket 的每条消息经过时都会显示。",
          },
          {
            title: "可查询的会话",
            body: "`--session` 保存每次交换；`query` 检索，`diff` 对比两次运行，`replay` 重新发送。",
          },
          { title: "模拟与故障", body: "对匹配的请求直接应答、延迟、断开或改道，不碰服务器也能测失败路径。" },
          { title: "常驻代理", body: "`httpmon proxy` 能抓浏览器、手机、容器和已在运行的服务这些不由它启动的流量。" },
          { title: "为 Agent 设计", body: "不在终端时输出精简；`httpmon mcp` 把会话提供给 Agent 的 MCP 客户端。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "httpmon 自己不发请求：它只转发你让它经手的流量，只在你运行 replay 时重发请求。",
          "默认情况下 CA 只在一次运行中存在于内存里；`httpmon ca` 会把持久 CA 的私钥写入磁盘，权限 0600。",
          "流量只保存在会话里（`--session` 或 `httpmon proxy`），只有你能读取；除非加 `--redact`，其中保留凭据。",
          "输出会遮盖含凭据的请求头和 URL 里的令牌，除非加 `--show-secrets`；请求体和响应体不遮盖。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "能包住哪些命令？",
            body: "curl、aws、Python、Node、Java、git、cargo、Deno，或其他支持代理的命令。只有这个子进程拿到代理地址和 CA，系统设置保持不变。Go 程序访问本机回环地址时不走代理；httpmon 启动前就在运行的 JVM（比如 Gradle 守护进程）不会被配置。",
            asOf: "v4.1.0",
          },
          {
            title: "它还会校验证书吗？",
            body: "会。httpmon 终止了 TLS，所以由它代替命令校验服务器的真实证书；校验失败返回 `502`，错误类型为 `tls_verify`。`--insecure-upstream` 会关掉这项校验，只在你自己管理的主机上用。",
            asOf: "v4.1.0",
          },
          {
            title: "它能诊断存储故障吗？",
            body: "不能。httpmon 只展示流量，判断交给你。想在开源终端编码 Agent Pi 里诊断 S3 兼容存储的故障，请用 StorageOps，它会经 httpmon 采集 trace。",
            link: {
              label: "打开 StorageOps",
              href: "/zh/storageops/",
            },
            asOf: "v4.1.0",
          },
        ],
      },
    ],
  },
});

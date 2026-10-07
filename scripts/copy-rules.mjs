export const zhForbiddenTerms = [
  " inventory",
  " artifact",
  " bucket",
  " endpoint",
  " provider",
  "warnings",
  "exit codes",
  "S3-compatible",
  "local proxy",
  "Agent-safe",
  "Markdown-first",
  "skill pack",
  "解决方案",
  // Owner rule (October 2026): copy never leans on 依据 as a selling point.
  "依据",
  "赋能",
  "无缝",
  "强大",
  "上下文能力",
];

export const zhAwkwardPatterns = [
  { pattern: /不仅仅是|不只是一个|提供了一个/, label: "AI-like filler phrase" },
  { pattern: /进行(诊断|检查|处理|分析)/, label: "heavy verb-object phrasing" },
  { pattern: /通过.+来/, label: "translation-like through-to structure" },
  { pattern: /让.+能够/, label: "translation-like enable structure" },
];

const weakHeadings = new Set(["能力", "详情", "场景", "边界"]);

export function headingIssues(text, level) {
  const issues = [];
  const clean = text.trim();
  if (!clean) return issues;
  if (/[。.!！?？]$/.test(clean)) issues.push(`${level} ends with sentence punctuation: ${clean}`);
  if (/[\u4e00-\u9fff]/.test(clean) && clean.length > 28) {
    issues.push(`${level} is too long for Chinese page rhythm: ${clean}`);
  }
  if (weakHeadings.has(clean)) {
    issues.push(`${level} is too generic without surrounding context: ${clean}`);
  }
  return issues;
}

export function zhSentenceIssues(sentence) {
  const issues = [];
  const clean = sentence.trim();
  if (!/[\u4e00-\u9fff]/.test(clean)) return issues;
  if (clean.length > 96) issues.push(`Chinese sentence is too long (${clean.length} chars): ${clean}`);
  return issues;
}

export function zhMixedSpacingIssues(text) {
  const issues = [];
  const patterns = [
    { pattern: /S3兼容/g, label: "missing space in S3 兼容" },
    { pattern: /Pi诊断/g, label: "missing space in Pi 诊断" },
    { pattern: /Chrome扩展/g, label: "missing space in Chrome 扩展" },
    { pattern: /JSON(?=[\u4e00-\u9fff])/g, label: "missing space after JSON" },
    {
      pattern: /[\u4e00-\u9fff][?!,;](?=\s|$|[\u4e00-\u9fff])/g,
      label: "half-width punctuation after Chinese (use ？！，；)",
    },
  ];
  for (const { pattern, label } of patterns) {
    if (pattern.test(text)) issues.push(label);
  }
  return issues;
}

/** All Chinese copy rules applied to a list of visible strings. */
export function copyIssues(strings) {
  const issues = new Set();
  const text = strings.join("\n");
  const lower = text.toLowerCase();
  for (const term of zhForbiddenTerms)
    if (lower.includes(term.trim().toLowerCase())) issues.add(`forbidden term "${term.trim()}"`);
  for (const issue of zhMixedSpacingIssues(text)) issues.add(issue);
  for (const sentence of strings.flatMap((value) => value.split(/[。！？；\n]/))) {
    for (const { pattern, label } of zhAwkwardPatterns)
      if (pattern.test(sentence)) issues.add(`${label}: ${sentence.trim()}`);
    for (const issue of zhSentenceIssues(sentence)) issues.add(issue);
  }
  return [...issues];
}

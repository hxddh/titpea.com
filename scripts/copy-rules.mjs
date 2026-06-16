export const zhForbiddenTerms = [
  " inventory",
  " artifact",
  " bucket",
  " endpoint",
  " provider",
  "warnings",
  "exit codes",
];

export const zhAwkwardPatterns = [
  { pattern: /不仅仅是|不只是一个|提供了一个/, label: "AI-like filler phrase" },
  { pattern: /进行(诊断|检查|处理|分析)/, label: "heavy verb-object phrasing" },
  { pattern: /通过.+来/, label: "translation-like through-to structure" },
];

export function headingIssues(text, level) {
  const issues = [];
  const clean = text.trim();
  if (!clean) return issues;
  if (/[。.!！?？]$/.test(clean)) issues.push(`${level} ends with sentence punctuation: ${clean}`);
  if (/[\u4e00-\u9fff]/.test(clean) && clean.length > 28) {
    issues.push(`${level} is too long for Chinese page rhythm: ${clean}`);
  }
  return issues;
}

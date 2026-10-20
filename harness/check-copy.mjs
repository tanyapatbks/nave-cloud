#!/usr/bin/env node
// Reading-budget check for on-screen copy in STORYBOARD.md (no narration in this film).
// Counts Thai base characters (combining vowels and tone marks excluded, as in the Netflix
// Thai timed-text guide) and checks each frame against the budgets in BRIEF.md.
import { readFileSync } from "node:fs";

const MAX_CPS = 17;        // hard ceiling (Netflix Thai)
const TARGET_CPS = 12;     // plan ceiling; above this is a warning
const MAX_LINE = 35;       // base characters per line
const BANNED = ["ผู้บังคับบัญชา", "ผู้ไม่มีพื้นฐาน", "ไม่มีพื้นฐาน"]; // never address the audience

const path = process.argv[2] ?? "STORYBOARD.md";
const md = readFileSync(path, "utf8");
const base = (s) => [...s.normalize("NFC")].filter((c) => !/\p{M}/u.test(c) && !/\s/.test(c)).length;

let failures = 0, warnings = 0, totalChars = 0, totalSecs = 0;
for (const block of md.split(/^## Frame /m).slice(1)) {
  const title = block.split("\n")[0].trim();
  const dur = parseFloat(/^- duration:\s*([\d.]+)s/m.exec(block)?.[1] ?? "NaN");
  const onscreen = /^- onscreen:\s*(.+)$/m.exec(block)?.[1] ?? "";
  const lines = [...onscreen.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const chars = lines.reduce((n, l) => n + base(l), 0);
  const cps = chars / dur;
  totalChars += chars; totalSecs += dur;
  const issues = [];
  for (const l of lines) if (base(l) > MAX_LINE) issues.push(`line > ${MAX_LINE} chars (${base(l)}): "${l}"`);
  for (const w of BANNED) if (onscreen.includes(w)) issues.push(`banned audience word: ${w}`);
  if (cps > MAX_CPS) issues.push(`cps ${cps.toFixed(1)} > ${MAX_CPS}`);
  const level = issues.length ? "FAIL" : cps > TARGET_CPS ? "WARN" : "ok";
  if (level === "FAIL") failures++; else if (level === "WARN") warnings++;
  console.log(`${level.padEnd(4)} Frame ${title.slice(0, 44).padEnd(44)} ${String(dur).padStart(3)}s ${String(chars).padStart(4)} chars ${cps.toFixed(1).padStart(5)} c/s`);
  for (const i of issues) console.log(`       - ${i}`);
}
console.log(`\nTotal ${totalChars} chars over ${totalSecs}s = ${(totalChars / totalSecs).toFixed(1)} c/s average; ${failures} fail, ${warnings} warn`);
process.exit(failures ? 1 : 0);

#!/usr/bin/env node
// Copy-fidelity check: the storyboard's `onscreen:` strings are the film's only words.
// (1) every expected string (split at " · ", which workers may render as a line break)
//     must appear in its frame's markup or script strings;
// (2) every Thai run the frame can display must come from that frame's copy deck, the
//     chrome, or a string its Scene directions quote (catches invented or paraphrased Thai).
import { readFileSync } from "node:fs";
import { join } from "node:path";

const project = process.argv[2] ?? "videos/rtn-rag-explainer";
const md = readFileSync(join(project, "STORYBOARD.md"), "utf8");
// ✓ / × / ✗ are often drawn as separate icons, so they never decide a match.
const squash = (s) => s.normalize("NFC").replace(/[\s·✓✗×]+/g, "");

let failures = 0;
// The persistent chrome (frames 02–10) must carry every frame's term chip and the tracker.
const chromeHtml = squash(readFileSync(join(project, "compositions/chrome.html"), "utf8").replace(/<[^>]+>/g, " "));
const terms = [...md.matchAll(/^- term:\s*(.+)$/gm)].map((m) => m[1].trim());
const chromeMissing = [...terms, "จัดการ", "ค้นหา", "สิทธิการเข้าถึง"].filter((t) => !chromeHtml.includes(squash(t)));
if (chromeMissing.length) { failures++; console.log(`FAIL chrome.html missing: ${chromeMissing.map((m) => `"${m}"`).join(", ")}`); }
else console.log(`ok   chrome.html (${terms.length} term chips + tracker)`);
for (const block of md.split(/^## Frame /m).slice(1)) {
  const src = /^- src:\s*(\S+)/m.exec(block)?.[1];
  const onscreen = /^- onscreen:\s*(.+)$/m.exec(block)?.[1] ?? "";
  const expected = [...onscreen.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const term = /^- term:\s*(.+)$/m.exec(block)?.[1]?.trim();
  const chrome = ["จัดการ", "ค้นหา", "สิทธิการเข้าถึง", ...(term ? [term] : [])];
  const sceneQuotes = [...block.matchAll(/"([^"\n]+)"/g)].map((m) => m[1]);
  const allowed = [...expected, ...chrome, ...sceneQuotes].map(squash);

  let html;
  try {
    html = readFileSync(join(project, src), "utf8");
  } catch {
    console.log(`FAIL ${src}: missing`);
    failures++;
    continue;
  }
  const noStyle = html.replace(/<style[\s\S]*?<\/style>/g, "\u0001").replace(/<!--[\s\S]*?-->/g, "\u0001");
  const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  const hay = squash(decode(noStyle.replace(/<[^>]+>/g, " ")));

  const missing = [];
  for (const e of expected) for (const part of e.split(/\s+·\s+/)) if (!hay.includes(squash(part))) missing.push(part);

  // Each text node / JS string literal is its own segment, so neighbours never join.
  const segments = decode(noStyle).split(/<[^>]+>|["'`\u0001]/);
  const extra = [
    ...new Set(
      segments
        .flatMap((seg) => seg.match(/[฀-๿][฀-๿0-9./\s]*/g) ?? [])
        .map(squash)
        .filter((r) => r && !allowed.some((a) => a.includes(r))),
    ),
  ];

  const id = src.split("/").pop();
  if (missing.length || extra.length) {
    failures++;
    console.log(`FAIL ${id}`);
    if (missing.length) console.log(`       missing: ${missing.map((m) => `"${m}"`).join(", ")}`);
    if (extra.length) console.log(`       Thai not in copy deck: ${extra.map((m) => `"${m}"`).join(", ")}`);
  } else console.log(`ok   ${id}`);
}
process.exit(failures ? 1 : 0);

#!/usr/bin/env node
// Glyph-coverage ("tofu") check: every character a frame can put on screen must exist in
// the shipped fonts, because the render machine has no Thai or symbol fallback fonts.
// Scans markup text and JS string literals (not <style> blocks or comments) of each
// composition file and checks each non-ASCII code point against the union of the fonts
// every stack carries: Chulabhorn Likit Text first, then the IBM Plex Sans Thai / IBM Plex
// Mono fallbacks (Chulabhorn Likit has no ✓ or →, which fall back to Plex per glyph).
import { readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const project = process.argv[2] ?? "videos/rtn-rag-explainer";
const fontDir = join(project, "assets/fonts");
const fonts = ["ChulabhornLikitText-Regular.woff2", "IBMPlexSansThai-Medium.ttf", "IBMPlexMono-Medium.ttf"];

const ranges = fonts.flatMap((f) =>
  execFileSync("fc-query", ["-f", "%{charset}", join(fontDir, f)], { encoding: "utf8" })
    .trim().split(/\s+/).map((r) => {
      const [a, b] = r.split("-").map((h) => parseInt(h, 16));
      return [a, Number.isNaN(b) || b === undefined ? a : b];
    }),
);
const covered = (cp) => cp <= 0x7e || ranges.some(([a, b]) => cp >= a && cp <= b);

const dir = join(project, "compositions/frames");
const files = [
  ...readdirSync(dir).filter((f) => f.endsWith(".html")).sort().map((f) => join(dir, f)),
  // persistent layers (chrome, roadmap rail, …)
  ...readdirSync(join(project, "compositions")).filter((f) => f.endsWith(".html")).sort().map((f) => join(project, "compositions", f)),
];
let bad = 0;
for (const path of files) {
  const file = path.split("/").pop();
  const src = readFileSync(path, "utf8")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  const missing = new Map();
  src.split("\n").forEach((line, i) => {
    for (const ch of line) {
      const cp = ch.codePointAt(0);
      if (cp === 0xfe0f || cp === 0x200b) continue;
      if (!covered(cp)) missing.set(ch, missing.get(ch) ?? `line ${i + 1}`);
    }
  });
  if (missing.size) {
    bad++;
    console.log(`FAIL ${file}: ` + [...missing].map(([c, at]) => `${c} (U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}, first at ${at})`).join(", "));
  } else console.log(`ok   ${file}`);
}
process.exit(bad ? 1 : 0);

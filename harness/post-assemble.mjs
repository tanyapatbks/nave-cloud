#!/usr/bin/env node
// Post-assembly fixes for index.html, run after assemble-index + transitions inject:
// (1) load the local GSAP copy instead of the CDN tag assemble-index writes (no network at
//     render time; frames use the same local 3.15.0);
// (2) mount each persistent layer listed in <project>/layers.json (e.g. the chrome tracker +
//     term chip, a roadmap rail) on top of the frames it spans, from its first frame's start
//     to the start of its `until` frame plus `tail` (the length of that frame's transition),
//     and check that each layer's own timeline agrees with the assembled frame starts.
// With --sync, each layer's start table, END and duration are rewritten from index.html first.
// Idempotent. Usage: node harness/post-assemble.mjs [project_dir] [--sync]
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const sync = args.includes("--sync");
const project = args.find((a) => !a.startsWith("--")) ?? "videos/rtn-rag-explainer";
const path = join(project, "index.html");
let html = readFileSync(path, "utf8");
const { layers } = JSON.parse(readFileSync(join(project, "layers.json"), "utf8"));

html = html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@[^"]+"[^>]*><\/script>/, '<script src="assets/vendor/gsap.min.js"></script>');
if (/cdn\.|https?:\/\//.test(html.replace(/<!--[\s\S]*?-->/g, ""))) throw new Error("index.html still references a network URL");

const attr = (id, name) => {
  const m = new RegExp(`id="${id}"[\\s\\S]*?${name}="([\\d.]+)"`).exec(html);
  if (!m) throw new Error(`missing ${name} on #${id}`);
  return parseFloat(m[1]);
};
const round = (x) => +x.toFixed(3);

let failed = false;
const report = [];
layers.forEach((layer, i) => {
  const start = attr(`el-${layer.frames[0]}`, "data-start");
  const end = attr(`el-${layer.until}`, "data-start") + layer.tail;
  const dur = round(end - start);
  const mount = `      <div
        id="el-${layer.id}"
        class="scene"
        data-composition-id="${layer.id}"
        data-composition-src="${layer.src}"
        data-start="${start}"
        data-duration="${dur}"
        data-track-index="${layer.track ?? 2 + i}"
      ></div>
`;
  html = html.replace(new RegExp(`\\n      <div\\n        id="el-${layer.id}"[\\s\\S]*?></div>\\n`), "\n");
  const anchor = new RegExp(`(id="el-${layer.until}"[\\s\\S]*?></div>\\n)`);
  if (!anchor.test(html)) throw new Error(`frame ${layer.until} mount not found`);
  html = html.replace(anchor, `$1\n${mount}`);

  // The layer's own timeline must agree with the assembled frame starts.
  const want = Object.fromEntries(layer.frames.map((id) => [id.slice(0, 2), round(attr(`el-${id}`, "data-start") - start)]));
  const endWant = round(end - layer.tail - start);
  if (sync) {
    const file = join(project, layer.src);
    writeFileSync(file, readFileSync(file, "utf8")
      .replace(/var starts = \{[^}]+\}/, `var starts = ${JSON.stringify(want)}`)
      .replace(/var END = [\d.]+/, `var END = ${endWant}`)
      .replace(new RegExp(`(data-composition-id="${layer.id}"[^>]*data-duration=")[\\d.]+"`), `$1${dur}"`)
      .replace(/tl\.to\(\{\}, \{ duration: [\d.]+ \}, 0\);/, `tl.to({}, { duration: ${dur} }, 0);`));
  }
  const src = readFileSync(join(project, layer.src), "utf8");
  const have = JSON.parse(/var starts = (\{[^}]+\})/.exec(src)[1]);
  const endHave = parseFloat(/var END = ([\d.]+)/.exec(src)[1]);
  const durHave = parseFloat(new RegExp(`data-composition-id="${layer.id}"[^>]*data-duration="([\\d.]+)"`).exec(src)[1]);
  const bad = Object.keys(want).filter((k) => have[k] !== want[k]);
  if (bad.length || endHave !== endWant || durHave !== dur) {
    console.error(`${layer.src} out of sync: starts should be ${JSON.stringify(want)}, END ${endWant}, data-duration ${dur}`);
    failed = true;
  }
  report.push(`${layer.id} ${start}–${round(end)}s (${dur}s)`);
});
writeFileSync(path, html);
if (failed) process.exit(1);
console.log(`post-assemble: local GSAP; mounted ${report.join("; ")}; layer timelines in sync`);

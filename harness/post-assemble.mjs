#!/usr/bin/env node
// Post-assembly fixes for index.html, run after assemble-index + transitions inject:
// (1) load the local GSAP copy instead of the CDN tag assemble-index writes (no network at
//     render time; frames use the same local 3.15.0);
// (2) mount the persistent chrome layer (compositions/chrome.html: tracker + term chip) on top
//     of every frame, from frame 02's start to the end of the blur-crossfade into frame 11.
// Idempotent. Usage: node harness/post-assemble.mjs [project_dir]
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const project = process.argv[2] ?? "videos/rtn-rag-explainer";
const path = join(project, "index.html");
let html = readFileSync(path, "utf8");

html = html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/gsap@[^"]+"[^>]*><\/script>/, '<script src="assets/vendor/gsap.min.js"></script>');
if (/cdn\.|https?:\/\//.test(html.replace(/<!--[\s\S]*?-->/g, ""))) throw new Error("index.html still references a network URL");

const attr = (id, name) => {
  const m = new RegExp(`id="${id}"[\\s\\S]*?${name}="([\\d.]+)"`).exec(html);
  if (!m) throw new Error(`missing ${name} on #${id}`);
  return parseFloat(m[1]);
};
const start = attr("el-02-ingest", "data-start");
const end = attr("el-11-close", "data-start") + 0.6; // blur-crossfade length
const dur = +(end - start).toFixed(3);

const mount = `      <div
        id="el-chrome"
        class="scene"
        data-composition-id="chrome"
        data-composition-src="compositions/chrome.html"
        data-start="${start}"
        data-duration="${dur}"
        data-track-index="2"
      ></div>
`;
html = html.replace(/\n      <div\n        id="el-chrome"[\s\S]*?><\/div>\n/, "\n");
const anchor = /(id="el-11-close"[\s\S]*?><\/div>\n)/;
if (!anchor.test(html)) throw new Error("frame 11 mount not found");
html = html.replace(anchor, `$1\n${mount}`);
writeFileSync(path, html);

// The chrome's own timeline must agree with the assembled frame starts.
const chrome = readFileSync(join(project, "compositions/chrome.html"), "utf8");
const want = Object.fromEntries(
  ["02-ingest", "03-filename", "04-tags", "05-pipeline", "06-hybrid", "07-rerank", "08-two-people", "09-scope", "10-prefilter"]
    .map((id) => [id.slice(0, 2), +(attr(`el-${id}`, "data-start") - start).toFixed(3)]),
);
const have = JSON.parse(/var starts = (\{[^}]+\})/.exec(chrome)[1]);
const endHave = parseFloat(/var END = ([\d.]+)/.exec(chrome)[1]);
const durHave = parseFloat(/data-composition-id="chrome"[^>]*data-duration="([\d.]+)"/.exec(chrome)[1]);
const bad = Object.keys(want).filter((k) => have[k] !== want[k]);
if (bad.length || endHave !== +(end - 0.6 - start).toFixed(3) || durHave !== dur) {
  console.error(`chrome.html out of sync: starts should be ${JSON.stringify(want)}, END ${end - 0.6 - start}, data-duration ${dur}`);
  process.exit(1);
}
console.log(`post-assemble: local GSAP; chrome mounted ${start}–${end}s (${dur}s); chrome timeline in sync`);

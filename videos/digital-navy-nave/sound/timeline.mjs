#!/usr/bin/env node
// Writes sound/timeline.json — the film's duration and every frame's global start — from the
// assembled index.html, so the cue sheet (sound/cues.py) always follows the current cut.
// Usage (from videos/digital-navy-nave): node sound/timeline.mjs
import { readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const duration = parseFloat(/data-composition-id="main"[\s\S]*?data-duration="([\d.]+)"/.exec(html)[1]);
const starts = {};
for (const m of html.matchAll(/id="el-(\d\d-[\w-]+)"[\s\S]*?data-start="([\d.]+)"/g)) starts[m[1]] = parseFloat(m[2]);
writeFileSync("sound/timeline.json", JSON.stringify({ duration, starts }, null, 2) + "\n");
console.log(`sound/timeline.json: ${duration}s, ${Object.keys(starts).length} frames`);

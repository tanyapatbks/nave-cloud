#!/usr/bin/env node
// Regenerates qa/copy-deck.md (what the critics check each frame against) from STORYBOARD.md,
// so frame windows and cue times can never drift from the storyboard.
// Usage: node harness/make-copy-deck.mjs [STORYBOARD.md] [qa/copy-deck.md]
import { readFileSync, writeFileSync } from "node:fs";

const sbPath = process.argv[2] ?? "videos/rtn-rag-explainer/STORYBOARD.md";
const out = process.argv[3] ?? "qa/copy-deck.md";
const md = readFileSync(sbPath, "utf8");

const intro = `# Copy deck — RTN permission-aware RAG explainer (draft review)

Generated from \`STORYBOARD.md\` by \`harness/make-copy-deck.mjs\`; do not edit by hand.

Global times are in the assembled video (transitions overlap neighbouring frames by ~0.5 s). The on-screen copy below is the ONLY text the film should show, plus the 3-step tracker \`1 อ่านได้ · 2 ค้นเจอ · 3 ตามสิทธิ์\` and an English term chip in the top band of frames 02–10. From frame 02 to frame 10 those two sit on one persistent layer above all transitions (they never slide or crossfade with a frame). There is no narration.
`;

const briefPoints = `## Brief points that must all be present and correct

1. 120+ years of Navy data in many forms (PDFs, scans/images, charts, tables); the question "how do we build RAG for the RTN?"
2. Ingestion by modality: PDFs → text + structure; scans/images → OCR + vision models; charts/tables → their actual data and relationships.
3. Filename metadata convention <sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf with the example ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf (หน่วย กอง/แผนก · เจ้าของ หน่วยขึ้นตรง · เลขประจำตัว 10 หลักของผู้นำเข้า · เวอร์ชัน · ปี · ชื่อเอกสาร).
4. Data governance: every doc/chunk carries SourceID, Version, Classification, Access metadata.
5. Pipeline order: Ingest → Parse → Clean → Chunk → Embed → Index.
6. Hybrid search: keyword (exact names, IDs, terms) + vector (meaning) + metadata filters (date, department, access); do not rely on vector search alone.
7. A reranker selects the most relevant results before the LLM (or another system).
8. If a person cannot open a document, RAG must not retrieve it.
9. Real permissions come from identity + the ACL in the document registry; docs, chunks, tree nodes and agent tools share the same scope.
10. The scope is applied BEFORE searching; never search the whole archive and filter afterwards.
11. Closing: the hardest part is not embeddings; it is turning 120+ years of messy multimodal Navy data into reliable, searchable, permission-aware knowledge.

Constraints: no ships / naval decoration / insignia; never addresses the audience (no "ผู้บังคับบัญชา", "ผู้ไม่มีพื้นฐาน"); no invented numbers or document contents; Thai + English technical terms.
`;

let t = 0;
const sections = [];
for (const block of md.split(/^## Frame /m).slice(1)) {
  const title = block.split("\n")[0].trim();
  const dur = parseFloat(/^- duration:\s*([\d.]+)s/m.exec(block)[1]);
  const term = /^- term:\s*(.+)$/m.exec(block)?.[1]?.trim();
  const onscreen = /^- onscreen:\s*(.+)$/m.exec(block)?.[1]?.trim() ?? "";
  const teach = /^keyMessage:\s*(.+)$/m.exec(block)?.[1]?.trim() ?? "";
  const [num, ...rest] = title.split(" — ");
  const lines = [`## Frame ${num.padStart(2, "0")} — ${rest.join(" — ")}  ·  ${t.toFixed(1)}–${(t + dur).toFixed(1)} s`];
  if (term) lines.push(`- term chip: ${term}`);
  lines.push(`- on-screen copy (local cue times): ${onscreen}`, `- must teach: ${teach}`);
  sections.push(lines.join("\n"));
  t += dur;
}
writeFileSync(out, [intro, ...sections, briefPoints].join("\n\n"));
console.log(`wrote ${out}: ${sections.length} frames, ${t} s`);

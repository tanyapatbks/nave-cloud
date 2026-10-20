---
format: 1920x1080
duration: 107s
message: "RAG ที่ใช้ได้จริงกับ ทร. เริ่มจากคลังที่พร้อมและสิทธิ์ที่ถูกต้อง ไม่ใช่แค่ Embedding"
arc: concept-explainer with process
audience: "กำลังพลและผู้บริหารของกองทัพเรือ ทั้งที่มีและไม่มีพื้นฐานเทคนิค"
mode: autonomous
music: none
---

## Video direction

- **Story spine.** One example document (`ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf`, the brief's own example) and one example question are followed through the whole system: archive → made readable → named → split and labelled → indexed → found by three kinds of search → ranked → and finally **found by one person and invisible to another**. Three chapters, shown by the persistent tracker: **1 อ่านได้ (make it readable) · 2 ค้นเจอ (find it) · 3 ตามสิทธิ์ (only what you may see)** (numerals in a bold badge; circled digits are not in the fonts). Close on the brief's own last line.
- **Palette** (from `frame.md`): cream ground; near-black headlines; **cobalt = the active thing** (the question, the AI's reach, the permission scope); greys = outside scope / not yet relevant; `positive` / `negative` only as small ✓ / ✗ chips, and `negative` only in frames 08 and 10. Atmosphere (concentric rings, dot grid) only on frames 01 and 11.
- **No narration.** There is no voice-over and no caption track. Each frame's `onscreen:` lines are the visible copy — render exactly, revealed at their cue times (they replace VO cues). Plain Thai phrase first; the English technical term rides as a small mono chip (`term:` or inline chip). Never address the audience.
- **Reading budget (harness-enforced).** ≤ 17 Thai chars/s hard ceiling; plan ~8–12; ≤ 35 base chars per line; ≤ 2 lines per block; every text block stays on screen until its frame ends (no text is removed mid-frame except where a Scene says so); final card holds ≥ 3 s.
- **Motion grammar.** Smooth long-tail settles (`power3` default, `expo.out` for fast arrivals); **no bounce / back / elastic**. Reveal each piece on its cue across the shot, especially the back half; never front-load. Entrances are `fromTo`. Thai text reveals per word/phrase, never per character. The only aliveness during holds is subtle jitter on at most one element; prefer stillness. One camera move per frame at most; no slow back-half pans or pushes. Within-frame seams follow `cut-catalog.md`.
- **Rhythm / stillness allocation.** Held beats: end of 04 (labels read), 07 (the cut line), 11 (final card ≥ 3 s). Busiest frames: 02, 05, 06, 10 — keep their elements few and large.
- **Continuity.** The document tile (frame.md component 3) is the recurring object; the example document is the cobalt-outlined tile in every frame it appears. The permission scope (component 4) first appears in 06 as a filter chip, becomes a boundary in 09, and frames the whole archive in 11.
- **Negative list.** No ships, anchors, waves, naval insignia, the RTN emblem, flags, uniforms or people photos. No stock "AI" purple-blue gradients, no bokeh, no glows. No invented numbers, page counts, or document contents (example values are illustrative and marked `ตัวอย่าง`). No genuine-looking classified stamps. Both motion failure modes are banned: slideshow (dump then freeze) and screensaver (many things floating). No `Math.random`, no CSS transitions/keyframes, no `repeat`/`yoyo`.
- **Transitions.** Three types only: `crossfade` (chapter changes), `push-slide LEFT` (consecutive steps inside a chapter), `blur-crossfade` (into the close).

## Frame 1 — 120 ปีของเอกสาร และคำถามเดียว

- scene: Mixed archive tiles cascade into a wall behind a big "120+" — then the question lands
- voiceover:
- duration: 9s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Stakes by scale (concretization) + rhetorical question
- beat: Curiosity + weight
- blueprint: grid-card-assemble (Adapt)
- focal: the "120+" numeral, then the question headline
- roles: archive wall of ~40 document tiles = background (dimmed to ~40% once the question lands) · "120+" = foreground subject · kind chips = supporting · question headline = foreground subject (Scene 3) · chapter tracker = supporting (Scene 4)
- onscreen: "120+" (0.3s) · "ปี ของข้อมูลกองทัพเรือ" (1.2s) · chips "PDF" "ภาพสแกน" "รูปภาพ" "แผนภูมิ" "ตาราง" (2.4s, staggered) · headline line 1 "แล้วเราจะจัดทำ RAG" + line 2 "ให้กับ ทร. ได้อย่างไร?" (4.6s) · chip under RAG "ค้นเอกสารจริงก่อน แล้วจึงตอบ" (6.0s) · tracker "1 อ่านได้" "2 ค้นเจอ" "3 ตามสิทธิ์" (7.3s)

narrativeRole: Opens the gap — a huge, mixed archive and one plain question about it.
keyMessage: The Navy has 120+ years of documents in many forms; the question is how to make an AI answer from them.

Adapt: keep the staggered self-assemble cascade (signature move) but the tiles form a dense archive wall behind a numeral instead of a feature grid; no zoom-out.
Scene 1 (0.0–2.4s): cream ground with faint concentric rings (atmosphere allowed here). "120+" in display cobalt, ~220px, left-centre at y≈330, counts up 0→120 then the "+" lands (`counting-dynamic-scale`, smooth settle). "ปี ของข้อมูลกองทัพเรือ" per-phrase reveal beneath it (`dynamic-content-sequencing`). On the right 60% of the frame, document tiles (frame.md component 3: PDF, scan, image, chart, table kinds) cascade in row by row, left-to-right stagger by index (the blueprint's staggered self-assemble; deterministic order). Asymmetric 40/60.
Scene 2 (2.4–4.6s): five kind chips settle onto five representative tiles in turn (smooth `power3` fromTo, no overshoot), one chip per ~0.3s. The wall finishes filling (~40 tiles). Nothing else moves.
Scene 3 (4.6–7.3s): the wall dims to ~40% (`depth-of-field-blur`, light blur 4px); the numeral block slides up and shrinks into a small eyebrow position; the question headline enters per phrase centre-left at y≈430 (two authored lines). At 6.0s the gloss chip appears under "RAG" (mono 24px, cobalt on `accent-light`). One tile in the wall — the example document — keeps its cobalt outline and full opacity (planting the hero object).
Scene 4 (7.3–9.0s): the chapter tracker (frame.md component 1) assembles in the top band, three pills left-to-right, all in the "upcoming" state; hold still to the end (held read).

## Frame 2 — ทำให้ AI อ่านเอกสารได้

- scene: Three lanes — PDF, scans/images, charts/tables — each input transforms into machine-readable output
- voiceover:
- duration: 11s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-ingest.html
- type: feature_showcase
- persuasion: Progressive disclosure + concretization (show each transformation)
- beat: Orientation → comprehension
- blueprint: compose
- term: Ingestion Pipeline
- focal: the three transforming inputs (one at a time)
- roles: header/tracker = supporting (① current) · three lanes = foreground subject, built one after another · arrows = supporting · English chips = supporting
- onscreen: headline "ขั้นแรก: ทำให้ AI อ่านเอกสารได้" (0.3s) · lane 1 "เอกสาร PDF" → "ดึงข้อความ + โครงสร้าง" (1.4s) · lane 2 "ภาพสแกน / รูปภาพ" → "อ่านตัวอักษร + เข้าใจภาพ" chip "OCR + Vision Models" (4.2s) · lane 3 "แผนภูมิ / ตาราง" → "ดึงตัวเลขจริง + ความสัมพันธ์" (7.0s)

narrativeRole: Shows that "making the archive readable" means a different treatment per kind of material, not one text dump.
keyMessage: PDFs keep their structure, scans are read by OCR and vision models, and charts/tables give up their real numbers.

Scene 1 (0.0–1.4s): header band (tracker ① current, term chip "Ingestion Pipeline") is present from t=0; headline per-phrase reveal at top-left (component 2). Below it, three empty lane rows (full-width strip framing, rows at y≈390 / 560 / 730, each ~150px tall) faintly ruled in `border`.
Scene 2 (1.4–4.2s): lane 1. Left: a PDF page tile (Sarabun interior, headings + paragraphs). An arrow self-draws (`svg-path-draw`). Right: the page's content re-forms as a structured outline — three heading bars with indented paragraph bars and a small tree glyph — sliding out of the page (`scale-swap-transition`). Label "เอกสาร PDF" left, result "ดึงข้อความ + โครงสร้าง" right (no chip on this lane).
Scene 3 (4.2–7.0s): lane 2. Left: a skewed, noisy scanned page (grey speckle drawn deterministically, slight rotation) and a photo tile. The arrow draws; on the right, a block of scrambled glyphs resolves into three clean Thai text lines (`hacker-flip-3d`, resolving per word, never per Thai character) plus a short image caption bar — the visible act of machine reading. Label left, result right, chip "OCR + Vision Models" beneath the result.
Scene 4 (7.0–9.6s): lane 3. Left: a small bar chart and a grid table. The arrow draws; on the right, the bars lift off and become rows of a clean two-column table with values shown as `— figure —` placeholders (no invented numbers), and two thin connector lines link a row to its column header (relationships). Label left, result right (no chip).
Scene 5 (9.6–11.0s): hold all three lanes still (held read); at most subtle jitter on nothing — stillness.

## Frame 3 — ชื่อไฟล์บอกที่มาในบรรทัดเดียว

- scene: The example filename assembles token by token, each token labelled; a bridge line separates naming from real permissions
- voiceover:
- duration: 12s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-filename.html
- type: feature_showcase
- persuasion: Worked example (the brief's own filename, slot by slot) + signposting
- beat: Clarity + "aha"
- blueprint: kinetic-type-beats (Adapt)
- term: Metadata
- focal: the filename strip
- roles: header/tracker = supporting (① current) · filename strip = foreground subject · token labels = supporting · bridge line = foreground subject (Scene 4)
- onscreen: headline "ตั้งชื่อไฟล์แบบเดียวกันทุกไฟล์" (0.3s) · tokens + labels in order: "ศซบ" "หน่วย · กอง/แผนก" (1.4s) · "สสท" "เจ้าของ · หน่วยขึ้นตรง" (2.4s) · "2600000001" "ผู้นำเข้า · เลข 10 หลัก" (3.4s) · "v02" "เวอร์ชัน" (4.4s) · "2569" "ปี พ.ศ." (5.2s) · "นโยบาย69" "ชื่อเอกสาร" (6.0s) · ".pdf" (6.8s) · bridge "สิทธิ์จริง อยู่ในทะเบียนเอกสาร" (8.6s)

narrativeRole: Makes the naming convention concrete with the brief's own example, and plants the idea that permissions do not live in the filename.
keyMessage: One standard filename (<sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf) tells you unit, owner, who ingested it, version, year and name — but access rights come from the document registry.

Adapt: keep the in-place line build (each beat its own move) but the "words" are filename tokens snapping into one strip, each dropping a label beneath.
Scene 1 (0.0–1.4s): header present; headline per-phrase reveal.
Scene 2 (1.4–7.4s): the filename strip builds centred at y≈480: each token arrives as its own mono pill (IBM Plex Mono with Thai fallback, ~46px) with "_" separators, left to right on its cue (`dynamic-content-sequencing`); as each lands, a thin cobalt tick draws down (`svg-path-draw`) to its two-line label beneath (label line 1 in IBM Plex Sans Thai 600 30px, line 2 muted 26px). Tokens never shift once placed; the strip is laid out from the start so later tokens do not push earlier ones.
Scene 3 (7.4–8.6s): the finished strip gains the example-document cobalt outline glyph at its left end (it is the same document as frame 1's hero tile). Hold.
Scene 4 (8.6–12.0s): the bridge line reveals per phrase at y≈790 inside a split-highlight block (4px cobalt left rule): "สิทธิ์จริง" then "อยู่ในทะเบียนเอกสาร" in cobalt weight 600 — planting frame 9. Hold still.

## Frame 4 — ทุกชิ้นติดป้ายเดิม

- scene: The example document splits into chunks and tree nodes; one metadata tag is stamped onto every piece
- voiceover:
- duration: 9s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/04-tags.html
- type: feature_showcase
- persuasion: Concretization (label inheritance made visible) + question→answer pairing
- beat: Comprehension + confidence
- blueprint: compose
- term: Data Governance
- focal: the metadata tag card, then its copies on each chunk
- roles: header/tracker = supporting (① current) · example document = foreground subject (Scene 1) · chunks + tree nodes = foreground subject (Scene 2) · tag card = foreground subject (Scene 3) · mini badges = supporting
- onscreen: headline "แบ่งเป็นชิ้น — ทุกชิ้นติดป้ายเดิม" (0.3s) · chip "Chunk" (1.4s) · tag rows "มาจากไหน? · SourceID" (2.8s) "ฉบับไหน? · Version" (3.5s) "ลับแค่ไหน? · Classification" (4.2s) "ใครเห็นได้? · Access" (4.9s) · chip "Tree Nodes" (6.4s)

narrativeRole: Shows that governance metadata is inherited by every piece the system will ever search — nothing travels unlabelled.
keyMessage: Every document and every chunk carries SourceID, Version, Classification and Access.

Scene 1 (0.0–1.4s): header present; headline per-phrase reveal; the example document tile (large, ~260×340, Sarabun interior) sits centre-left at y≈560.
Scene 2 (1.4–2.8s): the document splits into four horizontal chunk cards that fan out to the right in a column (`center-outward-expansion`, ordered by index); chip "Chunk" pops by the first card.
Scene 3 (2.8–6.0s): the metadata tag card (frame.md component 7) appears to the left of the column; its four rows reveal one by one on their cues, each row's question in Thai 600 and term in mono cobalt. As the fourth row lands, the tag "stamps" a 4-dot mini badge onto every chunk card in order (deterministic stagger, short smooth settle) — the inheritance.
Scene 4 (6.0–9.0s): two tree-node pills (section headings of the same document) attach above the chunk column with thin connector lines (`svg-path-draw`), and each receives the same mini badge; chip "Tree Nodes". Hold still (held read) from 7.2s.

## Frame 5 — จากไฟล์ สู่ดัชนีที่ค้นได้

- scene: The example document rides a six-station line; each station visibly changes it; it ends in the index
- voiceover:
- duration: 9s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-pipeline.html
- type: feature_showcase
- persuasion: Causal chain (A → B → C) + signposting
- beat: Momentum + mastery
- blueprint: spatial-pan-stations (Adapt)
- term: Ingest → Index
- focal: the travelling document token at the current station
- roles: header/tracker = supporting (① current) · six station cards = foreground subject (one lit at a time) · travelling token = foreground subject · index stack = foreground subject (Scene 3) · connector line = supporting
- onscreen: headline "จากไฟล์ สู่ดัชนีที่ค้นได้" (0.3s) · stations in order, each Thai + English: "รับเข้า · Ingest" (1.0s) "แยกส่วน · Parse" (1.8s) "ทำความสะอาด · Clean" (2.6s) with micro "๒๕๖๙ → 2569" (2.9s) "ตัดเป็นชิ้น · Chunk" (3.6s) "แปลงเป็นความหมาย · Embed" (4.4s) "ทำดัชนี · Index" (5.2s)

narrativeRole: Names the whole processing line once, in order, with a visible effect at each step, so the later search makes sense.
keyMessage: Ingest → Parse → Clean → Chunk → Embed → Index turns a file into indexes that can be searched.

Adapt: keep stations on one canvas visited in turn (signature move) but without a long camera traverse: all six stations fit one full-width strip and a cobalt token travels along it; the "camera" is the station highlight.
Scene 1 (0.0–1.0s): header present; headline per-phrase reveal; a full-width strip of six station cards at y≈470 (each ~240×150, `card-tinted`), all at 35% opacity, linked by a thin line.
Scene 2 (1.0–6.0s): on each cue, the station lights to full opacity, its label reveals (Thai 600 30px over mono 22px), and the travelling document token (small cobalt-outlined tile) slides to it along the line (`viewport-change`-style lock, smooth `power3`) and changes form there: Ingest → a ✓ filename check; Parse → splits into heading/paragraph bars; Clean → the micro "๒๕๖๙ → 2569" swaps in place (`discrete-text-sequence`); Chunk → four small cards; Embed → the cards become four dots; Index → the dots drop downward. Previously lit stations stay lit.
Scene 3 (6.0–9.0s): below the Index station at y≈720, an index stack (four stacked drawer bars, no labels, cobalt 40%) fills in (`stat-bars-and-fills`) and the four dots drop into it, one per drawer. Hold still from 7.2s.

## Frame 6 — ค้นหา 3 ทางพร้อมกัน

- scene: One question runs through three searches at once; each catches different pieces; their results merge
- voiceover:
- duration: 11s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-hybrid.html
- type: feature_showcase
- persuasion: Comparison of options + counterexample (each alone misses something)
- beat: Comprehension + "aha"
- blueprint: compose
- term: Hybrid Search
- focal: the question card, then the merge
- roles: header/tracker = supporting (① done, ② current) · question card = foreground subject · three lanes = foreground subject · result markers (squares / circles / filter chips) = supporting · merge bracket = foreground subject (Scene 4)
- onscreen: headline "ค้นหา 3 ทางพร้อมกัน" (0.3s) · question card "แนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s) · lane "ค้นคำตรงตัว" chip "Keyword" sub "ชื่อ · รหัส · คำเฉพาะ" (2.4s) · lane "ค้นตามความหมาย" chip "Vector" sub "แนวทางปฏิบัติ ≈ นโยบาย" (4.0s) · lane "กรองตามป้าย" chip "Metadata" filter chips "ปี 2569" "หน่วย สสท./ศซบ." "ขอบเขตสิทธิ์" (5.6s) · merge label "รวมผล" (7.4s)

narrativeRole: Explains why vector search alone is not enough: exact names/IDs, meaning, and filters each catch what the others miss.
keyMessage: Hybrid search combines keyword, vector and metadata filters; together they find what one method alone misses.

Scene 1 (0.0–2.4s): header present (tracker updates: ① done, ② current); headline per-phrase reveal; the question card (component 5) enters at upper-left (x 96, y≈300, width ~720). Three empty lane rows to its right (x 900–1824) at y≈300 / 470 / 640.
Scene 2 (2.4–4.0s): keyword lane reveals (label + chip + sub). Within the question card, the words "ศซบ." and "69" get a cobalt square underline; three small square markers light on matching tiles in the lane — and the phrase "แนวทางปฏิบัติ" stays unmarked (a miss).
Scene 3 (4.0–5.6s): vector lane reveals. "แนวทางปฏิบัติ" gets a cobalt circle; circle markers land on tiles labelled "นโยบาย" (meaning match) — including one tile of another unit (a plausible near-miss shown slightly greyer).
Scene 4 (5.6–7.4s): metadata lane reveals as three filter chips (ปี 2569 · หน่วย สสท./ศซบ. · ขอบเขตสิทธิ์) that sweep across the lane and grey out the off-target tiles (the other-unit tile fades to 35%).
Scene 5 (7.4–11.0s): a cobalt bracket self-draws across the right ends of all three lanes (`svg-path-draw`) and collapses the surviving markers into one short result stack of three tiles, the example document on top with its cobalt outline; label "รวมผล". Hold still from 9.0s.

## Frame 7 — คัดตัวจริง ก่อนส่งให้ AI ตอบ

- scene: A scoreboard of candidates is re-ranked; a cut line keeps the top three; only they reach the AI, which answers with a citation
- voiceover:
- duration: 7s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-rerank.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + distillation
- beat: Focus + confidence
- blueprint: compose
- term: Reranker
- focal: the cut line, then the answer card
- roles: header/tracker = supporting (② current) · candidate rows = foreground subject · relevance bars = supporting · cut line = foreground subject · answer card = foreground subject (Scene 3)
- onscreen: headline "คัดตัวจริง ก่อนส่งให้ AI ตอบ" (0.3s) · cut-line label "Top 3" (2.4s) · answer card "คำตอบ พร้อมแหล่งอ้างอิง" (4.2s) · citation chip "อ้างอิง: นโยบาย69 · v02" (4.8s) · chip "LLM / ระบบอื่น" (5.3s)

narrativeRole: Shows that only the most relevant few results — not everything retrieved — are passed on, and the answer cites its source.
keyMessage: A reranker picks the most relevant results before the LLM (or another system) uses them.

Scene 1 (0.0–1.0s): header present; headline per-phrase reveal; eight candidate rows (small tile glyph + grey title bar + relevance bar track) stacked on the left half, y 300–860, unsorted.
Scene 2 (1.0–2.4s): relevance bars fill to their (ordinal, unlabelled) lengths (`stat-bars-and-fills`), then the rows re-sort by bar length with smooth `power3` vertical moves (deterministic order); the example document rises to row 1.
Scene 3 (2.4–4.2s): a cobalt cut line self-draws under row 3 with label "Top 3"; rows 4–8 fade to 35% (`depth-of-field-blur`, light).
Scene 4 (4.2–7.0s): the top three rows slide right into an answer card (`card-morph-anchor`) on the right half; the card's line "คำตอบ พร้อมแหล่งอ้างอิง" reveals, then the citation chip, then the "LLM / ระบบอื่น" chip on the card's edge. Hold still from 5.8s.

## Frame 8 — คำถามเดียวกัน คำตอบตามสิทธิ์

- scene: Two personnel ask the identical question; one gets the document, the other gets nothing — not even a trace
- voiceover:
- duration: 9s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-two-people.html
- type: benefit_highlight
- persuasion: Before/after (same input, different identity) + demonstration
- beat: Recognition + unease → reassurance
- blueprint: comparison-split (Adapt)
- term: Access Control
- focal: the two result cards
- roles: header/tracker = supporting (①② done, ③ current) · two identity badges = foreground subject · shared question card = supporting · result cards = foreground subject · ✓/✗ chips = supporting
- onscreen: headline "คำถามเดียวกัน — คำตอบตามสิทธิ์" (0.3s) · badge left "กำลังพล ก" + chip "มีสิทธิ์" (1.2s) · badge right "กำลังพล ข" + chip "ไม่มีสิทธิ์" (1.6s) · question card (small, centred) "แนวทางปฏิบัติปี 69 ของ ศซบ." (2.4s) · left result "✓ พบ: นโยบาย69" (4.0s) · right result "ไม่พบเอกสารในสิทธิ์ของท่าน" (5.0s)

narrativeRole: Makes access control concrete: the same question must give different answers when permissions differ.
keyMessage: If someone may not open a document, the AI must not find it for them either.

Adapt: keep the two equal cards entering from opposite wings with mirrored tilts (signature move) and the inner-edge badge pop; the badges become ✓ / ✗ result chips.
Scene 1 (0.0–2.4s): header present (③ current); headline per-phrase reveal; two identity cards (avatar silhouette circle + name + unit chip — no photos, no uniforms) enter from opposite wings with mirrored tilts (`split-tilt-cards`) at y≈420, left x≈96–860, right x≈1060–1824; their chips "มีสิทธิ์" (cobalt) and "ไม่มีสิทธิ์" (grey) pop.
Scene 2 (2.4–4.0s): a small question card drops in centred between them (y≈320) and two thin lines draw from it to each side — the identical question.
Scene 3 (4.0–5.0s): left result card fills in: the example document tile (cobalt outline) + "✓ พบ: นโยบาย69" (`positive` chip).
Scene 4 (5.0–9.0s): right result card fills in empty: no tile, no greyed placeholder, only the line "ไม่พบเอกสารในสิทธิ์ของท่าน" in `text-muted`. Hold still from 6.4s.

## Frame 9 — สิทธิ์จริงมาจากตัวตน + ทะเบียนเอกสาร

- scene: An identity badge and the document registry combine into one permission scope that wraps docs, chunks, tree nodes and agent tools
- voiceover:
- duration: 10s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-scope.html
- type: feature_showcase
- persuasion: Causal chain + frame-then-fill (the boundary, then what it contains)
- beat: Clarity + resolve
- blueprint: compose
- term: Identity + ACL
- focal: the permission scope boundary
- roles: header/tracker = supporting (③ current) · identity badge = foreground subject · registry ledger = foreground subject · scope boundary = foreground subject · four object icons = supporting → foreground inside the boundary
- onscreen: headline "สิทธิ์จริงมาจาก" + "ตัวตน + ทะเบียนเอกสาร" (0.3s) · badge chip "Identity" (1.4s) · ledger chip "ACL" (2.2s) · scope pill "ขอบเขตสิทธิ์เดียวกัน" (3.8s) · four items inside in order "เอกสาร · Docs" (4.8s) "ชิ้นข้อมูล · Chunks" (5.4s) "สารบัญ · Tree Nodes" (6.0s) "เครื่องมือ AI · Agent Tools" (6.6s)

narrativeRole: Explains where permission really comes from and that one scope governs every retrievable thing, including the AI's tools.
keyMessage: Identity + the ACL in the document registry define one permission scope shared by docs, chunks, tree nodes and agent tools.

Scene 1 (0.0–3.0s): header present; headline per-phrase reveal (line 2 "ตัวตน + ทะเบียนเอกสาร" with the two nouns in cobalt weight). Left column: an identity badge card (silhouette circle + three grey attribute bars, no text) at y≈400 with chip "Identity"; below it a registry ledger card (Sarabun-styled grid: two columns of grey value bars, the example document's row highlighted cobalt, no readable text) at y≈620 with chip "ACL".
Scene 2 (3.0–4.8s): both cards emit a thin cobalt line to the right that converge at x≈980; from there the permission scope boundary (component 4) self-draws as a large rounded rectangle over the right 50% (x 980–1824, y 330–860) (`svg-path-draw`); label pill "ขอบเขตสิทธิ์เดียวกัน" on its top edge.
Scene 3 (4.8–7.4s): four object cards reveal inside the boundary in a 2×2 grid on their cues (`grid-card-assemble` stagger), each Thai name over its English chip, each wearing the 4-dot mini badge from frame 4.
Scene 4 (7.4–10.0s): hold still (held read).

## Frame 10 — กำหนดขอบเขตก่อน แล้วค่อยค้น

- scene: Split screen — searching everything then filtering leaves residue; scoping first never touches what is off-limits
- voiceover:
- duration: 10s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/10-prefilter.html
- type: benefit_highlight
- persuasion: Before/after + counterexample (the wrong way shown running)
- beat: Unease → conviction
- blueprint: comparison-split (Adapt)
- term: Pre-filter
- focal: the right panel's untouched restricted tiles
- roles: header/tracker = supporting (③ current) · left panel (wrong way) = foreground subject · right panel (right way) = foreground subject · search beam = supporting · residue marks = supporting · rule line = foreground subject (Scene 4)
- onscreen: headline "กำหนดขอบเขตก่อน แล้วค่อยค้น" (0.3s) · left label "× ค้นทั้งคลัง แล้วค่อยกรอง" (1.0s) · residue chips "log" "จำนวนผล" "สรุป" (3.0s) · right label "✓ ขอบเขตก่อน แล้วค่อยค้น" (4.2s) · rule "ถ้ากำลังพลเปิดเอกสารไม่ได้" + "RAG ก็ต้องดึงเอกสารนั้นไม่ได้" (6.4s)

narrativeRole: The climax — shows why filtering after the search is unsafe and why the scope must be applied before searching.
keyMessage: Never search the whole archive and filter afterwards; apply the permission scope first.

Adapt: keep two equal panels from opposite wings (signature) but flat (no tilt) so the grids stay readable; the inner-edge badges become ✗ / ✓ labels.
Scene 1 (0.0–1.0s): header present; headline per-phrase reveal; two equal panels enter from opposite wings (x 96–900 and 1020–1824, y 300–760), each containing the same 4×3 grid of document tiles with three restricted tiles (lock glyph).
Scene 2 (1.0–4.2s): left panel only — label "× ค้นทั้งคลัง แล้วค่อยกรอง" (`negative` chip). A cobalt search beam sweeps the whole grid, including restricted tiles; one restricted tile lifts into a small "candidates → AI" tray beside the grid before a filter bar strikes it out — but three small red residue chips remain behind ("log", "จำนวนผล", "สรุป") at 3.0s: it was already seen.
Scene 3 (4.2–6.4s): right panel — label "✓ ขอบเขตก่อน แล้วค่อยค้น" (`positive` chip). The permission scope boundary draws first around only the allowed tiles (`svg-path-draw`); restricted tiles grey to 35% outside it; then the search beam sweeps only inside the boundary. Nothing restricted moves, no residue.
Scene 4 (6.4–10.0s): both panels dim slightly (light `depth-of-field-blur`) and the rule reveals centred at y≈820 in two authored lines, IBM Plex Sans Thai Looped 600 44px, "ไม่ได้" in cobalt weight in both lines. Hold still.

## Frame 11 — ส่วนที่ยากที่สุด

- scene: The brief's closing line; the messy archive wall from frame 1 settles into an ordered, labelled lattice inside the permission scope
- voiceover:
- duration: 10s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/11-close.html
- type: branding
- persuasion: Callback (frame 1's archive) + distillation
- beat: Clarity + resolve
- blueprint: titlecard-reveal (Adapt)
- focal: the three-word payoff
- roles: archive lattice = background (dim ~40%, callback) · line 1 = foreground subject · line 2 = foreground subject · three payoff words = foreground subject · concentric rings = background atmosphere
- onscreen: line 1 "ส่วนที่ยากที่สุด ไม่ใช่การสร้าง Embedding" (0.4s) · line 2 "แต่คือการเปลี่ยนข้อมูลกว่า 120 ปี ให้เป็นความรู้ที่" (2.8s) · payoff "เชื่อถือได้" (4.6s) "ค้นหาได้" (5.0s) "รู้สิทธิ์" (5.4s) · chips under them "Reliable" "Searchable" "Permission-aware" (5.8s)

narrativeRole: Lands the thesis — the hard part is turning the messy archive into reliable, searchable, permission-aware knowledge.
keyMessage: The hardest part is not embeddings; it is turning 120+ years of Navy data into reliable, searchable, permission-aware knowledge.

Adapt: keep one clean title revealed with a single restrained move, then a still hold (signature: low motion is the payload); the background callback is the only other motion.
Scene 1 (0.0–2.8s): cream ground + faint concentric rings; behind, the archive tiles from frame 1 (same kinds) drift from a jumbled wall into an ordered grid with the permission scope outline around it, dimmed to ~40% (one smooth `power3` move, finished by 2.4s). Line 1 reveals per phrase centred at y≈300 (IBM Plex Sans Thai 600 52px); "Embedding" in `text-light` with a thin strike line self-drawing through it (`css-marker-patterns`).
Scene 2 (2.8–4.6s): line 2 reveals per phrase at y≈420 (IBM Plex Sans Thai Looped 500 44px, two authored lines if needed: "แต่คือการเปลี่ยนข้อมูลกว่า 120 ปี" / "ให้เป็นความรู้ที่").
Scene 3 (4.6–6.2s): the three payoff words slide up one by one into a centred triptych at y≈620 (display 700 72px, near-black; middle dots in cobalt), chips beneath in mono cobalt.
Scene 4 (6.2–10.0s): hold still (final card ≥ 3.8s; the last frame may settle). No exit before the end.

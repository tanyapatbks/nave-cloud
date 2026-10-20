---
format: 1920x1080
duration: 124.5s
message: "RAG ที่ใช้ได้จริงกับ ทร. เริ่มจากคลังที่พร้อมและสิทธิ์ที่ถูกต้อง ไม่ใช่แค่ Embedding"
arc: concept-explainer with process
audience: "กำลังพลและผู้บริหารของกองทัพเรือ ทั้งที่มีและไม่มีพื้นฐานเทคนิค"
mode: autonomous
music: none
---

## Video direction

- **Story spine.** One example document (`ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf`, the brief's own example) and one example question are followed through the whole system: archive → made readable → named → split and labelled → indexed → found by three kinds of search → ranked → and finally **found by one person and invisible to another**. Three chapters, shown by the persistent tracker: **1 จัดการ (prepare and manage the archive) · 2 ค้นหา (find it) · 3 สิทธิการเข้าถึง (only what you may see)** (numerals in a bold badge; circled digits are not in the fonts). Close on the brief's own last line.
- **Persistent chrome.** From frame 02 to frame 10 the tracker and the English term chip live on one persistent layer, `compositions/chrome.html`, mounted above every frame transition: they never slide or crossfade with a frame. At each frame boundary the term chip swaps (old text out over 0.15 s, then new text in over 0.2 s, never both visible), and at the two chapter changes only the active pill's fill and text colour change. Frames 02–10 draw no header of their own; keep the top band (y < 130) clear.
- **Palette** (from `frame.md`): cream ground; near-black headlines; **cobalt = the active thing** (the question, the AI's reach, the permission scope); greys = outside scope / not yet relevant; `positive` / `negative` only as small ✓ / ✗ chips, and `negative` only in frames 08 and 10. The check is one shared inline-SVG icon everywhere (never the ✓ text glyph, which renders as a "V" in fallback fonts). Atmosphere (concentric rings, dot grid) only on frames 01 and 11.
- **No narration.** There is no voice-over and no caption track. Each frame's `onscreen:` lines are the visible copy — render exactly, revealed at their cue times (they replace VO cues). Plain Thai phrase first; the English technical term rides as a small mono chip (`term:` or inline chip). Never address the audience.
- **Reading budget (harness-enforced).** ≤ 17 Thai chars/s hard ceiling; plan ~8–12; ≤ 35 base chars per line; ≤ 2 lines per block; every text block stays on screen until its frame ends (no text is removed mid-frame except where a Scene says so); final card holds ≥ 3 s; every frame's payoff holds ≥ 2.5 s fully legible.
- **Type floor (projection).** English term labels and chips ≥ 28px (cap height ≥ 20px); Thai labels and sublines ≥ 32px wherever the layout allows and never below 28px; headlines ~60px.
- **Motion grammar.** Smooth long-tail settles (`power3` default, `expo.out` for fast arrivals); **no bounce / back / elastic**. Reveal each piece on its cue across the shot, especially the back half; never front-load. Entrances are `fromTo`. Thai text reveals per word/phrase, never per character. The only aliveness during holds is subtle jitter on at most one element; prefer stillness. One camera move per frame at most; no slow back-half pans or pushes. Within-frame seams follow `cut-catalog.md`.
- **Rhythm / stillness allocation.** Held beats: end of 04 (labels read), 07 (the cut line), 10 (the rule — the film's core sentence, held still ~3.5 s; `PLANNED_HOLDS=105-109` for `harness/qa-mp4.sh`), 11 (final card ≥ 3 s; the settled close holds ~5 s to the last frame by design, `END_CARD=6.5` for `harness/qa-mp4.sh`). Busiest frames: 02, 05, 06, 10 — keep their elements few and large.
- **Continuity.** The document tile (frame.md component 3) is the recurring object; the example document is the cobalt-outlined tile in every frame it appears. The permission scope (component 4: dashed cobalt outline + shield pill) first appears in 06 as the boundary that every search lane runs inside (drawn before any lane searches), is shown being built from identity + ACL in 09, and frames the whole archive in 11. The 4-dot mini badge is defined in 04 (one dot per tag row) and reused unchanged on every doc, chunk and tile in 09 and 11.
- **Negative list.** No ships, anchors, waves, naval insignia, the RTN emblem, flags, uniforms or people photos. No stock "AI" purple-blue gradients, no bokeh, no glows. No invented numbers, page counts, or document contents (example values are illustrative and marked `ตัวอย่าง`). No genuine-looking classified stamps. Both motion failure modes are banned: slideshow (dump then freeze) and screensaver (many things floating). No `Math.random`, no CSS transitions/keyframes, no `repeat`/`yoyo`.
- **Transitions.** Three types only: `crossfade` (chapter changes), `push-slide LEFT` (consecutive steps inside a chapter), `blur-crossfade` (into the close).

## Frame 1 — จากวันนั้น จนวันนี้ และคำถามเดียว

- scene: A year counter rolls from 2449 to 2569 while the archive wall grows behind it — then the question lands
- voiceover:
- duration: 13.5s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Stakes by time (concretization) + rhetorical question
- beat: Curiosity + weight
- blueprint: grid-card-assemble (Adapt)
- focal: the rolling year, then the question headline
- roles: archive wall = background (grows while the years roll; dimmed to ~40% once the question lands) · year block = foreground subject · era line + kind chips = supporting · question headline = foreground subject (Scene 4) · chapter tracker = supporting (Scene 5)
- onscreen: "จากวันนั้น..." (0.3s) · year "2449" (0.3s) rolling year by year to "2569" (0.8–3.6s) · "จนวันนี้..." replaces "จากวันนั้น..." (3.9s) · era line "ยุคสมัยที่เปลี่ยนผ่าน ข้อมูลต่างๆมากมาย" + "ถูกจัดเก็บในหลากหลายรูปแบบ" (4.4s) · chips "PDF" "ภาพสแกน" "รูปภาพ" "แผนภูมิ" "ตาราง" (5.6s, staggered) · headline "แล้ววันนี้..." (9.6s) + "หากเราจะเริ่มจัดทำ RAG" + "ให้กับ ทร.ได้อย่างไร" (10.2s) · tracker "1 จัดการ" "2 ค้นหา" "3 สิทธิการเข้าถึง" (12.4s)

narrativeRole: Opens the gap — from the Navy's founding year to today, data built up in many forms; one plain question about it.
keyMessage: From 2449 until today the Navy's data has been stored in many forms; the question is how to begin building RAG for the RTN now.

Adapt: keep the staggered self-assemble cascade (signature move); the archive wall grows while the years roll. (Requester copy revision after round 4 — supersedes every earlier frame-1 note.)
Scene 1 (0.0–3.9s): cream ground + faint concentric rings. Left column at x 96: the eyebrow "จากวันนั้น..." (Chulabhorn Likit Text 500 40px, #5F5B50) above a year in display cobalt (Chulabhorn Likit Display 500, ~200px, tabular digits). The year starts at "2449" and rolls year by year like a calendar (each change a short vertical flip of only the digits that change), fast at first and slowing smoothly — one deterministic ease-out curve on the year value — to stop exactly on "2569" at 3.6s; every year in between is shown. On the right (x ≥ 1030), the archive wall cascades in row by row and finishes as the year stops: the archive grows with the years.
Scene 2 (3.9–4.8s): "จากวันนั้น..." fades out (0.3s) and "จนวันนี้..." fades in at the same place (never both visible). The year holds on 2569.
Scene 3 (4.4–7.8s): the era line reveals per phrase under the year (Chulabhorn Likit Text 500 40px, #3a3a3a, two authored lines "ยุคสมัยที่เปลี่ยนผ่าน ข้อมูลต่างๆมากมาย" / "ถูกจัดเก็บในหลากหลายรูปแบบ"). At 5.6s the five kind chips land at their final place (x 96, y≈656, 28px, 0.15s stagger), each pulsing its matching wall tile; they never move afterwards.
Scene 4 (7.8–11.0s): the era line fades out (7.8s, 0.3s); the year block ("จนวันนี้..." + "2569") shrinks as one group into a small eyebrow at the top-left (7.8–8.4s); the wall dims to ~40% with light blur (8.0–8.4s) while the example-document tile keeps its cobalt outline. The headline enters per phrase centre-left (Chulabhorn Likit Text 700 60px): "แล้ววันนี้..." (8.2s), then "หากเราจะเริ่มจัดทำ RAG" / "ให้กับ ทร.ได้อย่างไร" (8.8s), "RAG" underlined in cobalt. No definition chip and no bracket connector.
Scene 5 (11.0–12.0s): the tracker pills fade in at 11.0 / 11.1 / 11.2s (0.25s each, settled by 11.45s) with the persistent chrome's exact geometry and colours ("1 จัดการ" "2 ค้นหา" "3 สิทธิการเข้าถึง"); hold to the end.

Round-6 revisions (final): frame is 13.5s. Roll eases in-and-out (power2.inOut) over 0.8–3.6s so the first years tick visibly; the eyebrow ('จากวันนั้น...' / 'จนวันนี้...') is 40px semibold #3A372E with 16px to the year, and the left text stack sits 24px lower; the era line stays on screen 4.4–9.2s; era out 9.2s, year block shrink 9.2–9.8s, wall dim 9.4–9.8s; headline 9.6s / 10.2s; tracker 12.4 / 12.5 / 12.6s.

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

Scene 1 (0.0–1.4s): headline per-phrase reveal at top-left (component 2). Lane rows sit at y≈390 / 560 / 730 (each ~150px tall), but are NOT pre-drawn: each lane container and its cobalt accent bar fade/scale in together with that lane's label, starting no more than 0.15s before the label.
Each lane's build (input icon, arrow, output) takes ~1.2s, so the three result lines land at 2.6s / 5.4s / 8.2s.
Scene 2 (1.4–4.2s): lane 1. Left: a PDF page tile (document-style interior, headings + paragraphs). An arrow self-draws (`svg-path-draw`). Right: the page's content re-forms as a structured outline — three heading bars with indented paragraph bars and a small tree glyph — sliding out of the page (`scale-swap-transition`). Label "เอกสาร PDF" left, result "ดึงข้อความ + โครงสร้าง" right (no chip on this lane).
Scene 3 (4.2–7.0s): lane 2. Left: a skewed, noisy scanned page (grey speckle drawn deterministically, slight rotation) and a photo tile. The arrow draws; on the right, the scan first appears as an ASCII-style ink map (a deterministic grid of mono density characters such as . : - = + * #, derived from a fixed seeded function), which resolves per word (never per Thai character) into three clean text lines plus a short image caption bar — the visible act of machine reading. Label left, result right, chip "OCR + Vision Models" beneath the result.
Scene 4 (7.0–9.6s): lane 3. Left: a small bar chart and a grid table. The arrow draws; on the right, the bars lift off and become rows of a clean two-column table with values shown as short cobalt value bars (no invented numbers), and two thin connector lines link a row to its column header (relationships). Label left, result right (no chip).
Scene 5 (8.2–11.0s): hold all three lanes still (held read, lane 3's result ≥ 2.5s); stillness.

Round-2 revisions: lanes are 180px tall (y 300–480 / 500–680 / 700–880) with each lane's visuals vertically centred and ≥16px inner padding.

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
- onscreen: headline "ทุกหน่วยตั้งชื่อไฟล์ด้วย Pattern" + "แบบเดียวกันทุกไฟล์" (0.3s) · tokens + labels in order: "ศซบ" "หน่วย · กอง/แผนก" (1.4s) · "สสท" "เจ้าของ · หน่วยขึ้นตรง" (2.4s) · "2600000001" "ผู้นำเข้า · เลข 10 หลัก" (3.4s) · "v02" "เวอร์ชัน" (4.4s) · "2569" "ปี พ.ศ." (5.2s) · "นโยบาย69" "ชื่อเอกสาร" (6.0s) · ".pdf" (6.8s) · bridge "สิทธิการเข้าถึง ขึ้นอยู่กับเจ้าของเอกสาร" (7.6s)

narrativeRole: Makes the naming convention concrete with the brief's own example, and plants the idea that permissions do not live in the filename.
keyMessage: Every unit names files with one pattern (<sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf) that tells you unit, owner, who ingested it, version, year and name; access rights depend on the document's owner.

Adapt: keep the in-place line build (each beat its own move) but the "words" are filename tokens snapping into one strip, each dropping a label beneath.
Scene 1 (0.0–1.4s): headline per-phrase reveal.
Scene 2 (1.4–7.2s): the filename strip builds centred at y≈480: each token arrives as its own pill, all seven in ONE family, weight and size (Chulabhorn Likit Text 500 ~46px, which carries the Latin digits too, so "นโยบาย69" is never split across two fonts), with "_" separators, left to right on its cue (`dynamic-content-sequencing`); as each lands, a thin cobalt tick draws down (`svg-path-draw`) to its two-line label beneath (label line 1 in Chulabhorn Likit Text 600 30px, line 2 muted 26px). Tokens never shift once placed; the strip is laid out from the start so later tokens do not push earlier ones.
Scene 3 (7.2–7.6s): the finished strip gains the example-document cobalt outline glyph at its left end (it is the same document as frame 1's hero tile).
Scene 4 (7.6–12.0s): the bridge block and its first phrase fade in together at y≈790 (never an empty box): a split-highlight block (4px cobalt left rule) holding a 28px cobalt ledger (book) icon — the frame-09 ACL ledger glyph — then "สิทธิ์จริง" and "อยู่ในทะเบียนเอกสาร" in cobalt weight 600, per phrase — planting frame 9. Hold still.

Round-2 revisions: when the bridge enters (7.6s) the token row and labels fade to 55%; a 36px grey slashed-padlock icon sits between the label row and the bridge (the name carries no permission); the bridge's registry icon pulses once.

Round-3 revisions: token text never dims (#3A3832); labels #3F3C35, sub-labels #5F5B50 ≥ 30px; at 8.5s only the token pills' fill and border fade to 60%; the floating icon is replaced by a 2px dashed connector from the filename row down to the bridge with an 80px ink circle holding a 52px padlock struck through (ink #3F3C35, not red — red is reserved for 08/10), popping in with the bridge at 7.6s.

Round-4 revisions: the filename row (and its labels) is centred on x 960 and the whole group moves up ~120px (tokens from y≈320, bridge ending ≤ y 750); a thin bracket spans the whole row under the labels, and the dashed connector to the struck padlock drops from the bracket's centre (the name as a whole carries no permission).

Requester copy revision (after round 4; supersedes the Round-2–4 notes about the bracket, the struck padlock and the ledger icon): the headline is two authored lines "ทุกหน่วยตั้งชื่อไฟล์ด้วย Pattern" / "แบบเดียวกันทุกไฟล์" with "Pattern" in cobalt; the bridge reads "สิทธิการเข้าถึง ขึ้นอยู่กับเจ้าของเอกสาร" with a cobalt closed-padlock icon in its left padding. As the bridge enters (7.6s), the owner token "สสท" and its label "เจ้าของ · หน่วยขึ้นตรง" turn cobalt (pill outline + label colour) and a 2px dashed cobalt connector drops from that label to the bridge chip: the document's owner decides who may access it. Remove the full-row bracket and the struck padlock. Keep all text dark and legible (no dimming); keep the group high (bridge bottom ≤ y 780).

Round-6 revisions (final): neutral token pills #ECE8DA with a 1.5px #CFCAB8 border (สสท stays the only emphasised token); the example-doc icon fades in at 0.5s with the empty token slots, so only the owner tie moves at 7.6s.

## Frame 4 — ทุกชิ้นติดป้ายเดิม

- scene: The example document splits into chunks and tree nodes; one metadata tag is stamped onto every piece
- voiceover:
- duration: 10s
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
- onscreen: headline "แบ่งเอกสารออกเป็นชิ้น" (0.3s) · chip "Chunk" (1.4s) · tag rows "หน่วยเจ้าของเอกสาร? · SourceID" (2.4s) "เอกสารฉบับไหน? · Version" (3.0s) "ชั้นความลับ? · Classification" (3.6s) "ใครสามารถเข้าถึงได้? · Access" (4.2s) · label "สารบัญ" over chip "Tree Nodes" (7.0s)

narrativeRole: Shows that governance metadata is inherited by every piece the system will ever search — nothing travels unlabelled.
keyMessage: Every document and every chunk carries SourceID, Version, Classification and Access.

Scene 1 (0.0–1.4s): headline per-phrase reveal; the example document tile (large, ~260×340, document-style interior) sits centre-left at y≈560.
Scene 2 (1.4–2.8s): the document splits into four horizontal chunk cards that fan out to the right in a column (`center-outward-expansion`, ordered by index); chip "Chunk" pops by the first card.
Scene 3 (2.8–6.0s): the metadata tag card (frame.md component 7) appears to the left of the column; its four rows reveal one by one on their cues, each row's question in Thai 600 and term in mono cobalt. At 5.5s four dots leave the four row bullets (each row pulses 1→0.6→1 as its dot leaves) and travel (0.5s, power2.inOut) into the document's mini badge, which defines the 4-dot badge; then the badge stamps onto each chunk card one at a time, 0.2s apart (6.0–6.6s) — the inheritance.
Scene 4 (6.6–9.0s): two tree-node pills (section headings of the same document) attach above the chunk column with thin connector lines (`svg-path-draw`), and each receives the same mini badge. The chip "Tree Nodes" (7.0s) is a label, not a third node: it sits above the gap between the two pills with 1px leaders down to each pill, the way "Chunk" labels the chunk column. Hold still (held read) from 7.4s.

Round-2 revisions: tag rows on 2.4 / 3.0 / 3.6 / 4.2s; at 4.9–5.9 the four bullets fly one at a time into the document badge; at 5.9–6.7 a copy of the badge travels along the connector to each chunk (staggered); the tree-node label is "สารบัญ" stacked over the "Tree Nodes" chip; the question · term separators are 8px #6b6b6b dots.

Round-3 revisions: the inheritance trunk sits behind the chunk cards and fades out once the last badge lands; a still hold 4.6–5.3s before the label travel (5.3–6.8s); badge dots 18px with 6px gaps (pill ≈120×36), the new canonical badge.

Round-4 revisions: tag rows stay at full opacity while their dots leave (each bullet pulses instead); each tree-node pill shows a tiny two-level contents list (one heading bar, two indented sub-bars); 'สารบัญ' is a 28px medium caption in #5B574B, not a second headline.

Requester copy revision (after round 4): headline "แบ่งเอกสารออกเป็นชิ้น"; the tag rows' questions are now "หน่วยเจ้าของเอกสาร?" "เอกสารฉบับไหน?" "ชั้นความลับ?" "ใครสามารถเข้าถึงได้?" (terms unchanged); widen the tag card as needed so each row stays on one line with the question · term columns aligned, and keep the bullets/dots, badge travel and timing.

Round-6 revisions (final): the four bullet-to-dot flights stagger at 5.0 / 5.3 / 5.6 / 5.9s (0.3s each), each row's English term brightens to full cobalt while its dot flies; the full badge holds to 6.3s, then copies to the chunks over 6.3–6.9s; สารบัญ / Tree Nodes stays at 7.0s.

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
- onscreen: headline "จากไฟล์ สู่ดัชนีที่ค้นได้" (0.3s) · stations in order, each Thai + English: "รับเข้า · Ingest" (1.0s) "แยกส่วน · Parse" (1.8s) "ทำความสะอาด · Clean" (2.6s) with micro "๒๕๖๙ → 2569" (2.9s) "ตัดเป็นชิ้น · Chunk" (3.6s) "แปลงเป็นความหมาย · Embed" (4.4s) "ทำดัชนี · Index" (5.6s)

narrativeRole: Names the whole processing line once, in order, with a visible effect at each step, so the later search makes sense.
keyMessage: Ingest → Parse → Clean → Chunk → Embed → Index turns a file into indexes that can be searched.

Adapt: keep stations on one canvas visited in turn (signature move) but without a long camera traverse: all six stations fit one full-width strip and a cobalt token travels along it; the "camera" is the station highlight.
Scene 1 (0.0–1.0s): headline per-phrase reveal; a full-width strip of six station cards at y≈470 (each ~240×150, `card-tinted`), all at 35% opacity, linked by a thin line.
Scene 2 (1.0–6.0s): on each cue, the station lights to full opacity, its label reveals (Thai 600 30px over mono 22px), and the travelling document token (small cobalt-outlined tile) slides to it along the line (`viewport-change`-style lock, smooth `power3`) and changes form there: Ingest → filename read; Parse → splits into heading/paragraph bars; Clean → the micro "๒๕๖๙ → 2569" swaps in place (`discrete-text-sequence`, its bottom ≥ 16px above the card edge); Chunk → four small cards; Embed → each card flips into a short column of mono digits (illustrative vector values, ASCII-style texture, not data) that condenses into one dot — four dots; Index → the dots move into the Index card. As the token passes each station, that station gets the same small green SVG check, inset 12px inside its top-right corner. Parse and Clean glyph strokes are accent-mid #8b8fe8, 3px, full opacity. Previously lit stations stay lit.
Scene 3 (6.0–9.0s): the index lives INSIDE the Index card: four short rows with 8px square row markers fill its inner area and the four dots settle into them, one per row. No separate index graphic below the card, and no duplicate inner border (the card keeps only its active highlight, like the other five stations). Hold still from 7.0s.

Round-2 revisions: Embed's output is a small 2-cluster point scatter on faint axes (meaning as position), never four dots in a row (that shape is the governance badge); cards are 220px tall with glyphs scaled ~1.5×; station checks are solid success badges (white check on #0B6A45).

Round-3 revisions: Embed glyph is 18–24 points in three tinted clusters (~180×130px) drifting into place from 4.4s; Index lights at 5.6s; Parse marker squares sit at the line starts only; the connector runs card to card.

Round-4 revisions: the four-dot badge rides on each chunk tile (at 3.6s) and on each Index row (at 5.6s), so the labels visibly survive into the index.

Round-6 revisions (final): the five gaps widen so the Index card's right edge lands at x 1823; Embed shows the four chunk cards shrinking into 10px dots that fly into the Embed box (two to the cobalt cluster, two to the grey), no axes; Index stays at 5.6s.

## Frame 6 — ค้นหา 3 ทางพร้อมกัน

- scene: One question runs through three searches at once; each catches different pieces; their results merge
- voiceover:
- duration: 15.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-hybrid.html
- type: feature_showcase
- persuasion: Comparison of options + counterexample (each alone misses something)
- beat: Comprehension + "aha"
- blueprint: compose
- term: Hybrid Search
- focal: the question card, then the merge
- roles: question card = foreground subject · permission scope boundary = foreground subject (Scene 1) · three lanes = foreground subject · result markers (squares / circles / filter chips) = supporting · merge bracket + stack = foreground subject (Scene 5)
- onscreen: headline "ค้นหาแบบ Hybrid 3 รูปแบบพร้อมกัน" (0.3s) · question card "แนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s) · scope chip on the boundary "ขอบเขตสิทธิ์" (1.6s) · lane "ค้นคำตรงตัว" chip "Keyword" sub "ชื่อ · รหัส · คำเฉพาะ" (2.8s) · lane "ค้นตามความหมาย" chip "Vector" sub "แนวทางปฏิบัติ ≈ นโยบาย" (5.4s) · lane "กรองตามป้าย" chip "Metadata" filter chips "ปี 2569" "หน่วย สสท./ศซบ." (8.0s) · merge label "รวมผล" (13.0s)

narrativeRole: Explains why vector search alone is not enough: exact names/IDs, meaning, and filters each catch what the others miss.
keyMessage: Hybrid search combines keyword, vector and metadata filters; together they find what one method alone misses.

Scene 1 (0.0–2.8s): headline per-phrase reveal; the question card (component 5) enters at upper-left (x 96, y≈320, width ~626). Three empty lane rows to its right (x 790–1559) at y≈300 / 470 / 640. At 1.6s the permission scope (component 4: the same dashed cobalt outline and shield pill as frames 09 and 11) self-draws around all three lanes (x 776–1573, y 272–812), with the chip "ขอบเขตสิทธิ์" straddling its top-left edge; then the query connector draws from the card INTO the boundary — the question enters the scope before any lane searches.
Scene 2 (2.8–4.6s): keyword lane reveals (label + chip + sub). Within the question card, the words "ศซบ." and "69" get a cobalt square underline; hits light on matching tiles (solid 2px cobalt outline, `accent-light` fill, 20px square marker) — and the phrase "แนวทางปฏิบัติ" stays unmarked (a miss). Misses sit at 30%.
Scene 3 (4.6–6.4s): vector lane reveals. "แนวทางปฏิบัติ" gets a cobalt circle; 20px circle markers land on the meaning matches (docs 1 and 4, the scan that the keyword lane missed) — and on one tile of another unit (doc 3, a plausible near-miss shown greyer). No captions under tiles (the sub "แนวทางปฏิบัติ ≈ นโยบาย" already says it).
Scene 4 (6.4–8.4s): metadata lane reveals; its two filter chips "ปี 2569" and "หน่วย สสท./ศซบ." light in place in one row (no sweep line across the other lanes) and the off-target column (doc 3, other unit) greys to 30% in every lane.
Scene 5 (8.4–12.0s): a cobalt bracket self-draws across the right ends of all three lanes (`svg-path-draw`); each lane's hit cards slide into one short result stack (0.5s, 0.08s stagger), so doc 2 (table) visibly arrives only from Keyword and doc 4 (scan) only from Vector; the example document lands on top with its cobalt outline; label "รวมผล". Settled by 9.3s; hold still to the end.

Round-2 revisions: lane boxes appear only after the scope boundary closes (2.0–2.4s); each lane's title, chip and sub reveal on its cue with no hits yet; at 7.0s one pulse runs from the question along all three connectors and all three lanes light their hits within 0.3s ("พร้อมกัน"); at 7.5–8.3 the table found only by Keyword and the scan found only by Vector pulse, with their missed counterparts drawn as empty dashed outlines; at 8.4 the found thumbnails fly into รวมผล at full opacity keeping their lane markers, the table and scan sheets on top for ≥1.5s; lanes dim only after 9.9s. Lane chips Keyword / Vector / Metadata use the 28px mono chip token.

Round-3 revisions: a filled square legend inside the Keyword chip and a filled circle inside the Vector chip (same blue as the tile markers); tiles 64×88; missed slots 3px dashed #6B675C with a centred 28px ×; the 'what one method misses' beat runs 7.3–9.3s (others dim to 30%; table-only hit then scan-only hit each scale 1.2× with a ring pulse, the dashed slot opposite pulses, and the matching question-card underline / ellipse thickens); at 7.0s a line from the unit filter chip strikes the other-unit column; รวมผล 9.4s as a fan of eight sheets (the three marked hits in front, fully visible, the example document in the middle with its cobalt outline) — no reorder; the ellipse around แนวทางปฏิบัติ is an overlay so the question text reads exactly as in 08.

Round-4 revisions: after the Metadata chips land (6.4–6.8s), the unit filter's connector strikes the other-unit column FIRST, while those tiles are still grey and unmarked (6.9–7.3s, connector kept at 60% to the end); then the remaining hits light together in both lanes (7.4–7.7s); then the keyword-only table + its missed slot (7.8–8.5s); then the vector-only scan + its missed slot (8.6–9.3s); one struck style in both lanes; the eight-sheet fan sits without overlaps and its five plain sheets slide out from behind the shared column-1 hits (9.0–9.4s).

Requester copy revision (after round 4): headline "ค้นหาแบบ Hybrid 3 รูปแบบพร้อมกัน" with "Hybrid" in cobalt.

Round-6 revisions (final): frame is 13s; everything below the headline moves down 48px; the other-unit strike is a 6px #5A564A diagonal on both column-3 tiles (35% opacity) fed by a 3px #5A564A connector from 'หน่วย สสท./ศซบ.' (neutral grey: this exclusion is a metadata filter, not a permission denial — never red or a lock); retime: strike 7.4s, hits 8.1 / 8.4s, keyword-only table + its missed slot 8.9s, vector-only scan + its missed slot 9.5s, card flight 10.0s, รวมผล 10.4s, settled by 10.9s; corner badges 24px with a 2px cream outline, chip glyphs 20px; the highlight band behind 'แนวทางปฏิบัติ' fully covers 'ติ' (right edge just before 'ปี', radius ≤ 12px).

Round-7 revisions (verification follow-up; wins over all earlier notes): frame is 15.5s. Cues: headline 0.3s, question 1.0s, scope 1.6s, Keyword lane 2.8s (unchanged); Vector lane 5.4s; Metadata lane 8.0s; both grey other-unit strikes draw together 9.4–9.8s (same 6px #5A564A diagonal on 35% tiles, same 3px #5A564A connector from 'หน่วย สสท./ศซบ.'); Keyword hits 10.2s; Vector hits 10.6s; vector-lane missed slot 11.2s; keyword-lane missed slot 11.6s; merge flight 12.6s; 'รวมผล' 13.0s; settled by 13.5s, then hold still to the end. Missed slots carry NO × glyph: a dashed outline at 40% with a 25%-opacity ghost of the icon that lane missed inside it (the table-grid icon in the vector lane's slot, the scan-frame icon in the keyword lane's slot), so the thick grey slash is the only crossed-out mark in the frame. At the merge each รวมผล card flies from the lane tile that found it (the keyword lane's table → top card; the column-1 doc hits of both lanes → the middle stack; the vector lane's scan → bottom card) and the matching ghost slot's outline flashes to 100% for 0.3s as its card leaves. The question card moves down to centre on the Vector lane, and the bracket from its right edge to the three lanes redraws symmetric. The 'แนวทางปฏิบัติ' highlight gets 8px left padding (right edge still just before 'ปี'), 4px top/bottom, radius 8px. The scope pill gets 6px more top padding (pill centre unchanged; measured) so the upper marks of 'สิทธิ์' clear its top edge by ≥ 8px.

## Frame 7 — คัดตัวจริง ก่อนส่งให้ AI ตอบ

- scene: A scoreboard of candidates is re-ranked; a cut line keeps the top three; only they reach the AI, which answers with a citation
- voiceover:
- duration: 7.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-rerank.html
- type: feature_showcase
- persuasion: Demonstration (show the mechanism running) + distillation
- beat: Focus + confidence
- blueprint: compose
- term: Reranker
- focal: the cut line, then the answer card
- roles: candidate rows = foreground subject · relevance bars = supporting · cut line = foreground subject · answer card (with its LLM chip) = foreground subject (Scene 4)
- onscreen: headline "คัดตัวจริง ก่อนส่งให้ AI ตอบ" (0.3s) · cut-line label "Top 3" (3.2s) · chip "LLM / ระบบอื่น" (4.0s) · answer card "คำตอบ พร้อมแหล่งอ้างอิง" (4.4s) · citation chip "อ้างอิง: นโยบาย69 · v02" (4.9s)

narrativeRole: Shows that only the most relevant few results — not everything retrieved — are passed on, and the answer cites its source.
keyMessage: A reranker picks the most relevant results before the LLM (or another system) uses them.

Scene 1 (0.0–1.0s): headline per-phrase reveal; eight candidate rows (small tile glyph + grey title bar + relevance bar track) stacked on the left half, y 300–860, unsorted; from 0.8s the example document's row (5th) carries an `accent-light` fill and a 2px cobalt outline.
Scene 2 (1.0–2.2s): relevance bars fill to their (ordinal, unlabelled) lengths (`stat-bars-and-fills`), then the rows re-sort by bar length in one 1.0s `power3.inOut` move (1.2–2.2s, deterministic order); the example document rises from 5th to row 1.
Scene 3 (2.2–3.0s): rows 4–8 first shift down by one gap height (0.25s), then a cobalt cut line self-draws into the empty gap with its label "Top 3" (2.4s); rows 4–8 drop to 35% opacity (no blur).
Scene 4 (3.0–8.0s): the top three rows STAY filled in place above the line (solid card, full opacity, cobalt bars — never replaced by empty slots). A 2px cobalt arrow draws from the "Top 3" pill to the answer card on the right half (x≈962–1824, y≈421–748), which appears at 3.2s; the chip "LLM / ระบบอื่น" (28px) lands fully inside the card's top-left at 3.4s; the line "คำตอบ พร้อมแหล่งอ้างอิง" reveals at 3.8s, then the citation chip at 4.3s. Hold still from 4.6s.

Round-2 revisions: the eight rows are dealt from one pile (the merged results) at 0.4–1.0s; the re-sort runs 1.0–3.0s, winners moving first one at a time, lifted above the others so rows never overlap; cut line + "Top 3" 3.2s, LLM chip 4.0s, answer 4.4s, citation 4.9s; when the citation lands, row 1's outline and the citation chip pulse together. LLM chip and citation use the 28px mono chip token.

Round-3 revisions: the re-sort holds the scored-but-unsorted list still until 1.0s, then sorts 1.0–3.0s (power2.inOut, 0.06s stagger in final-rank order): rows moving up travel on a +40px x track above the others with a soft shadow and return over the last 0.3s; rows moving down stay at x 0 at 60% opacity; no two rows overlap on the same track; the LLM chip uses the same ✦ spark as the answer line and frame 10's AI node.

Round-4 revisions: rows and bars fully drawn by 0.5s and held completely still to 1.4s; re-sort 1.4–3.1s in four non-overlapping moves (winners slide right onto a clear track, losers close up and dim, winners rise on the right track, winners slide back into slots 1–3); at 3.2s rows 2–3 get a 50% cut-line-blue border so the Top 3 read as one group.

Round-6 revisions (final): the scored list holds still to 1.6s; the right→up→left re-sort runs 1.6–3.0s inside x 790–1500; all three rows above the cut share one fill (#E6E6F7) and a 2px cobalt border; rank 1 keeps its dark-top-bar doc icon as the cited document.

Round-7 revisions: frame is 7.5s (end hold trimmed by 0.5s; every cue unchanged).

## Frame 8 — คำถามเดียวกัน คำตอบตามสิทธิ์

- scene: Two personnel ask the identical question; one gets the document, the other gets nothing — not even a trace
- voiceover:
- duration: 8.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-two-people.html
- type: benefit_highlight
- persuasion: Before/after (same input, different identity) + demonstration
- beat: Recognition + unease → reassurance
- blueprint: comparison-split (Adapt)
- term: Access Control
- focal: the two result cards
- roles: two identity badges = foreground subject · shared question card = supporting · result cards = foreground subject · ✓/✗ chips = supporting
- onscreen: headline "คำถามเดียวกัน — สิทธิการเข้าถึงไม่เท่ากัน" (0.3s) · badge left "น.อ.aaaaa" + chip "มีสิทธิ์" (1.2s) · badge right "จ.ต.bbbbb" + chip "ไม่มีสิทธิ์" (1.6s) · question card (small, centred) "แนวทางปฏิบัติปี 69 ของ ศซบ." (2.4s) · left result "✓ พบ: นโยบาย69" (4.0s) · right result "ไม่พบเอกสารในสิทธิ์ของท่าน" (5.0s)

narrativeRole: Makes access control concrete: the same question must give different answers when permissions differ.
keyMessage: If someone may not open a document, the AI must not find it for them either.

Adapt: keep the two equal cards entering from opposite wings with mirrored tilts (signature move) and the inner-edge badge pop; the badges become ✓ / ✗ result chips.
Scene 1 (0.0–2.4s): headline per-phrase reveal; two identity cards (avatar silhouette circle + name + unit chip — no photos, no uniforms) enter from opposite wings with mirrored tilts (`split-tilt-cards`) at y≈420, left x≈96–860, right x≈1060–1824, and resolve to exactly flat (rotation and skew 0) by 3.5s. Their chips sit fully inside each card: "มีสิทธิ์" (solid cobalt) 16px after "น.อ.aaaaa"; "ไม่มีสิทธิ์" 16px before "จ.ต.bbbbb", at equal weight (#3a3a3a text, 2px #3a3a3a border, 22px lock icon).
Scene 2 (2.4–4.0s): a small question card drops in centred between them (y≈320) and two thin lines draw from it to each side — the identical question.
Scene 3 (4.0–5.0s): left result card fills in: the example document tile (cobalt outline) + "✓ พบ: นโยบาย69" (`positive` chip; the check is the shared SVG icon, never the text glyph).
Scene 4 (5.0–9.0s): right result card fills in empty: no tile, no greyed placeholder, only the line "ไม่พบเอกสารในสิทธิ์ของท่าน" in #3a3a3a at 40px with a 32px lock icon to its left. Hold still from 6.0s.

Round-2 revisions: card entrances finish flat by 1.1s; the found result is a solid success badge (#0B6A45, white text and check, 34px Thai); at 5.8s the found badge pulses, at 6.4s the denied lock + chip pulse and a 2px underline draws under the denied line.

Round-3 revisions: the denied result is a neutral pill the height of the green badge (fill #E4E2DA, 2px #8A867A border, #2A2925 text, 600) with a 'no result' magnifier glyph, no underline; the left result group is centred in its well.

Round-4 revisions: all four pills 6px taller with text 3px lower (stacked Thai marks clear the top border); the green badge and the neutral pill stay equal height.

Requester copy revision (after round 4): headline "คำถามเดียวกัน — สิทธิการเข้าถึงไม่เท่ากัน"; the two people are "น.อ.aaaaa" (left, has access) and "จ.ต.bbbbb" (right, no access) — render these strings exactly.

Round-7 revisions: frame is 8.5s (end hold trimmed by 0.5s; every cue unchanged).

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
- roles: identity badge = foreground subject · registry ledger = foreground subject · scope boundary = foreground subject · four object icons = supporting → foreground inside the boundary
- onscreen: headline "สิทธิ์จริงมาจาก" + "ตัวตนผู้ใช้ + สิทธิการเข้าถึงเอกสาร" (0.3s) · badge chip "Identity" (1.4s) · ledger chip "Access Control List (ACL)" (2.2s) · scope pill "ขอบเขตสิทธิ์เดียวกัน" (3.8s) · four items inside in order "เอกสาร · Docs" (4.8s) "ชิ้นข้อมูล · Chunks" (5.4s) "สารบัญ · Tree Nodes" (6.0s) "เครื่องมือ AI · Agent Tools" (6.6s)

narrativeRole: Explains where permission really comes from and that one scope governs every retrievable thing, including the AI's tools.
keyMessage: Identity + the ACL in the document registry define one permission scope shared by docs, chunks, tree nodes and agent tools.

Scene 1 (0.0–3.0s): headline per-phrase reveal (line 2 "ตัวตน + ทะเบียนเอกสาร" with the two nouns in cobalt weight). Left column: an identity badge card (silhouette circle + three grey attribute bars, no text) at y≈400 with chip "Identity"; below it a registry ledger card (document-style grid: two columns of grey value bars, the example document's row highlighted cobalt with the 24px cobalt-outlined example-document icon in its first cell, no readable text) at y≈620 with chip "ACL".
Scene 2 (3.0–4.8s): both cards emit a thin cobalt line to the right that converge at x≈980; from there the permission scope boundary (component 4) self-draws as a large rounded rectangle over the right 50% (x 980–1824, y 330–860) (`svg-path-draw`); label pill "ขอบเขตสิทธิ์เดียวกัน" on its top edge.
Scene 3 (4.8–7.4s): four object cards reveal inside the boundary in a 2×2 grid on their cues (`grid-card-assemble` stagger), each Thai name over its English chip, each wearing the 4-dot mini badge from frame 4.
Scene 4 (7.4–10.0s): hold still (held read).

Round-2 revisions: 'Identity' and 'ACL' each draw a 3px cobalt underline under 'ตัวตน' / 'ทะเบียนเอกสาร' in headline line 2 as they appear; the identity avatar is the frame-08 avatar (ring in cobalt).

Round-3 revisions: the 'Identity' and 'ACL' chips get the same 3px underline as their headline words, drawn in sync, and each word + chip pair pulses together on landing; badges use the new 120×36 canonical badge.

Requester copy revision (after round 4): headline line 2 "ตัวตนผู้ใช้ + สิทธิการเข้าถึงเอกสาร" (the two nouns in cobalt weight); the ledger chip reads "Access Control List (ACL)" (28px mono, widen the chip/card as needed); the synced underlines now pair "ตัวตนผู้ใช้" with Identity and "สิทธิการเข้าถึงเอกสาร" with the ACL chip.

Round-6 revisions (final): everything below the headline moves down 32px (content ends ≤ y 892); the ACL ledger's highlighted row shows the frame-03 padlock glyph at its left (instead of the doc glyph) and a 4px cobalt left border, matching frame 03's bridge chip.

Round-7 revisions: the scope pill gets 6px more top padding with its centre unchanged, so the upper marks of 'สิทธิ์' clear the pill's top edge by ≥ 8px (same component as frame 06); nothing else moves.

## Frame 10 — กำหนดขอบเขตก่อน แล้วค่อยค้น

- scene: Split screen — searching everything then filtering leaves residue; scoping first never touches what is off-limits
- voiceover:
- duration: 11.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/10-prefilter.html
- type: benefit_highlight
- persuasion: Before/after + counterexample (the wrong way shown running)
- beat: Unease → conviction
- blueprint: comparison-split (Adapt)
- term: Pre-filter
- focal: the right panel's untouched restricted tiles
- roles: left panel (wrong way) = foreground subject · right panel (right way) = foreground subject · search beam = supporting · residue marks = supporting · rule line = foreground subject (Scene 4)
- onscreen: headline "กำหนดขอบเขตก่อน แล้วค่อยค้น" (0.3s) · left label "× ค้นทั้งคลัง แล้วค่อยกรอง" (1.0s) · residue chips "log" "จำนวนผล" "สรุป" (3.8s) · right label "✓ ขอบเขตก่อน แล้วค่อยค้น" (5.3s) · rule "ถ้ากำลังพลเปิดเอกสารไม่ได้" (7.6s) + "RAG ก็ต้องดึงเอกสารนั้นไม่ได้" (8.1s)

narrativeRole: The climax — shows why filtering after the search is unsafe and why the scope must be applied before searching.
keyMessage: Never search the whole archive and filter afterwards; apply the permission scope first.

Adapt: keep two equal panels from opposite wings (signature) but flat (no tilt) so the grids stay readable; the inner-edge badges become ✗ / ✓ labels.
Scene 1 (0.0–1.0s): headline per-phrase reveal; two equal panels enter from opposite wings (x 96–900 and 1020–1824, y 300–760), each containing the same 4×3 grid of document tiles with three restricted tiles, each carrying a 32px solid red (#b42318) lock.
Scene 2 (1.0–4.2s): left panel only — label "× ค้นทั้งคลัง แล้วค่อยกรอง" (`negative` chip, #b42318 on #fde7e3). A cobalt search beam sweeps the whole grid, including restricted tiles; at 2.0s one restricted tile lifts (its outline pulses 2px red) into a small "candidates → AI" tray beside the grid (2px red border) before a filter bar strikes it out — its dashed ghost outline and lock stay behind at 30%, and three red residue chips remain ("log", "จำนวนผล", "สรุป", each ≥ 28px with a 16px lock glyph, full opacity) at 3.0s: it was already seen.
Scene 3 (4.2–6.4s): right panel — label "✓ ขอบเขตก่อน แล้วค่อยค้น" (`positive` chip). The permission scope boundary draws first around only the allowed tiles (`svg-path-draw`); restricted tiles grey to 35% outside it; then the search beam sweeps only inside the boundary. Nothing restricted moves, no residue.
Scene 4 (6.4–12.0s): no blur on either panel. Both panels scale to 0.92 about their top edge (ending at y ≤ 690); the wrong panel's documents and tray drop to 50% opacity while its "×" label and residue chips stay at full opacity; the right panel, its label and its dashed scope stay at 100% and sharp. The rule reveals centred at y 780–890 (≥ 80px clear above it) in two authored lines, Chulabhorn Likit Text 600 44px, "ไม่ได้" in cobalt weight in both lines. Hold still from 7.4s.

Round-2 revisions: panels laid out at their final size from 0s (only the wrong panel's dim animates, 6.4–6.8s); wrong path re-timed: sweep 1.2–2.0, locked doc into the box 2.0–2.6, filter bar + ghost 3.0–3.5, residue chips 3.8 / 4.1 / 4.4 each with an OPEN red padlock and a red dotted trail from the ghost, last trail continuing into the AI node; ghost is a small dashed locked tile on the box's top-right corner touching no chip; right label 4.6, scope 4.8–5.3, scoped search 5.3–6.4, rule 6.8 / 7.3. The ✓ label text uses success-ink #08573A.

Round-3 revisions: the residue holds alone 0.8s longer (right label 5.3s, scope 5.7, scan 6.2, result 6.7, left dim 7.1, rule 7.6 / 8.1); during 4.5–5.3s the dotted trails crawl from the locked source to each chip and on to the AI; trails 3px, 4/6 dashes, full opacity; the locked source slot ≈64×80 with a 28px padlock; 8px between each open padlock and its word.

Round-4 revisions: the locked source box sits fully above the residue box; trails run as a comb into one collector just outside the box, then one dotted red arrow into the left AI node, which stays lit blue with a red ring to the end (only the left document grid dims); the left label is inset like the right one; the rule sits 48px higher (line 2 ends by y≈837).

Requester copy revision (after round 4): in both rule lines, "ไม่ได้" is red (#b42318, same weight) instead of cobalt.

Round-6 revisions (final): panels and labels move down 24px and the rule 16px (line 2 ends ≤ y 850); residue chips at 3.8 / 4.2 / 4.6s, then one 12px #9B2D27 dot travels from the locked source down the collector into the AI node over 4.7–5.2s (one leak event) before the right label at 5.3s; the leak route is a 3px dashed line (10 on / 6 off) in #9B2D27 with the arrowhead offset 12px from the collector and its tip touching the AI ring.

Round-7 revisions: frame is 11.5s (end hold trimmed by 0.5s; the rule still holds still from ~8.6s to the end). The residue chips come out of the struck document: as it leaves the red box for the lock box (~3.5s) the three chips spawn at its last centre and travel to their slots scaling 0.6→1, landing at 3.8 / 4.2 / 4.6s, their dashed leads then joining the single route (leak dot 4.7–5.2s unchanged). The right panel (grid, locks, empty result slot, AI node) holds at 35% opacity from 0.5s to 5.3s and rises to 100% over 5.3–5.6s with the '✓ ขอบเขตก่อน แล้วค่อยค้น' label, before its scope box draws. The transient filter bar that sweeps the red box is red (the box outline's red), 4px thick and clipped to the box interior — never near-black.

## Frame 11 — สู่ Digital Navy

- scene: The closing thesis; the untidy archive wall settles into an ordered, labelled lattice inside the permission scope as the payoff lands
- voiceover:
- duration: 16s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/11-close.html
- type: branding
- persuasion: Callback (frame 1's archive) + distillation
- beat: Clarity + resolve
- blueprint: titlecard-reveal (Adapt)
- focal: the three-word payoff
- roles: archive lattice = background (callback, behind a cream backing plate) · lines 1–3 = foreground subject · three payoff words = foreground subject · concentric rings = background atmosphere
- onscreen: line 1 "การจะเปลี่ยนผ่านไปสู่ Digital Navy" (0.4s) · line 2 "ส่วนที่ยากที่สุดไม่ใช่ AI RAG EMBEDDING" (2.4s) · line 3 "แต่คือการ เชื่อมโยง และ จัดการ" (4.4s) + "ข้อมูลของทร.ทั้งหมด อย่างเป็นระบบ" (5.6s) + "ให้กลายเป็นชุดข้อมูลที่" (6.8s) · payoff "Reliable" (9.6s) "Searchable" (10.0s) "Permission-aware" (10.4s) · chips under them "เชื่อถือได้" "ค้นหาได้" "แบ่งตามสิทธิการเข้าถึงข้อมูลได้" (10.8s)

narrativeRole: Lands the thesis — moving to a Digital Navy is hard not because of AI, RAG or embeddings, but because all of the Navy's data must be connected and managed systematically into one dataset.
keyMessage: To become a Digital Navy, the hardest part is not AI/RAG/embeddings but connecting and managing all RTN data systematically into a reliable, searchable, permission-aware dataset.

Adapt: one clean title block revealed phrase by phrase, then a still hold; the background settle is the only other motion. (Requester copy revision after round 4 — supersedes every earlier frame-11 note except the background and plate rules kept below.)
Scene 1 (0.0–2.2s): cream ground + faint rings; the archive wall fades in place during the crossfade, untidy (small rotations and offsets, no tag dots), inside the dashed scope frame, behind a cream backing plate (rgba(253,248,230,0.92), 24px radius) that keeps all text off the tiles; tiles behind the plate ≤ 25% opacity. Line 1 reveals per phrase, centred, y≈250 (Chulabhorn Likit Text 700 56px, near-black; "Digital Navy" in cobalt).
Scene 2 (2.2–4.4s): line 2 per phrase, centred, y≈345 (Chulabhorn Likit Text 500 44px, #3a3a3a; "AI RAG EMBEDDING" in #5F5B57 at the same weight — de-emphasised, never struck through). No Embed glyph.
Scene 3 (4.4–7.0s): line 3 per phrase, centred, three authored lines at y≈415 / 470 / 525 (Chulabhorn Likit Text 500 44px, #3a3a3a; "เชื่อมโยง" and "จัดการ" in cobalt weight 700).
Scene 4 (8.0–9.6s): the payoff English words, big and near-black (Chulabhorn Likit Text 700, 64px — larger than line 1 — on one centred row at y≈620 on a widened backing plate (x≈330–1590) that covers the outer tile columns behind it), slide up one by one; under each, a small Thai chip in the light-blue band (accent-light fill, cobalt text, 28px), centred under its word: "เชื่อถือได้" "ค้นหาได้" "แบ่งตามสิทธิการเข้าถึงข้อมูลได้". As "Reliable" lands (8.0–8.8s) the background tiles settle into the aligned, tagged grid behind the plate.
Scene 5 (9.6–14.0s): hold still. The film ends on this card (no fade-out): a briefing presenter can pause on it.

Round-6 revisions (final): frame is 17s; line 2 at 2.4s, line 3 rows at 4.4 / 5.6 / 6.8s, payoff 9.6 / 10.0 / 10.4s, Thai chips 10.8s (chip text 32px, chips 50px tall, centred under their words), background settle 9.6–10.4s; the cream veil is one uniform layer over the dashed frame's whole interior (no internal edge, no tile split), and from 9.6s tile borders and ●●●● pills inside the payoff band (x 340–1580, y 600–760) drop to ≤ 5% opacity; hold to the end.

Round-7 revisions: frame is 16s (end hold trimmed to ~5s; every cue unchanged). Line 1 'การจะเปลี่ยนผ่านไปสู่ Digital Navy' drops to 44px and the payoff 'Reliable · Searchable · Permission-aware' rises to 64px (≈1330px wide, inside the card interior), Thai chips re-centred under their words (chip size and colour unchanged); the whole text stack and the concentric rings move down 52px so the block centres in the dashed card. The card, veil and tile lattice do not change.


---
format: 1920x1080
duration: 204.1s
message: "ปัญหาข้อมูลของ ทร. คือโอกาส — NAVE พา ทร. สู่ Digital Navy อย่างปลอดภัย เชื่อมโยง และก้าวทีละขั้น"
arc: story-explainer with process
audience: "กำลังพลและผู้บริหารของกองทัพเรือ ทั้งที่มีและไม่มีพื้นฐานเทคนิค"
mode: autonomous
music: none
tracker: "โจทย์ · NAVE · เส้นทาง"
copy_allow: "ผู้บังคับบัญชา"
---

## Video direction

- **Sequel, same film language.** This is the second film after `videos/rtn-rag-explainer`; it must look like the same series: cream ground, single cobalt accent, grey ladder, Chulabhorn Likit + IBM Plex Mono, tinted cards with no shadows, the persistent tracker + term chip, the same transitions and motion grammar. Shared components are in `frame.md` "Project adaptation — Digital Navy / NAVE film" (components 1–13); copy them exactly.
- **Story spine.** Opens on the requester's question ("แบบไหน ที่เรียกว่า Digital Navy?"), names the challenge (every service; smooth, seamless, tangible results), names the RTN's data problem and its security / access concerns, then turns ("แต่! … แต่คือโอกาส") to the move and its answer — NAVE | นาวี — in four steps (secure door: MFA; future-proof: the PQC plan; one workspace: identity + rights; ask or command in one composer, shown as an example of the target picture), and ends on an honest checkpoint: the five-stage roadmap ("the target you just saw is reached step by step") with the pin between stage 1 and stage 2, walked stage by stage, before the close answers the opening question with the film's pillars (secure, connected in one place, smooth, seamless, genuinely useful — begun today, step by step).
- **Honesty rule.** Chapter 2 shows the TARGET picture of NAVE (frame 09 carries the tag "ตัวอย่าง · ภาพเป้าหมาย"); chapter 3 says where the work stands today. Stage lists describe what a stage IS (its definition), never NAVE's audited inventory. PQC is a plan, not a delivered feature. No invented results, numbers or system names.
- **Three chapters**, shown by the persistent tracker: **1 โจทย์** (frames 02–03) · **2 NAVE** (frames 04–09) · **3 เส้นทาง** (frames 10–15). Frame 01 introduces the tracker in its last beat (all pills "upcoming") at the chrome's exact geometry; frame 16 is the close (the chrome and the roadmap rail fade out with the blur-crossfade into it).
- **Persistent layers.** (a) `compositions/chrome.html` — tracker + English term chip, frames 02–15, above every transition; frames 02–15 draw nothing at y < 130. (b) `compositions/roadmap.html` — the roadmap rail (frame.md component 10), frames 11–15, above every transition; frame 10 builds the identical rail (same markup, CSS and fonts as `roadmap.html`) and hides its own rail at exactly its last instant (local 11.0 s) so only one rail is ever visible; frames 11–15 draw nothing in the rail band (y 130–290) and lay out their content in y 300–880. At each stage-frame boundary only the rail's focus halo moves (+0.25 s); in frame 14 the rail's node 4 gains a small "+" badge (owned by `roadmap.html`).
- **Palette** (frame.md): cobalt = NAVE / the person's identity + rights / the AI's reach / the current stage and the way forward; greys = the old way, the not-yet; green only for verified / approved badges; red only for the blocked leaked password (06) and the broken classical lock (07). The check is the shared inline SVG everywhere. Atmosphere (rings, dot grid) only on frames 01 and 16.
- **Recurring objects (continuity with the RAG film).** The composer (component 5) asks the opening question in 01 and the two prompts in 09. The person `น.อ.aaaaa` (component 6) is the signed-in user in 06, 08 and 09. The dashed scope (component 4) always means a person's rights (สิทธิ์): around the workspace in 08 and around the answer in 09. The document tile (component 3) is the messy unit file in 03, the cited source in 09 and the cleaned data in 12 (wearing the RAG film's 4-dot governance badge). The "outsider" ghost token (dashed #8A867A outline, no person) is the leaked password in 06 and the data thief in 07. Frame 03's question "จัดการไฟล์อย่างไร?" is answered in place in frame 12 ("จัดระเบียบไฟล์"). Frame 09's approval card returns as the mini-visual of "Human-in-the-Loop Approval" in frame 15. The NAVE wordmark (component 9) is built in 05 and returns in 16.
- **No narration.** No voice-over, no caption track. Each frame's `onscreen:` strings are its only words: render exactly, revealed at their cue times. Plain Thai first; English technical terms ride as mono chips or tiles. Never address the audience.
- **Phrase spans.** Reveal spans are given as `[…]` where a line has more than one; a Thai particle, abbreviation or question word is never a reveal span by itself (except a word in the composer's per-word typing). A span never adds whitespace that is not in the authored string (adjacent spans, no gap, where the string has no space).
- **Reading budget (harness-enforced).** ≤ 17 chars/s hard ceiling, plan ~12; ≤ 35 base characters per line; ≤ 2 lines per block; every text block stays until its frame ends unless a Scene says otherwise; each frame's payoff holds ≥ 2.5 s fully legible; the final card holds ≥ 5 s. Dimming never takes text below 4.5:1 — recede by recolouring to #6B675C / dashed #B9B4A2 borders, not by opacity on text.
- **Type floor (projection).** English chips/tiles ≥ 28px; Thai labels and sublines ≥ 32px wherever the layout allows, never below 28px; headlines 60px.
- **Motion grammar.** Smooth long-tail settles (`power3` default, `expo.out` for fast arrivals); no bounce / back / elastic. Entrances are `fromTo`. Reveal each piece on its cue across the shot, especially the back half; never front-load. Thai reveals per word/phrase; "typing" in the composer is per word with a caret. At most one camera move per frame; no slow back-half pans or pushes. During holds prefer stillness; at most one subtle jitter. Within-frame seams follow `cut-catalog.md` (velocity-matched). Seeded scatter stays inside x 40–1880, y 150–860.
- **Rhythm / stillness allocation.** Calm open (01); building pressure (02–03); one hard beat with a held payoff (04); a held reveal (05: the wordmark holds ≥ 3 s); demonstrations (06–09, the busiest: 09); a held checkpoint (10: the pin, held still ≥ 4 s); stage frames build then hold ≥ 2.5 s each; the close holds ≥ 5 s to the last frame (`END_CARD=6` for `harness/qa-mp4.sh`).
- **Negative list.** No ships, anchors, waves, flags, uniforms, rank insignia, the RTN emblem, service emblems or people photos. No recreated web demo, no real product logos (ThaiD etc.), no domains or URLs, no browser cursors. No purple-blue "AI" gradients, bokeh or glows. No invented numbers, results, document contents or system names (illustrative values only). No genuine-looking classification stamps. Both motion failure modes are banned: slideshow (dump then freeze) and screensaver (many things floating). No `Math.random`, no CSS transitions/keyframes, no `repeat`/`yoyo`.
- **Transitions.** Three types only: `crossfade` (chapter changes: into 02, 04, 10), `push-slide LEFT` (consecutive steps inside a chapter), `blur-crossfade` (into the close, 16).

## Frame 1 — ภาพอนาคตแบบไหน ที่เรียกว่า Digital Navy

- scene: A NAVE-style composer types the requester's question word by word; on send, the words lift into a headline and "Digital Navy?" lands in big cobalt display type
- voiceover:
- duration: 8.5s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Rhetorical question + foreshadowing (the composer is the film's recurring "ask" device)
- beat: Curiosity + anticipation
- blueprint: typewriter-reveal (Adapt)
- focal: the composer, then "Digital Navy?"
- roles: composer = foreground subject (Scenes 1–2) · eyebrow line = supporting · "Digital Navy?" = foreground subject (Scene 3) · rings + dot grid = background atmosphere (≤ 12% opacity) · tracker = supporting (Scene 4)
- onscreen: composer types "ภาพอนาคตของ ทร. เป็นแบบไหน" (0.6s, per word) · headline "แบบไหน... ที่เรียกว่า" (3.0s) · display "Digital Navy?" (3.9s) · tracker "1 โจทย์" "2 NAVE" "3 เส้นทาง" (8.4s)

narrativeRole: Opens the film on the requester's own question and plants the composer — asking is how NAVE will be used.
keyMessage: The film asks what kind of future is called a Digital Navy.

Adapt: keep typewriter-reveal's signature (a live caret types a line as a human would, then the line collapses and a payoff pops) — but typing is per word (Thai is never split) and the payoff is the display phrase, not a logo.
Scene 1 (0.0–2.6s): cream ground with faint concentric rings centred behind the composer and a 3×3 cobalt dot grid top-right (atmosphere, ≤ 12% opacity). The composer (frame.md component 5, 1100px wide) fades up centred at y≈470 (0.0–0.4s) with its spark and an empty field; the caret blinks twice (finite opacity steps). From 0.6s the line "ภาพอนาคตของ ทร. เป็นแบบไหน" appears word by word (ภาพ · อนาคต · ของ · ทร. · เป็น · แบบไหน, ~0.22 s apart, `dynamic-content-sequencing`), the caret jumping to the end of each word. At 2.2s the send button presses (`press-release-spring`, smooth, no overshoot) and the caret hides.
Scene 2 (2.6–3.9s): `scale-swap-transition` — the composer card shrinks and fades (2.6–3.0s) while its typed line travels up and settles as a muted eyebrow (Chulabhorn Likit Text 500 40px, #5F5B50) centred at y≈300. The headline "แบบไหน... ที่เรียกว่า" enters as [แบบไหน...][ที่เรียกว่า] centred at y≈390 (Chulabhorn Likit Text 700 64px, #111) from 3.0s.
Scene 3 (3.9–8.4s): "Digital Navy?" lands centred below it (Chulabhorn Likit Display 500, ~170px, cobalt; the "?" in near-black) with a fast `expo.out` rise + fade (3.9–4.6s); a 6px cobalt underline self-draws under "Digital Navy" (4.8–5.4s, `svg-path-draw`). Then stillness: the only extra motion is a one-time faint hairline network joining five of the dot-grid dots (5.6–6.8s, ≤ 15% opacity), then still.
Scene 4 (8.4–10.0s): the three tracker pills fade in at the chrome's exact geometry (top band, x 96, y 56, all "upcoming") at 8.4 / 8.5 / 8.6s (0.25s each); hold to the end (the chrome layer takes over at 10.0s).

Round-2 revisions: frame is 8.5s (the old 5.4–8.4s stillness was dead time). Cues to 5.4s unchanged. The hairline network runs 5.5–6.3s at ~30% stroke opacity so it is actually visible (1.5px, cobalt). Tracker pills fade in at 6.9 / 7.0 / 7.1s and hand over to the chrome at local 8.5 (hide them with a set at exactly 8.5).

## Frame 2 — โจทย์ที่ท้าทาย ไม่เพียงแต่ ทร.

- scene: Three equal service cards (ทร. ทบ. ทอ.); then two puzzle pieces — modern technology (spark) and the Navy itself (ทร.) — slide together until their seam disappears; three criteria light under the join
- voiceover:
- duration: 11.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-challenge.html
- type: pain_point
- persuasion: Generalization (not just us) + visual metaphor (a seamless join) + rule of three
- beat: Recognition + tension
- blueprint: compose
- term: Seamless Integration
- focal: the puzzle join
- roles: headline = supporting · three service cards = foreground subject (Scene 2), then supporting · puzzle pieces = foreground subject (Scene 3) · criteria chips = foreground subject (Scene 4)
- onscreen: headline "โจทย์ที่ท้าทายอย่างมาก ไม่เพียงแต่ ทร." (0.3s) · cards "ทร." (1.2s) "ทบ." (1.7s) "ทอ." (2.0s) · caption "ทบ. ทอ. ก็เช่นกัน" (2.4s) · question "จะนำเทคโนโลยีสมัยใหม่มาประยุกต์ใช้" (4.0s) + "ให้สอดประสานกับความเป็น ทร. ได้อย่างไร?" (4.6s) · criteria "ราบรื่น" (7.0s) "ไร้รอยต่อ" (7.4s) "ผลลัพธ์ใช้งานได้จริง เป็นรูปธรรม" (7.8s)

narrativeRole: States the challenge as shared by every service, and defines success: modern technology joined to the Navy's own way of working smoothly, without seams, with tangible results.
keyMessage: The hard part is bringing modern technology in so it fits the Navy smoothly, seamlessly and with real results — a challenge for ทร., ทบ. and ทอ. alike.

Scene 1 (0.0–1.2s): headline (component 2, one line) revealed as [โจทย์ที่ท้าทายอย่างมาก][ไม่เพียงแต่ ทร.].
Scene 2 (1.2–3.6s): left column: three equal tinted cards 420×150 (radius 14px) at x 96–516, y 320 / 500 / 680, each holding one large abbreviation (Chulabhorn Likit Text 700 72px, left inset 36px, no emblem). "ทร." arrives first (1.2s) with a 2.5px cobalt outline; "ทบ." (1.7s) and "ทอ." (2.0s) follow in neutral style (#3F3C35 text, standard border) — `grid-card-assemble` cascade. A thin bracket (x 536–552) draws beside cards 2–3 and the caption "ทบ. ทอ. ก็เช่นกัน" reveals right of it (x 572–860, centred on y≈665; #5F5B50 36px) at 2.4s.
Scene 3 (3.6–7.0s): right column (x 900–1824): the question reveals at its top (y≈320–436) as [จะนำเทคโนโลยีสมัยใหม่][มาประยุกต์ใช้] · [ให้สอดประสาน][กับความเป็น ทร.][ได้อย่างไร?] (Chulabhorn Likit Text 600 40px, #111; "สอดประสาน" in cobalt weight) at 4.0 / 4.6s. Two large interlocking puzzle pieces (SVG, ~300×260 each) fade in inside the right column (y≈470–730), each starting 160px outward from its final position (never from the frame edges): the left piece cobalt-tinted (accent-medium fill, cobalt 2px stroke) carries a small spark (component 7); the right piece ink-tinted (#ECE8DA fill, #3F3C35 2px stroke) carries the text "ทร." (Chulabhorn Likit Text 700 56px, #3F3C35). 5.4–6.4s: the pieces slide together (power3.inOut) and lock; at contact the seam line fades out and both fills ease to one shared accent-light fill (the join becomes seamless). The left "ทร." card pulses once (6.4s).
Scene 4 (7.0–11.5s): under the joined piece (y≈770–830), three criteria chips land left→right on their cues (7.0 / 7.4 / 7.8s), each a split-highlight pill with a small cobalt target-ring glyph (a goal, not a check). Hold still from 8.4s.

Round-2 revisions: after the lock the joined shape fills accent-light (as specified, not grey) and keeps the interlock knob curve as a 1.5px rgba(30,43,250,0.35) hairline — only the straight seam disappears, so the shape still reads as two pieces joined; spark and "ทร." sit ~120px apart either side of the knob. Criteria chips: 36px text (from 32), the cobalt left accent drawn as an inset 4×36px bar (radius 2) inside the padding, not a border-left on a rounded pill; if the three do not fit one row inside x 900–1824 at 36px, set them in two rows ending ≤ y 880 (move the puzzle up as needed).

## Frame 3 — ปัญหาสำคัญ: การจัดการข้อมูลภายใน

- scene: A row of units, each with an untidy stack of files; four questions pop above them; a bracket names both levels; two concerns settle under them
- voiceover:
- duration: 13.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-data.html
- type: pain_point
- persuasion: Question cascade (the questions every unit already asks) + concretization (messy files per unit)
- beat: Recognition + concern
- blueprint: grid-card-assemble (Adapt)
- term: Data Management
- focal: the four questions over the unit columns
- roles: headline = supporting · unit columns with document tiles = foreground subject (Scene 2) · question chips = foreground subject (Scene 3) · level bracket = supporting · concern band = foreground subject (Scene 4)
- onscreen: headline "นอกจากปรับองค์กรให้เท่าทัน AI แล้ว" (0.3s) + "ยังมีปัญหาสำคัญคือการจัดการข้อมูลภายใน ทร." (1.1s) · questions "เริ่มจากตรงไหน?" (3.2s) "ทำอะไร?" (3.8s) "จัดการไฟล์อย่างไร?" (4.4s) "จัดเก็บอย่างไร?" (5.0s) · levels "ทั้งในภาพรวม และในระดับหน่วย" (6.0s) · concern label "ข้อกังวลเป็นพิเศษในระดับหน่วย" (7.6s) · chips "ความปลอดภัย" (8.1s) "สิทธิการเข้าถึงข้อมูล" (8.6s)

narrativeRole: Names the RTN's core problem: beyond adapting to AI, units do not yet know how to start organising and storing their data — at the whole-RTN level and inside each unit — and security and access rights are heightened concerns.
keyMessage: Every unit faces the same data questions — where to start, what to do, how to manage and store files — overall and per unit, with security and access rights as special concerns.

Adapt: keep grid-card-assemble's staggered self-assembly (the unit columns), then extend it with tethered question chips (supporting), a level bracket and a concern band.
Scene 1 (0.0–2.0s): headline per phrase, two authored lines (component 2) as [นอกจากปรับองค์กร][ให้เท่าทัน AI แล้ว] · [ยังมีปัญหาสำคัญ][คือการจัดการข้อมูลภายใน ทร.]; "ข้อมูล" in line 2 in cobalt weight.
Scene 2 (2.0–3.2s): five unit columns assemble left→right across x 120–1800 at y≈440–700 (`grid-card-assemble`, ~0.12s stagger): each column = a small neutral unit glyph on top (rounded square with three short bars — an org mark, no emblem, no name) above an untidy stack of 3–4 document tiles (component 3 at ~0.5 scale; deterministic seeded offsets and ±6° rotations).
Scene 3 (3.2–5.6s): the four question chips pop above columns 1, 2, 4 and 5 on their cues (3.2 / 3.8 / 4.4 / 5.0s) at y≈340–404 (card-tinted speech chips, Chulabhorn Likit Text 600 36px, #111, each with a 2px tether down to its column; smooth `spring-pop-entrance`, no overshoot). As each lands, its column's tiles jostle once (one small deterministic shift, settle). Column 3 has no chip — its tiles are the messiest (the question is everywhere).
Scene 4 (5.6–7.4s): a cobalt hairline bracket self-draws across all five columns directly under them (y≈712, 5.6–6.0s) and the label "ทั้งในภาพรวม และในระดับหน่วย" (Chulabhorn Likit Text 500 32px, #5F5B50) appears centred on it (y≈725–772) at 6.0s.
Scene 5 (7.4–13.5s): the concern band fades in at y≈808–872: the label "ข้อกังวลเป็นพิเศษในระดับหน่วย" (Chulabhorn Likit Text 600 34px, #3F3C35) at 7.6s, then two chips with ink icons — a padlock for "ความปลอดภัย" (8.1s) and a key for "สิทธิการเข้าถึงข้อมูล" (8.6s) — ink #3F3C35 on #ECE8DA with 2px #3F3C35 border (not red: concern, not denial). Both chips pulse once together (9.4s). Hold still from 9.8s.

Round-2 revisions: question chips lowered to y≈368 (≥ 40px clear of the headline descenders); document stacks scaled to ~0.9 of their current size so the concern band still ends ≤ y 880; the four chips distributed with equal gaps across x≈132–1795 and their tethers fanned so every column, including column 3, connects to a chip (column 3 shares a chip with a neighbour).

## Frame 4 — แต่! ไม่ใช่ปัญหา แต่คือโอกาส

- scene: "แต่!" slams in; "สิ่งที่เห็น กลับไม่ใช่ปัญหา" reads, then "แต่คือโอกาส" lands on its own line as faint question marks collapse into one cobalt spark
- voiceover:
- duration: 6.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-turn.html
- type: product_intro
- persuasion: Reframe (problem → opportunity), the requester's own sentence built line by line
- beat: Surprise + resolve
- blueprint: kinetic-type-beats (Adapt)
- term: Opportunity
- focal: "แต่คือโอกาส"
- roles: "แต่!" = foreground subject (Scene 1) · statement line = foreground subject · payoff line = foreground subject (Scene 3) · question marks + spark = supporting
- onscreen: "แต่!" (0.6s) · "สิ่งที่เห็น กลับไม่ใช่ปัญหา" (1.4s) · "แต่คือโอกาส" (2.6s)

narrativeRole: The turn of the story — the same problem is the opportunity for the move.
keyMessage: What we see is not a problem but an opportunity.

Adapt: keep kinetic-type-beats' signature (the words carry the shot: a hard beat, a statement, then a payoff line), stacked so the requester's full sentence stays on screen.
Scene 1 (0.0–1.3s): plain cream. "แต่!" lands centred at y≈360 in Chulabhorn Likit Display 500 ~200px, near-black, with a fast `expo.out` scale 1.12→1 + fade (0.6–1.0s, after the crossfade; no bounce). Behind it, ~10 faint "?" marks (Chulabhorn Likit Text 700, 60–90px, 12–18% opacity, seeded positions inside x 40–1880, y 150–860) — a callback to frame 03's questions.
Scene 2 (1.3–2.6s): "แต่!" eases up and shrinks to ~110px at y≈230 (1.3–1.7s). The line "สิ่งที่เห็น กลับไม่ใช่ปัญหา" reveals as [สิ่งที่เห็น][กลับไม่ใช่ปัญหา] centred at y≈450 (Chulabhorn Likit Text 700 60px, #111) from 1.4s.
Scene 3 (2.6–6.5s): "กลับไม่ใช่ปัญหา" eases to #6B675C (2.5–2.8s; stays fully legible, no strike-through). "แต่คือโอกาส" rises in on its own line centred at y≈570 (Chulabhorn Likit Text 700 72px, #111; "โอกาส" in cobalt) at 2.6s; a 6px cobalt underline self-draws under "โอกาส" (3.1–3.6s). The faint "?" marks converge and collapse into one 40px cobalt spark (component 7) that settles just right of "โอกาส" (2.7–3.4s). Hold still from 3.7s.

Round-2 revisions: the whole stack moves down ~100px so the payoff sits on the frame's optical centre: "แต่!" settles centred y≈330, the statement y≈550, the payoff y≈680; the payoff "แต่คือโอกาส" grows to 84px (it must outrank the settled "แต่!", which stays ~110px or shrinks to ~96px); the "?" convergence target and the spark follow the payoff's new position.

## Frame 5 — Move นี้ของ ทร. สู่ NAVE | นาวี

- scene: The lead department is named; scattered pieces (files, people, units, apps) gather and assemble the NAVE | นาวี wordmark
- voiceover:
- duration: 12s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/05-nave.html
- type: product_intro
- persuasion: Concept announcement (name the answer) + assembly metaphor (an ecosystem made of what the Navy already has)
- beat: Clarity + anticipation
- blueprint: logo-assemble-lockup (Adapt)
- term: NAV Ecosystem
- focal: the NAVE | นาวี wordmark
- roles: eyebrow + department block = supporting (Scene 1) · converging pieces = supporting → foreground (Scene 2) · wordmark = foreground subject · subline = supporting
- onscreen: eyebrow "Move นี้ของ ทร. นำโดย" (0.3s) · department "กรมการสื่อสารและเทคโนโลยีสารสนเทศ" + "ทหารเรือ" (0.9s) · lead line "เปลี่ยนผ่าน ทร. สู่ Digital Navy ด้วย" (3.4s) · wordmark "NAVE" (4.6s) "นาวี" (5.0s) · chip "NAV Ecosystem" (5.6s) · subline "สอดประสานกับความต้องการของผู้บังคับบัญชา" + "ในหลากหลายมิติ" (7.6s)

narrativeRole: Names who leads the move and introduces the answer, NAVE | นาวี, as an ecosystem assembled from the Navy's own parts.
keyMessage: Led by the Naval Communications and IT Department, the RTN moves to a Digital Navy with NAV Ecosystem — NAVE | นาวี — aligned with the needs of command in many dimensions.

Adapt: logo-assemble-lockup, "built from parts" variant — keep the signature (the mark comes to exist from parts and resolves into a centred lockup), but the parts are the film's own objects.
Scene 1 (0.0–3.4s): top-left at x 96: the eyebrow as [Move นี้ของ ทร.][นำโดย] (Chulabhorn Likit Text 500 40px #5F5B50; "Move" in cobalt weight) at y 148–206, then the department name in a split-highlight block (4px cobalt left rule, accent-light fill, radius 12px) at y 214–382, two authored lines (Chulabhorn Likit Text 700 48px, #111), revealed per line (0.9s / 1.3s).
Scene 2 (3.4–7.4s): the lead line reveals as [เปลี่ยนผ่าน ทร.][สู่ Digital Navy ด้วย] centred at y 400–464 (Chulabhorn Likit Text 600 44px, #111; "Digital Navy" cobalt) at 3.4s. From 3.6s about 24 small pieces (mini document tiles, person silhouettes, unit glyphs, app squares, spark dots; seeded positions near the frame edges inside x 40–1880, y 400–860 so none crosses the department block; 40–60% opacity) converge toward the centre on curved paths (`center-outward-expansion` reversed, staggered 0.03s, power3.inOut) and resolve into the wordmark (component 9 at 0.8 scale: NAVE 144px, rule 120px, นาวี 120px), centred on y≈585 (y 498–672): "NAVE" settles at 4.6s, the cobalt rule draws, "นาวี" at 5.0s; pieces fade as they merge. The chip "NAV Ecosystem" lands under the wordmark (y 690–743) at 5.6s.
Scene 3 (7.4–12.0s): the subline reveals per line under the chip, two authored lines centred at y 770–822 / 822–874 (Chulabhorn Likit Text 500 36px, #3F3C35). Hold still from 8.4s (the wordmark holds ≥ 3 s).

Round-2 revisions: the eyebrow and the department block are centred on x 960 (block ≈ x 510–1410; department text 44px with 18px vertical padding, block ending ≤ y 366) so the frame has one centred axis; the block fill is accent-light as specified. The converging pieces are 1.5× larger at 75–90% opacity, start at mid-distance (x 300–1620, y 470–860, clear of the lockup's final box), interleave left and right (0.02s stagger from 3.6s) so both sides land together at 4.3–4.6s; "NAVE" fades in as ONE word over 4.5–4.8s (no letter-by-letter), "นาวี" stays at 5.0s.

## Frame 6 — ประตูแรก: MFA

- scene: The signed-in person passes a door with two factors and is verified; a leaked password alone stays locked out at a second door
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/06-mfa.html
- type: feature_showcase
- persuasion: Demonstration (two factors open the door) + counterexample (one leaked factor does not)
- beat: Confidence + reassurance
- blueprint: compose
- term: MFA · Multi-Factor Authentication
- focal: the two factor slots of each door
- roles: headline = supporting · gate (two stacked doors) = foreground subject · upper lane (person + two factors) = foreground subject (Scene 2) · lower lane (leaked password) = foreground subject (Scene 3) · result chips = supporting
- onscreen: headline "เริ่มจากยกระดับความปลอดภัย" + "ของระบบภายใน ทร. ด้วย MFA" (0.3s) · person "น.อ.aaaaa" (1.4s) · factor "รหัสผ่าน" (2.0s) · factor "ยืนยันผ่านแอปบนมือถือ" (2.9s) · verified "ยืนยันตัวตนแล้ว" (4.0s) · attempt "แม้รหัสผ่านจะรั่วไหล" (6.0s) · denied "ก็ยังเข้าสู่ระบบไม่ได้" (7.2s)

narrativeRole: Shows the first concrete move: stronger security on internal systems through more than one proof of identity.
keyMessage: With MFA a password alone is not enough — even a leaked password cannot get in.

Scene 1 (0.0–1.4s): headline per phrase, two authored lines (component 2) as [เริ่มจากยกระดับ][ความปลอดภัย] · [ของระบบภายใน ทร.][ด้วย MFA]; "MFA" in cobalt weight. The gate draws in at x 1180–1420 as two stacked doors (card-tinted, radius 20px, each split by a vertical seam into two leaves with a small cobalt padlock on the seam): upper door y 340–590, lower door y 610–860. Each door has two empty 64px factor slots on its left face at x 1196 (upper slots y 380–444 and 470–534; lower slots y 650–714 and 740–804), dashed 2px cobalt-35% outlines.
Scene 2 (1.4–5.6s): upper lane, left of the gate: the identity badge (component 6, signed-in ring) with "น.อ.aaaaa" at x 96, y≈380–476 (1.4s). Factor 1: a chip "รหัสผ่าน" with a key glyph at its right end travels right on the upper-slot-1 row and stops with only the glyph inside slot 1, the Thai text staying on screen left of the gate (2.0–2.7s); the slot turns solid #0B6A45 with the white shared check. Factor 2: a chip "ยืนยันผ่านแอปบนมือถือ" with a phone glyph (the shared check on its screen) does the same into slot 2 (2.9–3.6s; second check). The upper door's leaves part (3.7–4.1s, power3.inOut) and stay open; the success badge "ยืนยันตัวตนแล้ว" (success-solid, white text + check) appears right of the gate at x 1448–1760, y 431–480 (4.0s).
Scene 3 (5.6–11.0s): lower lane: an "outsider" ghost token (dashed #8A867A outline, no person, a key glyph at its right end) with the line "แม้รหัสผ่านจะรั่วไหล" (#5F5B50, 34px) appears left of the lower door (6.0s) and slides so its key glyph docks into lower slot 1 (6.3–6.9s; outline only, no check); lower slot 2 stays empty and its outline turns red (#9B2D27) with a small × (7.0s); the lower door never opens. The deny chip "ก็ยังเข้าสู่ระบบไม่ได้" (#b42318 on #fde7e3, × icon) lands right of the gate at x 1448–1780, y 700–749 (7.2s). The deny chip and the empty slot pulse once together (7.8s). Hold still from 8.2s.

Round-2 revisions (comprehension + legibility + motion): (1) the lower lane teaches MFA correctly: the leaked password is CORRECT, so lower slot 1 turns green with the white check exactly like upper slot 1 (6.9s); slot 2 stays empty and turns red with × (7.0s) — the door stays shut because the second factor is missing. (2) The lower lane has an actor: a dashed #8A867A ghost person silhouette (the identity-badge outline, 96px, no name, no face) at the lane's start; the leaked-password chip travels out from it. (3) Scale and grouping: both lanes start at one shared left edge (x≈200) and run to the gate: [badge 96px][factor chip 1][factor chip 2] (the person's badge 24px left of its first chip so the two factors read as theirs) and [ghost 96px][leaked chip]; doors 300px wide (gate centred near x 1180), slots 80px, chip text 40px (chips ~76px tall), padlocks 64px, result pills 40px text (~64px tall), all inside x 96–1824 and y ≤ 880. (4) The open state is unmistakable: at 3.6s the upper padlock's shackle lifts open and turns #0B6A45; 3.7–4.2s the leaves part to a ≥ 150px gap that shows the cream ground (no lilac fill), moving the right leaf more than the left so the docked slots stay put; the success badge lands at 4.1s. The lower door's padlock stays closed and cobalt.

## Frame 7 — อีกทั้งวางแผนรองรับ PQC

- scene: A timeline from today to the quantum future: an outsider copies encrypted data today and breaks it later — unless it is protected by post-quantum cryptography
- voiceover:
- duration: 12.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-pqc.html
- type: feature_showcase
- persuasion: Before/after on one timeline (classical lock vs post-quantum lock) + causal chain (copy now → decrypt later)
- beat: Foresight + unease → reassurance
- blueprint: compose
- term: PQC · Post-Quantum Cryptography
- focal: the stored copy's lock at the future end
- roles: headline = supporting · timeline = background structure · data packet + stolen copy = foreground subject · outsider token = supporting · quantum glyph = supporting · post-quantum lock + note/chip = foreground subject (Scene 4)
- onscreen: headline "อีกทั้งวางแผนรองรับ PQC ที่กำลังจะมาถึง" (0.3s) · timeline "วันนี้" (1.2s) "อนาคต · ยุคควอนตัม" (1.6s) · risk "ข้อมูลที่เข้ารหัสวันนี้ อาจถูกลักลอบเก็บไว้" (2.6s) + "แล้วถูกถอดรหัสได้ในอนาคต" (4.4s) · answer "การเข้ารหัสแบบใหม่ ที่ทนทานต่อควอนตัม" (6.6s) · note "เช่น มาตรฐาน NIST" (8.2s) · chip "ML-KEM" (8.4s)

narrativeRole: Explains why PQC must be planned now (data stolen today can be decrypted once quantum computers arrive) and that NAVE plans to support it.
keyMessage: Encrypted data stolen today could be read in the quantum future; post-quantum cryptography (published standards such as NIST's ML-KEM) closes that gap, so NAVE plans for it now.

Scene 1 (0.0–2.6s): headline (component 2) as [อีกทั้งวางแผนรองรับ PQC][ที่กำลังจะมาถึง], "PQC" in cobalt weight. A full-width timeline draws left→right at y 560 (x 160–1760, 3px #3F3C35, `svg-path-draw`, 0.8–1.6s) with two end nodes; labels under them at y 584–633: "วันนี้" centred on x 160 (1.2s) and "อนาคต · ยุคควอนตัม" right-aligned to x 1824 (1.6s; Chulabhorn Likit Text 600 34px).
Scene 2 (2.6–4.4s): at "วันนี้", a data packet (component 3 tile at ~0.6 scale, x 114–206, y 424–544) wearing a classical padlock (ink) sits above the line. The risk line reveals centred above, two lines y 296–354 / 354–412, as [ข้อมูลที่เข้ารหัสวันนี้][อาจถูกลักลอบเก็บไว้] (2.6s; Chulabhorn Likit Text 600 40px #111, no cobalt word). The "outsider" ghost token from frame 06 (dashed #8A867A outline, no person) arrives, pulls a dashed duplicate off the packet (2.8s) and carries it along the timeline (3.0–4.0s, power2.inOut) into a dashed "store" box near the future end (x 1560–1760, y 410–550).
Scene 3 (4.4–6.4s): the risk line's second line reveals as [แล้วถูกถอดรหัสได้][ในอนาคต] (4.4s). At the future end a quantum glyph (a cobalt circle with three thin elliptical orbits, 72px, x 1724–1796, y 318–390; static shape) appears and emits one ring; the stored copy's padlock cracks — a red #9B2D27 crack line self-draws across it and the shackle opens (4.6–5.2s).
Scene 4 (6.4–12.5s): the cracked copy dims to 40% and shifts 110px left inside the store (6.4–6.8s). At "วันนี้" the packet's padlock is replaced in place by a post-quantum lock (the same padlock outline filled with a 3×3 lattice of cobalt dots; `scale-swap-transition`, 6.4–6.8s) and the answer line reveals centred at y 676–734 as [การเข้ารหัสแบบใหม่][ที่ทนทานต่อควอนตัม] (6.6s; "ทนทานต่อควอนตัม" in cobalt weight). The outsider copies the packet again (6.9–7.6s) into the store; the quantum glyph emits a ring (7.7s) and the lattice lock holds — a cobalt ring + shared check settle on it (7.9s). One centred row at y 770–823: the muted note "เช่น มาตรฐาน NIST" (Chulabhorn Likit Text 500 32px #5F5B50, 8.2s) then the chip "ML-KEM" (component 11, 8.4s). Hold still from 9.2s.

Round-2 revisions (all four critics): (1) Scale: the today packet is the full document tile (132×172) at x≈96–228; the store is a dashed box ~420×250 at x≈1340–1760, y≈300–550 holding both stored copies at full tile size side by side (padlocks ≥ 64px). (2) Actor: the outsider is the same dashed #8A867A ghost person silhouette as frame 06 (~110px, no name); it walks to the packet, takes the dashed copy and carries it along the timeline all the way into the store (one continuous carry). (3) The quantum glyph is NOT the three-orbit atom (it reads as the React logo): draw a Bloch-sphere qubit — a 96px circle, a tilted equatorial ellipse and one arrow from the centre to the rim — in cobalt, centred over the store at y≈200–296; its emitted ring must not be clipped. (4) The cracked state holds at full contrast until 6.9s (the red #9B2D27 crack stays full strength); after that the cracked copy recedes by recolouring its strokes to #8A867A (not by opacity). (5) Planned, not done: the post-quantum lock on today's packet is drawn as a DASHED cobalt lattice lock (the film's 'not yet / planned' style), and the answer line starts at 7.0s (was 6.6). (6) Layout: timeline lowered to y≈620 with its labels under it; answer line y≈720–778; note + chip row y≈800–853; nothing below y 880.

## Frame 8 — NAVE เสมือน AI-Workspace ของ ทร.

- scene: One person's workspace at the centre, wrapped in their rights scope; units, internal apps, the archive and the AI assistant connect to it through that scope
- voiceover:
- duration: 13s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/08-workspace.html
- type: feature_showcase
- persuasion: Frame-then-fill (the person and their rights first, then what connects) + hub metaphor
- beat: Clarity + "aha"
- blueprint: constellation-hub (Adapt)
- term: AI-Workspace
- focal: the workspace hub with the identity badge
- roles: headline + subline = supporting · hub card (identity badge + Identity/Policy chips) = foreground subject · rights scope = foreground subject (Scene 2) · four satellites + connectors = foreground subject (Scene 3) · closing lines = supporting
- onscreen: headline "NAVE เสมือน AI-Workspace ของ ทร." (0.3s) · subline "ดำเนินการเบ็ดเสร็จ ภายในที่เดียว" (1.3s) · hub "น.อ.aaaaa" (2.4s) · chips "Identity" (3.0s) "Policy" (3.4s) · scope label "ตัวตนและสิทธิ์ ของแต่ละบุคคล" (4.0s) · satellites "หน่วยขึ้นตรง (นขต.)" (5.6s) "แอปภายใน" (6.0s) "คลังเอกสาร" (6.4s) "ผู้ช่วย AI" (6.8s) · closing "เชื่อมโยงการทำงานระหว่างหน่วย" + "และแอปภายในที่เกี่ยวข้อง" (8.2s)

narrativeRole: Defines NAVE as the RTN's AI workspace: one place where each person works with their own identity and rights (policy), connected to units, internal apps, documents and AI.
keyMessage: NAVE is like one workspace where everything a person does runs through their own identity and rights, linking units and the related internal apps.

Adapt: constellation-hub — keep the signature (iconned nodes spring into a ring around a centre, then the eye resolves on the core) but with no camera push; the core is the person's workspace and every connector passes through the rights scope.
Scene 1 (0.0–2.4s): headline (component 2) as [NAVE เสมือน][AI-Workspace ของ ทร.] and, under it at y 245–297, the subline [ดำเนินการเบ็ดเสร็จ][ภายในที่เดียว] in #5F5B50 36px (1.3s).
Scene 2 (2.4–5.6s): centre: the hub card (card-tinted, radius 14px, x 760–1160, y 450–690) with the identity badge (component 6, signed-in ring) and "น.อ.aaaaa" (2.4s); the chips "Identity" (3.0s) and "Policy" (3.4s) land inside it in one row under the name. 3.6–4.4s: the scope (component 4) self-draws as a rounded rectangle around the hub (x 640–1280, y 400–740) with its pill label "ตัวตนและสิทธิ์ ของแต่ละบุคคล" (28px) centred on the top edge (4.0s), leaving dashed edge visible either side of the pill.
Scene 3 (5.6–8.2s): four satellites spring into place on their cues (smooth `spring-pop-entrance`, no overshoot), each a tinted card (x 96–520 on the left, x 1400–1824 on the right; ~100px tall) with a glyph + Thai label (Chulabhorn Likit Text 600 36px): left-top (y 400–500) "หน่วยขึ้นตรง (นขต.)" (unit glyph), right-top "แอปภายใน" (app-grid glyph), left-bottom (y 640–740) "คลังเอกสาร" (document-tile glyph), right-bottom "ผู้ช่วย AI" (spark in an AI node, component 7). As each lands a 2px cobalt connector self-draws from it to the scope edge and on into the hub (`svg-path-draw`), crossing the dashed line through a small cobalt gate dot.
Scene 4 (8.2–13.0s): one cobalt pulse travels all four connectors at once into the hub (8.2–8.8s) as the closing lines reveal centred at y 772–876 (Chulabhorn Likit Text 600 36px, #111; "เชื่อมโยง" in cobalt weight). Hold still from 9.0s.

Round-2 revisions: the scope pill "ตัวตนและสิทธิ์ ของแต่ละบุคคล" is 32px (same size as frame 09's scope pill), still leaving visible dashed edge either side.

## Frame 9 — ถาม หรือ สั่งการ ในที่เดียว

- scene: In one composer, a question is answered with a citation inside the person's rights; then a command drafts a memo, waits for a human approval and sends it to the units — tagged as an example of the target picture
- voiceover:
- duration: 19.6s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-prompts.html
- type: feature_showcase
- persuasion: Demonstration (the mechanism running twice) + callback (the RAG film's question, scope and citation)
- beat: Delight + confidence
- blueprint: prompt-type-submit-generate (Adapt)
- term: Prompt · Tool Calling
- focal: the composer, then the answer card (Part A) and the approval card (Part B)
- roles: composer = foreground subject (fixed anchor) · example tag = supporting · status pills = supporting · answer card with citation + scope = foreground subject (Part A) · checklist + approval card + unit tiles = foreground subject (Part B) · note = supporting
- onscreen: headline "ถาม หรือ สั่งการ — ในที่เดียว" (0.3s) · tag "ตัวอย่าง · ภาพเป้าหมาย" (0.6s) · prompt 1 "สรุปแนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s, per word) · status "ตรวจสิทธิ์" (2.9s) "ค้นในขอบเขตสิทธิ์" (3.3s) · answer "คำตอบ" (4.0s) · citation "อ้างอิง: นโยบาย69 · v02" (5.0s) · scope "ตามสิทธิ์ของ น.อ.aaaaa" (5.6s) · prompt 2 "ร่างหนังสือแจ้ง นขต. พร้อมนัดประชุม" (9.6s, per word) · steps "ร่างหนังสือ" (11.6s) "ตรวจตารางนัดหมาย" (12.2s) · approval "รออนุมัติ" (12.9s) → "อนุมัติแล้ว" (14.1s) · send "ส่งถึง นขต. ที่เกี่ยวข้อง" (14.8s) · note "ต้องมีผู้อนุมัติ ก่อนส่งจริง" (15.8s)

narrativeRole: Shows the target picture of NAVE in use: asking returns an answer with its source, limited to what this person may see; commanding runs work across apps and units, with a person approving before anything is sent.
keyMessage: In NAVE's target picture one composer both answers questions (with citations, within the person's rights) and carries out tasks across units and apps — with human approval before anything goes out.

Adapt: prompt-type-submit-generate, full loop + its restart signature — keep the composer fixed (it never moves), run one complete ask → answer loop, then a second command types into the same composer and its result surface replaces the first.
Scene 1 (0.0–2.6s): headline (component 2) as [ถาม หรือ สั่งการ][— ในที่เดียว]; the muted tag "ตัวอย่าง · ภาพเป้าหมาย" (#5F5B50 on #ECE8DA pill, Chulabhorn Likit Text 500 28px) sits right of the headline, vertically centred on it (from 0.6s; stays to the end). The composer (component 5, 1200px) fades up at x 96–1296, y 300–412. From 1.0s prompt 1 appears word by word with the caret (สรุป · แนวทาง · ปฏิบัติ · ปี · 69 · ของ · ศซบ.), ~0.18s apart; the send button presses at 2.5s.
Scene 2 (2.6–9.0s) — Part A: two status pills stack right of the composer (x 1320–1824; y 300–352 and 362–414), each a small spinner arc that resolves into the shared check: "ตรวจสิทธิ์" (2.9s → ✓ 3.2s) then "ค้นในขอบเขตสิทธิ์" (3.3s → ✓ 3.7s). The answer card (card-tinted, x 128–1180, y 506–836) opens at 4.0s with the spark + "คำตอบ" (Chulabhorn Likit Text 700 36px); four grey text bars stream in left→right (4.1–4.8s; illustrative, no readable content). The citation chip "อ้างอิง: นโยบาย69 · v02" (component 11) lands at the card's bottom with the RAG film's example-document tile (cobalt outline, ~0.5 scale) at 5.0s. 5.4–6.0s: the scope (component 4) self-draws around the answer card (x 96–1500, y 470–868) with the pill "ตามสิทธิ์ของ น.อ.aaaaa" on its top edge at x≈136 (5.6s); a small identity badge (component 6 at 0.7 scale, no name text) sits inside the scope at x 1230–1470, centred y≈670. Hold 6.2–9.0s.
Scene 3 (9.0–9.6s) — seam: the Part-A surface (status pills, answer, scope) slides up 40px and fades to 0 in 0.4s (velocity-matched with the incoming Part B, `cut-catalog.md`); the composer clears its text and the caret returns.
Scene 4 (9.6–15.8s) — Part B: prompt 2 types word by word (ร่าง · หนังสือ · แจ้ง · นขต. · พร้อม · นัด · ประชุม), send presses at 11.2s. A checklist card (x 96–760, y 452–700) whose rows arrive and check off: "ร่างหนังสือ" (11.6s, ✓ 12.0s, a small document glyph), "ตรวจตารางนัดหมาย" (12.2s, ✓ 12.6s, a calendar glyph). An approval card (x 820–1360, y 452–700) with a neutral approver silhouette and the pill "รออนุมัติ" (12.9s; #ECE8DA fill, a small clock glyph); at 13.8s its approve button presses (`press-release-spring`, smooth) and the pill flips to the success badge "อนุมัติแล้ว" (14.1s). 14.6–15.2s: three short cobalt connectors fan from the approval card's right edge (x 1360, y 576) to three 88×88 unit tiles (unit glyph + mini document) at x 1560–1648, y 452 / 556 / 660; the label "ส่งถึง นขต. ที่เกี่ยวข้อง" appears under them at x 1500–1798, y 772–818 (14.8s).
Scene 5 (15.8–19.0s): the note "ต้องมีผู้อนุมัติ ก่อนส่งจริง" reveals under the approval card (x 820–1300, y 724–776) with a small person + check glyph (15.8s). Hold still from 16.4s.

Round-2 revisions: frame is 19.6s. (1) Ask vs command: the headline word "ถาม" is cobalt during Part A (to 9.0s) and returns to #111 at the seam, when "สั่งการ" turns cobalt for Part B (colour tweens only, no new copy). (2) The example tag is 32px with a 2px rgba(30,43,250,0.35) border so the honesty label is not the faintest thing on screen. (3) The restart seam reads as clear-then-restart: Part A moves y 0→−40 and fades 9.0–9.45s with power2.inOut (motion visible from the first frame), the composer's prompt-1 text fades 9.0–9.3s, the caret returns at 9.35s, prompt 2 still starts at 9.6s. (4) The human-approval gate holds: "รออนุมัติ" stays 12.9–15.3s; approve press at 15.0s, flip to "อนุมัติแล้ว" at 15.3s, connectors 15.6–16.2s, "ส่งถึง นขต. ที่เกี่ยวข้อง" at 15.8s, note at 16.8s, hold to 19.6s. (5) Unit tiles use frame 03's boxed unit glyph (rounded-square outline with three short bars) at 48px, not bare bars that read as the numeral III; centre the send label under the tiles.

## Frame 10 — 5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง

- scene: The five-stage roadmap draws itself as a rail of five stations; the target picture is reached step by step; a pin drops between stage 1 and stage 2 — we are here
- voiceover:
- duration: 11s
- transition_in: crossfade
- status: outline
- src: compositions/frames/10-roadmap.html
- type: feature_showcase
- persuasion: Frame-then-fill (the whole road, then where we stand) + signposting + honesty bridge
- beat: Orientation + candour
- blueprint: spatial-pan-stations (Adapt)
- term: Production-Ready NAVE
- focal: the pin between stations 1 and 2
- roles: rail (track + five nodes + labels) = foreground subject (Scene 2) · gloss cards = supporting · headline + subline = supporting · pin + travelled segment = foreground subject (Scene 3)
- onscreen: headline "5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง" (0.3s) · subline "ภาพเป้าหมายข้างต้น ไปถึงได้ทีละขั้น" (1.0s) · stations "Demo" (1.6s) "Foundation" (2.1s) "Core Production" (2.6s) "Specialized" (3.1s) "Elite" (3.6s) · glosses "ระบบสาธิต" (1.9s) "วางรากฐาน" (2.4s) "ระบบหลัก" (2.9s) "ใช้งานจริง ระดับองค์กร" (3.4s) "ผลลัพธ์ที่เชื่อถือได้" (3.9s) · pin "เราอยู่ตรงนี้" (5.4s)

narrativeRole: Sets the honest checkpoint: what frames 08–09 showed is the target, reached in five stages; today the work stands between stage 1 and stage 2.
keyMessage: Building a production-ready NAVE takes five stages; the target picture is reached step by step, and today NAVE is between stage 1 (demo) and stage 2 (foundation).

Adapt: spatial-pan-stations — keep the signature (pre-placed labelled stations on one canvas, visited in turn, landing held on "us") but without a camera traverse: the rail fits the frame and the visit is each station lighting in order; the landing is the pin.
Scene 1 (0.0–1.4s): this frame has no `h2` at the top; the rail band (y 130–290) is reserved for the rail. The headline reveals as [5 ขั้น สู่ NAVE][ที่พร้อมใช้งานจริง] at x 96, y 316–403 (Chulabhorn Likit Text 700 60px, #111; "NAVE" in cobalt weight); the subline [ภาพเป้าหมายข้างต้น][ไปถึงได้ทีละขั้น] at x 96, y 420–472 (Chulabhorn Likit Text 500 36px, #5F5B50) at 1.0s.
Scene 2 (1.4–4.4s): the rail, built from the SAME markup, CSS and @font-face weights as `compositions/roadmap.html` (frame.md component 10): the dashed track is revealed through a clipPath rect whose width tweens 0→1600 with `ease: "none"` over 1.4–3.4s, so the line reaches each node at 1.4 / 1.9 / 2.4 / 2.9 / 3.4s; each node + its mono label pops 0.2s after the line reaches it (1.6 / 2.1 / 2.6 / 3.1 / 3.6s). Node 1 fills cobalt (reached) as it appears. Gloss cards (300×170, card-tinted, radius 14px, no hairlines; a small stage glyph above the Thai gloss in Chulabhorn Likit Text 600 34px #3F3C35, "ใช้งานจริง ระดับองค์กร" as two authored lines) land 0.3s after their node at y 540–710: card 1 x 96–396, cards 2–4 centred on their nodes (x 410–710, 810–1110, 1210–1510), card 5 x 1524–1824.
Scene 3 (4.4–7.0s): the pin (component 10) drops onto the track at x = 360 (4.8–5.3s, `expo.out`, settles, no bounce); its label "เราอยู่ตรงนี้" appears under it at 5.4s; the travelled segment x 160→360 fills solid cobalt over the dashed one (5.4–6.0s; the dashed 160→360 piece is hidden once the fill completes). Cards 3–5 recolour to "not yet" (6.0–6.4s): transparent fill, 1.5px dashed #B9B4A2 border, text #6B675C (no opacity dimming). A soft accent-light band (radius 28px) eases in behind cards 1–2 (x 84–722, y 526–724) at 6.0–6.4s.
Scene 4 (7.0–12.0s): hold still (the checkpoint read, ≥ 4 s). At exactly 12.0s (the frame's last instant) the frame's own rail is set to `autoAlpha: 0` — the persistent `roadmap.html` layer, identical pixels, takes over at that moment; the headline, subline, cards and band stay and slide out with the frame.

Round-2 revisions: frame is 11s; the frame's own rail hides at exactly local 11.0. (1) The rail is copied again from the updated `compositions/roadmap.html` (pin and label at x 336, pin 40×54 from y 130, node numerals 28px, travelled fill 160→336). (2) Pin beat reordered so the eye is led to 'here': the travelled fill draws 160→336 at 4.6–5.2s (power3.inOut); the pin lands at its head 5.1–5.6s (drop 16px + scale 0.8→1, power3.out); one cobalt ring pulses from the tip (r 8→40, 2px, opacity 0.6→0, 0.6s) at 5.45s; label at 5.6s. (3) Honest card states at 6.0–6.4s: card 1 (ระบบสาธิต) = reached (accent-light fill, 2px cobalt border, the shared check top-right); card 2 (วางรากฐาน) = in progress (cream fill, 2px DASHED cobalt border, text #111); cards 3–5 = not yet (transparent, dashed #B9B4A2, text #6B675C). The accent band sits behind card 1 only. (4) Cards: five equal cards 326×210 with 24px gaps (x 96, 446, 796, 1146, 1496; y 540–750), every gloss on two authored lines or all on one line at 32px, the glyph at the same y in every card.

## Frame 11 — ขั้นที่ 1: Demo Only

- scene: Stage 1 defined: what a demo setup can do, and what it still lacks
- voiceover:
- duration: 11.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/11-stage1.html
- type: feature_showcase
- persuasion: Definition by contrast (what the stage can do vs what it lacks)
- beat: Recognition + candour
- blueprint: grid-card-assemble (Adapt)
- term: Stage 1 / 5
- focal: the "ขั้นนี้ยังขาด" tiles
- roles: stage header = supporting · "can only" tiles = supporting · "still lacks" tiles = foreground subject · bridge arrow = supporting
- onscreen: eyebrow "ขั้นที่ 1" (0.3s) · title "Demo Only" (0.3s) · purpose "ระบบ AI ที่ยังไม่พร้อมใช้งานจริง" (0.8s) · label "ขั้นนี้ทำได้แค่" (1.8s) · tiles "Local Only" (2.0s) "Hardcoded Prompts" (2.4s) "Manual Testing" (2.8s) · label "ขั้นนี้ยังขาด" (4.2s) · tiles "Security" (4.6s) "Monitoring" (5.0s) "Feedback Loop" (5.4s) "Evaluation" (5.8s) "Deployment Pipeline" (6.2s)

narrativeRole: Defines stage 1 frankly — a local demo with hard-coded prompts and manual testing, still lacking security, monitoring, feedback, evaluation and a deployment pipeline — the stage NAVE is now leaving.
keyMessage: Stage 1 is a demo: it runs locally with hard-coded prompts and manual tests, and still lacks security, monitoring, feedback, evaluation and a deployment pipeline.

Adapt: grid-card-assemble — keep the staggered self-assembly into a list and hold; the list is split into a solid "can only" group and a dashed "still lacks" group.
Scene 1 (0.0–1.8s): the rail is held by the persistent layer above (its focus halo moves to node 1 at +0.25s). Stage header (component 12) at x 96: the cobalt eyebrow "ขั้นที่ 1" inline before the title "Demo Only" on one row (y 300–380), then the purpose line (y 384–434) at 0.8s.
Scene 2 (1.8–4.0s): left group (x 96–760): the label "ขั้นนี้ทำได้แค่" (Chulabhorn Likit Text 700 36px #3F3C35, y 466–518) at 1.8s, then three item tiles (component 13) stacked at y 536 / 612 / 688 on their cues with icons (a laptop for Local Only, a pinned note for Hardcoded Prompts, a hand-check for Manual Testing).
Scene 3 (4.0–7.4s): right group (x 900–1824): the label "ขั้นนี้ยังขาด" (same style, y 466–518) at 4.2s, then five missing tiles (component 13, missing variant) assemble in two columns (x 900–1340 and 1384–1824; rows y 536 / 612 / 688) on their cues (4.6–6.2s).
Scene 4 (7.4–11.5s): a 3px cobalt arrow self-draws from x 900 to x 1800 at y 820 with its arrowhead at 1800 (7.4–8.0s; pointing on to stage 2; no text). Hold still from 8.0s.

Round-2 revisions: remove the bridge arrow entirely (it implied stage 2 fills the gaps). Stage header per frame.md component 12 (Thai purpose line 600 44px #111, key phrase "ยังไม่พร้อมใช้งานจริง" in cobalt). Tiles 72px tall with 14px gaps (rows y≈536 / 622 / 708) so both groups reach ~y 780. At 7.0s the English tile labels recede to #6B675C so the hold rests on the Thai purpose line; hold from 7.4s.

## Frame 12 — ขั้นที่ 2: Foundation + Builder NAVE + Practical

- scene: Stage 2, the stage in progress, in two halves: data foundations (frame 03's file question answered: organise the files; documents are the units' operations; clean the data), then the builder's decisions (where to store, what the web looks like, what outputs must achieve, RAG or CAG) and the retrieval stack
- voiceover:
- duration: 20s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/12-stage2.html
- type: feature_showcase
- persuasion: Callback answer (frame 03's question resolved in place) + question→answer pairing (each builder decision as a plain question)
- beat: Focus + momentum
- blueprint: compose
- term: Stage 2 / 5
- focal: "Data Foundations · จัดระเบียบไฟล์" (Part A), then the question rows (Part B)
- roles: stage header + in-progress pill = supporting · data-foundations block = foreground subject · document flow (messy → clean) = foreground subject (Part A) · question rows = foreground subject (Part B) · retrieval chips = supporting
- onscreen: eyebrow "ขั้นที่ 2" (0.3s) · title "Foundation + Builder NAVE + Practical" (0.3s) · pill "ขั้นที่กำลังทำ" (0.8s) · purpose "เข้าใจแก่นของระบบ · พัฒนาอย่างมั่นคง" (0.8s) · block "Data Foundations" (2.0s) · question "จัดการไฟล์อย่างไร?" (2.0s) → answer "จัดระเบียบไฟล์" (2.6s) · flow "Documents" (3.6s) "การดำเนินงานของหน่วยขึ้นตรง" (4.0s) → "Data Cleaning" (5.6s) · rows "Databases" "เก็บข้อมูลที่ไหน?" (8.4s) "Web UI" "หน้าเว็บเป็นยังไง?" (9.6s) "Structured Outputs" "Outputs ต้องการประสิทธิผลแบบไหน?" (10.8s) "RAG or CAG Pipelines" "ชั่งข้อดีข้อเสีย · คุณภาพ" (12.2s) · label "เตรียมระบบค้นหา" (13.6s) · chips "Vector DB" "Embeddings" "Retrieval" "Chunking" (13.8s)

narrativeRole: The stage NAVE is entering: lay data foundations (organise each unit's documents and clean them — the answer to frame 03's question) and settle the builder's core decisions and retrieval stack.
keyMessage: Stage 2 means organising and cleaning each unit's documents, then deciding where data lives, what the web looks like, what outputs must achieve, RAG or CAG, and preparing the retrieval stack.

Scene 1 (0.0–1.8s): rail focus moves to node 2 (+0.25s, persistent layer). Stage header (component 12): eyebrow "ขั้นที่ 2" + title "Foundation + Builder NAVE + Practical" on one row (y 300–380; title at 48px if 52px would pass x 1500), the small cobalt pill "ขั้นที่กำลังทำ" (accent-light, 28px) right of the title (0.8s), and the purpose line as [เข้าใจแก่นของระบบ][· พัฒนาอย่างมั่นคง] (y 384–434, 0.8s).
Scene 2 (1.8–7.6s) — Part A, left column x 96–760 (y 460–880): a split-highlight block (4px cobalt left rule, accent-light fill, radius 12px; y 460–540) holding the mono chip "Data Foundations" and, beside it, a slot where frame 03's speech chip "จัดการไฟล์อย่างไร?" (same card-tinted speech-chip style, #111) pops in at 2.0s and at 2.6s swaps in place (velocity-matched `discrete-text-sequence`) into the answer "จัดระเบียบไฟล์" (Chulabhorn Likit Text 700 40px, cobalt; the requester boxed this in red — here it is the cobalt emphasis). Below (y 566–716): a messy stack of four document tiles (component 3 at ~0.45 scale, seeded rotations) at left, with the mono chip "Documents" (3.6s) and the Thai label "การดำเนินงานของหน่วยขึ้นตรง" (Chulabhorn Likit Text 500 32px, #3F3C35, 4.0s) to its right. 5.0–5.5s: a short cobalt arrow self-draws downward from the stack; the mono chip "Data Cleaning" lands (5.6s) at y≈760 and the same four tiles fly down and straighten into one aligned row beside it (5.7–6.5s, power3.inOut, row ends ≤ x 760, y ≤ 870); each receives the RAG film's 4-dot governance badge (cobalt dots, 0.08s stagger, 6.6–7.0s).
Scene 3 (7.6–8.4s) — seam: a hairline divider draws at x 790 (y 460–870). Part A stays at full opacity.
Scene 4 (8.4–15.0s) — Part B, right column x 820–1824: four question rows (each ~60px tall, y 460 / 534 / 608 / 682) build on their cues, each = an English mono chip (component 11) left-aligned at x 820 and the Thai question at x 1216 (Chulabhorn Likit Text 600 34px #111, ends ≤ x 1824): Databases / "เก็บข้อมูลที่ไหน?" (8.4s), Web UI / "หน้าเว็บเป็นยังไง?" (9.6s), Structured Outputs / "Outputs ต้องการประสิทธิผลแบบไหน?" (10.8s), RAG or CAG Pipelines / "ชั่งข้อดีข้อเสีย · คุณภาพ" (12.2s). Then the label "เตรียมระบบค้นหา" (Chulabhorn Likit Text 500 32px #5F5B50, x 820, y 760–806) at 13.6s and one row of four mono chips (component 11) "Vector DB" "Embeddings" "Retrieval" "Chunking" at y 814–867 (13.8s, 0.25s stagger).
Scene 5 (15.0–20.0s): hold still (both halves readable).

Round-2 revisions: (1) The frame-03 callback is readable: the speech chip "จัดการไฟล์อย่างไร?" is drawn in frame 03's exact speech-chip style (36px, 600, with the tether nub), visible 2.0–3.6s, and swaps in place to "จัดระเบียบไฟล์" at 3.6–3.8s. (2) The rest of Part A shifts +0.8s: Documents 4.4, Thai label 4.8, arrow 5.8–6.3, Data Cleaning 6.4, tiles fly 6.5–7.3, badges 7.4–7.8, divider 7.8–8.4; Part B unchanged from 8.4s. (3) The dashed ghost outlines left where the messy stack was fade out during the fly-down (autoAlpha 0 by 7.0s). (4) The in-progress pill "ขั้นที่กำลังทำ" is 32px. (5) Stage header per frame.md component 12 (purpose line 600 44px #111, "แก่นของระบบ" in cobalt) — keep it on one line ≤ x 1824.

## Frame 13 — ขั้นที่ 3: Core Production System

- scene: Stage 3: ten building blocks of a robust AI service assemble as a two-column list and light once in sequence as one system
- voiceover:
- duration: 12s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/13-stage3.html
- type: feature_showcase
- persuasion: Enumeration as a system (parts → one working whole)
- beat: Momentum + mastery
- blueprint: grid-card-assemble (Adapt)
- term: Stage 3 / 5
- focal: the two-column tile list
- roles: stage header = supporting · ten item tiles = foreground subject · system pulse = supporting
- onscreen: eyebrow "ขั้นที่ 3" (0.3s) · title "Core Production System" (0.3s) · purpose "สร้างแอปและบริการ AI ที่เสถียรและทนทาน" (0.8s) · tiles "Session Memory" (1.8s) "Queues & Retries" (2.25s) "Model Serving" (2.7s) "Workflow Engine" (3.15s) "Prompt Management" (3.6s) "Caching" (4.05s) "API Gateways" (4.5s) "Tool Calling" (4.95s) "CI/CD" (5.4s) "Background Jobs" (5.85s)

narrativeRole: Lists what turns a working demo into a robust AI application and service.
keyMessage: Stage 3 adds the production backbone: memory, queues and retries, model serving, workflows, prompt management, caching, gateways, tool calling, CI/CD and background jobs.

Adapt: grid-card-assemble — keep the staggered self-assembly into a list; the list reads top-down like the requester's notebook.
Scene 1 (0.0–1.8s): rail focus to node 3 (+0.25s). Stage header (component 12): eyebrow "ขั้นที่ 3" + title on one row (y 300–380), purpose line as [สร้างแอปและบริการ AI][ที่เสถียรและทนทาน] (y 384–434, 0.8s).
Scene 2 (1.8–6.2s): two columns of five item tiles (component 13; tiles 844×56, gap 14px; column 1 x 96–940, column 2 x 980–1824; rows y 470 / 540 / 610 / 680 / 750, ending y 806) assemble in reading order — the first five down column 1 (Session Memory → Prompt Management), the last five down column 2 (Caching → Background Jobs) — on the cues (smooth settle), each tile with its own stroke icon (memory chip, stacked queue + loop arrow, server, flow nodes, text-lines with a pin, lightning-in-box, gateway arch, wrench, loop arrows, clock-in-gear).
Scene 3 (6.2–12.5s): short cobalt connectors self-draw between consecutive tiles within each column (6.2–7.0s, 8 connectors) and one cobalt pulse runs once through all ten in reading order (7.0–8.2s; it crosses from the bottom of column 1 to the top of column 2 as a 0.12s border hand-off, no return path), each tile's border brightening as it passes and settling back. As the pulse ends, "ที่เสถียรและทนทาน" in the purpose line eases to cobalt weight (8.2–8.5s). Hold still from 8.6s.

Round-2 revisions: frame is 12s. Stage header per frame.md component 12 (purpose line 600 44px #111; "ที่เสถียรและทนทาน" turns cobalt as the pulse ends). Tiles: two columns of five, each column ~700px wide, centred as a pair with a 60px gutter (≈ x 230–930 and 990–1690), tiles 64px tall with 16px gaps (rows y≈474–818), mono labels 32px, icons 36px. Connectors and the single pulse as before (the pulse crosses the gutter at the column wrap). At 8.4s the tile labels recede to #6B675C; hold from 8.6s.

## Frame 14 — ขั้นที่ 4: Production / Specialized NAVE

- scene: Stage 4: ten operational guardrails, plus a stamped Safety Policy; then the 4+ advanced row (routing, token tracking, latency) slides in
- voiceover:
- duration: 16.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/14-stage4.html
- type: feature_showcase
- persuasion: Enumeration + addition (these, plus a dedicated safety policy) + build-up (4 → 4+)
- beat: Assurance + ambition
- blueprint: grid-card-assemble (Adapt)
- term: Stage 4 / 5
- focal: the bracket + "Safety Policy!" stamp
- roles: stage header = supporting · ten item tiles = foreground subject · bracket + "+" + stamp = foreground subject (Scene 3) · 4+ row = foreground subject (Scene 4)
- onscreen: eyebrow "ขั้นที่ 4" (0.3s) · title "Production / Specialized NAVE" (0.3s) · purpose "การทำงานที่ปลอดภัย เชื่อถือได้ ระดับองค์กร" (0.8s) · tiles "Guardrails" (1.8s) "Access Control" (2.2s) "Secrets Management" (2.6s) "Audit Logs" (3.0s) "Rate Limits" (3.4s) "Fallback Models" (3.8s) "Incident Response" (4.2s) "Compliance" (4.6s) "HA / Auto-Scaling" (5.0s) "Disaster Recovery" (5.4s) · stamp "Safety Policy!" (6.1s) · advanced "4+ Advanced" (7.6s) "Model Routing" (8.0s) "Token Tracking" (8.4s) "Latency Optimization" (8.8s) · note "ในสภาพแวดล้อมใช้งานจริง" (9.4s)

narrativeRole: Lists what makes NAVE secure, reliable and enterprise-grade, plus a dedicated Safety Policy, then the advanced optimisations that only make sense in the real environment.
keyMessage: Stage 4 adds guardrails — access control, secrets, audit logs, rate limits, fallbacks, incident response, compliance, HA and disaster recovery — plus a dedicated Safety Policy, then optimises routing, tokens and latency in the real environment.

Adapt: grid-card-assemble — the items assemble into two justified rows, then an addition (bracket + "+" + stamp) and a later row.
Scene 1 (0.0–1.6s): rail focus to node 4 (+0.25s). Stage header (component 12): eyebrow "ขั้นที่ 4" + title on one row (y 300–380), purpose line as [การทำงานที่ปลอดภัย][เชื่อถือได้ ระดับองค์กร] (y 384–434, 0.8s).
Scene 2 (1.6–5.5s): two rows of five item tiles (component 13; content-width tiles, `flex: 1 1 auto`, gap 12px, each row justified across x 96–1824; row 1 y 466–530, row 2 y 542–606) assemble in reading order on the cues, each with its own stroke icon (shield, key-in-lock, vault/key, list-with-eye, gauge, branching arrow, siren, checklist-seal, stacked servers with arrows, cloud-with-return-arrow).
Scene 3 (5.5–7.4s): a cobalt curly brace self-draws under both rows (x 96–1824, y 618–646, tip down at x 960; 5.5–6.0s). Below its tip one centred row (y 660–734): a cobalt "+" glyph (40px, 4px round stroke) at 5.9s, then the stamp "Safety Policy!" right of it at 6.1s — a solid cobalt rounded box (radius 12px, `#fdfae7` text, Chulabhorn Likit Text 700 40px, a shield-exclamation glyph), arriving with a short scale 1.08→1 settle (no bounce).
Scene 4 (7.4–16.5s): a hairline divider draws at y 752 (7.4–7.6s); one row at y 768–832: the chip "4+ Advanced" (component 11) at x 96 (7.6s), then three item tiles (8.0 / 8.4 / 8.8s; icons: forked route, token coin with a counter tick, stopwatch) and the note "ในสภาพแวดล้อมใช้งานจริง" (Chulabhorn Likit Text 500 32px #5F5B50) after a 24px gap (9.4s), the row ending ≤ x 1824. (The rail's node 4 gains its small "+" badge at the same moment, 7.6s — drawn by `roadmap.html`, not by this frame.) Hold still from 10.0s.

Round-2 revisions: reveals re-spaced so the frame no longer dies after 9.4s: tiles every 0.5s at 1.8, 2.3 … 6.3; brace 6.5–7.0; "+" 6.9; stamp 7.1; divider 8.5–8.7; "4+ Advanced" 8.7 (the rail's node-4 "+" badge lands at the same moment, drawn by roadmap.html); tiles 9.2 / 9.7 / 10.2; note 10.8. At 11.6s the ten guardrail tile labels recede to #6B675C so the hold rests on the stamp and the Thai purpose line. Stage header per frame.md component 12 (purpose line 600 44px #111, "ปลอดภัย" in cobalt). Hold from 12.0s.

## Frame 15 — ขั้นที่ 5: Elite NAVE

- scene: Stage 5: four outcome cards around a loop that keeps turning back into improvement
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/15-stage5.html
- type: benefit_highlight
- persuasion: Cycle metaphor (measure → approve → adopt → report → improve) + callback (frame 09's approval card)
- beat: Aspiration + resolve
- blueprint: compose
- term: Stage 5 / 5
- focal: the "Continuous Improvement" loop
- roles: stage header = supporting · four outcome cards = foreground subject · loop arrow + centre label = foreground subject (Scene 3)
- onscreen: eyebrow "ขั้นที่ 5" (0.3s) · title "Elite NAVE" (0.3s) · purpose "ระบบ NAVE ที่ให้ผลลัพธ์เชื่อถือได้" (0.8s) · cards "KPIs" (2.0s) "Human-in-the-Loop Approval" (2.6s) "Adoption Metrics" (3.2s) "Executive Dashboards" (3.8s) · loop "Continuous Improvement" (5.4s)

narrativeRole: The destination: a NAVE whose outcomes are trusted because they are measured, approved by people, adopted and visible to leadership — and improved continuously.
keyMessage: Stage 5 is a NAVE that delivers trusted outcomes — KPIs, human-in-the-loop approval, adoption metrics and executive dashboards — feeding continuous improvement.

Scene 1 (0.0–1.8s): rail focus to node 5 (+0.25s). Stage header (component 12): eyebrow "ขั้นที่ 5" + title on one row (y 300–380), purpose line (y 384–434, 0.8s).
Scene 2 (1.8–5.0s): four outcome cards 500×150 (opaque backing #F4F2E8 = the 4% tint pre-composited on cream, 1.5px border, radius 14px) at (96,450), (1324,450), (96,730), (1324,730) land on their cues, each with a 48px invented mini-visual on top and its single-line English title (mono 28px) below, no numbers: KPIs = a half gauge with a needle; Human-in-the-Loop Approval = a small copy of frame 09's approval card (approver silhouette + green success pill with the shared check, no text); Adoption Metrics = a rising bar trio; Executive Dashboards = a 2×2 mini panel grid.
Scene 3 (5.0–11.0s): a large rounded loop (cobalt, 4px; a rounded rect through the card centres (346,525)→(1574,525)→(1574,805)→(346,805), radius 60, drawn UNDER the cards) self-draws clockwise (5.0–6.2s); "Continuous Improvement" lands at the loop's centre (Chulabhorn Likit Text 700 52px, #111, x≈580–1340, y 628–703) at 5.4s with two small cobalt sparks either side (the requester's *** emphasis). One cobalt dot travels the loop once (6.4–7.8s), each card pulsing lightly as it passes. Hold still from 8.0s.

Round-2 revisions: (1) Loop order follows the notebook: swap the bottom cards — Adoption Metrics at bottom-RIGHT (1324,730) and Executive Dashboards at bottom-LEFT (96,730), so the clockwise loop reads KPIs → Human-in-the-Loop Approval → Adoption Metrics → Executive Dashboards → back. (2) Card titles 32px (from 28), mini-visuals 64px (from 48). (3) The loop dot is legible: 20px with a ~130px fading cobalt trail along the path, one full lap 6.2–8.2s (power2.inOut over the whole path), the cards pulsing as it passes; hold from 8.4s. (4) Stage header per frame.md component 12 (purpose line 600 44px #111, "เชื่อถือได้" in cobalt).

## Frame 16 — Digital Navy ที่เรามองเห็น

- scene: The closing answer to the opening question; the NAVE | นาวี wordmark returns over faint rings, with the leading department
- voiceover:
- duration: 14s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/16-close.html
- type: branding
- persuasion: Callback (frame 01's question, frame 02's criteria, the roadmap's step by step) + distillation
- beat: Clarity + inspiration
- blueprint: titlecard-reveal (Adapt)
- focal: the answer lines, then the wordmark
- roles: answer lines = foreground subject · wordmark + chip = foreground subject (Scene 3) · department credit = supporting · rings + dot grid = background atmosphere
- onscreen: line 1 "Digital Navy ที่เรามองเห็น" (0.7s) · line 2 "คือการทำงานที่ปลอดภัย เชื่อมโยงในที่เดียว" (1.9s) + "ราบรื่น ไร้รอยต่อ ใช้งานได้จริงเป็นรูปธรรม" (3.1s) · line 3 "เริ่มแล้ววันนี้ — ก้าวทีละขั้นด้วย" (4.8s) · wordmark "NAVE" "นาวี" (6.0s) · chip "NAV Ecosystem" (6.6s) · eyebrow "นำโดย" (8.0s) · credit "กรมการสื่อสารและเทคโนโลยีสารสนเทศ" + "ทหารเรือ" (8.2s)

narrativeRole: Answers the opening question with what the film showed — secure, connected in one place, smooth, seamless and genuinely useful work — begun today, step by step, with NAVE, led by the department.
keyMessage: The Digital Navy we see is secure, connected, smooth, seamless and genuinely useful work — begun today, step by step, with NAVE | นาวี.

Adapt: titlecard-reveal — one clean title block revealed phrase by phrase, then a still hold; the wordmark's arrival is the only other motion.
Scene 1 (0.0–1.9s): cream ground + faint concentric rings + the dot grid (atmosphere). Line 1 reveals as [Digital Navy][ที่เรามองเห็น] centred at y 160–241 (Chulabhorn Likit Text 700 56px, #111; "Digital Navy" in cobalt) at 0.7s (after the blur-crossfade and the rail's fade).
Scene 2 (1.9–4.8s): line 2's two authored lines reveal per phrase centred at y 262–326 / 326–390 (Chulabhorn Likit Text 500 44px, #3F3C35): [คือการทำงานที่][ปลอดภัย][ เชื่อมโยงในที่เดียว] then [ราบรื่น][ ไร้รอยต่อ][ ใช้งานได้จริงเป็นรูปธรรม] — adjacent spans, no added spaces; "ปลอดภัย", "เชื่อมโยง" and "ใช้งานได้จริง" in cobalt weight 700.
Scene 3 (4.8–8.0s): line 3 reveals as [เริ่มแล้ววันนี้ —][ก้าวทีละขั้นด้วย] centred at y 420–484 (Chulabhorn Likit Text 600 44px, #111) at 4.8s; the wordmark (component 9 at 0.6 scale) assembles centred on y≈580 (y 515–646) at 6.0s (the same build as frame 05, shortened: the rule draws, "NAVE" and "นาวี" rise in), the chip "NAV Ecosystem" under it (y 664–717) at 6.6s.
Scene 4 (8.0–14.0s): the eyebrow "นำโดย" (Chulabhorn Likit Text 500 28px, #6B675C, y 734–774) at 8.0s and the department credit (two authored lines, Chulabhorn Likit Text 500 32px, #5F5B50, y 776–868) fade in centred (8.2s). Hold still to the end (≥ 5 s; the film ends on this card with no fade-out).

Round-2 revisions: (1) Callback to frame 01: the same 6px cobalt underline self-draws under "Digital Navy" in line 1 at 1.2–1.6s. (2) Hierarchy: lines 2 and 3 at 40px (from 44); the wordmark at 0.7 scale (NAVE ~126px, นาวี ~105px) so it is the largest mark on the card; the eyebrow "นำโดย" sits on the same row as, and left of, the credit's first line ("นำโดย" 32px #5F5B50, credit 36px #3F3C35), saving a row; bottom ink ≤ y 870.

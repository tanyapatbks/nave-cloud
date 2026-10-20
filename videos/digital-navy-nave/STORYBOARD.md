---
format: 1920x1080
duration: 197s
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
- **Story spine.** Opens on the requester's question ("แบบไหน ที่เรียกว่า Digital Navy?"), names the challenge (every service; seamless and genuinely useful), names the RTN's data problem and its security / access concerns, then turns ("แต่! … คือโอกาส") to the move and its answer — NAVE | นาวี — shown in four steps (secure door: MFA; future-proof: PQC plan; one workspace: identity + policy; ask or act in one composer), and ends on an honest checkpoint: the five-stage roadmap with the pin between stage 1 and stage 2, walked stage by stage, before the close answers the opening question.
- **Three chapters**, shown by the persistent tracker: **1 โจทย์** (frames 02–03) · **2 NAVE** (frames 04–09) · **3 เส้นทาง** (frames 10–15). Frame 01 introduces the tracker in its last beat (all pills "upcoming") at the chrome's exact geometry; frame 16 is the close (the chrome and the roadmap rail leave with the blur-crossfade into it).
- **Persistent layers.** (a) `compositions/chrome.html` — tracker + English term chip, frames 02–15, above every transition; frames 02–15 draw nothing at y < 130. (b) `compositions/roadmap.html` — the roadmap rail (frame.md component 10), frames 11–15, above every transition; frame 10 builds the identical rail in place and hands it over at its end; frames 11–15 draw nothing in the rail band (y 130–290) and lay out their content in y 300–880. At each stage-frame boundary only the rail's focus halo moves (+0.25 s).
- **Palette** (frame.md): cobalt = NAVE / the person's identity + policy / the AI's reach / the current stage and the way forward; greys = the old way, the not-yet; green only for verified / approved badges; red only for the blocked password (06) and the broken classical lock (07). The check is the shared inline SVG everywhere. Atmosphere (rings, dot grid) only on frames 01 and 16.
- **Recurring objects (continuity with the RAG film).** The composer (component 5) asks the opening question in 01 and the two prompts in 09. The person `น.อ.aaaaa` (component 6) is the signed-in user in 06, 08 and 09. The dashed policy scope (component 4) is drawn around the person's workspace in 08 and around the answer in 09. The document tile (component 3) is the messy unit file in 03, the cited source in 09 and the cleaned data in 12 (wearing the RAG film's 4-dot governance badge). The NAVE wordmark (component 9) is built in 05 and returns in 16.
- **No narration.** No voice-over, no caption track. Each frame's `onscreen:` strings are its only words: render exactly, revealed at their cue times. Plain Thai first; English technical terms ride as mono chips or tiles. Never address the audience.
- **Reading budget (harness-enforced).** ≤ 17 chars/s hard ceiling, plan ~12; ≤ 35 base characters per line; ≤ 2 lines per block; every text block stays until its frame ends unless a Scene says otherwise; each frame's payoff holds ≥ 2.5 s fully legible; the final card holds ≥ 5 s.
- **Type floor (projection).** English chips/tiles ≥ 28px; Thai labels and sublines ≥ 32px wherever the layout allows, never below 28px; headlines 60px.
- **Motion grammar.** Smooth long-tail settles (`power3` default, `expo.out` for fast arrivals); no bounce / back / elastic. Entrances are `fromTo`. Reveal each piece on its cue across the shot, especially the back half; never front-load. Thai reveals per word/phrase; "typing" in the composer is per word with a caret. At most one camera move per frame; no slow back-half pans or pushes. During holds prefer stillness; at most one subtle jitter. Within-frame seams follow `cut-catalog.md` (velocity-matched).
- **Rhythm / stillness allocation.** Calm open (01); building pressure (02–03); one hard beat (04, short); a held reveal (05: the wordmark holds ≥ 3 s); demonstrations (06–09, the busiest: 09); a held checkpoint (10: the pin, held still ≥ 3 s); stage frames build then hold ≥ 2.5 s each; the close holds ~5 s to the last frame (`END_CARD=5.5` for `harness/qa-mp4.sh`).
- **Negative list.** No ships, anchors, waves, flags, uniforms, rank insignia, the RTN emblem, service emblems or people photos. No recreated web demo, no real product logos (ThaiD etc.), no domains or URLs, no cursors on a browser. No purple-blue "AI" gradients, bokeh or glows. No invented numbers, results, document contents or system names (illustrative values only, marked as examples where shown). No genuine-looking classification stamps. Both motion failure modes are banned: slideshow (dump then freeze) and screensaver (many things floating). No `Math.random`, no CSS transitions/keyframes, no `repeat`/`yoyo`.
- **Transitions.** Three types only: `crossfade` (chapter changes: into 02, 04, 10), `push-slide LEFT` (consecutive steps inside a chapter), `blur-crossfade` (into the close, 16).

## Frame 1 — ภาพอนาคตแบบไหน ที่เรียกว่า Digital Navy

- scene: A NAVE-style composer types the requester's question word by word; on send, the words lift into a headline and "Digital Navy?" lands in big cobalt display type
- voiceover:
- duration: 10s
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
Scene 2 (2.6–3.9s): `scale-swap-transition` — the composer card shrinks and fades (2.6–3.0s) while its typed line travels up and settles as a muted eyebrow (Chulabhorn Likit Text 500 40px, #5F5B50) centred at y≈300. The headline "แบบไหน... ที่เรียกว่า" enters per phrase centred at y≈390 (Chulabhorn Likit Text 700 64px, #111) at 3.0s.
Scene 3 (3.9–8.4s): "Digital Navy?" lands centred below it (Chulabhorn Likit Display 500, ~170px, cobalt; the "?" in near-black) with a fast `expo.out` rise + fade (3.9–4.6s); a 6px cobalt underline self-draws under "Digital Navy" (4.8–5.4s, `svg-path-draw`). Then stillness: the only extra motion is a one-time faint hairline network joining five of the dot-grid dots (5.6–6.8s, ≤ 15% opacity), then still.
Scene 4 (8.4–10.0s): the three tracker pills fade in at the chrome's exact geometry (top band, x 96, y 56, all "upcoming") at 8.4 / 8.5 / 8.6s (0.25s each); hold to the end (the chrome layer takes over at 10.0s).

## Frame 2 — โจทย์ที่ท้าทาย ไม่เพียงแต่ ทร.

- scene: Three equal service cards (ทร. ทบ. ทอ.); then two puzzle pieces — modern technology and the Navy's own way of working — slide together until their seam disappears; three criteria light under the join
- voiceover:
- duration: 11s
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
- onscreen: headline "โจทย์ที่ท้าทายอย่างมาก" (0.3s) · cards "ทร." (1.2s) "ทบ." (1.7s) "ทอ." (2.0s) · caption "ทบ. ทอ. ก็เช่นกัน" (2.4s) · question "นำเทคโนโลยีสมัยใหม่มาใช้" (4.0s) + "ให้สอดประสานกับความเป็น ทร. อย่างไร" (4.6s) · criteria "ราบรื่น" (7.2s) "ไร้รอยต่อ" (7.6s) "ใช้ได้จริง เป็นรูปธรรม" (8.0s)

narrativeRole: States the challenge as shared by every service, and defines success: modern technology joined to the Navy's way of working smoothly, without seams, with real results.
keyMessage: The hard part is bringing modern technology in so it fits the Navy smoothly, seamlessly and usefully — a challenge for ทร., ทบ. and ทอ. alike.

Scene 1 (0.0–1.2s): headline per-phrase reveal (component 2).
Scene 2 (1.2–3.6s): left column (x 96–760, y 320–860): three equal tinted cards stacked vertically (each ~664×150, radius 14px), each holding one large abbreviation (Chulabhorn Likit Text 700 72px, left-aligned, no emblem). "ทร." arrives first (1.2s) with a 2.5px cobalt outline; "ทบ." (1.7s) and "ทอ." (2.0s) follow in neutral style (#3F3C35 text, standard border) — `grid-card-assemble` cascade. The caption "ทบ. ทอ. ก็เช่นกัน" reveals per phrase in #5F5B50 36px to the right of the lower two cards, joined to them by a thin bracket (2.4s).
Scene 3 (3.6–7.0s): right column (x 860–1824): two large interlocking puzzle pieces (SVG, ~360×300 each) enter from opposite sides at y≈420–720: left piece cobalt-tinted (accent-medium fill, cobalt 2px stroke) carries a small spark glyph; right piece ink-tinted (#ECE8DA fill, #3F3C35 2px stroke) carries a small document-tile glyph. The question's two lines reveal above them per phrase (4.0s / 4.6s; Chulabhorn Likit Text 600 40px, #111; "สอดประสาน" in cobalt weight). 5.4–6.4s: the pieces slide together (power3.inOut) and lock; at contact the seam line between them fades out and both fills ease to one shared accent-light fill (the join becomes seamless). The left "ทร." card pulses once (6.4s).
Scene 4 (7.0–11.0s): under the joined piece, three criteria chips land left→right on their cues (7.2 / 7.6 / 8.0s), each a split-highlight pill with a small cobalt target-ring glyph (a goal, not a check). Hold still from 8.6s.

## Frame 3 — ปัญหาสำคัญ: การจัดการข้อมูลภายใน

- scene: A row of units, each with an untidy stack of files; four questions pop above them; two concerns settle under them
- voiceover:
- duration: 12.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/03-data.html
- type: pain_point
- persuasion: Question cascade (the questions every unit already asks) + concretization (messy files per unit)
- beat: Recognition + concern
- blueprint: grid-card-assemble (Adapt)
- term: Data Management
- focal: the four questions over the unit columns
- roles: headline = supporting · unit columns with document tiles = foreground subject (Scene 2) · question chips = foreground subject (Scene 3) · concern band = foreground subject (Scene 4)
- onscreen: headline "นอกจากปรับองค์กรให้ทัน AI แล้ว" (0.3s) + "ปัญหาสำคัญคือการจัดการข้อมูลภายใน ทร." (1.1s) · questions "เริ่มจากตรงไหน?" (3.2s) "ทำอะไร?" (3.8s) "จัดการไฟล์อย่างไร?" (4.4s) "จัดเก็บอย่างไร?" (5.0s) · concern label "ข้อกังวลที่มากกว่าปกติ" (7.4s) · chips "ความปลอดภัย" (7.9s) "สิทธิการเข้าถึงข้อมูล" (8.4s)

narrativeRole: Names the RTN's core problem: beyond adapting to AI, each unit does not yet know how to start organising and storing its data — and security and access rights matter more than usual.
keyMessage: Every unit faces the same data questions — where to start, what to do, how to manage and store files — with security and access rights as heightened concerns.

Adapt: keep grid-card-assemble's staggered self-assembly (the unit columns), then extend it with tethered question chips (supporting) and a concern band.
Scene 1 (0.0–2.0s): headline per phrase, two authored lines (component 2); "ข้อมูล" in line 2 in cobalt weight.
Scene 2 (2.0–3.2s): five unit columns assemble left→right across x 120–1800 at y≈470–760 (`grid-card-assemble`, ~0.12s stagger): each column = a small neutral unit glyph on top (rounded square with three short bars — an org mark, no emblem, no name) above an untidy stack of 3–4 document tiles (component 3 at ~0.5 scale; deterministic seeded offsets and ±6° rotations).
Scene 3 (3.2–6.4s): the four question chips pop above columns 1, 2, 4 and 5 on their cues (3.2 / 3.8 / 4.4 / 5.0s; card-tinted speech chips, Chulabhorn Likit Text 600 36px, #111, each with a 2px tether to its column; `spring-pop-entrance` smooth register). As each lands, its column's tiles jostle once (one small deterministic shift, settle). Column 3 has no chip — its tiles are the messiest (the question is everywhere).
Scene 4 (6.4–12.5s): a concern band fades in under the columns at y≈800–872: the label "ข้อกังวลที่มากกว่าปกติ" (Chulabhorn Likit Text 600 34px, #3F3C35) then two chips with ink icons — a padlock for "ความปลอดภัย" (7.9s) and a key for "สิทธิการเข้าถึงข้อมูล" (8.4s) — ink #3F3C35 on #ECE8DA with 2px #3F3C35 border (not red: concern, not denial). Both chips pulse once together (9.2s). Hold still from 9.6s.

## Frame 4 — แต่! ไม่ใช่ปัญหา แต่คือโอกาส

- scene: "แต่!" slams in; "ไม่ใช่ปัญหา" swaps in place to "แต่คือโอกาส" as faint question marks collapse into one cobalt spark
- voiceover:
- duration: 5.5s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-turn.html
- type: product_intro
- persuasion: Reframe (problem → opportunity) by in-place token swap
- beat: Surprise + resolve
- blueprint: kinetic-type-beats (Adapt)
- term: Opportunity
- focal: the swapping line
- roles: "แต่!" = foreground subject (Scene 1) · statement line = foreground subject · question marks + spark = supporting
- onscreen: "แต่!" (0.3s) · "สิ่งที่เห็น ไม่ใช่ปัญหา" (1.1s) · "แต่คือโอกาส" (2.3s)

narrativeRole: The turn of the story — the same problem is the opportunity for the move.
keyMessage: The data problem is not a problem but an opportunity.

Adapt: keep kinetic-type-beats' signature (the motion IS the words changing: an in-place token swap landing a payoff) with one hard beat before it.
Scene 1 (0.0–1.1s): plain cream. "แต่!" lands centred at y≈380 in Chulabhorn Likit Display 500 ~200px, near-black, with a fast `expo.out` scale 1.12→1 + fade (0.3–0.7s; no bounce). Behind it, ~10 faint "?" marks (Chulabhorn Likit Text 700, 60–90px, 12–18% opacity, seeded positions around the frame) — a callback to frame 03's questions.
Scene 2 (1.1–2.3s): "แต่!" eases up and shrinks to ~110px at y≈250 (1.1–1.5s). The line "สิ่งที่เห็น ไม่ใช่ปัญหา" reveals per phrase centred at y≈470 (Chulabhorn Likit Text 700 64px; "ไม่ใช่ปัญหา" #3F3C35).
Scene 3 (2.3–5.5s): in-place swap (`discrete-text-sequence`, velocity-matched per `cut-catalog.md`): the phrase "ไม่ใช่ปัญหา" drops out downward as "แต่คือโอกาส" rises into the same slot (2.3–2.7s); "สิ่งที่เห็น" stays. "โอกาส" is cobalt, a 6px cobalt underline self-draws under it (2.8–3.3s). At the same time the faint "?" marks converge to the centre and collapse into one 40px cobalt spark (component 7) that settles just after "โอกาส" (2.5–3.3s). Hold still from 3.4s.

## Frame 5 — Move นี้ของ ทร. สู่ NAVE | นาวี

- scene: The lead department is named; scattered pieces (files, people, units, apps) gather and assemble the NAVE | นาวี wordmark
- voiceover:
- duration: 11.5s
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
keyMessage: Led by the Naval Communications and IT Department, the RTN moves to a Digital Navy with NAV Ecosystem — NAVE | นาวี — built around the needs of command in many dimensions.

Adapt: logo-assemble-lockup, "built from parts" variant — keep the signature (the mark comes to exist from parts and resolves into a centred lockup), but the parts are the film's own objects.
Scene 1 (0.0–3.4s): top-left at x 96: the eyebrow "Move นี้ของ ทร. นำโดย" (Chulabhorn Likit Text 500 40px #5F5B50; "Move" in cobalt weight) at y≈148, then the department name in a split-highlight block (4px cobalt left rule, accent-light fill, radius 12px) below it, two authored lines (Chulabhorn Likit Text 700 48px, #111), revealed per phrase (0.9s).
Scene 2 (3.4–7.4s): the lead line reveals centred at y≈420 (Chulabhorn Likit Text 600 44px, #111; "Digital Navy" cobalt) at 3.4s. From 3.6s about 24 small pieces (mini document tiles, person silhouettes, unit glyphs, app squares, spark dots; seeded positions near the frame edges, 40–60% opacity) converge toward the centre on curved paths (`center-outward-expansion` reversed, staggered 0.03s, power3.inOut) and resolve into the wordmark (component 9, centred at y≈590): "NAVE" settles at 4.6s, the cobalt rule draws, "นาวี" at 5.0s; pieces fade as they merge. The chip "NAV Ecosystem" lands under the wordmark at 5.6s.
Scene 3 (7.4–11.5s): the subline reveals per phrase under the chip, two authored lines centred at y≈790–860 (Chulabhorn Likit Text 500 36px, #3F3C35). Hold still from 8.4s (the wordmark holds ≥ 3 s).

## Frame 6 — ประตูแรก: MFA

- scene: The signed-in person passes a gate with two factors and is verified; a leaked password alone stays locked out
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/06-mfa.html
- type: feature_showcase
- persuasion: Demonstration (two factors open the gate) + counterexample (one leaked factor does not)
- beat: Confidence + reassurance
- blueprint: compose
- term: MFA · Multi-Factor Authentication
- focal: the gate's two factor slots
- roles: headline = supporting · gate = foreground subject · upper lane (person + two factors) = foreground subject (Scene 2) · lower lane (leaked password) = foreground subject (Scene 3) · result chips = supporting
- onscreen: headline "เริ่มจากยกระดับความปลอดภัย" + "ของระบบภายใน ทร." (0.3s) · person "น.อ.aaaaa" (1.4s) · factor "รหัสผ่าน" (2.0s) · factor "รหัสยืนยันบนอุปกรณ์" (2.9s) · verified "ยืนยันตัวตนแล้ว" (4.0s) · attempt "รหัสผ่านที่รั่วไหล อย่างเดียว" (6.0s) · denied "ก็ยังเข้าระบบไม่ได้" (7.2s)

narrativeRole: Shows the first concrete move: stronger security on internal systems through more than one proof of identity.
keyMessage: With MFA, a password alone is not enough — even a leaked password cannot get in.

Scene 1 (0.0–1.4s): headline per phrase, two authored lines (component 2). The gate draws in at centre-right (x≈1180–1420, y≈330–860): a tall rounded rectangle (radius 24px, card-tinted) split by a vertical seam (two door leaves), with two empty factor slots on its left face at the two lane heights (upper lane y≈470, lower lane y≈720), each slot a 64px rounded square with a dashed 2px cobalt-35% outline. A small padlock glyph (cobalt) sits on the seam.
Scene 2 (1.4–5.6s): upper lane, from the left (x 96–1150): the identity badge (component 6, signed-in ring) with "น.อ.aaaaa" (1.4s). Factor 1: a key glyph + "รหัสผ่าน" chip travels right along the lane and docks into the upper slot (2.0–2.7s; the slot turns solid #0B6A45 with the white shared check). Factor 2: a phone glyph showing six dots + "รหัสยืนยันบนอุปกรณ์" chip travels and docks (2.9–3.6s; second check). The gate's leaves part (3.7–4.1s, power3.inOut) and the success badge "ยืนยันตัวตนแล้ว" (success-solid, white text + check) appears right of the gate at the upper lane (4.0s).
Scene 3 (5.6–11.0s): lower lane: a ghost token (dashed #8A867A outline, no person) with a key glyph and the line "รหัสผ่านที่รั่วไหล อย่างเดียว" (#5F5B50, 6.0s) slides to the gate (6.3–6.9s); the gate leaves close again for this lane (the upper lane stays verified); its first slot accepts (outline only), its second slot stays empty and its outline turns red (#9B2D27) with a small × (7.0s); the deny chip "ก็ยังเข้าระบบไม่ได้" (#b42318 on #fde7e3, × icon) lands right of the gate at the lower lane (7.2s). The deny chip and the empty slot pulse once together (7.8s). Hold still from 8.2s.

## Frame 7 — และวางแผนรองรับ PQC

- scene: A timeline from today to the quantum future: encrypted data copied today is broken later — unless it is protected by post-quantum cryptography
- voiceover:
- duration: 12s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/07-pqc.html
- type: feature_showcase
- persuasion: Before/after on one timeline (classical lock vs post-quantum lock) + causal chain (copy now → decrypt later)
- beat: Foresight + unease → reassurance
- blueprint: compose
- term: PQC · Post-Quantum Cryptography
- focal: the stored copy's lock at the "future" end
- roles: headline = supporting · timeline = background structure · data packet + copy = foreground subject · quantum glyph = supporting · PQC lock + chips = foreground subject (Scene 4)
- onscreen: headline "และวางแผนรองรับ PQC ที่กำลังจะมาถึง" (0.3s) · timeline "วันนี้" (1.2s) "อนาคต: ยุคคอมพิวเตอร์ควอนตัม" (1.6s) · risk "ข้อมูลเข้ารหัสวันนี้ อาจถูกเก็บไว้" (2.6s) + "แล้วถอดรหัสได้ในอนาคต" (4.4s) · answer "การเข้ารหัสแบบใหม่ ทนต่อควอนตัม" (6.6s) · chips "ML-KEM" "ML-DSA" (7.8s) · note "มาตรฐาน NIST" (8.2s)

narrativeRole: Explains why PQC must be planned now (data copied today can be decrypted once quantum computers arrive) and that NAVE plans to support it.
keyMessage: Encrypted data stolen today could be read in the quantum future; post-quantum cryptography (e.g. NIST's ML-KEM, ML-DSA) closes that gap, so NAVE plans for it now.

Scene 1 (0.0–2.6s): headline per phrase (component 2), "PQC" in cobalt weight. A full-width timeline draws left→right at y≈560 (x 160–1760, 3px #3F3C35, `svg-path-draw`, 0.8–1.6s) with two end nodes and labels under them: "วันนี้" (left, 1.2s) and "อนาคต: ยุคคอมพิวเตอร์ควอนตัม" (right, 1.6s; Chulabhorn Likit Text 600 34px).
Scene 2 (2.6–4.4s): at "วันนี้", a data packet (component 3 tile at ~0.7 scale) wearing a classical padlock (ink) sits above the line. A dashed duplicate peels off it (2.8s) and slides along the timeline (3.0–4.0s, power2.inOut) into a dashed "stored" box near the future end. The risk line reveals above the timeline, centred, per phrase (2.6s; Chulabhorn Likit Text 600 40px #111).
Scene 3 (4.4–6.4s): at the future end a quantum glyph (a cobalt circle with three thin elliptical orbits, 72px, static shape) appears and emits one ring; the stored copy's padlock cracks — a red #9B2D27 crack line self-draws across it and the shackle opens (4.6–5.2s). The risk line's second phrase reveals (4.4s).
Scene 4 (6.4–12.0s): at "วันนี้" the packet's padlock is replaced in place by a post-quantum lock (the same padlock outline filled with a 3×3 lattice of cobalt dots; `scale-swap-transition`, 6.4–6.8s) and the answer line "การเข้ารหัสแบบใหม่ ทนต่อควอนตัม" reveals below the timeline (6.6s; cobalt weight on "ทนต่อควอนตัม"). A new dashed copy travels to the store again (6.9–7.6s); the quantum glyph emits a ring (7.7s) and the lattice lock holds — a cobalt ring + shared check settle on it (7.9s). Chips "ML-KEM" "ML-DSA" (7.8s) and the muted note "มาตรฐาน NIST" (8.2s) land under the answer line. Hold still from 8.6s.

## Frame 8 — NAVE คือ AI-Workspace ของ ทร.

- scene: One person's workspace at the centre, wrapped in their policy scope; units, internal apps, the archive and the AI assistant connect to it through that scope
- voiceover:
- duration: 12s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/08-workspace.html
- type: feature_showcase
- persuasion: Frame-then-fill (the person and their policy first, then what connects) + hub metaphor
- beat: Clarity + "aha"
- blueprint: constellation-hub (Adapt)
- term: AI-Workspace
- focal: the workspace hub with the identity badge
- roles: headline + subline = supporting · hub card (identity badge + Identity/Policy chips) = foreground subject · policy scope ring = foreground subject (Scene 2) · four satellites + connectors = foreground subject (Scene 3) · closing line = supporting
- onscreen: headline "NAVE คือ AI-Workspace ของ ทร." (0.3s) · subline "ดำเนินการเบ็ดเสร็จ ในที่เดียว" (1.3s) · hub "น.อ.aaaaa" (2.4s) · chips "Identity" (3.0s) "Policy" (3.4s) · scope label "ตัวตนและนโยบาย ของแต่ละบุคคล" (4.0s) · satellites "หน่วยขึ้นตรง" (5.6s) "แอปภายใน" (6.0s) "คลังเอกสาร" (6.4s) "ผู้ช่วย AI" (6.8s) · closing "เชื่อมการทำงานระหว่างหน่วย" (8.2s)

narrativeRole: Defines NAVE as the RTN's AI workspace: one place where each person works with their own identity and policy, connected to units, internal apps, documents and AI.
keyMessage: NAVE is one workspace where everything a person does runs through their own identity and policy, and links units and internal apps together.

Adapt: constellation-hub — keep the signature (iconned nodes spring into a ring around a centre, then the eye resolves on the core) but with no camera push; the core is the person's workspace and every connector passes through the policy scope.
Scene 1 (0.0–2.4s): headline (component 2) and, under it, the subline in #5F5B50 36px (1.3s).
Scene 2 (2.4–5.6s): centre (x≈760–1160, y≈470–690): the hub card (card-tinted, radius 14px) with the identity badge (component 6, signed-in ring) and "น.อ.aaaaa" (2.4s); the chips "Identity" (3.0s) and "Policy" (3.4s) land inside it under the name. 3.6–4.4s: the policy scope (component 4) self-draws as a rounded rectangle around the hub (x≈700–1220, y≈420–740) with its pill label "ตัวตนและนโยบาย ของแต่ละบุคคล" on the top edge (4.0s).
Scene 3 (5.6–8.2s): four satellites spring into place around the hub on their cues (smooth `spring-pop-entrance`, no overshoot): top-left (x≈150–520, y≈330) "หน่วยขึ้นตรง" (unit glyph), top-right (x≈1400–1770) "แอปภายใน" (app-grid glyph), bottom-left (y≈760) "คลังเอกสาร" (document-tile glyph), bottom-right "ผู้ช่วย AI" (spark in an AI node, component 7). Each is a tinted card with its glyph + Thai label (Chulabhorn Likit Text 600 36px). As each lands a 2px cobalt connector self-draws from it to the scope edge and on into the hub (`svg-path-draw`), crossing the dashed line through a small cobalt gate dot.
Scene 4 (8.2–12.0s): one cobalt pulse travels all four connectors at once into the hub (8.2–8.8s) as the closing line reveals centred at y≈860 (Chulabhorn Likit Text 600 36px, #111; "เชื่อม" in cobalt weight). Hold still from 9.0s.

## Frame 9 — ถาม หรือ สั่งงาน ในช่องเดียว

- scene: In one composer, a question is answered with a citation inside the person's scope; then a command drafts a memo, waits for a human approval and sends it to the units
- voiceover:
- duration: 18s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/09-prompts.html
- type: feature_showcase
- persuasion: Demonstration (the mechanism running twice) + callback (the RAG film's question, scope and citation)
- beat: Delight + confidence
- blueprint: prompt-type-submit-generate (Adapt)
- term: RAG + Tool Calling
- focal: the composer, then the answer card (Part A) and the approval card (Part B)
- roles: composer = foreground subject (fixed anchor) · status pills = supporting · answer card with citation + scope = foreground subject (Part A) · checklist + approval card + unit tiles = foreground subject (Part B) · note = supporting
- onscreen: headline "ถาม หรือ สั่งงาน — ในที่เดียว" (0.3s) · prompt 1 "สรุปแนวทางปฏิบัติปี 69 ของ ศซบ." (1.0s, per word) · status "ตรวจสิทธิ์" (2.9s) "ค้นในขอบเขต" (3.3s) · answer "คำตอบ" (4.0s) · citation "อ้างอิง: นโยบาย69 · v02" (5.0s) · scope "ตามสิทธิ์ของ น.อ.aaaaa" (5.6s) · prompt 2 "ร่างหนังสือแจ้ง นขต. พร้อมนัดประชุม" (8.6s, per word) · steps "ร่างหนังสือ" (10.6s) "ตรวจตารางนัดหมาย" (11.2s) · approval "รออนุมัติ" (11.9s) → "อนุมัติแล้ว" (13.1s) · send "ส่งถึง นขต. ที่เกี่ยวข้อง" (13.8s) · note "คนอนุมัติ ก่อนส่งจริง" (14.8s)

narrativeRole: Shows NAVE in use: asking returns an answer with its source, limited to what this person may see; commanding runs work across apps and units, with a person approving before anything is sent.
keyMessage: In NAVE one composer both answers questions (with citations, within the person's permissions) and carries out tasks across units and apps — with human approval before anything goes out.

Adapt: prompt-type-submit-generate, full loop + its restart signature — keep the composer fixed (it never moves), run one complete ask → answer loop, then a second command types into the same composer and its result surface replaces the first.
Scene 1 (0.0–2.6s): headline (component 2). The composer (component 5, 1200px) fades up at x 96, y≈300. From 1.0s prompt 1 appears word by word with the caret (สรุป · แนวทาง · ปฏิบัติ · ปี · 69 · ของ · ศซบ.), ~0.18s apart; the send button presses at 2.5s.
Scene 2 (2.6–8.0s) — Part A: two status pills appear to the right of the composer's top edge or just under it at y≈440 (a small spinner arc that resolves into the shared check): "ตรวจสิทธิ์" (2.9s → ✓ 3.2s) then "ค้นในขอบเขต" (3.3s → ✓ 3.7s). The answer card (card-tinted, x 96–1180, y≈500–860) opens at 4.0s with the spark + "คำตอบ" (Chulabhorn Likit Text 700 36px); four grey text bars stream in left→right (4.1–4.8s; illustrative, no readable content). The citation chip "อ้างอิง: นโยบาย69 · v02" (component 11) lands at the card's bottom with the RAG film's example-document tile (cobalt outline, ~0.5 scale) at 5.0s. 5.4–6.0s: the policy scope (component 4) self-draws around the answer card with the pill "ตามสิทธิ์ของ น.อ.aaaaa" on its top edge (5.6s). Right column (x 1240–1824): a small identity badge (component 6, 0.7 scale) sits inside the scope's right edge. Hold 6.2–8.0s.
Scene 3 (8.0–8.6s) — seam: the Part-A surface (status, answer, scope) slides up 40px and fades to 0 in 0.4s (velocity-matched with the incoming Part B, `cut-catalog.md`); the composer clears its text and the caret returns.
Scene 4 (8.6–14.6s) — Part B: prompt 2 types word by word (ร่าง · หนังสือ · แจ้ง · นขต. · พร้อม · นัด · ประชุม), send presses at 10.2s. Left (x 96–900, y≈450–860): a checklist card whose rows arrive and check off: "ร่างหนังสือ" (10.6s, ✓ 11.0s, a small document glyph), "ตรวจตารางนัดหมาย" (11.2s, ✓ 11.6s, a calendar glyph). Right (x 980–1824): an approval card with a neutral approver silhouette and the pill "รออนุมัติ" (11.9s; #ECE8DA fill, a small clock glyph); at 12.8s its approve button presses (`press-release-spring`, smooth) and the pill flips to the success badge "อนุมัติแล้ว" (13.1s). 13.6–14.2s: three small unit tiles (unit glyph + mini document) at the right edge receive the memo along three short cobalt connectors from the approval card; the label "ส่งถึง นขต. ที่เกี่ยวข้อง" appears under them (13.8s).
Scene 5 (14.6–18.0s): the note "คนอนุมัติ ก่อนส่งจริง" reveals under the approval card with a small person + check glyph (14.8s). Hold still from 15.4s.

## Frame 10 — 5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง

- scene: The five-stage roadmap draws itself as a rail of five stations; a pin drops between stage 1 and stage 2 — we are here
- voiceover:
- duration: 12s
- transition_in: crossfade
- status: outline
- src: compositions/frames/10-roadmap.html
- type: feature_showcase
- persuasion: Frame-then-fill (the whole road, then where we stand) + signposting
- beat: Orientation + honesty
- blueprint: spatial-pan-stations (Adapt)
- term: Production-Ready NAVE
- focal: the pin between stations 1 and 2
- roles: rail (track + five nodes + labels) = foreground subject (Scene 2) · gloss cards = supporting · headline = supporting · pin + travelled segment = foreground subject (Scene 3)
- onscreen: headline "5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง" (0.3s) · stations "Demo" (1.6s) "Foundation" (2.1s) "Core Production" (2.6s) "Specialized" (3.1s) "Elite" (3.6s) · glosses "ระบบสาธิต" (1.7s) "วางรากฐาน" (2.2s) "ระบบหลัก" (2.7s) "ใช้งานจริง ระดับองค์กร" (3.2s) "ผลลัพธ์ที่เชื่อถือได้" (3.7s) · pin "เราอยู่ตรงนี้" (5.4s)

narrativeRole: Sets the honest checkpoint: the whole path to a production-ready NAVE in five stages, and that today the work stands between stage 1 and stage 2.
keyMessage: Building a production-ready NAVE takes five stages; today NAVE is between stage 1 (demo) and stage 2 (foundation).

Adapt: spatial-pan-stations — keep the signature (pre-placed labelled stations on one canvas, visited in turn, landing held on "us") but without a camera traverse: the rail fits the frame and the visit is each station lighting in order; the landing is the pin.
Scene 1 (0.0–1.4s): this frame has no `h2` at the top; the rail band (y 130–290) is reserved for the rail. The headline "5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง" reveals per phrase at x 96, y≈330 (Chulabhorn Likit Text 700 60px, #111; "NAVE" in cobalt weight).
Scene 2 (1.4–4.4s): the rail (frame.md component 10, exact geometry): the track draws left→right (1.4–3.8s, `svg-path-draw`, initially all dashed grey) and each node pops in as the line reaches it (1.6 / 2.1 / 2.6 / 3.1 / 3.6s) with its mono label under it; under each label a gloss card hangs from the node by a hairline (cards ~300px wide, centred on the node, y≈470–560, card-tinted, Thai Chulabhorn Likit Text 600 34px, #3F3C35; "ใช้งานจริง ระดับองค์กร" as two authored lines). Node 1 fills cobalt (reached) as it appears.
Scene 3 (4.4–7.0s): the pin (component 10) drops onto the track at x = 360 (4.8–5.3s, `expo.out`, settles, no bounce); its label "เราอยู่ตรงนี้" appears under it at 5.4s; the travelled segment x 160→360 fills solid cobalt (5.4–6.0s). The gloss cards of stages 1 and 2 stay full; cards 3–5 ease to 55% (their text stays ≥ 4.5:1). A soft accent-light band (radius 28px) appears behind stations 1–2 and the pin (6.0–6.4s).
Scene 4 (7.0–12.0s): hold still (the checkpoint read, ≥ 3 s). At 11.4–12.0s the headline and the gloss cards stay; the rail stays exactly in place (the persistent `roadmap.html` layer takes over at 12.0s with identical pixels).

## Frame 11 — ขั้นที่ 1: Demo Only

- scene: Stage 1 as it is: what a demo setup has, and what it does not have yet
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/11-stage1.html
- type: feature_showcase
- persuasion: Inventory contrast (what exists vs what is missing) + honesty
- beat: Recognition + candour
- blueprint: grid-card-assemble (Adapt)
- term: Stage 1 / 5
- focal: the "ยังไม่มี" (missing) tiles
- roles: stage header = supporting · "have" tiles = supporting · missing tiles = foreground subject · bridge arrow = supporting
- onscreen: title "Demo Only" (0.3s) · purpose "สำหรับ AI ที่ยังไม่พร้อมใช้งานจริง" (0.8s) · have "Local Only" (2.0s) "Hardcoded Prompts" (2.4s) "Manual Testing" (2.8s) · label "ยังไม่มี" (4.2s) · missing "Security" (4.6s) "Monitoring" (5.0s) "Feedback Loop" (5.4s) "Evaluation" (5.8s) "Deployment Pipeline" (6.2s)

narrativeRole: Describes stage 1 frankly — a local demo with hard-coded prompts and manual testing, without security, monitoring, feedback, evaluation or a deployment pipeline — the stage NAVE is now leaving.
keyMessage: Stage 1 is a demo: it runs locally with hard-coded prompts and manual tests, and still lacks security, monitoring, feedback, evaluation and a deployment pipeline.

Adapt: grid-card-assemble — keep the staggered self-assembly into a list and hold; the list is split into a solid "have" group and a dashed "missing" group.
Scene 1 (0.0–1.8s): the rail is held by the persistent layer above (focus halo moves to node 1 at +0.25s). Stage header (component 12) at x 96, y≈300: step-circle "1", title "Demo Only", purpose line (0.8s).
Scene 2 (1.8–4.0s): left group (x 96–800, y≈480–720): three item tiles (component 13) stack vertically on their cues with icons (a laptop for Local Only, a pinned note for Hardcoded Prompts, a hand-check for Manual Testing).
Scene 3 (4.0–7.4s): right group (x 900–1824): the label "ยังไม่มี" (Chulabhorn Likit Text 700 36px #3F3C35) at y≈450, then five missing tiles (component 13 missing variant) assemble in two columns on their cues (4.6–6.2s).
Scene 4 (7.4–11.0s): a cobalt arrow self-draws from the right group's edge toward the right frame edge at y≈820 (pointing on to stage 2; no text). Hold still from 8.0s.

## Frame 12 — ขั้นที่ 2: Foundation + Builder NAVE + Practical

- scene: Stage 2 in two halves: data foundations (organise the files; documents are the units' operations; clean the data), then the builder's decisions (where to store, what the web looks like, what outputs must achieve, RAG or CAG, and the retrieval stack)
- voiceover:
- duration: 18s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/12-stage2.html
- type: feature_showcase
- persuasion: Frame-then-fill + question→answer pairing (each builder decision as a plain question) + callback (the RAG film's tiles and badge)
- beat: Focus + momentum
- blueprint: compose
- term: Stage 2 / 5
- focal: "Data Foundations · จัดระเบียบไฟล์" (Part A), then the question rows (Part B)
- roles: stage header = supporting · data-foundations highlight = foreground subject · document flow (messy → clean) = foreground subject (Part A) · question rows = foreground subject (Part B) · retrieval chips = supporting
- onscreen: title "Foundation + Builder NAVE + Practical" (0.3s) · purpose "เข้าใจแกนหลัก · พัฒนาอย่างแข็งแรง" (0.8s) · highlight "Data Foundations" (2.0s) "จัดระเบียบไฟล์" (2.4s) · flow "Documents" (3.4s) "การดำเนินงานของหน่วยขึ้นตรง" (3.8s) → "Data Cleaning" (5.4s) · rows "Databases" "เก็บข้อมูลที่ไหน?" (8.6s) "Web UI" "หน้าเว็บเป็นยังไง?" (9.6s) "Structured Outputs" "ต้องการประสิทธิผลแบบไหน?" (10.6s) "RAG or CAG Pipelines" "trade-offs · qualities" (11.8s) · chips "Vector DB" "Embeddings" "Retrieval" "Chunking" (13.2s)

narrativeRole: The next step for NAVE: lay data foundations (organise the units' documents and clean them) and settle the builder's core decisions and retrieval stack.
keyMessage: Stage 2 means organising and cleaning each unit's documents, then deciding where data lives, what the web looks like, what outputs must achieve, RAG or CAG, and the retrieval stack.

Scene 1 (0.0–1.8s): rail focus moves to node 2 (+0.25s, persistent layer). Stage header (component 12): step-circle "2", title "Foundation + Builder NAVE + Practical" (Chulabhorn Likit Text 700 48px if 52px overflows), purpose line (0.8s).
Scene 2 (1.8–7.6s) — Part A, left 56% (x 96–1080, y≈470–880): a split-highlight block (4px cobalt left rule, accent-light fill, radius 12px; the requester boxed this in red — here it is the cobalt emphasis) holding "Data Foundations" (mono chip) + "จัดระเบียบไฟล์" (Chulabhorn Likit Text 700 40px, cobalt) (2.0 / 2.4s). Below it a left→right flow: a messy stack of four document tiles (component 3 at ~0.5 scale, seeded rotations) labelled "Documents" (mono) over "การดำเนินงานของหน่วยขึ้นตรง" (Chulabhorn Likit Text 500 32px, #3F3C35) (3.4 / 3.8s) → a cobalt arrow self-draws (4.8–5.3s) → "Data Cleaning" (5.4s): the same four tiles straighten into an aligned row (5.5–6.3s, power3.inOut) and each receives the RAG film's 4-dot governance badge (cobalt dots, 0.08s stagger, 6.4–6.8s).
Scene 3 (7.6–8.4s) — seam: Part A eases to 70% opacity (text stays ≥ 4.5:1) while a hairline divider draws at x≈1130.
Scene 4 (8.4–14.6s) — Part B, right 40% (x 1170–1824, y≈450–880): four question rows build on their cues, each = an English mono chip (component 11) above a Thai question (Chulabhorn Likit Text 600 34px #111) — Databases / "เก็บข้อมูลที่ไหน?" (8.6s), Web UI / "หน้าเว็บเป็นยังไง?" (9.6s), Structured Outputs / "ต้องการประสิทธิผลแบบไหน?" (10.6s), RAG or CAG Pipelines / "trade-offs · qualities" (11.8s; this subline in mono 28px #5F5B50). Then a row of four small item tiles (component 13, compact) "Vector DB" "Embeddings" "Retrieval" "Chunking" at the bottom of Part B (13.2s, 0.15s stagger).
Scene 5 (14.6–18.0s): hold still (both halves readable).

## Frame 13 — ขั้นที่ 3: Core Production System

- scene: Stage 3: ten building blocks of a robust AI service assemble into a grid and light once in sequence as one system
- voiceover:
- duration: 11.5s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/13-stage3.html
- type: feature_showcase
- persuasion: Enumeration as a system (parts → one working whole)
- beat: Momentum + mastery
- blueprint: grid-card-assemble (Reproduce)
- term: Stage 3 / 5
- focal: the 5×2 tile grid
- roles: stage header = supporting · ten item tiles = foreground subject · system pulse = supporting
- onscreen: title "Core Production System" (0.3s) · purpose "สร้างแอปและบริการ AI ที่แข็งแรง" (0.8s) · tiles "Session Memory" (2.0s) "Queues & Retries" (2.4s) "Model Serving" (2.8s) "Workflow Engine" (3.2s) "Prompt Management" (3.6s) "Caching" (4.0s) "API Gateways" (4.4s) "Tool Calling" (4.8s) "CI/CD" (5.2s) "Background Jobs" (5.6s)

narrativeRole: Lists what turns a working demo into a robust AI application and service.
keyMessage: Stage 3 adds the production backbone: memory, queues and retries, model serving, workflows, prompt management, caching, gateways, tool calling, CI/CD and background jobs.

Scene 1 (0.0–1.8s): rail focus to node 3 (+0.25s). Stage header (component 12): step-circle "3", title, purpose (0.8s).
Scene 2 (1.8–6.2s): a 5×2 grid of item tiles (component 13; each ~330×64, gaps 18px; grid x 96–1824, y≈480–620) assembles in reading order on the cues (`grid-card-assemble`, smooth settle), each tile with its own stroke icon (memory chip, stacked queue + loop arrow, server, flow nodes, text-lines with a pin, lightning-in-box, gateway arch, wrench, loop arrows, clock-in-gear).
Scene 3 (6.2–11.5s): thin cobalt connectors self-draw between consecutive tiles (6.4–7.2s) and one cobalt pulse runs once through all ten in reading order (7.2–8.4s), each tile's border brightening as it passes and settling back. Hold still from 8.6s.

## Frame 14 — ขั้นที่ 4: Production / Specialized NAVE

- scene: Stage 4: ten operational guardrails are bracketed by a stamped Safety Policy; then the 4+ advanced row (routing, token tracking, latency) slides in
- voiceover:
- duration: 16s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/14-stage4.html
- type: feature_showcase
- persuasion: Enumeration + bracket (all of these, under one safety policy) + build-up (4 → 4+)
- beat: Assurance + ambition
- blueprint: grid-card-assemble (Adapt)
- term: Stage 4 / 5
- focal: the bracket + "Safety Policy!" stamp
- roles: stage header = supporting · ten item tiles = foreground subject · bracket + stamp = foreground subject (Scene 3) · 4+ row = foreground subject (Scene 4)
- onscreen: title "Production / Specialized NAVE" (0.3s) · purpose "ปลอดภัย เชื่อถือได้ ระดับองค์กร" (0.8s) · tiles "Guardrails" (1.8s) "Access Control" (2.1s) "Secrets Management" (2.4s) "Audit Logs" (2.7s) "Rate Limits" (3.0s) "Fallback Models" (3.3s) "Incident Response" (3.6s) "Compliance" (3.9s) "HA / Auto-Scaling" (4.2s) "Disaster Recovery" (4.5s) · stamp "Safety Policy!" (6.0s) · advanced "4+ Advanced" (9.0s) "Model Routing" (9.4s) "Token Tracking" (9.8s) "Latency Optimization" (10.2s) · note "บนสภาพแวดล้อมจริง" (10.8s)

narrativeRole: Lists what makes NAVE secure, reliable and enterprise-grade, all governed by one safety policy, plus the advanced optimisations that only make sense in a real environment.
keyMessage: Stage 4 wraps NAVE in guardrails — access control, secrets, audit logs, rate limits, fallbacks, incident response, compliance, HA and disaster recovery — under a safety policy, then optimises routing, tokens and latency in the real environment.

Adapt: grid-card-assemble — the same 5×2 grid as stage 3 (consistent stage), extended with a bracket + stamp and a second row arriving later.
Scene 1 (0.0–1.6s): rail focus to node 4 (+0.25s). Stage header (component 12): step-circle "4", title, purpose (0.8s).
Scene 2 (1.6–5.4s): the 5×2 grid of item tiles (same geometry as frame 13, y≈470–610) assembles in reading order on the cues, each with its own stroke icon (shield, key-in-lock, vault/key, list-with-eye, gauge, branching arrow, siren, checklist-seal, stacked servers with arrows, cloud-with-return-arrow).
Scene 3 (5.4–8.8s): a cobalt curly bracket self-draws under the grid (5.4–5.9s) and from its midpoint the stamp "Safety Policy!" lands (6.0s): a solid cobalt rounded box (radius 12px, `#fdfae7` text, Chulabhorn Likit Text 700 40px, with a shield-exclamation glyph), arriving with a short scale 1.08→1 settle (no bounce). Hold.
Scene 4 (8.8–16.0s): a hairline divider draws at y≈720; the label "4+ Advanced" (mono chip, with a small "+" badge) at x 96 (9.0s), then three item tiles in a row (9.4 / 9.8 / 10.2s; icons: forked route, token coin with a counter tick, stopwatch) and the note "บนสภาพแวดล้อมจริง" (Chulabhorn Likit Text 500 34px #5F5B50) right of them (10.8s). The rail's node 4 gains a small "+" badge at 9.0s (drawn in this frame's own layer just below the rail, not in the rail band — at x≈1392, y≈296). Hold still from 11.4s.

## Frame 15 — ขั้นที่ 5: Elite NAVE

- scene: Stage 5: four outcome cards around a loop that keeps turning back into improvement
- voiceover:
- duration: 11s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/15-stage5.html
- type: benefit_highlight
- persuasion: Cycle metaphor (measure → approve → adopt → report → improve)
- beat: Aspiration + resolve
- blueprint: compose
- term: Stage 5 / 5
- focal: the "Continuous Improvement" loop
- roles: stage header = supporting · four outcome cards = foreground subject · loop arrow + centre label = foreground subject (Scene 3)
- onscreen: title "Elite NAVE" (0.3s) · purpose "ระบบ NAVE ที่ส่งมอบผลลัพธ์ที่เชื่อถือได้" (0.8s) · cards "KPIs" (2.0s) "Human-in-the-Loop Approval" (2.6s) "Adoption Metrics" (3.2s) "Executive Dashboards" (3.8s) · loop "Continuous Improvement" (5.4s)

narrativeRole: The destination: a NAVE whose outcomes are trusted because they are measured, approved by people, adopted and visible to leadership — and improved continuously.
keyMessage: Stage 5 is a NAVE that delivers trusted outcomes — KPIs, human-in-the-loop approval, adoption metrics and executive dashboards — feeding continuous improvement.

Scene 1 (0.0–1.8s): rail focus to node 5 (+0.25s). Stage header (component 12): step-circle "5", title, purpose (0.8s).
Scene 2 (1.8–5.0s): four outcome cards (card-tinted, ~380×150) land at the four corners of a loop area (x 96–1824, y≈450–880) on their cues, each with an invented mini-visual and no numbers: KPIs = a half gauge with a needle; Human-in-the-Loop Approval = a person glyph + the shared check; Adoption Metrics = a rising bar trio; Executive Dashboards = a 2×2 mini panel grid. English titles in mono 28px.
Scene 3 (5.0–11.0s): a large rounded loop arrow (cobalt, 4px) self-draws clockwise through the four cards (5.0–6.2s); "Continuous Improvement" lands at the loop's centre (Chulabhorn Likit Text 700 52px, #111) at 5.4s with two small cobalt sparks either side (the requester's *** emphasis). One cobalt dot travels the loop once (6.4–7.8s), touching each card (each pulses lightly as it passes). Hold still from 8.0s.

## Frame 16 — Digital Navy ที่เรามองเห็น

- scene: The closing answer to the opening question; the NAVE | นาวี wordmark returns over faint rings
- voiceover:
- duration: 14s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/16-close.html
- type: branding
- persuasion: Callback (frame 01's question and frame 02's three criteria) + distillation
- beat: Clarity + inspiration
- blueprint: titlecard-reveal (Adapt)
- focal: the answer lines, then the wordmark
- roles: answer lines = foreground subject · wordmark + chip = foreground subject (Scene 3) · department credit = supporting · rings + dot grid = background atmosphere
- onscreen: line 1 "Digital Navy ที่เรามองเห็น" (0.4s) · line 2 "คือการทำงานที่ ราบรื่น ไร้รอยต่อ" (1.8s) + "และใช้ได้จริงอย่างเป็นรูปธรรม" (3.0s) · line 3 "เริ่มแล้ววันนี้ — ก้าวทีละขั้น ด้วย" (4.8s) · wordmark "NAVE" "นาวี" (6.0s) · chip "NAV Ecosystem" (6.6s) · credit "กรมการสื่อสารและเทคโนโลยีสารสนเทศ" + "ทหารเรือ" (8.0s)

narrativeRole: Answers the opening question in the requester's own terms and lands the brand: the Digital Navy is work that is smooth, seamless and genuinely useful — started today, step by step, with NAVE.
keyMessage: The Digital Navy we see is smooth, seamless, genuinely useful work — begun today, step by step, with NAVE | นาวี.

Adapt: titlecard-reveal — one clean title block revealed phrase by phrase, then a still hold; the wordmark's arrival is the only other motion.
Scene 1 (0.0–1.8s): cream ground + faint concentric rings + the dot grid (atmosphere). Line 1 reveals per phrase centred at y≈230 (Chulabhorn Likit Text 700 56px, #111; "Digital Navy" in cobalt).
Scene 2 (1.8–4.8s): line 2's two authored lines reveal per phrase centred at y≈320 / 385 (Chulabhorn Likit Text 500 44px, #3F3C35; "ราบรื่น", "ไร้รอยต่อ", "ใช้ได้จริง" in cobalt weight 700).
Scene 3 (4.8–8.0s): line 3 reveals centred at y≈480 (Chulabhorn Likit Text 600 44px, #111) at 4.8s; the wordmark (component 9 at ~0.75 scale) assembles centred at y≈600 (6.0s; the same build as frame 05, shortened: the rule draws, "NAVE" and "นาวี" rise in), the chip "NAV Ecosystem" under it (6.6s).
Scene 4 (8.0–14.0s): the department credit (two authored lines, Chulabhorn Likit Text 500 32px, #5F5B50) fades in centred at y≈820–866 (8.0s). Hold still to the end (≥ 5 s; the film ends on this card with no fade-out).

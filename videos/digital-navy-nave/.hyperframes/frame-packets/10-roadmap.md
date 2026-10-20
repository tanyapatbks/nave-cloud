# Frame packet: 10-roadmap

## Project inputs

- Project: /home/user/nave-cloud/videos/digital-navy-nave
- Design tokens: /home/user/nave-cloud/videos/digital-navy-nave/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — 5 ขั้น สู่ NAVE ที่พร้อมใช้งานจริง

- scene: The five-stage roadmap draws itself as a rail of five stations; the target picture is reached step by step; a pin drops between stage 1 and stage 2 — we are here
- voiceover:
- duration: 12s
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

## Selected blueprint: spatial-pan-stations

# spatial-pan-stations — Spatial Pan / Stations

**intent**: Pre-place a sequence of labeled stations on one oversized canvas, then traverse it with a single virtual camera — repeated lateral/diagonal pans that center each station in turn and reveal a callout at every stop, landing held on a final station.

**roles served**

- Hook (from hook-pan-timeline): a horizontal timeline of evenly-spaced milestones, left-panned beat by beat, each marker getting a spring-popped callout, landing on the present moment ("evolution / milestone walk leading up to us").
- Problem (from problem-camera-pan-stations): a connected web of pain "stations" linked by hand-drawn leading lines, diagonally panned station to station, ending on a tangled scribble knot ("too many disconnected steps — it's a mess").
- Product_Intro (from concept-demo-decode-pan): a two-shot strip bridged by ONE lateral pan — shot 1 holds a static phrase whose accent word 3D-flap-DECODES (the concept lands), then the camera pans across the strip (with background parallax) into shot 2, where a cursor drives a live typing demo. Pairs this pan with `cursor-ui-demo`'s focal-locked tracked typing.

**duration**: 7–10s (union of Hook 8–10s, Problem ~7s, concept-demo ~7s)

**shot structure**
One oversized flat canvas on a solid `[bg color]`; all stations/markers pre-placed in world space; `[accent color]` text + simple line-icons; one virtual `.world` camera pans ease-in-out between stops. Each station holds ~1.0s.

- Scene 1 (0.0–~1.0s): Camera opens on station 1 — `[label 1 / first step]` centered. A reveal lands on it (see variants). Camera then begins to PAN toward station 2, sliding station 1 out of frame.
- Scene 2 → Scene N-1 (~1.0s each): Camera PANS (ease-in-out) to center the next station; on arrival its `[label k]` (+ optional `[secondary label]`) is REVEALED with the role reveal. Repeat per station.
- Scene N (final, ~last beat): One last pan lands on the terminal station; the final `[callout / landing element]` reveals and HOLDS to the end. Camera goes static on the punchline.

- Variant — Hook: stations sit as evenly-spaced `[markers]` on a thin horizontal `[timeline]` (lower third); pans are LEFT-only along the single axis (timeline scrolls left). Each callout is a bordered `[callout box]` + downward triangle (offset drop-shadow) that SPRING-POPS up (scale 0→100%, bouncy overshoot, transform-origin at triangle tip) reading `[label k]`; a `[secondary label, e.g. year]` fades in and RISES above it. Some mid markers arrive as plain static text revealed by the pan alone (no box). Final scene lands on the `[present-day label]`, springs, holds.
- Variant — Problem: stations are scattered across a 2D web; pans are DIAGONAL, STEERED by `[accent color]` hand-drawn lines — each station has a rough write-on line/arrow that draws toward the next and the camera follows it (Scene 1 also draws a loop/circle around the headline's key word). Each station = a white `[line-icon]` above its `[label]`, revealed plainly by the pan (no spring box). Final scene: the accent line spirals into a dense chaotic SCRIBBLE KNOT centered on the field; camera holds static on the tangle (visual punchline).

**motion vocabulary**
repeated ease-in-out camera pans (horizontal-left for Hook, diagonal-steered for Problem) across one large static canvas; pre-placed stations sliding through frame via the pan; spring-overshoot callout pop with triangle-tip origin (Hook); rise-and-fade secondary label (Hook); plain labels/icons arriving via the pan alone; rough hand-drawn "write-on" leading lines/arrows + loop/circle key-word mark (Problem); terminal chaotic-scribble knot draw (Problem); static hold on the final station/punchline.

**rule mapping**

- camera pan / traverse across the canvas (primary) → `viewport-change` (single `.world` wrapper transform; PAN mode)
- sequencing the repeated pan beats into stops → `multi-phase-camera`
- centering each station as the pan target → `coordinate-target-zoom` (used as pan-to-target, no zoom)
- spring-overshoot callout pop, triangle-tip origin (Hook) → `spring-pop-entrance`
- rise-and-fade secondary label + plain per-station label/icon reveals via the pan → `discrete-text-sequence`
- hand-drawn leading lines / arrows / loop-circle key-word mark / terminal scribble knot (Problem) → `svg-path-draw`
- station line-icons (Problem) → `svg-icon-enrichment`
- static hold on the final station / punchline → (no motion; sustained held frame, no rule needed)

**camera modifier**: The pan IS the camera. One `.world` virtual-camera transform in PAN mode — `viewport-change` — sequenced across stops by `multi-phase-camera`, each stop targeted via `coordinate-target-zoom` (pan-to-target). No depth push-in (that distinguishes this from the cluster-push-in / dataviz-pushthrough blueprints).

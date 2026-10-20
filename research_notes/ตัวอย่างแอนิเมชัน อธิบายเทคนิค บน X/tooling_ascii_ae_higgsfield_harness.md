# Tooling decision note: ASCII, After Effects craft, Higgsfield, harness

2026-10-20. Scope: silent Thai explainer (~90 s, 1920×1080), HyperFrames + GSAP, CPU-only container. Tags: **[M]** measured in this container; **[V]** confirmed by a verification pass; **[U]** unverified. All verification corrections are applied. The ASCII and After Effects sweeps had no second pass, so their claims rest on local measurement or the cited docs only.

**Bottom line.** Build everything locally in HyperFrames + GSAP. Use ASCII only for 3 short "machine reading" beats, drawn in the ink-on-paper palette. Recreate After Effects craft in code, and produce an AE hand-off package only if RTN's own team runs AE. Do not send Navy-derived material to Higgsfield, to Claude Motion hand-offs, or to any self-serve generator. The harness is: the existing HyperFrames `check`, plus our own Thai reading, glyph and MP4 sensors, plus a fresh-context critic, plus a human pilot.

**Storyboard flag.** `videos/rtn-rag-explainer/STORYBOARD.md` has 11 frames totalling 107 s, but BRIEF.md says 90 s. Cut about 17 s before building. The frame numbers below follow STORYBOARD.md.

## 1. Decision matrix

| Item | Decision | Reason | Licence / terms | Offline here |
|---|---|---|---|---|
| HyperFrames 0.8.181 via `scripts/hf` | **use** | Renderer. `check` covers contrast, overlap, clipping and `*.motion.json` | Apache-2.0 [V] | Prerequisites present. A full MP4 render is not yet proven [V] |
| GSAP 3.15 (CustomEase, DrawSVG, MotionPath, Flip, SplitText) | **use** | Covers every AE-style move | Webflow Standard "no charge" licence. Commercial use OK; keep the notice header [V]. GSAP is our own pinned dependency, not part of HyperFrames | yes |
| Own Canvas2D ASCII layer | **use** (≤3 beats) | 17–20 ms/frame with default flags, ~70 ms with SwiftShader flags. Thai renders correctly when each grapheme cluster is one `fillText` [M] | own code | yes |
| numpy + Pillow(raqm) ASCII post-process | optional fallback | Only if a DOM scene must be ASCII-fied: `drawElementImage` is absent in Chromium 141 [M], and the pinned headless shell (build 1194) is the same version | MIT-CMU / BSD | yes, 150–200 ms/frame/core |
| three.js AsciiEffect, pmndrs ASCIIEffect, drei, textmode.js | reference-only | One codepoint per cell, so no Thai shaping. WebGL on SwiftShader costs 90–280 ms/frame [M] | MIT / Zlib / MIT / MIT | slow |
| play.core, ascii.rest, ASCII Motion core, Harri article, ASCII Clouds | reference-only | Motifs and algorithms only. They run their own timers or are hosted apps; never upload archive content to them | Apache-2.0 / MIT / MIT core (premium proprietary) / none / none | n/a |
| ffmpeg 6.1.1 (tmix, freezedetect, blackdetect, scdet, psnr, ssim, signalstats) | **use** | Motion-blur fallback and all MP4 sensors | GPL build; fine for local use [V] | yes |
| HyperFrames `motionBlur` / `data-hf-motion-blur` | optional | Real sub-frame blur on 1–3 fast beats. The config key comes only from release notes [U]. Cannot be combined with shader transitions | Apache-2.0 | yes |
| lottie-web 5.13.0 | optional | Plays icons a designer authors in AE. Keep Thai text out of Lottie | MIT | yes |
| Remotion 4.0.537 | reference-only | The published 5.0 terms exclude "governmental entities" from the free licence, and 4.x says nothing about them [V]. Using it would need written permission or a paid seat | Remotion License | technically yes |
| After Effects 26.x, AE MCPs (Dakkshin: AE 2022+; JUNKDOGE-JOE: Win x64 / macOS arm64), LottieFiles plugin, iart-ai skill | skip here; hand-off only | GUI on Windows or macOS only. The MCP `run-script` executes arbitrary code | proprietary / MIT | no |
| Claude Motion (beta, Team/Enterprise) | **skip** for Navy content | claude.ai only, no API, MP4 export only. Anthropic's BAA excludes beta features. Hand-offs leave Anthropic: "Send to Adobe" opens the cloud Firefly Video Editor, not AE [V] | plan terms | no |
| Higgsfield (API, MCP, CLI, Cinema Studio, Soul) | **skip** | ToS §4.4 allows training on inputs and outputs. The ToS explicitly covers the API, MCP and CLI (§11.1), and Team/Scale plans are not exempt [V] | ToS 2026-07-26 | no |
| Gemini API paid tier / Gemini Enterprise Agent Platform | optional (best-governed) | No training on the paid tier, though prompts are logged for abuse monitoring [V] | Google paid terms; SynthID | no |
| Luma Ray 3.2 API | optional | API Terms §10 (2026-04-28): no training on API inputs or outputs [V] | API terms | no |
| Runway API | skip unless Enterprise | ToS §4.4 (2026-09-15) trains on inputs and outputs, API included. Only the Enterprise terms §5.2 exclude training [V] | — | no |
| Kling direct | skip | The Kling AI Pte. Ltd. ToS allows training (§4.7.3(f)). No API terms found [U] | Singapore law | no |
| Wan 2.2 / LTX-2.x open weights | reference-only | Needs ≥24 GB VRAM (Wan TI2V-5B) or ≥80 GB (14B models); this container has no GPU. It is unclear how LTX's $10M revenue rule applies to a government body [V] | Apache-2.0 / LTX-2.x Community | client GPU only |

## 2. ASCII: where it earns its place

ASCII is texture and transition only. It never carries information, and every ASCII beat ends on clean, legible text. Total ASCII time is about 7–9 s, with scrambling limited to ≤15% of the frame area.

| Frame | Beat | ASCII role | ASCII time |
|---|---|---|---|
| F2 lane 2 (4.2–7.0 s) | "ภาพสแกน / รูปภาพ" | The scanned page tile turns into an **ink-coverage** glyph layout (rows of marks for text lines, plus the photo outline). The result block then resolves per word into the three clean Thai lines. This replaces the planned `hacker-flip-3d` look | ~2.5 s |
| F2 lane 3 (7.0–9.6 s) | chart → table | The chart's bars render as `#` columns, then lift into table rows. The cells resolve to the `— figure —` placeholders, never digits, so no numbers are invented | ~1.5 s |
| F5 Embed station (4.4–5.2 s) | chunks → vectors | Each chunk card flashes to a narrow column of digits, then condenses into its dot | ~0.8 s |
| F10 right panel (4.2–6.4 s), optional | scope first | The archive is drawn as a field of `·` and `#`. Out-of-scope cells dim to `·` **before** the cobalt search sweep starts, and the sweep then lights only in-scope cells. The text labels carry the meaning. The critic decides whether this beat stays | ~2 s |

**Never use ASCII in:** F1 (stakes and BLUF: no glitch on "120+" or on the question), F3 (the filename must be read, and scrambled Thai tokens read as nonsense words), F4 (Classification and Access are never scrambled), F6/F7 (already busy), F8 (a glitch near "ไม่พบเอกสารในสิทธิ์ของท่าน" would read as a breach), F9 or F11. Nowhere: full-screen ASCII, green-on-black, or "Matrix rain".

**Seek-deterministic spec (HyperFrames + GSAP)**
- **Driver.** One Canvas2D per beat, sized to its region. Add a proxy tween to the frame's paused timeline: `tl.to(proxy,{t:D,duration:D,ease:"none",onUpdate:()=>draw(proxy.t)},start)`. This is the canvas pattern in the pinned `hyperframes-animation/techniques.md`. `draw()` must be a pure function of (t, props).
- **Randomness.** `hash32(col,row,floor(frame/3))` with an integer hash such as mulberry32, where frame = round(t·30). Glyphs change at 10 Hz. Never use `Math.random`, `Date`, `performance.now` or rAF. Use spatially coherent value noise, not independent per-cell random.
- **Fonts.** Glyph fields use IBM Plex Mono 500 (shipped). Decoded text uses IBM Plex Sans Thai. Await `document.fonts.load()` for every weight before building the timeline.
- **Cells.** Texture cells are 12×24 px (20 px font). Hero cells are 16×32 px (28 px font). Never use cells narrower than 10 px.
- **Ramp [M].** Measured on IBM Plex Mono Medium in a 1:2 cell. The classic `' .:-=+*#%@'` is *not* monotonic in this font (`-` .044 < `:` .067; `+` .112 < `=` .118). Use **`' .:+*o#@'`** (coverage 0, .034, .067, .112, .145, .184, .237, .283). Digits all fall at .17–.27, which gives an even texture for vectors.
- **Sampling.** Draw the source offscreen, `drawImage` it down to cols×rows with `imageSmoothingQuality:'high'`, and call `getImageData` once per frame. L = .2126R + .7152G + .0722B, then a 2–98th percentile stretch, then k = floor(L·(N−1)+0.5).
- **Scanned-page mode [M].** Use inverted ink coverage, not brightness. Brightness mapping turns a page into a uniform blur. ink = L<0.45 inside the paper mask L>0.35; level = clip(√(mean(ink)/0.25)·N). Paper cells get `·` at 25% alpha on alternate cells.
- **Decode.** Split with `Intl.Segmenter('th',{granularity:'grapheme'})` and draw each cluster with one `fillText` at the accumulated `measureText` x, so tone marks stack correctly. Resolve Thai per word. Cluster i resolves at t_i = s + 0.7d·(line·0.25 + i/len) + 0.3d·hash(i,line). Before t_i, draw ramp symbols at low contrast for at most 1 s; random Thai letters would read as words. Alpha rises .35→1 over the last 0.6 s. Final Thai is ≥40 px. A combining mark never sits alone in a cell.
- **Colours** (from frame.md). Ground `#fdfae7`. Texture glyphs `#9a9a9a` at 35–60% alpha; this is decoration only, since its contrast is 2.7:1. Resolved text `#111111` (18:1). In-scope or active glyphs cobalt `#1e2bfa` (7.2:1).
- **Timing and encode.** The handoff to clean text happens within 2–3 s, then holds ≥1.5 s. No luminance flash above 3 Hz. Master at CRF 16–18, preset slow. A full-frame scramble needs ~49 Mbps against ~5.5 Mbps for a smooth field [M, synthetic], which is why the area limit exists. The extra render cost is ~1–4 min per full render [M].
- **Test.** Render frame N, then M, then N again; the hashes must be identical. This passed in the prototype [M].

## 3. After Effects craft, in code

| AE technique | Code | Parameters |
|---|---|---|
| Easy Ease (F9) | `CustomEase.create('aeEasy','0.333,0,0.667,1')` | General formula (Jam3/bodymovin): x1=infOut/100, y1=(speedOut/avg)·x1, x2=1−infIn/100, y2=1−(speedIn/avg)·infIn/100. Equivalence still needs a graph-editor check [U] |
| House timing | GSAP | Entrances `power3.out` 0.6 s. Exits `power2.in` 0.35–0.45 s. Moves (0.75,0,0.25,1) over 0.8–1.2 s. Stagger 0.06–0.09 s, always shorter than the tween. No bounce/back/elastic (storyboard ban) |
| Trim Paths | DrawSVG | 0→100% over 0.5–0.7 s, `power2.inOut`. Single-segment paths with round caps. Travelling dash: `${s+o}% ${e+o}%`. Pen tip via MotionPath `align`/`autoRotate` (= Auto-Orient) |
| Track mattes | `mask-image`, inline SVG `<mask>` (alpha vs luminance), `clip-path: inset()` wipes | Masks must be inline (external masks fail over file://). Thai reveal masks need ≥0.3em padding top and ≥0.2em bottom |
| Null / parent rigs | `CTRL_` wrapper with `transformOrigin`/`svgOrigin` as the anchor point; Flip for re-layout | Tween only x, y, scale, rotation and opacity. `Flip.from({absolute:true,nested:true,scale:true,stagger:0.05})` |
| 2.5D camera | CSS `perspective` = AE Zoom (50 mm at 1920 wide → 2666.7 px); parallax = Z/(Z+z) | ≤1 camera move per frame, 4–8% push-in. Prefer flat-card speed factors 0.2× / 1× / 1.5× |
| Motion blur | A: HyperFrames `motionBlur:{}` (16 samples, 180°/−90°) [U key path]. B: `data-hf-motion-blur` with shutterAngle 180 (its default is 720). C [M]: render at 240 fps, then `tmix=frames=5:weights='1 2 2 2 1',select='eq(mod(n\,8)\,2)',setpts=N/(30*TB)`. D: `feGaussianBlur stdDeviation="σx 0"` with σx ≈ 0.29·px/frame·(angle/360) | Blur only fast travel. Text always lands sharp |
| Echo | N clones evaluating f(t−kD) with opacity I·dᵏ | N=4, D=2 frames, I=d=0.6 |
| Expressions | Pure functions of t: wiggle = Σ a·mᵒ·noise(seed + f·2ᵒ·t), seeded with mulberry32; `loopOut` = t mod P | Never `repeat:-1` |
| Thai kinetic type | `Intl.Segmenter('th',{granularity:'word'})`; animate per word or phrase | 0.05–0.08 s stagger, never per character |

**Optional AE hand-off package** (only if RTN runs AE 26 on Windows or macOS):
1. `timing_manifest.json`: scenes, markers, and every keyframe as {t, value, bezier, AE influence/speed}.
2. `build_scene.jsx` in ES3 with data as object literals, since ExtendScript has no native JSON. Thai strings as `\uXXXX`. Bins `00_Output…99_Old`, comps `RTN_RAG_s01_…_v01`, `CTRL_` nulls, and `setTemporalEaseAtKey` with influence 0.1–100. It cannot be tested here.
3. Per-element SVGs with stable ids and text removed. AE 26 imports SVG as shape layers but drops text; this is documented for the Oct-2025 beta and not confirmed in stable builds [U].
4. ProRes 4444 alpha passes (`hf render --format mov`).
5. A reference MP4 plus contact sheets.
6. Optionally, Lottie icons (shapes and trim paths only).

Skip EDL/OTIO, because AE cannot import either.

## 4. Higgsfield and alternatives

**Recommendation: do not use Higgsfield.** The film needs no generated footage. All atmosphere (paper tiles, the ASCII field, the dot grid) is code, which is deterministic, private and free. Generated pixels also cannot guarantee exact Thai text or accurate diagrams.

**Governance caveats [V]**
- ToS §4.4 lets Higgsfield train on content, inputs and outputs. Deleting content stops only *future* training (§16.5). Only an Enterprise Agreement excludes training (§1.3 says it overrides the ToS); Team and Scale plans are not excluded.
- Input media must be given as "publicly accessible URLs". Presigned uploads return a CDN `public_url`, and its access control is undocumented. Visibility "may default to its most permissive setting" (§3.2).
- §5.5 opens "Where required by applicable law" and then bars removing, altering or obscuring provenance signals (§6.4). §11.7 bars presenting outputs as human-made. Whether blurring, compositing or re-encoding counts as "obscuring" is unresolved.
- The privacy policy names no sub-processors ("third-party AI model and compute providers"), lists transfers including Kazakhstan, and claims no certifications. The Enterprise page promises no training, a no-retention mode and "SOC 2-aligned" controls; that wording is not a certification claim.
- The MCP and CLI are built by Higgsfield, need a paid plan and spend credits with no hard cap. Katana is a Higgsfield MCP skill, not "Claude Motion-powered" (that claim is refuted).

**Optional integration, OFF by default.** Use this only with the security officer's written approval and a key the user supplies.
- **Provider order:** Gemini API paid tier or Gemini Enterprise Agent Platform, then Luma API, then Higgsfield or Runway only under Enterprise contracts. The Veo 3.1 preview models shut down **2026-10-22**. After that, the Gemini API offers `gemini-omni-1.1-flash` at about $0.10/s for 720p; 1080p and 4K are upscaled, and SynthID is always applied. GA `veo-3.1(-fast)-generate-001` remains on Agent Platform until at least 2026-11-17 (24 fps, 4/6/8 s clips; price [U]). Zero data retention requires an abuse-monitoring exception.
- **Higgsfield pricing**, if ever needed: Kling 3.0 Std T2V is $0.042/s (a 50% promotion on $0.084/s), from Higgsfield's console. Call `/estimate` before each request. Minimum top-up is $5, credits expire after 1 year, and outputs are kept ≥7 days. Concurrency is 20 according to the help centre, but the docs say it depends on account and model (their example error shows 4).
- **Limits:** at most 3 slots and ≤12 s on screen. Text-to-video only, with no uploads. Prompts stay generic: no Navy, military, document or archive terms, and say "deep blue", not "navy". Generated pixels never carry information: no text, numbers, documents, people, ships, flags or emblems.
- **Pipeline:**
  - Pass the key only as a session env var and call the API with plain curl. Download outputs immediately.
  - Keep the originals plus a JSON sidecar (provider, model, prompt, params, request_id, UTC time, cost, sha256).
  - Normalise with `scale=1920:1080:flags=lanczos,fps=30,eq=saturation=0.25:contrast=0.85,gblur=sigma=5`, encoded all-intra (`-g 1`).
  - Composite at 35–50% opacity under a scrim, and reject any take with glyph-like marks, faces or vessels.
  - Add the end-card line "ภาพพื้นหลังบางส่วนสร้างด้วย AI".

## 5. Our harness

**Guides (feedforward).** These already exist: `CLAUDE.md`, `BRIEF.md`, `STORYBOARD.md`, `frame.md`, `harness/check-copy.mjs`, `harness/check-glyphs.mjs`. Add four more:
- `storyboard.json`: per scene {id, start, end, lines[{id, th, en_terms, appears_at, exit_at}], focal, assertions, passes:false}. The agent may only flip `passes`. (Anthropic "effective harnesses")
- `qa/fact-check.md`: copy deck plus claims ledger. (claude-video-starter, anything2explainer)
- `qa/ledger.md`: the loop's "spine". (Osmani)
- `glossary.json`: term → Thai gloss → first scene. (Mayer pretraining)

Add a "rules learned" section to CLAUDE.md (Böckeler, N01ennn).

**Hooks** (pattern from cyxj-remotion-starter):
- `PreToolUse(Edit|Write)` denies `Math.random`, `Date`, `performance.now`, timers, CSS transitions or keyframes, `repeat`, and bounce/elastic eases.
- `PreToolUse(Bash)` asks before any full render.
- Deny reads of `.env` and keys, and deny uploads of frames or assets.
- **Fix now:** `scripts/hf` must `unset GEMINI_API_KEY GOOGLE_API_KEY`, and every `snapshot` call needs `--describe false`. Without these, snapshot sends frames to Gemini by default whenever a key is present [V].

**Sensors (computational)**

| Sensor | Threshold | From |
|---|---|---|
| Spec | 1920×1080, 30/1 CFR, frames = duration×30 ±1, h264 yuv420p tv range, BT.709 tags, SAR 1:1 | OVH, extreme-motion-design |
| HyperFrames check | `scripts/hf check --json --samples 45 --at-transitions --strict --tolerance 2` → ok:true, browserSkipped:false, 0 errors | HF lint-validate-inspect |
| Contrast | WCAG AA: 4.5:1 for normal text, 3:1 for ≥24 px. Project target ≥7:1 for primary Thai. Palette [M]: `#111` 18:1, cobalt 7.2:1, `#6b6b6b` 5.1:1, positive `#059669` 3.6:1 (large text only), `#9a9a9a` 2.7:1 (never for readable text) | HF, WCAG |
| Overlap | Fully shown text boxes (opacity >0.95) overlapping >15% of the smaller box: FAIL. Any held overlap: FAIL | extreme-motion-design, explainroo, HF |
| Safe area | Text inside graphics-safe 5% (x 96–1824, y 54–1026). Meaningful elements inside action-safe 3.5% (x 67–1853, y 38–1042) | EBU R95 (2017) |
| Size | Readable text <22 px: FAIL. <24 px: WARN. Primary Thai lines target ≥48 px (BBC 7–8% line height). Filename mono ≥36 px. This flags F5's 22 px station mono and F1's 24 px gloss chip | cinetic, anything2explainer, HF, BBC |
| Thai lines | ≤35 base characters per line (base = code points minus `\p{M}`), ≤2 lines per block, ≤3 readable blocks on screen. Line-height ≥1.45 for body, ≥1.25 for display | Netflix Thai I.3/I.12 |
| Reading time | A project heuristic, not validated with viewers. The hold runs from settled (opacity ≥0.95, <1 px movement) to the start of the exit. Target = max(2.0, 1.0 + B/12 + 0.5E + 0.3N), where B = base characters, E = English terms, N = numbers or IDs. FAIL below max(1.5, 0.8 + B/17 + 0.3E). Per frame: >17 cps FAIL, >12 cps WARN (check-copy.mjs). Final card ≥3 s. Total holds ≤70% of runtime. Netflix's 17 cps is a subtitle rate, and its exclusion of marks is stated only for line length | Netflix I.16, OVH |
| Text motion | ≤180 px/s while inside its reading window. ≤1200 px/s at any time | cinetic (converted from 60 fps) |
| Freeze | `freezedetect=n=0.001:d=4`: 0 events outside declared holds and the end card (≤5 s). Nothing new for >8 s: FAIL. A run of identical frame hashes >0.8 s outside a declared hold: FAIL | OVH, N01ennn |
| Black / stuck | `blackdetect=d=0.1:pic_th=0.98:pix_th=0.10`: 0 events. A run of frames with high PSNR against frame 0 means the scene stuck at t=0: FAIL | OVH |
| Pops / flash | A frame that differs from both neighbours by >12 levels on >1% of pixels (at 192×108): FAIL. Flashes ≤3/s | OVH isoframes, WCAG 2.3.1 |
| Timing drift | `scdet` cuts within ±2 frames of the storyboard. Scene start/end within 1 frame. `motion.json`: `appearsBy(focal, start+0.6)`, `before()` chains for Ingest→…→Index, `before('#identity','#acl-gate')`, `before('#acl-gate','#search-results')`. A missing selector is a FAIL | HF motion assertions |
| Determinism | Render t = 10/45/80 s twice, in a different order and with 1 vs 3 workers. Require byte-identical PNGs or PSNR ≥45 dB, with alpha stripped | OVH |
| Glyph / tofu | (1) cmap coverage (check-glyphs.mjs). (2) CDP `CSS.getPlatformFontsForNode`: any font family outside {IBM Plex Sans Thai, IBM Plex Sans Thai Looped, IBM Plex Mono, Sarabun}, especially Loma, FreeSerif or Unifont, is a FAIL. The CSS domain is experimental, so pin Chromium. (3) Lint for U+FFFD, U+25CC, a leading combining mark, or a doubled tone mark; normalise ํา to ำ. (4) Block font network requests; `fonts.load()` must throw on failure | OVH, CDP docs |
| Copy fidelity | DOM strings must equal the copy deck exactly, including the exact spellings SourceID, Version, Classification and Access, the filename template, and the pipeline order | anything2explainer, codebase-video |
| Pacing | Shot-length coefficient of variation ≥0.25. ≥0.5 s before anything covers text being read | onetake (ref), anything2explainer |

`qa.sh` prints a single counter line ending in `FAIL=0`. Each non-zero counter names the selector, the time and a fix (Böckeler, N01ennn).

**Loop**
- **Gates:** G0 brief approved → G1 storyboard approved (both done) → G2 posed stills (`hf snapshot --at <mid-hold> --describe false`) approved → build frame by frame, with an inner loop of lint + check and ≤3 attempts before escalating → G3 QA rounds → G4 human preview → delivery render.
- **Each G3 round:**
  1. Seek-based sensors (no render needed).
  2. Draft render (`--quality draft`, 3 workers).
  3. MP4 sensors.
  4. Review pack built from pixels only: a cell every 0.5 s, 12 cells per row, ≤4 rows per page, full-resolution settle frames, and ±0.5 s strips around each transition. Use remotion-director `time-overview.ts`, the only time-overview tool among these repos (Node built-ins + ffmpeg).
  5. A **fresh-context critic** subagent sees only the MP4, the review pack and the on-screen copy: no code, no design notes, no web (motion-video-kit Gauntlet, remotion-director). It returns verdicts as {time + region, what it saw, P0/P1/P2}, with ≤3 fixes per round. A verification round marks each earlier item FIXED, PARTLY or STILL PRESENT.
  6. Confirm every fix on frames decoded from the new MP4, not from the preview (claude-video-starter, Tella).
  7. Append the round to the ledger.
- **Stop when** FAIL=0, all critic gates pass, every score is ≥8 and the mean is ≥8.5. Abort a round that neither lowers FAIL nor raises the minimum score. Cap at 6 rounds (Anthropic saw scores plateau after 5–15 iterations). Escalate to the human when the same failure signature appears in 3 rounds, or after 2 rounds with no gain. When an issue class appears twice, add a rule or sensor.
- **Budget:** ≤4 full renders per session, one at a time, under a 25-min watchdog (extreme-motion-design, mortiflix).
- **Wiring:** run `qa.sh` from a command-type Stop hook, or use `/goal` with the counters printed. The `/goal` evaluator reads only the transcript and runs no tools [V]; whether it sees images is [U].
- **Comparing alternative cuts:** order-reversed pairwise judging, where the new cut must win 2–0. This is the crimeacs `compare.py` protocol, which already uses `claude -p`.

**Rubric: "a commander understands it on first viewing"**
- **G-BLUF:** the key message appears in Thai by 10 s and again in the last 8 s. Today F1 asks a question, and only the "3 ตามสิทธิ์" tracker at 7.3 s hints at the answer. Decide whether to add a one-line answer. BLUF is a US Army convention; the RTN norm is [U].
- **G-PROBE:** a cold-read judge answers 6/6, each answer citing a frame time. (1) Is permission checked before or after search? (2) Which 4 labels does every document and chunk carry? (3) How are scans read? (4) What does hybrid search combine? (5) Why is there a reranker before the LLM? (6) What does the filename tell the system, and what does it *not* (rights)?
- **G-SENSORS:** FAIL=0.
- **Scored dimensions,** 1–10 each, every one ≥8, with one isolated judge per dimension, "Unknown" allowed, and calibration against the user's own scores on 3 frames:
  - S1: one idea per frame.
  - S2: plain Thai first, with ≤1 new English term per ~8 s.
  - S3: readable on a single pass.
  - S4: signaling. Cobalt only on the focal element; allowed/blocked always shown as ✓/✗ plus an icon, never colour alone.
  - S5: the same example document is visibly the same object across stages.
  - S6: causality and order. The wrong way is shown once and marked wrong.
  - S7: accuracy. No invented numbers.
- **Code2Video axis names** (Engagement, Prompt-Intent, Composition, Temporal, Craft) are secondary. Its judge is a cloud pairwise API, and its "82%" figure is not defined on the page.
- **Mayer caveat:** the modality and redundancy principles favour narration over printed text. Compensate with labels placed next to their objects and one caption line per frame, and offer an optional narrated cut.
- **Human pilot:** 2–3 non-technical Thai staff watch once at 1× without pausing. Pass if each scores ≥5/6 and all get Q1 right.

**Repos: port ideas or scripts, never install**
- **Port:**
  - cinetic (MIT): set `HF_CLI` to the local CLI, because `hf-finish.sh` otherwise runs `npx hyperframes@0.8.79`. Skip the ~1.1 GB earshot models.
  - OpenVideoHarness checkers (MIT): skip the `curl | bash` installer; it has only been tested on macOS.
  - extreme-motion-design `lint`/`layout`/`qa` (MIT).
  - motion-video-kit critic prompts (MIT). Its scripts need numpy and scipy.
  - vox-explainer seam-gate (Apache-2.0): `--url` mode only, because `--project` runs `npx hyperframes@0.8.14`.
  - framejam for stakeholder review rounds (MIT, local). Set `FRAMEJAM_NO_UPDATE_CHECK=1`.
- **Reference only:**
  - onetake and anything2explainer (PolyForm Noncommercial). Both have a "government institution" permitted-purpose clause, but legal review is needed.
  - mortiflix and OpenMontage (AGPL). mortiflix launches Claude with `acceptEdits`, WebFetch/WebSearch and `sandbox:false`.
- **Skip:**
  - Remotion MCP (deprecated).
  - HyperFrames hosted MCP (runs on HeyGen infrastructure, spends credits).
  - remotion-superpowers (uploads renders to TwelveLabs).
  - Code2Video (MIT, but needs cloud LLM keys).
  - Blender MCP (MIT, not relevant).
  - kinocut.

**Data note.** "No training by default" applies only to commercial Claude accounts. Confirm this account's plan; if it is consumer, check the model-improvement setting. Never use thumbs feedback on RTN sessions (feedback is kept up to 5 years). Whether RTN rules allow external LLM processing at all is [U].

## 6. Sources

ASCII: https://alexharri.com/blog/ascii-rendering · https://news.ycombinator.com/item?id=46657122 · https://threejs.org/docs/pages/AsciiEffect.html · https://unpkg.com/three@0.186.1/examples/jsm/effects/AsciiEffect.js · https://www.npmjs.com/package/postprocessing · https://react-postprocessing.docs.pmnd.rs/effects/ascii · https://drei.docs.pmnd.rs/abstractions/ascii-renderer · https://github.com/emilwidlund/ASCII · https://code.textmode.art/ · https://www.creativeapplications.net/news/textmode-js-library-for-dynamic-ascii-art-text-graphics-with-real-time-rendering/ · https://github.com/humanbydefinition/p5.asciify · https://github.com/ertdfgcvb/play.core · https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/ · https://github.com/CameronFoxly/Ascii-Motion · https://ascii.rest/ · https://news.ycombinator.com/item?id=49993857 · https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/ · https://caidan.dev/portfolio/ascii_clouds/ · https://news.ycombinator.com/item?id=46611507 · https://d2lang.com/blog/ascii/ · https://github.com/lukilabs/beautiful-mermaid · https://x.com/codetaur/status/2025378941700014542 · https://www.productioncrate.com/plugins/crates-ascii · https://ffmpeg.org/ffmpeg-devices.html#caca · https://github.com/TheZoraiz/ascii-image-converter · https://github.com/YusufB5/ASCILINE

HyperFrames / Remotion / GSAP: https://github.com/heygen-com/hyperframes · https://hyperframes.heygen.com/concepts/determinism.md · https://hyperframes.heygen.com/prompting/motion.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/skills/hyperframes-animation/references/motion-blur.md · https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-cli/references/lint-validate-inspect.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/skills/hyperframes-creative/references/typography.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/packages/cli/src/commands/snapshot.ts · https://raw.githubusercontent.com/heygen-com/hyperframes/main/packages/cli/src/telemetry/config.ts · https://github.com/heygen-com/hyperframes/blob/main/docs/guides/mcp.mdx · https://newreleases.io/project/github/heygen-com/hyperframes/release/v0.8.45 · https://gsap.com/standard-license · https://gsap.com/licensing/ · https://www.remotion.dev/docs/license/faq · https://www.remotion.dev/docs/terms · https://www.remotion.dev/docs/gl-options · https://www.remotion.dev/docs/motion-blur/camera-motion-blur · https://www.remotion.dev/docs/ai/mcp

After Effects: https://github.com/Jam3/ae-temporal-to-cubic-ease · https://ae-scripting.docsforadobe.dev/other/keyframeease/ · https://community.adobe.com/t5/after-effects-discussions/json-is-undefined-error/m-p/12741567 · https://www.cgchannel.com/2026/01/adobe-releases-after-effects-26-0-with-native-substance-support/ · https://www.cgchannel.com/2026/09/adobe-releases-after-effects-26-5-and-new-ai-assistant-in-beta/ · https://community.adobe.com/t5/after-effects-beta-discussions/new-vector-workflow-enhancements-in-after-effects-beta/m-p/15567805 · https://github.com/airbnb/lottie-web · https://docs.lottiefiles.com/en/integrations/after-effects/03_import/importing-from-file · https://github.com/iart-ai/motion-design-skills/tree/main/skills/after-effects · https://github.com/Dakkshin/after-effects-mcp · https://github.com/JUNKDOGE-JOE/after-effects-mcp · https://ffmpeg.org/ffmpeg-filters.html#tmix · https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear · https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter · https://itbrief.co.uk/story/adobe-adds-claude-motion-hand-off-to-firefly-video-editor

Higgsfield and alternatives: https://higgsfield.ai/terms-of-use-agreement · https://higgsfield.ai/privacy-policy · https://higgsfield.ai/enterprise · https://higgsfield.ai/creator-hub/help-center/business/team-and-business-higgsfield · https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api · https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent · https://higgsfield.ai/creator-hub/changelog · https://higgsfield.ai/blog/higgsfield-katana · https://docs.higgsfield.ai/docs/help/faq.md · https://docs.higgsfield.ai/docs/concepts/billing-and-retention.md · https://docs.higgsfield.ai/docs/concepts/rate-limits.md · https://docs.higgsfield.ai/docs/concepts/file-uploads.md · https://open.higgsfield.ai/models/kling-video%2Fv3.0%2Fstd%2Ftext-to-video · https://registry.npmjs.org/@higgsfield%2fcli · https://ai.google.dev/gemini-api/docs/pricing · https://ai.google.dev/gemini-api/docs/deprecations · https://ai.google.dev/gemini-api/docs/omni · https://ai.google.dev/gemini-api/terms · https://docs.cloud.google.com/vertex-ai/generative-ai/docs/data-governance · https://runway.com/enterprise-terms · https://runway.com/terms-of-use · https://lumalabs.ai/api/terms · https://lumalabs.ai/legal/tos · https://kling.ai/docs/user-policy · https://github.com/Wan-Video/Wan2.2 · https://raw.githubusercontent.com/Lightricks/LTX-2/main/LICENSE-2_x · https://claude.com/resources/articles/dashboards-and-motion · https://support.claude.com/en/articles/17454997-get-started-with-claude-motion · https://support.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers

Harness repos: https://github.com/ZLHad/OpenVideoHarness · https://github.com/Leonxlnx/cinetic · https://github.com/echris6/motion-video-kit · https://github.com/Zane-0x5a/remotion-director · https://github.com/dev-isaacmello/extreme-motion-design · https://github.com/vincentsch/explainroo · https://github.com/GTKottman/mortiflix-oss · https://github.com/heygen-com/hyperframes-community-skills · https://github.com/chenyuxiaojin/cyxj-remotion-starter · https://github.com/Tejashmakwana/motionmaxxing · https://github.com/feitangyuan/onetake · https://github.com/Vincentwei1021/anything2explainer · https://github.com/OnurGumus/codebase-video · https://github.com/crimeacs/product-demo-director · https://github.com/KyaniteLabs/kinocut · https://github.com/moritzkremb/framejam · https://www.heygen.com/research/introducing-code2video-benchmark · https://github.com/zhuyansen/awesome-claude-video-skills · https://github.com/DojoCodingLabs/remotion-superpowers · https://github.com/calesthio/OpenMontage · https://github.com/showlab/Code2Video · https://github.com/ahujasid/mcp-for-blender · https://github.com/whaleyxbt/claude-motion · https://github.com/DIY-Smart-Code/claude-video-starter

Guides and standards: https://api.fxtwitter.com/N01ennn/status/2107826459804840072 · https://api.fxtwitter.com/N01ennn/status/2108182955671580771 · https://www.anthropic.com/engineering/harness-design-long-running-apps · https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents · https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents · https://martinfowler.com/articles/harness-engineering.html · https://claude.com/blog/getting-started-with-loops · https://code.claude.com/docs/en/goal · https://addyosmani.com/blog/loop-engineering/ · https://www.ibm.com/think/topics/loop-engineering · https://arxiv.org/abs/2609.00006 · https://www.tella.com/blog/how-to-use-remotion-agent-skills-with-claude-code · https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308 · https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/ · https://tech.ebu.ch/publications/r095 · https://chromedevtools.github.io/devtools-protocol/tot/CSS/#method-getPlatformFontsForNode · https://www.w3.org/TR/thai-lreq/ (Group Note Draft, 2026-03-20) · https://ugc.futurelearn.com/uploads/files/7d/d6/7dd6188d-c343-4311-b064-ac98d2c95abc/Multimedia_Principles._R._E._Mayer__2020.pdf · https://en.wikipedia.org/wiki/BLUF_(communication) · https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training · https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training

Local evidence: Plex Mono ramp and palette contrast were measured 2026-10-20 with `/tmp/claude-0/-home-user-nave-cloud/133aa86b-fdd3-5acb-8b83-b971282b2787/scratchpad/synth/ramp_plex.py`. The ASCII benchmarks and Thai coverage come from `/tmp/claude-0/-home-user-nave-cloud/133aa86b-fdd3-5acb-8b83-b971282b2787/scratchpad/work/` (bench.mjs, thai_ramp.py, enc_test.py).

# Tooling decision note: ASCII, After Effects craft, Higgsfield, harness

2026-10-20. Tags: **[M]** measured in this container; **[V]** confirmed by the verification pass; **[U]** unverified. All verification corrections are applied. The ASCII and After Effects sweeps had no second verification pass.

**Bottom line.** Build everything locally in HyperFrames + GSAP. Use ASCII for at most 3 short "machine reading" beats, drawn in the ink-on-paper palette. Recreate After Effects craft in code; produce an AE hand-off package only if RTN's team runs AE. Send no Navy-derived material to Higgsfield, to Claude Motion hand-offs, or to any self-serve generator.

**Storyboard flag.** STORYBOARD.md has 11 frames totalling 107 s, but BRIEF.md says 90 s. Cut about 17 s. Frame numbers below follow STORYBOARD.md.

## 1. Decision matrix

| Item | Decision | Reason | Licence / terms | Offline |
|---|---|---|---|---|
| HyperFrames 0.8.181 via `scripts/hf` | **use** | Renderer; `check` covers contrast, overlap, clipping, `motion.json` | Apache-2.0 [V] | prerequisites present; full MP4 not yet proven [V] |
| GSAP 3.15 (CustomEase, DrawSVG, MotionPath, Flip, SplitText) | **use** | Every AE-style move | Webflow Standard "no charge"; commercial OK; keep notice header [V]. Our own dependency, not part of HyperFrames | yes |
| Own Canvas2D ASCII layer | **use**, ≤3 beats | 17–20 ms/frame (default flags), ~70 ms (SwiftShader flags); Thai is correct when each cluster is one `fillText` [M] | own | yes |
| numpy + Pillow(raqm) post-process | optional | Fallback only: `drawElementImage` is absent in Chromium 141 [M], the same build as the pinned shell | BSD / MIT-CMU | yes |
| three.js AsciiEffect, pmndrs ASCIIEffect, drei, textmode.js | reference-only | No Thai shaping; WebGL on SwiftShader 90–280 ms/frame [M] | MIT / Zlib / MIT / MIT | slow |
| play.core, ascii.rest, ASCII Motion, Harri article, ASCII Clouds | reference-only | Motifs only; their own timers or hosted apps. Never upload archive content | Apache-2.0 / MIT / MIT core + proprietary / none / none | n/a |
| ffmpeg 6.1.1 | **use** | Motion-blur fallback and MP4 sensors | GPL build, fine locally [V] | yes |
| HyperFrames `motionBlur` / `data-hf-motion-blur` | optional | 1–3 fast beats. The config key appears only in release notes [U]; cannot combine with shader transitions | Apache-2.0 | yes |
| lottie-web 5.13.0 | optional | Plays AE-made icons; keep Thai out of Lottie | MIT | yes |
| Remotion 4.0.537 | reference-only | Published 5.0 terms exclude "governmental entities" from free use; 4.x is silent [V] | Remotion License | yes |
| After Effects 26.x, AE MCPs, LottieFiles plugin, iart-ai skill | skip here (hand-off only) | Windows/macOS GUI only; MCP `run-script` executes arbitrary code | proprietary / MIT | no |
| Claude Motion (beta) | **skip** for Navy content | claude.ai only, no API, MP4 only; beta is outside Anthropic's BAA; "Send to Adobe" opens the cloud Firefly Video Editor, not AE [V] | plan terms | no |
| Higgsfield (API, MCP, CLI, Soul) | **skip** | ToS §4.4 trains on inputs and outputs; §11.1 covers API/MCP/CLI; Team/Scale plans not exempt [V] | ToS 2026-07-26 | no |
| Gemini API paid tier / Agent Platform | optional (best governance) | No training; abuse logging remains [V] | Google paid; SynthID | no |
| Luma Ray 3.2 API | optional | API Terms §10: no training on API inputs/outputs [V] | API terms 2026-04-28 | no |
| Runway API, Kling direct | skip | Runway ToS §4.4 (2026-09-15) trains incl. API; Kling AI Pte. Ltd. ToS trains; no Kling API terms found [U] | Enterprise-only exclusion (Runway) | no |
| Wan 2.2 / LTX-2.x weights | reference-only | ≥24 GB / ≥80 GB VRAM; no GPU here; LTX $10M rule unclear for government [V] | Apache-2.0 / LTX-2.x Community | client GPU only |

## 2. ASCII: where it earns its place

ASCII is texture and transition only. Each beat ends on clean, held text. Total ≈7–9 s; scrambling covers ≤15% of the frame.

| Frame | ASCII role | Time |
|---|---|---|
| F2 lane 2 (4.2–7.0 s) | The scan tile becomes an **ink-coverage** glyph layout (rows of marks = text lines); the result then resolves per word into the three Thai lines. Replaces the planned `hacker-flip-3d` look | ~2.5 s |
| F2 lane 3 (7.0–9.6 s) | Chart bars appear as `#` columns, then lift into table rows that resolve to `— figure —` placeholders. Never digits, so no invented numbers | ~1.5 s |
| F5 Embed (4.4–5.2 s) | Each chunk card flashes to a digit column, then condenses into its dot | ~0.8 s |
| F10 right panel (4.2–6.4 s), optional | An archive field of `·`/`#`. Out-of-scope cells dim to `·` **before** the cobalt search sweep, which then lights in-scope cells only. Labels carry the meaning; the critic decides whether it stays | ~2 s |

**Never use ASCII in:** F1 (stakes, BLUF), F3 (the filename must be read; scrambled Thai reads as nonsense words), F4 (Classification/Access are never scrambled), F6/F7 (already busy), F8 (a glitch near "ไม่พบเอกสารในสิทธิ์ของท่าน" reads as a breach), F9 or F11. Never full-screen, never green-on-black, no "Matrix rain".

**Spec (seek-deterministic)**
- **Driver.** One Canvas2D per beat, sized to its region. Use `tl.to(proxy,{t:D,duration:D,ease:"none",onUpdate:()=>draw(proxy.t)},start)` on the frame's paused timeline (the pattern in the pinned `hyperframes-animation/techniques.md`). `draw` must be a pure function of (t, props).
- **Randomness.** `hash32(col,row,floor(frame/3))` with an integer hash, where frame = round(t·30), giving 10 Hz glyph changes. Spatially coherent value noise. No `Math.random`, `Date`, `performance.now` or rAF.
- **Fonts.** IBM Plex Mono 500 for glyph fields, IBM Plex Sans Thai for decoded text. Await `document.fonts.load()` for every weight before building the timeline.
- **Cells.** Texture cells 12×24 px (20 px font); hero cells 16×32 px (28 px). Never narrower than 10 px.
- **Ramp [M].** Measured on IBM Plex Mono Medium. The classic `' .:-=+*#%@'` is non-monotonic in this font (`-` .044 < `:` .067; `+` .112 < `=` .118). Use **`' .:+*o#@'`** (0, .034, .067, .112, .145, .184, .237, .283). Digits fall at .17–.27, an even texture for vectors.
- **Sampling.** `drawImage` the source down to cols×rows with `imageSmoothingQuality:'high'`, then one `getImageData` per frame. L = .2126R + .7152G + .0722B, 2–98th percentile stretch, k = floor(L·(N−1)+.5).
- **Scan mode [M].** Use inverted ink coverage, not brightness, which blurs a page into a uniform field. ink = L<.45 inside the paper mask L>.35; level = clip(√(mean ink/.25)·N). Paper cells get `·` at 25% alpha on alternate cells.
- **Decode.** Split with `Intl.Segmenter('th',{granularity:'grapheme'})` and draw one `fillText` per cluster at the accumulated `measureText` x. Resolve Thai per word. Word i resolves at t_i = s + .7d·(line·.25 + i/len) + .3d·hash(i,line). Before t_i, draw ramp symbols at low contrast for ≤1 s; random Thai letters read as words. Alpha rises .35→1 over the last 0.6 s. Final text ≥40 px. A combining mark never sits alone in a cell.
- **Colours (frame.md).** Ground `#fdfae7`. Texture glyphs `#9a9a9a` at 35–60% alpha: 2.7:1, decoration only. Resolved text `#111111` (18:1). Active/in-scope glyphs cobalt `#1e2bfa` (7.2:1).
- **Timing and encode.** Hand off to clean text within 2–3 s, then hold ≥1.5 s. No flash above 3 Hz. Master at CRF 16–18. Full-frame scramble needs ~49 Mbps against ~5.5 Mbps for a smooth field [M, synthetic], hence the area cap. Extra render time is +1–4 min per full render [M].
- **Test.** Render frame N, then M, then N again; the hashes must be identical. This passed in the prototype [M].

## 3. After Effects craft, in code

| AE technique | Code | Parameters |
|---|---|---|
| Easy Ease | `CustomEase.create('aeEasy','0.333,0,0.667,1')` | x1=infOut/100, y1=(speedOut/avg)·x1, x2=1−infIn/100, y2=1−(speedIn/avg)·infIn/100 (Jam3/bodymovin). Check in the graph editor [U] |
| House timing | GSAP | In: `power3.out` 0.6 s. Out: `power2.in` 0.35–0.45 s. Moves (0.75,0,0.25,1) over 0.8–1.2 s. Stagger 0.06–0.09 s, shorter than the tween. No bounce/back/elastic |
| Trim Paths | DrawSVG | 0→100% in 0.5–0.7 s, `power2.inOut`; single-segment paths; travelling dash `${s+o}% ${e+o}%`; pen tip via MotionPath `autoRotate` (Auto-Orient) |
| Track mattes | `mask-image`, inline SVG `<mask>` (alpha/luma), `clip-path: inset()` | Inline masks only (external masks fail over file://). Thai reveal masks need ≥.3em top and ≥.2em bottom padding |
| Null rigs | `CTRL_` wrapper with `transformOrigin`/`svgOrigin`; Flip for re-layout | Tween only transforms and opacity. `Flip.from({absolute:true,nested:true,scale:true,stagger:.05})` |
| 2.5D camera | `perspective` = AE Zoom (50 mm @1920 → 2666.7 px); parallax Z/(Z+z) | ≤1 move per frame, 4–8% push; flat-card factors .2×/1×/1.5× |
| Motion blur | HyperFrames `motionBlur:{}` (16 samples, 180°/−90°) [U]; component with shutterAngle 180 (its default is 720); or [M] 240 fps → `tmix=frames=5:weights='1 2 2 2 1',select='eq(mod(n\,8)\,2)',setpts=N/(30*TB)`; or `feGaussianBlur "σx 0"`, σx≈.29·px/frame·angle/360 | Blur fast travel only; text lands sharp |
| Echo | N clones of f(t−kD), opacity I·dᵏ | N=4, D=2 frames, I=d=.6 |
| Expressions | wiggle = Σ a·mᵒ·noise(seed+f·2ᵒ·t), seeded with mulberry32; `loopOut` = t mod P | No `repeat:-1` |
| Thai kinetic type | `Intl.Segmenter('th',{granularity:'word'})` | Per word or phrase, .05–.08 s stagger |

**Optional AE hand-off package** (only if RTN runs AE 26 on Windows/macOS):
1. `timing_manifest.json`: scenes, markers, and every keyframe as {t, value, bezier, AE influence/speed}.
2. `build_scene.jsx` in ES3 with data as literals (ExtendScript has no JSON) and Thai as `\uXXXX`. Bins `00_Output…99_Old`, comps `RTN_RAG_s01_…_v01`, `CTRL_` nulls, `setTemporalEaseAtKey` with influence 0.1–100. Untestable here.
3. Text-free SVG per element, with stable ids. AE 26 drops SVG text; documented for the beta only [U].
4. ProRes 4444 alpha passes (`hf render --format mov`).
5. Reference MP4 and contact sheets.
6. Optional Lottie icons.

Skip EDL/OTIO: AE cannot import them.

## 4. Higgsfield and alternatives

**Recommendation: do not use Higgsfield.** The film needs no generated footage: all atmosphere (paper tiles, the ASCII field, the dot grid) is deterministic, private code. Generated pixels cannot guarantee exact Thai text or diagrams.

**Governance caveats [V]**
- ToS §4.4 permits training on content, inputs and outputs. Deletion stops only future training (§16.5). Only an Enterprise Agreement excludes training (§1.3); Team and Scale plans do not.
- Inputs must be "publicly accessible URLs". Uploads return a CDN `public_url` with undocumented access control. Visibility may default to most permissive (§3.2).
- §5.5 ("Where required by applicable law…") bars obscuring provenance signals (§6.4), and §11.7 bars passing outputs off as human-made. Whether blurring or compositing counts as "obscuring" is unresolved.
- Sub-processors are unnamed; transfers include Kazakhstan; the policy claims no certifications. The Enterprise page offers no training, a no-retention mode and "SOC 2-aligned" controls, which is not a certification.
- The MCP and CLI are built by Higgsfield, spend paid credits and have no hard spend cap. Katana is a Higgsfield MCP skill, not "Claude Motion-powered" (refuted).

**Optional integration, OFF by default.** Only with written security-officer approval and a key the user supplies.
- **Provider order:** Gemini paid, then Luma API, then Higgsfield or Runway only under Enterprise contracts.
- **Gemini timing:** the Veo 3.1 preview models shut down **2026-10-22**. After that, `gemini-omni-1.1-flash` costs ~$0.10/s at 720p (1080p is upscaled; SynthID always on). GA `veo-3.1(-fast)-generate-001` stays on Agent Platform until at least 2026-11-17 (24 fps, 4/6/8 s clips; price [U]).
- **Higgsfield, if ever used:** Kling 3.0 Std T2V is $0.042/s (a 50% promo off $0.084/s). Call `/estimate` first. $5 minimum top-up, credits expire after 1 year, outputs kept ≥7 days. Concurrency depends on the account and model (help centre says 20, docs example shows 4).
- **Limits:** ≤3 slots and ≤12 s on screen. Text-to-video only, no uploads. Generic prompts (no Navy, military, document or archive terms; say "deep blue"). No information-bearing pixels: no text, numbers, people, ships, flags or emblems.
- **Pipeline:** key as an env var, plain curl, immediate download. Keep originals plus a sidecar (provider, model, prompt, params, request_id, UTC time, cost, sha256). Normalise with `scale=1920:1080:flags=lanczos,fps=30,eq=saturation=0.25:contrast=0.85,gblur=sigma=5` and `-g 1`. Composite at 35–50% opacity under a scrim. Reject takes with glyph-like marks, faces or vessels. End card: "ภาพพื้นหลังบางส่วนสร้างด้วย AI".

## 5. Our harness

**Guides.** These exist: CLAUDE.md, BRIEF.md, STORYBOARD.md, frame.md, `harness/check-copy.mjs`, `harness/check-glyphs.mjs`. Add:
- `storyboard.json`: per-scene lines with appears/exit times, assertions, and `passes:false` (the agent may only flip `passes`). From Anthropic's "effective harnesses".
- `qa/fact-check.md`, the claims ledger (claude-video-starter, anything2explainer).
- `qa/ledger.md`, the loop's spine (Osmani).
- `glossary.json`: term → Thai gloss → first scene (Mayer pretraining).
- A "rules learned" section in CLAUDE.md (Böckeler; N01ennn).

**Hooks** (cyxj-remotion-starter pattern):
- `PreToolUse(Edit|Write)` denies nondeterminism, CSS transitions, `repeat` and bounce eases.
- `PreToolUse(Bash)` asks before any full render.
- Deny reads of `.env` and key files, and deny uploads.
- **Fix now:** `scripts/hf` must `unset GEMINI_API_KEY GOOGLE_API_KEY`, and `snapshot` needs `--describe false`. Otherwise it sends frames to Gemini whenever a key is set [V].

| Sensor | Threshold | From |
|---|---|---|
| Spec | 1920×1080, 30/1 CFR, frames = duration×30 ±1, yuv420p tv, BT.709 tags, SAR 1:1 | OVH, extreme-motion-design |
| HyperFrames check | `check --json --samples 45 --at-transitions --strict --tolerance 2`: ok, browser not skipped, 0 errors | HF lint-validate-inspect |
| Contrast | AA: 4.5:1 below 24 px, 3:1 at ≥24 px; target ≥7:1 for primary Thai. Palette [M]: `#111` 18:1, cobalt 7.2:1, `#6b6b6b` 5.1:1, `#059669` 3.6:1 (large text only), `#9a9a9a` 2.7:1 (never readable text) | HF, WCAG |
| Overlap | Visible text boxes (opacity >.95) overlapping >15% of the smaller box: FAIL; any held overlap: FAIL | extreme-motion-design, explainroo |
| Safe area | Text inside 5% graphics-safe (x 96–1824, y 54–1026); meaningful elements inside 3.5% action-safe | EBU R95 (2017) |
| Size | FAIL below 22 px, WARN below 24 px. Primary Thai target ≥48 px; filename ≥36 px. Flags F5 station mono (22 px) and F1 chip (24 px) | cinetic, HF, BBC 7–8% line height |
| Thai lines | ≤35 base chars per line (minus `\p{M}`), ≤2 lines, ≤3 blocks on screen; line-height ≥1.45 body, ≥1.25 display | Netflix Thai I.3/I.12 |
| Reading time | A heuristic, not validated with viewers. Hold runs from settled to exit. Target max(2, 1 + B/12 + .5E + .3N); FAIL below max(1.5, .8 + B/17 + .3E). B = base chars, E = English terms, N = numbers or IDs. >17 cps per frame FAIL, >12 cps WARN; final card ≥3 s; holds ≤70% of runtime. Netflix's 17 cps is a subtitle rate, and its mark exclusion is stated only for line length | Netflix I.16, OVH |
| Text motion | ≤180 px/s while being read; ≤1200 px/s ever | cinetic |
| Freeze | `freezedetect=n=.001:d=4` → 0 events outside declared holds (end card ≤5 s); FAIL if nothing new for >8 s; identical-hash run >.8 s: FAIL | OVH, N01ennn |
| Black / stuck | `blackdetect=d=.1:pic_th=.98:pix_th=.10` → 0; a run of frames matching frame 0 (PSNR) = stuck at t=0 | OVH |
| Pops / flash | A frame that differs from both neighbours by >12 levels on >1% of pixels: FAIL; flashes ≤3/s | OVH isoframes, WCAG 2.3.1 |
| Timing drift | `scdet` cuts within ±2 frames; scene bounds within 1 frame; `motion.json`: `appearsBy(focal,start+.6)`, Ingest→…→Index `before()` chain, `before('#acl-gate','#search-results')`; a missing selector FAILs | HF motion assertions |
| Determinism | 3 timestamps rendered twice (different order, 1 vs 3 workers): identical PNGs or PSNR ≥45 dB | OVH |
| Glyph / tofu | cmap coverage (check-glyphs.mjs); CDP `CSS.getPlatformFontsForNode`: FAIL on any family outside {Plex Sans Thai, Looped, Plex Mono, Sarabun}, e.g. Loma, FreeSerif, Unifont (experimental API, so pin Chromium); lint for U+FFFD, U+25CC, stray marks; block font network requests | OVH, CDP |
| Copy fidelity | DOM strings = copy deck exactly (SourceID, Version, Classification, Access, filename template, pipeline order) | anything2explainer, codebase-video |

`qa.sh` prints one counter line ending in `FAIL=0`. Each non-zero counter names the selector, the time and a fix (Böckeler).

**Loop**
- **Gates:** G2 posed stills (`snapshot --at` mid-hold) approved → build frame by frame (lint + check, ≤3 attempts, then escalate) → G3 rounds → G4 human preview → delivery render.
- **Each G3 round:**
  1. Seek sensors.
  2. Draft render.
  3. MP4 sensors.
  4. Pixel-only review pack: a cell every 0.5 s, 12 per row, ≤4 rows per page, plus ±0.5 s transition strips, from remotion-director `time-overview.ts`.
  5. A **fresh-context critic** sees only the MP4, the pack and the copy: no code, no web (motion-video-kit Gauntlet, remotion-director). It returns {time+region, what it saw, P0–P2}, ≤3 fixes per round. Re-checks mark FIXED, PARTLY or STILL PRESENT.
  6. Confirm fixes on frames decoded from the new MP4, not the preview (claude-video-starter, Tella).
- **Stop:**
  - Done when FAIL=0, all gates pass, every score ≥8 and the mean ≥8.5.
  - Abort a round that neither lowers FAIL nor raises the minimum score. Cap at 6 rounds (Anthropic saw a plateau at 5–15 iterations).
  - Escalate after 3 repeats of one failure signature, or 2 rounds without gain. An issue class seen twice becomes a new rule or sensor.
  - Budget: ≤4 full renders per session, one at a time, 25-min watchdog (extreme-motion-design, mortiflix).
  - Wire the stop through a command-type Stop hook running `qa.sh`, or `/goal` with printed counters (its evaluator runs no tools [V]; whether it sees images is [U]).
  - Compare alternative cuts with order-reversed pairs, which must win 2–0 (crimeacs `compare.py`, which already uses `claude -p`).

**Rubric: "a commander understands it on first viewing"**
- **G-BLUF:** the key message in Thai by 10 s and again in the last 8 s. F1 currently asks a question, and only the "3 ตามสิทธิ์" tracker hints at the answer. Decide whether to add a one-line answer. BLUF is a US Army norm; the RTN norm is [U].
- **G-PROBE:** a cold-read judge scores 6/6, citing frame times. (1) Permission checked before or after search? (2) Which 4 labels on every document and chunk? (3) How are scans read? (4) What does hybrid search combine? (5) Why a reranker before the LLM? (6) What does the filename tell the system, and what not (rights)?
- **G-SENSORS:** FAIL=0.
- **Scored**, each ≥8/10, one isolated judge per dimension, "Unknown" allowed, calibrated on 3 frames the user scores:
  - S1: one idea per frame.
  - S2: plain Thai first, ≤1 new term per ~8 s.
  - S3: readable on one pass.
  - S4: cobalt only on the focal element; ✓/✗ with an icon, never colour alone.
  - S5: the same example document across stages.
  - S6: causality; the wrong way shown once and marked wrong.
  - S7: no invented numbers.
- **Mayer:** modality and redundancy favour narration. Compensate with labels next to their objects and one caption per frame, and offer an optional narrated cut.
- **Pilot:** 2–3 non-technical Thai staff watch once at 1×. Pass if each scores ≥5/6 and all get Q1 right.

**Repos (read and port, never install)**
- **Port:**
  - cinetic thresholds (MIT). Set `HF_CLI`; `hf-finish.sh` otherwise runs `npx hyperframes@0.8.79`.
  - OVH checkers (MIT). Skip its `curl | bash` installer; only tested on macOS.
  - extreme-motion-design lint/layout/qa (MIT).
  - motion-video-kit critic prompts (MIT; its scripts need numpy and scipy).
  - vox-explainer seam-gate (Apache-2.0, `--url` mode only).
  - framejam for stakeholder reviews (MIT, local).
- **Reference only:**
  - onetake, anything2explainer (PolyForm NC; government clause needs legal review).
  - mortiflix, OpenMontage (AGPL).
- **Skip:** Remotion MCP (deprecated), HyperFrames hosted MCP (HeyGen infrastructure), remotion-superpowers (TwelveLabs upload), Code2Video (cloud keys), Blender MCP, kinocut, and the Code2Video benchmark judge (cloud pairwise API; its "82%" figure is undefined).

**Data.** "No training by default" covers commercial Claude accounts only, so confirm this account's plan. Give no thumbs feedback on RTN sessions. Whether RTN rules allow external LLM processing at all is [U].

## 6. Sources

ASCII: https://alexharri.com/blog/ascii-rendering · https://news.ycombinator.com/item?id=46657122 · https://threejs.org/docs/pages/AsciiEffect.html · https://unpkg.com/three@0.186.1/examples/jsm/effects/AsciiEffect.js · https://www.npmjs.com/package/postprocessing · https://react-postprocessing.docs.pmnd.rs/effects/ascii · https://drei.docs.pmnd.rs/abstractions/ascii-renderer · https://github.com/emilwidlund/ASCII · https://code.textmode.art/ · https://www.creativeapplications.net/news/textmode-js-library-for-dynamic-ascii-art-text-graphics-with-real-time-rendering/ · https://github.com/humanbydefinition/p5.asciify · https://github.com/ertdfgcvb/play.core · https://github.blog/engineering/from-pixels-to-characters-the-engineering-behind-github-copilot-clis-animated-ascii-banner/ · https://github.com/CameronFoxly/Ascii-Motion · https://ascii.rest/ · https://news.ycombinator.com/item?id=49993857 · https://tympanus.net/codrops/2026/01/04/efecto-building-real-time-ascii-and-dithering-effects-with-webgl-shaders/ · https://caidan.dev/portfolio/ascii_clouds/ · https://news.ycombinator.com/item?id=46611507 · https://d2lang.com/blog/ascii/ · https://github.com/lukilabs/beautiful-mermaid · https://x.com/codetaur/status/2025378941700014542 · https://www.productioncrate.com/plugins/crates-ascii · https://ffmpeg.org/ffmpeg-devices.html#caca · https://github.com/TheZoraiz/ascii-image-converter · https://github.com/YusufB5/ASCILINE

HyperFrames / Remotion / GSAP: https://github.com/heygen-com/hyperframes · https://hyperframes.heygen.com/concepts/determinism.md · https://hyperframes.heygen.com/prompting/motion.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/skills/hyperframes-animation/references/motion-blur.md · https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-cli/references/lint-validate-inspect.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/skills/hyperframes-creative/references/typography.md · https://raw.githubusercontent.com/heygen-com/hyperframes/main/packages/cli/src/commands/snapshot.ts · https://raw.githubusercontent.com/heygen-com/hyperframes/main/packages/cli/src/telemetry/config.ts · https://github.com/heygen-com/hyperframes/blob/main/docs/guides/mcp.mdx · https://newreleases.io/project/github/heygen-com/hyperframes/release/v0.8.45 · https://gsap.com/standard-license · https://gsap.com/licensing/ · https://www.remotion.dev/docs/license/faq · https://www.remotion.dev/docs/terms · https://www.remotion.dev/docs/gl-options · https://www.remotion.dev/docs/motion-blur/camera-motion-blur · https://www.remotion.dev/docs/ai/mcp

After Effects: https://github.com/Jam3/ae-temporal-to-cubic-ease · https://ae-scripting.docsforadobe.dev/other/keyframeease/ · https://community.adobe.com/t5/after-effects-discussions/json-is-undefined-error/m-p/12741567 · https://www.cgchannel.com/2026/01/adobe-releases-after-effects-26-0-with-native-substance-support/ · https://www.cgchannel.com/2026/09/adobe-releases-after-effects-26-5-and-new-ai-assistant-in-beta/ · https://community.adobe.com/t5/after-effects-beta-discussions/new-vector-workflow-enhancements-in-after-effects-beta/m-p/15567805 · https://github.com/airbnb/lottie-web · https://docs.lottiefiles.com/en/integrations/after-effects/03_import/importing-from-file · https://github.com/iart-ai/motion-design-skills/tree/main/skills/after-effects · https://github.com/Dakkshin/after-effects-mcp · https://github.com/JUNKDOGE-JOE/after-effects-mcp · https://ffmpeg.org/ffmpeg-filters.html#tmix · https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/linear · https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image · https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter · https://itbrief.co.uk/story/adobe-adds-claude-motion-hand-off-to-firefly-video-editor

Higgsfield and alternatives: https://higgsfield.ai/terms-of-use-agreement · https://higgsfield.ai/privacy-policy · https://higgsfield.ai/enterprise · https://higgsfield.ai/creator-hub/help-center/business/team-and-business-higgsfield · https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api · https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent · https://higgsfield.ai/creator-hub/changelog · https://higgsfield.ai/blog/higgsfield-katana · https://docs.higgsfield.ai/docs/help/faq.md · https://docs.higgsfield.ai/docs/concepts/billing-and-retention.md · https://docs.higgsfield.ai/docs/concepts/rate-limits.md · https://docs.higgsfield.ai/docs/concepts/file-uploads.md · https://open.higgsfield.ai/models/kling-video%2Fv3.0%2Fstd%2Ftext-to-video · https://registry.npmjs.org/@higgsfield%2fcli · https://ai.google.dev/gemini-api/docs/pricing · https://ai.google.dev/gemini-api/docs/deprecations · https://ai.google.dev/gemini-api/docs/omni · https://ai.google.dev/gemini-api/terms · https://docs.cloud.google.com/vertex-ai/generative-ai/docs/data-governance · https://runway.com/enterprise-terms · https://runway.com/terms-of-use · https://lumalabs.ai/api/terms · https://lumalabs.ai/legal/tos · https://kling.ai/docs/user-policy · https://github.com/Wan-Video/Wan2.2 · https://raw.githubusercontent.com/Lightricks/LTX-2/main/LICENSE-2_x · https://claude.com/resources/articles/dashboards-and-motion · https://support.claude.com/en/articles/17454997-get-started-with-claude-motion · https://support.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers

Harness repos: https://github.com/ZLHad/OpenVideoHarness · https://github.com/Leonxlnx/cinetic · https://github.com/echris6/motion-video-kit · https://github.com/Zane-0x5a/remotion-director · https://github.com/dev-isaacmello/extreme-motion-design · https://github.com/vincentsch/explainroo · https://github.com/GTKottman/mortiflix-oss · https://github.com/heygen-com/hyperframes-community-skills · https://github.com/chenyuxiaojin/cyxj-remotion-starter · https://github.com/Tejashmakwana/motionmaxxing · https://github.com/feitangyuan/onetake · https://github.com/Vincentwei1021/anything2explainer · https://github.com/OnurGumus/codebase-video · https://github.com/crimeacs/product-demo-director · https://github.com/KyaniteLabs/kinocut · https://github.com/moritzkremb/framejam · https://www.heygen.com/research/introducing-code2video-benchmark · https://github.com/zhuyansen/awesome-claude-video-skills · https://github.com/DojoCodingLabs/remotion-superpowers · https://github.com/calesthio/OpenMontage · https://github.com/showlab/Code2Video · https://github.com/ahujasid/mcp-for-blender · https://github.com/whaleyxbt/claude-motion · https://github.com/DIY-Smart-Code/claude-video-starter

Guides and standards: https://api.fxtwitter.com/N01ennn/status/2107826459804840072 · https://api.fxtwitter.com/N01ennn/status/2108182955671580771 · https://www.anthropic.com/engineering/harness-design-long-running-apps · https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents · https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents · https://martinfowler.com/articles/harness-engineering.html · https://claude.com/blog/getting-started-with-loops · https://code.claude.com/docs/en/goal · https://addyosmani.com/blog/loop-engineering/ · https://www.ibm.com/think/topics/loop-engineering · https://arxiv.org/abs/2609.00006 · https://www.tella.com/blog/how-to-use-remotion-agent-skills-with-claude-code · https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308 · https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/ · https://tech.ebu.ch/publications/r095 · https://chromedevtools.github.io/devtools-protocol/tot/CSS/#method-getPlatformFontsForNode · https://www.w3.org/TR/thai-lreq/ (Group Note Draft 2026-03-20) · https://ugc.futurelearn.com/uploads/files/7d/d6/7dd6188d-c343-4311-b064-ac98d2c95abc/Multimedia_Principles._R._E._Mayer__2020.pdf · https://en.wikipedia.org/wiki/BLUF_(communication) · https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training · https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training

Local evidence: `/tmp/claude-0/-home-user-nave-cloud/133aa86b-fdd3-5acb-8b83-b971282b2787/scratchpad/synth/ramp_plex.py` (Plex Mono ramp, 2026-10-20) and `/tmp/claude-0/-home-user-nave-cloud/133aa86b-fdd3-5acb-8b83-b971282b2787/scratchpad/work/` (bench.mjs, thai_ramp.py, enc_test.py).

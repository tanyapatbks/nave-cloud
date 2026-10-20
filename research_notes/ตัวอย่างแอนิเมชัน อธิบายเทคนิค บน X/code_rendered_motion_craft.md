# Code-rendered motion-graphic explainers on X (2025–2026): standout examples and the craft behind them

Scope note: covers explainers shared on X that were made with AI coding agents and code-based video engines (Claude Code / Opus with Remotion, HeyGen HyperFrames, GSAP/HTML compositions, plain-JS `seek(t)` renderers, Anthropic's Claude Motion) plus the open-source "motion design skills" ecosystem. The target use is a ~90 s 16:9 explainer about permission-aware RAG for non-technical viewers and executives, with Thai on-screen text and English technical terms.

Method: post text, author, date, engagement and media URLs came from `api.fxtwitter.com` (fetched 2026-10-20, so engagement is a snapshot). 24 videos were downloaded into `media/{slug}/video.mp4` next to this file. For each one I built a 1-frame-per-~1 s timestamped contact sheet (`media/{slug}/contact.png`), and for four of them full-resolution detail frames (`media/{slug}/detail.png`). `media/{slug}/meta.txt` records the measured fps, audio-track loudness and the number of hard cuts (ffmpeg scene score > 0.30). Statements marked "observed" come from looking at those frames, not from captions. I did not listen to the audio: "audio present" means a non-silent track exists, not that it was checked for voice-over or music.

## Key Question 1: Which posts show the best explainer-style results (data pipelines, system architecture, charts, step-by-step processes)? Who made them, with which engine/skill, and how much engagement did they get?

### Takeaway
Few diagram-heavy technical explainers exist among the viral "code-rendered" posts. Most of the September 2026 Opus 5.5 wave was showreels, launch promos and music videos. The strongest true explainers are:
- Addy Osmani's 40 s "how browsers work" (system pipeline)
- Anthropic's own Claude Motion launch, which turns a dashboard into a story
- Alisa Qian's 132 s "Where does fat go?" science explainer
- @kimmonismus's 3-minute attention/AI history
- @IterIntellectus's Western-civilization film, the most viral explainer-format piece at 15.15M views but not technical
- smaller but instructive pipeline and architecture pieces made with HyperFrames and Claude Motion

Engagement tracks account reach and launch timing far more than craft. Several of the best-crafted pieces have under 5k views.

### Cited Findings

#### Ranked standouts (diagram-heavy or technical explainers)

**E1. "How browsers work" in 40 seconds, by Addy Osmani (@addyosmani)**
- Link: [x.com/addyosmani/status/2103009037164110327](https://x.com/addyosmani/status/2103009037164110327). Posted 2026-09-24. 2,410 likes, 217,919 views, 1,763 bookmarks ([fxtwitter data for the post](https://x.com/addyosmani/status/2103009037164110327)).
- Author bio reads "Claude Code @anthropicai", so the author is an Anthropic insider ([post](https://x.com/addyosmani/status/2103009037164110327)).
- Engine: the caption says "Claude Opus 5.5 drew each frame of this animation in JavaScript". The renderer and prompt are not disclosed, so the engine is unverified. ([post](https://x.com/addyosmani/status/2103009037164110327))
- Format: 40 s, 16:9, 1920×1080 source, 24 fps, audio track present ([video](https://x.com/addyosmani/status/2103009037164110327); `media/addy-how-browsers-work/meta.txt`).
- Topic: the browser pipeline. URL → DNS lookup (URL split into scheme/host/path) → TCP+TLS handshake → HTTP/2 "many streams, one connection" → bytes reach the renderer → parse HTML into the DOM → "scripts can pause the parser" → CSS becomes computed style → layout → paint ("a list of draw calls") → layers → raster tiles in parallel → composite on the GPU → V8 tiers (Ignition → Sparkplug → Maglev → Turbofan) → garbage collection (young/old generations) → site isolation → "one browser, many processes" → recap title. Observed. ([video](https://x.com/addyosmani/status/2103009037164110327))
- Craft, observed in the [video](https://x.com/addyosmani/status/2103009037164110327):
  - Two alternating visual registers. One is a warm cream "storybook" world with diagonal stripes and a red tomato-like mascot carrying the request. The other is a navy "blueprint" diagram world with hairline nodes, monospace labels and pink focus rings.
  - Each scene carries a small lowercase label top-left ("dns lookup", "layout: size and position") and a step dial top-right ("1 · fetch" … "6 · composite").
  - Metaphors map to mechanisms: the DOM is a growing vine, garbage collection is a farm with "young"/"old" pens and "roots", processes are a village with one house per site.
  - A persistent "hello, web" sample page is carried from paint to raster to composite.
  - Hard cuts land on an exact 2.0 s cadence for the first 20 s (cuts at 2, 4, 6 … 20 s), then every 2–3 s: 17 cuts in total, roughly one concept per 2.3 s.
- What to borrow:
  1. Alternate a metaphor world with a precise diagram world, so execs get the story and engineers get the mechanism.
  2. Persistent chrome: a scene label plus a numbered step counter, so viewers always know where they are in the pipeline.
  3. One "hero object" (the request or the page) that travels through every stage.

  Caution: 2 s per concept is too fast for a non-technical Thai audience; see Key Question 4.

**E2. Claude Dashboards + Claude Motion launch film, by Anthropic (@claudeai)**
- Link: [x.com/claudeai/status/2108271552991252810](https://x.com/claudeai/status/2108271552991252810). Posted 2026-10-08. 60,489 likes, 4,598 reposts, 11,348,298 views, 39,858 bookmarks ([post](https://x.com/claudeai/status/2108271552991252810)).
- Engine: Claude Motion, Anthropic's beta feature. "Claude writes each one as code, with no video model involved, so you can change any word, number, or timing, then export an MP4" ([Claude post](https://x.com/claudeai/status/2108271558170976743)). Motion is in beta on Team and Enterprise, starts with "/motion", and exports MP4. Anthropic's help article lists no resolution, fps, length, font or language details ([Anthropic article](https://claude.com/resources/articles/dashboards-and-motion)).
- Format: 81.6 s, 16:9, 24 fps, audio present, only 1 hard cut. Transitions are continuous zooms and camera moves. ([video](https://x.com/claudeai/status/2108271552991252810); `media/claude-motion-launch/meta.txt`)
- Topic, observed: a bike-share dashboard becomes an all-hands animation. The film is a hybrid: it includes a live-action presenter tagged "NAME Nate / TEAM Design".
  - It opens on an isometric 3D city with station call-outs ("Fernhill 21 bikes") and a clock ticking 6:10 → 6:35 am.
  - It pulls back to reveal a player and a dashboard (KPIs 445K / 2,999 / 21% / 4,200 / 71% / 92).
  - The user's on-screen prompt reads: "@Claude turn this into an animation for our all-hands. The whole company is watching so keep it simple: the hill running dry by 8:15, and the 92 bikes we carry back up."
  - Process captions follow ("Projecting dashboard coordinates into a 3D city grid", "Tracing every morning ride from the hilltop to downtown"), then the 3D city story.
  - An edit comment reads "Hold on the empty dock a beat longer so it lands".
  - Export targets are shown, and the end line is "Claude makes it. You steer it."

  Observed in the [video](https://x.com/claudeai/status/2108271552991252810) (detail frames: `media/claude-motion-launch/detail.png`).
- Craft: a warm off-white canvas, terracotta Claude accent, teal for "downtown" and mustard for "the hill". Two data colours plus grey for everything else. A time-of-day clock is the narrative spine, the camera move links dashboard to world, and type sits on a curved path along the bike route. Observed. ([video](https://x.com/claudeai/status/2108271552991252810))
- What to borrow:
  1. Brief Claude with the single message and the two numbers that matter ("keep it simple: X by 8:15, and the 92…"). That is the exec-explainer recipe.
  2. Colour only the 2 entities in the story and grey the rest.
  3. Direct edits in timing language ("hold … a beat longer so it lands").

**E3. "Where does fat go?", by Alisa Qian (@alisaqqt)**
- Link: [x.com/alisaqqt/status/2102749340527919471](https://x.com/alisaqqt/status/2102749340527919471). Posted 2026-09-23. 12 likes, 1,977 views, 7 bookmarks ([post](https://x.com/alisaqqt/status/2102749340527919471)).
- Bias note: the author's bio is "Product Marketing Lead … @atlas_cloud_ai", and the end card credits "VOICE & MUSIC VIA ATLAS CLOUD", so the piece is partly promotional ([post](https://x.com/alisaqqt/status/2102749340527919471); `media/alisa-oneprompt-explainer/detail.png`).
- Engine: "I had Claude Opus 5.5 make me an explainer with one prompt. Every frame is JavaScript it wrote, no video model" ([post](https://x.com/alisaqqt/status/2102749340527919471)). Renderer not named, prompt not shared.
- Format: 132.5 s, 16:9, 30 fps, voice-over and music (per the on-screen credit), 0 hard cuts ([video](https://x.com/alisaqqt/status/2102749340527919471)).
- Topic and structure, observed:
  - Hook: "You lose 10 kg of fat. Where does it go?"
  - Misconception data: "150 experts asked", with a grid of figures, most of them wrong.
  - Chapters with numbered chips: "01 WHAT FAT IS" (a triglyceride molecule with a carbon/hydrogen/oxygen legend), "MASS IS CONSERVED", "02 BREAKING IT DOWN" (atoms re-assemble into CO₂ and H₂O), "03 THE WAY OUT" (lungs, exhale), "04 THE MATH" (10 kg + 29 kg O₂ → a stacked bar of 8.4 kg out as CO₂ / 1.6 kg as water, with the source "MEERMAN & BROWN, BMJ 2014" on screen), and "05 SO, BREATHE HARDER?" ("BREATHE FASTER?" is crossed out → "JUST DIZZY").
  - "MOVE MORE" (a bar plus an EAT/BURN balance scale), a RECAP checklist, then a callback to the hook with "84%".

  Observed. ([video](https://x.com/alisaqqt/status/2102749340527919471))
- Craft, observed: a risograph/print look with a cream paper ground, halftone textures, a three-ink palette (pink, yellow, blue) and print registration marks in the corners. Headlines are heavy condensed sans in two inks; narration captions are monospace in a cream box at bottom-centre. Diagrams are drawn as clean molecule graphs, and the source citation sits on the data frame. ([video](https://x.com/alisaqqt/status/2102749340527919471))
- What to borrow:
  1. Story spine: myth → question → mechanism → math with the source on screen → the misconception killed → practical takeaway → recap → callback to the hook.
  2. Numbered chapter chips for orientation.
  3. A restrained three-ink palette with texture, so flat vector work doesn't look "default AI".

**E4. Three-minute history of AI, from "Attention Is All You Need" to AGI, by @kimmonismus**
- Link: [x.com/kimmonismus/status/2102844654169575547](https://x.com/kimmonismus/status/2102844654169575547). Posted 2026-09-23. 2,723 likes, 205,309 views, 1,662 bookmarks ([post](https://x.com/kimmonismus/status/2102844654169575547)).
- Engine: "made 100% in code by Claude in Claude Code: ~7,400 lines of React/TypeScript (Remotion), every image drawn in SVG and Canvas, an open-source TTS voice, and a score synthesized in Python … about 1h" ([post](https://x.com/kimmonismus/status/2102844654169575547)).
- Format: 180 s, 16:9, about 30 fps, audio present, 0 hard cuts ([video](https://x.com/kimmonismus/status/2102844654169575547); `media/kimmonismus-ai-history/meta.txt`).
- Topic, observed: how attention works, then scale, then chat, multimodality, reasoning, tools and agents.
  - The example sentence "The animal didn't cross the street because it was too tired" appears in monospace.
  - Captions: "Machines once read one word at a time." / "By the end, it forgot the beginning." Then attention lines radiate from the token "the" to every word: "Then every word saw every other." / "Not one after another. All at once."
  - The paper appears with GPT/GPT-2/GPT-3 labels and parameter-count exponents, then "115,411 → 1,000,000 users in 5 days" on a globe.
  - Later: the strawberry letter-count problem ("It sees chunks, not letters", "Now it thinks before it speaks"), then tools and sub-agents ("Then it delegated. To copies of itself.").
  - It ends on "Attention Is All You Need → AGI?"

  ([video](https://x.com/kimmonismus/status/2102844654169575547))
- Craft, observed: one glowing hero token ("the" in a pill) stays near the centre of the whole 3-minute film as protagonist and camera anchor. The background is near-black with an amber/gold particle palette and a pink accent for multimodality. One serif caption line per beat sits at bottom-centre, with one coloured italic keyword per line revealed word by word. A small year tag sits top-left. There are no hard cuts: scenes evolve around the persistent token. ([video](https://x.com/kimmonismus/status/2102844654169575547))
- What to borrow:
  1. A single persistent protagonist object; for us, a document card or permission token.
  2. One short caption sentence per beat, with one emphasised word.
  3. Build the abstract mechanism (attention lines) on a concrete example sentence the viewer can read.

**E5. Western civilization in about two minutes, by @IterIntellectus**
- Link: [x.com/IterIntellectus/status/2103212539895017864](https://x.com/IterIntellectus/status/2103212539895017864). Posted 2026-09-24. 61,488 likes, 15,154,593 views, 33,720 bookmarks ([post](https://x.com/IterIntellectus/status/2103212539895017864)).
- Engine: the post says only "i asked claude to make a video on western civiization", and the self-thread adds no process details. Engine, prompt and tooling are unverified. ([post and thread](https://x.com/IterIntellectus/status/2103212539895017864)) A curator described it as "2,500 years in just over two minutes, told in line drawings and on-screen words, cut to the beat" ([Eric Buess thread](https://x.com/EricBuess/status/2103226548413182366)).
- Format: 136 s, 16:9, 30 fps, loud audio, 52 hard cuts. Cuts come in rapid beat-locked runs, for example every ~0.4 s between 76 and 79 s. ([video](https://x.com/IterIntellectus/status/2103212539895017864); `media/iter-western-civ/meta.txt`)
- Craft, observed:
  - Line-drawn engravings on parchment (Parthenon, Archimedes' lever, Antikythera gears, aqueduct, Roman road map, printing press, steam engine), switching to a dark-space palette for the modern era. The palette encodes the era.
  - Wide-tracked serif small-caps headlines in two lines, with one word in red or gold ("WE INVENTED DEMOCRACY.", "ALL ROADS LEAD TO ROME.", "THE HUMAN LIFESPAN. DOUBLED.").
  - Big counters and charts as punctuation (lifespan 29 → 72, "EXPONENTIAL").
  - A persistent HUD: year bottom-left ("AD 1969"), a timeline progress bar, and a "K 0.680" Kardashev readout bottom-right.
  - A flame motif bookends the film ("PROMETHEUS STOLE FIRE" … "THE FIRE IS STILL BURNING").

  ([video](https://x.com/IterIntellectus/status/2103212539895017864))
- What to borrow:
  1. A persistent progress HUD (where are we in the process).
  2. Two-line headlines with one accent word.
  3. Rhythm variety: long holds for ideas, rapid beat-locked runs for "and then, and then".

  Not a technical diagram piece; it is included as the most-viewed explainer-format reference.

**E6. GA4 revenue mix with Claude Motion, by Himanshu Sharma (@analyticsnerd)**
- Link: [x.com/analyticsnerd/status/2108528768079876510](https://x.com/analyticsnerd/status/2108528768079876510). Posted 2026-10-09. 5 likes, 4,646 views, 8 bookmarks ([post](https://x.com/analyticsnerd/status/2108528768079876510)). Featured in Min Choi's Claude Motion roundup ([thread](https://x.com/minchoi/status/2108585619882410194)).
- Engine: Claude Motion. The caption says "Visualising GA4 data", but the title frame reads "Oct 2025 – Sep 2026 · dummy data". Observed. ([video](https://x.com/analyticsnerd/status/2108528768079876510))
- Format: 45 s, about 1.88:1 (1920×1020), about 30 fps, silent audio track, player chrome visible ([video](https://x.com/analyticsnerd/status/2108528768079876510)).
- Structure, observed:
  1. Assertion headline first: "One channel rewrote the revenue mix."
  2. A month-by-month bar-chart race. Organic Search is amber, Paid Social is blue, every other channel is muted grey, and the month label sits top-right.
  3. A line chart of share over time with end-of-line labels and a "Crossover" annotation.
  4. Count-up KPIs ($9.7K → $76.0K; $230.4K → $312.4K).
  5. A "SO WHAT" card: "Meta is now a primary revenue channel. Budget, attribution and reporting should treat it that way", with a "Next:" action line.

  ([video](https://x.com/analyticsnerd/status/2108528768079876510))
- What to borrow:
  1. Headline the conclusion, show the evidence, end on "so what" and "next".
  2. Highlight two series against grey context.
  3. Label illustrative data honestly on screen.

**E7. "The Day Our Software Started Fixing Itself": an X article turned into an explainer, by Misbah Syed (@MisbahSy)**
- Link: [x.com/MisbahSy/status/2045159435505660161](https://x.com/MisbahSy/status/2045159435505660161). Posted 2026-04-17. 11 likes, 3,356 views, 12 bookmarks. The source article is "The Day my SaaS Started Building Itself". ([post](https://x.com/MisbahSy/status/2045159435505660161); [source article](https://x.com/MisbahSy/status/2045138326852960296))
- Engine: "converting an X article to a visual explainer using HyperFrames by @HeyGen" ([post](https://x.com/MisbahSy/status/2045159435505660161)).
- Format: 103 s, 16:9, 30 fps, very quiet audio (mean −38.6 dB), 0 hard cuts ([video](https://x.com/MisbahSy/status/2045159435505660161)).
- Topic, observed: an automated bug-fix pipeline.
  - Line-icon story beats: an email arrives at 11:02 PM, an hourglass reads "2H 30M", then "WHAT IF THE ERROR FILED THE BUG?"
  - "THE MACHINE" is a five-card pipeline built left to right with arrows: Error toast fires → Server action + context → Claude Code Routine → Session clones, reads, fixes → Pull Request opens. Subtitle: "five steps · no human in the middle".
  - Incident: "3:00 AM — PROVIDER DOWN" with a 7,460 → 10,000 error counter.
  - "THREE LAYERS OF DEFENSE": shields I/II/III for dedup, a cap of 3 and a circuit breaker.
  - "CONTEXT IS THE WHOLE THING": a structured error card.
  - Payoff: "The bug got fixed by the bug reporting itself", with 11 / 0 stats.

  ([video](https://x.com/MisbahSy/status/2045159435505660161))
- Craft, observed: parchment ground, serif small-caps headings, one deep-red accent on the key word, consistent line-icon stroke weight. It is slide-like: centred titles, wide empty margins, about 10–15 s per section, and identical stills for several seconds ([video](https://x.com/MisbahSy/status/2045159435505660161)).
- What to borrow:
  1. A left-to-right card pipeline built one step at a time, with a one-line italic caption summarising the whole flow.
  2. "Layers of defense" as numbered shields; this maps directly onto permission checks.
  3. An incident beat (a 3 AM failure) that dramatises why the mechanism matters.

**E8. Visual changelog with Claude Motion, by Nate Parrott (@nateparrott), Anthropic design**
- Link: [x.com/nateparrott/status/2108331084660592900](https://x.com/nateparrott/status/2108331084660592900). Posted 2026-10-08. 72 likes, 6,915 views, 51 bookmarks. The author's bio is "design @ @anthropicai" ([post](https://x.com/nateparrott/status/2108331084660592900)).
- Engine: the prompt was "make a visual changelog of the 3 newest features in this repo, using a Claude Motion artifact" ([post](https://x.com/nateparrott/status/2108331084660592900)).
- Format: 48 s, 9:16, 30 fps, no audio track ([video](https://x.com/nateparrott/status/2108331084660592900)).
- Craft, observed: a navy ground and an app-icon intro ("What's new in feeed"). Three features follow, each with a giant outlined numeral (1, 2, 3) behind a heavy rounded two-tone headline: "No feed? Subscribe anyway.", "One story at a time.", "Read it on the plane." A small tag pill sits above each ("NEW · OFFLINE TAB"). The headline then shrinks to top-left and a phone mock with the real UI flow slides in. The piece ends on a CTA with recap chips. Each feature repeats one template, about 13 s each. ([video](https://x.com/nateparrott/status/2108331084660592900))
- What to borrow:
  1. Numbered repetition: one template per step makes a sequence feel designed.
  2. Benefit-phrased headlines instead of feature names.
  3. A big headline first, then a shrink-to-corner hand-off to the evidence.

**E9. "One A100, Two Isolated Inference Tenants", a layer-by-layer GPU MIG explainer, by Michael Guo (@Michaelzsguo)**
- Link: [x.com/Michaelzsguo/status/2052354444331815386](https://x.com/Michaelzsguo/status/2052354444331815386). Posted 2026-05-07. 5 likes, 732 views ([post](https://x.com/Michaelzsguo/status/2052354444331815386)).
- Engine: "the free Hyperframes plugin" inside Codex, plus "a small skill for this workflow". The flow was "idea -> artifact -> storyboard -> animation -> music -> MP4", built from an existing infographic. This is OpenAI's Codex, not Claude. ([post](https://x.com/Michaelzsguo/status/2052354444331815386))
- Format: 22 s, 9:16, 30 fps, music, 0 hard cuts ([video](https://x.com/Michaelzsguo/status/2052354444331815386)).
- Craft, observed: a dark-green technical poster that builds top to bottom, about one layer per second. Rows run 1 Tenant/Client → 2 Model serving → 3 Container → 4 NVIDIA Container Toolkit → 5 MIG GPU instances → 6 hardware partition (compute slices, HBM2e memory) → 7 physical A100. Side panels follow ("Isolation Guarantee Matrix", "End-to-End Data Flow"), then a legend and a "Central Lesson: MIG handles GPU isolation. Docker handles OS isolation". The two tenants are colour-coded cyan and orange. Nothing exits, so the last frame is a dense poster with phone-unreadable text. ([video](https://x.com/Michaelzsguo/status/2052354444331815386))
- What to borrow:
  1. Stack-building suits layered architectures (user → app → retrieval → index → ACL store).
  2. Colour-code identities, such as two users with different permissions.

  Avoid the end state where everything stays on screen at small size.

**E10. 人类编程进化史 ("history of programming"), Chinese captions, by @BTCqzy1 (爱丽丝呀！)**
- Link: [x.com/BTCqzy1/status/2051866228646691321](https://x.com/BTCqzy1/status/2051866228646691321). Posted 2026-05-06. 3,298 likes, 589 reposts, 687 replies, 641,258 views, 3,524 bookmarks ([post](https://x.com/BTCqzy1/status/2051866228646691321)).
- Engine: Codex plus the HyperFrames plugin, from a one-line Chinese prompt ("帮我做一个人类编程进化史的视频 用 HyperFrames by HeyGen", visible in the screen recording) ([video](https://x.com/BTCqzy1/status/2051866228646691321)).
- Format: 47.6 s, 16:9, 60 fps, loud audio. About the first 25 s is a screen recording of installing and prompting; the generated film is about 22 s. ([video](https://x.com/BTCqzy1/status/2051866228646691321))
- Craft, observed: era scenes run punch cards (sepia) → a CRT with assembly and `printf("Hello World")` → global git collaboration as a node graph → AI agent panels → "What's next?". Each scene pairs a small black English label chip ("1940s | Punch Cards", "1970s | C Language", "2000s | Open Source") with a bold Chinese sans headline block, right-aligned ("程序第一次被压进纸里", "机器指令被封装成人类语言", "一个人的代码变成全球协作"). ([video](https://x.com/BTCqzy1/status/2051866228646691321))
- What to borrow: an English-term chip plus a native-language headline is a direct template for Thai headlines with English technical terms (see Key Question 5).

#### Useful contrast and baseline examples (not top-tier, but instructive)
- **The 2025 baseline: "What is Next.js?" with Remotion, by Jason Zhou.** [x.com/jasonzhou1993/status/1948355284591956447](https://x.com/jasonzhou1993/status/1948355284591956447). Posted 2025-07-24. 1,472 likes, 201,108 views. The caption reads "Claude code just made this whole video using remotion. One shot". Observed: 34 s, black void, inconsistent title placement (left versus centre), emoji-icon feature cards, a file-tree → routes diagram, server → client boxes, GET/POST pills, small text and a fade-in on everything. This is the "generic AI-made" look that later guides warn about. ([video](https://x.com/jasonzhou1993/status/1948355284591956447))
- **"State of Airflow 2025" survey data story with Remotion and Playwright, by Kaxil Naik.** [x.com/kaxil/status/2014094200111833257](https://x.com/kaxil/status/2014094200111833257). Posted 2026-01-21. 0 likes, 324 views. The data was scraped from Typeform with a Playwright skill. Observed: horizontal bar charts with count-up percentages and a "Key Takeaway" end card. The charts occupy only the top third of the frame, text is tiny and contrast is low. The predecessor clip came from the prompt "Make me an animated data pipeline demo with spring physics and a typewriter effect" ([post](https://x.com/kaxil/status/2014083353511620857)). ([video](https://x.com/kaxil/status/2014094200111833257))
- **"Claude Agent SDK Loop" flowchart (Remotion + claude-in-chrome), by elvis (@omarsar0).** [x.com/omarsar0/status/2021222728393687217](https://x.com/omarsar0/status/2021222728393687217). Posted 2026-02-10. 333 likes, 46,631 views, 543 bookmarks. Observed: 16 s. The tree Task → Gather Context → Take Action → Verify Output → Final Output grows branch by branch (SubAgents, Compacting, Agentic Search, MCP, LLM-as-a-Judge, and so on), adds a loop-back arrow, and ends on a one-line recap. Labels are too small for video. The process note is in Key Question 3. ([video](https://x.com/omarsar0/status/2021222728393687217))
- **"How to use the Manim skill inside Hermes Agent", by YanXbt (@IBuzovskyi).** [x.com/IBuzovskyi/status/2066724948702626255](https://x.com/IBuzovskyi/status/2066724948702626255). Posted 2026-06-16. 305 likes, 34,054 views, 559 bookmarks. Made with Hermes Agent and Manim, not Claude. Observed: 101 s at 60 fps. Monospace type, rows of coloured outline "pill" chips (LOAD → PLAN → CODE → RENDER → FIX → EXPORT; TOPIC/AUDIENCE/SCENES/SPECS/DELIVERY), the same top-centre title layout every scene, large empty areas, and a low-contrast prompt card. Competent but templated. ([video](https://x.com/IBuzovskyi/status/2066724948702626255))
- **The HyperFrames launch video, made in Claude Code, by HeyGen.** [x.com/HeyGen/status/2044827454460871072](https://x.com/HeyGen/status/2044827454460871072). Posted 2026-04-16. 8,328 likes, 3,013,575 views, 13,594 bookmarks. Observed: 49.8 s with 16 cuts. Serif kinetic type on cream ("Anything a browser can render can be a frame in your video."), a presenter segment, technique tiles, and a minimal vertical pipeline diagram (Agent "writes HTML" → Renderer "captures every frame" → MP4), with icon nodes on a thin rule, serif labels and tiny mono sub-labels. ([video](https://x.com/HeyGen/status/2044827454460871072))
- **"Make videos just with Claude Code", Remotion's Agent Skills launch.** [x.com/Remotion/status/2013626968386765291](https://x.com/Remotion/status/2013626968386765291). Posted 2026-01-20. 21,925 likes, 18,870,664 views, 38,288 bookmarks. Observed: an 8 s terminal-typing clip in a 3D-tilted window, then a logo lockup. This is the most-viewed Remotion clip and it is not an explainer at all: reach came from the announcement. ([video](https://x.com/Remotion/status/2013626968386765291))
- **An animated repo-list infographic, by NO1ennn (@N01ennn).** [x.com/N01ennn/status/2108182955671580771](https://x.com/N01ennn/status/2108182955671580771). Posted 2026-10-08. 5,881 likes, 482,412 views, 14,038 bookmarks. It carries a Community Note saying the "Netflix engineers" claim is incorrect and that the repos are by independent developers. Observed: 22.7 s at 976×1026. One static dashboard layout cycles a highlight and a dashed connector from repo cards to a central Opus mascot, with tiny text. Engagement was driven by the list content. ([post and video](https://x.com/N01ennn/status/2108182955671580771))
- **Adjacent non-video technical explainers.** Ryan Sael's interactive "lens lab" explaining camera focus (16,333 likes, 3,546,982 views; "1 hour 26 minutes in one shot, $25.66 API cost") is a web page with a screen-captured video, not a rendered motion piece ([post](https://x.com/RyanSael/status/2102591147927654847)). Vox's "Anatomy" skill builds interactive "machines" for concepts, such as a cache shown as a pin-tumbler lock ([post](https://x.com/Voxyz_ai/status/2109720762714333323)).

#### Trend-defining non-explainer posts, cited for craft and process
- The "showreel" smoke-test prompt on Max effort: 17,198 likes and 2,300,572 views ([Stephan Livera](https://x.com/stephanlivera/status/2103315922098470926)). Repeated one-shot on xhigh: 816 likes and 141,799 views ([Rob Hallam](https://x.com/robj3d3/status/2103875898349088830)).
- An open XML UI-morph template: 12,672 likes, 1,169,810 views, 21,032 bookmarks ([zero / @twoclipping](https://x.com/twoclipping/status/2103273003555402193)). The MakerMap product explainer using the same spec: 237 likes, 17,637 views ([Martijn Verbove](https://x.com/verbove/status/2103483957266268381)).
- A 142 s music video from a ~5-minute dictated prompt and a 12-hour run: 11,222 likes and 4,017,554 views ([donald](https://x.com/donaldjewkes/status/2102801274173587569); [full prompt](https://x.com/donaldjewkes/status/2102801469976248500)).

### Inferences
- The genuinely technical explainers that look best (E1, E3, E4) share three things: a persistent protagonist object, a strong but restrained art direction (storybook/blueprint, risograph, gold-on-black), and on-screen orientation devices (step counters, chapter chips, year tags). The weaker technical pieces (Next.js, Airflow, Agent SDK loop, the Hermes tutorial) are "slides with motion": centred titles, small text, empty space, uniform fades.
- Engagement is a poor proxy for craft. The best-crafted science explainer (E3) has 1,977 views, while an 8 s logo sting (Remotion) has 18.9M. For quality benchmarking, use the frames, not the counts.
- E2 (Anthropic's launch) is the closest match to an executive audience. One business message, two highlighted numbers, a concrete world-metaphor and an edit loop in plain language.

### Gaps
- Addy Osmani (E1) and @IterIntellectus (E5) did not disclose prompt, renderer or iteration count, so "how" is unverified for the two strongest technical and narrative pieces.
- No post was found of a permission-aware RAG, access-control or security explainer made this way. The closest analogues are E7 (pipeline plus defense layers) and E9 (multi-tenant isolation).
- A "five-minute UMAP explainer for undergraduates" mentioned in a search-engine summary could not be located on X, so it is unverified.
- Not downloaded or viewed: HeyGen's "HyperFrames in Claude Design" (40 s), HyperFrames Studio (80.8 s), Min Choi's Dashboards+Motion explainer (51.6 s), Laura Burkhauser's Claude Motion infographic (29.4 s).

## Key Question 2: What visual and motion craft do the strongest pieces share (camera moves, kinetic typography, easing and timing, staggered reveals, depth/parallax, colour systems, restrained palettes, grid/layout discipline, sound design)?

### Takeaway
The craft that separates strong pieces is mostly restraint plus continuity. Specifically:
- one accent colour that means something
- a persistent object or camera that carries the viewer between states instead of generic cuts or fades
- a time-coded beat grid
- easing that varies by role: ease-out in, faster ease-in out, springs for physical UI
- one emphasised word per line
- orientation chrome
- holds long enough to read

Sound is synthesized or placed on the same timeline as the picture.

### Cited Findings

#### Camera and continuity
- "Prefer persistent objects over cuts … that's what makes it feel designed rather than assembled". "Every transition is motivated by an object on screen … No generic wipes". "One hero moment per video … Build to it; don't spend it early." ([whaleyxbt/claude-motion motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md))
- The UI-morph spec: "One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur … The camera zooms so each state fills the frame" ([twoclipping template](https://x.com/twoclipping/status/2103273003555402193)). The MakerMap version adds "Content enters after its container starts morphing and leaves before the next morph so text never overlaps" and "Never fade black directly into the accent color. Move an accent element between states instead" ([verbove](https://x.com/verbove/status/2103483957266268381)).
- Observed: the Claude Motion launch uses 1 hard cut in 81.6 s, linking dashboard and 3D city by camera move ([video](https://x.com/claudeai/status/2108271552991252810)). The kimmonismus film has 0 hard cuts in 180 s around a persistent token ([video](https://x.com/kimmonismus/status/2102844654169575547)). Addy's film instead uses hard cuts on a 2 s grid but keeps continuity through the mascot and the "hello, web" page ([video](https://x.com/addyosmani/status/2103009037164110327)).
- HeyGen's breakdown prompts are written as camera direction:
  - "push the camera in and travel down the list in one continuous move … Keep the checkbox column locked horizontally so it only reads as growing and moving down"
  - "Lay fifteen app windows on one flat plane … Fly the camera across the plane … then push into one of them"

  ([Jake Moran / HyperFrames breakdown video](https://x.com/jake11moran/status/2085827290756481476); `media/jake-hyperframes-breakdown/detail.png`)
- Rexan Wong: give notes "like a director: 'slow every zoom to 0.7x', 'hard cut here', 'push in on the button'"; "camera words get exactly the change you want" ([post](https://x.com/rexan_wong/status/2103707054108299437)).
- Transitions carry meaning: "Crossfade = 'this continues'; Hard cut = 'wake up' / disruption; Slow dissolve = 'drift with me' … You crossfade everything" ([HyperFrames motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).

#### Easing and timing, with numbers
- whaleyxbt's defaults ([motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)):
  - entrances `bezier(0.16, 1, 0.3, 1)`
  - exits `bezier(0.6, 0, 0.9, 0.35)`, at about half the entrance duration (0.35–0.55 s versus 0.7–1.25 s)
  - state-to-state moves `bezier(0.65, 0, 0.35, 1)`
  - linear only for continuous drift
  - word stagger about 0.09 s, list items 0.2–0.25 s
  - word reveal about 0.8 s with a mask
  - typing about 0.035 s per character
  - scenes overlap ("Hard gaps read as 'loading'")
- HyperFrames guardrails ([motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)):
  - "Don't use the same ease on every tween … no more than 2 independent tweens with the same ease in a scene"
  - "The slowest scene should be 3× slower than the fastest"
  - "Don't enter everything from the same direction"
  - "Don't start at t=0. Offset the first animation 0.1-0.3s"
  - speed means weight: fast 0.15–0.3 s, medium 0.3–0.5 s, slow 0.5–0.8 s, very slow 0.8–2.0 s
  - scene structure is "Build (0-30%) / Breathe (30-70%) / Resolve (70-100%)"
  - "Total stagger sequence under 500ms regardless of item count"
  - "Stagger in order of importance, not DOM order"
- Springs: "Closed-form springs everywhere with only a tiny overshoot. If a value changes target multiple times, sum one spring per change" ([verbove](https://x.com/verbove/status/2103483957266268381)). whaleyxbt's presets: default settle 14/140/0.8 (damping/stiffness/mass), pop 9–11/200–230/0.7, and an elastic accent "one hero moment per video, not more" ([motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)). 0xMovez's tiers: snappy UI, default containers and camera, heavy for big type, playful mascots with visible overshoot; "Tiny overshoot on UI, none on type" ([0xMovez article](https://x.com/0xMovez/status/2104216919033192746)).
- Beat grids: "120 BPM grid. Something happens on every beat" ([verbove](https://x.com/verbove/status/2103483957266268381)). The Sunwood skill defaults to "120 BPM / 60 FPS grid (1 beat = 0.5 s = 30 frames)", with every cut written as `b(n)` ([Sunwood-ai-labs/hyperframes-motion-reel-skill](https://github.com/Sunwood-ai-labs/hyperframes-motion-reel-skill)). Observed: Addy's cuts sit on exact 2.0 s intervals for the first 20 s, i.e. one 4/4 bar at 120 BPM (inferred link to BPM; the BPM itself is unverified) ([video](https://x.com/addyosmani/status/2103009037164110327)).

#### Typography
- whaleyxbt ([motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)):
  - at most three families: a display serif, a UI sans (Inter) and a mono for labels
  - display type about 138 px on a 1080 canvas with −0.02 em tracking
  - "One accent per line: a single italic word in the accent color carries the point"
  - mono labels uppercase with 0.2–0.24 em letter-spacing ("They're decoration; anything the viewer must read goes big")
  - phone test at 360 px wide
- The same pattern is observed in the top pieces: one coloured italic keyword per caption in kimmonismus's film ([video](https://x.com/kimmonismus/status/2102844654169575547)), one red or gold word per headline in IterIntellectus's ([video](https://x.com/IterIntellectus/status/2103212539895017864)), one red italic word per heading in Misbah's ([video](https://x.com/MisbahSy/status/2045159435505660161)), and italic serif emphasis in HeyGen's launch ([video](https://x.com/HeyGen/status/2044827454460871072)).
- HyperFrames layout rules ([motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)):
  - "Fill the frame. Hero text: 60-80% of width"
  - "Anchor to edges … Centered-and-floating is a web pattern"
  - "Split frames … Zone-based layouts, not centered stacks"
  - "Background is not empty … Pure solid #000 reads as 'nothing loaded.'"
  - "Connector lines earn their place": every line must name its start anchor, end anchor and job

#### Colour
- "One accent color … and it means something: the thing that changed, the answer, the winner. If everything is coral, nothing is"; "Drive glow from state, not time" ([whaleyxbt motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)).
- N01ennn's house rule: "colour has a job: black and white is the surface, colour goes only where it means something" ([article](https://x.com/N01ennn/status/2107826459804840072)).
- The UI-morph spec bans "bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template" ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)).
- Observed: highlight-versus-grey is consistent across E2 (teal/mustard plus grey), E6 (amber/blue plus grey) and E9 (cyan/orange tenants) ([Claude launch](https://x.com/claudeai/status/2108271552991252810); [GA4](https://x.com/analyticsnerd/status/2108528768079876510); [MIG](https://x.com/Michaelzsguo/status/2052354444331815386)).

#### Data in motion
- "When successive stats belong to the same concept … keep them in the same visual space … Only the VALUE changes"; "Pair every metric with a visual element that gives it presence"; "No pie charts … No multi-axis charts … No 6-panel dashboards … No gridlines, tick marks, or legends" ([HyperFrames data-in-motion](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/data-in-motion.md)).
- HeyGen's own revision note: a callout reading "122,341" "read as a random number. We changed it to 'PEAK DAY · JUN 21'. When a motion graphic highlights a data point, make the label carry the why" ([HeyGen Motion-Graphics Skill article](https://x.com/HeyGen/status/2076381187640324427)).

#### Texture and depth
- "Nothing is dead-still": film grain at about 0.09 opacity, a vignette, a dot grid drifting a few px/s, hand-drawn "line boil" for low-fidelity states, idle elements that "breathe" ([whaleyxbt motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)).
- "Three layers minimum per scene": background treatment, foreground content, accent elements ([HyperFrames motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).
- "One good plate lifts perceived quality more than any amount of gradient tuning" ([HyperFrames breakdown](https://x.com/jake11moran/status/2085827290756481476)).
- Motion blur from subframes: "render every frame in headless Chrome at 60fps, averaging 6 subframes" ([verbove](https://x.com/verbove/status/2103483957266268381)), or "4 subframes per frame, blended with ffmpeg tmix" ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)). howseen-ai blends on a 180° shutter "never across a hard cut" ([howseen-ai/claude-motion-design](https://github.com/howseen-ai/claude-motion-design)).

#### Sound
- whaleyxbt's engine generates typing, clicks, pops, whooshes, risers and pads from the same `timeline.json` as the picture, mastered to −14 LUFS with true peak at or below −1 to −2 dBFS ([README](https://github.com/whaleyxbt/claude-motion); [review-loop skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/review-loop/SKILL.md)).
- howseen-ai: "find the real drop by band energy (never trust an auto beat grid) … place each SFX by its measured peak, two-pass loudnorm to -14 LUFS" ([README](https://github.com/howseen-ai/claude-motion-design)).
- "A clip with a score cut to the beat stops reading as 'AI video' and starts reading as a film" ([ridark_eth article](https://x.com/ridark_eth/status/2106005237190275109)). The Steve Jobs Remotion film used a "soundtrack synthesized in node, cuts locked to 120 bpm" ([oozn](https://x.com/oozn/status/2103482545111232946)).
- HeyGen's faceless explainer changed its caption style from an animated pill around the spoken word to "simple color: grey for what is coming, blue on the word being spoken" because the pill "fought the frames" ([HeyGen Faceless-explainer article](https://x.com/HeyGen/status/2075682104302882908)).

#### Conflicting guidance to resolve deliberately
- whaleyxbt lists "More than one focal point per frame" as an anti-pattern ([skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)). HyperFrames requires "Two focal points minimum per scene. The eye needs somewhere to travel" ([motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).
- HyperFrames bans gridlines, tick marks and legends in motion data ([data-in-motion](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/data-in-motion.md)), yet Claude Motion outputs such as the GA4 piece and the launch dashboard keep gridlines and legends (observed: [GA4](https://x.com/analyticsnerd/status/2108528768079876510), [launch](https://x.com/claudeai/status/2108271552991252810)).

### Inferences
Applying the craft to the permission-aware RAG explainer (≈90 s, 16:9, Thai text with English terms):
- **Hero object.** A single document card with a lock/ACL badge (or a "question" token) should travel the whole pipeline, as kimmonismus's "the" token and Addy's "hello, web" page do. The camera follows it; avoid generic wipes.
- **Two registers, as in Addy's film.** A plain-language metaphor world (an office with keycards or a library with locked shelves) alternates with a blueprint view naming the real components: Embedding, Vector index, ACL/metadata filter, Re-ranker, LLM, Citations.
- **Orientation chrome.** A top-right step counter (1 Ingest · 2 Index with permissions · 3 Ask · 4 Filter by who you are · 5 Answer with sources) and a small chapter chip, as in Alisa's and Addy's films.
- **Colour.** One accent means "you're allowed / this source is used". Everything filtered out drops to grey with a lock, never red/green alone. Two identities (for example two employees) get two colour codes, as in the MIG tenants.
- **Executive structure.** Headline the conclusion ("AI answers only from what you're allowed to see"), show the mechanism, close with a "so what / next" card, as in the GA4 piece and the Claude launch brief.
- **Defense layers** can borrow Misbah's numbered shields: (I) permission sync at ingest, (II) filter at retrieval, (III) cite and verify at answer.

### Gaps
- No source quantified how much each craft element contributes to perceived quality. The rules are practitioner defaults, not tested findings.
- I could not verify whether any top explainer used a specific BPM. The 2 s cut grid is measured; the music tempo is not.

## Key Question 3: What do creators say about their process (brief/storyboard first, scene timing, review loops with frame contact sheets, "frame as a function of time", harness/QA checks, iteration count, render settings)?

### Takeaway
The convergent process has six parts:
1. Write a precise brief with named states, real data and a reference.
2. Get a storyboard and plan approved as stills before any motion.
3. Put every beat on a single timeline in seconds or frames.
4. Make every frame a pure function of time (`seek(t)`/`draw(t)`) so renders are deterministic.
5. Run automated lint and checks plus a look at contact sheets every iteration, with the model itself reviewing frames.
6. Accept many iterations: "one-shot" claims usually hide long briefs, skills and hours of runs.

Render settings cluster at 60 fps (some 24/30), with H.264 yuv420p and −14 LUFS audio.

### Cited Findings

#### Frame as a function of time and determinism
- "A frame is a function of its number … nothing depends on a clock, a timer or a random number … a fix is a one-line edit plus a re-render, and you can check any single frame" ([N01ennn, "How to Turn Opus 5.5 Into a Studio"](https://x.com/N01ennn/status/2107826459804840072)). That article post has 535 likes, 797,080 views and 1,424 bookmarks; the 20-repo post that quotes it has 5,881 likes and 482,412 views and carries a Community Note disputing its "Netflix engineers" claim ([post](https://x.com/N01ennn/status/2108182955671580771)).
- "15 s × 60 fps = 900 frames. Zero timers." ([ridark_eth article](https://x.com/ridark_eth/status/2106005237190275109)). This article closely paraphrases 0xMovez's earlier course: same structure, same examples, five days later ([0xMovez article](https://x.com/0xMovez/status/2104216919033192746), 9,591 likes, 3,687,828 views, 28,412 bookmarks).
- Tommy Rossi's teardown of a one-shot found "all the code in a single index.html file … rendered it using playwright frame by frame in a headless window, then ffmpeg … it used a seek function and eval". The model "seems to prefer doing everything with zero dependencies … instead of using tools like remotion … or hyperframes", and audio beats were analysed in Python and pasted in "as magic numbers" ([__morse](https://x.com/__morse/status/2103485566570369333); [code gist linked in post](https://gist.github.com/remorses/3d467b50a0519ef7859823046dc9c427)). Hence "If you want a framework, say so explicitly" ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)).
- HyperFrames renders HTML and GSAP by seeking each frame in headless Chrome and encoding with ffmpeg. Each composition registers exactly one paused GSAP timeline ([HyperFrames repo](https://github.com/heygen-com/hyperframes); [hyperframes-core skill](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-core/SKILL.md)).

#### Brief and storyboard first
- N01ennn's house rules: "pure function of the frame … the loop closes … colour has a job … real data only: every label traces to a source … nothing ships unchecked". His brief rules: "describe the mechanism, not the vibe … name every state … give it the real material … show a reference for the look and say what not to take … ask for the plan before the code". He warns: "a vague brief gets you … a centered title on a gradient with everything fading in." ([article](https://x.com/N01ennn/status/2107826459804840072))
- HeyGen's "six decisions" are Route, Spec, Beats, Copy (in quotes), Technique and Negatives. Their "beat formula" covers what it is, what it does, where it sits, how it looks and when ("Beat 1 (0–2s)"). "The prompt isn't a wish. It's the edit." A lazy prompt got "a competent generic guess … all motion dead after 2.6 seconds". ([HeyGen "Anatomy of a Prompt"](https://x.com/HeyGen/status/2077438104982667282))
- HeyGen also says "you never name an effect. You describe what you are trying to communicate, and the motion falls out of that" ([Motion-Graphics Skill article](https://x.com/HeyGen/status/2076381187640324427)). This partly contrasts with "Technique: name the moves you want" in the same series ([Anatomy of a Prompt](https://x.com/HeyGen/status/2077438104982667282)).
- HyperFrames' story-spine rules ([story-spine.md](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/story-spine.md)):
  - the hook speaks "outcome language" (internal vocabulary is banned in the hook)
  - "value claim … lands by the second beat"
  - the storyboard is a table with a "Why" column; "a frame whose why cannot be traced to the message is a frame to cut"
  - visuals should be "traceable to a specific line of the source"
- The faceless-explainer skill sequences brief → `frame.md` design system → `STORYBOARD.md`/`SCRIPT.md` (user-gated) → TTS with word timings → visual design → per-frame workers → captions → lint/check/snapshot. "The video's sequence comes from narrative design, not the input text's paragraph order." ([faceless-explainer SKILL.md](https://github.com/heygen-com/hyperframes/blob/main/skills/faceless-explainer/SKILL.md))
- Rexan Wong's workflow ([post](https://x.com/rexan_wong/status/2103707054108299437), 6,893 likes, 639,966 views, 18,205 bookmarks):
  - a reference video from whatships.com ("naming a style works way better than describing one")
  - install HyperFrames or Remotion
  - real UI components
  - brand, screenshots and a braindump, then "ask for 3 storyboard variants"
  - "ask for one still frame per scene before anything moves"
  - director notes; the first render is "usually 80% there"
- The repo-to-explainer prompt has a timed script (0–3 s problem "in 6 words or fewer, in big kinetic type"; 3–10 s; 10–32 s, "3 best features, one scene each … Use diagram-design for anything that needs a diagram"; 32–40 s install command; 40–45 s URL), "Only use facts from the README", and "Show me 5 still frames, one per scene, for approval. Then render the MP4" ([RoundtableSpace](https://x.com/RoundtableSpace/status/2110683351489409207)).
- Alex Prompter's explainer skeleton: "30-second animated explainer … 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end", then notes "one at a time" ([post](https://x.com/alex_prompter/status/2103499977632997524)).
- Charlie Hills' Claude Motion steps: find a style reference; "Turn it into one file: your colours, fonts and how things move"; describe one moment; edit words in Tweaks and colours in Style; "It checked its own frames and fixed them before it showed me" ([post](https://x.com/charliejhills/status/2110374289132470633)).
- JJ Englert keeps a reference-frames folder per project → a style guide → "10-15 different layouts per brand" as reusable scene templates ([post](https://x.com/JJEnglert/status/2044889694949826821)).

#### Review loops and contact sheets
- whaleyxbt's loop ([review-loop skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/review-loop/SKILL.md)):
  - half-resolution draft render
  - "one frame per timeline beat, 0.3 s after it so motion has settled, tiled 4×2", scrubbed at 0.2 s steps for transitions
  - checklist: one focal point, no unintended overlaps "especially during transitions", 60 px safe area, frame 0 not black ("it's the X thumbnail"), nothing clipped, readable at phone width, "Text isn't moving while it's meant to be read", holds long enough, exits faster than entrances, palette-only colours, sound on beat lines, −14 LUFS
  - "Don't claim a fix you haven't re-rendered and looked at."
- N01ennn's checks:
  - a headless smoke test whose "six counters must all read zero": runtime errors, error banners, invalid colours, text off the stage, text outside its panel, text overlapping other text
  - a seam check for loops
  - "a look: render stills, crop the dense parts at 100%, and actually read them"

  ([article](https://x.com/N01ennn/status/2107826459804840072))
- HyperFrames CLI gates: `lint`, `check`, `snapshot` contact sheets at "proof times that show the opening state, signature move, and final hold" ([motion-graphics SKILL.md](https://github.com/heygen-com/hyperframes/blob/main/skills/motion-graphics/SKILL.md)). Running `npx hyperframes lint`/`validate` catches "overlapping words and prompt text leaking into the video" classes of bug ([mvanhorn article](https://x.com/mvanhorn/status/2063624356484501832)). The Sunwood skill requires `lint` → `check` (0 findings) → snapshot review → render → `ffprobe`/`ffmpeg` spot checks ([README](https://github.com/Sunwood-ai-labs/hyperframes-motion-reel-skill)).
- howseen-ai: "inputs → beat map → 4 stills approved → full render → pop scan → audio → final"; "pop + one-frame flash detection, loop seam check in position and velocity"; a 540p draft before the master ([README](https://github.com/howseen-ai/claude-motion-design)).
- Live preview loop: Claude Code writes Remotion components, opens Remotion Studio via claude-in-chrome, "sees the actual rendered output, and iterates on it in real time … need the arrows pointing to the center of the bubbles instead of the edge? just say it" ([omarsar0](https://x.com/omarsar0/status/2021222728393687217)).
- Self-critique scoring: "Render stills, score them, write the 3 worst problems, fix, repeat until every score is 8+" ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)).
- Maker/checker separation: "don't let the agent that did the work decide the work is good" ([N01ennn article](https://x.com/N01ennn/status/2107826459804840072), citing Addy Osmani).

#### Iteration counts and cost: one-shot claims versus reality
- Thariq (Claude Code team, per 0xMovez): "the post: 'Claude one-shot this' / the prompt: 10k characters with good takes plus skills, examples and API keys" ([trq212](https://x.com/trq212/status/2102870353781641416), 2,252 likes). The referenced brief is about 9,500 characters and the run was 12 hours ([donaldjewkes](https://x.com/donaldjewkes/status/2102801274173587569)).
- An honest bill for a 45 s watercolor short: "62.7M tokens (96% cache reads) • 163 model calls • ~$34 at API list price • ~6¾ hrs start to finish, ~1½ hrs of it hands-on • 12-minute render on a laptop" ([Mable Joseph](https://x.com/mablesjoseph/status/2103465246014746943)).
- Community quotes compiled by mvanhorn ([article](https://x.com/mvanhorn/status/2063624356484501832)): "it took ~100 prompts, not 1. the first few iterations all looked like a powerpoint" (r/ClaudeAI); "One creator's intro animation took 20 minutes and 26 prompts"; "Budget 3 to 100 prompts". Note these are second-hand Reddit quotes.
- Each iteration takes "2-3 minutes while Claude thinks and writes code"; "don't describe 10 things at once … One change, check it, next change" ([Ole Lehmann article](https://x.com/itsolelehmann/status/2014740993208188959), endorsed by Remotion's Jonny Burger as "a beginner guide" ([JNYBGR](https://x.com/JNYBGR/status/2015708193167479209))).
- Remotion's published prompt history for its 18.9M-view clip is a step-by-step Claude Code session (Opus 4.5) that starts with "first start out by making a new composition, 1280x1000px of a macos terminal window-like console that has an empty prompt in it. light theme" ([gist](https://gist.github.com/JonnyBurger/5b801182176f1b76447901fbeb5a84ac); [Remotion post](https://x.com/Remotion/status/2013628043105890779)).
- Alisa Qian (E3) and Martijn Verbove's MakerMap piece claim one prompt; Verbove's prompt was a long XML spec ([alisaqqt](https://x.com/alisaqqt/status/2102749340527919471); [verbove](https://x.com/verbove/status/2103483957266268381)). kimmonismus reports about one hour ([post](https://x.com/kimmonismus/status/2102844654169575547)). howseen-ai's launch film took "5 iterations" ([README](https://github.com/howseen-ai/claude-motion-design)). whaleyxbt's `/effort` explainer took "one prompt + one revision" ([README](https://github.com/whaleyxbt/claude-motion)).
- Effort settings: "Every viral one-shot in the list ran on xhigh or max" ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)). whaleyxbt suggests low effort for storyboarding, medium for building scenes, high for the review loop and final polish, and xhigh/max for unattended end-to-end runs ([README](https://github.com/whaleyxbt/claude-motion)).

#### Render settings seen
- 60 fps with 4–6 subframes for motion blur, H.264 + yuv420p, all aspect ratios exported in parallel ([verbove](https://x.com/verbove/status/2103483957266268381); [twoclipping](https://x.com/twoclipping/status/2103273003555402193)).
- HyperFrames `render --fps 60 --quality delivery` ([Sunwood README](https://github.com/Sunwood-ai-labs/hyperframes-motion-reel-skill)). BT.709 TV-range encode; mux with `-crf 16` ([howseen-ai README](https://github.com/howseen-ai/claude-motion-design)).
- Measured in the downloaded variants: Addy 24 fps, the Claude launch 24 fps, kimmonismus about 30 fps, IterIntellectus 30 fps, Alisa 30 fps, HyperFrames pieces 30–60 fps, the Hermes Manim piece 60 fps (`media/*/meta.txt`; posts as cited in Key Question 1).
- "set the pixel aspect ratio explicitly, or some players squeeze the picture" ([N01ennn article](https://x.com/N01ennn/status/2107826459804840072)).
- Layout via a function, not fixed pixels: "Reframe type and UI per format, don't crop a 16:9 render to vertical" ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)).

### Inferences
- For a 90 s piece aimed at executives, the evidence favours this order:
  1. a one-page brief: the message, 6–8 named states, real numbers or a labelled example, a reference frame, a negatives list
  2. a storyboard table with a "why" column
  3. one approved still per scene
  4. a `timeline.json` (or a HyperFrames GSAP timeline) as the single source of timing for picture, captions and SFX
  5. lint/check plus a per-beat contact sheet each iteration, reviewed by a separate checker pass and a native Thai reader
  6. a final render at 1920×1080
- Budget for tens of iterations, not one shot.
- Because Opus may hand-roll a zero-dependency renderer, name the engine explicitly in the brief if the project standardises on HyperFrames or Remotion.

### Gaps
- No creator published a full iteration log for a diagram-heavy technical explainer. The best numbers (163 calls, ~100 prompts, 26 prompts) come from a watercolor short, a launch video and an intro animation.
- Claude Motion's export resolution, fps and length limits are not documented by Anthropic ([help article](https://claude.com/resources/articles/dashboards-and-motion)).

## Key Question 4: What failure modes do creators warn about (generic templates, text too fast, cluttered frames, inconsistent styles, overuse of effects)?

### Takeaway
The recurring "AI-made" tells, in rough order of frequency:
- the default look: centred title on a gradient, everything fading in, logo at the end
- uniform easing and duration with no rhythm
- text that flashes by or moves while it should be read
- slide-like layouts with web-sized elements floating in empty space
- clutter and small text that fails the phone test
- overlapping text during transitions
- invented UI or data
- font fallbacks
- "brief contagion", where everyone pastes the same prompt and gets look-alike output

The fixes are references, named states, real data, reading holds and automated checks.

### Cited Findings
- **The default look.** "Most people who try motion design with Opus 5.5 end up with the same video: centered text on a gradient, everything fading in, a logo at the end. They don't give it a reference, don't give it a render engine, don't ask it to look at its own frames." ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)) Similar warnings: "without a reference, opus falls back to its default look: centered text, gradient background, everything fading in" ([Rexan Wong](https://x.com/rexan_wong/status/2103707054108299437)); "the first render was mid: a centered title, a gradient, everything fading in" ([N01ennn](https://x.com/N01ennn/status/2107826459804840072)).
- **Pacing.** "If there's one telltale sign of AI motion graphics is the terrible pacing. They only know constant easing, no tension relief, no sharp cuts, no short fades." (r/ClaudeAI, quoted by [mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)) HyperFrames tells the agent: "You default to `power2.out` on everything … You default to 0.4-0.5s for everything … `y: 30, opacity: 0` on every element … You crossfade everything" ([motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).
- **Text too fast.** "Reading holds. Every readable state needs a hold after it settles: ≥ 1 s for a short phrase, add ~0.25 s per word beyond three, ≥ 2 s for the final hook. The 22 s cut of the effort video exists because the 15 s one flashed text too fast — when in doubt, hold longer and animate less." ([whaleyxbt motion-design skill](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)) Anti-patterns there include "Text that moves while it's supposed to be read" and "Everything fading in at once, or everything using the same duration".
- **Slideshow look.** "The first pass will look like PowerPoint"; "Remotion driven by a lazy prompt looks like a slideshow with spring physics" ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)). "You build for the web. Video frames are not pages … You will try to use web-sized elements. Don't." ([HyperFrames motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)) Observed in the Next.js, Airflow and Hermes pieces: small type, top-heavy layouts, large voids, the same layout repeated ([Jason Zhou](https://x.com/jasonzhou1993/status/1948355284591956447); [Kaxil Naik](https://x.com/kaxil/status/2014094200111833257); [YanXbt](https://x.com/IBuzovskyi/status/2066724948702626255)).
- **Clutter and density.** Observed: the GPU MIG explainer ends as a full poster of tiny text at 9:16 ([Michael Guo](https://x.com/Michaelzsguo/status/2052354444331815386)), and the Agent SDK loop's branch labels are unreadable at feed size ([omarsar0](https://x.com/omarsar0/status/2021222728393687217)). Rules: "No 6-panel dashboards … No multi-axis charts — viewer can't study intersections in a 3-second window" ([HyperFrames data-in-motion](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/data-in-motion.md)); "Phone test: at 360 px wide … the key message must still read" ([whaleyxbt](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)).
- **Overlaps.** "Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps" ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)). A 0-findings counter for "text overlapping other text" ([N01ennn](https://x.com/N01ennn/status/2107826459804840072)). Observed: in Alisa's explainer a caption box briefly overlaps an exiting headline at about 125 s ([video](https://x.com/alisaqqt/status/2102749340527919471); `media/alisa-oneprompt-explainer/detail.png`).
- **Invented UI and data.** "without it, opus draws your product UI from scratch and it looks off. wrong spacing, placeholder boxes, fake-looking buttons" ([Rexan Wong](https://x.com/rexan_wong/status/2103707054108299437)). "real data only: every label traces to a source. no invented numbers, no made-up UI" ([N01ennn](https://x.com/N01ennn/status/2107826459804840072)). "illustrative data is labelled 'Example data' on screen; captions stay true" ([howseen-ai](https://github.com/howseen-ai/claude-motion-design)). HeyGen's agent "flagged that a 'trend up' headline would be dishonest and led with the total instead" ([HeyGen](https://x.com/HeyGen/status/2076381187640324427)). Observed: a post captioned "Visualising GA4 data" shows "dummy data" on screen ([analyticsnerd](https://x.com/analyticsnerd/status/2108528768079876510)).
- **Fonts.** "a whole batch of screenshots was quietly using fallback fonts and nobody noticed" ([N01ennn](https://x.com/N01ennn/status/2107826459804840072)). "system fonts like SF Mono and SF Pro silently fall back and break your monospace alignment at render time" ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)). HyperFrames lint fires `font_family_without_font_face` unless a named font has an in-file `@font-face` to a shipped local file ([hyperframes-core skill](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-core/SKILL.md)). "Never put will-change on anything the camera scales or the text renders blurry" ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)).
- **Brief contagion and template sameness.** "Hundreds of identical prompts produced reels that rhyme with each other … A one-liner tests the engine. It never tests the idea" ([0xMovez](https://x.com/0xMovez/status/2104216919033192746)). The UI-morph spec bans "anything that looks like a template" ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)). HyperFrames: "if the prop could appear unchanged in another product's video, it didn't come from the source" ([story-spine](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/story-spine.md)).
- **Effect overuse.** "Don't use ambient zoom on every scene … Stillness after motion is powerful" ([HyperFrames motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)). "elastic accent … one hero moment per video, not more" ([whaleyxbt](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)). The pill-style karaoke caption "fought the frames" ([HeyGen](https://x.com/HeyGen/status/2075682104302882908)). The UI-morph spec bans particle bursts and glows ([twoclipping](https://x.com/twoclipping/status/2103273003555402193)).
- **Dead time and empty frames.** The lazy prompt had motion "dead after 2.6 seconds, then frozen" ([HeyGen](https://x.com/HeyGen/status/2077438104982667282)). "An empty or black frame 0 — X autoplays muted and the first frame is the thumbnail" ([whaleyxbt](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)). "Pure solid #000 reads as 'nothing loaded'" ([HyperFrames](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).
- **What still breaks technically.** "Characters walking around or fluid organic shapes. Anything that needs frame-by-frame finesse" ([Ole Lehmann](https://x.com/itsolelehmann/status/2014740993208188959)). "counters, maps, and product demos fly, while realistic character motion still falls apart" ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)). "hand-drawn characters and painterly texture can't be fully carried by text … Steer to geometric shape language" ([HeyGen](https://x.com/HeyGen/status/2077438104982667282)). GSAP pitfalls: iframes don't seek, and conflicting transform tweens on one element kill entrances ([HyperFrames motion-principles](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-creative/references/motion-principles.md)).
- **Token burn.** One user "burned a full hour of Claude quota on a single talking-head video"; the fix is templates with variable swaps ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)).

### Inferences
- The biggest risk for this project is pacing for reading. Addy's 2 s-per-concept cadence works for a developer audience watching an aesthetic piece, but executives reading Thai need holds.
- whaleyxbt's formula gives a floor: at least 1 s plus 0.25 s per word beyond three, and at least 2 s for the final hook. That formula was written for English words; Thai has no inter-word spaces, so it needs re-basing on syllables or characters and checking with native readers (my inference; see the gaps for Key Question 5).
- A 90 s piece probably supports about 6–8 beats of about 10–14 s, each with one headline, one diagram state and a short hold. That is inferred from the reading-hold rule and from Misbah's and Alisa's section lengths.
- Clutter risk is high for RAG diagrams, with many boxes: embedder, index, ACL store, retriever, re-ranker, LLM. Apply "only the value changes", reveal one stage at a time, then collapse finished stages into a summary chip instead of leaving the whole poster on screen (the MIG end-state problem).

### Gaps
- No source gives a validated reading speed for on-screen Thai, or a words/characters-per-second rule for Thai captions.
- Failure modes are mostly practitioner anecdotes, not systematic studies.

## Key Question 5: Any examples with non-Latin scripts (Thai, Japanese, Chinese, Arabic), and how was text rendering and typography handled?

### Takeaway
No Thai-language code-rendered explainer was found on X. Chinese and Japanese examples exist:
- A Chinese HyperFrames piece pairs small English era chips with bold Chinese headlines and renders cleanly.
- A Japanese Claude Motion test shows concrete line-breaking failures: a katakana word split mid-word and an orphaned final character. The same user reports that Japanese Google Fonts could not be used in Claude Motion.

For Thai, the evidence points to bundling a local Thai font, controlling line breaks manually, and avoiding per-character animation. The Thai-specific parts of that are inference.

### Cited Findings
- **Chinese (Codex + HyperFrames), by @BTCqzy1.** 3,298 likes, 641,258 views. Observed: each scene pairs a small black English label chip ("1940s | Punch Cards", "1970s | C Language", "2000s | Open Source") with a large bold Chinese sans headline in a right-aligned block ("程序第一次被压进纸里", "机器指令被封装成人类语言", "一个人的代码变成全球协作"). No visible glyph or line-break problems in the frames checked. The font family is not stated. ([video](https://x.com/BTCqzy1/status/2051866228646691321); `media/btcqzy-chinese-history/contact.png`)
- **Japanese (Claude Motion), by ふくだ (@ryu_f_web).** The post says Motion writes animation as code; text, length and colours can be fixed afterwards on screen; it exports MP4/GIF with sound from a built-in synth. It adds: "音声ファイルの持ち込みと、日本語の Google Fonts は使えなかった" ("bringing in audio files and Japanese Google Fonts couldn't be used") ([post](https://x.com/ryu_f_web/status/2108504471693385895)).
  - Observed: the Japanese headline breaks as "…ダッシ / ュボードに", splitting the katakana word ダッシュボード ("dashboard") and starting a line with a small kana (ュ), a classic kinsoku violation.
  - The sub-line ends with an orphaned "る" on its own line.
  - Latin brand terms (Claude Dashboards, BigQuery, Snowflake) sit inline in the Japanese sentences with a small blue English kicker label ("Dashboards", "Motion").

  ([video](https://x.com/ryu_f_web/status/2108504471693385895); `media/ryu-claude-motion-jp/detail.png`)
- **Japanese Remotion examples.** テツメモ (@tetumemo) made a 13 s promo with Remotion Agent Skills by "natural-language catch-ball" with Claude Code (169 likes, 46,128 views) ([post](https://x.com/tetumemo/status/2013950087626391857)). ユニコ (@unikoukokun) says Claude Code with Remotion Skills handled narration, cut editing and subtitles. The attached video is a screen recording of Remotion Studio, not a typographic explainer. ([post](https://x.com/unikoukokun/status/2014302669721248194))
- **Japanese Claude Motion, by @yama_kiyo.** A GIF made by asking Claude what Motion can do; the user felt it "might be easier to use than Remotion" ([post](https://x.com/yama_kiyo/status/2108443488266371222), via [Min Choi's thread](https://x.com/minchoi/status/2108585619882410194)). Not downloaded or analysed.
- **Thai.** The only Thai-language source found is a Marketing Oops! guide (2026-05-19), "วิธีใช้ Claude ตัดต่อวิดีโอ แบบจับมือทำ ใส่ซับไทย ทำโมชั่นกราฟิค" ("How to use Claude to edit video, step by step, with Thai subtitles and motion graphics"). It uses Claude Desktop/Code with the HyperFrames and video-use repos and ElevenLabs Speech-to-Text for Thai transcription. It does not discuss Thai fonts, line breaking or vowel/tone-mark rendering. ([Marketing Oops!](https://www.marketingoops.com/?p=364774)) A thread on HyperFrames notes a Telugu reel with 55K views and a Portuguese explainer with 36K views, but no Thai examples ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)).
- **Font handling rules that apply to any script.** HyperFrames requires an in-file `@font-face` to a shipped local font file for any named `font-family`, enforced by lint ([hyperframes-core](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-core/SKILL.md)). N01ennn embeds "the fonts … in the file so nothing loads from the network" ([article](https://x.com/N01ennn/status/2107826459804840072)). howseen-ai's renderer waits for "fonts ready … 2 rAF after each `seek`" before screenshots ([README](https://github.com/howseen-ai/claude-motion-design)). Silent fallback of system fonts at render time is a known bug class ([mvanhorn](https://x.com/mvanhorn/status/2063624356484501832)).
- **Emphasis convention.** The strongest English pieces emphasise with a single italic accent-coloured word ([whaleyxbt](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md); observed in [kimmonismus](https://x.com/kimmonismus/status/2102844654169575547) and [HeyGen launch](https://x.com/HeyGen/status/2044827454460871072)). The tight display line-height (`lineHeight: 1`) and −0.02 em tracking rules were written for Latin display type ([whaleyxbt](https://github.com/whaleyxbt/claude-motion/blob/main/.claude/skills/motion-design/SKILL.md)).

### Inferences
These are Thai-specific and not verified by any source found.
- **Font.** Ship a Thai-capable font file locally (for example IBM Plex Sans Thai, Noto Sans Thai, Anuphan, Sarabun or Kanit) via `@font-face`. Pair it with a Latin face for English terms (for example IBM Plex Sans/Mono, or Inter with JetBrains Mono). Check on the contact sheet that no glyph falls back. If using Claude Motion, test early: the Japanese report suggests web fonts for non-Latin scripts may not be available there.
- **Line breaking.** Thai has no spaces between words, so the browser's automatic line breaking may split words, like the Japanese mid-word break above. Set headline line breaks by hand (explicit `<br>`, or non-breaking spans around phrases and English terms), keep headlines to 1–2 short lines, and review every text frame with a native reader.
- **Kinetic type.** Don't split Thai into single characters. Vowels and tone marks (for example ั ิ ี ่ ้ ุ) are combining marks that must stay with their base consonant, so per-character staggers can detach or mis-stack them. Animate by word, phrase or line, or by grapheme cluster (for example with `Intl.Segmenter` set to Thai).
- **Line height and spacing.** Use a looser line-height than the Latin `lineHeight: 1` rule (about 1.3–1.5 for Thai) and no negative tracking, so above- and below-base marks aren't clipped by masks. Mask reveals ("slide up out of a clip") need extra padding for Thai stacked marks.
- **Emphasis.** Thai fonts rarely have true italics; use the accent colour and weight instead of italic for the one-word emphasis.
- **Bilingual pattern.** Reuse the Chinese example's layout: a small English mono chip for the technical term ("Vector index", "Access control list", "Re-ranker") above or beside a large Thai plain-language headline. The Japanese example also shows English product terms inline with a small English kicker.

### Gaps
- No Thai on-screen-text example of a code-rendered motion graphic was found on X, so Thai rendering quality in HyperFrames, Remotion or Claude Motion (mark stacking, line breaking, font availability) is untested by any public source found.
- Whether Claude Motion supports custom or uploaded Thai fonts is undocumented. The only signal is one Japanese user's report about Japanese Google Fonts ([post](https://x.com/ryu_f_web/status/2108504471693385895)).
- No Arabic or other right-to-left example was found.
- Audio language and voice-over handling for Thai (TTS voices, caption word timing for Thai) was not covered by any source beyond the Marketing Oops! note on ElevenLabs transcription ([Marketing Oops!](https://www.marketingoops.com/?p=364774)).

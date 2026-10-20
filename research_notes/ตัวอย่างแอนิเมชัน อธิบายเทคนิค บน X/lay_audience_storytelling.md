# Storytelling and on-screen-text principles for a ~90 s, 16:9, Thai-text-only explainer (permission-aware RAG over 120 years of multimodal government archives) for non-technical staff and military commanders/executives

Scope note: researched on 2026-10-20. X engagement figures were read from `api.fxtwitter.com` on that date (X "views" are impression counts, which include autoplay, so they are not watch-through). Pacing figures marked "measured" come from my own analysis of the downloaded video files: ffmpeg scene-cut detection (threshold 0.3, "hard cuts") and contact sheets. Files are in `/home/user/nave-cloud/research_notes/ตัวอย่างแอนิเมชัน อธิบายเทคนิค บน X/media/{slug}/`, each with `video.mp4`, `contact.png` and `contact_view.jpg`. "Base characters" for Thai means characters excluding tone marks and above/below vowels, which is the Netflix counting method.

## 1. Which story structures work for lay and executive audiences in 60–120 s explainers? (with X examples)

### Takeaway
The best recent X explainers for general audiences use one of four shapes:
- **Follow one item through the system:** one query, one bug, or one request moves from stage to stage.
- **Before/after:** a tangle of point-to-point links becomes one standard hub.
- **Growth or scale:** a structure builds while a counter rises.
- **Cumulative pillars or checklist:** a list builds one item at a time.

They nearly always open with real-world stakes and use one controlling metaphor. Research supports narrative over expository framing (Dahlstrom), and segmenting plus signaling (Mayer). Metaphors help but need limits stated (Taylor & Dewsbury). I found no controlled study that ranks these structures against each other for 60–120 s videos.

### Cited Findings

**Research evidence on structure**
- Narrative formats "offer increased comprehension, interest, and engagement" compared with logical-scientific formats. After formal schooling, non-experts get most of their science information from mass media, which already leans on narrative. Narratives are also intrinsically persuasive, which raises ethical considerations. — [Dahlstrom 2014, PNAS](https://pmc.ncbi.nlm.nih.gov/articles/PMC4183170)
- Metaphors and analogies help people make sense of phenomena and share findings with the public. They can also limit reasoning, feed public misunderstanding, and carry hidden social messages. — [Taylor & Dewsbury 2018, J Microbiol Biol Educ](https://pmc.ncbi.nlm.nih.gov/articles/PMC5969428)
- Mayer's multimedia principles (definitions):
  - **Segmenting:** content in learner-paced segments beats one continuous unit.
  - **Signaling:** cues that highlight how the essential material is organized.
  - **Coherence:** leave out extraneous material.

  — [Lucidea summary](https://lucidea.com/blog/mayers-12-principles-of-multimedia-learning); [Notre Dame Faculty Center](https://twut.nd.edu:443/PDF/Principles-MultimediaLearning.pdf)
- Mayer effect sizes from a 12-principle review abstract:
  - multimedia d = 1.67
  - coherence d = 0.70
  - signaling d = 0.46
  - redundancy d = 0.87
  - spatial contiguity d = 0.79
  - temporal contiguity d = 1.30
  - segmenting d = 0.70
  - pre-training d = 0.46
  - modality d = 0.72

  — [synapsesocial abstract](https://www.synapsesocial.com/es/papers/69dbbbdacebd566818835a69)

  Other versions give different values: coherence median 1.32 and signaling 0.60 ([Cambridge Handbook chapter](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/C98AB3A6CE760DD63C048936EA0B3B44)); coherence 0.86 and temporal contiguity 1.31 ([The Future of Multimedia Learning](https://edtechbooks.org/docx/10349)). The multimedia effect is weaker for high-prior-knowledge learners ([Brom & Hannemann slides](https://ksvi.mff.cuni.cz/amulab/wp-content/uploads/2018/11/MultimLn3_BromHannemann_181117.pdf)). A separate pooled meta-analysis of 181 studies found an overall g = 0.37 (reported in the same search; not verified at source).

**Video length and RAG analogies**
- Video length: Wistia's analysis of 564,710 videos and 1.3B plays found engagement holds steady up to about 2 minutes, then drops significantly. — [Wistia](https://wistia.com/blog/optimal-video-length). Videos of 1–2 minutes lose on average 4.9% of viewers in the opening "nose", versus 17.3% for 5–10-minute videos. — [Wistia audience retention](https://wistia.com/blog/understanding-audience-retention)
- A canonical lay analogy for RAG, from NVIDIA:
  - "Judges hear and decide cases based on their general understanding of the law… so judges send court clerks to a law library, looking for precedents and specific cases they can cite."
  - "The court clerk of AI is a process called retrieval-augmented generation."
  - RAG "gives models sources they can cite, like footnotes in a research paper."

  — [NVIDIA blog, Rick Merritt (Nov 2023, updated Jan 2025)](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)

#### X example catalogue (non-Thai; Thai examples are in Section 4)

**E1. Anthropic: "Natural Language Autoencoders" research film**
- **Post:** [link](https://x.com/AnthropicAI/status/2052435436157452769) · author @AnthropicAI (1.82M followers) · 2026-05-07
- **Engagement:** 2,599,595 views · 16,479 likes · 1,664 reposts · 615 quotes · 8,494 bookmarks
- **Format:** mini-documentary. A researcher speaks to camera (voice-over), intercut with minimalist motion-graphic cards on paper-white backgrounds.
- **Duration/aspect:** 196 s, 16:9.
- **Audience:** general public.
- **Structure:**
  - Stakes first: an email scenario plus a collage of press headlines (BBC, Fortune, Fox, PCWorld).
  - Problem: "Models… talk in words but think in numbers."
  - **Follow one item:** the prompt "What should I see in San Francisco?" becomes a grid of numbers, then highlighted numbers, then a readable sentence ("Go to the Legion of Honor on a foggy afternoon").
  - More examples, then a close.
- **Metaphor:** translation (numbers into human-readable text).
- **Pacing (measured):** 35 hard cuts, mean shot 5.45 s.
- **Text density:** cards of 3–12 words in a large centered sans. Yellow highlight boxes are the single signaling device. Model output is in monospace.
- **What to borrow:**
  - Follow one real question through the whole pipeline.
  - Use one highlight color only.
  - Open with real-world stakes before the mechanism.
- Local files: `media/anthropic-nla/`

**E2. Anthropic: "Formalization of Fermat's Last Theorem" growth graph**
- **Post:** [link](https://x.com/AnthropicAI/status/2095947707605266436) · @AnthropicAI · 2026-09-04
- **Engagement:** 4,757,611 views · 14,104 likes · 1,875 reposts · 794 quotes · 3,854 bookmarks
- **Format:** a single continuous data-viz build, with no people.
- **Duration/aspect:** 34.9 s, 16:9.
- **Pacing (measured):** 0 hard cuts.
- **Structure:** scale and growth.
  - An empty canvas grows into a radial dependency tree, with a "Day N" stamp.
  - Two counters ("statements" and "proved") rise from 0 to 29,511.
  - Branch labels appear only once their branch exists (progressive disclosure).
  - The full explanation sits in the post copy (problem, then solution, then payoff), not on screen.
- **Text density:** a 5-word title, about 10 small labels, and 2 counters.
- **What to borrow:**
  - Show "120 years of archives" as a structure that builds with a live counter.
  - Keep one idea per frame and let the post copy carry the details.
  - Hold the finished state on screen.
- Local files: `media/anthropic-flt-proof/`

**E3. Anthropic: "Model Hardware Standard" research preview**
- **Post:** [link](https://x.com/AnthropicAI/status/2093038426140651791) · @AnthropicAI · 2026-08-27
- **Engagement:** 3,244,249 views · 11,166 likes · 1,451 reposts · 836 quotes · 4,202 bookmarks
- **Format:** documentary interviews plus about 30 s of motion-graphic diagram on graph paper.
- **Duration/aspect:** 132.5 s, 4:3.
- **Pacing (measured):** 40 hard cuts, mean shot 3.2 s.
- **Structure: before/after.**
  - A single "Camera–Microscope" link grows into a tangle of point-to-point links.
  - The word "After" appears.
  - The new picture is Agent → Standard → many devices, with the path actually used lit in green.
  - Real lab footage follows as proof.
- **Metaphor:** a universal adapter (hub and spoke).
- **Text density:** node labels of 1–2 words.
- **What to borrow:**
  - "Today: every archive silo has its own search and access rules. After: one permission-aware gateway."
  - Light up only the request's own path.
  - Keep node labels to 1–2 words.
- Local files: `media/anthropic-mhs/`

**E4. Linear: automated triage ("follow one bug")**
- **Post:** [link](https://x.com/linear/status/2071983086708150721) · @linear (114.7k followers) · 2026-06-30
- **Engagement:** 62,453 views · 288 likes · 192 bookmarks
- **Format:** UI walkthrough with no voice-over; the text carries the story.
- **Duration/aspect:** 54.4 s, 16:9.
- **Pacing (measured):** 0 hard cuts. The camera pushes and pans continuously.
- **Structure:** one bug ("Fare estimate does not update after location changes", RIDE-10194) is followed from triage, through label and duplicate suggestions, code investigation, a coding session and a PR, to Merged and Done.
- **Chapter cards:** "Automate Triage in Linear", "Triage Intelligence", "Code Intelligence", "Coding session". Each is 2–4 words, on screen about 1.5 s. Each stage gets about 13 s.
- **What to borrow:**
  - Chapter cards of 4 words or fewer between stages.
  - Keep one artifact persistent across all stages (one scanned document or one question).
  - Zoom to the exact element that matters.
- Local files: `media/linear-triage/`

**E5. Linear: "Introducing Loops"**
- **Post:** [link](https://x.com/linear/status/2079233260161323371) · @linear · 2026-07-20
- **Engagement:** 621,981 views · 2,145 likes · 1,406 bookmarks
- **Format:** abstract motion graphic.
- **Duration/aspect:** 40.5 s, 16:9.
- **Pacing (measured):** 0 hard cuts.
- **Structure:** a literal metaphor. A ring stands for the recurring loop, and a light dot travels through monospaced uppercase step labels ("ISSUE ENTERS TRIAGE", "SEARCH CONTEXT", "DRAFT ROOT CAUSE ANALYSIS"). The rings collapse into the logo, then "Now available in Linear".
- **Text density:** about 10 labels of 2–4 words in 40 s.
- **What to borrow:**
  - Make the concept's literal shape the visual.
  - Use a traveling dot to show "one item moving".
  - Write labels as short verb phrases.
- Local files: `media/linear-loops/`

**E6. IBM: "ingredients of digital sovereignty" (four pillars)**
- **Post:** [link](https://x.com/IBM/status/2102397505472192815) · @IBM · 2026-09-22
- **Engagement:** 10,062 views · 95 likes · 11 reposts · 12 bookmarks. This is low engagement, so treat the clip as a technique example, not proof of effectiveness.
- **Format:** 9:16 split screen. The top half shows neon hand-drawn pillars; the bottom half is an expert speaking to camera with word-by-word captions.
- **Duration:** 36.6 s.
- **Pacing (measured):** 0 hard cuts. A new pillar (DATA, OPS, TECH, AI) appears roughly every 6–9 s under a persistent title, "Four Pillars of Digital Sovereignty".
- **Executive framing:** each pillar is a control question for a leader: "Do you know where your data lives? Who can access it? What are they doing with it?" through to "…being used to retrain AI? … in control."
- **Metaphor:** the post copy uses a recipe ("ingredients"); the visual uses pillars.
- **Text density:** captions of 1–3 words with one keyword in blue.
- **What to borrow:**
  - Turn each technical layer into a leader's control question.
  - Build cumulatively so the whole structure stays visible.
  - Color one keyword per caption.
- Local files: `media/ibm-digital-sovereignty/`

**E7. 3Blue1Brown: "The last IMO problem AI could not solve"**
- **Post:** [link](https://x.com/3blue1brown/status/2101009650686492990) · @3blue1brown (Grant Sanderson, 460k followers) · 2026-09-18
- **Engagement:** 154,391 views · 3,568 likes · 1,426 bookmarks
- **Format:** narrated vertical trailer for a long YouTube video.
- **Duration/aspect:** 99.4 s, 9:16.
- **Pacing (measured):** 2 hard cuts; animated transitions otherwise.
- **Structure:**
  - Timeline narrative: 2023, AI cannot; 2024, DeepMind solves 4 of 6; 2025, all labs solve everything except problem 6.
  - Checklist: problems 1–5 ✓, problem 6 ✗.
  - A stat: perfect scores per problem out of 603 contestants. Only 6 solved problem 6.
  - The problem text is read with phrase-level highlights synced to the narration.
  - The problem is shrunk to a 10×10 toy case before scaling up.
  - Teaser, then call to action.
- **Persistent devices:** a timeline ruler (2022–2028) and 1–3-word captions.
- **What to borrow:**
  - A persistent timeline ruler; for 120 years, a Buddhist Era (พ.ศ.) ruler.
  - A checklist with one red ✗ to show the gap.
  - Shrink to one small example first.
- Local files: `media/3b1b-imo/`

**E8. ByteByteGo / Alex Xu: "How SSH Works" (counter-example for lay audiences)**
- **Post:** [link](https://x.com/alexxubyte/status/2105666471326331207) · @alexxubyte (294.6k followers) · 2026-10-01
- **Engagement:** 68,881 views · 1,281 likes · 185 reposts · 959 bookmarks. The bookmark-to-like ratio of about 0.75 suggests reference content for engineers.
- **Format:** a looping GIF, 2.7 s per loop, portrait.
- **Content:** a 20-step numbered sequence diagram with about 30 labels on screen at once. Animated dashed arrows show the direction of flow.
- **What to borrow:** numbered steps, and motion used only to show flow direction.
- **What to avoid:** showing all steps at once for lay audiences; reveal one step per beat instead.
- **Same author, same topic:** a static "RAG vs Agentic RAG" infographic ([link](https://x.com/alexxubyte/status/2112204626921762987), 2026-10-19, 16,566 views, 200 bookmarks) shows the standard engineering visual vocabulary for RAG.
- Local files: `media/bytebytego-ssh/`

**Other observed clips**
- **Anthropic protein binders** ([link](https://x.com/AnthropicAI/status/2089842387845804246), 2026-08-18, 4,342,572 views, 12,449 likes, 11 s, 16:9, 0 cuts measured). Nine result objects with tiny labels fly together to form the logo, with one caption line: a payoff built from the actual data. Local files: `media/anthropic-protein-binders/`
- **Kurzgesagt on X** is mostly behind-the-scenes layer breakdowns and game promos, not explainers. Example: [link](https://x.com/Kurz_Gesagt/status/1797236904686960849), 2024-06-02, 240,517 views, 16 s, 1:1.

### Inferences
- **Recommended spine for the 90 s film (follow one question):** a commander's question in Thai runs through these stages:
  1. 120 years of mixed archives (PDF, scans, images, charts, tables)
  2. A reader that "reads" every format
  3. Retrieval that finds the right pages
  4. A permission check ("only what you are cleared to see")
  5. The answer, with page citations

  Then a before/after (hours of manual search plus oversharing risk, versus seconds plus the same access rules), and a payoff. This combines E1 and E4 (one item), E3 (before/after), E2 (scale counter) and E7 (persistent timeline).
- **Suggested beat budget (inference):**

  | Time | Beat |
  |---|---|
  | 0–8 s | Stakes |
  | 8–18 s | Scale of the archive, with counter and พ.ศ. timeline |
  | 18–60 s | Four stages of 9–11 s each, with chapter cards of 4 words or fewer |
  | 60–75 s | Before/after |
  | 75–90 s | Payoff and "what it means for you", held for at least 3 s |

  This gives 10–14 scenes and 1 new idea per 6–10 s, in line with E4's roughly 13 s per stage and E6's 6–9 s per pillar.
- **Use one controlling metaphor and state where it stops.** "Archive plus clerk who checks your clearance": NVIDIA's court clerk, extended with a clearance check for a military audience. Taylor & Dewsbury's warning suggests one short "but unlike a clerk, it can be wrong, so it always shows its sources" beat.
- High-view examples (E1–E3, E5) all avoid on-screen paragraphs. Their text is titles, labels, counters or chapter cards. The explanatory prose lives in voice-over or post copy. Since no voice-over is planned, the X post copy and the thumbnail title should carry the details.

### Gaps
- I found no controlled study ranking "problem-stakes-solution", "follow one item", "before/after" or "myth vs reality" against each other for 60–120 s explainers. The structure claims come from engagement data, and engagement is not comprehension.
- I could not analyze X posts from @voxdotcom, @TheEconomist, @FT, @nytimes, @stripe, @GoogleDeepMind or @Kurz_Gesagt's actual explainers. The fxtwitter API rate-limited (intermittent 404/500) and X's site search is not indexed by the web search tool.
- I found no "myth vs reality" motion example on X with engagement data.

## 2. Executive framing: translating technical steps into outcomes, risks and decisions; keeping technical terms without jargon

### Takeaway
Leaders and commanders respond to answer-first framing (BLUF), questions they are accountable for (who can see what, where the data lives, can we trust the answer), and one-line guarantees ("it only shows what you are already allowed to see").

Experimental evidence shows that jargon lowers support for adopting a technology, and that adding definitions does not undo the harm. So the plain-language phrase should be the headline, with the English technical term attached as a small secondary tag, not the other way around.

### Cited Findings
- **BLUF (Bottom Line Up Front)** comes from the US Army's writing standard in AR 25-50: put the main point or recommendation first, and use the active voice. — [Wikipedia: BLUF](https://en.wikipedia.org/wiki/BLUF_(communication)); [JMU "Writing in the Army Style"](https://www.jmu.edu/uwc/tutor-resources/MSL202L15%20Writing%20in%20the%20Army%20Style.pdf). The exact current text of the regulation was not verified at the Army Publishing Directorate.
- **Jargon and technology adoption:** in an experiment (N = 650) on emerging technologies, jargon impaired processing fluency. That led to more resistance to persuasion, higher risk perceptions and lower support for adopting the technology. — [Bullock et al. 2019, Public Understanding of Science](https://pubmed.ncbi.nlm.nih.gov/31354058/)
- **Definitions do not fix jargon:** in the follow-up (650 adults; self-driving cars, surgical robots, 3D bioprinting), "it made no difference if the jargon terms… were defined in the text." That held even with hover definitions. — [ScienceDaily on Shulman et al. 2020](https://www.sciencedaily.com/releases/2020/02/200212084357.htm)
- **GOV.UK rule on technical terms:** "Where you need to use technical terms, you can. They're not jargon. You just need to explain what they mean the first time you use them." Plain English is mandatory, and experts also prefer plain wording (97% preferred "among other things" to "inter alia"). — [Writing for GOV.UK](https://www.gov.uk/guidance/content-design/writing-for-gov-uk); [GOV.UK clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)
- **Board-level framing by questions:** the UK NCSC Board Toolkit gives non-technical board members question sets, for example "Can board members name the top cyber security threats, and outline the measures that are in place…?" — [NCSC Board Toolkit question set](https://www.ncsc.gov.uk/files/NCSC-Cyber-Security-Toolkit-For-Boards-full-question-set.pdf); [Board Toolkit 101](https://ncsc.gov.uk/files/Board-Toolkit-101.pdf)
- **A one-line permission promise from a major vendor:** "Microsoft 365 Copilot only surfaces organizational data to which individual users have at least view permissions." Microsoft also flags oversharing as the practical risk: the AI inherits existing permissions, so broad or accidental sharing becomes visible through it. — [Microsoft Learn: Copilot privacy](https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy); [SharePoint Copilot best practices](https://learn.microsoft.com/ar-sa/sharepoint/sharepoint-copilot-best-practices/)
- **The "show your sources" trust cue:** RAG "gives models sources they can cite, like footnotes in a research paper," so users can check claims. — [NVIDIA](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
- **X practice:**
  - IBM frames every layer as a leader's control question ("Do you know where your data lives? Who can access it?"). — [IBM on X](https://x.com/IBM/status/2102397505472192815)
  - Google Thailand puts control first among three benefits: "ข้อมูลของคุณ คุณควบคุมได้" ("your data, you control it"). — [GoogleThailand on X](https://x.com/GoogleThailand/status/2044687236394881471)
  - Google Thailand's Deep Research clip leads with time saved ("ประหยัดเวลาทำงานด้วย Deep Research"). — [GoogleThailand on X](https://x.com/GoogleThailand/status/1915586560583442889)
- **Curse of knowledge:** in Newton's 1990 Stanford tapper study, tappers predicted listeners would identify about 50% of 120 tapped songs. Listeners identified 2.5% (3 songs). — [Psychology Today](https://www.psychologytoday.com/gb/blog/i-hear-you/202104/whats-the-curse-knowledge-and-how-can-you-break-it); [Temple Law](https://law.temple.edu/aer/?p=2964)

### Inferences
- **Map every technical step to an outcome a leader owns:**

  | Technical step | Leader's outcome |
  |---|---|
  | OCR / multimodal parsing | "อ่านได้ทุกรูปแบบ: สแกน ภาพ ตาราง กราฟ" (reads every format: scans, images, tables, charts) — coverage |
  | Embedding / indexing | "ค้นเจอในไม่กี่วินาที" (found in seconds) — time-to-answer |
  | Permission filter / ACL | "เห็นเฉพาะที่มีสิทธิ์" (only see what you're cleared for) — security, need-to-know |
  | Citations | "ทุกคำตอบมีที่มา" (every answer has a source) — trust and auditability |
  | Audit log | "ตรวจสอบย้อนหลังได้" (can be audited later) — accountability |
  | On-premise or sovereign hosting | "ข้อมูลไม่ออกนอกองค์กร" (data never leaves the organisation) — sovereignty and cost control |

- **Term-tag pattern (plain first, term second):** headline in plain Thai, with a small English tag beside or under it. Example: "ระบบตรวจสิทธิ์ก่อนตอบ" (the system checks permissions before answering) as the headline, with a small "Permission-aware" chip. Use no more than about 4 English tags in 90 s (for example RAG, OCR, Permission-aware, Citation), and introduce each once, at the moment its stage is shown. This follows GOV.UK's "explain at first use". It also respects the Shulman finding that definitions cannot rescue jargon-led text.
- **For commanders, close with BLUF-style "what this means / what we need":** state the decision or ask on the last card. Also put the bottom line in the first 8 s (for example "คำตอบจากคลัง 120 ปี ภายในวินาที โดยไม่ละเมิดชั้นความลับ", answers from the 120-year archive in seconds, without breaching classification).
- **Lead with control and security before speed** (as Google Thailand and Microsoft do). For a military audience, the main fear to retire is "AI will leak classified material". The permission beat should be the visual climax, not a footnote.
- **Military-friendly analogy (my inference, not sourced):** "security clearance / need-to-know" at a records room: the clerk fetches only files your clearance allows. It extends NVIDIA's court-clerk analogy.

### Gaps
- No experimental study was found on executives or military officers specifically (as opposed to the general public) regarding explainer framing.
- The NCSC question set and AR 25-50 were cited via summaries, not read in full at source.
- The Shulman 2020 finding concerns text paragraphs with hover definitions. Its applicability to a paired on-screen label plus gloss is an inference.

## 3. On-screen text without voice-over: words per screen, reading time, holds, ideas per scene, numbers, progressive disclosure, captions vs labels

### Takeaway
Use subtitle standards as hard ceilings:
- **Netflix Thai:** at most 17 characters per second for adults, at most 35 characters per line (not counting tone marks or above/below vowels), at most 2 lines, one line preferred.
- **Netflix general:** each text event on screen for 5/6 s to 7 s.
- **BBC:** 160–180 wpm, a minimum of about 0.3 s per word, about 1 extra second for labels, and more time for unfamiliar words, busy graphics and long figures.

Strong X explainers run far below these ceilings: 1–4-word labels and chapter cards, and 4–8 cps for Thai step headings. Because there is no voice-over, the modality principle works against us, so text must be minimal, placed next to the graphic, and paced slowly.

### Cited Findings

**Netflix: Thai Timed Text Style Guide**

— [Netflix Thai Timed Text Style Guide](https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308)
- 35 characters per line, "excluding all composite characters, i.e. tone marks, top and bottom vowels are not counted".
- Reading speed for adults: up to 17 characters per second. Children: up to 13.
- SDH (subtitles for the deaf and hard of hearing): 20 cps for adults, 17 for children.
- Maximum two lines; one line preferred; avoid two short lines; bottom-heavy pyramid.
- Write 1–10 as Thai words and 11+ as Arabic numerals. Use succinct Thai forms for round numbers (800,000 = แปดแสน). Do not write 88,800 ล้าน as "88.8 พันล้าน".
- Do not use italics.
- On-screen-text translations (forced narratives, FNs) go in parentheses, and their duration should mimic the on-screen text.

**Netflix: general requirements**

— [Netflix General Requirements](https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617)
- Minimum 5/6 s per subtitle event (20 frames at 24 fps); maximum 7 s.
- At most 2 lines, usually 1.
- Break lines after punctuation and before conjunctions and prepositions.

**BBC Subtitle Guidelines (v1.2.5, March 2026)**

— [BBC Subtitle Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/)
- Recommended speed 160–180 wpm, or 0.33–0.375 s per word.
- Target minimum of about 0.3 s per word (1.2 s for a 4-word subtitle), "ultimately an editorial decision".
- Extra time where possible:
  - **Unfamiliar words:** "more generous timings".
  - **Labels:** "an extra second… where possible".
  - **Visuals and graphics:** with a lot happening (for example a map), allow time to read *and* take in the visuals.
  - **Long figures** (for example 12,353): more time.
  - **Text crossing shot changes:** longer.
- Very technical items "may prove almost impossible to edit… vary the timing to convey the full meaning".
- Line length: 37 characters on broadcast; online, 68% of frame width for 16:9.
- Maximum 2 lines for 16:9; break at natural linguistic points.
- About 10% of broadcast viewers use subtitles regularly, rising to 35% for some online content.

**Reading speed, sound-off viewing and modality**
- Silent reading of English non-fiction averages 238 wpm (fiction 260; most adults 175–300), from 190 studies. — [Brysbaert 2019](https://www.Gwern.net/doc/psychology/linguistics/2019-brysbaert.pdf)
- 69% of US respondents watch video with sound off in public (25% in private). 80% say they are more likely to watch to the end when captions are available. About 80% of caption users are not hearing-impaired. This was a 2019 Verizon Media and Publicis survey of 5,616 adults. — [3Play Media summary](https://www.3playmedia.com/blog/verizon-media-and-publicis-media-find-viewers-want-captions/); [Streaming Media](https://www.streamingmedia.com/Articles/News/Online-Video-News/80-of-Video-Caption-Users-Arent-Hearing-Impaired-Finds-Verizon-131860.aspx)
- **Modality principle** (spoken words with graphics beat printed words with graphics): d = 0.72. Temporal contiguity (words and the matching picture at the same time): d = 1.30. Spatial contiguity (text near its graphic): d = 0.79. — [synapsesocial abstract](https://www.synapsesocial.com/es/papers/69dbbbdacebd566818835a69)

**Measured text density in X examples** (see Sections 1 and 4)
- **Linear triage:** chapter cards of 2–4 words, about 1.5 s each, no voice-over. — [link](https://x.com/linear/status/2071983086708150721)
- **Linear Loops:** about 10 labels of 2–4 words in 40 s. — [link](https://x.com/linear/status/2079233260161323371)
- **IBM:** captions of 1–3 words; one new pillar every 6–9 s. — [link](https://x.com/IBM/status/2102397505472192815)
- **Anthropic NLA:** cards of 3–12 words; mean shot 5.45 s. — [link](https://x.com/AnthropicAI/status/2052435436157452769)
- **Anthropic Fermat proof:** title plus about 10 labels plus 2 counters in 35 s, with labels revealed progressively. — [link](https://x.com/AnthropicAI/status/2095947707605266436)
- **Google Thailand e-Conomy SEA 2024:** Thai post copy, but English on-screen text with one stat per screen (3 lines, about 8–11 words, numbers in bold, "#2", "9X"), each held about 4 s. — [link](https://x.com/GoogleThailand/status/1856964045368356914), 2024-11-14, 1,844 views
- **Google Thailand Songkran:** Thai step headings of 24–39 base characters, held 4.2–6.4 s, about 3.7–8.1 cps. — [link](https://x.com/GoogleThailand/status/1911253005069959256)
- **Google Thailand Deep Research:** Thai/Latin headline of 57 base characters held about 3.4 s, about 17 cps (right at the Netflix ceiling). — [link](https://x.com/GoogleThailand/status/1915586560583442889)
- **Google Thailand Personal Intelligence:** the "control" section (heading of 18 plus body of 122 base characters) held 3.57 s, about 39 cps, more than twice the ceiling. — [link](https://x.com/GoogleThailand/status/2044687236394881471)

### Inferences
- **Text budget for a 90 s Thai text-only film:**
  - Hard ceiling 17 cps (Netflix Thai).
  - Planning target 8–12 cps on screens that also carry a diagram (BBC's extra-time rules for graphics and unfamiliar words).
  - At about 10 cps over roughly 60 s of text-bearing screen time, that is about 600 Thai base characters in total, roughly 15–18 lines of 35 characters or fewer.
  - Per event: 1 line where possible (35 base characters or fewer, about 2.1 s at 17 cps, so plan about 3–4 s). Never more than 2 lines (70 base characters, plan 6–7 s).
  - No text event under about 1 s (Netflix's 5/6 s floor).
  - Hold the final payoff card for at least 3 s, and add about 1 s whenever a new English term tag appears (BBC labels rule).
- **One new idea per scene, revealed progressively:** headline, then the visual, then the tag. Never show all pipeline stages at once; reveal one step per beat. The ByteByteGo all-at-once diagram is the counter-pattern.
- **Labels beat captions.** With no narration, short labels placed next to the object they name (spatial contiguity) do the explaining. Reserve one sentence-style caption line per scene for the "so what".
- **Numbers:**
  - Use Arabic numerals for big, decision-relevant figures (120 ปี, the page count, seconds to answer).
  - Give long figures extra time (BBC).
  - Use succinct Thai forms for round numbers (Netflix).
  - Use one number per screen, as in the e-Conomy example.
  - Animate counters rather than tables, as in the Fermat proof example.
- **Add voice-over later if possible.** Because modality (d ≈ 0.72) and temporal contiguity (d ≈ 1.30) favor narration synced with visuals, a later Thai voice-over could carry the explanation while the on-screen text shrinks to labels.

### Gaps
- No Thai-specific reading-speed research (words per minute or characters per second) for adults was found beyond Netflix's 17 cps. Thai word-segmentation ambiguity also makes "words per screen" ill-defined for Thai, which is why Netflix counts characters.
- No authoritative "seconds per scene" standard for motion graphics was found; the figures above are measured from examples, plus subtitle standards.
- The BBC's per-word rules are for English, and converting them to Thai base characters is not established.

## 4. Thai-language motion explainers on X: typography (fonts, line height, tone-mark clearance, Thai+English mixing) and pacing

### Takeaway
Thai explainers on X are mostly:
- brand motion graphics (Google Thailand), with very low engagement (hundreds to about 2,500 views; I found no Thai government-agency motion explainers on X);
- news outlets' 9:16 presenter clips with burned-in single-line captions (THE STANDARD, about 11k views).

Observed practice:
- loopless Thai sans for headlines;
- emphasis through weight or color, never italics;
- English product terms set inline in Latin, sometimes with a Thai gloss in parentheses;
- Buddhist Era dates.

Typography evidence:
- Looped Thai is read slightly faster in paragraphs and perceived as more readable, while loopless reads as "modern".
- Google's own font descriptions call Noto Sans Thai (loopless) "mainly suitable for headlines" and the Looped version "suitable for all texts".
- Government work defaults to the 13 National Fonts, notably TH Sarabun.

Line height must be generous; one practical test found clipping at 1.1 and none at 1.6 or above.

### Cited Findings

**Fonts**
- **National Fonts:** on 7 September 2010 the Thai cabinet designated 13 fonts as national fonts. Government agencies must use them, especially TH Sarabun PSK, and drop private-sector fonts by 5 December 2010. — [Wikipedia: National Fonts](https://en.wikipedia.org/wiki/National_Fonts). The resolution date is not verified against the original resolution.
- **Sarabun** on Google Fonts is "the 'TH Sarabun New' font" under the OFL and "is used in the Government Gazette of Thailand". — [Google Fonts: Sarabun](https://raw.githubusercontent.com/google/fonts/main/ofl/sarabun/DESCRIPTION.en_us.html)
- **Noto Sans Thai** is "the more modern, loopless variant… mainly suitable for headlines, packaging and advertising". **Noto Sans Thai Looped** is the "more traditional, looped variant… suitable for all texts". — [Google Fonts: Noto Sans Thai](https://raw.githubusercontent.com/google/fonts/main/ofl/notosansthai/DESCRIPTION.en_us.html); [Noto Sans Thai Looped](https://raw.githubusercontent.com/google/fonts/main/ofl/notosansthailooped/DESCRIPTION.en_us.html)
- **Anuphan** "is a loopless version of IBM Plex Thai developed by Mint Tantisuwanna, a type designer at Cadson Demak", drawn from IBM Plex Sans Latin. — [Google Fonts: Anuphan](https://raw.githubusercontent.com/google/fonts/main/ofl/anuphan/DESCRIPTION.en_us.html). **IBM Plex Sans Thai** and **IBM Plex Sans Thai Looped** are part of IBM's corporate Plex family, with "excellent legibility in print, web, and mobile interfaces". — [Google Fonts: IBM Plex Sans Thai](https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexsansthai/DESCRIPTION.en_us.html)
- **Kanit** (Cadson Demak) is "a formal Loopless Thai". "Sizes and positions of vowels and tone marks need to be managed carefully". Its designers took special care that ก ถ ภ ฤ ฦ, ฎ ฏ, บ ป and ข ช stay distinct. — [Google Fonts: Kanit](https://raw.githubusercontent.com/google/fonts/main/ofl/kanit/DESCRIPTION.en_us.html). **Prompt** and **Mitr** carry a warning that the similarity between ก ถ ภ ฤ ฦ, ฎ ฏ, บ ป and ข ช "might lead to confusion when typesetting very short texts". — [Google Fonts: Prompt](https://raw.githubusercontent.com/google/fonts/main/ofl/prompt/DESCRIPTION.en_us.html); [Mitr](https://raw.githubusercontent.com/google/fonts/main/ofl/mitr/DESCRIPTION.en_us.html)

**Looped vs loopless legibility (Typotheque, Bangkok, 2024; 180 native readers)**

— [Typotheque research](https://www.typotheque.com/research/effects-of-loops-in-thai)
- **Distance acuity** (N = 41): looped text was read more easily overall. Younger readers did better with loopless, older readers with looped.
- **Paragraph reading** (N = 38): looped was "slightly faster" (a "small significant difference"), with no comprehension difference.
- **Perception survey** (N = 139, ages 20–70): loops raised perceived readability in every context. Looped was seen as "classical/formal", loopless as "modern".
- **Authors' recommendation:** "strongly recommended to use looped thai over loopless" for paragraph reading.
- **Limitations:** no effect sizes were reported; convenience samples.

**Line height and stacked marks**
- Thai glyphs "can surround the base consonant(s) on up to 3 sides". Composite vowels "can involve up to 4 glyphs (plus a tone mark)". "Spaces separate phrases, rather than words." — [W3C Thai Layout Requirements](https://www.w3.org/TR/thai-lreq/)
- In an informal cross-script rendering test that included Thai, every tested script clipped at line-height 1.1; 1.6 or more avoided clipping. Fonts were the biggest source of variation. This is low confidence (a community forum test). — [SuttaCentral forum test](https://discourse.suttacentral.net/t/testing-for-line-height-with-tall-scripts/6196). For comparison, the browser default line-height is about 1.2. — [MDN line-height](https://developer.mozilla.org/en/CSS/line-height)

**Netflix Thai rules relevant to on-screen text**
- No italics; Arial as the generic placeholder font; white text.
- Abbreviations without spaces (ส.ส.).
- No periods, question marks or dashes in subtitles.
- English terms are either transliterated or translated, depending on whether they must be understood as English.

— [Netflix Thai Timed Text Style Guide](https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308)

#### Thai X examples

**E9. Google Thailand: "ขั้นตอนที่ต้องทำ หากคุณถูกหลอกทางอินเทอร์เน็ต" (Songkran anti-scam steps)**
- **Post:** [link](https://x.com/GoogleThailand/status/1911253005069959256) · @GoogleThailand (46.3k followers) · 2025-04-13
- **Engagement:** 728 views · 2 likes · 3 reposts · 1 bookmark
- **Format:** flat-illustration motion graphic in which the text carries the content.
- **Duration/aspect:** 34.1 s, 1:1.
- **Structure:** title (the problem), then 4 numbered steps:
  1. เปลี่ยนรหัสผ่าน (change your password)
  2. ติดต่อธนาคารและบัญชีที่ลิงก์ไว้ (contact your bank and linked accounts)
  3. เพิ่มการรักษาความปลอดภัย (add security protection)
  4. รายงานอาชญากรรมที่เกิดขึ้น โดยโทรแจ้ง AOC 1441 (report the crime by calling AOC 1441)

  Then a "Safer Songkran" sign-off.
- **Pacing (measured):** title held 0–7.7 s; steps 4.2–6.4 s each (transitions at 7.67, 11.90, 18.33, 23.70 and 28.50 s); 24–39 base characters per step, about 3.7–8.1 cps.
- **Typography (visual observation; exact font unverified):**
  - Loopless geometric Thai sans.
  - Weight contrast inside one line: "**ขั้นตอน**ที่ต้องทำ".
  - Red for the key phrase "ถูกหลอก ทางอินเทอร์เน็ต" (scammed online).
  - Latin acronym "AOC 1441" inline.
  - Headings top-left, 1–2 lines; a magnifier circle zooms into UI details.
- **What to borrow:**
  - Numbered Thai steps of 40 base characters or fewer, each held at least 4 s.
  - Emphasis by weight or color (Thai has no italics).
  - Magnifier zoom as the signaling device.
- Local files: `media/th-google-songkran-scam/` (also `frame_title_1s.png` and `thai_headlines_compare.png`)

**E10. Google Thailand: "ประหยัดเวลาทำงานด้วย Deep Research…"**
- **Post:** [link](https://x.com/GoogleThailand/status/1915586560583442889) · @GoogleThailand · 2025-04-25
- **Engagement:** 866 views · 0 likes
- **Format:** dark, UI-led product explainer.
- **Duration/aspect:** 41.0 s, 16:9.
- **Pacing (measured):** 0 hard cuts.
- **Structure:**
  - Benefit-first headline (time saved).
  - "ตอนนี้ขับเคลื่อนด้วย 2.5 Pro experimental" (now powered by 2.5 Pro experimental).
  - One query followed end to end: "ฉันเป็น VC (นักลงทุน) ที่กำลังจะไปพบกับสตาร์ทอัพในแวดวงฟินเทค…" (I'm a VC (investor) about to meet a fintech startup…).
  - The research plan.
  - "Researching websites", with source chips.
  - The finished report.
  - Call to action: "ลองใช้ Deep Research ฟรี (จำกัดจำนวนครั้งต่อเดือน)" (try Deep Research free, limited uses per month).
- **Text density (measured):** headline of 57 base characters over 3 lines held about 3.4 s, about 17 cps.
- **Typography:** English product names set in Latin inline, the same family and weight as the Thai, with a purple accent on the key phrase. **English term followed by a Thai gloss in parentheses: "VC (นักลงทุน)".** Latin capitals render visibly taller than Thai consonants.
- **What to borrow:**
  - The term + gloss device (but invert it for lay viewers: Thai first).
  - Show the sources being consulted (chips) as visual proof of grounding.
  - A benefit-first opener.
- Local files: `media/th-google-deep-research/`

**E11. Google Thailand: "ขอแนะนำ Personal Intelligence" (density anti-pattern)**
- **Post:** [link](https://x.com/GoogleThailand/status/2044687236394881471) · @GoogleThailand · 2026-04-16
- **Engagement:** 495 views · 6 likes · 4 reposts · 3 bookmarks
- **Format:** UI mockups, headings and body captions.
- **Duration/aspect:** 29.9 s, 1:1.
- **Structure:** intro, then 3 benefits:
  1. "ข้อมูลของคุณ คุณควบคุมได้" (your data, you control it): control comes first.
  2. "ค้นพบความชอบใหม่ๆ" (discover new interests)
  3. "ไปถึงเป้าหมายได้ไวขึ้น" (reach your goals faster)

  Then an end card.
- **Measured:** section changes at 4.10, 7.50 and 11.07 s. The "control" section showed 140 base characters for 3.57 s, about 39 cps. The 3-line body is unreadable in that time.
- **Typography:** a 2-line heading with very tight leading, overlapping UI text behind it.
- **What to borrow:** the control-first ordering.
- **What to avoid:** 3-line body copy under a heading; text overlapping busy backgrounds.
- Local files: `media/th-google-personal-intelligence/`

**E12. THE STANDARD: "UPOV 1991 คืออะไร ทำไมเกษตรกรคัดค้าน?"**
- **Post:** [link](https://x.com/thestandardth/status/2107797267549761627) · @thestandardth (1.03M followers) · 2026-10-07
- **Engagement:** 11,289 views · 151 likes · 188 reposts · 18 bookmarks
- **Format:** presenter-led "News Digest" explainer with B-roll and document scans.
- **Duration/aspect:** 181 s, 9:16.
- **Pacing (measured):** 40 hard cuts, mean shot 4.4 s.
- **Structure:**
  - The title asks "What is X / why do people object?".
  - Context (trade negotiations).
  - Evidence: a UN letter and treaty Article 7, with highlighted passages.
  - Stakeholders.
  - "4 ข้อ" (4 points).
  - Balanced close: "UPOV 1991 ต้องฟังรอบด้าน" (UPOV 1991: hear all sides).
- **Typography:**
  - Heavy loopless Thai title with the English acronym in Latin, a red hand-drawn underline, and a drop shadow over video.
  - Single-line burned-in captions of about 15–25 characters, changing about every 1.5–2.5 s with the speech; white with a dark stroke, at about 65% of frame height.
  - Buddhist Era date stamp "7 ตุลาคม 2569".
  - Exact font unverified.
- **What to borrow:**
  - The familiar "X คืออะไร" (what is X) title formula.
  - Show the real archival document with the relevant passage highlighted.
  - พ.ศ. (Buddhist Era) dates.
- Local files: `media/th-thestandard-upov1991/`

**Other observations**
- **Google Thailand e-Conomy SEA 2024** ([link](https://x.com/GoogleThailand/status/1856964045368356914), 1,844 views) has a Thai caption but an English-only video, a common regional-asset shortcut.
- **Other Google Thailand series:** "A(I) to Z with Gemini", 2025 ([link](https://x.com/GoogleThailand/status/1889932548857327630), 1,028 views), and #SaferwithGoogleTH (2024). Both get hundreds to low thousands of views.

### Inferences
- **Font recommendation for this film (inference from the evidence above):**
  - **Headlines and chapter cards:** a loopless Thai sans such as **IBM Plex Sans Thai or its loopless companion Anuphan**, Noto Sans Thai, Kanit or Prompt. Plex has a matching Latin family for the English technical terms, which avoids Latin/Thai mismatch.
  - **Any line longer than about 1 sentence, and for senior or older commanders:** consider a **looped** face (IBM Plex Sans Thai Looped or Noto Sans Thai Looped). Typotheque found older readers discern looped forms better, and looped reads slightly faster in paragraphs.
  - **Use Sarabun (TH Sarabun New)** only where a "government document" feel is intended, for example a recreated archival memo or form. It signals official paperwork.
- **Line height:** set Thai at about 1.5–1.7× font size for multi-line text. Never leave line-2 tone marks touching line-1 below-vowels (the E11 failure). Test every string with stacked marks (for example "ปู่", "ที่", "ญี่ปุ่น", "ฤทธิ์") in the chosen font.
- **Thai + English mixing:**
  - Set English terms in the matching Latin of the same family.
  - Optically reduce Latin capitals about 5–10% or use small caps, because Latin capitals look larger than Thai consonants (observed in E10 and E12; this percentage is an inference, not a standard).
  - Put English acronyms in small "tag" chips.
  - Avoid splitting a Thai phrase across lines at a non-phrase boundary. Spaces separate phrases (W3C), so break only at spaces.
- **Pacing for Thai:** at most 35 base characters per line, at most 2 lines, and a 10–12 cps target (17 cps hard ceiling).
- **Dates:** use พ.ศ. for 120-year timelines, optionally with ค.ศ. in small type for international partners.
- **Platform note:** Thai motion explainers on X get far lower engagement than English ones in this sample. Plan the X post copy in Thai with the key numbers, and do not rely on X engagement as a quality signal.

### Gaps
- I could not reach @BBCThai, @WorkpointTODAY or @blognone video posts (fxtwitter 404s). The deeper keyword scans of @ThaiPBS and @Thairath_News failed on rate limits. Thai government or agency explainers on X (ETDA, DGA, Bank of Thailand, NCSA) were not found under the handles I tried. @ThaiCERT and @MicrosoftTH returned no video posts.
- **Exact fonts used in the X videos are unverified.** They are identified visually only (loopless geometric sans; Google's Thai brand face is likely but not confirmed).
- No authoritative numeric line-height standard for Thai on screen was found; the 1.6 figure is from an informal test.
- I found no Thai-language research on caption reading speed beyond Netflix's style guide.

## 5. Common mistakes in technical explainers for non-experts

### Takeaway
The recurring failures are:
- **The curse of knowledge:** experts overestimate how clear they are.
- **Jargon, even when defined:** it lowers engagement and support for adoption.
- **Too much text for the hold time:** a measured Thai example ran at 39 cps against a 17 cps ceiling.
- **Engineer-grade all-at-once diagrams.**
- **Text competing with busy visuals or overlapping UI.**
- **Extraneous decoration** (the coherence principle).
- **Overextended metaphors.**
- **Running long:** engagement drops after about 2 minutes.

### Cited Findings
- **Curse of knowledge:** tappers predicted 50% recognition; actual was 2.5%. — [Psychology Today](https://www.psychologytoday.com/gb/blog/i-hear-you/202104/whats-the-curse-knowledge-and-how-can-you-break-it)
- **Jargon:** it lowers processing fluency, raises risk perception and lowers support for technology adoption (N = 650). — [Bullock et al. 2019](https://pubmed.ncbi.nlm.nih.gov/31354058/). Definitions did not mitigate disengagement. — [ScienceDaily on Shulman et al. 2020](https://www.sciencedaily.com/releases/2020/02/200212084357.htm)
- **Coherence (extraneous material hurts learning):** d ≈ 0.70 in one review; 0.86 and 1.32 in other versions. — [synapsesocial](https://www.synapsesocial.com/es/papers/69dbbbdacebd566818835a69); [Cambridge Handbook](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/C98AB3A6CE760DD63C048936EA0B3B44)
- **Busy graphics need more reading time:** "allow viewers enough time both to read the subtitle and to take in the visuals". Long figures need more time. — [BBC Subtitle Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/)
- **Metaphor risks:** metaphors can limit reasoning and feed public misunderstanding. — [Taylor & Dewsbury 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5969428)
- **Length:** engagement drops significantly after about 2 minutes. — [Wistia](https://wistia.com/blog/optimal-video-length)
- **Measured over-density:** Google Thailand Personal Intelligence ran at about 39 cps on its "control" card (140 base characters in 3.57 s), with the heading overlapping UI text. — [link](https://x.com/GoogleThailand/status/2044687236394881471). For contrast, Netflix Thai allows at most 17 cps. — [Netflix Thai TTSG](https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308)
- **All-at-once engineering diagram:** the ByteByteGo SSH GIF shows 20 numbered steps and about 30 labels in one frame. It is heavily bookmarked by engineers (959 bookmarks), but its density is the opposite of what lay audiences need. — [link](https://x.com/alexxubyte/status/2105666471326331207)
- **Oversharing risk in permission-inherited AI:** if existing permissions are broad, the AI makes overshared content discoverable. — [Microsoft SharePoint Copilot guidance](https://learn.microsoft.com/ar-sa/sharepoint/sharepoint-copilot-best-practices/)

### Inferences
- **Mistakes to avoid in this film:**
  1. Opening with architecture boxes (OCR → Embeddings → Vector DB → LLM). Instead, open with the commander's question and the stakes.
  2. Leading with English jargon. Lead with a Thai plain phrase plus a small English tag, and no more than about 4 tags.
  3. Body paragraphs under headlines. Use one line, or two at most, and check every card against 17 cps.
  4. Showing the whole pipeline at once. Reveal one step per beat.
  5. Decorative motion (particles, glows) that does not encode meaning (coherence).
  6. A metaphor stretched past its limits. Add one "unlike a clerk, it shows its sources and can be audited" beat.
  7. Promising perfect security. Say "it follows the same clearance rules as your files" and show that permissions must be clean (the oversharing caveat).
  8. Running past 90–120 s.
  9. Thai type problems: tight leading clipping tone marks, Latin terms visibly larger than Thai, line breaks inside phrases, italics.
- **Pre-flight check:** have 3 non-technical staff watch it muted, then retell it. If they cannot state the bottom line ("ถามได้ ตอบเร็ว เห็นเฉพาะที่มีสิทธิ์ มีที่มาทุกคำตอบ" — ask anything, fast answers, see only what you're cleared for, every answer sourced), cut text. This counters the curse of knowledge.

### Gaps
- No study was found that measures explainer mistakes specifically in Thai or military audiences.
- Engagement data on X cannot isolate the effect of single design choices.

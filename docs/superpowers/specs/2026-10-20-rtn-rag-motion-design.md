# RTN permission-aware RAG explainer — motion design spec

Date: 2026-10-20 · Status: approved for autonomous build by the requester · Branch:
`claude/cool-archimedes-oh6nb8`

## Goal

A code-rendered motion explainer ("Claude Motion"-style) that explains how to build RAG
for the Royal Thai Navy's 120+ years of multimodal archives, so that people with no
technical background understand it on first viewing, while staying technically exact.

Confirmed with the requester: audience = Navy personnel and executives, mixed technical
background; 16:9 1920×1080 for a briefing screen; Thai on-screen text with English
technical terms; target ~90 s; content-first visuals (no ships or naval decoration); the
video never names its audience on screen; no voice-over.

## Content contract (every point of the brief appears)

| Brief point | Frame |
|---|---|
| 120+ years, PDFs / images / charts / tables; "how do we build RAG for the RTN?" | 01 |
| Ingestion by modality: text + structure; OCR + vision models; real data & relationships | 02 |
| Filename convention `<sub-unit>_<unit>_<owner-id>_<version-no>_<year>_<name>.pdf`, example `ศซบ_สสท_2600000001_v02_2569_นโยบาย69.pdf` | 03 |
| Governance metadata on every doc/chunk: SourceID, Version, Classification, Access | 04 |
| Ingest → Parse → Clean → Chunk → Embed → Index | 05 |
| Hybrid search: keyword (names, IDs, terms) + vector (meaning) + metadata filters (date, department, access); don't rely on vector alone | 06 |
| Reranker selects the most relevant results before the LLM (or other system) | 07 |
| If an employee can't access a document, RAG must not retrieve it | 08, 10 |
| Real permissions come from identity + the registry ACL; docs, chunks, tree nodes and agent tools share one scope | 09 |
| Scope is applied before searching; never search everything and filter afterwards | 10 |
| "The hardest part isn't embeddings… reliable, searchable, permission-aware knowledge" | 11 |

The frame-by-frame plan with exact copy and cue times is
`videos/rtn-rag-explainer/STORYBOARD.md`; the brief is `videos/rtn-rag-explainer/BRIEF.md`.

## Decisions

- **Engine: HyperFrames 0.8.181 (Apache-2.0) + GSAP 3.15.0.** Remotion was reviewed and
  installed as reference only: its free licence does not clearly cover a government body
  (its published 5.0 terms exclude governmental entities without written permission).
  HyperFrames compositions are plain HTML, so the same source also plays in a browser.
- **Workflow:** the HyperFrames `faceless-explainer` pipeline (brief → frame.md → storyboard
  → per-frame packets → one worker per frame → assemble → transitions → lint/check →
  snapshot → render), run autonomously; adapted for no narration (on-screen copy is the
  content).
- **Look:** `blue-professional` preset (cream ground, single cobalt accent, grey ladder, no
  shadows) with project rules in `frame.md`: cobalt = the active thing (question, AI reach,
  permission scope); greys = out of scope; green/red only as ✓/✗ chips.
- **Thai typography (revised at the requester's request):** Chulabhorn Likit (จุฬาภรณ์ลิขิต),
  the 14th Thai government standard font set, for all Thai and Latin text (Text 300–700;
  Display 500 for very large type), fetched from the Chulabhorn Royal Academy's official
  archive by `scripts/fetch-fonts.sh` (SHA-256 pinned, not committed); IBM Plex Mono for IDs,
  filenames and English chips; IBM Plex Sans Thai only as the ✓/→ fallback (Chulabhorn Likit
  lacks those glyphs). Line-height ≥ 1.45; hand-authored line breaks; reveal per phrase,
  never per character.
- **Story device:** one example document and one example question followed through the
  system; three-chapter tracker (อ่านได้ · ค้นเจอ · ตามสิทธิ์); climax = same question by two
  people with different permissions, then pre-filter vs post-filter.
- **Length: ~107 s, not 90 s.** Keeping every brief point at a readable pace (≤ 17 Thai
  chars/s hard ceiling, ~12 target, measured by `harness/check-copy.mjs`: 11.7 average)
  needs ~107 s. A shorter cut-down can be derived later by dropping frames 04 and 07.

## Quality harness

1. `harness/check-copy.mjs` — reading budget per frame (chars/s, ≤ 35 base chars per line,
   banned audience words). Gate before build.
2. HyperFrames `lint` + `check` (layout, motion, WCAG contrast) on the assembled project.
3. `snapshot` contact sheets at every Scene midpoint; visual review of Thai glyph rendering
   (no tofu, no clipped tone marks), keep-out (nothing below y = 896), overlap, hierarchy.
4. Independent review agents check each frame against its storyboard block (copy exact,
   reveal timing, no front-loading, no invented facts) and fix in place; loop until clean.
5. Render MP4 (1080p30, H.264), probe with ffprobe, extract frames from the MP4 itself for a
   final look; an optional SFX version is synthesised locally (no third-party media).

## Deliverables

- `videos/rtn-rag-explainer/renders/rtn-rag-explainer.mp4` (silent master)
- Source: `videos/rtn-rag-explainer/` (compositions, storyboard, frame.md, fonts)
- A browser-playable artifact page of the same composition (private link)
- Research and review notes: `reports/`, `research_notes/`, `.claude/skills/SOURCES.md`

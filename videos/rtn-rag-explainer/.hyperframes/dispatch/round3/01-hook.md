# Round-3 fix packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window: 0.0–9.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md '## Frame 1 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The tracker does not match the persistent layer it hands over to at 9.0 s. In 01's settled state, the '3 ตามสิทธิ์' text measures #9A9892, about 2.7:1, and '2 ค้นเจอ' measures about 4.5:1. In 02 all inactive pills measure about 5.0:1. Pill 3 also shifts about 6 px to the right at the hand-off: its left edge is at x≈413 in 01 and x≈419 in 02. The roadmap is only on screen for about 1 s and reads as faint grey outlines.

**Fix:** Build 01's tracker from the same component and geometry as the persistent layer: same pill x-positions, inactive text #6B6B6B (≥5:1) and the same border colour. Keep the 8.0 s cue, but stagger the pills at local 8.0, 8.15 and 8.3 s with 0.3 s fades, so all three are at full inactive colour by 8.6 s. That way nothing changes when the persistent layer takes over at 9.0 s.

Evidence (draft 3): still-01-hook.png, about 8.9 s: pill 3 text measured #9A9892 on #FCF8E5 (2.7:1), left edge x≈413. still-02-ingest.png: pill 3 text #6B6B6B (5.0:1), left edge x≈419. strip-01-hook.png, 8.0 and 8.5 s: pills are pale outlines.

### 2. [P2] The definition chip 'ค้นเอกสารจริงก่อน แล้วจึงตอบ' starts about 25 px below the glyphs of the headline line 'ให้กับ ทร. ได้อย่างไร?' (chip top y≈527). It reads as crowded against the headline.

**Fix:** Move the definition chip down 16 px (top y≈543), and move the media chip row down 16 px with it (to y≈656–705). Extend the bracket connector from the RAG underline by the same 16 px so it still meets the chip's right edge.

Evidence (draft 3): still-01-hook.png, 8.9 s: line 2 glyphs end at about y≈500 and the chip outline starts at y≈527. The bracket runs from the RAG underline (x≈505–620, y≈415) to the chip's right end (x≈668, y≈555).

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- The persistent chrome's pills: Chulabhorn Likit Text 500 28px, line-height 1.45, padding 6px 22px, border 1.5px rgba(30,43,250,0.2), gap 12px, inactive text #6b6b6b, container left 96px top 56px height 60px with the pills vertically centred (see compositions/chrome.html). Match that geometry exactly so nothing shifts at 9.0 s.

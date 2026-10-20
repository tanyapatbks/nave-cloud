# Round-2 fix packet — 05-pipeline

- File: compositions/frames/05-pipeline.html (the ONLY file you edit)
- Global window: 41.0–50.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 41 + local time.
- Storyboard block: STORYBOARD.md '## Frame 5 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] The Embed card's output is four evenly spaced lavender dots. They read as the four-dot governance pill used in 04, 09 and 11, or as a loading ellipsis, so 'Embed' can be taken to mean 'attach the four labels'.

**Fix:** Replace the four dots in the Embed card (x 1248–1508, y 536–684) with a 7-point scatter in two clusters of 3 and 4 points (10 px, #7B7FE0) over two faint 1 px axes forming a 120×80 px L, centred in the card. Keep the four-dot pill exclusively for the governance labels.

Evidence (draft 2, current global timing): still-05-pipeline.png: the Embed card shows four dots in a row at y≈610, visually close to the ●●●● label pill in still-04-tags.png.

### 2. [P2] The whole pipeline sits in a thin band: cards at y≈536–684, labels at y≈440–515, and about 390 px empty below (y≈690–1080). The 3–4 px line glyphs inside the 260×150 px cards are small at projection distance.

**Fix:** Increase card height from 150 to 220 px (cards at y≈480–700), scale the glyphs inside each card 1.5×, and move the Thai/English station labels to y≈400–460.

Evidence (draft 2, current global timing): still-05-pipeline.png: six small cards in a narrow band, with the lower third of the frame empty.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Global success colour: station checks become solid badges — white check on #0B6A45 (success-solid).
- Keep the strip vertically centred in the content area (the #f05-world container is offset top:110px; re-centre if you make the cards taller: card band roughly y 440–700 overall, labels above).

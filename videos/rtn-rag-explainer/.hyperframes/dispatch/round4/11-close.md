# Round-4 fix packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window: 101.0–111.0 s (frame length 10 s; root/ground data-duration 10). Global time = 101 + local time.
- Storyboard block: STORYBOARD.md '## Frame 11 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P1] The film's payoff row crowds the left tile column and sits off-centre. 'เชื่อถือได้' starts about 9 px after the solid left tile column, while 'รู้สิทธิ์' ends about 110 px before the right column. The row's centre is x≈910 against the frame centre of 960, so at projection the payoff word looks jammed into the tiles.

**Fix:** Move the whole payoff group (three words, two dots, three English chips) 50 px to the right, keeping the 80 px gaps. The text then spans ≈459–1461, centred on 960, with about 60 px clear of both tile columns. Also fade the two outer tile columns (x 285–397 and 1522–1635) to the inner tiles' ≈25% opacity between y 540 and 740.

Evidence (draft 4): still-11-close.png: dark payoff pixels span x 409–1411. The left tile column ends at x≈397, the right begins at x≈1522. Zoom of x 260–780 shows 'เ' almost touching the opaque tile edge.

### 2. [P2] The Embed glyph beside 'Embedding' is about 65×45 px, with dots about 6 px wide, all grey. At projection it looks like a smudge, and it does not match the grey / lavender / blue clusters of the frame-05 Embed card it should recall.

**Fix:** Reuse the frame-05 Embed scatter as the glyph: three clusters in the same three colours as the 05 card (grey, lavender, blue), 9 px dots, ≈80×56 px overall, with a 16 px gap before 'Embedding'.

Evidence (draft 4): still-11-close.png zoom of x 1060–1500, y 250–340: three small grey dot clusters on a thin axis. still-05-pipeline.png Embed card: grey, lavender and saturated-blue clusters.

### 3. [P2] Brief point 11 speaks of turning messy multimodal data into reliable knowledge. The closing background is an evenly aligned grid of tagged tiles from the start, so the before-and-after behind the payoff is never shown.

**Fix:** From local 0.0 to 4.6 s (101.0–105.6), render the background tiles with ±3° rotation, ±6 px offsets and no tag dots. Over local 4.6–5.4 s, as 'เชื่อถือได้' lands, ease them into the current aligned grid and fade in their ●●●● dots. No copy changes.

Evidence (draft 4): strip-11-close.png 101.5–107.0 s and still-11-close.png: the tile grid is uniformly aligned, each tile carrying 4 dots, unchanged through the frame.

## Orchestrator notes (take precedence where they conflict)

- The untidy-to-ordered settle must happen behind the cream backing plate and must not move any text.

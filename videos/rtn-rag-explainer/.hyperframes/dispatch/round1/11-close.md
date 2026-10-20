# Round-1 fix packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window: 101.0–111.0 s (frame length 10 s; root/ground data-duration 10). Global time = 101 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 11 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P1] 'Embedding' is struck through, a visual not in the deck. Viewers who learned 'แปลงเป็นความหมาย · Embed' as a required pipeline step in frame 05 can read it as 'embeddings are crossed out / not needed', although the sentence already says 'ไม่ใช่' and the brief only says embeddings are not the hardest part.

**Fix:** Remove the strike-through. Keep 'Embedding' in mid-grey #8a8a8a at the same weight, so it is de-emphasised but not negated.

Evidence (draft 1, old timing — global times there were pre-retime): still-11: 'Embedding' (x 1143-1420, y 270-325) is grey with a horizontal line through the word, directly after 'ไม่ใช่การสร้าง'.

### 2. [P2] All closing text sits directly on the tile grid. Line 2, which carries the thesis, is mid-grey and letter-spaced over tile lines and chart bars, and tile icons peek out at the edges of the English chips.

**Fix:** Place a cream backing plate (rgba(253,248,230,0.92), 24px radius) of about 1100x520, centred behind the text block (x 410-1510, y 250-770), or fade the grid columns behind it to at most 15% opacity. Darken line 2 to #3a3a3a (keep '120' blue) and drop its extra letter-spacing.

Evidence (draft 1, old timing — global times there were pre-retime): still-11: line 2 measures about #646057 on cream (about 5.6:1) over tile lines and chart bars (behind 'ปี' at x about 1310-1390). Tile icons peek out left of 'Searchable' (x about 830) and 'Permission-aware' (x about 1157).

### 3. [P2] The payoff separators are unevenly spaced, the shield pill on the dashed frame is icon-only (frame 09's counterpart carries a label), and the dashed frame sits off-centre vertically.

**Fix:** Place each dot at the midpoint between adjacent word ink boxes, with equal gaps of about 50px; lay out the three Thai words first, then centre each English chip under its word. Either remove the shield pill or give it the label 'ขอบเขตสิทธิ์', matching the deck copy used in frame 06. Move the dashed grid down about 60px so its top and bottom margins match.

Evidence (draft 1, old timing — global times there were pre-retime): still-11: 'ค้นหาได้' to the next dot is about 53px, but that dot to 'รู้สิทธิ์' is about 107px. Shield pill at x 190-258, y 50-93 has no text. The dashed frame runs from y about 72 to 888 (margins about 72 vs 192).

## Orchestrator notes (take precedence over the fixes above where they conflict)

- For the shield-pill P2: remove the icon-only shield pill (do not add new copy).
- Frame 11 starts at global 101.0 s now (was 97.0); its own timing is unchanged.

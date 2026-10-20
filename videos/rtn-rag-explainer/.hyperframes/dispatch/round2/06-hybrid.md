# Round-2 fix packet — 06-hybrid

- File: compositions/frames/06-hybrid.html (the ONLY file you edit)
- Global window: 50.0–62.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 50 + local time.
- Storyboard block: STORYBOARD.md '## Frame 6 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P1] The round-1 floor of 28 px for English labels is NOT met. The lane chips 'Keyword', 'Vector' and 'Metadata' render at about 22 px, the smallest English text in the film. They are also smaller than lane 3's value chips 'ปี 2569' / 'หน่วย สสท./ศซบ.' (about 34 px), so the three method names the frame teaches carry the least weight.

**Fix:** Render the three chips with the term-chip token: 28 px mono, about 48 px pill height, 12/16 px padding. 'Vector' then runs about x 1098–1228, so narrow each lane's four thumbnails from about 68 px to 56 px with 16 px gaps, and start the group at x≈1260 (it ends at x≈1532, inside the lane edge at 1558). In lane 3, move 'ปี 2569' and 'หน่วย สสท./ศซบ.' down to the sub-label row (y≈745, left-aligned at x=815) so the roughly 162 px Metadata chip fits on the title row.

Evidence (draft 2, current global timing): still-06-hybrid.png, enlarged: 'Keyword' spans about 91 px for 7 glyphs (13 px pitch, about 22 px font). The 'Hybrid Search' term chip in the same frame spans about 216 px for 13 glyphs (16.6 px pitch, about 28 px).

### 2. [P1] The must-teach 'together they find what one method alone misses' (brief 6: do not rely on vector alone) is not visible. The only cue for which lane found what is a set of 12 px corner markers. Keyword marks slots 1–3, including the table in slot 2. Vector marks slots 1 and 4, including the scan in slot 4. At the merge, all lane thumbnails dim to about 30% and the รวมผล stack shows three identical generic sheets. The table found only by Keyword and the scan found only by Vector are never called out.

**Fix:** No new text. At local 7.5–8.3 (57.5–58.3 s), before the merge, pulse a 3 px blue outline on Keyword slot 2 and Vector slot 4, and redraw their missing counterparts (Vector slot 2, Keyword slot 4) as empty dashed outlines. At local 8.4, fly the found thumbnails into รวมผล at full opacity, keeping their square or circle lane markers. Keep the table and scan sheets on top of the stack for at least 1.5 s. Dim the lanes only after local 9.9.

Evidence (draft 2, current global timing): still-06-hybrid.png, enlarged: the marker pattern is as described. strip-06-hybrid.png 58.5–59.0 s, enlarged: the lanes dim as the stack forms, and the stack sheets carry no lane identity.

### 3. [P2] The motion contradicts the headline 'ค้นหา 3 ทางพร้อมกัน' (search 3 ways at once): hits light lane by lane at 53.5–54.0, 55.5 and 57.0 s and never fire together. In addition, empty lane boxes fade in at 50.5–51.0 s, before the dashed scope border draws at 51.5–52.0 s. No lane searches before the scope, so blocker (a) stays fixed, but the lanes briefly exist outside the scope.

**Fix:** Fade the lane boxes in only after the border closes (local 2.0–2.4). Reveal each lane's title, chip and sub-label at the deck times 2.8 / 4.6 / 6.4, with no hits yet. At local 7.0, send one pulse from the question card along all three connectors so the Keyword squares, the Vector circles and the outlines of the Metadata value chips all light within 0.3 s (7.0–7.3). Then run fix 2 from local 7.5.

Evidence (draft 2, current global timing): strip-06-hybrid.png: faint lane boxes at 50.5 s and 51.0 s, the scope border drawing at 51.5 s and closed at 52.0 s, and hits appearing one lane at a time from 53.5 s to 57.0 s.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Lane chips Keyword / Vector / Metadata: 28px IBM Plex Mono (frame.md component 8). Re-lay the thumbnails as the fix describes so nothing collides.
- Keep the round-1 P0 intact: the dashed scope closes BEFORE any lane box or hit appears.
- Keep the example document (doc 1, cobalt outline) as the top card of the final stack for continuity with frame 07; the table and scan sheets must be visibly on top for ≥ 1.5 s during the merge, then the example document settles on top by ~9.9 s.

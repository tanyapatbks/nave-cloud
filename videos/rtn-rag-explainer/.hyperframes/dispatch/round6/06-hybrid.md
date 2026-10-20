# Round-6 (final) packet — 06-hybrid

- File: compositions/frames/06-hybrid.html (the ONLY file you edit)
- Global window (124.5 s film): 55.5–68.5 s (frame length 13 s). Global time = 55.5 + local time.
- Storyboard block: STORYBOARD.md '## Frame 6 —'. Its last note is the spec for this round:
  > Round-6 revisions (final): frame is 13s; everything below the headline moves down 48px; the other-unit strike is a 6px #5A564A diagonal on both column-3 tiles (35% opacity) fed by a 3px #5A564A connector from 'หน่วย สสท./ศซบ.' (neutral grey: this exclusion is a metadata filter, not a permission denial — never red or a lock); retime: strike 7.4s, hits 8.1 / 8.4s, keyword-only table + its missed slot 8.9s, vector-only scan + its missed slot 9.5s, card flight 10.0s, รวมผล 10.4s, settled by 10.9s; corner badges 24px with a 2px cream outline, chip glyphs 20px; the highlight band behind 'แนวทางปฏิบัติ' fully covers 'ติ' (right edge just before 'ปี', radius ≤ 12px).

## What to do

- Frame length is now 13 s: set BOTH root and #f06-ground data-duration to 13.5 (root already 13.5; ground still says 12.5).
- Global spacing fix (from the critic's global note): move everything below the headline down 48px (content then ends ≈ y 868, must stay < 896). Headline stays put.
- Timing per the Round-6 note (local): strike 7.4; hits 8.1 / 8.4; keyword-only table + its missed slot 8.9; vector-only scan + its missed slot 9.5; card flight 10.0; 'รวมผล' 10.4; settled by 10.9; then hold to the end. Lane cues 2.8 / 4.6 / 6.4 unchanged. The critic's own retime numbers are superseded by these.

## Draft-5 critic fixes (apply; where timing or pixel values differ from the Round-6 note above, the note wins)

- [P1] The other-unit column is struck before any hits light (61.0 s, then hits at 61.5 s), but the strike is too weak to read. It is a 2–3 px #1F3BFF diagonal over two tiles faded almost to the lane fill (x≈1405–1467, y≈335–590), fed by a 2 px connector from 'หน่วย สสท./ศซบ.'. It is fainter than the dashed × miss boxes and uses the same blue as a hit. It also fires only 0.5 s after the metadata lane that causes it.
  - Fix: Redraw the strike as a 6 px #5A564A diagonal on both column-3 tiles and set those tiles to 35% opacity. Redraw the connector from the 'หน่วย สสท./ศซบ.' chip up x=1436 at 3 px in #5A564A. Do not use red or a lock glyph: in frames 08–10 those mean 'no permission', and this exclusion comes from the metadata filter. Keep the dashed × boxes for misses only. Re-time within the deck: strike at local 7.4 (61.4 s, 1.0 s after the metadata lane lands at 6.4), hits at 7.9 and 8.2, × boxes at 8.6, card flight at 9.0, and 'รวมผล' stays at 9.4.
  - Evidence (draft 5, old timing): still-06-hybrid.png, zoomed on x 1240–1580: a thin blue slash over pale cream tiles, much lighter than the × boxes at x≈1480–1543 (lane 1) and x≈1328–1391 (lane 2). strip-06-hybrid.png: metadata lane at 60.5 s, strike and connector at 61.0 s with no tiles lit, hits at 61.5 s.
- [P2] Which method found each document is shown only by about 16 px ■ (Keyword) and ● (Vector) badges on tile corners, plus about 14 px glyphs in the chips. From the back of the room they blur into the tile outlines, so 'together they find what one alone misses' rests on the × boxes alone.
  - Fix: Enlarge the corner badges on lane tiles and on the three 'รวมผล' cards to 24 px with a 2 px #FDF8E5 outline. Enlarge the ■/● glyphs inside the 'Keyword' and 'Vector' chips to 20 px. Keep square = Keyword and circle = Vector everywhere.
  - Evidence (draft 5, old timing): still-06-hybrid.png: badges at tile corners (e.g. x≈1308–1324, y≈326–342) and merged-card badges at x≈1758–1778 are about 16–20 px; the chip glyphs at x≈1008 and x≈1097 are about 14 px.
- [P2] The lavender highlight behind 'แนวทางปฏิบัติ' in the question card ends inside the last character. Its rounded right edge (x≈428) cuts through the right stem of 'ต' and its upper vowel, so 'ติ' sits half outside the mark.
  - Fix: Wrap 'แนวทางปฏิบัติ' in its own span and size the highlight from that span's ink box. Put the right edge at x≈435, past 'ติ' and before 'ปี' at x≈437, the left edge 4 px before 'แ', and use a corner radius of 12 px or less. Do not change the text or its spacing.
  - Evidence (draft 5, old timing): still-06-hybrid.png, zoomed on x 100–1100, y 140–440: the highlight's right curve cuts through 'ติ'; this is visible from 55.5 s to 66.0 s in strip-06-hybrid.png.

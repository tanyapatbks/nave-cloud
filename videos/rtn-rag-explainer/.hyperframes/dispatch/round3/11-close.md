# Round-3 fix packet — 11-close

- File: compositions/frames/11-close.html (the ONLY file you edit)
- Global window: 101.0–111.0 s (frame length 10 s; root/ground data-duration 10). Global time = 101 + local time.
- Storyboard block: STORYBOARD.md '## Frame 11 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The payoff column centres are equal (560/960/1358), but the visible gaps are not: 140 px between 'เชื่อถือได้' and 'ค้นหาได้', and 187 px between 'ค้นหาได้' and 'รู้สิทธิ์', so 'รู้สิทธิ์' looks detached. The 'Permission-aware' chip's right edge (x≈1518) almost touches the opaque right-hand wall tiles (x≈1522).

**Fix:** Keep 'ค้นหาได้' centred at x=960 (x≈835–1085) and make both gaps 160 px. Move 'เชื่อถือได้' to x≈405–675 (20 px left) and 'รู้สิทธิ์' to x≈1245–1416 (27 px left). Put the dots at x≈755 and x≈1165, and centre each chip under its word. 'Permission-aware' then spans about x 1172–1489, 33 px clear of the right wall column.

Evidence (draft 3): still-11-close.png: words at x≈425–695, 835–1085 and 1272–1443; dots at x≈765 and 1180; Permission-aware chip at x≈1203–1518, next to the right-column tile edge at x≈1522.

### 2. [P2] From 101.5 to 102.5 s, about 40 faint document cards fly in from the edges into the dashed box while the thesis line 'ส่วนที่ยากที่สุด ไม่ใช่การสร้าง Embedding' types on. The busiest background motion sits under the film's key sentence.

**Fix:** Replace the fly-in with a 0.4 s in-place fade of the wall during the 10→11 crossfade (local −0.2 to 0.2 s), so the wall is still before line 1 starts at its deck cue of local 0.4 s.

Evidence (draft 3): strip-11-close.png: at 101.5 s cards are scattered at the frame edges while 'ส่วนที่ยากที่สุด' types; at 102.0 s they are converging under the line; at 102.5 s the wall is locked in the box.

### 3. [P2] The closing contrast 'ไม่ใช่การสร้าง Embedding' relies on the viewer remembering the brief 'Embed / แปลงเป็นความหมาย' card from about 45.5 s, roughly 56 s earlier.

**Fix:** Put a 48 px version of 05's Embed point-scatter glyph, in the same #5C584F grey, 16 px to the left of 'Embedding'. Fade it in with line 1 at local 0.4 s. Add no copy.

Evidence (draft 3): still-11-close.png: 'Embedding' (x≈1135–1437, y≈300) stands alone in grey. still-05-pipeline.png: the Embed card's scatter is the only earlier visual for the term.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- The 48px Embed glyph must look like frame 05's new Embed point-scatter (three tinted clusters); copy its shape as your own prefixed inline SVG in grey #5C584F.

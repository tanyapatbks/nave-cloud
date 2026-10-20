# Round-3 fix packet — 10-prefilter

- File: compositions/frames/10-prefilter.html (the ONLY file you edit)
- Global window: 89.0–101.0 s (frame length 12 s; root/ground data-duration 12.6). Global time = 89 + local time.
- Storyboard block: STORYBOARD.md '## Frame 10 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] The leaked-trace residue gets only about 0.5 s on its own. 'log' and 'จำนวนผล' land at about 93.0 s, and 'สรุป' lands at 93.5 s together with the right label '✓ ขอบเขตก่อน แล้วค่อยค้น'; the right scope box starts drawing at 94.0 s and pulls the eye away. The deck intended a 0.8 s gap (residue at local 3.8, right label at local 4.6).

**Fix:** Delay the whole right-hand path by 0.8 s: right label at local 5.3 s (94.3 s), scope box at 5.7, scan at 6.2, result at 6.7, left-panel dim at 7.1, rule lines at 7.6 and 8.1 (about 3.9 s hold before 101.0 s). From local 4.5 to 5.3 s, animate a dash-offset crawl on the dotted trails from the dashed locked-document slot to each chip and on to the AI spark, so the leak reads as motion.

Evidence (draft 3): strip-10-prefilter.png: two residue chips at 93.0 s; at 93.5 s 'สรุป' and the right label appear together; at 94.0 s the right dashed scope is drawing; the rule appears at 96.0 and 96.5 s.

### 2. [P2] The leak drawing is faint at projection distance. The trails are 2 px dotted lines at reduced opacity, the locked source slot is a dashed box of only about 42×52 px, and each open padlock sits about 4 px from its word.

**Fix:** Draw the trails at 3 px with 4/6 dashes, full opacity, #B3261E. Enlarge the dashed locked-document slot to about 64×80 px with a 28 px padlock. Add 8 px between each open-padlock icon and its label.

Evidence (draft 3): still-10-prefilter.png, crop x 510–870 y 360–610: thin dotted trails run from the dashed padlock box (x≈715–757, y≈378–432) to the chips. The padlock glyphs nearly touch 'log', 'จำนวนผล' and 'สรุป'.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- Deck cues changed: right label 5.3 s, rule lines 7.6 s and 8.1 s. Keep the rule fully legible ≥ 3.5 s before the 12.0 s exit.

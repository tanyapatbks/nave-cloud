# Round-3 fix packet — 05-pipeline

- File: compositions/frames/05-pipeline.html (the ONLY file you edit)
- Global window: 41.0–50.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 41 + local time.
- Storyboard block: STORYBOARD.md '## Frame 5 —' — Scene lines plus its 'Round-2 revisions' and 'Round-3 revisions' lines (the spec).

## Fixes from critic round 3

### 1. [P2] Embed is the active station for under 1 s: its label and scatter land at about 45.5 s and Index lights at 46.0 s. Its glyph is 7 dots of about 10 px in an axis area of about 120×80 px inside a 260×220 card, so it reads as a few specks. Frame 11 later depends on viewers having registered 'Embedding'.

**Fix:** Redraw the Embed glyph as 18–24 points of about 12 px in three tinted clusters filling about 180×130 px of the card. Animate the points drifting into their clusters over 0.8 s from local 4.4 s (45.4 s). Light Index at local 5.6 s (46.6 s) instead of 5.0 s; the frame still holds until 50.0 s.

Evidence (draft 3): still-05-pipeline.png: the Embed card (x 1248–1508, y 488–708) contains 7 small dots in two clusters near x≈1340–1420, y≈570–630. strip-05-pipeline.png: Embed is lit at 45.5 s and Index at 46.0 s.

### 2. [P2] The Parse card's grey ~8 px squares sit at the far ends of its lines (x≈423/430 and x≈621) and read as stray render artefacts. The station connector also starts at x=0, at the left edge of the frame, but ends at the Index card.

**Fix:** Put each Parse marker square 8 px to the left of the start of the line it tags, aligned to that line's x-start (x≈440), and remove the right-side squares. Start the connector at the Ingest card's left edge (x≈97), so it runs card to card only.

Evidence (draft 3): still-05-pipeline.png: the Parse card (x 386–646) shows grey squares at its left and right edges, not attached to lines. The connector is visible from x=0 to x≈97 left of the Ingest card.

## Global fix for every frame

- [P2] Text floor: Define one lightest-text token, no lighter than #6B675C (5.3:1 on #FCF8E5), and one secondary token at #5F5B50 (6.4:1). Replace every lighter text colour across frames 01–11 with them. Opacity dims on de-emphasised panels (10 left panel, 07 rows below the cut) stay allowed, but dimmed text must remain ≥4.5:1.

## Orchestrator notes (take precedence where they conflict)

- Keep the round-2 work (220px cards, solid success checks, mono station chips).

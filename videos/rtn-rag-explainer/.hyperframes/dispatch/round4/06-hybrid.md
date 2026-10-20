# Round-4 fix packet — 06-hybrid

- File: compositions/frames/06-hybrid.html (the ONLY file you edit)
- Global window: 50.0–62.0 s (frame length 12 s; root/ground data-duration 12.5). Global time = 50 + local time.
- Storyboard block: STORYBOARD.md '## Frame 6 —' — Scene lines plus every 'Round-N revisions' line (the spec).

## Fixes from critic round 4

### 1. [P1] The Metadata leg of hybrid search is shown for about 1 s, inside a burst of about seven simultaneous changes, and it reads as filtering after the search. At 56.5 s the 'หน่วย สสท./ศซบ.' chip is still a ghost. At 57.0 s, Keyword tiles 1–3 (including column 3, with its ■ marker) and Vector tiles 1 and 4 fill, Vector column 3 is slashed and the strike connector draws, all at the same time. At 57.5 s Keyword column 3 is slashed after it had lit, the Vector column-2 X appears, the keyword table is outlined, and the connector is already faint. By 58.0 s the connector is gone. In the settled state column 3 is slashed with no visible cause and the Metadata lane looks idle. Brief point 6 (metadata as the third method) is half-taught, and the order (hit, then strike) mirrors the wrong method frame 10 condemns.

**Fix:** Keep the deck cues (Keyword lane local 2.8 s, Vector 4.6 s, Metadata 6.4 s, รวมผล 9.4 s) and re-sequence only what follows the Metadata lane, one group at a time:
(a) local 6.4–6.8 s (56.4–56.8): both filter chips land fully opaque.
(b) 6.9–7.3 s: draw a 2 px connector in the chip's blue outline colour from the right edge of 'หน่วย สสท./ศซบ.', across to the column-3 x (≈1436) and up through the Vector and Keyword column-3 tiles. Slash both column-3 tiles while they are still grey and unmarked (they never get ■ or ●). Pulse the chip 1.0→1.08→1.0 over 0.4 s. Keep this connector on screen at 60% opacity to the end of the frame.
(c) 7.4–7.7 s: fill the remaining hits in both lanes together (Keyword cols 1–2 ■, Vector cols 1 and 4 ●).
(d) 7.8–8.5 s: single out the keyword-only table (Keyword col 2) together with the Vector col-2 dashed X.
(e) 8.6–9.3 s: single out the vector-only scan (Vector col 4) together with the Keyword col-4 dashed X.
(f) รวมผล stays at 9.4 s.

Evidence (draft 4): strip-06-hybrid.png, zoomed. 56.5 s: second filter chip ghosted. 57.0 s: Keyword col 3 lit with ■ and not yet struck; Vector col 3 slashed; connector drawn; five tiles filling in the same cell. 57.5 s: Keyword col 3 now slashed, Vector col-2 X, table tile outlined, connector faint. 58.0 s: connector gone. still-06-hybrid.png: both column-3 tiles slashed; the Metadata lane holds only 'ปี 2569' and 'หน่วย สสท./ศซบ.'.

### 2. [P2] The tiles struck by the metadata filter look like two different states. In the Keyword lane the struck tile stays fully lavender with a lavender ■. In the Vector lane it fades almost to the background, with a grey ●.

**Fix:** Use one struck style in both lanes: tile at 40% opacity, no hit marker (per fix 1), and the same 2 px slash in the 'หน่วย สสท./ศซบ.' chip-outline blue used by the connector.

Evidence (draft 4): still-06-hybrid.png zoom: Keyword col 3 (x≈1404–1467, y≈335–421) lavender fill and lavender square. Vector col 3 (y≈505–591) near-background fill, grey circle, dark slash.

### 3. [P2] In the รวมผล column, the fan of five outlined sheets behind the middle (●■) tile rises to y≈448 and overlaps the top tile's bottom-right corner (which ends y≈459). The middle tile's markers sit on the fan edge, so the merge reads as a pile. The five extra sheets also have no visible source in the lanes.

**Fix:** Raise the gap between merged tiles from ≈20 px to 36 px. Offset the fan sheets only +6 px x and +6 px y per sheet from the middle tile, so no sheet rises above its top edge. During local 9.0–9.4 s, slide the five fan sheets out from behind the column-1 doc tiles of both lanes (the hit both lanes share) into the fan, so the extra sheets visibly come from the searches.

Evidence (draft 4): still-06-hybrid.png zoom of x 1650–1800: the outlined fan starts above the middle tile and touches the top tile's corner. The ● and ■ markers overlap the fan's top edge. strip-06 59.5 s: the fan appears at once, with no motion from the lanes.

## Orchestrator notes (take precedence where they conflict)

- Keep the round-1 P0 (scope closed before any lane box) and the highlight band behind 'แนวทางปฏิบัติ' (no stroke). Keep the example document in the middle of the fan with its cobalt outline.

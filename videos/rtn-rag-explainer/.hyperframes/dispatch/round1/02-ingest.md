# Round-1 fix packet — 02-ingest

- File: compositions/frames/02-ingest.html (the ONLY file you edit)
- Global window: 9.0–20.0 s (frame length 11 s; root/ground data-duration 11.5). Global time = 9 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 2 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P1] The third modality's payoff 'ดึงตัวเลขจริง + ความสัมพันธ์' lands last and gets only about 1.8 s before the push-out. Each lane's description arrives about 2.0-2.5 s after its label.

**Fix:** Keep lane starts at local 1.4 / 4.2 / 7.0 s. Compress each lane's icon, arrow and output-box build from about 2.0 s to about 1.2 s, so each description lands at local 2.6 / 5.4 / 8.2 s (now about 4.0 / 6.0-6.5 / 9.0). Lane 3's description then holds at least 2.5 s before the push at about local 10.7 s, with no change to the frame's length.

Evidence (draft 1, old timing — global times there were pre-retime): strip-02: lane 3 label at 16.0 s, description only at 18.0 s. 19.5 s is the last full cell, and 20.0 s (strip-03) is mid-push. Lane 1 text lands at 13.0 s and lane 2 at 15.0-15.5 s.

### 2. [P2] Lanes 2 and 3 sit as empty outlines for several seconds before their content arrives. Lane 2 shows only its blue accent bar, which looks like a text cursor. Projected, these read as unfinished placeholders.

**Fix:** Do not pre-draw the lane containers at local 0.5 s. Fade and scale each lane container in together with its label (lane 2 at local 4.2 s, lane 3 at 7.0 s), starting no more than 0.15 s before the label text. Draw the blue accent bar with the label, not before it.

Evidence (draft 1, old timing — global times there were pre-retime): strip-02: at 10.0 s, three empty lane outlines. At 13.0 s, lane 2 holds only a blue vertical bar. At 15.5 s, lane 3 is still an empty outline.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- Also implement the storyboard's new lane-2 machine-reading beat: the scan input appears on the output side first as an ASCII-style ink map (a small deterministic grid of IBM Plex Mono density characters from ' .:-=+*#', computed by a fixed seeded function of row/column index) that resolves per word (never per Thai character) into the clean text lines. It must fit inside the compressed ~1.2 s lane build and stay legible; keep it small and calm (no flicker loops, no repeat).
- Type floor: the 'OCR + Vision Models' chip and any English labels ≥ 28px.

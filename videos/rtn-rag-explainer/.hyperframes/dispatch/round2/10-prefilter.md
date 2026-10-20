# Round-2 fix packet — 10-prefilter

- File: compositions/frames/10-prefilter.html (the ONLY file you edit)
- Global window: 89.0–101.0 s (frame length 12 s; root/ground data-duration 12.6). Global time = 89 + local time.
- Storyboard block: STORYBOARD.md '## Frame 10 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P1] The residue box can read backwards and is cramped. Each residue chip 'log' / 'จำนวนผล' / 'สรุป' carries a closed padlock, which a lay viewer reads as 'protected', the opposite of 'traces of the restricted document leaked to the AI'. Nothing shows the traces coming from the locked document. The dashed ghost tile with its lock (x≈636–708, y≈480–578) sits behind 'จำนวนผล' and 'สรุป': the จำนวนผล pill crosses the ghost's top edge, and the chips sit 8 px or less from the red border.

**Fix:** Replace the closed padlock on each chip with an open padlock (shackle raised) in the same red. Shrink the ghost to a 44×56 px dashed locked tile pinned over the box's top-right corner (x≈690–734, y≈388–444) so it touches no chip. Give the chips 16 px inner padding. As each chip appears, draw a 2 px red dotted trail from the ghost tile into it; after the last chip, continue one trail along the arrow into the AI circle (x≈768–822, y≈468–522). No new text.

Evidence (draft 2, current global timing): still-10-prefilter.png, enlarged residue box: there are three small closed locks, and the dashed ghost outline runs under the right end of 'จำนวนผล' and beside 'สรุป'.

### 2. [P1] The wrong-path story (brief 10) plays four beats in about 2 s, then the frame is static for 5 s. At 90.5 s the sweep passes over all 12 docs. At 91.0 s a locked doc is pulled out. At 91.5 s it sits in the red box under the filter bar. At 92.0 s the residue chips appear and the doc becomes a ghost. The 'filter afterwards' moment is visible for a single 0.5 s sample, and nothing moves from 96.0 s to 101.0 s.

**Fix:** Re-time in local seconds within the existing 12 s. Sweep 1.2–2.0. Pull the locked doc into the box 2.0–2.6. Hold 0.4. The filter bar drops and the doc fades to the ghost 3.0–3.5. Hold 0.3. Residue chips at 3.8 / 4.1 / 4.4, with fix 1's trails. Right label at 4.6. Scope draws 4.8–5.3. Scoped search and result 5.3–6.4. Rule line 1 at 6.8, line 2 at 7.3. The rule still gets about 4.4 s before the exit.

Evidence (draft 2, current global timing): strip-10-prefilter.png, enlarged 90.0–92.5 s: each beat occupies exactly one sample. The 96.0–100.5 s cells are identical.

### 3. [P2] As the rule 'ถ้ากำลังพลเปิดเอกสารไม่ได้ / RAG ก็ต้องดึงเอกสารนั้นไม่ได้' types in, three things change at once: both panels shrink about 8% (left x≈95–894 to 128–867), both shift up, and the left panel dims to about 50%. The comparison the viewer has just been reading moves while new text appears.

**Fix:** Lay both panels out at their final size and position (x≈128–867 and 1052–1791, y≈272–687) from local 0, so that only the left-panel dim animates. Run the dim at local 6.4–6.8, before rule line 1 at 6.8 (fix 2 timing).

Evidence (draft 2, current global timing): strip-10-prefilter.png, enlarged 95.0 / 95.5 / 96.0 s: the panels are larger at 95.0–95.5 s and smaller, higher and dimmed (left) at 96.0 s, while line 1 types and line 2 appears.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- Right label '✓ ขอบเขตก่อน แล้วค่อยค้น' text in success-ink #08573A on its light tint.
- Deck cues: residue 3.8 / 4.1 / 4.4 s, right label 4.6 s, rule line 1 at 6.8 s and line 2 at 7.3 s. The rule must remain fully legible ≥ 4.3 s before the 12.0 s exit.
- Draw the open padlock as inline SVG (shackle raised and offset).

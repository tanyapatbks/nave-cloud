# Round-1 fix packet — 10-prefilter

- File: compositions/frames/10-prefilter.html (the ONLY file you edit)
- Global window: 89.0–101.0 s (frame length 12 s; root/ground data-duration 12.6). Global time = 89 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 10 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P0] From about 94.0 s to the end, both comparison panels are blurred, including the correct right panel and its dashed scope. The wrong-path label '× ค้นทั้งคลัง แล้วค่อยกรอง' and the residue chips are smeared pink-on-pink and cannot be read, so the before/after comparison behind brief point 10 is lost while the rule is on screen.

**Fix:** From local 7.0 s, remove the blur filter from both panel containers (blur 0, native scale). Push the wrong panel back with opacity only: its documents and box at 0.5, while the '×' label stays at 1.0 as #b42318 text on #fde7e3. Keep the right panel, its '✓ ขอบเขตก่อน แล้วค่อยค้น' label and the dashed scope at 100% and sharp. Keep the residue chips 'log' 'จำนวนผล' 'สรุป' at full opacity, at least 28px, #b42318 on #fde7e3.

Evidence (draft 1, old timing — global times there were pre-retime): still-10: the headline and rule are sharp but both panels are soft. The left label measures about #E89D91 on #FACFC0 (about 1.5:1), and the residue chips are smeared. strip-10: sharp at 93.5 s, blurred from 94.0 s.

### 2. [P1] The left panel shows the method is wrong but not why. The forbidden document's lock is about 20px, grey and faint, and once it enters the box it is replaced by three plain peach words, 'log / จำนวนผล / สรุป', with nothing marking them as traces leaked from that document.

**Fix:** Enlarge the locks on all locked cards in both panels (column 1, about x 165-195) from about 20px grey to 32px solid #b42318. As the card lifts at local 2.0 s (global 89.0), pulse its outline 2px #b42318. When it enters the box at local 2.5 s, leave its dashed ghost outline with the lock at 30% opacity behind the chips. Give the result box (x 553-722, y 447-632) a 2px #b42318 border, and put a 16px lock glyph to the left of each residue chip. No new copy.

Evidence (draft 1, old timing — global times there were pre-retime): strip-10 zoom: at 88.5 s the sweep covers all 12 left docs, including the three locked ones in column 1. At 89.0 s the row-2 locked card lifts; at 89.5 s it sits in the box with a small grey lock; at 90.0 s it is gone and the three peach chips show with an arrow to the AI node, with no leak marking.

### 3. [P1] The film's core rule 'ถ้ากำลังพลเปิดเอกสารไม่ได้ / RAG ก็ต้องดึงเอกสารนั้นไม่ได้' gets about 2.3 s of full readability. It is also jammed about 20px under the panels, so it reads as a caption of the right panel rather than the conclusion.

**Fix:** Extend frame 10 by 2.0 s, holding the settled state to local 11.8 s, and shift frame 11 by 2.0 s. Scale both panels to 0.92 about their top edge so they end at y ≤ 690, and set the rule at y 780-890, leaving at least 80px clear above it.

Evidence (draft 1, old timing — global times there were pre-retime): strip-10: rule line 1 appears at 93.5 s and line 2 completes at 94.5 s; 96.5 s is the last cell before the 97.0 s crossfade. still-10: panels end at y about 748 and the rule ink starts at y about 767.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- The frame is now 12 s: set your root data-duration and ground clip data-duration to 12.6 (12 s + 0.6 s blur-crossfade).
- Use the shared SVG check icon (frame.md component 6) in '✓ ขอบเขตก่อน แล้วค่อยค้น' if it is currently a text glyph.
- The rule must be fully legible from ~7.4 s to the end (≥ 4.6 s).

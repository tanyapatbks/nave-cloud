# Round-1 fix packet — 01-hook

- File: compositions/frames/01-hook.html (the ONLY file you edit)
- Global window: 0.0–9.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 0 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 1 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P1] Brief point 1 says the data comes in many forms, but this barely lands. The five modality chips PDF / ภาพสแกน / รูปภาพ / แผนภูมิ / ตาราง are about 16-20px lavender-on-lavender labels scattered inside 125px wall tiles. They are readable only from about 2.5 to 4.5 s, then blur away with the wall.

**Fix:** At local 2.4 s, stagger the five chips (0.15 s apart) into one foreground row in the left column, at x 96, y about 550, under the subtitle (which sits at about y 465-510 at that moment). Style: 32px semibold #1f2bd8 on #e6e7fb, 12px gaps, each chip with its tile icon at 28px. As each chip lands, pulse its matching wall tile (scale 1 to 1.06 to 1 over 0.3 s). At local 4.6 s, tween the row as one group (0.6 s) to x 96, y 640-690 at 28px. That spot is in the empty lower-left, 50px below the RAG chip. Keep the row unblurred until the crossfade, and remove the in-tile labels.

Evidence (draft 1, old timing — global times there were pre-retime): strip-01, 2.5-4.5 s: the five labels are tiny lavender pills inside tiles spread across the wall. From 5.0 s the wall is blurred and dimmed. In still-01 they are illegible smudges ('PDF' at about x 845-900, y 250-280; 'ภาพสแกน' at about x 965-1075, y 625-655).

### 2. [P1] The chip 'ค้นเอกสารจริงก่อน แล้วจึงตอบ' is the film's only definition of RAG, but it is small (about 22-24px text). It has a double-width gap after 'ก่อน', floats one line below RAG, overhangs the end of line 2, and has no visual tie to the RAG underline, so it reads as a separate tagline.

**Fix:** Use a single U+0020 between 'ก่อน' and 'แล้วจึงตอบ' and set the chip text to 32px. Left-align the chip at x 96, y 525-585, directly under line 2, flush with the headline. Give the chip a 2px #1f2bd8 outline matching the RAG underline. When the chip lands at local 6.0 s, pulse the RAG underline (opacity 1 to 0.4 to 1 over 0.4 s) in the same beat, so the two read as term = definition.

Evidence (draft 1, old timing — global times there were pre-retime): still-01: chip at x 377-738, y 540-590, with a visibly doubled space before 'แล้วจึงตอบ'. It is centred under 'RAG' (x 499-617, underline at y about 413) but sits below line 2, which ends at about x 622. Nothing connects the two.

### 3. [P2] The hero number shows numbers that are not in the deck (89, 118, then 120 without '+') before settling. While it shrinks, '120+' and its subtitle travel on different paths and visibly come apart.

**Fix:** Show '120+' with the '+' from its first frame at local 0.3 s. Either drop the count-up or finish it by local 0.8 s. At the 4.5 s shrink, wrap '120+' and 'ปี ของข้อมูลกองทัพเรือ' in one group and tween the group's transform (one origin, same duration and ease) instead of moving each element separately.

Evidence (draft 1, old timing — global times there were pre-retime): strip-01: 0.5 s shows '89', 1.0 s '118', 1.5 s '120' with no '+'; '120+' appears only from 2.0 s. At 4.5 s the subtitle trails below and right of the shrinking number before snapping beside it.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- Your tracker CSS was already resized to 28px / padding 6px 22px to match the persistent chrome that takes over at global 9.0 s. Do not change the tracker's size, position or styles.
- Apply all three fixes. For P2 (hero number) drop the count-up: '120+' appears whole with its '+' from its first frame.

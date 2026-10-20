# Frame packet: 12-stage2

## Project inputs

- Project: /home/user/nave-cloud/videos/digital-navy-nave
- Design tokens: /home/user/nave-cloud/videos/digital-navy-nave/frame.md
- RULES_DIR: /home/user/nave-cloud/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 12 — ขั้นที่ 2: Foundation + Builder NAVE + Practical

- scene: Stage 2, the stage in progress, in two halves: data foundations (frame 03's file question answered: organise the files; documents are the units' operations; clean the data), then the builder's decisions (where to store, what the web looks like, what outputs must achieve, RAG or CAG) and the retrieval stack
- voiceover:
- duration: 20s
- transition_in: push-slide LEFT
- status: outline
- src: compositions/frames/12-stage2.html
- type: feature_showcase
- persuasion: Callback answer (frame 03's question resolved in place) + question→answer pairing (each builder decision as a plain question)
- beat: Focus + momentum
- blueprint: compose
- term: Stage 2 / 5
- focal: "Data Foundations · จัดระเบียบไฟล์" (Part A), then the question rows (Part B)
- roles: stage header + in-progress pill = supporting · data-foundations block = foreground subject · document flow (messy → clean) = foreground subject (Part A) · question rows = foreground subject (Part B) · retrieval chips = supporting
- onscreen: eyebrow "ขั้นที่ 2" (0.3s) · title "Foundation + Builder NAVE + Practical" (0.3s) · pill "ขั้นที่กำลังทำ" (0.8s) · purpose "เข้าใจแก่นของระบบ · พัฒนาอย่างมั่นคง" (0.8s) · block "Data Foundations" (2.0s) · question "จัดการไฟล์อย่างไร?" (2.0s) → answer "จัดระเบียบไฟล์" (2.6s) · flow "Documents" (3.6s) "การดำเนินงานของหน่วยขึ้นตรง" (4.0s) → "Data Cleaning" (5.6s) · rows "Databases" "เก็บข้อมูลที่ไหน?" (8.4s) "Web UI" "หน้าเว็บเป็นยังไง?" (9.6s) "Structured Outputs" "Outputs ต้องการประสิทธิผลแบบไหน?" (10.8s) "RAG or CAG Pipelines" "ชั่งข้อดีข้อเสีย · คุณภาพ" (12.2s) · label "เตรียมระบบค้นหา" (13.6s) · chips "Vector DB" "Embeddings" "Retrieval" "Chunking" (13.8s)

narrativeRole: The stage NAVE is entering: lay data foundations (organise each unit's documents and clean them — the answer to frame 03's question) and settle the builder's core decisions and retrieval stack.
keyMessage: Stage 2 means organising and cleaning each unit's documents, then deciding where data lives, what the web looks like, what outputs must achieve, RAG or CAG, and preparing the retrieval stack.

Scene 1 (0.0–1.8s): rail focus moves to node 2 (+0.25s, persistent layer). Stage header (component 12): eyebrow "ขั้นที่ 2" + title "Foundation + Builder NAVE + Practical" on one row (y 300–380; title at 48px if 52px would pass x 1500), the small cobalt pill "ขั้นที่กำลังทำ" (accent-light, 28px) right of the title (0.8s), and the purpose line as [เข้าใจแก่นของระบบ][· พัฒนาอย่างมั่นคง] (y 384–434, 0.8s).
Scene 2 (1.8–7.6s) — Part A, left column x 96–760 (y 460–880): a split-highlight block (4px cobalt left rule, accent-light fill, radius 12px; y 460–540) holding the mono chip "Data Foundations" and, beside it, a slot where frame 03's speech chip "จัดการไฟล์อย่างไร?" (same card-tinted speech-chip style, #111) pops in at 2.0s and at 2.6s swaps in place (velocity-matched `discrete-text-sequence`) into the answer "จัดระเบียบไฟล์" (Chulabhorn Likit Text 700 40px, cobalt; the requester boxed this in red — here it is the cobalt emphasis). Below (y 566–716): a messy stack of four document tiles (component 3 at ~0.45 scale, seeded rotations) at left, with the mono chip "Documents" (3.6s) and the Thai label "การดำเนินงานของหน่วยขึ้นตรง" (Chulabhorn Likit Text 500 32px, #3F3C35, 4.0s) to its right. 5.0–5.5s: a short cobalt arrow self-draws downward from the stack; the mono chip "Data Cleaning" lands (5.6s) at y≈760 and the same four tiles fly down and straighten into one aligned row beside it (5.7–6.5s, power3.inOut, row ends ≤ x 760, y ≤ 870); each receives the RAG film's 4-dot governance badge (cobalt dots, 0.08s stagger, 6.6–7.0s).
Scene 3 (7.6–8.4s) — seam: a hairline divider draws at x 790 (y 460–870). Part A stays at full opacity.
Scene 4 (8.4–15.0s) — Part B, right column x 820–1824: four question rows (each ~60px tall, y 460 / 534 / 608 / 682) build on their cues, each = an English mono chip (component 11) left-aligned at x 820 and the Thai question at x 1216 (Chulabhorn Likit Text 600 34px #111, ends ≤ x 1824): Databases / "เก็บข้อมูลที่ไหน?" (8.4s), Web UI / "หน้าเว็บเป็นยังไง?" (9.6s), Structured Outputs / "Outputs ต้องการประสิทธิผลแบบไหน?" (10.8s), RAG or CAG Pipelines / "ชั่งข้อดีข้อเสีย · คุณภาพ" (12.2s). Then the label "เตรียมระบบค้นหา" (Chulabhorn Likit Text 500 32px #5F5B50, x 820, y 760–806) at 13.6s and one row of four mono chips (component 11) "Vector DB" "Embeddings" "Retrieval" "Chunking" at y 814–867 (13.8s, 0.25s stagger).
Scene 5 (15.0–20.0s): hold still (both halves readable).

## Selected motion rule: discrete-text-sequence

---
name: discrete-text-sequence
description: Replace entire text states at frame thresholds for non-linear typing effects — typos, bulk additions, pauses, backspaces, simulated thinking.
metadata:
  tags: text, typing, discrete, threshold, non-linear, sequence
---

# Discrete Text Sequence

## Contents

- [How It Works](#how-it-works)
- [Recipe](#recipe)
- [Variations](#variations)
- [Values](#values)
- [Critical Constraints](#critical-constraints)
- [See also](#see-also)

Instead of character-by-character typewriter, replace entire string states at time thresholds — enabling non-linear effects (typos, backspaces, bulk paste, "thinking" gaps) that smooth per-char typing can't achieve. If your effect is "type each character, no edits", this rule is overkill — use the smooth-slice variation below.

## How It Works

The typing is authored as a sparse array of `{ t, text }` states; on every `onUpdate` a **reverse search** finds the latest entry whose `t` has passed and renders its text. Display jumps between states with no animation between them — the realism comes from the schedule shape: fast keystroke clusters (0.06–0.20s apart), pauses at word breaks (0.3–0.6s), a typo, backspaces peeling back to the fork, then a bulk paste replacing many chars in one entry. A block cursor blinks via a deterministic sin square wave on the same timeline.

## Recipe

```html
<!-- inside a standard scene clip (hyperframes-core) -->
<div class="terminal">
  <div class="prompt">$</div>
  <div class="text-wrap">
    <span class="text" id="text"></span><span class="cursor" id="cursor">_</span>
  </div>
</div>
```

```css
.terminal {
  font-family: {monoFont}; /* monospace required — proportional jitters even in a fixed box */
  display: flex;
  align-items: baseline;
  font-size: TERMINAL_FONT_SIZE;
}
.text-wrap {
  display: inline-flex;
  align-items: baseline;
  min-width: TEXT_WRAP_MIN_WIDTH; /* ≥ widest state — stops right-edge jitter */
  white-space: nowrap;
}
.cursor {
  display: inline-block; /* inline ignores width */
  width: CURSOR_WIDTH;
}
```

```js
// Each entry shows from its t until the NEXT entry's t.
// Shape: keystrokes → typo → backspace to the fork → bulk paste → completion mark.
const SEQUENCE = [
  { t: 0.0, text: "" },
  { t: T_K1, text: "{p1}" }, // first keystrokes (~3-5 chars, 0.1-0.2s apart)
  { t: T_K2, text: "{p1 + ' ' + p2_typo}" }, // continuation containing a typo
  { t: T_BS, text: "{p1 + ' ' + p2_partial}" }, // backspace(s) — peel back to the fork
  { t: T_BULK, text: "{fullCorrectedText}" }, // bulk paste — many chars in one jump
  { t: T_DONE, text: "{fullCorrectedText + ' ✓'}" }, // completion marker
];

// Reverse-search for the latest entry whose t has passed
function textAt(time) {
  for (let i = SEQUENCE.length - 1; i >= 0; i--) {
    if (time >= SEQUENCE[i].t) return SEQUENCE[i].text;
  }
  return "";
}

const textEl = document.getElementById("text");
const cursorEl = document.getElementById("cursor");

const driver = { t: 0 };
tl.to(
  driver,
  {
    t: TOTAL_DURATION,
    duration: TOTAL_DURATION,
    ease: "none",
    onUpdate: () => {
      textEl.textContent = textAt(driver.t);
    },
  },
  0,
);

// Cursor blink — deterministic sin square wave, never a CSS animation
const blink = { p: 0 };
tl.to(
  blink,
  {
    p: Math.PI * 2 * BLINK_CYCLES,
    duration: TOTAL_DURATION,
    ease: "none",
    onUpdate: () => {
      cursorEl.style.opacity = Math.sin(blink.p) > 0 ? "1" : "0";
    },
  },
  0,
);
```

## Variations

- **Smooth character slice** (continuous typewriter — no pauses, no edits): faster to author but uniformly "machine-typed", missing the human realism:

```js
const fullText = "{fullPhrase}";
const len = { v: 0 };
tl.to(
  len,
  {
    v: fullText.length,
    duration: TYPE_DUR,
    ease: "power1.inOut",
    onUpdate: () => {
      textEl.textContent = fullText.substring(0, Math.floor(len.v));
    },
  },
  0,
);
```

- **Thinking pause** — hold one state for `THINK_HOLD_DUR` (0.8–2.0s; under 0.5s reads as a stutter, not thought) simply by leaving a gap before the next entry's `t`.
- **State pulse on completion** — when the final state lands, `tl.to(".text", { scale: 1.03–1.08, duration: 0.15–0.3, yoyo: true, repeat: 1 }, T_DONE)`.
- **Per-state color shift** — in `onUpdate`, branch on `driver.t` vs the milestones: success color after `T_DONE`, dim mid-edit, normal while typing.

## Values

| token               | range                                        | notes                                                                  |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| TERMINAL_FONT_SIZE  | 48–96px                                      | full-bleed comps; smaller for terminal-style detail                    |
| TEXT_WRAP_MIN_WIDTH | ≥ widest state                               | measure with a hidden probe after `document.fonts.ready` if unsure     |
| milestone `t`s      | keystrokes 0.06–0.20s apart; pauses 0.3–0.6s | monotonically increasing; `T_DONE ≤ TOTAL_DURATION − ~1s` climax dwell |
| TYPE_DUR (smooth)   | `chars × 0.06–0.12s`                         | fast → relaxed                                                         |
| BLINK_CYCLES        | one cycle per 0.5–0.8s                       | `TOTAL_DURATION / 0.8 ≤ BLINK_CYCLES ≤ TOTAL_DURATION / 0.5`           |
| CURSOR_WIDTH        | ~0.3× font size                              | gap to text single-digit px so the cursor feels attached               |

## Critical Constraints

- **Reverse-search the array each frame** — O(n) with small n (≤30 typical); don't index by frame, the sequence is sparse.
- **`min-width` on the text wrap is mandatory** — without it the right edge jitters as state length changes.
- **Discrete jumps must be INSTANT** — any transition on the text turns the jump into a smear and kills the "typing" feel.
- **Cursor blink is sin/sequence-driven on the timeline**, `display: inline-block`, monospace font, `white-space: nowrap` (wrapping mid-state breaks the illusion; trailing spaces must survive).
- **Discrete vs smooth** — use discrete only for non-linear states (typos, pauses, bulk paste); plain typing takes the smooth-slice variation.

## See also

`context-sensitive-cursor` (same SEQUENCE pattern + segment-colored cursor) · `3d-text-depth-layers` (discrete text with layered depth) · `counting-dynamic-scale` (discrete label beside a smooth counter) · `press-release-spring` (post-completion press beat).

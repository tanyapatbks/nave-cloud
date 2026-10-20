# Round-2 fix packet — 04-tags

- File: compositions/frames/04-tags.html (the ONLY file you edit)
- Global window: 32.0–41.0 s (frame length 9 s; root/ground data-duration 9.5). Global time = 32 + local time.
- Storyboard block: STORYBOARD.md '## Frame 4 —' — read its Scene lines AND its 'Round-2 revisions' line at the end of the block (the spec).

## Fixes from critic round 2 (verified by the synthesis lead)

### 1. [P2] The core idea, that every chunk inherits the same four labels, plays in about 1 s. At 37.5 s the dots fly to the document pill. At 38.0 s the chunk pills are half filled. At 38.5 s all four are filled. The chunk dots fade in with no visible path from the document or the tag card.

**Fix:** Tighten the tag-row cues to local 2.4 / 3.0 / 3.6 / 4.2 (from 2.8 / 3.5 / 4.2 / 4.9). At local 4.9–5.9, fly the four bullets to the document pill one at a time, 0.15 s apart, top to bottom. At local 5.9–6.7, send a copy of the pill from the document to each chunk along the connector, 0.35 s of travel each with a 0.15 s stagger. Keep Tree Nodes at local 7.0.

Evidence (draft 2, current global timing): strip-04-tags.png: 37.5 s dots mid-flight to the doc, 38.0 s chunk pills partly filled, 38.5 s all filled. No travel path from doc to chunks is visible in any sample.

### 2. [P2] The chip 'Tree Nodes' (x≈1315–1525, y≈232–277) appears as English only. Its Thai meaning 'สารบัญ' first appears 46 s later in frame 09.

**Fix:** In the storyboard that generates the copy deck, change the cue at local 7.0 to the same pair frame 09 uses: 'สารบัญ' (Thai bold 28 px) stacked above 'Tree Nodes' (mono 28 px). Widen the label to about 220 px and raise its top to y≈200 so the connector stubs to the two tree pills still clear.

Evidence (draft 2, current global timing): still-04-tags.png: the Tree Nodes chip carries no Thai, while still-09-scope.png pairs 'สารบัญ · Tree Nodes'.

### 3. [P2] The separators between each Thai question and its English term are about 6 px dots in #9A9A97 on #F2F1E6 (about 2.5:1). From the back of the room the two columns read as unrelated.

**Fix:** Replace each dot at x≈702 (y≈503 / 574 / 645 / 717) with an 8 px dot in #6B6966 (4.8:1 on #F2F1E6). Keep the column alignment at x≈702 / 725.

Evidence (draft 2, current global timing): still-04-tags.png: the mid-dots are barely visible grey specks between 'มาจากไหน?' and 'SourceID' and in the other rows.

## Global fixes that apply to this frame

- [P1] Mono chip token: Define one mono chip token: 28 px, about 20 px cap height, pill height 48 px, padding 12px 16px. Use it for the top-right term chip and for every English chip (04 tag terms, 05 station names, 06 lane chips, 07 LLM chip and citation, 09 item chips, 11 payoff chips). Add a render check that flags any mono text with a glyph pitch under 16 px at 1920×1080.
- [P1] Success green: Create two tokens. --success-ink #08573A for text on light tints (7.26:1 on #E4EFDB, 5.96:1 on #CCD9DB). --success-solid #0B6A45 with white text and icons for badges (6.64:1). Apply ink to the 10 ✓ label; apply solid to the 05 check badges (white check on a solid circle) and the 08 found badge.

## Orchestrator notes (take precedence where they conflict)

- New deck copy: a Thai label "สารบัญ" stacked above the existing "Tree Nodes" chip at 7.0 s (the copy-fidelity check currently FAILS until you add it). Thai label Chulabhorn Likit Text 700 28–32px, ink #111111 or cobalt.
- Tag-row cues are now 2.4 / 3.0 / 3.6 / 4.2 s (deck updated). Keep the canonical 4-dot badge spec unchanged (frames 09 and 11 copy it).

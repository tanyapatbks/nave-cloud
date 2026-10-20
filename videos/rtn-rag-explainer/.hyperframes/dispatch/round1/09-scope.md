# Round-1 fix packet — 09-scope

- File: compositions/frames/09-scope.html (the ONLY file you edit)
- Global window: 79.0–89.0 s (frame length 10 s; root/ground data-duration 10.5). Global time = 79 + local time.
- Storyboard block: STORYBOARD.md section '## Frame 9 —' (already updated to describe the fixed design; it is the spec).

## Fixes from the critic panel (verified by an adversarial synthesis pass)

### 1. [P2] The highlighted ACL ledger row is only blue bars, so nothing shows which document the registry entry governs.

**Fix:** Place the recurring blue-outlined example document icon (the one from frames 01/03/08, 24px) in the first cell of the highlighted row (x 123-669, y 722-757), replacing its checkbox. No new copy.

Evidence (draft 1, old timing — global times there were pre-retime): still-09: highlighted row at x 123-669, y 722-757 holds a checkbox and three blue bars only.

## Orchestrator notes (take precedence over the fixes above where they conflict)

- Also, per the global note, the 4-dot mini badges on your four object cards must match frame 04's badge exactly (open compositions/frames/04-tags.html AFTER its fixer may have changed it — if its badge markup differs from yours, copy its size, dot spacing and colour).
- Type floor: English chips ('Identity', 'ACL', 'Docs', 'Chunks', 'Tree Nodes', 'Agent Tools') ≥ 28px.
- Frame 04's fixer has finished. The canonical 4-dot badge (now defined in frame 04) is: pill 100×32px, radius 100px, box-sizing border-box; border 1.5px solid rgba(30,43,250,0.2); fill rgba(30,43,250,0.08); four solid #1e2bfa dots, 12px diameter, 8px gap (20px centre to centre), centred with flex (dots span 72px). Your `.f09-badge` (9px dots, 6px gap, 8px 12px padding) must change to this spec, and its `back.out` entrance ease must become expo.out/power3.out.

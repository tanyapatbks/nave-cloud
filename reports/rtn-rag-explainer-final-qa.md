# RTN permission-aware RAG explainer: final QA record

Final cut: `videos/rtn-rag-explainer/renders/rtn-rag-explainer.mp4` (not committed; rebuild with
`../../scripts/fetch-fonts.sh` then `../../scripts/hf render -q delivery -o renders/rtn-rag-explainer.mp4 .`
from `videos/rtn-rag-explainer/`). 124.5 s (2:04), 1920×1080, 30/1 CFR, H.264 yuv420p, 3735 frames,
9.7 MB, delivery quality, rendered from commit c9b06eb.

## Automated gates on the final cut

| Gate | Result |
|---|---|
| `harness/check-copy.mjs` (reading budget) | 0 fail, 6 warn (all < 17 c/s ceiling); 12.0 c/s average |
| `harness/check-glyphs.mjs`, `harness/check-copy-fidelity.mjs` | ok for all 11 frames + chrome |
| `hf lint` | 0 errors, 3 warnings (file length only) |
| `hf check --samples 33 --at-transitions` | ok: runtime 0, layout 0 errors (6 known warnings: frame 01 decorative rings off-canvas, two mid-slide transition samples, frame 09 connector heuristic), motion 0, contrast 0 |
| `PLANNED_HOLDS=105-109 END_CARD=6.5 harness/qa-mp4.sh` | FAIL=0 WARN=0 (spec, frame count, no unplanned freeze, no black) |

## Critic panel (fresh-context, pixels + copy deck only; 4 lenses, adversarial synthesis)

| Round | Comprehension | Legibility | Motion | Accuracy |
|---|---|---|---|---|
| 1 | 6 | 6 | 6 | 7 |
| 2 | 7.5 | 7.5 | 7 | 8 |
| 3 | 7 | 6 | 6.5 | 7 |
| 4 | 7 | 7 | 6.5 | 7 |
| 5 | 8 | 7 | 6 | 9 |
| 6 | 7 | 8 | 7 | 9 |

Round 6 found no P0; its two P1s were both in frame 06 (front-loaded pacing; "missed" and
"filtered out" marks looked alike). Round 7 fixed them (frame 06 re-paced to 15.5 s with end holds
trimmed in 07/08/10/11 to keep 124.5 s; ghost missed slots instead of ×; merged cards fly from the
tile that found them) plus P2 polish in frames 09, 10 and 11. The round-7 verification panel was
stopped at the requester's instruction to deliver this render as final, so the round-7 cut has
passed every automated gate but has no critic score of its own.

Open P2 polish not taken (recorded by the round-6 panel): frame 01 era-line/chip timing and grid
bleed; frame 04 row emphasis while dots fly; frame 09 identity avatar carried over from frame 08.
Rejected as harmful: frame 07 straight-line re-sort (rows would cross), frame 09 scope shift
(would break the y < 896 keep-out), red/lock styling of the metadata strike in frame 06.

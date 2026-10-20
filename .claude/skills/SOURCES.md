# Installed skills: sources, pins, and local changes

Every skill here was copied from a third-party repository after a read-only security
review (no repo code was executed during review). Each copy is pinned to the commit
that was reviewed; `LICENSE.upstream` in each folder is the upstream licence. To
update a skill, re-review the new commit first; do not use `npx skills add`, global
installs, or auto-updating marketplaces, which pull unreviewed HEADs.

Installed 2026-10-20.

| Skill folder | Upstream repo @ reviewed commit | Upstream path | Licence | Local changes |
|---|---|---|---|---|
| `animate` | cth9191/animate @ 7e5eb56feb2dd573f890e1b7b34748af43d58263 | `plugins/animate/skills/animate` | MIT | Install note (16:9 format, Thai font caveat) |
| `whaleyxbt-motion-design` | whaleyxbt/claude-motion @ e627941543d9988b155dc610bb9cc0115a5e365e | `.claude/skills/motion-design` | MIT | Renamed from `motion-design` (name clash); install note |
| `whaleyxbt-review-loop` | whaleyxbt/claude-motion @ e627941543d9988b155dc610bb9cc0115a5e365e | `.claude/skills/review-loop` | MIT | Renamed from `review-loop`; install note |
| `whaleyxbt-sound-design` | whaleyxbt/claude-motion @ e627941543d9988b155dc610bb9cc0115a5e365e | `.claude/skills/sound-design` | MIT | Renamed from `sound-design`; install note |
| `whaleyxbt-web-sims` | whaleyxbt/claude-motion @ e627941543d9988b155dc610bb9cc0115a5e365e | `.claude/skills/web-sims` | MIT | Renamed from `web-sims`; install note |
| `motion-brief-writer` | charlie947/motion-graphics-skills @ 229022ebca76972e119e36ada23a1648d51665ab | `skills/motion-brief-writer` | MIT | None |
| `animated-chart` | charlie947/motion-graphics-skills @ 229022ebca76972e119e36ada23a1648d51665ab | `skills/animated-chart` | MIT | None |
| `motion-effects` | charlie947/motion-graphics-skills @ 229022ebca76972e119e36ada23a1648d51665ab | `skills/motion-effects` | MIT | None |
| `lottie-motion-design` | LottieFiles/motion-design-skill @ f9a8a041b85185ee4881b3471d3415e939aac772 | `skills/motion-design` | MIT | Renamed from `motion-design` (name clash) |
| `explainer-default` | Barty-Bart/motion-graphics @ 3d83d987d658601d8a1269eb691622bdcd427335 | `skills/explainer-default` | MIT (fonts OFL) | Install note: use preinstalled Playwright 1.56.1, no browser download; Thai font + `Intl.Segmenter` |
| `sound-effects` | Barty-Bart/motion-graphics @ 3d83d987d658601d8a1269eb691622bdcd427335 | `skills/sound-effects` | MIT (bundled SFX CC0) | `scripts/sound_pass.py`: `eval()` on ffprobe output replaced with `fractions.Fraction`; install note |

## Vendored scaffold

`vendor/whaleyxbt-claude-motion/` holds the parts of whaleyxbt/claude-motion @ e627941
that its four skills call (`sfx/`, `scripts/`, `sims/`, `src/`, `timeline.json`,
`package.json`, `package-lock.json`, `remotion.config.ts`, `tsconfig.json`, `AGENTS.md`,
`README.md`, `LICENSE`), byte-identical to upstream. Deliberately not copied:
`.mcp.json.example` (unpinned `@latest` MCP servers, an API-key service, a remote MCP),
`examples/`, `media/`, `.github/`. It renders with Remotion: set
`REMOTION_BROWSER=/opt/pw-browsers/chromium` so it never downloads a browser, and note
Remotion's licence (free for individuals, small companies and non-profit /
not-for-profit organisations; others need a company licence).

## Reviewed but not installed

| Repo | Reason |
|---|---|
| howseen-ai/claude-motion-design | SKILL.md coaches moving shell commands into `.py` scripts to avoid permission review; sends `API_KEY_21ST` to 21st.dev and prints replies into context; personal `~/Desktop` paths; watermark-cropping and bot-check-evading downloads |
| AbubakrChan/product-launch-motion | Music-first launch films, ships no code; tells the agent it has database access, to serve output on all interfaces, and not to wait for approval |
| frankxai/awesome-motion-design-agent-skills | Generic/brand-specific checklists; AGENTS.md directs agents to private docs that are not shipped |
| 199-biotechnologies/motion-dev-animations-skill | Web-UI only; frontmatter grants `allowed-tools: Bash` (no prompt); references 13 files that do not exist |
| charlie947 skills other than the three above | Not needed; `brand-intake` writes into `CLAUDE.md`; `motion-prompt-writer` adds "build without asking" to prompts |
| Barty-Bart skills other than the two above | Not needed (talking-head B-roll, SAM2 rotoscoping with large model downloads, music-tempo explainers) |

Pending review: heygen-com/hyperframes, Sunwood-ai-labs/hyperframes-motion-reel-skill,
nateherkai/hyperframes-student-kit, remotion-dev/skills, haidrrrry/claude-remotion-skill,
t3knobox/klik-anim-skill-creation (no licence file), iart-ai/motion-design-skills.

Libraries (installed via npm when the build starts, pinned): GSAP 3.15.0 (primary
animation engine; free "standard no-charge" licence), lottie-web 5.13.0 (optional,
icons only; never for Thai text). Motion 14.4.0 is not used for MP4 rendering
(wall-clock driven).

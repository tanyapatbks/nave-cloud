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
| `remotion-motion-graphics` | haidrrrry/claude-remotion-skill @ 1dcbe5e3fc6cf970bd10d3cc05f0a8a5d19d0383 | `remotion-motion-graphics` | MIT | Install note: advisory only (its description claims every Remotion task), project overrides (silent allowed, no grain/grade stack, Thai-safe word reveal, official skills win, local fonts) |
| `animation-principles` | iart-ai/motion-design-skills @ 3c129f769d90a1328c209c386492333c9ac62312 | `skills/animation-principles` | MIT | Install note: advice only; ignore iart.ai promo sections; root scripts not copied |
| `motion-art-direction` | iart-ai/motion-design-skills @ 3c129f769d90a1328c209c386492333c9ac62312 | `skills/motion-art-direction` | MIT | Same note |
| `shot-composition` | iart-ai/motion-design-skills @ 3c129f769d90a1328c209c386492333c9ac62312 | `skills/shot-composition` | MIT | Same note |

| `hyperframes` (router), `hyperframes-core`, `hyperframes-animation`, `hyperframes-keyframes`, `hyperframes-creative`, `hyperframes-cli`, `faceless-explainer` | heygen-com/hyperframes @ d898ad89eef52e12ebd4fd90f03c1cdb53ba143c (skills v0.8.181) | `skills/<name>` | Apache-2.0 | Security neutralisation (see below); local notes |
| `video-storytelling` | nateherkai/hyperframes-student-kit @ 10511e5af86fc47756ea89803b397422e2d89284 | `.claude/skills/video-storytelling` | MIT | Install note (advice only; its QA scripts are not shipped) |

### HyperFrames neutralisation

Upstream HyperFrames skills instruct the agent to run commands that are out of scope for
this project. Each instruction was replaced with an explicit "Removed locally" note:

- `npx hyperframes usage --json` (`hyperframes/SKILL.md`, `hyperframes-cli/SKILL.md`,
  `hyperframes-cli/references/upgrade-info-misc.md`): it reads the Claude Code OAuth token
  (and Codex/Grok tokens) and queries vendor usage APIs. **High severity in review.**
- `hyperframes skills update` / `npx skills add` (router, capability menu, lifecycle
  reference, `faceless-explainer`, `hyperframes-animation/adapters/animate-text.md`):
  unreviewed self-updates into global skill folders.
- `npx hyperframes feedback` (`hyperframes-cli/SKILL.md`, `references/preview-render.md`):
  reports to a public channel / telemetry.
- `media-use` sourcing in `faceless-explainer`: not installed (catalog/web media, torch +
  MusicGen auto-install, telemetry). The video is silent-first with local assets only.

Always run the CLI through `scripts/hf`, which sets `HYPERFRAMES_SKIP_SKILLS=1`,
`HYPERFRAMES_NO_TELEMETRY=1`, `DO_NOT_TRACK=1`, `HYPERFRAMES_NO_UPDATE_CHECK=1` and
`HYPERFRAMES_BROWSER_PATH` (local headless shell, so no Chrome download). Fonts must be
local `@font-face` woff2 files in each composition: the renderer otherwise fetches Google
Fonts at compile time and bundles no Thai face.

### Engines (npm, pinned in package.json)

`hyperframes` 0.8.181 (Apache-2.0, renderer/CLI), `gsap` 3.15.0 (free standard licence,
animation engine), `lottie-web` 5.13.0 (MIT, optional for icons; never for Thai text).
Remotion is not installed in this project (licence question above); its scaffold remains
available under `vendor/whaleyxbt-claude-motion/` for reference.

### Session-only (not in this repo)

`remotion-best-practices` from remotion-dev/skills @ 039e8a2fc78b67efc228d5645367838b85818a1c
was installed at user level (`~/.claude/skills/`, gone when the container is recycled)
because the upstream repo has no licence file, so it is not redistributed here. Remotion's
own Claude Code plugin ships the same files declared MIT; if that is confirmed for this
repo, it can be added here.

### Remotion licence note (not legal advice)

Remotion 4.x is free for individuals, for-profit organisations with up to 3 employees,
and non-profit / not-for-profit organisations, but does not define "non-profit". Its
published 5.0 terms state that governmental entities and public-sector bodies do not
qualify as non-profit without Remotion's written permission. A Navy-produced video
should therefore not rely on the free licence without written permission
(hi@remotion.dev), a paid seat, or legal advice. This project's renderer is chosen with
that in mind.

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

| t3knobox/klik-anim-skill-creation | No licence file (its INSTALL.md calls it a private repo), so there is no permission to copy it; its ideas may be restated, not copied |
| remotion-dev/remotion (monorepo `.agents/skills`) | 63 maintainer-only skills (release, npm tokens, R2 credentials); `.claude/skills` there symlinks to them, so never run an agent inside that checkout |
| iart-ai skills other than the three above | Broad-trigger web/AE/beat-sync skills not needed; non-deterministic snippets (`Math.random`, CSS keyframes) |
| remotion-dev/skills except `remotion-best-practices` | The router already embeds the needed parts; maps/saas/captions/upgrade skipped (API keys, model downloads, unreviewed self-update) |

| Sunwood-ai-labs/hyperframes-motion-reel-skill | Safe, but a 15 s 120 BPM showreel skill; its `back.out`/`elastic` defaults contradict the explainer doctrine. Gotchas copied into project notes instead |
| nateherkai/hyperframes-student-kit (rest of kit) | Talking-head editing workspace; its vendored `hyperframes*` skills are stale (0.7.x) and collide with upstream names; cut tools need FFmpeg 7+ |
| heygen-com/hyperframes (other skills) | `media-use` (web/catalog media, torch auto-install, telemetry), `general-video` (runs `usage`), and workflows not needed (music-to-video, pr-to-video, captions, talking-head, product-launch, slideshow, figma, studio, registry, audio) |

Libraries (installed via npm when the build starts, pinned): GSAP 3.15.0 (primary
animation engine; free "standard no-charge" licence), lottie-web 5.13.0 (optional,
icons only; never for Thai text). Motion 14.4.0 is not used for MP4 rendering
(wall-clock driven).

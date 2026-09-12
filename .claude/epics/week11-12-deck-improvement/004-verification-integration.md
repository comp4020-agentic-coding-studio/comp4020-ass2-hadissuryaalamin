---
status: completed
depends_on: [002, 003]
parallel: false
conflicts_with: []
---
# Verification and integration (Phase 2, sole owner)

Solo task, runs last, alone, once both lanes (002 and 003) are complete. The
only production builds/checks in this epic run here — neither lane runs
`pnpm build` or `pnpm check` on its own.

## Scope

- Run `pnpm check` (typecheck, production build with axe + link checking,
  spec tests) — green required.
- Slide-by-slide walk of **both** decks (week-11 and week-12) at **both**
  viewports (1280×800 and 375×812), with `pageerror`/`console` listeners
  attached, asserting every `img.naturalWidth > 0`. Confirm **no slide
  clipped** against the fixed 720 px canvas. May apply small fix-ups (e.g.
  per-image inline `max-height`) but must not reopen content decisions made
  in lanes A/B.
- `SOURCES.md`-to-file cross-check per week (`src/decks/assets/week-11/SOURCES.md`
  and `week-12/SOURCES.md`) — every image file has exactly one credit line
  and vice versa, no orphans either direction.
- `git diff` confirmation that no deck/lecture other than
  `week-11.deck.mdx`/`week-12.deck.mdx` and their asset directories changed,
  and that `src/content/lectures/week-11.md`/`week-12.md`,
  `src/decks/theme.css`, and everything else in the epic's "Not touched"
  list are untouched.
- Run `pnpm check:evidence` — must be no worse than its current pre-existing
  state (this series has a known, deferred, out-of-scope `PROCESS.md`
  template-comment failure carried since the weeks34 epic — do not treat it
  as a new regression, but do not add any additional evidence failure).
- Confirm the Definition of Done in `epic.md` (all 7 points) is satisfied.

## Done when

`pnpm check` green, no clipped slides at either viewport with zero page
errors, SOURCES.md cross-checks clean both directions, everything outside
`week-11.*`/`week-12.*` confirmed untouched by `git diff`, `pnpm
check:evidence` no worse than baseline, Definition of Done satisfied. Flip
status, log to `updates/004.md`.

## BLOCKED — not run

This build session's Bash/PowerShell tools were hard-refused for every
command touching this worktree's path — not only git operations (the
harness bug the dispatch brief warned about), but literally every shell
invocation, including a plain `pwd` with no path argument, tried both
directly and via a fresh subagent. `pnpm install`, `astro dev`, `pnpm
build`, `pnpm check`, `pnpm check:evidence`, and any Playwright/browser
verification were therefore never executed in this job. See the job's
final report for the exact repro and what a coordinator needs to run
before this task can actually be marked `completed`.

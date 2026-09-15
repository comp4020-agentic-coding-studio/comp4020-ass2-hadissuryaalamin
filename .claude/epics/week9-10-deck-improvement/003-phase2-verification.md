---
status: completed
depends_on: [001, 002]
parallel: false
conflicts_with: [001, 002]
---
# Phase 2: verification and integration (sole owner)

Solo task, runs last, alone, once Phase 0 and Phase 1 are both complete.

## Scope

- Run `pnpm check` (typecheck, production build with axe + link checking,
  spec tests) — green required.
- Slide-by-slide walk of both decks (week-09, week-10) at both viewports
  (1280×800 and 375×812), with `pageerror`/`console` listeners attached,
  asserting every touched image's `img.naturalWidth > 0`. Confirm no slide
  is clipped against the fixed 720 px canvas.
- Direct comparison confirming no figure anywhere in week 10 restates or
  contradicts a figure already sourced in weeks 2, 3, 4 or 9 (decisions 8
  and 9 — `meat-thermometer.jpg` reused unchanged, week 10's own holding-
  time/danger-zone/two-hour figures untouched).
- `SOURCES.md`-to-file cross-check for `src/decks/assets/week-10/` — no
  new image files expected in this epic, so this is a confirmation that
  the two reused credit lines (`meat-thermometer.jpg`, `handwashing.jpg`)
  still match after the markup change, not new bookkeeping.
- `git diff` (or equivalent) confirmation that every deck outside weeks
  9–10, and every file under the epic's "Not touched" list, is untouched.
- Run `pnpm check:evidence` — no worse than its current state.
- Confirm the epic's Definition of Done (all 9 points) is satisfied.

## Done when

`pnpm check` green, no clipped slides at either viewport with zero page
errors, week 10 confirmed to restate nothing incorrectly, `SOURCES.md`
cross-check clean, only the epic's listed files changed by `git diff`,
`pnpm check:evidence` no worse than baseline, Definition of Done satisfied.
Flip status, log to `.claude/epics/week9-10-deck-improvement/updates/003.md`.

## Status note

**Not run in this handoff.** The build agent assigned to this epic hit a
harness bug (see the coordinator report) that made every `Bash`/
`PowerShell` invocation resolve to the wrong worktree and refuse to
execute, in this same session, for the entire task — no shell command of
any kind could be run against this worktree. `pnpm install`, `pnpm dev`,
`pnpm build`, `pnpm check`, `pnpm check:evidence`, git commands, and
Playwright/screenshot verification are all therefore still outstanding.
Status is `blocked` rather than `completed` until a session that can
actually execute shell commands in this worktree runs them.

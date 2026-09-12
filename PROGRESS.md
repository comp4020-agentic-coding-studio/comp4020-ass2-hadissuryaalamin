# Progress — ass2

Working tracker, not graded content. Updated by hand/agent as state changes.
Source of truth for "what's left" is always live checks below, not this file's memory.

## Core site (epic: `intro-preparing-meal`)

Status: **done**, merged `main` via PR #1 (2026-09-06).
All 12 weeks have sessions, lectures, decks, tutorials; assessments, people,
home/policies pages, macro + storage calculators, spec tests round 1+2, final
integration — all shipped.

## Deck-improvement epics (post-launch content passes)

| Epic | Weeks | Status | PR |
|---|---|---|---|
| `week1-deck-improve` | 1 | done | #2, merged |
| `week2-deck-improve` | 2 | done | folded into #3 (stacked branch) |
| `weeks34-deck-improvement` | 3, 4 | done | #3, merged |
| — | 5–12 | **not started** | — |

Weeks 5–12 decks/lectures still carry only their original round-2 content —
no dedicated improvement epic has been run for them yet.

## Submission gate (`pnpm check:evidence`)

Last run 2026-09-13, **failing**:

- `PROCESS.md` still has the `<!-- TEMPLATE: ... -->` boilerplate comment —
  needs a real written account of the build.
- PROCESS.md cites commits `a1b2c3d` and `e4f5a6b` — these are placeholder
  hashes, not real commits. Replace with actual SHAs from `git log`.

`reflections/` check already passes (not required for an assignment).

## Ship status

- Repo is still **private** (`comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin`).
- GitHub Pages: not enabled (`404` from Pages API).
- CI (`check`/`deploy` workflows) only activates once public.
- The `/ship` skill (flip public, enable Pages, dispatch deploy) has not been run.

## What's actually left

1. Write `PROCESS.md` for real — overview + real cited commits.
2. Decide whether weeks 5–12 get their own deck-improvement epics (or ship as-is).
3. Run `/ship` when ready to submit (repo goes public, Pages enabled, CI turns on).

## How to check state yourself (no memory needed)

```sh
pnpm check:evidence                              # submission gate
gh pr list --state all                           # merged/open PRs
gh repo view --json isPrivate                     # public/private
~/.claude/skills/epic-dispatch/scripts/status.sh .claude/epics/<name>   # per-epic task status
```

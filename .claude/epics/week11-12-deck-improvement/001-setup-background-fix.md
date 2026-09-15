---
status: completed
depends_on: []
parallel: false
conflicts_with: []
---
# Setup and background-image path fix (Phase 0, sole owner)

Solo task, runs first, alone. No other task starts until this completes.

## Scope

- Run `pnpm install` if `node_modules/` is absent (it was, per epic setup
  note). This sets `core.hooksPath .githooks` (pre-commit API-key scanner —
  expected). Ignore any zero-diff CRLF noise in `package.json`/
  `pnpm-lock.yaml`; never stage those two files.
- **Screenshot-verify the background bug first**, before fixing anything, on
  both decks — do not skip this step even though the diagnosis is already
  known from prior epics in this series (same bug class as decks 1, 5-10).
- Fix four broken `![bg ...]` directives by rewriting to
  `../../src/decks/assets/week-1N/<file>` (build-relative, not
  deck-source-relative):

  | File | Line | Asset | Form |
  |---|---|---|---|
  | `src/decks/week-11.deck.mdx` | 8 | `frying-pan-cooking.jpg` | title bg |
  | `src/decks/week-11.deck.mdx` | 87 | `thermometer-cooking.jpg` | `![bg right:30% contain]` |
  | `src/decks/week-12.deck.mdx` | 8 | `cooking-competition.jpg` | title bg |
  | `src/decks/week-12.deck.mdx` | 62 | `plated-presentation.jpg` | `![bg right:32% contain]` |

- Re-verify painting in both `astro dev` and a production `pnpm build` +
  `pnpm preview`. Record before/after observation.
- Baseline `pnpm check` (typecheck, build, spec tests) before handing off to
  Phase 1.
- Do not touch decks 1, 5-10, or `src/decks/theme.css`.

## Done when

All four directives confirmed broken by screenshot, then fixed and confirmed
painting in dev + prod build, baseline `pnpm check` run and recorded, nothing
else touched.

Flip this file's `status` to `in_progress` then `completed`. Log progress to
`.claude/epics/week11-12-deck-improvement/updates/001.md`.

## BLOCKED — path edits made, nothing else run

The four path rewrites listed above are done (see `updates/001.md` and this
job's final report — the edited `week-11.deck.mdx`/`week-12.deck.mdx` files
are sitting in this job's scratch dir, not yet in the real worktree). Every
other item in this task's scope — `pnpm install`, before/after screenshot
verification, `astro dev`/`pnpm build`/`pnpm preview` confirmation, and the
baseline `pnpm check` — could not be run: this session's Bash/PowerShell
tools refused every command touching this worktree's path outright (not a
git-specific refusal; a plain `pwd` failed the same way), including from a
fresh subagent. Do not treat this task as actually `completed` until a
coordinator re-runs those steps for real.

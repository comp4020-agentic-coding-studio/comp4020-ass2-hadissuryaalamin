---
status: completed
depends_on: []
parallel: false
conflicts_with: []
---
# Setup and background-image path fix (Phase 0, sole owner)

Solo task, runs first, alone. No other task starts until this completes.

## Scope

- Run `pnpm install` (node_modules/dist both absent in a fresh worktree). Sets `core.hooksPath .githooks` (pre-commit API-key scanner — expected). Do not stage a phantom `package.json`/`pnpm-lock.yaml` CRLF diff if one appears.
- **Screenshot-verify the background bug first**, before fixing anything, on both decks — do not skip this even though the diagnosis is already known from weeks 1-4 (URL-resolution against served page path, not deck-source path).
- Fix five broken `![bg …]` directives by rewriting to `../../src/decks/assets/week-0N/<file>` (build-relative, not deck-source-relative):

  | File | Line | Asset | Form |
  |---|---|---|---|
  | `src/decks/week-05.deck.mdx` | 8 | `fresh-herbs.jpg` | title bg |
  | `src/decks/week-05.deck.mdx` | 50 | `garlic.jpg` | `![bg right:32% contain]` |
  | `src/decks/week-05.deck.mdx` | 174 | `olive-oil.jpg` | `![bg right:30% contain]` |
  | `src/decks/week-06.deck.mdx` | 8 | `wood-cutting-board.jpg` | title bg |
  | `src/decks/week-06.deck.mdx` | 79 | `plastic-cutting-board.jpg` | `![bg right:32% contain]` |

- Path rule differs by image form — only `![bg …]` directives and raw `<img src>` tags need the build-relative prefix; plain markdown inline images (none currently exist in either deck) keep the deck-relative form.
- Re-verify painting in both `astro dev` and a production `pnpm build` + `pnpm preview`. Record before/after observation (URL resolved, 404 vs 200, screenshot).
- Baseline `pnpm check` (typecheck, build, spec tests) before handing off to Phase 1.
- Do not touch decks 1-4, 7-12, or bump the pinned astromotion version.

## Ready-made patch

Full corrected file content for both decks (path fixes only — do not apply
tasks 002/004's `<img>` conversions from this same content until those tasks
run; or apply this task's own patch as a starting point since it already
includes them, produced together during epic decomposition) is staged at
`_HANDOFF_week5-6-deck-improvement/deck-week-05.mdx` and
`.../deck-week-06.mdx` (see repo's handoff README for exact scratch
locations — this run's harness worktree-isolation bug scattered them across
sibling worktrees rather than this epic's own; check
`week9-10-deck-improve/_HANDOFF_week5-6-deck-improvement/` and
`week7-8-deck-improve/_HANDOFF_week5-6-deck-improvement/`). These files
already include tasks 002 and 004's image-conversion decisions (garlic.jpg,
olive-oil.jpg, plastic-cutting-board.jpg → in-flow `<img>` with alt text) —
if this task only wants the path fix in isolation, apply just the five path
edits from the table above to the current repo files instead of overwriting
wholesale, and let 002/004 do the conversions as their own separate commits.

## Done when

All five directives confirmed broken by screenshot, then fixed and confirmed
painting in dev + prod build, baseline `pnpm check` run and recorded, nothing
else touched. Flip this file's `status` to `in_progress` then `completed`.
Log progress to `.claude/epics/week5-6-deck-improvement/updates/001.md`.

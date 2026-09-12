---
status: pending
depends_on: []
parallel: false
conflicts_with: []
---
# Setup and background-image path fix (Phase 0, sole owner)

Solo task, runs first, alone. No other task starts until this completes.

## Scope

- Run `pnpm install` if `node_modules/` is absent. Sets `core.hooksPath
  .githooks` (pre-commit API-key scanner — expected). Ignore any phantom
  CRLF diff on `package.json`/`pnpm-lock.yaml`; never stage those two files.
- **Screenshot-verify the background bug first**, before fixing anything, on
  both decks, per weeks34's precedent (settles that this is the same
  served-page-path URL-resolution bug, not something new).
- Fix all five broken `![bg …]` directives by rewriting to
  `../../src/decks/assets/week-0N/<file>` (build-relative, not
  deck-source-relative):

  | File | Line | Asset |
  |---|---|---|
  | `src/decks/week-07.deck.mdx` | 8 | `chefs-knife.jpg` (title bg) |
  | `src/decks/week-07.deck.mdx` | 53 | `knife-set.jpg` (`![bg right:32% contain]`) |
  | `src/decks/week-07.deck.mdx` | 166 | `sharpening-stone.jpg` (`![bg right:30% contain]`) |
  | `src/decks/week-08.deck.mdx` | 8 | `restaurant-kitchen.jpg` (title bg) |
  | `src/decks/week-08.deck.mdx` | 93 | `plated-dish.jpg` (`![bg right:32% contain]`) |

- Re-verify painting in both `astro dev` and a production `pnpm build` +
  `pnpm preview`. Record before/after observation.
- Baseline `pnpm check` (typecheck, build, spec tests) before handing off to
  Phase 1.
- Do not touch `week-02.deck.mdx`, any other deck, or any content collection
  file.

## Done when

All five directives confirmed broken by screenshot, then fixed and confirmed
painting in dev + prod build, baseline `pnpm check` run and recorded, nothing
else touched.

Flip this file's `status` to `in_progress` then `completed`. Log progress to
`.claude/epics/week7-8-deck-improvement/updates/001.md`.

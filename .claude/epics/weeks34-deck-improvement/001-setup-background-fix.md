---
status: in_progress
depends_on: []
parallel: false
conflicts_with: []
---
# Setup and background-image path fix (Phase 0, sole owner)

Solo task, runs first, alone. No other task starts until this completes.

## Scope

- Run `pnpm install` (node_modules/dist both absent). This sets `core.hooksPath .githooks` (pre-commit API-key scanner — expected).
- `package.json`/`pnpm-lock.yaml` may show a phantom empty-diff CRLF change after install — do not stage them.
- **Screenshot-verify the background bug first**, before fixing anything, on both decks. Do not skip this step even though the diagnosis is already known (settles path-separator vs URL-resolution question).
- Fix four broken `![bg …]` directives by rewriting to `../../src/decks/assets/week-0N/<file>` (build-relative, not deck-source-relative):
  | File | Line | Asset |
  |---|---|---|
  | `src/decks/week-03.deck.mdx` | 8 | `fish-market.jpg` (title bg) |
  | `src/decks/week-03.deck.mdx` | 47 | `chicken-thigh.jpg` (`![bg right:32% contain]`) |
  | `src/decks/week-04.deck.mdx` | 8 | `raw-steak.jpg` (title bg) |
  | `src/decks/week-04.deck.mdx` | 145 | `ground-beef.jpg` (`![bg right:32% contain]`) |
- **Path rule differs by image form** — do not blanket-rewrite: plain markdown inline images keep `./assets/week-0N/…` (Astro rewrites these at build); only `![bg …]` directives and raw `<img src>` tags need the `../../src/decks/assets/…` build-relative prefix.
- Re-verify painting in both `astro dev` and a production `pnpm build` + `pnpm preview`. Record before/after observation.
- Baseline `pnpm check` (typecheck, build, spec tests) before handing off to Phase 1.
- Do not touch decks 1, 5–12, `src/decks/week-07.deck.mdx`, or bump the pinned `astromotion` version (v0.23.0).

## Done when

All four directives confirmed broken by screenshot, then fixed and confirmed painting in dev + prod build, baseline `pnpm check` run and recorded, nothing else touched.

Flip this file's `status` to `in_progress` then `completed`. Log progress to `.claude/epics/weeks34-deck-improvement/updates/001.md`.

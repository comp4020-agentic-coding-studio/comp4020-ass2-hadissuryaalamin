---
status: completed
depends_on: []
parallel: false
conflicts_with: [002, 003]
---
# Phase 0: background-path fixes + week 10 image-form conversions (sole owner)

Solo task, runs first, alone. No other task starts until this completes.
Touches both `week-09.deck.mdx` and `week-10.deck.mdx`, so it is not split
into a week-9/week-10 lane pair — the epic's own "Parallelism plan" calls
for three sequential sole-owner phases, not a lane split.

## Scope

- Run `pnpm install` if `node_modules/` is absent (it is, per epic Setup).
  This sets `core.hooksPath .githooks` (pre-commit secret scanner,
  expected). Do not stage `package.json`/`pnpm-lock.yaml` even if a
  phantom CRLF diff appears.
- **Screenshot-verify all five background directives as broken before
  fixing anything**, on both decks, per the epic's explicit instruction
  not to skip this even though the diagnosis is already known from prior
  epics in this series.
- Fix all five broken `![bg …]` directives by rewriting the asset path
  from deck-source-relative (`./assets/week-0N/<file>`) to build-relative
  (`../../src/decks/assets/week-0N/<file>`):
  | File | Line | Asset |
  |---|---|---|
  | `src/decks/week-09.deck.mdx` | 8 | `apple.jpg` (title bg) |
  | `src/decks/week-09.deck.mdx` | 51 | `bananas.jpg` (`![bg right:32% contain]`) |
  | `src/decks/week-10.deck.mdx` | 8 | `refrigerator-interior.jpg` (title bg) |
  | `src/decks/week-10.deck.mdx` | 97 | `handwashing.jpg` (`![bg right:30% contain]`) |
  | `src/decks/week-10.deck.mdx` | 119 | `meat-thermometer.jpg` (`![bg right:30% contain]`) |
- Do not touch the plain markdown inline image `oranges.jpg`
  (`./assets/week-09/…`, week-09 line 193) — Astro rewrites that form
  differently at build; it needs no path change.
- **Convert two of those five (week-10's `handwashing.jpg` and
  `meat-thermometer.jpg`) from `![bg]` to in-flow `<img>` tags with real
  alt text**, matching the `<img src="../../src/decks/assets/week-0N/…"
  alt="…" style="max-height: …px; width: auto; margin: 10px auto; display:
  block;" />` convention already used in weeks 2/3/4. Body text stays
  before the image. Week-09's two bg directives (title, bananas) and
  week-10's title directive (`refrigerator-interior.jpg`) stay decorative
  `![bg]` — path-fixed only, not converted.
- If either week-10 image is judged too weak to stand as an in-flow image
  once actually seen full-size, the fallback is to skip that one
  conversion and leave it path-fixed as a `![bg]` — "skip rather than
  force," per the epic's standing rule. (Both images were judged usable —
  see `updates/001.md`.)
- Re-verify all five in both `astro dev` and a production `pnpm build` +
  `pnpm preview`.
- Baseline `pnpm check` before handing off to Phase 1.
- Do not touch decks 1, 5–8, 11–12, `src/decks/theme.css`, or bump the
  pinned `astromotion` version (0.23.0).

## Done when

All five directives confirmed broken by screenshot, then fixed and
confirmed painting in dev + prod build; `handwashing.jpg` and
`meat-thermometer.jpg` converted to alt-texted `<img>` tags; baseline
`pnpm check` run and recorded; nothing else touched. Flip this file's
`status` to `in_progress` then `completed`. Log progress to
`.claude/epics/week9-10-deck-improvement/updates/001.md`.

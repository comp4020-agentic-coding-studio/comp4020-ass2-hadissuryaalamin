---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Macro/calorie calculator component

Read `.claude/epics/intro-preparing-meal/epic.md` in full first, especially
"Round 2" constraint 12 and the week-by-week table. This is new "Core
functionality/logic" scope per the top-level `E:\comp8020\CLAUDE.md` field
breakdown — not covered by the platform theme, safe to add.

File scope: a new reusable component (e.g.
`src/components/MacroCalculator.astro` or a small framework component if you
need client-side interactivity — check `astro.config.ts` for which UI
framework integrations are already available and prefer one of those over
adding a new dependency) plus new per-week data files (e.g.
`src/data/macro/week-02.ts`, `week-03.ts`, `week-04.ts`, `week-09.ts`, or one
file keyed by week — your call, document the shape). Do not touch
`src/content/sessions/*` (task 012 imports and embeds this once it exists)
or `src/content.config.ts`.

## Behaviour

Input: an ingredient (selected from that week's data file) and a quantity in
grams. Output: fat, protein and calories for that quantity, computed from a
per-100g figure in the data file. Must work as static-site interactivity
(client-side JS is fine; this site has no backend) and must not fail axe
(labelled inputs, visible focus states, no color-only state).

## Data

Populate the data file(s) for weeks 2, 3, 4, 9 with real per-100g fat,
protein and calorie figures from USDA FoodData Central
(https://fdc.nal.usda.gov/) for 4-6 ingredients per week (coordinate loosely
with task 011's lecture content — the same ingredients named there should be
selectable here, but do not block on that task; both cite the same public
source independently). Include the source citation in the data file as a
comment or field, not just in prose — `pnpm check:evidence`/the sourcing
rule applies to data-driven numbers too.

## Definition of done

- Component renders, is keyboard-operable, and produces correct fat/protein/
  calorie output for a sample grams input (spot-check the arithmetic).
- Data files exist for weeks 2, 3, 4, 9 with cited, real USDA figures.
- `pnpm check` (typecheck + build + axe) stays green with the component
  unused (task 012 wires it in later) — a component that isn't imported yet
  must not break the build.
- Log progress to `.claude/epics/intro-preparing-meal/updates/013.md`.

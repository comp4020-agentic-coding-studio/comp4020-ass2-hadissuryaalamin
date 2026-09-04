---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# Storage-duration calculator component

Read `.claude/epics/intro-preparing-meal/epic.md` in full first, especially
"Round 2" constraint 12 and the week-by-week table. New "Core
functionality/logic" scope per the top-level `E:\comp8020\CLAUDE.md` field
breakdown.

File scope: a new reusable component (e.g.
`src/components/StorageCalculator.astro`, or a small framework component —
check `astro.config.ts` for available UI framework integrations before
adding a new one) plus new per-week data files (e.g.
`src/data/storage/week-05.ts`, `week-08.ts`, `week-10.ts`, or one file keyed
by week). Do not touch `src/content/sessions/*` (task 012 imports and embeds
this once it exists) or `src/content.config.ts`.

## Behaviour

Input: a prep date/time and an ingredient or dish type (selected from that
week's data file). Output: the safe-until date/time, computed by adding that
item's safe-storage duration to the prep time. Client-side interactivity is
fine (no backend on this site). Must not fail axe (labelled inputs, visible
focus states, no color-only state). Prefer native `<input type="datetime-
local">` or equivalent over a custom date-picker widget.

## Data

Populate the data file(s) for weeks 5, 8, 10 with real safe-storage
durations and temperatures, sourced from the same USDA FSIS cold-chain
guidance already cited in `src/content/sessions/10-food-safety-and-the-cold-
chain.md` and `src/content/sessions/11-first-heat.md` (read those files
first for the exact citations already in use on this site, and reuse the
same source family rather than introducing a new one). Include the source
citation in the data file, not just in prose.

## Definition of done

- Component renders, is keyboard-operable, and produces a correct safe-until
  time for a sample prep-time input (spot-check the arithmetic).
- Data files exist for weeks 5, 8, 10 with cited, real USDA FSIS figures.
- `pnpm check` stays green with the component unused (task 012 wires it in
  later) — a component that isn't imported yet must not break the build.
- Log progress to `.claude/epics/intro-preparing-meal/updates/014.md`.

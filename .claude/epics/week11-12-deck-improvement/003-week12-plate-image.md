---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Week 12 (lane B): plated-presentation background to in-flow image

Follows 001 (path fix must land first). May run concurrently with lane A's
002 — disjoint files (`week-12.*` vs `week-11.*`).

## Scope

Files: `src/decks/week-12.deck.mdx` (the "## How the examination reads the
plate" slide, line ~62 after task 001's path fix); `src/decks/assets/week-12/`;
its `SOURCES.md`.

- Convert `![bg right:32% contain](../../src/decks/assets/week-12/plated-presentation.jpg)`
  to an in-flow `<img>` tag — same rule as lane A: a background image must
  never be the sole carrier of information, and this photo illustrates the
  slide's actual argument (the plate as evidence of preparation decisions).
- Write real, descriptive alt text from the image itself — do not invent
  detail the photo does not show.
- Body text (the existing paragraph) stays before the image, matching the
  deck's established pattern (see weeks34 task 010's `<img>` conversion for
  the exact shape: build-relative `src`, real `alt`, per-image inline
  `max-height`, no `theme.css` edit).
- Budget the image against the fixed 1280×720 canvas — measure at both
  1280×800 and 375×812, reduce `max-height` until nothing clips.
- `plated-presentation.jpg` is already sourced and credited in
  `src/decks/assets/week-12/SOURCES.md` — no new download needed for this
  conversion.
- No optional deepening pair is proposed for week 12 in the epic (the
  optional §2 candidate is week-11-specific, a two-batch comparison photo).
  Do not invent a week-12 equivalent.
- Do not touch `src/decks/week-11.deck.mdx` or `src/decks/assets/week-11/`.
- Do not run `pnpm build` or `pnpm check` — Phase 2 owns that.

## Done when

`plated-presentation.jpg` slide converted to in-flow `<img>` with real alt
text, not clipped at either viewport, existing sourced credit line intact.
Flip status, log to `updates/003.md`.

## Outcome (see updates/003.md for full log)

Converted. `plated-presentation.jpg`'s existing `SOURCES.md` credit line is
untouched (no new file added). **The `max-height: 220px` value and the "not
clipped at either viewport" claim above could NOT be confirmed by a live
`astro dev`/Playwright check in this execution — see this job's final
report for why, and treat this as unverified until the coordinator runs the
real check.**

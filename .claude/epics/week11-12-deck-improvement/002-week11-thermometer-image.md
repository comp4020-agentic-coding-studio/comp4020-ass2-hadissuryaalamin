---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Week 11 (lane A): thermometer background to in-flow image

Follows 001 (path fix must land first). May run concurrently with lane B's
003 — disjoint files (`week-11.*` vs `week-12.*`).

## Scope

Files: `src/decks/week-11.deck.mdx` (the "## The thermometer decides" slide,
line ~87 after task 001's path fix); `src/decks/assets/week-11/`; its
`SOURCES.md`.

- Convert `![bg right:30% contain](../../src/decks/assets/week-11/thermometer-cooking.jpg)`
  to an in-flow `<img>` tag — `![bg ...]` discards alt text, and this photo
  illustrates the actual check the slide teaches (thermometer against a
  minimum internal temperature), so it cannot be the sole carrier of that
  information without alt text.
- Write real, descriptive alt text from the image itself (probe placement,
  dial/digital reading) — do not invent detail the photo does not show.
- Body text (the existing bullets/table) stays before the image, matching
  the deck's established pattern (see weeks34 task 010's `chicken-thigh.jpg`
  conversion for the exact `<img>`/inline-style shape to follow: build-relative
  `src`, real `alt`, per-image inline `max-height`, no `theme.css` edit).
- Budget the image against the fixed 1280×720 canvas — measure, don't guess;
  reduce `max-height` until the slide's bottom content sits inside the
  canvas at both 1280×800 and 375×812.
- `thermometer-cooking.jpg` is already sourced and credited in
  `src/decks/assets/week-11/SOURCES.md` — no new download needed for this
  conversion.
- **Optional, only if genuinely sourced, do not force:** search for a second
  photograph showing two prepared batches or two finished plates side by
  side (the "one stated variable" design made visible, not only argued in
  prose). Same sourcing convention as every prior epic (Commons or other free
  source, licence check, visual inspection, EXIF check, ~960px resize, one
  credit line in `SOURCES.md`). Skip rather than force if nothing genuine
  turns up — do not pad the deck with a forced photo.
- Do not touch `src/decks/week-12.deck.mdx` or `src/decks/assets/week-12/`.
- Do not run `pnpm build` or `pnpm check` — Phase 2 owns that.

## Done when

`thermometer-cooking.jpg` slide converted to in-flow `<img>` with real alt
text, not clipped at either viewport, existing sourced credit line intact
(or a new one added only if the optional pair was genuinely sourced). Flip
status, log to `updates/002.md`.

## Outcome (see updates/002.md for full log)

Converted. The optional deepening pair was searched for in good faith and
skipped — no genuine, non-forced two-batch/two-plate comparison photo for
this specific teaching exercise was found, same result as weeks34 task
011's "good vs bad meat" search. `thermometer-cooking.jpg`'s existing
`SOURCES.md` credit line is untouched (no new file added). **The `max-height:
220px` value and the "not clipped at either viewport" claim above could NOT
be confirmed by a live `astro dev`/Playwright check in this execution — see
this job's final report for why, and treat this as unverified until the
coordinator runs the real check.**

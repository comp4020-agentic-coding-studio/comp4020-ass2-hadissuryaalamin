# Epic: week-01 deck improvement — "why people skip meal prep"

## Context

Week 1 slide deck (`src/decks/week-01.deck.mdx`) argues the course thesis with
real figures. User reviewed the built deck and asked for four changes to the
mid-deck argument. This is a content refinement of an already-shipped epic
(`intro-preparing-meal`), scoped to one deck file — written epic-style per
this repo's convention so it stands as its own contract, but does not need
epic-dispatch's multi-agent fan-out (one file family, no parallel work to
gain).

## Changes

1. **Remove side panel.** `## The headline figure` slide currently has
   `![bg right:35% contain](./assets/week-01/kitchen-timer.jpg)` — a right-side
   image panel. Drop the image line; keep the 37-minutes figure as plain text.

2. **Reframe the central comparison.** Current slide (`# Fast and good are not
   opposites`, `## Where the opposition actually lives`) argues "fast vs good
   are not opposites." Replace with: **healthy food takes more time to
   produce than convenience food — that's real, not a myth — but weeks 1–10's
   preparation work (storing, cutting, choosing ingredients before cooking)
   is how this course tackles that time cost**, rather than pretending it
   isn't there.

3. **Add a sourced photo of meal preparation** (chopping/prepping in
   progress, not a finished dish) — same convention as all 11 other decks:
   Wikimedia Commons, CC-licensed, credited in
   `src/decks/assets/week-01/SOURCES.md` in the existing format. Placed
   as a normal in-flow image on the reframed-comparison slide, not another
   side panel.

4. **Add a diagram: time scarcity → reliance on convenience/ultra-processed
   food.** Sourced from Djupegot, Nenseth, Bere, Bjørnarå, Helland, Øverby,
   Torstveit, Stea, "The association between time scarcity, sociodemographic
   correlates and consumption of ultra-processed foods among parents in
   Norway: a cross-sectional study," *BMC Public Health* 17:447 (2017),
   <https://pmc.ncbi.nlm.nih.gov/articles/PMC5433068/>. Reported odds ratios
   vs. low time scarcity: medium time scarcity → OR ≈ 2.6 for frequent
   fast-food intake; high time scarcity → OR ≈ 3.68 for high
   ultra-processed-dinner consumption. Rendered as an inline SVG horizontal
   bar chart authored directly in the `.deck.mdx` file, no new dependency.
   Cited under the chart, same style as the deck's other figure citations.

5. **Update the closing `Reading` slide** to add the Djupegot et al. 2017
   citation alongside the existing three.

## Files touched

- `src/decks/week-01.deck.mdx` — the five edits above
- `src/decks/assets/week-01/<new-image>.jpg` — downloaded Commons image
- `src/decks/assets/week-01/SOURCES.md` — one new credit line, existing format

Not touched: `astro.config.ts`, `content.config.ts`, `site-config.ts` (fixed
platform, per `CLAUDE.md`).

## Thesis-consistency check

`.claude/epics/intro-preparing-meal/epic.md` states the course's recurring
observation as "eating quickly and eating well are not opposites, but they are
only reconciled before the cooking starts." The reframed slide is a sharper,
more specific version of the same claim (healthy food *does* cost more time
to produce — the reconciliation is doing that work before the stove, via
selection/storage/cutting) rather than a contradiction of it. No rewrite of
that epic needed.

## Definition of done

- Side panel image removed from "The headline figure" slide.
- Comparison slide reframed around real prep-time cost + how the course
  addresses it; no invented statistics.
- One new CC-licensed meal-prep photo, credited in SOURCES.md.
- One new sourced diagram (inline SVG) on its own slide, citation included.
- Reading list updated.
- `pnpm check` green; deck visually confirmed at
  `/decks/week-01/` in the dev server.

## Second round — imagery and the render bug

Review of the built deck turned up three further problems, all fixed here.

6. **Deck background images never loaded — every deck, not just week 1.**
   astromotion writes `background-image: url('./assets/<deck>/<file>')` into
   the slide, resolved against the page at `/decks/<slug>/`, but copies deck
   assets to `dist/src/decks/assets/<deck>/`. Those two paths never meet, so
   every `![bg ...]` directive in the project resolved to a 404 and painted
   nothing — including all twelve title slides. The empty right-hand column
   this left behind is the "side panel" reported on the headline-figure
   slide. Week 1's four image paths are now written relative to the built
   page (`../../src/decks/assets/week-01/...`), which resolves in both `astro
   dev` and `dist`. **Decks 2–12 are still affected**; the upstream fix is
   probably an astromotion bump (the pinned v0.23.0 is well behind v0.25.1),
   which is a platform decision and deliberately not taken here.

7. **The chart was unreadable and clipped.** Its labels were `#333` on the
   deck's near-black background, and the third bar extended past the
   `viewBox`, so the citation below it overlapped the bar. Re-cut to a wider,
   shorter `viewBox` with `currentColor` text and the theme's amber ramp.

8. **`meal-prep.jpg` was almost certainly AI-generated.** Its EXIF reports
   camera model `NIKON Z6_3` — not a model Nikon makes — and a capture time
   of `2024:01:01 00:00:16`, a placeholder. Removed and replaced. Every
   image now in the deck was checked for plausible camera EXIF before use;
   see `src/decks/assets/week-01/SOURCES.md`.

Three photographs now carry the argument, all Commons, all credited:
prepped ingredients (CC0) beside "The cost is real", a heated ready meal
(CC BY-SA 4.0) on the new "What gets eaten instead" slide, and vegetables
in a pan (CC0) beside "Two weeks of proof".

## Status

Done. `pnpm check` green (build, axe, internal links, broken links, deck
structure, 11 spec tests). Slides confirmed by screenshotting the running
dev server with headless Chrome — the jsdom-based checks cannot see layout,
so overlap and 404'd backgrounds do not fail the build.

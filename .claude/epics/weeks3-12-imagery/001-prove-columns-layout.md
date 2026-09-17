---
status: completed
depends_on: []
parallel: false
conflicts_with: []
---
# Phase 0 — prove the `.columns` layout, own `theme.css`, baseline the check

Read `epic.md` first, especially "The diagnosis" and §1. This task exists
because the whole epic rests on one untested assumption: that
`<div class="columns">` renders as a real two-column grid inside a deck slide
and gives an image roughly 600×480px.

**You are the only task permitted to touch `src/decks/theme.css`.** Five
parallel lanes start the moment you finish, and they all read your result.

## Scope

- `src/decks/theme.css` — only if a helper class is genuinely needed
- One deck file, temporarily, to build the prototype slide
- `.claude/epics/weeks3-12-imagery/updates/001.md`

## What to do

1. `pnpm install`. The `prepare` script sets `core.hooksPath .githooks` (a
   pre-commit API-key scanner) — harmless and expected.
2. Baseline `pnpm check` and record the output. It was green at `ba13739`; if
   it is not green now, stop and report rather than building on a broken base.
3. Build the prototype on **week 5's "What intact tissue keeps apart" slide**
   (`src/decks/week-05.deck.mdx`, the `garlic.jpg` image at
   `max-height: 75px`). It is the worst case in the course, so if `.columns`
   fixes this one it fixes all of them.

   Use the markup in `epic.md` §1 Tier 1. Note the blank lines around the inner
   markdown — MDX needs them to parse the block as markdown rather than raw
   HTML.

4. Serve it and **screenshot the slide at both 1280×720 and 375×812.** The
   preview server serves under the Pages base path
   (`/comp4020-ass2-hadissuryaalamin/decks/week-05/`); the bare root 404s.
   Attach `pageerror` and `console` listeners.

5. Confirm, by measurement and not by eye alone:
   - the grid takes the slide's full remaining height (`flex-grow: 1` engaged)
   - the image lands around 600px wide and 480px tall
   - nothing overflows the 720px canvas — measure canvas-relative, with the
     active slide as `.reveal .slides > section.present` and
     `scale = box.height / 720`, 4px tolerance
   - the text column still reads correctly and nothing is pushed off-slide
   - `img.naturalWidth > 0`

6. If plain `.columns` is insufficient — for instance if the two cells need
   different widths, or images need vertical centring — add **one** narrow
   helper class to `src/decks/theme.css`. One class, not a framework. If
   `.columns` works as-is, **change nothing** and say so; that is the better
   outcome.

7. **Record the exact markup that worked, verbatim, in `updates/001.md`.** The
   five lanes copy it rather than re-deriving it. Include the measured image
   dimensions and both screenshots' findings.

## Done when

- `pnpm install` run and baseline `pnpm check` recorded.
- The prototype slide is screenshotted at both viewports with zero page errors
  and zero canvas overflow, and the measurements are written down.
- `theme.css` either carries exactly one new helper class, or is untouched and
  recorded as untouched.
- `updates/001.md` contains the copy-paste-ready markup block for the lanes.
- The prototype change to `week-05.deck.mdx` is committed (lane B will build on
  it) or reverted with a note saying so — state clearly which, because lane B
  needs to know what it is inheriting.

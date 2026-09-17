---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Lane D — weeks 9 and 10: fruit and the cold chain

Read `epic.md` first, especially "The diagnosis", §1 (the layout scheme), §2
(your two weeks), §3 (sourcing) and §4 (accessibility and the canvas). Then
read `updates/001.md` for the exact `.columns` markup that was proven to work —
copy it rather than re-deriving it.

## Scope — yours alone

- `src/decks/week-09.deck.mdx`, `src/decks/week-10.deck.mdx`
- `src/decks/assets/week-09/`, `src/decks/assets/week-10/` and their
  `SOURCES.md`
- `.claude/epics/weeks3-12-imagery/updates/005.md`

**Do not touch** `src/decks/theme.css` (task 001 owns it), any other deck, any
lecture or session file, or `package.json` / `pnpm-lock.yaml`.

## The shape of this lane

**Week 10** carries `meat-thermometer.jpg` at **80px**, the second-worst image
in the course — fix it first. Its *The four-step framework* slide names four
steps (clean, separate, cook, chill) and shows a single handwashing photograph;
a four-up or `.columns` treatment fits the content exactly. Four further slides
are image-free: *The range, and how fast it works*, *The two-hour rule*,
*Worked example*, *One argument, not four pieces of advice*.

These are **tables of days and temperatures**, and a photograph of food beside
a holding-time table illustrates the material rather than the rule. Per
`epic.md` §3, photograph **the rule or the check** — a thermometer reading, a
sink, a packed refrigerator shelf — not merely the food. If a slide has no
honest visual, skip it and record why; a table that stands alone is better than
a decorative photograph.

**Week 9** has three images: `apple.jpg` as title background, `bananas.jpg` as
a `bg right` panel, and `oranges.jpg` as a plain-markdown image. Note the three
different forms — **the asset path rule differs by form** (`epic.md` §4). The
plain-markdown `./assets/week-09/oranges.jpg` is correct as written and must
not be "fixed" to the `../../src/decks/...` form; only `![bg …]` directives and
raw `<img src>` tags need that prefix.

Week 9's climacteric-versus-non-climacteric distinction is its central
argument and is a natural `.compare` pair. Seven slides are image-free,
including three storage slides and the link back to week 2.

## Hard rules

- **Change no prose, no figure, no table and no citation.** Week 9's nutrition
  figures each carry an FDC ID; leave them and their `links[].label` text
  exactly as they are — a graded test matches `/FoodData Central/i` on the
  label.
- Week 10 already owns `meat-thermometer.jpg`; weeks 3 and 4 own their own
  `fridge-thermometer.jpg`. Keep the framings distinguishable rather than
  shipping three near-identical thermometer photographs.
- Do not run `pnpm build` or `pnpm check` — task 007 owns the only production
  build. Screenshot against your own `astro dev` on a port no other worktree is
  using.
- Stage only your own paths when committing.

## Done when

- `meat-thermometer.jpg` renders at a size a reader can actually see, and no
  image in either deck is below 200px unless deliberately a small inline mark.
- Both decks carry **at least six images each**, or a recorded skip explaining
  why the sixth could not be sourced honestly.
- Both decks use at least one layout beyond the default single column.
- Every new image is freely licensed, visually inspected, EXIF-checked, ~960px
  wide, alt-texted, and credited one line per file in the right week's
  `SOURCES.md`, matching one-to-one with files on disk.
- Slides you changed are screenshotted at 1280×720 and 375×812 with no clipping
  and no page errors.
- `updates/005.md` records what changed, every skip decision and its reason,
  and the measured before/after image sizes.

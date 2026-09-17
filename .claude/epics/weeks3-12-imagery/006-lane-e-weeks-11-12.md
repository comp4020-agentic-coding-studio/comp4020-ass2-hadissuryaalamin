---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Lane E — weeks 11 and 12: the two cooking weeks

Read `epic.md` first, especially "The diagnosis", §1 (the layout scheme), §2
(your two weeks), §3 (sourcing) and §4 (accessibility and the canvas). Then
read `updates/001.md` for the exact `.columns` markup that was proven to work —
copy it rather than re-deriving it.

## Scope — yours alone

- `src/decks/week-11.deck.mdx`, `src/decks/week-12.deck.mdx`
- `src/decks/assets/week-11/`, `src/decks/assets/week-12/` and their
  `SOURCES.md`
- `.claude/epics/weeks3-12-imagery/updates/006.md`

**Do not touch** `src/decks/theme.css` (task 001 owns it), any other deck, any
lecture or session file, or `package.json` / `pnpm-lock.yaml`.

## The shape of this lane

Two images each — tied for the most starved decks in the course, alongside
week 6.

**Week 11** is the controlled-comparison week: two batches of identically
cooked material, differently prepared, with exactly one stated variable. That
design is the week's entire argument and currently has **no visual at all** —
`.compare` is the obvious treatment, and a two-panel before/after or
batch-A/batch-B pair would carry it far better than prose. Five slides are
image-free: *Two batches, one stated variable*, *Everything else held
identical*, *What the variable can be*, *Why colour and time are not reliable*,
*Recording the result*.

**Week 12** is the assessed live test. Five image-free slides, including *The
test, repeated once, live* and *Why a clock and an audience are a real test*.

## Hard rules

- **These are the only two weeks in the course that cook**, and they cook
  solely to test the thesis. Imagery here should still read as *preparation
  being tested*, not as food photography. A plate is evidence, not decoration.
- **Change no prose, no figure, no table and no citation.**
- Week 12 is an assessment week. Do not add imagery that implies a marking
  criterion the assessment does not actually state.
- Weeks 11 and 12 are outside the cooking-verb test's weeks 1–10 range, but
  that test scans lecture and session frontmatter only — and this lane touches
  neither. Stay in the deck files.
- Do not run `pnpm build` or `pnpm check` — task 007 owns the only production
  build. Screenshot against your own `astro dev` on a port no other worktree is
  using.
- Stage only your own paths when committing.

## Done when

- Both decks carry **at least six images each**, or a recorded skip explaining
  why the sixth could not be sourced honestly.
- Week 11's two-batch comparison has a visual treatment, or a recorded reason
  why no honest one could be built.
- Both decks use at least one layout beyond the default single column, and no
  image is below 200px unless deliberately a small inline mark.
- Every new image is freely licensed, visually inspected, EXIF-checked, ~960px
  wide, alt-texted, and credited one line per file in the right week's
  `SOURCES.md`, matching one-to-one with files on disk.
- Slides you changed are screenshotted at 1280×720 and 375×812 with no clipping
  and no page errors.
- `updates/006.md` records what changed, every skip decision and its reason,
  and the measured before/after image sizes.

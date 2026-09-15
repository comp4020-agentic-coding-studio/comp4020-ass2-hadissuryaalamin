---
status: pending
depends_on: [001]
parallel: true
conflicts_with: []
---
# Lane A — weeks 3 and 4: relayout the densest decks

Read `epic.md` first, especially "The diagnosis", §1 (the layout scheme), §2
(your two weeks), §3 (sourcing) and §4 (accessibility and the canvas). Then
read `updates/001.md` for the exact `.columns` markup that was proven to work —
copy it rather than re-deriving it.

## Scope — yours alone

- `src/decks/week-03.deck.mdx`, `src/decks/week-04.deck.mdx`
- `src/decks/assets/week-03/`, `src/decks/assets/week-04/` and their
  `SOURCES.md`
- `.claude/epics/weeks3-12-imagery/updates/002.md`

**Do not touch** `src/decks/theme.css` (task 001 owns it), any other deck, any
lecture or session file, or `package.json` / `pnpm-lock.yaml`.

## The shape of this lane

These two decks are the **best-sourced in the epic** — eight images each,
already alt-texted and credited. Your work is mostly **relayout, not
sourcing**. Resist the urge to add images these weeks do not need.

**Week 3** — six of its eight images are undersized (`fridge-thermometer`
140px, `chicken-leg-quarters` 170px, `fish-gill-eye-check` 190px,
`fish-counter-ice` 190px, `chicken-thigh` 220px, `salmon-fillet` 220px).
Convert their slides to `.columns`. The *Fish anatomy* slide is prose-only and
describes myotome seams — a labelled SVG diagram in the style of week 7's
blade anatomy would carry it better than a photograph.

**Week 4** — has two three-up image rows already at 190px each
(`beef-cuts-diagram.png` + `beef-shank` + `beef-tenderloin`, and
`beef-rib-roast` + `ground-beef`). These are the clearest `.compare`
candidates in the course. If you use `.compare` with three children, note that
the three-child case is unverified by render (`epic.md` §1 Tier 2) — screenshot
it. `beef-steak-fresh` at 90px also needs fixing.

## Hard rules

- **Change no prose, no figure, no table and no citation.** Every sourced
  claim in these decks stays exactly as written. This lane moves images and
  changes layout.
- Week 4's *Bright red, then brown* slide is captioned **oxidation, not
  spoilage** — deliberately, and correctly. Do not "fix" it into a
  good-versus-bad comparison; that would assert a falsehood.
- Do not run `pnpm build` or `pnpm check` — task 007 owns the only production
  build. Screenshot against your own `astro dev` on a port no other worktree is
  using.
- Stage only your own paths when committing.

## Done when

- Every undersized image in both decks is either relaid out or has a recorded
  reason it stayed small.
- Both decks use at least one layout beyond the default single column.
- Any new image is freely licensed, visually inspected, EXIF-checked, ~960px
  wide, alt-texted, and credited one line per file in the right week's
  `SOURCES.md`, matching one-to-one with files on disk.
- Slides you changed are screenshotted at 1280×720 and 375×812 with no clipping
  and no page errors.
- `updates/002.md` records what changed, every skip decision and its reason,
  and the measured before/after image sizes.

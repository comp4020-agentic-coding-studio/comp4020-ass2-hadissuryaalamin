---
status: pending
depends_on: [001]
parallel: true
conflicts_with: []
---
# Lane B — weeks 5 and 6: the two most starved decks

Read `epic.md` first, especially "The diagnosis", §1 (the layout scheme), §2
(your two weeks), §3 (sourcing) and §4 (accessibility and the canvas). Then
read `updates/001.md` for the exact `.columns` markup that was proven to work —
copy it rather than re-deriving it.

**Check `updates/001.md` for whether task 001 left its prototype in
`week-05.deck.mdx` or reverted it.** You are inheriting that slide either way;
know which.

## Scope — yours alone

- `src/decks/week-05.deck.mdx`, `src/decks/week-06.deck.mdx`
- `src/decks/assets/week-05/`, `src/decks/assets/week-06/` and their
  `SOURCES.md`
- `.claude/epics/weeks3-12-imagery/updates/003.md`

**Do not touch** `src/decks/theme.css` (task 001 owns it), any other deck, any
lecture or session file, or `package.json` / `pnpm-lock.yaml`.

## The shape of this lane

This is the **heaviest sourcing lane** — three images in week 5, two in week 6,
against week 2's eleven. Expect most of your time to go on Commons search,
inspection and resizing, not on markup.

**Week 5** carries `garlic.jpg` at **75px**, the worst image in the course.
Beyond relayout, the *Leaf aromatics* section is entirely image-free and names
four subjects — bay leaf, lime leaf, oregano, basil — all abundantly
photographed on Commons. That is the cheapest real win in the epic.

**Two carried-forward findings you must respect rather than redo:**

- `week5-6-deck-improvement/updates/002.md` records that a matched
  chopped/crushed/sliced garlic set **could not be sourced** — every candidate
  was mislabelled, underexposed, or the wrong subject. Do not repeat that
  search from scratch. A `.compare` two-state pair is a legitimate fallback;
  a forced three-state set is not.
- `week5-6-deck-improvement/updates/004.md` records an exhaustive negative
  search for a marble or stone board — `Category:Cutting_boards` has ten
  subcategories, none of them marble or stone. Apply the `epic.md` §3 fallback
  ladder rather than searching again.

**Week 6** has `wood-cutting-board.jpg` sitting in its asset folder used only
as a title background, while the *Wood* slide — which argues about wood
specifically — has no image at all. That is a free fix needing no new sourcing.
Its *Plastic* slide's alt text deliberately describes what the photograph
actually shows (no visible knife scarring) rather than the slide's claim; keep
that honesty if you re-source it.

## Hard rules

- **Change no prose, no figure, no table and no citation.** The Yadav et al.
  (2023) microplastics slides in week 6 are carefully balanced between the
  transfer finding and the null cell-viability result — do not touch that
  wording.
- Do not run `pnpm build` or `pnpm check` — task 007 owns the only production
  build. Screenshot against your own `astro dev` on a port no other worktree is
  using.
- Stage only your own paths when committing.

## Done when

- `garlic.jpg` renders at a size a reader can actually see, and no image in
  either deck is below 200px unless deliberately a small inline mark.
- Both decks carry **at least six images each**, or a recorded skip explaining
  why the sixth could not be sourced honestly.
- Both decks use at least one layout beyond the default single column.
- Every new image is freely licensed, visually inspected, EXIF-checked, ~960px
  wide, alt-texted, and credited one line per file in the right week's
  `SOURCES.md`, matching one-to-one with files on disk.
- Slides you changed are screenshotted at 1280×720 and 375×812 with no clipping
  and no page errors.
- `updates/003.md` records what changed, every skip decision and its reason,
  and the measured before/after image sizes.

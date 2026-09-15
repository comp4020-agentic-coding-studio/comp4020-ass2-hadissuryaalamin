---
status: pending
depends_on: [001]
parallel: true
conflicts_with: []
---
# Lane C — weeks 7 and 8: rescue the two diagrams

Read `epic.md` first, especially "The diagnosis", §1 (the layout scheme), §2
(your two weeks), §3 (sourcing) and §4 (accessibility and the canvas). Then
read `updates/001.md` for the exact `.columns` markup that was proven to work —
copy it rather than re-deriving it.

## Scope — yours alone

- `src/decks/week-07.deck.mdx`, `src/decks/week-08.deck.mdx`
- `src/decks/assets/week-07/`, `src/decks/assets/week-08/` and their
  `SOURCES.md`
- `.claude/epics/weeks3-12-imagery/updates/004.md`

**Do not touch** `src/decks/theme.css` (task 001 owns it), any other deck, any
lecture or session file, or `package.json` / `pnpm-lock.yaml`.

## The shape of this lane

Your priority is **two hand-authored SVGs rendered far too small**, and both
are cheap wins because SVG scales losslessly — enlarging them costs layout
only, never image quality.

- **Week 7's blade-anatomy diagram** is `viewBox="0 0 700 240"` capped at
  `max-height: 124px`. It is the centrepiece of the most detailed week in the
  course and its labels (spine, edge, bevel, heel, tip, bolster, tang) are
  unreadable at that size. Give it a `.columns` cell or a full-width slide of
  its own.
- **Week 8's sequencing timeline** is `viewBox="0 0 760 120"` capped at
  `max-height: 150px`.

Both carry real `aria-label` text already — preserve it exactly when you move
them.

Week 7 also has `knife-set.jpg` and `sharpening-stone.jpg` as
`![bg right:N% contain]` panels. Per `epic.md` decision 5, a background panel
is acceptable **only** where the prose carries every fact. Judge each: if the
photograph is the sole evidence for a claim on its slide, convert it to an
in-flow `<img>` with real alt text in a `.columns` cell. If it is atmosphere,
leave it.

Week 7 has seven image-free slides (*Edge angle and hardness trade off*,
*Steel and hardness*, *Typical dimensions*, *Balance*, *Grip*, *The standard
cuts*, *Maintenance schedule*) and week 8 has four — both decks are
sourcing-poor at three and two images.

## Hard rules

- **The week 8 guest lecturer is a fictional character.** Never use a
  photograph of a real, identifiable chef, and never caption an image in a way
  that implies a real person teaches this course.
- Week 7 owns knife technique; week 2 owns the standard vegetable cuts and
  already carries their cited millimetre dimensions. Do not duplicate week 2's
  cut photographs here.
- **Change no prose, no figure, no table and no citation.**
- Do not run `pnpm build` or `pnpm check` — task 007 owns the only production
  build. Screenshot against your own `astro dev` on a port no other worktree is
  using.
- Stage only your own paths when committing.

## Done when

- Both SVGs render at a size where their labels are legible, with their
  `aria-label` text intact.
- Week 8 carries **at least six images**, or a recorded skip explaining why the
  sixth could not be sourced honestly. Week 7 likewise.
- Both decks use at least one layout beyond the default single column.
- Every new image is freely licensed, visually inspected, EXIF-checked, ~960px
  wide, alt-texted, and credited one line per file in the right week's
  `SOURCES.md`, matching one-to-one with files on disk.
- Slides you changed are screenshotted at 1280×720 and 375×812 with no clipping
  and no page errors.
- `updates/004.md` records what changed, every skip decision and its reason,
  and the measured before/after sizes of both SVGs.

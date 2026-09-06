---
status: completed
depends_on: [011]
parallel: true
conflicts_with: [018]
---
# Decks batch A — weeks 1-4

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2"
constraints 10, 13 and the week-by-week table). Wait until task 011
(lecture content) is `completed` — these decks summarise lecture content
that must exist first.

File scope: `src/decks/week-01.deck.mdx`, `week-02.deck.mdx`,
`week-03.deck.mdx`, `week-04.deck.mdx` only. Do not touch weeks 5-12 (tasks
016-017) or any `src/decks/assets/` image files (task 018 adds images after
all three deck batches land — leave `![bg](...)` and inline image slide
markers out for now, or add them as plain text placeholders task 018 will
replace; do not create the `assets/` directory yourself). Do not touch
`src/content/lectures/*` or `src/content/sessions/*`.

Read `node_modules/.pnpm/astromotion@*/node_modules/astromotion/README.md`
for slide syntax (thematic-break `---` separators, frontmatter, background-
image and split-layout classes, components, code blocks, smart typography)
before writing. Use `src/decks/week-07.deck.mdx` (239 lines) as the detail
baseline — every deck in this batch should be comparably granular, not a
handful of summary slides.

## Week 1 — rework existing deck

`week-01.deck.mdx` exists (99 lines, round 1's original). Expand it to the
week-07 detail baseline: peel the lecture's argument (time/money spent on
food prep, the thesis statement, weeks 11-12 as the test) into many small
slides rather than a few large ones. Keep its existing `slides:` link from
`src/content/lectures/week-01.md` working.

## Weeks 2-4 — new decks

Create `week-02.deck.mdx` (vegetables), `week-03.deck.mdx` (poultry and
fish), `week-04.deck.mdx` (red meat), each peeling that week's lecture
(task 011) into granular slides at the week-07 detail level. Week 3's
lecture already exists; weeks 2 and 4 are new from task 011 — read whichever
version exists at the time you start.

For weeks that got nutrition content in task 011 (2, 3, 4), give the common-
ingredients/fat-protein-calorie material its own slide(s) rather than
folding it into a general slide — this is the content the tutorial's
calculator (weeks 2, 3, 4) will exercise.

## Wiring

Set/confirm each lecture's `slides:` field
(`src/content/lectures/week-0N.md`) points at `/decks/week-0N/` for weeks
1-4. If task 011 hasn't set it yet, add it here — coordinate by checking the
file's current content rather than assuming.

## Definition of done

- `week-01.deck.mdx` reworked to the detail baseline; `week-02.deck.mdx`,
  `week-03.deck.mdx`, `week-04.deck.mdx` created at the same detail level.
- Each of the four lectures' `slides:` field resolves to its matching deck.
- `pnpm dev` renders all four decks with no console/page errors.
- Log progress to `.claude/epics/intro-preparing-meal/updates/015.md`.

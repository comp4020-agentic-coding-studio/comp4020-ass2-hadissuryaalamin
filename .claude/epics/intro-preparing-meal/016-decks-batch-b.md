---
status: pending
depends_on: [011]
parallel: true
conflicts_with: [018]
---
# Decks batch B — weeks 5-8

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2"
constraints 10, 13 and the week-by-week table). Wait until task 011
(lecture content) is `completed`.

File scope: `src/decks/week-05.deck.mdx`, `week-06.deck.mdx`,
`week-07.deck.mdx`, `week-08.deck.mdx` only. Do not touch weeks 1-4 or 9-12
(tasks 015, 017) or any `src/decks/assets/` image files (task 018 adds
images after all three deck batches land). Do not touch
`src/content/lectures/*` or `src/content/sessions/*`.

Read `node_modules/.pnpm/astromotion@*/node_modules/astromotion/README.md`
for slide syntax before writing. `week-07.deck.mdx` (239 lines) is round 1's
detail baseline — the other three decks in this batch should match it.

## Week 5 — new deck

Create `week-05.deck.mdx` (aromatics and oil), peeling that week's lecture
(task 011) into granular slides: galangal/shallot/onion/garlic and how
processing changes each, bay/lime leaf/oregano/basil and heat, oil smoke
points. This week's tutorial exercise (task 012, 014) is the storage-
duration calculator — give it a clear lead-in slide describing what the
exercise practices.

## Week 6 — new deck

Create `week-06.deck.mdx` (kitchen tools and surfaces), peeling that week's
lecture into granular slides: chopping boards, choppers, strainers,
containers, maintenance, board-material comparison including the
microplastics research citation from `epic.md`. This week has no tutorial —
no calculator lead-in needed.

## Week 7 — light touch only

`week-07.deck.mdx` already exists at the detail baseline and already carries
the round 1 deck link. Only touch it if it's missing images support
structurally (it shouldn't need restructuring) — otherwise leave its content
as-is; task 018 will add images to it directly.

## Week 8 — new deck

Create `week-08.deck.mdx` (guest lecture: time management under service),
peeling the existing `week-08.md` lecture into granular slides. This week's
tutorial exercise is the storage-duration calculator — give it a clear
lead-in slide.

## Wiring

Set/confirm each lecture's `slides:` field for weeks 5, 6, 8 points at
`/decks/week-0N/` (week 7's is already set from round 1).

## Definition of done

- `week-05.deck.mdx`, `week-06.deck.mdx`, `week-08.deck.mdx` created at the
  week-07 detail level; `week-07.deck.mdx` unchanged or only lightly touched.
- Each of the four lectures' `slides:` field resolves to its matching deck.
- `pnpm dev` renders all four decks with no console/page errors.
- Log progress to `.claude/epics/intro-preparing-meal/updates/016.md`.

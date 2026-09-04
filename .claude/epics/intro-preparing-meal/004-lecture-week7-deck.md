---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Lecture page + slide deck: week 7 (the knife)

Create `src/content/lectures/week-07.md` and a real slide deck at
`src/decks/week-07.deck.mdx`, linked from the lecture page via its
`slides:` field (per the epic's spec-test #5: "at least one lecture links
a deck via its `slides:` field"). Read
`.claude/epics/intro-preparing-meal/epic.md` fully first, `src/decks/theme.css`
and the existing `src/decks/week-01.deck.mdx` (starter) for the deck format
before writing, and `src/content.config.ts` for the lectures schema.

File scope: `src/content/lectures/week-07.md`, `src/decks/week-07.deck.mdx`,
and (if the starter deck's `STARTER_CONTENT` marker needs clearing per the
epic's list) `src/decks/week-01.deck.mdx` — either rewrite it into the
week-07 deck and delete the old file, or replace its content so no
`STARTER_CONTENT` marker survives. Do not touch sessions, assessments,
people, or `src/pages/`.

## Content — this is the epic's "most detailed week"

Knife types and what each is for; blade geometry and edge angles; steel
and hardness; typical blade lengths in millimetres and weights in grams;
balance. Sharpening and honing as distinct operations, with a stated
maintenance schedule. Grip and the cuts themselves. This is explicitly the
most demonstrative material in the course — build the deck as the primary
teaching artefact, the lecture page as its container/summary.

## Constraints

- Voice: deadpan academic, no exclamation marks, no winking at the
  fiction. Numbers carry units (mm, g, degrees).
- Week 7 must never claim/imply cooking happens.
- `slides:` field on the lecture must point to the deck's route
  (`/decks/week-07/` per the epic's naming convention — confirm the actual
  route the theme generates from `src/decks/<name>.deck.mdx` before
  wiring it, so the link isn't dangling).
- Lecture file needs at least one `related:` edge (e.g. to
  `sessions/07-*`).
- Zero `STARTER_CONTENT` markers in either the lecture file or whichever
  deck file ends up shipped.
- Any factual/technical claim (steel hardness figures, edge angles,
  typical weights) should be plausible and, where the epic's sourcing rule
  applies (it applies to every factual claim in the course), backed by a
  real citation if you state it as a researched fact rather than general
  knowledge — don't invent a study or number dressed up as sourced data.

## Done when

- `src/content/lectures/week-07.md` exists, dated 2027-04-05, links the
  deck via `slides:`, has `related:`.
- `src/decks/week-07.deck.mdx` exists and renders (check with `pnpm dev`
  if time allows), built on `theme.css`.
- No `STARTER_CONTENT` marker remains anywhere in `src/decks/` or the new
  lecture file.
- `pnpm check` build doesn't error on these files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/004.md`; flip
  `status` to `in_progress` then `completed`.

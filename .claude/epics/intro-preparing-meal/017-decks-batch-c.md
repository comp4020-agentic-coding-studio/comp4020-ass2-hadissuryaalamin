---
status: pending
depends_on: [011]
parallel: true
conflicts_with: [018]
---
# Decks batch C — weeks 9-12

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2"
constraints 10, 13 and the week-by-week table). Wait until task 011
(lecture content) is `completed`.

File scope: `src/decks/week-09.deck.mdx`, `week-10.deck.mdx`,
`week-11.deck.mdx`, `week-12.deck.mdx` only. Do not touch weeks 1-8 (tasks
015, 016) or any `src/decks/assets/` image files (task 018 adds images
after all three deck batches land). Do not touch `src/content/lectures/*`
or `src/content/sessions/*`.

Read `node_modules/.pnpm/astromotion@*/node_modules/astromotion/README.md`
for slide syntax before writing. Use `src/decks/week-07.deck.mdx` (239
lines) as the detail baseline.

## Week 9 — new deck

Create `week-09.deck.mdx` (fruit), peeling that week's lecture (task 011)
into granular slides: varieties, storage and why (the ethylene payoff from
week 2), choosing at the market, scheduled ripening. Give the common-fruit
fat/protein/calorie content its own slide(s) — this feeds the macro
calculator, this week's tutorial exercise.

## Week 10 — new deck

Create `week-10.deck.mdx` (food safety and the cold chain), peeling the
synthesis week into granular slides: danger zone, cross-contamination, safe
holding times, pulling together weeks 2/3/4/9's storage material. This
week's tutorial is the storage-duration calculator — give it a clear lead-in
slide.

## Week 11 — new deck

Create `week-11.deck.mdx` (cooking — the first cook week), peeling that
week's lecture into granular slides: identical dishes cooked from
differently prepared material, heat methods covered only as far as the
comparison needs. No tutorial this week — no calculator lead-in.

## Week 12 — new deck

Create `week-12.deck.mdx` (live test: the public kitchen), peeling the
lecture into granular slides: what is examined, the practical's structure,
how it tests the preparation decisions from the rest of the course. No
tutorial this week (the live test is itself the exercise).

## Wiring

Set/confirm each lecture's `slides:` field for weeks 9-12 points at
`/decks/week-0N/` or `/decks/week-1N/`.

## Definition of done

- `week-09.deck.mdx` through `week-12.deck.mdx` created at the week-07
  detail level.
- Each of the four lectures' `slides:` field resolves to its matching deck.
- `pnpm dev` renders all four decks with no console/page errors.
- Log progress to `.claude/epics/intro-preparing-meal/updates/017.md`.

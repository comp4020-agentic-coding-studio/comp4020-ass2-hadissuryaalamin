---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# Lecture content — all 12 weeks

Read `.claude/epics/intro-preparing-meal/epic.md` in full first, especially
the "Round 2" section (week-by-week additions table, constraints 10-14) — it
is the contract. Read `CLAUDE.md` for voice rules and the citation rule.

Bring the `lectures` collection to full weekly coverage and add nutrition
content to the four macro-calculator weeks.

File scope: only `src/content/lectures/*.md`. Do not touch sessions,
assessments, people, decks, or pages — those are other tasks. Do not add a
`slides:` field pointing at a deck that doesn't exist yet (decks land in
tasks 015-017) — leave that field off, or add it in a follow-up commit once
you can confirm the deck exists.

## New lecture pages (8)

Write `src/content/lectures/week-02.md`, `week-04.md`, `week-05.md`,
`week-06.md`, `week-09.md`, `week-10.md`, `week-11.md`, `week-12.md`. Base
each on its matching session topic in `epic.md`'s round 1 week plan (weeks
2, 4, 5, 6, 9, 10, 11, 12 there describe the topic) and round 1's existing
`src/content/sessions/*.md` files for the prose that used to live only in
sessions — the lecture now absorbs it. Follow the deadpan academic voice:
first sentence names the week's preparation decision, connect back to the
thesis, at least one `related:` edge, `spec:` lines that are checkable.

## Existing lecture updates

`week-03.md` (poultry and fish) already exists — add its nutrition content
(see below) without rewriting what already works.

## Nutrition content (weeks 2, 3, 4, 9 only — constraint 14)

Each of these four lectures names that week's most common ingredients with
fat, protein and calorie figures per 100 g, cited to USDA FoodData Central
(https://fdc.nal.usda.gov/). Pick 4-6 representative ingredients per week
that plausibly recur in this course (e.g. week 2: onion, carrot, potato,
spinach; week 3: chicken breast, salmon; week 4: beef mince, lamb; week 9:
apple, banana, orange). Look up real per-100g figures on FoodData Central —
do not invent numbers. Cite the specific FDC entry (name + a resolving URL
or FDC ID) for each figure, per `CLAUDE.md`'s sourcing rule. Do not cover
nutrition on any other week (constraint 14 is explicit that this is not a
blanket requirement).

## Definition of done

- 12 lecture entries exist: `week-01.md` through `week-12.md`.
- Weeks 2, 3, 4, 9 each name several common ingredients with cited
  fat/protein/calorie figures from USDA FoodData Central.
- Every new/edited lecture has a `related:` edge and passes the voice rules.
- No `STARTER_CONTENT` markers left in any file you touch.
- Log progress to `.claude/epics/intro-preparing-meal/updates/011.md`.

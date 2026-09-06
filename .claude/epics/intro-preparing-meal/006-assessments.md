---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# Assessments: invent-a-recipe and the public kitchen

Rewrite `src/content/assessments/assignment-1.md` and
`src/content/assessments/final-project.md` (rename the files/slugs if that
reads better — e.g. `invent-a-recipe.md` and `the-public-kitchen.md`, just
make sure every place that refs them by slug — sessions weeks 6/12, tasks
001/002 — uses the final slug) into SLOP1640's two real assessments. Read
`.claude/epics/intro-preparing-meal/epic.md` fully first, and
`src/content.config.ts` for the assessments schema, especially the
`weighted` marking-block shape.

File scope: only `src/content/assessments/*.md`. Do not touch sessions,
lectures, people, decks, or pages.

## Content

- **Assignment: invent a recipe (week 6, weight 40).** Students invent a
  dish and submit a written account: preparation process step by step,
  nutritional composition of the result, sensory description (colour,
  aroma, flavour, texture). Not cooked for this submission — the point is
  reasoning about a recipe before it exists. Nutritional figures must be
  traceable to a named food-composition database — name USDA FoodData
  Central or FSANZ NUTTAB explicitly in the brief text. Use a `weighted`
  marking block whose criteria sum to exactly 100.
- **Final: the public kitchen (week 12, weight 60).** The week 12
  practical, assessed live. State what's examined: preparation decisions,
  execution under time constraint, whether the result matches what the
  student's own account (from earlier work) predicted. Use a `weighted`
  marking block summing to exactly 100.
- **Cross-assessment total: the two weights (40 + 60) must sum to exactly
  100.** This is a hard constraint — task 009 writes a spec test asserting
  it against `dist/api/index.json`; don't ship anything else.

## Constraints

- Voice: deadpan academic. Marking rubrics applied without irony.
- Each assessment's own `weighted` marking-block criteria must independently
  sum to 100 (the schema enforces this) — check the math before finishing.
- Each file needs at least one `related:` edge (e.g. week 6's assessment
  → `sessions/06-*`, week 12's → `sessions/12-*`).
- Zero `STARTER_CONTENT` markers in either file.
- Due dates/weeks: invent-a-recipe due around week 6 (2027-03-29), public
  kitchen due week 12 (2027-05-10) — follow whatever due-date field the
  schema requires, consistent with the course teaching period
  (2027-02-22 to 2027-05-28).

## Done when

- Both assessment files rewritten, schema-valid, weights sum to 100
  overall and each marking block sums to 100 internally.
- Zero `STARTER_CONTENT` markers.
- `pnpm check` build doesn't error on these files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/006.md`; flip
  `status` to `in_progress` then `completed`.

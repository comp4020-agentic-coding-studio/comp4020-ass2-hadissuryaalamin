---
status: completed
depends_on: [011, 012, 013, 014, 015, 016, 017, 018, 019]
parallel: false
conflicts_with: []
---
# Final integration and check — round 2

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2" →
"Round 2 definition of done"). All of tasks 011-019 must be `completed`
first.

## What to do

1. Run `pnpm check` (typecheck, production build, spec tests). Fix any
   cross-task breakage: mismatched `slides:` links, duplicate `related:`
   targets, broken image paths, schema-field typos (`tutorial: ture` etc.),
   STARTER_CONTENT leftovers, axe violations on any new page.
2. Verify against the "Round 2 definition of done" checklist in `epic.md`
   line by line — twelve lectures, twelve decks, seven tutorial pages, five
   no-tutorial pages, both calculators built and wired in on the right
   weeks, cited data, spec tests 6-10 passing alongside round 1's five.
3. Confirm platform files are still untouched vs `main`:
   `astro.config.ts`, `scripts/pages-base.ts`, `src/content.config.ts`'s
   four shipped schemas, and the Slop branding spread in `src/site-
   config.ts` (a diff limited to `sessionLabels`, matching round 1's
   precedent, is fine).
4. Spot-check a sample of the new USDA FoodData Central and USDA FSIS
   citations actually resolve (or are genuine even if a WAF blocks a
   scripted fetch — see round 1's `updates/010.md` for how that was handled
   last time).
5. Run `pnpm check:evidence` — do not introduce a new failure beyond
   whatever round 1 already deferred (check `updates/010.md` for what that
   was).
6. Write `.claude/epics/intro-preparing-meal/updates/020.md` summarising
   what was verified, same structure as `updates/010.md`.

## Definition of done

- `pnpm check` exits clean.
- Every item in "Round 2 definition of done" confirmed, with evidence
  (command output, not just "should be fine").
- `pnpm check:evidence` at least as green as round 1 left it.
- Status flipped to `completed` only once all of the above is true — if
  something can't be fixed without exceeding this task's scope, leave it
  `in_progress` and say exactly what's blocking it.

---
status: pending
depends_on: [004]
parallel: false
conflicts_with: [001, 002, 003, 004, 006]
---
# Nutrition — reconcile with the calculator, then deepen

Scope: `src/decks/week-02.deck.mdx` (lines ~156–181, nutrition + reading
list), `src/content/lectures/week-02.md` (nutrition section only),
`src/data/macro/week-02.ts` (only if extended per step 2).

Read epic.md §5 in full before starting.

1. **Fix the inconsistency first.** The deck (lines 165–170) lists 4
   vegetables and claims potato is "58 kcal, FDC 170032". The calculator
   (`src/data/macro/week-02.ts`) has 5 ingredients including a *different*
   potato entry ("Potatoes, flesh and skin, raw", FDC 170026, 77 kcal), and
   the deck's line 178 falsely claims the two are "exactly" the same
   figures. Verify both FDC IDs against USDA FoodData Central — they may
   both be legitimate but different foods (potato skin alone vs
   flesh-and-skin). Reconcile so deck, lecture, and calculator agree.
   Default: align the deck table to the calculator's five ingredients and
   restate the relationship sentence truthfully.
2. **Deepen the table**: add roughly 3–4 more vegetables spanning the
   deck's own families (roots/tubers, alliums, leafy greens, brassicas),
   and at least one more nutrient column (fibre, total sugars, or vitamin
   C — whichever the SR Legacy entries carry consistently for the chosen
   set). Every figure per 100 g raw edible portion, with its FDC ID, cross
   -checked against USDA FoodData Central before recording.
3. If `src/data/macro/week-02.ts` is extended to match, confirm the
   tutorial that consumes it still works — check the consuming end, not
   just that the data file compiles.
4. **Constraint: nutrition figures belong to weeks 2, 3, 4, 9 only** (parent
   epic constraint 14). Do not spread nutrition content into other weeks.
5. Add any new citation to the deck's closing `Reading` slide.

Done when: the deck's claim about the calculator is true, the table has
~7-8 vegetables across 4+ nutrients each with an FDC ID, and (if extended)
the calculator's consuming tutorial still works.

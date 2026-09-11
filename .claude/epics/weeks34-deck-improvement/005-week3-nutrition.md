---
status: completed
depends_on: [004]
parallel: true
conflicts_with: []
---
# Week 3 (lane A): nutrition reconcile and deepen

Last task in lane A, follows 004. May run concurrently with lane B's 009.

## Scope

Files: `src/decks/week-03.deck.mdx` (deck table ~lines 151–154), `src/content/lectures/week-03.md` (nutrition section only), `src/data/macro/week-03.ts` (only if extending).

Deck/lecture table currently has 2 rows; calculator has 4 ingredients:

| Food | FDC ID | In deck? |
|---|---|---|
| Chicken, breast, skinless, boneless, meat only, raw | 171077 | yes |
| Fish, salmon, Atlantic, farmed, raw | 175167 | yes |
| Fish, cod, Atlantic, raw | 172904 | **no — add** |
| Duck, domesticated, meat only, raw | 172410 | **no — add** |

- Grow deck and lecture tables to the calculator's four items (chicken breast, salmon, cod, duck). The existing lecture `spec:` line about chicken breast/salmon stays true as a subset — **needs no `spec:` change**.
- Fix `## Duck, briefly` slide which currently gives duck no figures though the calculator has them.
- Fix the deck's closing line ("Session 3's tutorial exercises the macro calculator on chicken breast and salmon" — currently false; tutorial uses all four) so it's true.
- **Add iron (mg) as the extra nutrient column** (decision: meat/fish carry no meaningful fibre, iron is the measurable trace of the dark-meat myoglobin story already told).
- Every figure per 100g raw edible portion, with FDC ID, **verified against USDA FoodData Central before recording** — do not use training-data recollection as a citation.
- At least one `links[].label` in the lecture must keep the literal string "FoodData Central" (graded citation test matches label text, not URL).
- `src/data/macro/types.ts` allows 4–6 ingredients; 4 is current, growth to 6 available, 8 is not.
- **Plan for two nutrition slides** from the outset (week 2's single-slide table overflowed the fixed canvas).
- If `week-03.ts` is extended, confirm the consuming end still works: `src/components/MacroCalculator.astro` and the tutorial page rendering it, not just that the data file compiles.
- Do not touch `src/content/sessions/03-poultry-and-fish.mdx` (the slides align to it, not the reverse).

## Done when

Week 3 nutrition table matches calculator's four items plus iron column, duck has figures, closing-line claim is true, FDC IDs verified, "FoodData Central" label intact, canvas not overflowed. Flip status, log to `updates/005.md`.

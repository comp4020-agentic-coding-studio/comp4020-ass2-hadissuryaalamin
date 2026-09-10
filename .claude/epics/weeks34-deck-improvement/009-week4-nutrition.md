---
status: pending
depends_on: [008]
parallel: true
conflicts_with: []
---
# Week 4 (lane B): nutrition reconcile and deepen — forces spec/description rewrite

Last task in lane B, follows 008. May run concurrently with lane A's 005. **This is the one task in the epic that touches graded fields (`spec:` line, `description`) — handle the cooking-verb constraint carefully.**

## Scope

Files: `src/decks/week-04.deck.mdx` (deck table ~lines 140–143), `src/content/lectures/week-04.md` (nutrition section, the one `spec:` line, and `description`), `src/data/macro/week-04.ts` (only if extending).

Deck/lecture table currently (zero overlap with calculator):

| Food | FDC ID |
|---|---|
| Beef, ground, 80% lean/20% fat, raw | 2514744 |
| Lamb, ground, raw | 174370 |

Calculator (`src/data/macro/week-04.ts`) has instead:

| Food | FDC ID |
|---|---|
| Beef, ground, 85% lean/15% fat, raw | 171796 |
| Beef, ground, 93% lean/7% fat, raw | 173110 |
| Lamb, domestic, leg, whole, raw | 174311 |
| Goat, raw | 175303 |

- **Replace** deck and lecture tables with the calculator's four items (not one ID currently in common, and no ground lamb exists in the calculator at all).
- Rewrite `src/content/lectures/week-04.md`'s `spec:` line (currently "you can state the fat, protein and calorie content per 100g of ground beef and ground lamb, with a source") to match the realigned four items — must stay independently checkable after the change.
- Rewrite the `description` field (currently names "a mince and a ground lamb") — also stale, also scanned by the cooking-verb test.
- **Cooking-verb regex constraint**: banned words are cook/sauté/saute/fry/fried/boil/roast/grill/bake/simmer/braise/sear/poach and inflections, word-bounded, case-insensitive, scanned against `title`, `description`, and `spec[]` only. `slice/chop/dice/portion/grind/fillet/treatment` are safe. Reuse week 4's own existing dodge: its first `spec:` line already says "slow, **moist treatment**" / "fast, **dry treatment**" to avoid the banned verbs — apply the same phrasing discipline to the new `spec:` line and `description`.
- Fix the deck's closing line (currently claims tutorial "exercises the macro calculator on ground beef and ground lamb" — half false) so it's true against the four actual items.
- **Add iron (mg) as the extra nutrient column** (meat carries no meaningful fibre; iron ties to the myoglobin/dark-meat story already told).
- Every figure per 100g raw edible portion, with FDC ID, **verified against USDA FoodData Central before recording**.
- At least one `links[].label` keeps the literal string "FoodData Central".
- `types.ts` allows 4–6 ingredients; growth to 6 available, 8 is not.
- **Plan for two nutrition slides** from the outset.
- If `week-04.ts` is extended, confirm `src/components/MacroCalculator.astro` and the tutorial page rendering it still work.
- Leave `src/content/sessions/04-red-meat.mdx` untouched (slides align to it).
- **Leave week 4's title-image credit line verbatim**, including "…before cooking" in the Wikimedia file's own title — no test scans `SOURCES.md`, and editing a credit line to hide a word is worse practice than citing accurately.
- Week 3's lecture currently has exactly one `related:` edge — do not delete it (would fail the graph test). Check week 4's has at least one too (currently has two).

## Done when

Week 4 nutrition table matches calculator's four items plus iron, closing-line claim true, `spec:` line and `description` rewritten and independently checkable, free of every cooking-regex verb, FDC IDs verified, "FoodData Central" label intact, title-image credit line untouched. Flip status, log to `updates/009.md`.

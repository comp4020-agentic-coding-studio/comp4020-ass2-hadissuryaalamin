---
status: pending
depends_on: [003]
parallel: true
conflicts_with: []
---
# Week 3 (lane A): choosing well — fish freshness

Follows 003. May run concurrently with lane B's 008.

## Scope

Files: `src/decks/week-03.deck.mdx` (new section — neither deck currently teaches choosing; spine is Order → Anatomy → Handling → Storage → Nutrition, adding selection widens the week deliberately per user decision), `src/decks/assets/week-03/`, its `SOURCES.md`.

- Build the fish-freshness section on the source **already** in week 3's `links:`/Reading slide: FDA/FoodSafety.gov "Safe Selection and Handling of Fish and Shellfish". No new research needed for the claims.
- Cover: eye clarity (bright/clear/convex vs sunken/cloudy), gill colour (bright red vs brown/grey), flesh resilience, smell (mild/sea vs ammonia/sour), scales intact.
- **Sourcing risk and fallback ladder** (carry verbatim from week 2): (1) prefer a comparable subject where both fresh and declining states exist as real matched photographs; (2) fallback to a drawn diagram, clearly labelled as illustration; (3) **never present a single photograph as if it were a comparison.**
- Viable non-pair fallback: a single labelled close-up of a fresh eye and gill with the check named, plus a diagram — not a fake comparison.
- Any claim about *why* a change indicates decline needs a source that resolves, or must stay purely descriptive.
- Reuse the existing `.compare` CSS class in `src/decks/theme.css` (week 2's, `max-height: 19rem`) for any fresh/declining pair — do not add a new class (theme.css is contended, owned only by a dedicated task if one is ever needed).
- Same image-sourcing convention as prior tasks. Real alt text everywhere. Body text before image.

## Done when

Week 3 has a fish-freshness section built on the cited FDA source, no single photo presented as a comparison, `.compare` class reused not duplicated. Flip status, log to `updates/004.md`.

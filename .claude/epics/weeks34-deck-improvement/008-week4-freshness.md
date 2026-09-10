---
status: pending
depends_on: [007]
parallel: true
conflicts_with: []
---
# Week 4 (lane B): choosing well — oxidation vs spoilage

Follows 007. May run concurrently with lane A's 004.

## Scope

Files: `src/decks/week-04.deck.mdx` (new section — selection not currently taught, deliberate widening), `src/decks/assets/week-04/`, its `SOURCES.md`.

- **The naive "bright red vs brown meat = good vs bad" pairing is FALSE and must not be shipped.** Surface browning in red meat is myoglobin oxidation (oxymyoglobin → metmyoglobin) — a colour change, not a safety judgement.
- Required version: show bright red vs brown, caption it explicitly as **oxidation, not spoilage**. Separately name the actual spoilage indicators that matter: slime, off-odour, the date. USDA FSIS publishes this guidance and week 4 already cites FSIS — use that source.
- **Sourcing risk is real**: a matched fresh-and-declining pair of the same species/cut, comparably shot, is materially harder to find than week 2's onions. Fallback ladder (carry verbatim): (1) comparable substitute subject with both states as real photographs, preferred; (2) drawn diagram, clearly labelled as illustration; (3) **never present a single photograph as if it were a comparison.**
- Any claim about *why* a colour change indicates something needs a source that resolves, or must stay purely descriptive.
- Reuse existing `.compare` CSS class in `src/decks/theme.css` (week 2's, `max-height: 19rem`) for any paired images — do not add a new class.
- Same image-sourcing convention. Real alt text. Body text before image.

## Done when

Bright-red-vs-brown slide exists, explicitly captioned oxidation-not-spoilage, real spoilage indicators named separately, no single photo presented as comparison, `.compare` class reused not duplicated. Flip status, log to `updates/008.md`.

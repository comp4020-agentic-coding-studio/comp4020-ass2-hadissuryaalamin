---
status: pending
depends_on: [001]
parallel: true
conflicts_with: []
---
# Week 3 (lane A): portioning section

Lane A owns everything `week-03*`. Sequential within lane: 003, 004, 005 all follow this one (same deck file and `SOURCES.md` get appended by each). May run concurrently with lane B (002/003/004/005 the week-04 equivalents) — disjoint files.

## Scope

Files: `src/decks/week-03.deck.mdx` (`## Portioning` slide ~line 104; `## Fish anatomy` slide ~line 61, currently image-free), `src/decks/assets/week-03/`, `src/decks/assets/week-03/SOURCES.md`.

- Subject is portion form, not technique: for poultry, the eight-piece breakdown along the joints (leg/thigh/drumstick, wing, breast halves — deck already sets this up); for fish, fillet forms (fillet, steak/darne, supreme), the myotome seams already named, and the pin-bone line.
- A labelled myotome or fillet diagram would carry the fish-anatomy slide better than current prose — consider sourcing one.
- **No invented dimensions.** No protein analogue of Escoffier's millimetres exists — state without a number where none is documented, and say so plainly in the update note.
- **Shape and consequence only, never execution** — no knife angle, hand position, or grip (week 7's territory, not touched).
- **Differentiate from week 5** (chopped/crushed/sliced, cell-rupture/surface-area, argues flavour) — this section argues **holding time**, not flavour.
- Anchor holding-time consequence on the already-sourced, already-in-deck FSIS claim in `week-04.deck.mdx` (grinding mixes surface bacteria through the volume, dropping shelf life from 3–5 days to 2) as the model for "more cut surface spoils faster" — the week-3 analogue of this needs its own citation, do not just borrow week 4's number for week 3 claims.
- Image sourcing convention (Wikimedia Commons or other free source; check licence CC0/PD/CC BY/CC BY-SA; look at image before using; check EXIF for AI-generation tells; resize ~960px wide; save to `src/decks/assets/week-03/`; one credit line per file in `src/decks/assets/week-03/SOURCES.md` in the standard format).
- Budget against fixed 1280×720 canvas — prefer raw `<img>` + per-image inline `max-height` over a new shared CSS class.
- Body text before image, not after.

## Done when

Portioning slide has photographs and a holding-time argument, no invented numbers, no knife technique, images sourced/credited/sized per convention, nothing clipped. Flip status, log to `updates/002.md`.

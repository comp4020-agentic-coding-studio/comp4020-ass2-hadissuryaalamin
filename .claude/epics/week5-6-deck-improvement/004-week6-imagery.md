---
status: completed
depends_on: [003]
parallel: true
conflicts_with: []
---
# Week 6 (Lane B, step 2): plastic-board conversion and board-material comparison

Files: `src/decks/week-06.deck.mdx`, `src/decks/assets/week-06/`, its
`SOURCES.md`.

## Scope

- **Convert `plastic-cutting-board.jpg` to in-flow `<img>` regardless of the
  three-way comparison's outcome** (epic §3, explicit). Move to after the
  "## Plastic" slide's body text.

  **Flag, not a silent fix:** viewed the current photo directly during
  decomposition. It is a photo of strawberries being cut in a measuring cup;
  a white plastic board and a knife are visible in the background, but no
  knife scarring is actually visible in the frame. The slide's claim is
  "takes knife scarring readily — visible cut marks accumulate" (lines
  74-75) — this photo does not illustrate that claim, it just happens to
  contain a plastic board. Write alt text describing what the photo
  actually shows (do not claim scarring is visible when it isn't). Whether
  to replace this asset with a better-chosen plastic-board photo that
  actually shows scoring is a real sourcing decision the epic did not ask
  for — flag it back rather than deciding it here, unless you find and
  vet a clearly better replacement within this task's own scope.

- **Board-material three-way comparison (§3).** Wikimedia Commons has **no
  marble or stone cutting/pastry-board photo** — confirmed during epic
  decomposition by reading `Category:Cutting_boards` directly (10
  subcategories: by-country, bread, cheeseboards, fish, vegetables,
  bendable, butcher blocks, with-food, PVC, wooden — no marble/stone
  subcategory or file) and by direct Commons API `intitle:` searches for
  "marble board," "marble slab," etc. (results were architectural/furniture/
  memorial marble, a "Marble Slab Creamery" ice-cream chain logo, and one
  fudge-on-a-marble-slab photo — none a usable kitchen cutting/pastry board
  shot). **Recommend following the epic's own fallback ladder to option 3:
  skip the three-way comparison, keep `plastic-cutting-board.jpg` as the
  only material photo (status quo).** Re-check quickly in case a new upload
  exists, but do not spend long re-deriving this — it was a real, direct
  negative search result, not a time-boxing shortcut.
- If task 003 found `.compare` needs no CSS change and a suitable
  wood-clean-specimen + marble photo pair somehow turns up, `.compare` is
  ready to use as-is — do not add a new shared CSS class.

## Image sourcing convention (unchanged)

Wikimedia Commons or other free source; CC0/PD/CC BY/CC BY-SA; look at the
image before using it; check EXIF; resize ~960px; save to
`src/decks/assets/week-06/`; one credit line in
`src/decks/assets/week-06/SOURCES.md`. Never present a single photograph as
a comparison it isn't — caption honestly if images aren't a matched set.

## Done when

`plastic-cutting-board.jpg` converted to in-flow `<img>` with accurate alt
text (flag above addressed at least by an honest alt-text decision, not
necessarily a re-source). Board-material comparison sourced-and-laid-out or
explicitly recorded as skipped (with the negative Commons search result
above as the reason) — not silently dropped. `SOURCES.md` still 1:1. Nothing
clipped at 720px. Flip status, log to
`.claude/epics/week5-6-deck-improvement/updates/004.md`.

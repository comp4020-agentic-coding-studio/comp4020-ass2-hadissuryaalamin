---
status: pending
depends_on: [001, 002, 003, 004, 005]
parallel: false
conflicts_with: [001, 002, 003, 004, 005]
---
# Final verification and check

Scope: no file scope of its own — runs checks across everything tasks
001–005 touched. May make small fix-up edits to `src/decks/week-02.deck.mdx`
or `src/decks/assets/week-02/SOURCES.md` if verification finds a defect,
but must not redo any prior task's content decisions.

1. Run `pnpm check` (typecheck, production build with axe + link checking,
   spec tests). Fix the cause of any failure; do not weaken a test or
   delete one without flagging it.
2. Screenshot `/decks/week-02/` on the running dev server at the two
   viewports markers use. Confirm: both backgrounds paint, no overlap, no
   text overflow, every new image renders, alt text present on every
   inline image.
3. Confirm every image added across tasks 002–004 has a corresponding line
   in `src/decks/assets/week-02/SOURCES.md`, and no invented number
   (cut dimension, storage-life claim, nutrition figure) slipped through
   unsourced.
4. Confirm `src/decks/week-07.deck.mdx` was not touched by any prior task.
5. Confirm the epic's Definition of Done (epic.md, bottom) is fully met.

Done when: `pnpm check` is green, screenshots confirm the deck visually,
and every Definition of Done item in epic.md is checked off.

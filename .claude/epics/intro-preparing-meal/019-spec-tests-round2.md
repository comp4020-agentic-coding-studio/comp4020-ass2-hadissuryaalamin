---
status: pending
depends_on: [011, 012, 013, 014, 015, 016, 017, 018]
parallel: false
conflicts_with: []
---
# Spec tests — round 2 promises

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2"
→ "Spec tests to add"). Read `spec/*.test.ts` (round 1's five tests) for the
established pattern: read `dist/api/index.json` after a `pnpm build`, assert
on the built contract, never on source files or markup structure.

File scope: `spec/*.test.ts` only (new test file or additions to an
existing one — match round 1's convention). Do not touch content, decks, or
components.

## Tests to add

6. **Twelve lecture entries exist**, numbered 1-12, no gaps or duplicates.
7. **Twelve decks exist**, one per week, and every lecture's `slides:` field
   resolves to a deck that exists (check the API's lecture entries against
   `dist/decks/week-0N/` or however decks surface in the built output —
   inspect `dist/` after a build to confirm the actual shape before writing
   the assertion).
8. **Exactly seven sessions entries carry `tutorial: true`** (weeks 2, 3, 4,
   5, 8, 9, 10) **and exactly five carry `tutorial: false`** (weeks 1, 6, 7,
   11, 12). Confirm the field actually appears in `dist/api/index.json` for
   sessions entries before writing the assertion — the `.loose()` schema
   passes it through, but check where the built API surfaces loose fields.
9. **Weeks 2, 3, 4 and 9 each cite a nutrition source** — assert their
   lecture content contains a recognisable citation marker (e.g. a `links[]`
   entry or a `spec:` line referencing FoodData Central), not exact prose.
10. **Weeks 5, 8 and 10 each cite a storage-safety source** — same approach,
    referencing the USDA FSIS source already used in weeks 10/11.

Test the contract (counts, links, presence of a citation), not exact
wording — a test that pins prose fails on every edit.

## Definition of done

- Tests 6-10 written and passing against a fresh `pnpm build`.
- Round 1's five spec tests still pass (`pnpm check` runs both).
- Log progress to `.claude/epics/intro-preparing-meal/updates/019.md`.

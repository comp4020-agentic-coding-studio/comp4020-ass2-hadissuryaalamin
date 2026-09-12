---
status: completed
depends_on: [001]
parallel: true
conflicts_with: [003]
---
# Week 7 (lane A): alt text, blade-anatomy diagram, cuts-table reconciliation

Lane A owns everything `week-07*`. May run concurrently with lane B (task
003, the week-08 equivalent) — disjoint files (`week-07.deck.mdx` +
`assets/week-07/` vs. `week-08.deck.mdx` + `assets/week-08/`).

## Scope

Files: `src/decks/week-07.deck.mdx`, `src/decks/assets/week-07/`,
`src/decks/assets/week-07/SOURCES.md`.

- **Alt text** for week 7's three `![bg …]` directives (chefs-knife.jpg,
  knife-set.jpg, sharpening-stone.jpg) — short, real, descriptive strings.
  None are the sole carrier of required information.
- **Blade-anatomy diagram**: the "Anatomy of a blade" slide (spine / edge /
  bevel / heel / tip / bolster / tang) is bullet text only in a deck whose
  own opening slide claims "this one is demonstrated." Source one labelled
  diagram (knife with parts labelled, or a clear silhouette) via Wikimedia
  Commons (Commons API search + imageinfo, same method `SOURCES.md` already
  records). Single non-comparison image placement (plain `<img>`, not
  `.compare`), matching how week 2 places its single cut-shape photos.
  License CC0/PD/CC BY/CC BY-SA only, check for AI-generation tells, resize
  ~960 px wide, real alt text, credit line appended to
  `src/decks/assets/week-07/SOURCES.md` in the existing line format. Fixed
  1280×720 canvas budget — text takes priority over the image.
- **Cuts-table reconciliation**: "The standard cuts" table currently gives
  Julienne as 3 mm × 3 mm but 40–50 mm, and Batonnet as 6 mm × 6 mm but
  50–60 mm, with no citation. Week 2 (`week-02.deck.mdx`, read-only,
  **do not edit**) cites Auguste Escoffier School of Culinary Arts for
  julienne (3 mm × 3 mm, 65 mm) and batonnet (6 mm × 6 mm, 65 mm). Update
  week 7's table to 65 mm for both, and add the same Escoffier citation
  under the table (match week 2's citation wording/link:
  `https://www.escoffier.edu/blog/culinary-arts/8-knife-cuts-every-professional-cook-should-know/`).
  Brunoise, small dice, chiffonade already match or have no conflicting
  figure — leave as-is.

## Done when

Three `![bg …]` directives alt-texted, blade-anatomy slide has a sourced/
credited/alt-texted labelled diagram, cuts table matches week 2's Escoffier
figures with citation added, `week-02.deck.mdx` untouched. Flip status, log
to `updates/002.md`.

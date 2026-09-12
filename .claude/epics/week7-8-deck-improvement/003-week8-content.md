---
status: pending
depends_on: [001]
parallel: true
conflicts_with: [002]
---
# Week 8 (lane B): alt text, optional sequencing graphic

Lane B owns everything `week-08*`. May run concurrently with lane A (task
002) — disjoint files.

## Scope

Files: `src/decks/week-08.deck.mdx`, `src/decks/assets/week-08/`,
`src/decks/assets/week-08/SOURCES.md`.

- **Alt text** for week 8's two `![bg …]` directives (restaurant-kitchen.jpg,
  plated-dish.jpg) — short, real, descriptive strings.
- **Optional sequencing graphic** (judgment call, skip rather than force):
  if a suitable free image or simple diagram can be sourced quickly for the
  "Sequencing" slide (a labelled strip/timeline of the four categories:
  finished ahead / held / made to order / sequenced), add it as a single
  non-comparison image, sourced/licensed/credited/alt-texted per the same
  convention as task 002. If nothing suitable turns up within a reasonable
  search, leave the slide text-only and record that decision explicitly in
  the update note — do not leave it half-attempted.
- Week 8 needs materially less new content than week 7 per the epic — do
  not pad it with unrelated material.
- Do not touch `src/content/sessions/08-timed-mise-en-place.mdx` (USDA FSIS
  links must survive unchanged) or `src/content/people/dominic-achterberg.md`
  (confirmed fictional, must stay that way).

## Done when

Two `![bg …]` directives alt-texted, sequencing graphic either added (fully
sourced/credited/alt-texted) or explicitly skipped with reasoning recorded,
USDA FSIS links and Dominic Achterberg's fictional status confirmed
untouched. Flip status, log to `updates/003.md`.

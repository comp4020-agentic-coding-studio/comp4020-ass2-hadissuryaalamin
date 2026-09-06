---
status: completed
depends_on: [015, 016, 017]
parallel: false
conflicts_with: [015, 016, 017]
---
# Deck images — all 12 decks

Read `.claude/epics/intro-preparing-meal/epic.md` in full first ("Round 2"
constraint 13). Wait until tasks 015, 016, 017 (all three deck batches) are
`completed` — this task edits the same deck files they wrote.

File scope: `src/decks/**/*.deck.mdx` (adding image references only, not
rewriting slide content) and new files under `src/decks/assets/<week-
slug>/`. Do not touch `src/content/*` or components.

## Where images go and how they're referenced

Confirmed against astromotion's own source (`plugins/remark-deck-bg.ts`,
README "Background images" and "Writing slides" sections): a relative image
path only resolves correctly when it lands under `src/` — `public/` or an
absolute `/…` path 404s on this site's subpath deploy. So:

- Store images at `src/decks/assets/<week-slug>/<name>.<ext>`, e.g.
  `src/decks/assets/week-02/onion.jpg`.
- Reference from the matching deck as a relative path:
  `./assets/week-02/onion.jpg`.
- Both syntaxes work this way: background images
  (`![bg](./assets/week-02/onion.jpg)`, with `contain`/`cover`/`left:NN%`/
  `right:NN%`/`blur:`/`brightness:`/`saturate:` modifiers per the README) and
  plain inline images (`![alt text](./assets/week-02/onion.jpg)`).

## Sourcing images

Per-week, per-slide: pick images that illustrate that slide's content
(ingredients, knife types, kitchen tools, storage setups, etc.). Search for
freely-licensed images (e.g. public-domain or permissively-licensed sources)
or generate them; either way, keep the licensing terms in mind since this is
a graded academic deliverable, not a commercial site. Note the source/
license briefly in a comment near where the image is referenced, or in a
short `src/decks/assets/<week-slug>/SOURCES.md`, so it can be checked.
Images are candidates the user will review and swap afterward — favour
having something reasonable in place over leaving slides bare, since the
user replaces files in place rather than the deck markup.

Add images to slides only, per the epic's constraint — never to
`src/content/lectures/*`, `src/content/sessions/*`, or any other page.

## Definition of done

- Every deck (`week-01` through `week-12`) has at least a few image
  references (background and/or inline) illustrating its content.
- All image files live under `src/decks/assets/<week-slug>/` and are
  referenced with `./assets/...`-relative paths from their deck.
- `pnpm build`'s broken-link/asset check passes — no 404ing image path.
- `pnpm dev` renders every deck with images visible, no console/page errors.
- Log progress to `.claude/epics/intro-preparing-meal/updates/018.md`.

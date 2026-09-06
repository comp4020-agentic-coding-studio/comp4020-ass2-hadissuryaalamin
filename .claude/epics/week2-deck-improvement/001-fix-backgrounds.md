---
status: pending
depends_on: []
parallel: false
conflicts_with: [002, 003, 004, 005, 006]
---
# Fix week-02 deck background images

Scope: `src/decks/week-02.deck.mdx` (background image paths only),
`.claude/epics/week1-deck-improvement/epic.md` (read-only, for the fix
pattern).

Read epic.md §1 in full before starting.

1. Build the site, serve it, and screenshot `/decks/week-02/` with headless
   Chrome. Confirm whether the two `![bg ...]` backgrounds (title slide,
   line 8; "Three checks" slide, line 143) are actually missing, and confirm
   the asset URL 404s. Record what you observed in the update note — do not
   skip this even though the parent epic already suspects the bug.
2. Apply the same remedy `week1-deck-improvement` used for week 1: rewrite
   the two background paths relative to the built page
   (`../../src/decks/assets/week-02/...`) instead of `./assets/week-02/...`.
3. Re-screenshot `/decks/week-02/` and confirm both backgrounds now paint,
   in both `astro dev` and a production `pnpm build` + `pnpm preview`.
4. Do not touch decks 3–12, and do not bump the pinned `astromotion`
   version.

Done when: both backgrounds paint in dev and in a production build,
confirmed by screenshot, and the observation (before/after) is written to
`updates/001.md`.

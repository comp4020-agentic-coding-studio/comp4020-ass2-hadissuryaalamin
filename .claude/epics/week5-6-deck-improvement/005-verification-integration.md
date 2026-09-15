---
status: completed
depends_on: [002, 004]
parallel: false
conflicts_with: []
---
# Verification and integration (Phase 2, sole owner)

Solo task, runs last, alone, once both lanes (002 and 004) are complete. The
only production builds/checks in this epic run here — neither lane runs
`pnpm build` or `pnpm check` on its own.

## Scope

- Run `pnpm check` (typecheck, production build with axe + link checking,
  spec tests) — green required.
- Slide-by-slide walk of **both** decks (week-05 and week-06) at **both**
  viewports (1280×800 and 375×812), with `pageerror`/`console` listeners
  attached, asserting every `img.naturalWidth > 0`. Confirm no slide clipped
  against the fixed 720px canvas.
- `SOURCES.md`-to-file cross-check per week (`src/decks/assets/week-05/
  SOURCES.md` and `week-06/SOURCES.md`) — every image file has exactly one
  credit line and vice versa.
- `git diff` confirmation that `src/decks/week-07.deck.mdx`, decks 1-4 and
  8-12, and both lectures' (`week-05.md`, `week-06.md`) frontmatter are
  untouched.
- Run `pnpm check:evidence` — expect the same pre-existing `PROCESS.md`
  template-comment failure every prior deck-improvement epic has recorded
  as known/deferred/out-of-scope; treat as no worse than baseline, not a new
  regression, but do not add any additional evidence failure.
- Confirm the Definition of Done in `epic.md` (all 10 points) is satisfied.
- Commit (small, one decision each) and push to
  `origin/worktree-week5-6-deck-improve`.

## Done when

`pnpm check` green, no clipped slides at either viewport with zero page
errors, `SOURCES.md` cross-checks clean both directions, week-07/decks
1-4/8-12/both lecture frontmatters confirmed untouched by `git diff`,
`pnpm check:evidence` no worse than baseline, Definition of Done satisfied,
work committed and pushed. Flip status, log to
`.claude/epics/week5-6-deck-improvement/updates/005.md`.

---
status: pending
depends_on: [002, 003]
parallel: false
conflicts_with: []
---
# Verification and integration (Phase 2, sole owner)

Solo task, runs last, alone, once both lanes (002 and 003) are complete. The
only production builds/checks in this epic run here — neither lane runs
`pnpm build`/`pnpm check` on its own beyond task 001's baseline.

## Scope

- Run `pnpm check` (typecheck, production build with axe + link checking,
  spec tests) — green required.
- Slide-by-slide walk of **both** decks (week-07 and week-08) at **both**
  viewports (1280×800 and 375×812), with `pageerror`/`console` listeners
  attached, asserting every `img.naturalWidth > 0`. Confirm no slide clipped
  against the fixed 720 px canvas. May apply small fix-ups (e.g. per-image
  inline `max-height`) but must not reopen content decisions made in lanes
  A/B.
- `SOURCES.md`-to-file cross-check per week (`assets/week-07/SOURCES.md`,
  `assets/week-08/SOURCES.md`) — every image file has exactly one credit
  line and vice versa.
- Grep confirmation that `src/content/sessions/08-timed-mise-en-place.mdx`
  still carries its two USDA FSIS links.
- `git diff` confirmation that `week-02.deck.mdx`,
  `src/content/lectures/week-07.md`, `src/content/lectures/week-08.md`,
  `src/content/sessions/07-the-knife.md`,
  `src/content/sessions/08-timed-mise-en-place.mdx`,
  `src/content/people/dominic-achterberg.md`, the storage calculator, and
  `spec/*.test.ts` are all untouched.
- Run `pnpm check:evidence` — record result.
- Confirm the Definition of Done in `epic.md` (all 11 points) is satisfied.

## Done when

`pnpm check` green, no clipped slides at either viewport with zero page
errors, SOURCES.md cross-checks clean both directions, all untouched files
confirmed untouched by `git diff`, `pnpm check:evidence` result recorded,
Definition of Done satisfied. Flip status, log to `updates/004.md`.

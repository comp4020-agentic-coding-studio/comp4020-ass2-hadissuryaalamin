---
status: completed
depends_on: [005, 009]
parallel: false
conflicts_with: []
---
# Verification and integration (Phase 2, sole owner)

Solo task, runs last, alone, once both lanes (005 and 009) are complete. The only production builds/checks in this epic run here — neither lane runs `pnpm build` or `pnpm check` on its own.

## Scope

- Run `pnpm check` (typecheck, production build with axe + link checking, spec tests) — green required.
- Slide-by-slide walk of **both** decks (week-03 and week-04) at **both** viewports (1280×800 and 375×812), with `pageerror`/`console` listeners attached, asserting every `img.naturalWidth > 0`. Confirm **no slide clipped** against the fixed 720px canvas. May apply small fix-ups (e.g. per-image inline `max-height`) but must not reopen content decisions made in lanes A/B.
- `SOURCES.md`-to-file cross-check per week (`src/decks/assets/week-03/SOURCES.md` and `week-04/SOURCES.md`) — every image file has exactly one credit line and vice versa, no orphans either direction.
- No-invented-number spot-check against each lane's update notes (002–005, 006–009).
- `git diff` confirmation that `src/decks/week-07.deck.mdx` and decks 1, 2, 5, 6, 8–12 are untouched.
- Run `pnpm check:evidence` — must be no worse than its current pre-existing failure (the `PROCESS.md` `TEMPLATE:` comment failure is a known, deferred, out-of-scope failure — do not treat as a new regression, but do not add any additional evidence failure).
- Confirm the Definition of Done in `epic.md` (all 12 points) is satisfied.

## Done when

`pnpm check` green, no clipped slides at either viewport with zero page errors, SOURCES.md cross-checks clean both directions, week 7 and untouched decks confirmed untouched by `git diff`, `pnpm check:evidence` no worse than baseline, Definition of Done satisfied. Flip status, log to `updates/010.md`.

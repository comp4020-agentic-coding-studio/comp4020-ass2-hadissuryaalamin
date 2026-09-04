---
status: pending
depends_on: [009]
parallel: false
conflicts_with: []
---
# Final integration and check

Sweep the whole repo for anything the individual tasks left behind, then
run and pass the full check suite. Read
`.claude/epics/intro-preparing-meal/epic.md`'s "Definition of done"
section — this task's job is to verify every line of it is true, and fix
whatever isn't.

File scope: whole repo, but this task should mostly be verification and
small fixes, not new content — if something needs a real content rewrite,
prefer flagging it precisely over silently patching around it, since
`PROCESS.md` will later cite commits and needs each commit legible.

## Checklist (from the epic's Definition of done)

- Twelve session entries, dated Mondays 22 Feb - 10 May 2027, no gaps.
- Lecture pages for weeks 1, 3, 7 and 8 at minimum; week 7 links the deck.
- Two assessments summing to exactly 100, each with a `weighted` marking
  block that itself sums to 100.
- People entries replaced (convenor + teacher), including the fictional
  week-8 guest — no real person presented as teaching.
- Home page states the thesis in its first screen; policies page written;
  starter artwork replaced or deliberately dropped everywhere.
- `grep -rl STARTER_CONTENT src/` returns nothing.
- The five spec tests from task 009 written and passing.
- `pnpm check` green.
- `pnpm check:evidence` green.
- Every factual claim carries a source that resolves (spot-check a
  sample of links with a real fetch, don't just trust they look like
  URLs).
- Confirm no non-negotiable constraint from the epic was traded away:
  platform files untouched (`astro.config.ts`, `scripts/pages-base.ts`,
  the four shipped collections, the Slop branding spread), course code's
  last three digits still `640`.

## Constraints

- Do not weaken any spec test to make it pass.
- Commit in small, single-decision commits as you fix things — not one
  giant "final fixes" dump — so `PROCESS.md` can cite specific commits
  later.
- If `pnpm check:evidence` flags the `PROCESS.md` template comment or a
  missing `reflections/` entry — leave `PROCESS.md` itself alone, it's
  explicitly out of this epic's scope (written last, separately).

## Done when

- Every item in the checklist above is verified true (or fixed).
- `pnpm check` and `pnpm check:evidence` both exit clean.
- Log progress to `.claude/epics/intro-preparing-meal/updates/010.md`; flip
  `status` to `in_progress` then `completed`.

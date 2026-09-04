---
status: pending
depends_on: [001, 002, 003, 004, 005, 006, 007, 008]
parallel: false
conflicts_with: []
---
# Spec tests: the five course-content promises

Add five new tests to `spec/` (new file(s) alongside the existing
`spec/data-integrity.test.ts` — do not modify that file's existing
assertions, only add to it or add sibling files). Read
`.claude/epics/intro-preparing-meal/epic.md` fully first, and
`spec/README.md` plus the existing `spec/data-integrity.test.ts` for the
test-reading pattern already in use (it reads `dist/api/index.json`, not
source markdown — do the same, so tests survive a change of approach).

File scope: `spec/*.test.ts` only.

## The five tests

1. **Assessment weights total exactly 100** across all published
   assessments in `dist/api/index.json`.
2. **Twelve teaching weeks exist**, numbered 1-12, no gaps, no duplicates.
3. **Weeks 1-10 do not teach cooking.** No session in weeks 1-10 claims
   cooking in its title, description, or `spec:` lines. This is the
   course's central promise — write the assertion to check for cooking-
   verb/noun patterns (cook, cooking, sauté, fry, boil, roast, grill, etc.
   as a defensible but not overfit list) rather than one exact phrase.
4. **Every node carries at least one `related:` edge** — no page orphaned
   from the graph, across all graph collections.
5. **At least one lecture links a deck** via its `slides:` field.

Test the contract, not the wording — a test pinning exact prose fails on
every future edit. If any of these fail against the actual content
written by tasks 001-008, that's a real bug in the content, not the test:
fix the content (small follow-up edit, still within this task's scope to
flag, but the actual content fix belongs to whichever task owns that
file — leave a clear note in your update file naming exactly which file
and what's wrong if you can't fix it directly).

## Constraints

- Must run via `pnpm check` (this assignment's course-site starter runs
  spec, including axe, inside `pnpm build` — confirm by running `pnpm
  check` yourself, don't assume).
- Read `dist/api/index.json`, not source files — run `pnpm build` first
  if `dist/` is stale.
- Never weaken an existing test to make a new one pass.

## Done when

- Five tests added, all green against the actual built content from
  tasks 001-008.
- `pnpm check` passes end to end.
- Log progress to `.claude/epics/intro-preparing-meal/updates/009.md`; flip
  `status` to `in_progress` then `completed`.

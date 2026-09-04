---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Lecture pages: week 1 and week 3

Replace `src/content/lectures/week-01.md` and create
`src/content/lectures/week-03.md` (or rename the second starter file to it
if that's simpler) — the lecture-collection entries for weeks 1 and 3 of
SLOP1640. Read `.claude/epics/intro-preparing-meal/epic.md` fully first,
and `src/content.config.ts` for the lectures schema.

File scope: only `src/content/lectures/week-01.md` and
`src/content/lectures/week-03.md`. Do not touch sessions, assessments,
people, decks, or pages.

## Content

- **Week 1 lecture — Why prepare at all.** Same subject as the week 1
  session (task 001 writes that) but this is the lecture-format content:
  the argument delivered as a lecture, with the sourced time/money figures
  (USDA ERS / BLS ATUS, Monsivais et al. — same three citations task 001
  uses, listed in the epic). State the thesis and that weeks 11-12 test it.
  `related:` to `sessions/01-*`.
- **Week 3 lecture — Animal protein I: poultry and fish.** Anatomy first
  (muscle use, connective tissue, fat distribution), then handling (cold
  chain, cross-contamination, cleaning, portioning), then sourced storage
  temperatures and safe holding times. Cite real USDA FSIS/FDA (or FSANZ)
  guidance — search for actual pages, never invent a number. `related:` to
  `sessions/03-*`.

## Constraints

- Voice: deadpan academic, no exclamation marks, no winking at the fiction.
  Numbers carry units (°C, minutes/hours, grams).
- Weeks 1-10 must never claim/imply cooking happens (a spec test checks
  this against title/description/`spec:` fields).
- Each file needs at least one `related:` edge.
- No `STARTER_CONTENT` markers left in either file.
- Follow the lectures schema in `src/content.config.ts` exactly (dates,
  teacher refs if the schema wants them — see task 007 for the people
  slugs once written; if not yet written, use a plausible slug consistent
  with the epic and it will resolve once task 007 lands).
- Every factual claim needs a real, resolving source.
- Windows layout rule from `CLAUDE.md`: any markdown page under
  `src/pages/` needs explicit `layout:` frontmatter — not relevant here
  since lectures are content-collection files, not `src/pages/`, but don't
  copy that pattern incorrectly.

## Done when

- `src/content/lectures/week-01.md` and `week-03.md` both replaced, dated
  2027-02-22 and 2027-03-08 respectively, zero `STARTER_CONTENT` markers,
  each with `related:`.
- `pnpm check` build doesn't error on these two files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/003.md`; flip
  `status` to `in_progress` then `completed`.

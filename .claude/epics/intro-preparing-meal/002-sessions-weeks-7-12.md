---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Sessions weeks 7-12

Write `src/content/sessions/07-<slug>.md` through `src/content/sessions/12-<slug>.md`
— six new session entries for SLOP1640 "Introduction to Preparing Meal",
weeks 7-12. Read `.claude/epics/intro-preparing-meal/epic.md` in full first.
Read `CLAUDE.md` and `src/content.config.ts` for the sessions schema.

File scope: only `src/content/sessions/*.md` for weeks 7-12. Do not touch
lectures, assessments, people, decks, or pages — those are other tasks
(week 7's lecture+deck and week 8's lecture+guest are task 004/005; this
task only writes the *session* entry for those weeks, which in this
platform is the lab/studio-style companion node, distinct from the lecture
collection).

## Per-week content (from the epic)

- **Week 7 — The knife.** Most detailed week. Knife types and what each is
  for; blade geometry and edge angles; steel and hardness; typical lengths
  in mm and weights in grams; balance. Sharpening vs honing as distinct
  operations with a maintenance schedule. Grip and the cuts themselves.
  (The lecture page for this week links the slide deck — task 004 — this
  session entry should `related:` to that lecture.)
- **Week 8 — Guest lecture: time management under service.** Session
  companion to the guest lecture (task 005 writes the lecture + fictional
  person). Content here: what the studio/session activity is (e.g.
  practising a timed mise en place run against the guest's framework).
  Closes the loop on week 1 (time was the argument for preparing; this is
  the discipline that treats it as a design constraint). `related:` to the
  week 1 session and the week 8 lecture.
- **Week 9 — Fruit.** Varieties and what distinguishes them; where each is
  stored and why (this is where week 2's ethylene material pays off —
  `related:` to week 2); choosing at market; ripening as a schedulable
  process. Cite real produce-storage guidance (USDA/FDA or equivalent).
- **Week 10 — Food safety and the cold chain.** Synthesis week, last
  before cooking. Temperature danger zone, cross-contamination, safe
  holding times, how long prepared material keeps. Pulls together storage
  material from weeks 2, 3, 4, 9 into one account — `related:` to all four.
  All temps/times must be sourced from a food-safety authority (USDA,
  FSANZ or equivalent) — search for real pages, do not invent figures.
- **Week 11 — Cooking.** First week at the stove. Identical dishes cooked
  from differently prepared material so the difference is attributable to
  preparation not cooking technique. Heat methods covered only as far as
  this comparison needs. This week (and 12) is allowed to mention cooking —
  the "no cooking" constraint is only for weeks 1-10.
- **Week 12 — Live test: the public kitchen.** Assessed practical (also
  the final assessment — task 006 writes the assessment record; this
  session entry is the teaching-week companion, `related:` to the final
  assessment). Students prepare and cook live under time constraint;
  examines what was done before the heat and whether it held up.

## Constraints that apply to every file you write

- Dates: week 7 = 2027-04-05, week 8 = 2027-04-12, week 9 = 2027-04-19,
  week 10 = 2027-04-26, week 11 = 2027-05-03, week 12 = 2027-05-10.
- Voice: deadpan academic, no exclamation marks, never wink at the fiction.
  Numbers carry units.
- Weeks 7-10 must never claim/imply cooking (spec test checks title,
  description, `spec:` fields). Weeks 11-12 may.
- Every file needs at least one `related:` edge; cross-link per the notes
  above.
- No `STARTER_CONTENT` markers.
- Follow the sessions schema in `src/content.config.ts` exactly.
- Every factual claim needs a real, resolving source — link it. Never
  invent a statistic, study, or DOI.

## Done when

- Six files exist: `src/content/sessions/07-*.md` .. `12-*.md`, dated
  correctly, each with `related:`.
- `pnpm check` build doesn't error on these files. `related:` refs to
  lectures/assessments created by tasks 004/005/006 are fine to add — if
  those tasks haven't landed yet when you write this, use the ref slug the
  epic specifies (`lectures/week-07`, `lectures/week-08`,
  `assessments/<final-assessment-slug>`) so it resolves once they exist;
  don't leave a ref that will never resolve.
- Log progress to `.claude/epics/intro-preparing-meal/updates/002.md`; flip
  `status` to `in_progress` then `completed`.

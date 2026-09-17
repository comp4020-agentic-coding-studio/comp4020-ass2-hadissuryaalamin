---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# Add the Tester feedback criterion to the public kitchen

Read `epic.md` first — especially §1, the closed decision list, and the spec
constraints. Your whole job lives in one file.

## Scope — yours alone

- `src/content/assessments/the-public-kitchen.md`
- `.claude/epics/rubrics-and-preps-index/updates/001.md`

**Do not touch** `invent-a-recipe.md`, `src/content.config.ts`,
`src/components/MarkingModel.astro`, `src/site-config.ts`, any session, lecture
or deck file.

## The change

| Criterion | Was | Now |
|---|---|---|
| Preparation decisions | 30 | 30 |
| Execution under time constraint | **40** | **20** |
| Correspondence with the earlier account | 30 | 30 |
| **Tester feedback** | — | **20** |

Exactly 100. Both `src/content.config.ts`'s `weightedMarking` superRefine and
`spec/course-promises.test.ts` enforce that sum — a wrong total fails the build
*and* a graded test.

**The arithmetic is the easy part. Four other things silently become false:**

1. **`description:` frontmatter** names three things the assessment examines.
   It will have four. Rewrite it so it does not undercount. Week 12 is outside
   the cooking-verb test's weeks 1–10 range, so cooking verbs are safe here.
2. **The "How it is marked" paragraph** (around line 67) says *"Execution under
   time constraint carries the most weight, because it is the one condition this
   assessment adds that the invent-a-recipe assignment could not test."* That
   becomes **false** — Execution drops to 20 while two other criteria sit at 30.
   Rewrite it to justify the new distribution honestly. Do not just delete it;
   this page explains its own weighting by convention, and that is worth keeping.
3. **A "What is examined" paragraph** for the new criterion. The body gives one
   bolded paragraph per criterion; a fourth rubric row with no explanation is a
   number with nothing behind it.
4. **A new `spec:` line.** Every `spec:` line is a promise a reader can check
   without asking the convenor. A criterion carrying 20% needs one, in the same
   register as the four already there — what the student must be able to *do*.

## What the criterion actually marks — read before writing

**It marks the student's handling of an independent sensory report. It does not
mark whether the dish was enjoyed.** The course's own position, argued in the
week 5 lecture, is that nothing depends on taste perception; a criterion that
rewarded being liked would contradict the course's own teaching and would be
unmarkable besides.

**It must also not restate "Correspondence with the earlier account."** The
distinction is:

- *Correspondence* — the student's **own** comparison of the finished dish
  against their week 6 prediction.
- *Tester feedback* — whether the student can obtain a **structured report from
  a palate that is not their own**, and reconcile it with that prediction.

Self-assessment versus external verification. If your prose does not make that
difference legible to a student reading the brief, it is not done.

**The tester is a role, not a person.** Name no real person, and never imply a
real chef is involved — a hard project rule. The brief already establishes an
examiner, and the week 12 deck establishes an audience at the public kitchen;
the tester role sits inside that existing setup rather than inventing a new one.

## Constraints

- **Voice: deadpan academic.** No exclamation marks, never wink at the course
  being fictional, prefer the specific over the general.
- Keep the `related: [invent-a-recipe]` edge — a graded test requires every
  graph node to have at least one.
- Do not change `weight: 60`, `week: 12` or `due:`.
- **Do not run `pnpm build` or `pnpm check`** — task 003 owns the only
  production build, and a concurrent build clobbers a shared `dist/`.
- Stage only your own paths. Commit incrementally.

## Done when

- Four criteria, summing to exactly 100, with Execution at 20 and Tester
  feedback at 20.
- `description:` names all four.
- No sentence anywhere on the page claims Execution carries the most weight.
- Tester feedback has both a "What is examined" paragraph and a `spec:` line,
  and is clearly distinct from Correspondence.
- `updates/001.md` records what changed and the exact wording you chose for the
  new criterion, spec line and rewritten weighting paragraph.

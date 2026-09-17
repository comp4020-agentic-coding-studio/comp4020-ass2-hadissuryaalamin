# Epic: the public kitchen's tester-feedback criterion, and the Preps index page

## Context

A small, final polish epic. Base is `main` at `4d5d4db`, immediately after the
weeks 3–12 deck imagery epic merged (PR #9). Two unrelated pieces of work, in
two separate files, that happen to have been asked for together.

The user's opening request was broader than what survived discussion, and the
narrowing matters — a build agent reading only the final scope would otherwise
reinstate things that were deliberately dropped:

- They asked to **delete the Preps pages**, believing them to duplicate the
  lectures. **They then changed their mind: "Dont delete the preps."** Nothing
  in this epic deletes, merges or hides a Prep.
- They asked for **rubrics on two assessments**. Both assessments already carry
  weighted rubrics, and both already render (see below). Only one criterion was
  genuinely missing.

## What was investigated, so nobody re-derives it

**The Preps do not duplicate the lectures.** Seven of the twelve
(`tutorial: true` — weeks 2, 3, 4, 5, 8, 9, 10) host `MacroCalculator` or
`StorageCalculator`, which appear nowhere else on the site. The other five are
bench practicals that say so in their own prose: week 7's Prep reads *"The
lecture describes a knife. This session is where one is used."* Week 5's reads
*"a preparation decision distinct from what the cutting itself does to its
flavour, which is the lecture's subject."*

**The duplication the user saw is in the titles.** Eight of twelve Preps carry a
title identical (or near-identical) to their week's lecture — weeks 1, 2, 4, 5,
6, 9, 10 exactly, and week 3 differing only by punctuation. The four that read
as clearly distinct are the four that name what the session *does*: "Cuts, under
supervision", "Timed mise en place", "First heat", "The live test". **Retitling
the eight was offered and is NOT in scope** — see Deferred.

**The rubrics already exist and already render.** `src/components/MarkingModel.astro`
draws a Criterion/Weight table and is wired at `src/pages/assessments/[slug].astro:45`.
This is *not* the "implemented on one side of the boundary and never connected"
case the project's `CLAUDE.md` warns about — it is connected.

## Decisions already taken by the user

Closed list. Do not reopen.

1. **Do not delete, merge or hide any Prep page.** Reversal of the opening
   request, stated explicitly.
2. **Do not retitle the eight duplicate-titled Preps.** Deferred, not rejected.
3. **Criteria and weights only — no schema change.** `src/content.config.ts` is
   on the project's Do-not-touch list, and extending `weightedMarking` so each
   criterion could carry a performance descriptor was offered and declined.
   Criteria stay `{name, weight}`.
4. **The public kitchen's new weights are Preparation decisions 30, Execution
   under time constraint 20, Correspondence with the earlier account 30, Tester
   feedback 20.** The 20 comes out of Execution, which was the single heaviest
   criterion at 40.
5. **`invent-a-recipe` is not touched.** The user's "how balanced the nutrition"
   maps onto its existing "Nutritional composition" (35%), and they accepted
   that as already covered. Judging whether a dish is nutritionally *balanced*
   would need a cited dietary standard the course does not teach, so it was
   considered and declined.

Resolved by judgment, recorded so no build agent has to guess:

6. **"Tester feedback" marks the student's handling of an independent sensory
   report — not whether the dish was enjoyed.** The course's own position is
   that nothing depends on taste perception, so a criterion that rewarded
   being liked would contradict the week 5 lecture. It must also not merely
   restate "Correspondence with the earlier account": correspondence is the
   student's *own* comparison of dish against prediction; tester feedback is
   whether they can obtain a structured report from a palate that is not their
   own and reconcile it with that prediction. Self-assessment versus external
   verification.
7. **The tester is a role, not a person.** No real person is named, and no real
   chef is presented as involved — a hard project rule. The week 12 deck already
   establishes an audience and an examiner at the public kitchen; the tester
   role sits inside that existing setup.

## 1. The public kitchen — add the criterion and keep the file honest

File: `src/content/assessments/the-public-kitchen.md`. This is the whole of
workstream A, and the risk here is **not** the weight arithmetic — it is the
three places that silently become false when the numbers change.

**The criterion and weights:**

| Criterion | Was | Now |
|---|---|---|
| Preparation decisions | 30 | 30 |
| Execution under time constraint | **40** | **20** |
| Correspondence with the earlier account | 30 | 30 |
| **Tester feedback** | — | **20** |
| | 100 | 100 |

**Four things must change together, or the page contradicts itself:**

1. **`marking.criteria`** — add the fourth entry, change Execution to 20.
2. **The `description:` frontmatter** currently reads "preparation decisions,
   execution under time constraint, and whether the result matches what was
   predicted" — three things, for what will be four criteria. It must name the
   fourth.
3. **The body's "How it is marked" section** (around line 67) states *"Execution
   under time constraint carries the most weight, because it is the one
   condition this assessment adds that the invent-a-recipe assignment could not
   test."* **After this change that sentence is false** — Execution drops to 20
   while Preparation and Correspondence sit at 30. Rewrite the paragraph to
   explain the new distribution truthfully. Do not simply delete it; the page's
   convention is to justify its own weighting.
4. **A "What is examined" subsection** for the new criterion. The body gives one
   bolded paragraph per criterion (Preparation decisions, Execution under time
   constraint, Correspondence with the earlier account). A fourth criterion with
   no paragraph is a rubric row the brief never explains.

**And a new `spec:` line.** Every `spec:` line is a promise a reader can check
without asking the course convenor; a criterion carrying 20% with nothing in the
spec behind it is unbacked. The line must be checkable — what the student must
be able to *do*, in the same register as the four already there.

## 2. The Preps index page — remove shipped starter content

File: `src/pages/sessions/index.astro`. Independent of workstream A.

The page currently ships **developer instructions as student-facing prose**:

> "The internal collection and URL stay `sessions`. Set the visible singular and
> plural names once in `src/site-config.ts` and use the language your course
> deserves everywhere readers see it."

That is template boilerplate addressed to whoever is building the site, rendered
live to a reader. The project rule is that no starter-content fragment survives
the commit that replaces it.

Replace it with real prose, in the course's deadpan-academic voice, that does
the job the paragraph was standing in for: say what a Prep **is**, and how it
differs from that week's lecture. That distinction is true and already
demonstrable — seven Preps are calculator exercises, the rest are bench
practicals, and the lectures are the argument. A reader arriving at this listing
currently has no way to know why two pages exist per week.

**Keep** `<SessionsGrid />` and the `sessionLabels`-driven title. **Do not**
touch `src/site-config.ts`, the nav entry, or the homepage card — the page keeps
its URL, so nothing that links to it needs to change.

## Constraints

- **Do not touch** `src/content.config.ts`, `src/site-config.ts`,
  `src/components/MarkingModel.astro`, `astro.config.ts`,
  `scripts/pages-base.ts`, or anything under `dist/`.
- **Do not touch** `src/content/assessments/invent-a-recipe.md`, any session or
  lecture file, any deck, or `src/decks/theme.css`.
- **Voice:** deadpan academic. No exclamation marks, never wink at the course
  being fictional, prefer the specific over the general, numbers carry units.
- **No real person.** The tester is a role.

## Spec constraints this epic must respect

Both spec files read only `dist/api/index.json` and `dist/api/<id>.json`.

1. **`spec/course-promises.test.ts` test 1** asserts assessment weights sum to
   exactly 100 **and** that each weighted scheme's criteria sum to 100. The
   40/60 split between the two assessments is unchanged; the new criteria must
   total exactly 100.
2. **`src/content.config.ts`'s `weightedMarking` superRefine** enforces the same
   sum at build time, so a wrong total fails the build, not just the test.
3. **Every graph node needs at least one `related:` edge.** The public kitchen
   has exactly one (`invent-a-recipe`) — do not remove it.
4. **The cooking-verb test** scans `title`, `description` and `spec[]` of
   sessions and lectures for **weeks 1–10 only**. The public kitchen is week 12,
   so cooking verbs are safe there. The Preps index page is not a content node
   at all and is not scanned.
5. **Twelve sessions, weeks 1–12, seven `tutorial: true` and five false** —
   untouched by this epic, but the reason Preps cannot be deleted.
6. Every dated node stays inside the teaching period; the public kitchen's `due`
   is unchanged.

**Pre-existing, not this epic's to fix:** `pnpm check:evidence` fails on
`PROCESS.md`'s template comment and two placeholder commit hashes. Add no *new*
evidence failure; do not be gated on that going green.

## Definition of done

1. `the-public-kitchen.md` carries four criteria totalling exactly 100, with
   Execution at 20 and Tester feedback at 20.
2. Its `description:` names all four things the assessment examines.
3. The "How it is marked" paragraph is true of the new distribution — nothing on
   the page claims Execution carries the most weight.
4. A "What is examined" paragraph exists for Tester feedback, distinguishing it
   from Correspondence rather than restating it.
5. A new `spec:` line backs the criterion and is checkable by a reader.
6. The rubric renders as a four-row table on the built page — **confirmed by
   looking at it**, not by trusting the frontmatter.
7. The Preps index page carries no developer-facing instruction, and states what
   a Prep is and how it differs from the lecture.
8. `/sessions/` still builds, still lists twelve Preps, and the nav and homepage
   links to it still resolve.
9. `pnpm check` green: typecheck, production build with axe and link checking,
   and all spec tests.
10. `pnpm check:evidence` no worse than it is now.
11. `git diff` confirms `invent-a-recipe.md`, `site-config.ts`,
    `content.config.ts`, `MarkingModel.astro`, all sessions, all lectures and all
    decks are untouched.
12. Small commits, one decision each.

## Parallelism plan

Two tasks, genuinely disjoint — one content file, one page file — then a
verification task.

- **001** owns `src/content/assessments/the-public-kitchen.md`.
- **002** owns `src/pages/sessions/index.astro`.
- **003** runs the only production build, checks the rendered output, and walks
  the Definition of Done.

001 and 002 are `parallel: true` with no `conflicts_with`. Neither runs
`pnpm build` or `pnpm check` — concurrent builds clobber a shared `dist/`, and
the spec tests read `dist/api/index.json`. Each stages only its own paths.

This epic is small enough that running 001 and 002 sequentially is also fine.

## Deferred

- **Retitling the eight Preps whose titles duplicate their lecture's** (weeks 1,
  2, 3, 4, 5, 6, 9, 10). This is the actual cause of the perceived overlap and
  was offered to the user; they ended the discussion at "don't delete the preps"
  without taking it up. Worth revisiting.
- Performance descriptors on rubric criteria, which would need the
  `weightedMarking` schema extended.
- A nutritional-balance criterion on `invent-a-recipe`, which would need a cited
  dietary standard.
- `PROCESS.md`'s template comment and its two placeholder commit hashes.
- Week 2 deck slide 4's 285px canvas clip, carried over from the previous epic
  and deliberately left by the user.

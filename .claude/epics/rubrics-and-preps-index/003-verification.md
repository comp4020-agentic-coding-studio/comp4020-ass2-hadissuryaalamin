---
status: pending
depends_on: [001, 002]
parallel: false
conflicts_with: []
---
# Verification and integration

Read `epic.md` first, especially the Definition of Done and the spec
constraints. Then read `updates/001.md` and `updates/002.md` — you are checking
those two tasks' claims, not repeating their work.

**You own the only production build in this epic.** Confirm both tasks report
`status: completed` before starting.

## Scope

- Run the checks; make small fix-ups only
- `.claude/epics/rubrics-and-preps-index/updates/003.md`

## What to do

1. **`pnpm check`** — typecheck, production build with axe and link checking,
   astromotion deck-check, and the spec tests. Record the output verbatim.

   Two independent things enforce the criteria sum here, so a wrong total shows
   up twice: `weightedMarking`'s superRefine in `src/content.config.ts` fails the
   **build**, and `spec/course-promises.test.ts` test 1 fails the **suite**.

2. **Look at the rendered pages.** This is the part a green check cannot do for
   you, and it is this project's standing lesson.
   - `/assessments/the-public-kitchen/` — the rubric must render as a **four**
     row table with 30 / 20 / 30 / 20, and no prose anywhere on the page may
     claim Execution carries the most weight. Read the whole page, not just the
     table.
   - `/sessions/` — no developer-facing instruction anywhere, twelve Preps
     listed, and the nav entry and homepage card both still reach it.

   Serve under the Pages base path (`/comp4020-ass2-hadissuryaalamin/`); the bare
   root 404s.

3. **Check the new `spec:` line is actually checkable** — a reader must be able
   to verify it without asking the convenor. If it reads as an aspiration rather
   than a test, say so.

4. **Check Tester feedback is distinct from Correspondence** on the rendered
   page. If a student could not tell which criterion covers what, that is a
   finding, not a nitpick.

5. **`git diff` scope confirmation** against `4d5d4db`: `invent-a-recipe.md`,
   `src/content.config.ts`, `src/site-config.ts`,
   `src/components/MarkingModel.astro`, every session, every lecture and every
   deck are untouched. Only two source files should have changed.

6. **`pnpm check:evidence`** — record it. It fails at baseline on `PROCESS.md`'s
   template comment and two placeholder commit hashes. Confirm only that this
   epic added no *new* failure.

7. **Walk the Definition of Done, all 12 points**, and record a verdict on each.

## Constraints

- **Do not reopen 001's or 002's content decisions.** Your job is what they could
  not see from inside their own file.
- Do not touch anything on the Do-not-touch list to make a check pass. If a check
  fails, fix the cause or report it.
- If you install a browser driver, remove it and confirm via `git diff` that
  `package.json` and `pnpm-lock.yaml` show no content diff. Never stage them, and
  **never use `git commit -am`** — that is how a previous epic swept a temporary
  dependency into a commit.
- Delete any scratch scripts or screenshots before finishing.
- Commit incrementally, staging only your own paths. Do **not** push.

## Done when

- `pnpm check` is green and recorded.
- Both rendered pages have been looked at, not just built.
- Definition of Done points 1–12 each carry a verdict.
- `updates/003.md` records every command's output, every fix-up, and any defect
  found and left unfixed with its reason.

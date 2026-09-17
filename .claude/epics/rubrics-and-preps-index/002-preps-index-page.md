---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Replace the Preps index page's shipped starter content

Read `epic.md` first — especially §2 and the closed decision list. Your whole
job lives in one file.

## Scope — yours alone

- `src/pages/sessions/index.astro`
- `.claude/epics/rubrics-and-preps-index/updates/002.md`

**Do not touch** `src/site-config.ts`, the nav, the homepage card,
`src/components/SessionsGrid.astro`, any session content file, or any assessment.

## The defect

The page ships **developer instructions as student-facing prose**:

> "The internal collection and URL stay `sessions`. Set the visible singular and
> plural names once in `src/site-config.ts` and use the language your course
> deserves everywhere readers see it."

That paragraph is addressed to whoever is building the site, and it renders live
to a reader. The project rule is that no starter-content fragment survives the
commit that replaces it.

## What to write instead

Prose that does the job the boilerplate was standing in for: **say what a Prep
is, and how it differs from that week's lecture.** A reader landing on this
listing currently has no way to know why two pages exist per week.

The distinction is real and already demonstrable in the content — verify it
yourself rather than taking this on trust:

- **Seven Preps are calculator exercises.** Weeks 2, 3, 4, 5, 8, 9 and 10 carry
  `tutorial: true` and embed `MacroCalculator` or `StorageCalculator`. Those
  components appear nowhere else on the site.
- **The other five are bench practicals**, and say so themselves. Week 7's reads
  *"The lecture describes a knife. This session is where one is used."* Week 5's
  distinguishes its own subject from the lecture's in its opening sentence.
- **The lectures are the argument**; the Preps are where it is exercised.

Do not overclaim beyond that. Do not assert a Prep/lecture split that the
content does not actually support, and do not describe a week's Prep in a way
its own page contradicts.

## Constraints

- **Keep `<SessionsGrid />`** and the `sessionLabels`-driven title and
  description. The page keeps its URL, so the nav entry and homepage card
  continue to resolve and need no edit.
- **Do not touch `src/site-config.ts`** — it is on the project's Do-not-touch
  list, and nothing here requires changing it.
- **Do not delete, merge or hide this page or any Prep.** The user explicitly
  reversed an earlier request to delete them. Twelve sessions numbered 1–12 are
  also asserted by a graded test.
- **Voice: deadpan academic.** No exclamation marks, never wink at the course
  being fictional, prefer the specific over the general, numbers carry units.
- A markdown page under `src/pages/` needs its layout named in frontmatter —
  this is an `.astro` page using `ContentLayout` and already has it. Leave that
  wiring alone.
- **Do not run `pnpm build` or `pnpm check`** — task 003 owns the only
  production build.
- Stage only your own paths. Commit incrementally.

## Done when

- No developer-facing instruction remains on the rendered page.
- The page states what a Prep is and how it differs from the lecture, in the
  course's voice, and every claim it makes is true of the actual session content.
- `<SessionsGrid />` still renders twelve Preps.
- `updates/002.md` records the old text, the new text, and which session files
  you read to confirm the Prep/lecture distinction is accurate.

---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Lecture page week 8 + fictional guest person entry

Create `src/content/lectures/week-08.md` (the guest lecture on time
management under service) and a new fictional person entry at
`src/content/people/<guest-slug>.md` for the guest lecturer. Read
`.claude/epics/intro-preparing-meal/epic.md` fully first, and
`src/content.config.ts` for both the lectures and people schemas.

File scope: `src/content/lectures/week-08.md` and one new file under
`src/content/people/` for the guest only. Do not touch
`src/content/people/idris-fenn.md` or `marisol-quaye.md` — those belong to
task 007. Do not touch sessions, assessments, decks, or pages.

## Content

**Week 8 — Guest lecture: time management under service.** A visiting
chef on how preparation is organised in a professional kitchen when
service is timed: what's done before doors open, what's held, what's made
to order, how the order of work is decided. Closes the loop on week 1
(time was the argument for preparing; this is the discipline that treats
it as a design constraint). `related:` to `lectures/week-01` and
`sessions/08-*` (task 002 writes that session).

**The guest is fiction.** Invent a name and a plausible career, and write
the person entry as fiction consistent with Slop University — a real
career arc (kitchens worked, years of experience, any signature approach)
but the person themselves does not exist and is not a real chef.
**Do not name Gordon Ramsay or any other real chef, and do not attribute
invented quotes to real people.** This is a hard constraint from the epic
(non-negotiable #7).

## Constraints

- Voice: deadpan academic for the lecture page; the person bio can be
  slightly more biographical/CV-toned but still fits the Slop University
  register — no exclamation marks, no winking at the fiction.
- Week 8 must never claim/imply cooking happens in weeks 1-10's sense —
  but note week 8 is *about* how a real kitchen manages timing, which is
  fine as long as the session/lecture doesn't itself claim students are
  cooking in week 8 (they're studying the discipline of timing).
- Both files need at least one `related:` edge.
- Zero `STARTER_CONTENT` markers.
- Follow the schemas in `src/content.config.ts` exactly.
- If any real technique or figure is cited as sourced fact (not just the
  invented guest's personal claims), it needs a real, resolving source.

## Done when

- `src/content/lectures/week-08.md` exists, dated 2027-04-12, `related:`
  set, references the guest person entry.
- A new file exists under `src/content/people/` for the invented guest,
  schema-valid, clearly fictional but written straight (no wink).
- `pnpm check` build doesn't error on these files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/005.md`; flip
  `status` to `in_progress` then `completed`.

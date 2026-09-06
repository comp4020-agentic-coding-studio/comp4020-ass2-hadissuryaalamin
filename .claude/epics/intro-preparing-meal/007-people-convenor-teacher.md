---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# People: convenor and teacher

Replace `src/content/people/idris-fenn.md` and
`src/content/people/marisol-quaye.md` (rename slugs if you prefer, keep or
replace the `.avif` images — see the image-replacement note in task 008;
if you don't have new art, a deliberate image-free treatment is
acceptable per the epic, but confirm that decision doesn't collide with
task 008's approach — leave a note in your update file either way) with
SLOP1640's real teaching staff: a convenor and at least one other teacher.
Read `.claude/epics/intro-preparing-meal/epic.md` fully first, and
`src/content.config.ts` for the people schema.

File scope: only `src/content/people/idris-fenn.md`,
`src/content/people/marisol-quaye.md`, and their `.avif` files if you
replace the imagery. Do not touch the week-8 guest person file — that's
task 005's file, a third, separate entry.

## Content

Two fictional Slop University staff, consistent with the course's
register (deadpan academic, food-preparation discipline treated with full
seriousness): a convenor (senior, sets the course's line) and at least one
other teacher (could own a specific week's material, e.g. the knife week
or the protein weeks). Give each a plausible academic/professional bio —
credentials, focus area, maybe a research interest that ties to the
course thesis (mise en place, food safety, timing). No real person named
as teaching this course.

## Constraints

- Voice: deadpan academic, no exclamation marks, no winking at the
  fiction.
- Each entry needs at least one `related:` edge (e.g. to a week they
  teach — coordinate slugs with tasks 001-005 if you can see their files
  already; otherwise use the slugs the epic implies, e.g.
  `lectures/week-01`, `lectures/week-03`).
- Zero `STARTER_CONTENT` markers in either file.
- Follow the people schema in `src/content.config.ts` exactly.
- If imagery is replaced, it must not be the shipped starter artwork
  (`pnpm check:evidence` fails on that). If going image-free, remove the
  `.avif` reference from frontmatter cleanly rather than pointing at a
  missing file.

## Done when

- Both people files rewritten, schema-valid, `related:` set, zero
  `STARTER_CONTENT` markers.
- Imagery decision made and consistent (real replacement art, or clean
  image-free — not a broken reference).
- `pnpm check` build doesn't error on these files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/007.md`; flip
  `status` to `in_progress` then `completed`.

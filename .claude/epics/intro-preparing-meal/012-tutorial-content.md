---
status: completed
depends_on: [013, 014]
parallel: false
conflicts_with: []
---
# Tutorial content — repurpose all 12 sessions entries

Read `.claude/epics/intro-preparing-meal/epic.md` in full first, especially
the "Round 2" section (constraints 10, 11, 14 and the week-by-week table).
Wait until tasks 013 (macro/calorie calculator) and 014 (storage-duration
calculator) are `completed` — this task imports and embeds both components,
so their props/import path must exist first. Check
`.claude/epics/intro-preparing-meal/013-*.md` and `014-*.md` `status:` field,
or run `bash ~/.claude/skills/epic-dispatch/scripts/blocked.sh` if unsure.

File scope: only `src/content/sessions/*.md`. Do not touch lectures,
assessments, people, decks, or pages — those are other tasks. The `sessions`
schema in `src/content.config.ts` is `.loose()` and platform-locked — do not
edit that file; add any new frontmatter field (e.g. `tutorial: true/false`)
directly in the content files, it will pass through unvalidated.

## Tutorial exercise pages (7 weeks: 2, 3, 4, 5, 8, 9, 10)

Rewrite each week's `src/content/sessions/NN-slug.md` as a hands-on exercise
page, replacing the storage/handling prose that has now moved into the
matching lecture (task 011). Add `tutorial: true` to frontmatter. Embed the
matching calculator component in the page body:

- Weeks 2, 3, 4, 9 embed the macro/calorie calculator (task 013), configured
  with that week's ingredient data file.
- Weeks 5, 8, 10 embed the storage-duration calculator (task 014),
  configured with that week's storage data file.

Each exercise page still needs the deadpan-academic first sentence naming
the preparation decision the exercise practices, a thesis connection, and at
least one `related:` edge (e.g. back to its week's lecture page).

## No-tutorial pages (5 weeks: 1, 6, 7, 11, 12)

Rewrite each of these five `src/content/sessions/*.md` entries to add
`tutorial: false` to frontmatter and state plainly, in the deadpan voice,
that there is no tutorial this week and the specific reason (per the
week-by-week table in `epic.md`'s Round 2 section — e.g. week 1 has no prep
decision yet to practice, weeks 11-12 are past the prep stage). Do not
delete these five entries — the collection stays at twelve entries total,
matching round 1's spec test for twelve teaching weeks with no gaps.

## Definition of done

- All 12 `src/content/sessions/*.md` entries still exist, none deleted.
- 7 entries carry `tutorial: true` and a working, correctly-configured
  calculator embed.
- 5 entries carry `tutorial: false` and a specific stated reason.
- No `STARTER_CONTENT` markers left in any file you touch.
- Log progress to `.claude/epics/intro-preparing-meal/updates/012.md`.

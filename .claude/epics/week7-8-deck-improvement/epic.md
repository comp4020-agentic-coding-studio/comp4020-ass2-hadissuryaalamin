# Epic: week7-8-deck-improvement

## Context

Third of four post-launch deck-improvement epics covering the weeks the
original two build rounds left thin (`weeks34-deck-improvement` did weeks
3-4; weeks 1 and 2 are already done). This epic covers **week 7** ("The
knife") and **week 8** (guest lecture, "Time management under service").
The user chose the pairing structure for the remaining weeks (5-6, 7-8,
9-10, 11-12) explicitly; the content plan inside this pairing is this
epic's own judgment, not something the user reviewed line-by-line — flag
anything below back to the user if it looks wrong before building.

Week 7 and week 8 are unusually well-formed already relative to weeks
1-4 before their own improvement epics: both decks are long, both have a
real reading list, and — this was checked directly, not assumed — the
week 8 guest lecturer, Dominic Achterberg, is confirmed fictional
(`src/content/people/dominic-achterberg.md`: "He is not a Slop University
employee and holds no other role in this course"). No real-person
violation exists here and nothing in this epic should change that.

## Setup

No new dependencies. Work happens in a dedicated worktree
(`.claude/worktrees/week7-8-deck-improve/` already exists, branch
`worktree-week7-8-deck-improve`) exactly like weeks34's. If `git config
core.hooksPath` is unset in a fresh clone of this worktree, husky hooks
silently no-op — check `git config core.hooksPath` reads `.husky` before
relying on pre-commit checks. Windows checkouts can show every deck file
as modified on `git status` from CRLF normalization alone — diff before
assuming you changed something you didn't.

## Decisions already taken by the user

1. Grouping: four epics, paired by two weeks each — 5-6, 7-8, 9-10, 11-12.
   This epic is the 7-8 pair.
2. Everything else below (which slides get images, what content gets
   added, how the two decks' shared cut-shape numbers get reconciled) is
   **resolved by judgment**, not a user decision — call it out to the
   user if any of it looks wrong rather than treating it as settled.

## Resolved by judgment

3. **Background-image paths are broken, same bug as weeks 1-4.** Both
   decks use source-relative `![bg ...](./assets/week-0N/...)` paths.
   astro-theme-university's deck renderer resolves `![bg]` backgrounds
   relative to the build output, not the MDX source, so these need the
   same `../../src/decks/assets/week-0N/...` prefix weeks34 used for its
   plain `<img>` tags. Fix as Phase 0, same as every prior epic in this
   series.
4. **None of the five `![bg ...]` directives across both decks carry alt
   text.** All five are atmospheric (a knife close-up, a knife rack, a
   sharpening stone, a restaurant kitchen, a plated dish) — none is the
   sole carrier of information the slide needs, so a short descriptive
   alt string satisfies accessibility without restructuring the slide.
5. **Week 7's blade-anatomy and edge-angle/hardness sections are pure
   text** (bullet lists and a trade-off paragraph, no image at all) in a
   deck whose own opening slide claims "this one is demonstrated." Add
   one labelled diagram for blade anatomy (spine/edge/bevel/heel/tip/
   bolster/tang labelled on a knife silhouette or photo) — labelled
   diagram is the correct tier here per the image-sourcing ladder below,
   since there is no natural "before/after" pair for blade parts.
6. **Week 7's own standard-cuts table gives different numbers than week
   2's, for the same five cuts.** Week 2 (`week-02.deck.mdx`) cites
   Auguste Escoffier School of Culinary Arts for julienne (3mm×3mm,
   65mm), batonnet (6mm×6mm, 65mm), brunoise (3mm cubes), small dice
   (6mm cubes). Week 7's table gives julienne as 3mm×3mm but 40-50mm,
   batonnet as 6mm×6mm but 50-60mm, with no citation on the table at
   all. This is a real numeric contradiction between two weeks that
   name the same cuts, not something the build brief asked for — resolve
   it by making week 7's table match week 2's cited figures exactly (add
   the same Escoffier citation under the table) rather than the reverse,
   since week 2's numbers already have a source and week 7's don't. Do
   **not** touch `week-02.deck.mdx` itself to do this — see Files not
   touched.
7. **Week 8 needs materially less new content than week 7.** It is a
   single argued idea (four categories: finished ahead / held / made to
   order / sequencing) rather than a reference deck, and it already has
   a real, working reading list and a confirmed-fictional guest. Its
   improvement work is the path/alt-text fix plus one optional diagram
   (item 9) — do not pad it with unrelated material just to match week
   7's size.
8. **Do not add or reshuffle `related` edges.** Both lecture nodes
   currently carry exactly one edge each (`lectures/week-07` →
   `sessions/07-the-knife`; `lectures/week-08` → `lectures/week-01`) —
   thin but each already satisfies `spec/course-promises.test.ts`'s
   requirement that every `sessions`/`assessments`/`lectures`/`people`
   node have at least one `related` edge. Leave these alone; the fragile
   1-edge pattern is a pre-existing condition across the whole course,
   not something this epic was asked to fix, and edits here risk
   breaking a currently-passing check for no required gain.
9. **Week 8's storage-safety citation is already present and satisfies
   the spec** — `src/content/sessions/08-timed-mise-en-place.mdx` already
   carries two USDA FSIS links (`links:` frontmatter: "'Danger Zone'
   (40°F–140°F)" and "Leftovers and Food Safety"), which is exactly what
   `spec/course-promises.test.ts` requires for week 8 (weeks 5, 8, 10
   each need a USDA/FSIS/FoodSafety.gov storage-safety citation on their
   lecture OR session node). **Do not remove or replace these links.**
   An optional, non-required nicety: add one simple labelled timeline
   graphic to the deck's "Sequencing" slide (a strip showing the four
   categories in order) if a suitable free image or an easy inline
   SVG/diagram can be sourced quickly — skip it rather than force a bad
   image in.

## 1. Background-image path fix (Phase 0, both decks)

Same fix as every prior deck-improvement epic:

| File | Line | Directive | Fix |
|---|---|---|---|
| `week-07.deck.mdx` | 8 | `![bg blur:2px brightness:0.5](./assets/week-07/chefs-knife.jpg)` | → `../../src/decks/assets/week-07/chefs-knife.jpg` |
| `week-07.deck.mdx` | 53 | `![bg right:32% contain](./assets/week-07/knife-set.jpg)` | → `../../src/decks/assets/week-07/knife-set.jpg` |
| `week-07.deck.mdx` | 166 | `![bg right:30% contain](./assets/week-07/sharpening-stone.jpg)` | → `../../src/decks/assets/week-07/sharpening-stone.jpg` |
| `week-08.deck.mdx` | 8 | `![bg blur:2px brightness:0.5](./assets/week-08/restaurant-kitchen.jpg)` | → `../../src/decks/assets/week-08/restaurant-kitchen.jpg` |
| `week-08.deck.mdx` | 93 | `![bg right:32% contain](./assets/week-08/plated-dish.jpg)` | → `../../src/decks/assets/week-08/plated-dish.jpg` |

Verify against how weeks34 resolved the same bug (its own Phase 0 task)
before assuming this prefix is still correct — check the current state
of `astro.config.ts` / the deck renderer, since the fix should match
whatever convention the codebase settled on, not be re-derived from
scratch.

## 2. Alt text for all five `![bg ...]` directives

None of the five above currently carry alt text. Add a short, real,
descriptive alt string to each (e.g. "A chef's knife, blade in profile",
"A magnetic knife rack holding several kitchen knives", "A knife being
sharpened against a rotating grinding wheel", "A professional restaurant
kitchen", "A plated dish ready to leave the pass"). None of these are the
sole carrier of required information, so description-only alt text is
sufficient — no slide needs restructuring to avoid relying on the image.

## 3. Week 7: blade-anatomy labelled diagram

The "Anatomy of a blade" slide (spine / edge / bevel / heel / tip /
bolster / tang) is bullet text only. Source one labelled diagram image
(a knife with parts labelled, or a clear silhouette diagram) via the
sourcing convention below and place it on that slide. This is a
one-image add, not a comparison — use a single non-comparison image
placement (plain markdown image or `<img>`, not `.compare`), matching
how week 2 places its single cut-shape photos.

## 4. Week 7: reconcile the standard-cuts table against week 2

Update the "The standard cuts" table's length figures (Julienne,
Batonnet) to match week 2's Escoffier-sourced numbers exactly (65mm for
both, not 40-50mm / 50-60mm), and add the same Escoffier School of
Culinary Arts citation under the table that week 2 uses under its own
per-cut slides. Brunoise, small dice and chiffonade already match or
have no conflicting figure — leave them as-is. Do not open or edit
`week-02.deck.mdx` to do this; treat its numbers as the fixed reference.

## 5. Week 8: optional sequencing timeline graphic

Optional, judgment call, skip if nothing suitable turns up quickly. If a
suitable free image or simple diagram can be sourced for the
"Sequencing" slide (a labelled strip or timeline of the four categories:
finished ahead / held / made to order / sequenced), add it as a single
non-comparison image. If nothing suitable is found within a reasonable
search, leave the slide as text-only rather than forcing a placeholder
image in.

## Image-sourcing convention (same as weeks34)

1. Prefer a real photo. Search Wikimedia Commons first (via the Commons
   API — search + imageinfo — the same method both `week-07/SOURCES.md`
   and `week-08/SOURCES.md` already record was used for the existing
   five images).
2. Fallback ladder when a genuine comparison pair isn't available or
   doesn't apply: matched real photo pair > labelled diagram > single
   non-comparison photo > skip the image entirely. Item 3 above
   (blade anatomy) is a labelled-diagram case; item 5 (sequencing) would
   also be a labelled-diagram case if pursued.
3. Only use `.compare` (in `src/decks/theme.css`) for a genuine
   side-by-side comparison — e.g. an actual "before/after" or "A vs B"
   pair. Neither week 7 nor week 8 has an obvious comparison-pair need in
   this epic's scope; don't manufacture one just to use the class.
4. License and attribution: Wikimedia Commons or another genuinely free
   source only. Check the file isn't flagged as AI-generated (EXIF/
   description check) before using it. Resize to roughly 960px wide.
   Append one line per new file to the relevant week's `SOURCES.md`
   (`src/decks/assets/week-07/SOURCES.md` / `week-08/SOURCES.md` already
   exist and show the exact line format to follow: filename — Commons
   file title — source URL — license — author).
5. Fixed 1280×720 canvas budget per slide — body text takes priority
   over the image; don't let an added image push text off-canvas.
6. Real, descriptive alt text on every new image, same as item 2 above.
   `![bg ...]` directives discard alt text entirely — never make a `bg`
   directive the sole carrier of information a slide needs.

## Accessibility and presentation rules

- Every image (new or newly-alt-texted) needs real alt text — the build
  fails an axe accessibility check without it.
- `![bg ...]` backgrounds are decorative-only in this epic's scope; nothing
  required to understand a slide should live only in a background image.
- Keep the existing dark-deck styling; don't restate colors already
  provided by `astro-theme-university/styles/deck.css` — add layout/
  sizing only, per the comment at the top of `theme.css`.

## Files touched

- `src/decks/week-07.deck.mdx`
- `src/decks/week-08.deck.mdx`
- `src/decks/assets/week-07/` (new diagram image + updated `SOURCES.md`)
- `src/decks/assets/week-08/` (possibly nothing new — see item 9)

## Files explicitly NOT touched

- `src/decks/week-02.deck.mdx` — cut-shape source of truth; read from,
  never edited, to avoid re-triggering the duplication risk already
  flagged for the week 2 / week 7 cut-shapes overlap.
- `src/content/lectures/week-07.md`, `src/content/lectures/week-08.md`
- `src/content/sessions/07-the-knife.md`,
  `src/content/sessions/08-timed-mise-en-place.mdx`
- `src/content/people/dominic-achterberg.md` — already correctly
  fictional, do not touch.
- `src/data/storage/week-08` (the storage calculator's data file backing
  the week 8 tutorial) and `src/components/StorageCalculator.astro`.
- `spec/*.test.ts`.

## Spec constraints (from `spec/course-promises.test.ts`, read in full)

- **Cooking-verb ban**: `title`/`description`/`spec[]` fields of
  `sessions`/`lectures` nodes may not contain cook/sauté/saute/fry/fried/
  boil/roast/grill/bake/simmer/braise/sear/poach or their inflections.
  Confirmed clean for weeks 7 and 8 already; this epic doesn't touch
  those frontmatter fields, so no new risk is introduced.
- **Related-edge requirement**: every `sessions`/`assessments`/
  `lectures`/`people` node needs ≥1 `related` edge — both weeks already
  satisfy this (see item 8 above); don't touch it.
- **Storage-safety citation for weeks 5, 8, 10**: week 8 already has it
  (item 9 above) — verify it's still present after this epic's edits,
  since nothing in this epic should remove it, but it's worth a final
  grep before calling the epic done.
- **FoodData Central citation** applies only to weeks 2, 3, 4, 9 — not
  relevant to this epic.
- Deck content itself (`.deck.mdx` body prose) is not scanned by this
  test — only the content-collection frontmatter is — but avoid
  introducing cooking-verb language in new deck prose anyway, for
  narrative consistency with the rest of the course.

## Definition of done

1. All five `![bg ...]` background-image paths in `week-07.deck.mdx` and
   `week-08.deck.mdx` render correctly in the built deck (not just in
   local dev preview) — verify against the built output, not only
   `astro dev`.
2. All five `![bg ...]` directives have real, descriptive alt text.
3. Week 7's blade-anatomy slide has a labelled diagram image with alt
   text, sourced and licensed per the convention above, credited in
   `src/decks/assets/week-07/SOURCES.md`.
4. Week 7's standard-cuts table numbers match week 2's Escoffier-sourced
   figures exactly, with the same citation added under the table.
5. Week 8's sequencing graphic is either added (sourced, licensed,
   credited, alt-texted) or explicitly skipped — not left half-attempted.
6. `src/content/sessions/08-timed-mise-en-place.mdx`'s USDA FSIS links
   are still present and unchanged.
7. `src/content/people/dominic-achterberg.md` is unchanged; guest lecturer
   remains explicitly fictional.
8. `week-02.deck.mdx` is unchanged.
9. `pnpm check` (typecheck → build → lint → vitest) passes, including
   `spec/course-promises.test.ts` and the accessibility check.
10. No new dependency added.
11. Git history is clean: one commit (or a small number) on
    `worktree-week7-8-deck-improve`, no unrelated files touched.

## Parallelism plan

- **Phase 0 (solo)**: background-image path fix across both decks —
  small, mechanical, blocks nothing else but easy to collide on if split.
- **Phase 1 (two lanes, parallel)**:
  - Lane A: week 7 — alt text (item 2, week-07 half) + blade-anatomy
    diagram (item 3) + cuts-table reconciliation (item 4).
  - Lane B: week 8 — alt text (item 2, week-08 half) + optional
    sequencing graphic (item 5).
  - Disjoint files (`week-07.deck.mdx` + `assets/week-07/` vs.
    `week-08.deck.mdx` + `assets/week-08/`), safe to run concurrently.
- **Phase 2 (solo)**: `pnpm check` across the merged result, fix any
  fallout, final review against the Definition of Done above.

## Deliberately deferred

- The pre-existing edge-length figure conflict was fixed here (item 4),
  but no broader reconciliation pass across all weeks' shared culinary
  facts was attempted — only the week 2/week 7 cut-shapes overlap this
  epic's own scope directly touches.
- Strengthening the 1-edge `related` graph for weeks 7/8 (item 8) —
  left for a future pass across the whole course, not just this pair.
- Weeks 5, 6, 9, 10, 11 and 12 in the deck-improvement series — each
  gets its own epic (5-6, 9-10, 11-12 are being drafted in parallel with
  this one).

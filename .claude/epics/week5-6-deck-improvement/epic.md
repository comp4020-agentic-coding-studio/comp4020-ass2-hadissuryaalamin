# Epic: weeks 05–06 deck improvement — allium/leaf/oil imagery, board comparison

## Context

Fourth in per-deck improvement series, after `week1-deck-improvement`,
`week2-deck-improvement`, `weeks34-deck-improvement` (all merged `main`;
branches direct from `main` at `486ff9d`, no stacking needed — `.compare` in
`src/decks/theme.css` and fixed-canvas image pattern already present).

Unlike weeks 3-4, no direct user conversation set this epic's content scope.
User's only explicit instruction: the *grouping* (pairs 5-6, 7-8, 9-10,
11-12, mirroring weeks3-4 shape). Every content decision below is this
epic's own judgment call, not user instruction — labelled "(Judgment)"
throughout, never presented as pre-approved.

Week 5 (`Spices, aromatics and oil`) and week 6 (`The kitchen: tools and
surfaces`) read close to feature-complete: real citations (Borlinghaus 2021,
Imai 2002, Głuchowski 2021, Crosby 2018, Yadav 2023 + ACS press summary),
consistent deadpan voice, no factual defects found on full read of both
decks and both lecture files. **This epic is almost entirely an imagery and
accessibility pass, not a content-accuracy pass** — a real departure from
weeks 1-4's shape, stated plainly so a build agent doesn't hunt for content
defects that aren't there.

## Setup

Branch `worktree-week5-6-deck-improve` from `origin/main` at `486ff9d`
(top of `git log` — weeks3-4 merge commit). `pnpm install` needed before any
`dev`/`build`/`check` run in this worktree, same carried-forward note as
prior epics (hooks-path side effect expected; do not stage a
`package.json`/`pnpm-lock.yaml` CRLF phantom diff if it recurs).

## Decisions

1. **Scope: week-5 and week-6 decks only.** Not weeks 1-4, 7-12.
   (User-confirmed grouping.)
2. **No nutrition table added to either week.** Nutrition is scoped to
   weeks 2, 3, 4, 9 by the parent course epic and every prior
   deck-improvement epic. Neither week 5's oil/aromatic content nor week
   6's board content is nutrition and must not grow one.
3. **Week 7 not touched.** Week 6 already states "the knife itself is
   week 7's subject" (deck line 29, lecture line 39) — must not duplicate
   blade geometry/sharpening/grip, the mistake week 2 made once already.
4. **No assessment file touched.** The parent course's "invent a recipe"
   assignment (40%, week 6) lives in `src/content/assessments/`, a
   different collection with its own weight-sum-100 constraint — out of
   scope here, same as every prior epic.
5. (Judgment) **Both weeks' background-image paths need the same fix as
   weeks 1-4** — see §1, Phase 0, sole-owner.
6. (Judgment) **Three content-bearing `![bg]` images become in-flow
   `<img>` with real alt text**: `garlic.jpg`, `olive-oil.jpg`,
   `plastic-cutting-board.jpg` — the only images in either deck that
   illustrate a claim the surrounding prose specifically makes. Title-slide
   hero backgrounds (`fresh-herbs.jpg`, `wood-cutting-board.jpg`) stay
   decorative `![bg]`, matching weeks3-4 precedent (title art untouched,
   content-anatomy backgrounds converted).
7. (Judgment) **Board-material comparison (§3) is this epic's `.compare`
   opportunity** — wood/plastic/marble already argued as a three-way
   trade-off in prose (table, week-06 deck lines 45-49) but illustrated by
   exactly one existing photo (plastic) and none for wood-as-clean-specimen
   or marble. Verify in `theme.css` whether `.compare` supports 3 `figure`
   children before assuming — its own code comment ("background side panel
   too small to compare two specimens in") suggests it may have been built
   for exactly 2. This is a real open question, not decided here — flag for
   sign-off if a 3-up layout needs a CSS change.
8. (Judgment) **No new citations sourced.** Every factual claim in both
   decks already resolves to a real, checked citation. This epic adds
   imagery and accessibility, not new research.

## 1. Fix the deck background images first — both weeks

Same bug weeks 1-4 all had, deferred for weeks 5-12 at the time:
astromotion writes `![bg …]`/`<img src>` paths relative to the deck source
file, but the built page serves from elsewhere, so `./assets/week-0N/…`
404s.

Five affected directives (confirmed by full read of both decks — no raw
`<img src>` tags currently exist in either, only `![bg]`):

| File | Line | Image | Form |
|---|---|---|---|
| `src/decks/week-05.deck.mdx` | 8 | `fresh-herbs.jpg` | title background |
| `src/decks/week-05.deck.mdx` | 50 | `garlic.jpg` | `![bg right:32% contain]` |
| `src/decks/week-05.deck.mdx` | 174 | `olive-oil.jpg` | `![bg right:30% contain]` |
| `src/decks/week-06.deck.mdx` | 8 | `wood-cutting-board.jpg` | title background |
| `src/decks/week-06.deck.mdx` | 79 | `plastic-cutting-board.jpg` | `![bg right:32% contain]` |

Verify by screenshot before fixing, same discipline as every prior epic —
diagnosis being known already is not a reason to skip the before-evidence
step. Remedy: rewrite as `../../src/decks/assets/week-0N/<file>` for
`![bg]` directives and any `<img src>` this epic adds (§2, §3 — those are
raw `<img>` tags per decision 6, so they need the build-relative form too,
not the deck-relative form plain markdown images would otherwise use).
Re-verify in `astro dev` and a production `pnpm build` + `pnpm preview`.
Do not touch decks 1-4 (already fixed) or 7-12 (still deferred).

## 2. Allium, leaf and oil imagery — week 5

Files: `src/decks/week-05.deck.mdx`, `src/decks/assets/week-05/`, its
`SOURCES.md` (currently 3 files: `garlic.jpg`, `fresh-herbs.jpg`,
`olive-oil.jpg`, all CC-licensed Commons images).

**Convert `garlic.jpg` (line 50) to in-flow `<img>`.** Currently a
background inside "What intact tissue keeps apart," carrying no alt text,
illustrating the exact allium cell-rupture mechanism the slide describes.
Alt text should name what the photo actually shows (Commons title "Garlic
bulbs and cloves.jpg" per `SOURCES.md` — verify the file still matches that
description before writing alt text from the title alone).

**Convert `olive-oil.jpg` (line 174) to in-flow `<img>`.** Illustrates the
smoke-point section directly above it (lines 161-172).

**New image opportunity, not yet sourced: "Chopped, crushed, sliced" table
(lines 86-100).** Closest structural analogue in this epic to weeks3-4's
portioning sections — a shape-and-consequence argument, currently pure
table with zero imagery. A single photo showing garlic or onion in the
three cut forms (chopped, crushed, sliced) side by side would carry the
same argument weeks3-4 made for chicken-thigh anatomy and fish myotomes.
Search Wikimedia Commons for this specific composition first; likely terms
"chopped garlic", "crushed garlic", "sliced onion comparison". If no single
frame exists, three separate real photos laid out via `.compare` (pending
§3's verification of what child-count it supports) or a simple flex row is
an acceptable substitute — each individual state is real, none fabricated.
If neither meets this series' own sourcing standard, skip; do not force it.

**Leaf aromatics section (lines 108-137) is entirely image-free — lower
priority.** The timing argument (bay leaf early, basil late) is a *process
over time*, which a single photograph represents poorly. A labelled photo
of the four leaves together is a defensible minimum if sourceable; skip
rather than force a weak illustration of a temporal claim a photo can't
carry.

## 3. Board-material comparison — week 6

Files: `src/decks/week-06.deck.mdx`, `src/decks/assets/week-06/`, its
`SOURCES.md` (currently 2 files: `wood-cutting-board.jpg`,
`plastic-cutting-board.jpg` — **no marble/stone image exists**).

**Strongest addition available in this epic.** "Three materials, no
outright winner" (lines 40-52) already argues a real three-way trade-off
with a table; it has zero supporting imagery of its own — the nearest
image, `plastic-cutting-board.jpg`, sits three slides later on the
Plastic-only slide and does not serve the comparison slide at all.

Source photographs of a wood board, a plastic board, and a marble/stone
board — ideally comparably framed — and lay out with the existing
`.compare` class (`src/decks/theme.css`, added week 2, `max-height: 19rem`
on `figure img`). **Confirm whether `.compare` is hard-coded for exactly 2
`figure` children or agnostic to count before assuming 3 lays out
cleanly** — its own comment reads "background side panel too small to
compare two specimens in," which may mean literally two. If hard-coded,
this is a real `theme.css` question to flag, not something to silently
work around.

Fallback order if a matched three-way set can't be sourced to this series'
own standard (real photographs, not stock composites, EXIF-checked):
1. three separately-sourced but individually real photographs, one per
   material, laid out together — most likely outcome;
2. a single labelled diagram naming the three materials' trade-offs —
   lower priority, the deck already has this as a table;
3. skip the comparison image, keep `plastic-cutting-board.jpg` as the only
   material photo (status quo) — acceptable if nothing suitable turns up.

**`plastic-cutting-board.jpg` (line 79) converts to in-flow `<img>`
regardless of the three-way comparison's outcome** — currently a `![bg]`
with no alt text, illustrating a specific claim ("takes knife scarring
readily," lines 74-75) on its own slide.

No image currently exists for marble/stone, nor for wood as a clean
(non-blurred, non-decorative) specimen shot — both addressed here if
sourcing succeeds.

## Accessibility and presentation

- Every informative inline image needs real alt text — axe runs during
  `pnpm build`, fails without it.
- `![bg …]` discards alt text — why §2/§3 convert the three content-bearing
  backgrounds to in-flow `<img>`. Title-slide hero backgrounds stay
  decorative `![bg]`.
- Budget against the fixed 1280×720 canvas — `.reveal`/`body` are
  `overflow: hidden`, no scroll. Both decks run text-dense slides already;
  adding an image to an existing slide risks the clipping weeks 2, 3, 4 all
  hit once. Prefer a new slide over cramming, verify with
  Playwright/screenshot before calling any slide done.
- Body text before image, established convention.
- Captions/alt text in the course's deadpan register.

## Image sourcing — standing convention

Unchanged from weeks 1-4:

1. Wikimedia Commons (search + imageinfo API) or another explicitly free
   source — CC0, public domain, CC BY, CC BY-SA.
2. Look at the image before using it — Commons search ranking unreliable.
3. Check EXIF for AI-generation tells (implausible camera model, placeholder
   timestamp).
4. Resize to ~960px wide.
5. Save under `src/decks/assets/week-0N/`.
6. One credit line per file in that week's `SOURCES.md`, existing format:
   `` `filename.jpg` — File:<Commons title> — <permalink URL> — <licence> — <author> (<size>) ``

Never present a single photograph as a comparison it isn't — matters here
specifically for §3, where a compare layout implies "shot to be compared"
even when images come from different sources; caption honestly if not a
matched set.

## Files touched

- `src/decks/week-05.deck.mdx`, `src/decks/week-06.deck.mdx`
- `src/decks/assets/week-05/` and its `SOURCES.md`
- `src/decks/assets/week-06/` and its `SOURCES.md`
- `src/decks/theme.css` — **only** if `.compare` genuinely cannot hold 3
  children, confirmed by testing not assumption, and then only by the one
  task owning `theme.css`, same restriction as weeks34.

## Not touched

`src/decks/week-07.deck.mdx` and every other deck (1-4, 8-12).
`src/content/lectures/week-05.md` and `week-06.md` — no factual defect
found in either; both already satisfy the `related:` edge requirement (2
each) and cite the same sources as their decks. `src/content/sessions/
05-aromatics-and-oil.mdx` and `06-kitchen-tools-and-surfaces.mdx`.
`src/content/assessments/`. `src/data/macro/*`, `src/data/storage/*`.
`astro.config.ts`. `scripts/pages-base.ts`. `src/content.config.ts`.
`src/site-config.ts`. `src/course-config.ts`. Anything under `dist/`.

## Spec constraints this epic must respect

Both spec files read only `dist/api/index.json` and `dist/api/<id>.json` —
deck prose is never a content-collection node, no test reads it directly.

1. **Cooking-verb test** scans `title`/`description`/`spec[]` of
   `sessions`/`lectures` for cook/sauté/fry/boil/roast/grill/bake/simmer/
   braise/sear/poach + inflections. This epic doesn't edit either lecture's
   frontmatter (per "Not touched"), so it can't trip this — hold true if
   scope changes.
2. **Every node needs a `related:` edge.** Week 5's lecture already has 2
   (`sessions/05-aromatics-and-oil`, `lectures/week-06`); week 6's has 2
   (`sessions/06-kitchen-tools-and-surfaces`, `lectures/week-07`). Both
   already satisfy this — no addition needed.
3. **FoodData Central citation test applies only to weeks 2, 3, 4, 9** —
   irrelevant here per decision 2.

Known pre-existing failure: `pnpm check:evidence` fails on `PROCESS.md`'s
template comment and two placeholder commit citations — deliberately out
of scope for every deck-improvement epic so far; this epic must not add a
new evidence failure but isn't gated on that command going green.

## Definition of done

1. `pnpm install` run; all five background/img directives verified broken
   by screenshot, fixed, confirmed painting in both `astro dev` and a
   production build.
2. `garlic.jpg`, `olive-oil.jpg`, `plastic-cutting-board.jpg` converted to
   in-flow `<img>` with real, descriptive alt text.
3. Board-material comparison sourced and laid out if a suitable photograph
   set exists (§3's fallback ladder followed honestly; skip recorded if
   not).
4. Chopped/crushed/sliced imagery for week 5 sourced if available; skip
   recorded if not (§2).
5. Every new image freely licensed, visually inspected, EXIF-checked,
   ~960px wide, alt-texted, credited one line per file in the right week's
   `SOURCES.md`, files and credits matching one-to-one.
6. No slide clipped against the 720px canvas — confirmed by a
   slide-by-slide walk of both decks at 1280×800 (and ideally 375×812) with
   `pageerror`/`console` listeners attached, every `img.naturalWidth > 0`.
7. `pnpm check` green: typecheck, production build with axe and link
   checking, all spec tests.
8. `pnpm check:evidence` no worse than current state.
9. `src/decks/week-07.deck.mdx` and decks 1-4, 8-12 untouched; neither
   lecture's frontmatter touched — both confirmed by `git diff`.
10. Small commits, one decision each.

## Parallelism plan

Same phase structure as weeks34.

**Phase 0 — sequential, sole owner.** `pnpm install`; screenshot-verify the
background-path bug on both decks; fix all five paths; confirm in dev and
`dist`; baseline `pnpm check`.

**Phase 1 — two parallel lanes.** Lane A owns everything `week-05*`
(garlic/oil conversion, chopped-crushed-sliced sourcing). Lane B owns
everything `week-06*` (board-material comparison sourcing, plastic-board
conversion). `parallel: true`, no `conflicts_with` across lanes; within a
lane, tasks stay sequential (each appends to the same deck file and
`SOURCES.md`). Neither lane runs `pnpm build`/`pnpm check` — dev-server
screenshots only, on distinct ports. **Contended:** `src/decks/theme.css`
only if lane B's `.compare` check (§3) concludes a real change is needed —
if so, that check must happen early in Phase 1 so any `theme.css` edit is a
short solo first step, not a late surprise; otherwise `theme.css` stays
read-only for both lanes.

**Phase 2 — sequential, sole owner.** `pnpm check`; slide-by-slide walk of
both decks at 1280×800 with error listeners; `SOURCES.md`-to-file
cross-check per week; `git diff` confirmation that week 7, decks 1-4 and
8-12, and both lectures' frontmatter are untouched; Definition of Done.

## Deliberately deferred

- Background-path fix and `astromotion` bump for decks 7-12 — still not
  this epic's problem.
- Any factual rewrite of either lecture — none found necessary.
- Weeks 7-12 in the deck-improvement series.

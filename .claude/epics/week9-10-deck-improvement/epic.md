# Epic: weeks 09–10 deck improvement — fruit imagery, nutrition reconcile, and the cold-chain synthesis

## Context

Fourth in the per-deck improvement series, after `week1-deck-improve`,
`week2-deck-improve`, and `weeks34-deck-improvement` (all merged to `main`).
This epic covers week 9 (`Fruit`) and week 10 (`Food safety and the cold
chain`), the third of four pairs the user split weeks 5–12 into (5–6, 7–8,
9–10, 11–12). Siblings for the other three pairs are being drafted in
parallel by other agents; this epic does not touch their weeks.

**The only user decision on record for this epic is the pairing itself**
(weeks 5–12 split into four two-week epics). Everything else below —
scope boundaries, which images to add, which gaps are worth closing — is
resolved by judgment, informed by the conventions the prior three epics
already established, and is stated explicitly so no build agent has to
guess or re-litigate it.

Week 9 and week 10 are unusually tightly coupled for a "pair": week 10 is
an explicit synthesis of weeks 2, 3, 4 **and** 9's storage material, and
names week 9 directly in its own lecture, session and deck text. That
means this epic's biggest risk is not sourcing images — it's making sure
week 10 illustrates and extends those four weeks' already-cited figures
without restating them incorrectly or drifting out of sync if week 9's
content changes underneath it.

## Setup

`node_modules/` and `dist/` are both absent in this worktree (verified via
glob). **The first task must run `pnpm install`** before any `pnpm dev`,
`pnpm build` or `pnpm check`, exactly as the weeks34 epic's task 001 did.
Same two carried-forward notes apply: `pnpm install` sets
`core.hooksPath .githooks` (a pre-commit secret scanner, expected), and
`package.json`/`pnpm-lock.yaml` may show a zero-content-diff CRLF artifact
in `git status` — never stage either file.

This worktree (`worktree-week9-10-deck-improve`) branches from `main` at
the weeks34 merge commit, so it already carries weeks 1–4's background-path
fixes, the `.compare` CSS class, and the fixed 1280×720 canvas convention.
Do not revert or re-edit any week 1–4 file.

## Decisions already taken by the user

1. **Scope is the week-9 and week-10 decks** (and their lecture/session
   pages only as far as needed to keep a claim true). Not weeks 1–8 or
   11–12.

Resolved by judgment, stated here so no build agent has to guess:

2. **Images must be freely licensed** — CC0, public domain, CC BY, or
   CC BY-SA — from Wikimedia Commons or another explicitly free source,
   credited in that week's `SOURCES.md`. Carried from every prior epic in
   this series; not re-derived, just continued.
3. **Fix both decks' background-image paths first**, verified by
   screenshot, before any new imagery is added — same order weeks34 used.
4. **Week 9's nutrition table gets reconciled with its calculator, not the
   reverse** — see §3. The calculator (`src/data/macro/week-09.ts`) is
   correct; the deck and lecture undersell it.
5. **No iron column for week 9.** Weeks 3/4 added iron because dark vs.
   light meat is a myoglobin/iron story already told on those decks. Fruit
   has no equivalent narrative this course has set up, and the FoodData
   Central entries already used don't foreground it. Adding a column with
   no argument behind it would repeat week 2's original "column for its
   own sake" mistake that weeks 3/4 explicitly avoided repeating a second
   time. Leave the table at calories/fat/protein.
6. **Week 9's table header changes from `Source` to `FDC ID`**, matching
   weeks 3/4's convention, since the column's actual content (an FDC ID)
   is the same in every week — a naming inconsistency, not a data problem.
7. **Week 10 gets new photographs, but only for its two informative
   background images (`handwashing.jpg`, `meat-thermometer.jpg`), not for
   its many prose-only sections.** Week 10 is a synthesis week: its
   sections are short restatements of rules already illustrated elsewhere
   (weeks 2/3/4/9), not new material that needs its own photo library. The
   two existing background images carry real information (the
   clean-separate step; the "verify with a thermometer, not the dial"
   point already made in week 3) and are the ones accessibility actually
   requires fixing, because a `![bg …]` directive discards alt text.
   Everything else in week 10 stays prose, matching its own stated role as
   "one argument, not four pieces of advice" rather than a fifth
   photo-illustrated material week.
8. **`meat-thermometer.jpg` stays exactly as it is — reused, not
   duplicated.** It already exists at
   `src/decks/assets/week-10/meat-thermometer.jpg`, sourced from Commons
   (File:Bratenthermometer-1.jpg, CC BY-SA 3.0) and credited in week 10's
   `SOURCES.md`. It is converted from a `![bg]` directive to an in-flow
   `<img>` with alt text (§2); its subject and framing are not changed,
   and no new week 9 or week 10 image may duplicate this exact
   thermometer-in-meat framing.
9. **Week 10's own sourced figures (the 1–2 day / 3–5 day holding
   windows, the 4 °C–60 °C danger zone, the two-hour/one-hour rule) are
   left untouched.** They already match weeks 3/4's tables and correctly
   attribute themselves as restatements ("the same figures week 3 and
   week 4 gave"). This epic only adds imagery and alt text to week 10; it
   does not add, remove, or re-derive any number there.
10. **Week 9's expanded nutrition table adds strawberry and mango**
    (already in the calculator, already used by name in the week 9
    tutorial session) rather than leaving them as table-invisible
    calculator entries — see §3 for why this is a real defect, not a
    style preference.

## 1. Fix the deck background images first — both weeks

Same bug as every prior deck in this series: `![bg …]` directives write
asset paths relative to the **deck source file** (`./assets/week-0N/…`),
but astromotion resolves them against the **served page path**
(`/decks/week-0N/`), so the background never paints. Confirmed present,
unfixed, in both decks (this pair was explicitly deferred by the weeks34
epic, which fixed only weeks 3–4).

| File | Line | File referenced | Form |
|---|---|---|---|
| `src/decks/week-09.deck.mdx` | 8 | `apple.jpg` | title background |
| `src/decks/week-09.deck.mdx` | 51 | `bananas.jpg` | `![bg right:32% contain]` |
| `src/decks/week-10.deck.mdx` | 8 | `refrigerator-interior.jpg` | title background |
| `src/decks/week-10.deck.mdx` | 97 | `handwashing.jpg` | `![bg right:30% contain]` |
| `src/decks/week-10.deck.mdx` | 119 | `meat-thermometer.jpg` | `![bg right:30% contain]` |

**Verify the bug by screenshot before fixing it** — carry the weeks34
precedent of settling this by evidence rather than by citing the prior
epic's diagnosis secondhand.

Remedy: rewrite as `../../src/decks/assets/week-0N/<file>`. Re-verify in
both `astro dev` and a production `pnpm build` + `pnpm preview`.

**Two of the five instances above (week-10 lines 97 and 119) are then
converted to in-flow `<img>` tags, not merely path-fixed** — see §2, since
they need alt text a background directive cannot carry. Line 8 in both
decks (the title/impact-slide background) stays a `![bg]` directive,
decorative only, matching every prior week's title slide.

Plain markdown inline images already in both decks
(`oranges.jpg` at week-09 line 193) use `./assets/week-09/…` and need no
change — Astro rewrites that form at build, same as every prior epic
found.

Do not fix decks 1, 5–8, 11–12 — still deferred, see the bottom of this
file. Do not bump the pinned `astromotion` version (v0.23.0).

## 2. Week 10's two informative background images become alt-texted in-flow images

Per decision 7, only `handwashing.jpg` (line 97) and `meat-thermometer.jpg`
(line 119) change form; both currently illustrate a real point
(clean/separate; verify-with-a-thermometer) and both currently have zero
alt text because `![bg]` discards it.

- **`handwashing.jpg`** — convert the "What this week covers, and what it
  doesn't" slide's background to an in-flow `<img>` with alt text
  describing handwashing as the clean/separate step, sized so it does not
  push the slide's three bullet points below the 720 px canvas. Body text
  stays before the image, per the standing convention.
- **`meat-thermometer.jpg`** — convert the "Poultry, fish and red meat"
  table slide's background to an in-flow `<img>` with alt text, framed as
  the same "verify the fridge itself, not the dial" point week 3 already
  makes. No re-sourcing needed — same file, same credit line already in
  `src/decks/assets/week-10/SOURCES.md`; only the deck markup and alt text
  change.

Neither image is replaced or re-shot. `refrigerator-interior.jpg` (title
slide, line 8) stays a decorative `![bg]` background, matching every other
week's title-slide treatment in this series — no alt text is expected for
a purely decorative title background.

No new imagery is added anywhere else in week 10, per decision 7's
reasoning: this is a synthesis week restating figures already illustrated
in weeks 2/3/4/9, not a new-material week that needs its own photo set.

## 3. Week 9's nutrition table — reconcile with the calculator, then leave it there

The deck (`src/decks/week-09.deck.mdx`, lines 172–205) and the lecture
(`src/content/lectures/week-09.md`, lines 95–114) both carry a
three-fruit table — apple, banana, orange — and both close with a hedge:
*"This week's tutorial exercise uses the macro calculator on these three
figures and any others drawn from FoodData Central directly."*

The calculator (`src/data/macro/week-09.ts`) actually carries **five**
ingredients:

| Fruit | FDC ID | In deck/lecture table? | In calculator? |
|---|---|---|---|
| Apple, raw, with skin | 171688 | yes | yes |
| Banana, raw | 173944 | yes | yes |
| Orange, raw, all commercial varieties | 169097 | yes | yes |
| Strawberries, raw | 167762 | **no** | yes |
| Mangos, raw | 169910 | **no** | yes |

This is the same class of defect the weeks34 epic fixed for weeks 3 and 4
(deck/lecture tables narrower than the calculator they claim to feed) —
here milder, because the deck's closing sentence hedges with "and any
others" rather than asserting a false count. But the week 9 **tutorial
session** (`src/content/sessions/09-fruit.mdx`, lines 32–40) explicitly
asks students to compare "a banana and a serving of strawberries" and to
check whether "the climacteric fruits here (apple, banana, mango)"
differ from "the two non-climacteric fruits (orange, strawberry)" —
naming strawberry and mango directly, by name, as part of the exercise.
A deck and lecture whose own table doesn't show those two fruits at all
undersells the exercise it describes, and a student reading only the
lecture has no source for the two figures the tutorial expects them to
already trust.

**All five figures were verified fresh against USDA FoodData Central for
this epic** (not carried over from training-data recall): apple 52 kcal /
0.17 g fat / 0.26 g protein (FDC 171688), banana 89 kcal / 0.33 g fat /
1.09 g protein (FDC 173944), orange 47 kcal / 0.12 g fat / 0.94 g protein
(FDC 169097), strawberry 32 kcal / 0.3 g fat / 0.67 g protein (FDC
167762), mango 60 kcal / 0.38 g fat / 0.82 g protein (FDC 169910) — all
five match `src/data/macro/week-09.ts` exactly. **Unlike weeks 3/4, there
is no wrong figure to correct here** — the defect is incompleteness, not
inaccuracy.

**Resolution:** grow the deck table (lines 187–191) and the lecture table
(lines 105–109) from three rows to all five, rename the `Source` column
header to `FDC ID` (decision 6), and rewrite the closing sentence in both
places so it states plainly that the tutorial exercises all five
calculator entries, not "these three... and any others." Update the
"Why this week carries a number" framing paragraph (deck lines 172–181;
lecture lines 97–103), which currently says "one apple, one banana, one
orange" — that sentence becomes false once the table grows and must be
reworded to name (or count) five fruits.

**This needs no `spec:` change** — week 9's lecture `spec:` line
("you can state the fat, protein and calorie content per 100 g of at
least two fruits named this week, with a source") stays true as a subset
once the table has five rows instead of three.

**Constraints carried from weeks34, unchanged:**

- Plan for the table to possibly need a second slide if five rows plus
  the surrounding prose overflows the 1280×720 canvas — verify by
  screenshot rather than assuming it fits.
- At least one `links[].label` on week 9's lecture must keep the literal
  string "FoodData Central" (already true — do not shorten any label).
- Nutrition figures stay confined to weeks 2, 3, 4 and 9 — this epic adds
  no nutrition content to week 10.

## Image sourcing — the standing convention

Unchanged from every prior epic in this series:

1. Source from Wikimedia Commons (search + imageinfo API) or another
   explicitly free source. Licence must permit reuse: CC0, public domain,
   CC BY, CC BY-SA.
2. Look at the image before using it — Commons search ranking is
   unreliable and returns mismatched subjects.
3. Check EXIF for AI-generation tells — an implausible camera model, a
   placeholder timestamp.
4. Resize to ~960 px wide, not 1280.
5. Save under `src/decks/assets/week-0N/`.
6. One credit line per file in that week's `SOURCES.md`:
   `` `filename.jpg` — File:<Commons title> — <permalink URL> — <licence> — <author> (<size>) ``

This epic sources **no genuinely new image file** — §2 only changes the
markup and alt text of two images already sourced and already credited in
`src/decks/assets/week-10/SOURCES.md`. If a build agent judges, while
implementing §2, that either image is too weak to stand as an in-flow
image (too small, poor crop for inline framing), the fallback is to skip
the conversion for that one image and leave it as a `![bg]` decorative
background rather than force a bad crop — matching this series' standing
"skip rather than force" rule.

## Accessibility and presentation

- Every informative inline image needs real alt text — axe runs during
  `pnpm build` and fails the build without it.
- `![bg …]` discards alt text, which is exactly why §2 converts
  `handwashing.jpg` and `meat-thermometer.jpg` — they are informative, not
  decorative.
- Budget against the fixed 1280×720 canvas — `.reveal` and `body` are
  `overflow: hidden` with no scroll. Verify by screenshot at 1280×800 and
  375×812 with `pageerror`/`console` listeners attached, and confirm
  `img.naturalWidth > 0` for every touched image.
- Body text before image, not after — the standing rule from every prior
  epic, carried unchanged.
- No `.compare` usage in this epic — neither week adds a genuine
  comparison pair; do not invent one to justify reusing the class.

## Files touched

- `src/decks/week-09.deck.mdx` — background path fix (2 lines), nutrition
  table and closing sentence
- `src/decks/week-10.deck.mdx` — background path fixes (3 lines), 2 of
  which also convert to in-flow `<img>` with alt text
- `src/content/lectures/week-09.md` — nutrition table, closing sentence,
  framing paragraph (only as far as needed to keep it aligned with the
  deck and the calculator)
- `src/decks/assets/week-10/SOURCES.md` — no new entries expected (no new
  image files), but confirm the two reused entries still match after the
  markup change
- `src/data/macro/week-09.ts` — read and verified only; not expected to
  change unless a figure is found wrong (none were)

## Not touched

`src/decks/week-01.deck.mdx`, `week-02.deck.mdx`, `week-03.deck.mdx`,
`week-04.deck.mdx`, `week-05.deck.mdx` through `week-08.deck.mdx`,
`week-11.deck.mdx`, `week-12.deck.mdx`. `src/content/lectures/week-10.md`
(no factual claim there is false; left alone per the "edit lecture pages
only as far as needed" rule). `src/content/sessions/09-fruit.mdx` and
`10-food-safety-and-the-cold-chain.mdx` (both already correctly describe
what their calculators do; the deck/lecture are what's out of sync, not
the sessions). `src/data/storage/week-10.ts` and the storage calculator
(out of scope — week 10 carries no nutrition figures and this epic does
not touch storage-duration data). `src/decks/theme.css`. `astro.config.ts`,
`scripts/pages-base.ts`, `src/content.config.ts`, `src/site-config.ts`,
`src/course-config.ts`. Anything under `dist/`. `package.json` and
`pnpm-lock.yaml` (phantom CRLF diff).

## Spec constraints this epic must respect

Both spec files read only `dist/api/index.json` and
`dist/api/<id>.json`. Decks are not a content collection and are never
visible to any test.

1. **The cooking-verb test** (`spec/course-promises.test.ts`) bans
   cook/sauté/saute/fry/fried/boil/roast/grill/bake/simmer/braise/sear/poach
   and inflections, word-bounded and case-insensitively, in `title`,
   `description` and `spec[]` of `sessions`/`lectures` nodes, for weeks
   1–10 inclusive — **week 10 is the last week this applies to.** Neither
   week's current title/description/spec text trips it, and this epic's
   planned edits (nutrition table wording, closing-sentence rewrites) stay
   in body prose, not those three graded fields — verify this holds after
   editing, since it is exactly the kind of edit that could accidentally
   touch a `description`.
2. **The FoodData Central citation test** requires weeks 2, 3, 4 and 9 to
   cite it via `/FoodData Central/i` matching a `links[].label`. Week 9's
   lecture already has this; do not shorten or remove that label.
3. **The USDA/FSIS storage-safety citation test** requires weeks 5, 8 and
   10 to cite USDA/FSIS/FoodSafety.gov somewhere in their lecture or
   session links. Week 10's lecture already satisfies this three times
   over; nothing to add.
4. **Every graph node needs at least one `related:` edge.** Week 9's
   lecture currently has two (`sessions/09-fruit`, `lectures/week-02`);
   week 10's has four. Neither is close to failing, but no edit in this
   epic should remove one.
5. **Tutorial flag exactness** — the round-2 test pins `tutorial: true`
   to exactly weeks 2, 3, 4, 5, 8, 9, 10. Both week 9's and week 10's
   session files already carry `tutorial: true`; this epic does not touch
   that field.
6. Twelve lectures, twelve decks, every `slides:` value resolving to a
   built `dist/decks/week-0N/index.html` — no deck file is renamed, split,
   or added by this epic. All dated nodes stay inside the teaching period
   (week 9: 2027-04-19; week 10: 2027-04-26 — both already valid, unedited
   by this epic).

**Not caught by anything:** image count, slide count, table width,
`SOURCES.md` contents, licensing, or alt text (axe enforces alt during
`pnpm build`, not the spec suite).

## Definition of done

1. `pnpm install` run; all five background directives (2 in week 9, 3 in
   week 10) verified broken by screenshot, fixed, and confirmed painting
   in both `astro dev` and a production build.
2. `handwashing.jpg` and `meat-thermometer.jpg` converted from `![bg]`
   directives to in-flow `<img>` tags with real, descriptive alt text; no
   other new imagery added anywhere in either deck.
3. Week 9's nutrition table and lecture table both grown from three rows
   to five (adding strawberry and mango), header renamed `Source` →
   `FDC ID`, every figure verified fresh against FoodData Central, and
   every sentence relating the table to the tutorial calculator true
   after the change.
4. No figure anywhere in week 10 restates or contradicts a figure already
   sourced in weeks 2, 3, 4 or 9 — confirmed by direct comparison, not
   assumption.
5. No slide clipped against the 720 px canvas — confirmed by a
   slide-by-slide walk of both decks at 1280×800 and 375×812, with
   `pageerror`/`console` listeners attached and every touched image's
   `naturalWidth > 0`.
6. `pnpm check` green: typecheck, production build with axe and link
   checking, and all spec tests.
7. `pnpm check:evidence` no worse than it is now.
8. Every deck outside weeks 9–10, and every other repo file listed under
   "Not touched," confirmed untouched by `git diff`.
9. Small commits, one decision each.

## Parallelism plan

Unlike weeks 3–4, this pair is asymmetric: week 9 gets a real content
change (nutrition table), week 10 gets a narrow accessibility fix (two
image conversions) plus the shared mechanical background-path fix. The
two weeks' files are disjoint, but the amount of independent work in each
lane is not — week 10's lane is much shorter than week 9's.

**Not shared, so no cross-week collision:** `week-09.deck.mdx` against
`week-10.deck.mdx`; `assets/week-09/` against `assets/week-10/`; each
week's own `SOURCES.md`; `lectures/week-09.md` (week 10's lecture is not
touched at all).

**Genuinely contended:**

1. **`dist/` and `.astro/`** — one production build at a time, full stop,
   same as every prior epic in this series.
2. **The git index** — concurrent commits in one worktree race on
   `.git/index`; each lane stages only its own paths.
3. **Dev-server ports** — check what's already listening from other
   worktrees (this series has repeatedly found 3–4 stray servers) before
   binding a new one.

**Two-phase graph** (no third parallel-lane phase needed, since week 10's
work is too small to justify its own lane running alongside week 9's for
long):

- **Phase 0 — sequential, sole owner.** `pnpm install`; screenshot-verify
  all five background directives; fix all five paths; convert
  `handwashing.jpg` and `meat-thermometer.jpg` to in-flow `<img>` with alt
  text; confirm in dev and in a production build; baseline `pnpm check`.
  This is small enough, and touches both deck files, that splitting it
  buys nothing.
- **Phase 1 — sequential, sole owner.** Week 9's nutrition reconcile:
  grow both tables to five rows, verify all five figures fresh against
  FoodData Central, rewrite the framing paragraph and closing sentence in
  both the deck and the lecture, re-screenshot for clipping.
- **Phase 2 — sequential, sole owner.** `pnpm check`; the slide-by-slide
  walk of both decks at both viewports with error listeners; the
  `SOURCES.md`-to-file cross-check for week 10 (no new files expected, so
  this is a confirmation, not new bookkeeping); `git diff` confirmation
  that every other deck and file is untouched; the Definition of Done.

No phase here genuinely parallelises across two agents — week 9's content
work and week 10's image-form work are both short enough, and touch
`theme.css`/`dist` contention closely enough, that sequencing all three
phases with one owner is faster than coordinating a two-lane split for
work this size. This is a deliberate departure from weeks34's two-lane
Phase 1; flagged here so a dispatcher doesn't assume this epic needs the
same shape.

## Deliberately deferred

- The background-path fix for decks 1, 5–8, 11–12, and the `astromotion`
  bump that would fix it upstream. Platform decision, not this epic's.
- Any new photograph for week 10's prose-only sections (the danger zone,
  cross-contamination, the worked example) — decision 7 explains why this
  synthesis week doesn't get its own photo set.
- An iron column for week 9 — decision 5 explains why fruit doesn't get
  the same treatment weeks 3/4 gave meat and fish.
- `src/data/storage/week-10.ts` and the week-10 storage-duration
  calculator — untouched, out of scope for a nutrition-adjacent epic.
- Weeks 5–8 and 11–12 in the deck-improvement series (siblings, handled by
  other agents in parallel).

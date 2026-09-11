# Epic: weeks 03–04 deck improvement — portioning, freshness, storage imagery, nutrition

## Context

Third in the per-deck improvement series, after `week1-deck-improvement`
(branch `worktree-week1-deck-improve`, unmerged and **not present in this
worktree** — its lessons are quoted here rather than referenced by path) and
`.claude/epics/week2-deck-improvement/` (complete, present, and the direct
template for this epic).

The user reviewed the finished week-2 deck in a browser, liked it, and asked
for the same treatment on the week-3 deck (`Animal protein I: poultry and
fish`) and the week-4 deck (`Animal protein II: red meat`).

Week 2's epic made five moves. They do **not** all port, because week 2's
subject was vegetables and these two weeks are animal protein. What ports and
what does not:

| Week 2's move | Weeks 3 and 4 |
|---|---|
| 1. Fix the background-image paths | **Ports cleanly.** Four affected directives across the two decks. |
| 2. Cut-shape slides with cited millimetre dimensions | **Ports only in part.** There is no sourceable dimension for a chicken thigh. The *shape and consequence* argument ports and is better evidenced here than in week 2; the *cited number per cut* half has no counterpart at all. |
| 3. Storage-section imagery | **Ports cleanly**, but the honest analogue is thinner than it looks — see §3. |
| 4. Good-versus-declining comparison | **Ports strongly on week 3**, and is a factual trap on week 4 — see §4. |
| 5. Nutrition reconcile-then-deepen | **Ports cleanly**, and both weeks carry a worse version of the same defect week 2 had. The extra *column* does not port: meat and fish have essentially no fibre. |

**No course boundary is crossed by this epic.** Week 2 deliberately took the
cut shapes from week 7 (the knife week) and accepted duplication. Nothing
equivalent is needed here: week 7 owns knife *types* (including the boning
knife, the filleting knife and the cleaver), grip, and the standard vegetable
cuts table — it does not own beef primals, poultry joint breakdown, or fish
filleting, and the parent course epic
(`.claude/epics/intro-preparing-meal/epic.md`, the week 3 and week 4 entries)
assigns portioning to weeks 3 and 4 explicitly. `src/decks/week-07.deck.mdx`
is not touched.

## Setup — this worktree has no dependencies installed

`node_modules/` and `dist/` are both absent (verified). **Task 001 must run
`pnpm install` before any `pnpm dev`, `pnpm build` or `pnpm check`.** Two
carried-forward notes:

- `pnpm install` runs the `prepare` script, which sets
  `core.hooksPath .githooks` — a pre-commit API-key scanner. Harmless and
  expected.
- `package.json` and `pnpm-lock.yaml` show as modified in `git status` with an
  **empty content diff** — a pre-existing CRLF artifact recorded in
  `week2-deck-improvement/updates/006.md`. Never stage them.

This worktree is branched from `worktree-week2-deck-improve` (commit
`e99db8f`), not from `main`, so it already carries week 2's `.compare` CSS in
`src/decks/theme.css` and week 2's fixed-canvas image pattern. Week 2's own
work is therefore in the history here; do not revert or re-edit any week-2
file.

## Decisions already taken by the user

Closed list. Do not reopen any of these without asking.

1. **Scope is the week-3 and week-4 decks.** Not weeks 1, 2, 5–12.
2. **Images must be freely licensed** — CC0, public domain, CC BY, or CC BY-SA
   — sourced from Wikimedia Commons or another explicitly free source, and
   credited in that week's `SOURCES.md`. No arbitrary internet images.
3. **Fix the background paths first**, confirming by screenshot, before adding
   any new imagery.
4. **Portioning: give each week a full "how it's broken down" section**, both
   weeks, with photographs, each saying what the portion form costs in days of
   refrigerated holding life. (§2)
5. **Freshness: both weeks, with red meat taught correctly.** Week 3 gets the
   professional fish check (eye clarity, gill colour). Week 4 gets
   bright-red-versus-brown captioned as **oxidation, not spoilage**, with the
   real spoilage indicators named separately. Visibly putrefied material was
   considered and rejected — it changes the register of a page prospective
   students browse. (§4)
6. **Nutrition: align the slides to the calculators**, not the reverse. (§5)
7. **Week 7 is not touched, and no course boundary is crossed.** (Unlike week
   2's decision to take cut shapes from week 7.)

Resolved by judgment, stated here so no build agent has to guess:

8. **The extra nutrient column is iron (mg).** Week 2 added fibre; meat and
   fish carry essentially none, and eight rows of `0.0` would be silly. Iron
   is the measurable trace of the myoglobin story both decks already tell
   about dark meat and red meat. (Saturated fat was the runner-up.)
9. **At least two new storage or handling photographs per week**, each
   depicting the *rule or the check* rather than merely the material. Skip
   rather than force, exactly as week 2 skipped its humidity-setting image.
10. **Convert week 3's `![bg right:32% contain]` chicken-thigh panel to a
    normal in-flow image** — it is the only picture of the anatomy that slide
    describes, and background images carry no alt text. **Move week 4's
    existing `ground-beef.jpg`** off the nutrition table, where it argues
    nothing, onto the whole-cuts-versus-ground storage slide, where it argues
    something. Neither needs new sourcing.
11. **Keep `beef-cuts-diagram.png` and add two photographs beside it** — a
    hard-worked cut and a resting cut — so the coarse-grain-versus-fine-grain
    claim is visible rather than asserted. The diagram labels regions but does
    not encode worked-versus-resting muscle, which is the slide's actual
    argument. (It also misspells "Shank" as "Shankle", twice; that is noted as
    deferred, not fixed here.)
12. **Leave week 4's title-image credit line verbatim**, including the words
    "…before cooking" in the Wikimedia file's own title. No automated check
    sees it (verified against the test code — see "Spec constraints"). Editing
    a credit line to hide a word is worse practice than citing accurately.
13. **Lecture pages are edited only as far as needed to keep a claim from
    being false** — which here means the nutrition tables, week 4's one `spec:`
    line, and week 4's `description`. The slides are the deliverable.

## 1. Fix the deck background images first — both weeks

Same bug week 1 and week 2 both had. astromotion writes `![bg …]` asset paths
relative to the **deck source file** (`./assets/week-03/…`) but copies assets
to `dist/src/decks/assets/<deck>/` and resolves them against the **served page
path** (`/decks/week-03/`), so every such directive 404s and the background
never paints.

Four affected directives:

| File | Line | File referenced | Form |
|---|---|---|---|
| `src/decks/week-03.deck.mdx` | 8 | `fish-market.jpg` | title background |
| `src/decks/week-03.deck.mdx` | 47 | `chicken-thigh.jpg` | `![bg right:32% contain]` |
| `src/decks/week-04.deck.mdx` | 8 | `raw-steak.jpg` | title background |
| `src/decks/week-04.deck.mdx` | 145 | `ground-beef.jpg` | `![bg right:32% contain]` |

**Verify the bug by screenshot before fixing it.** Week 2's task 001 did this
and it settled a competing "Windows path-separator" diagnosis that had been
carried in project history. Do not skip the before-evidence step just because
this epic already states the diagnosis.

Remedy: rewrite as `../../src/decks/assets/week-0N/<file>`. Re-verify in
**both** `astro dev` and a production `pnpm build` + `pnpm preview`.

**The path rule is not uniform across image forms — this matters.** In the
finished `src/decks/week-02.deck.mdx` today:

- plain markdown inline images still use `./assets/week-02/…` and render
  correctly, because Astro rewrites markdown image paths at build;
- only `![bg …]` directives (which become CSS `url()`) and **raw `<img src>`
  tags** need the build-relative `../../src/decks/assets/…` prefix.

A build agent told "rewrite all image paths" will churn working lines. A build
agent not told this will ship broken `<img>` tags. Follow the form, not a
blanket rule.

Do not fix decks 1 and 5–12 — deferred, see the bottom of this file. Do not
bump the pinned `astromotion` version (v0.23.0).

## 2. Portioning, and what portion form costs in holding time

The replacement for week 2's cut-shape section. Both weeks get one.

**What ports from week 2, and what does not.** Week 2's section rested on three
legs: named shapes, cited dimensions in millimetres, and a storage consequence
per shape. Only the third leg transfers — and it transfers *better* than it did
in week 2.

Week 2 could never source a quantified spoilage consequence and had to state
the surface-area argument as reasoning rather than as a cited measurement.
For protein, the equivalent claim is **already sourced and already in the
deck**: `src/decks/week-04.deck.mdx` states, from FSIS, that grinding mixes
surface bacteria through the whole volume, which is why ground meat drops from
the 3–5 day window to 2 days. That is the protein form of "more cut surface per
gram spoils faster", with a real, cited consequence **in days**. Anchor the
section on it.

**Week 3.** Files: `src/decks/week-03.deck.mdx` (the `## Portioning` slide,
~line 104, and the `## Fish anatomy` slide, ~line 61, which is also entirely
image-free), plus `src/decks/assets/week-03/` and its `SOURCES.md`.

Subject is *portion form*: for poultry, the eight-piece breakdown and the
joints it follows (leg/thigh/drumstick, wing, breast halves) — the deck already
sets up "broken down along the joints, where connective tissue is thinnest";
for fish, the fillet forms (fillet, steak/darne, supreme), the myotome seams
the deck already names, and the pin-bone line. A labelled myotome or fillet
diagram would carry the fish-anatomy slide better than its current prose.

**Week 4.** Files: `src/decks/week-04.deck.mdx` (the `## Portioning` slide,
~line 95, one sentence and no image; and the anatomy slides, ~lines 38–49),
plus `src/decks/assets/week-04/` and its `SOURCES.md`.

Subject is the primal cuts, and per decision 11 the existing diagram stays with
two photographs added beside it — a worked cut (chuck or shank, visible
collagen seams, coarse grain) beside a resting cut (loin, fine grain) — so the
texture claim becomes visible. Without that, this section is pure duplication
of the diagram.

**Hard rules for this section:**

- **No invented dimensions.** There is no protein analogue of Escoffier's
  millimetres. Carry week 2's chiffonade precedent: where no figure is
  documented, state the thing without a number and say so plainly in the
  update note. Do not use training-data recollection as if it were a citation.
- **Shape and consequence only, never execution.** No knife angle, no hand
  position, no grip. That is week 7's, and week 7 already owns the boning
  knife, the filleting knife and the cleaver.
- **Differentiate from week 5.** Week 5 already owns "chopped, crushed,
  sliced" with a cell-rupture/surface-area table — the same *mechanism* told
  for flavour. These two weeks must argue **holding time**, not flavour, or the
  section reads as a repeat.

## 3. Handling and storage imagery

Both decks have whole image-free sections.

Week 3: `## Cold chain` (~line 78), `## Cross-contamination` (~line 92),
`## Portioning` (~line 104), `## Poultry` (~line 120), `## Fish and shellfish`
(~line 129). Week 4: `## Unchanged from week 3` (~line 85), `## Portioning`
(~line 95), `## Whole cuts versus ground` (~line 108), `## The danger zone`
(~line 121), `## Goat and lamb, briefly` (~line 61).

**The analogue is thinner than it looks — read this before sourcing.** Week 2's
storage slides described a *place*: a crisper drawer, a dark room with onions.
A place photographs well. These slides are **tables of days and temperatures**.
A photograph of raw chicken beside a holding-time table illustrates the
material, not the rule, and the deck drifts toward being a meat photo library.

Per decision 9, photograph **the rule or the check**, not merely the meat.
Candidates that actually carry an argument:

- whole fish buried in crushed ice at a fishmonger's display — the canonical,
  abundantly-licensed Commons subject, and for fish it *is* the rule;
- an appliance thermometer reading in the 4 °C range (week 2 already makes the
  "checked with a thermometer, not the dial" point);
- ground meat in a tray beside a whole cut, for week 4's
  whole-versus-ground slide — and per decision 10 the existing
  `ground-beef.jpg` relocates here at zero sourcing cost.

**Do not duplicate week 10's subject.** Week 10 already uses a
`meat-thermometer.jpg`. Pick a different file and a different framing so the
weeks stay distinguishable.

Leave every existing sourced claim exactly as it is — the 2 hours / 1 hour
above 32 °C rule, 4.4 °C, −17.8 °C, the 4 °C–60 °C danger zone, and the FSIS
holding windows. Images illustrate them; they never restate or replace them.

## 4. Choosing well — fresh versus declining

New sections in both decks. Nothing to rewrite: **neither deck currently
teaches choosing at all.** Week 3's spine is Order → Anatomy → Handling →
Storage → Nutrition; week 4's mirrors it. Adding selection widens what each
week is about. That is a deliberate, user-approved editorial decision
(decision 5), not a like-for-like port — the parent course epic assigned
selection to weeks 2 and 9 rather than here.

**Week 3 — the strongest addition in this epic.** Fish freshness is a
canonically taught, authoritatively documented skill: eye clarity (bright,
clear, convex versus sunken and cloudy), gill colour (bright red versus brown
or grey), flesh resilience, smell (mild or of the sea versus ammonia or sour),
scales intact. The source is **already** in week 3's `links:` and its Reading
slide — FDA / FoodSafety.gov, "Safe Selection and Handling of Fish and
Shellfish". So unlike week 2, where the spoilage mechanism could not be
sourced at all, the claims here need no new research.

**Week 4 — the naive version teaches something false.** The obvious
"bright red versus brown meat" pair is **not** a spoilage comparison. Surface
browning in red meat is myoglobin oxidation (oxymyoglobin to metmyoglobin) — a
colour change, not a safety judgement. A slide captioned good-versus-bad here
would assert a falsehood on a page whose governing rule is that every factual
claim carries a source that resolves.

The required version inverts it: bright red versus brown, captioned as
oxidation and **explicitly not spoilage**, with the actual spoilage indicators
— slime, off-odour, the date — named as the ones that matter. USDA FSIS
publishes exactly this guidance and week 4 already cites FSIS. This is
subject matter the course is otherwise missing.

**Sourcing risk, and the fallback ladder.** Week 2 got lucky: two onion
cross-sections shot on white, which read as a deliberate pair. A *matched*
fresh-and-declining pair of the same species, comparably shot, is materially
less likely for fish. Carry week 2's ladder verbatim:

1. a comparable substitute subject where both states exist as real
   photographs — prefer this;
2. a drawn diagram, clearly labelled as an illustration;
3. **never present a single photograph as if it were a comparison.**

A viable non-pair fallback specific to fish: a single labelled close-up of a
fresh eye and gill with the check named, plus a diagram — not a fake
comparison.

Any claim about *why* a change indicates decline needs a source that resolves,
or must stay purely descriptive. Week 2's task 004 left its mechanism claim
out entirely for exactly this reason.

Reuse the existing `.compare` CSS class in `src/decks/theme.css` (added by week
2, with `max-height: 19rem` on its images) rather than adding a new class —
see the parallelism plan for why that file is contended.

## 5. Nutrition — reconcile with the calculator, then deepen

Both weeks carry the same class of defect week 2 had, and week 4's is worse.
The discrepancies are stated concretely below so no build agent has to
rediscover them — but **every figure must still be verified against USDA
FoodData Central before being recorded.**

### Week 3 — the deck understates what the tutorial does

Deck table (`src/decks/week-03.deck.mdx`, ~lines 151–154) has **two** rows;
the lecture table matches it. The calculator (`src/data/macro/week-03.ts`) has
**four** ingredients:

| Food | FDC ID | In deck? | In calculator? |
|---|---|---|---|
| Chicken, breast, skinless, boneless, meat only, raw | 171077 | yes | yes |
| Fish, salmon, Atlantic, farmed, raw | 175167 | yes | yes |
| Fish, cod, Atlantic, raw | 172904 | **no** | yes |
| Duck, domesticated, meat only, raw | 172410 | **no** | yes |

The deck's closing line claims *"Session 3's tutorial exercises the macro
calculator on chicken breast and salmon"* — **false**. The session file says
"Select each of this week's four items in turn — chicken breast, salmon, cod,
duck", and its `spec:` line promises ranking *four* items by fat content.
Compounding it, the `## Duck, briefly` slide gives duck no figures at all
though the calculator has them.

Resolution: grow the deck and lecture tables to the calculator's four.
**This needs no `spec:` change** — the existing lecture `spec:` line about
chicken breast and salmon stays true as a subset.

### Week 4 — zero overlap between deck and calculator

Deck table (`src/decks/week-04.deck.mdx`, ~lines 140–143) and lecture table:

| Food | FDC ID |
|---|---|
| Beef, ground, 80% lean / 20% fat, raw | 2514744 |
| Lamb, ground, raw | 174370 |

Calculator (`src/data/macro/week-04.ts`):

| Food | FDC ID |
|---|---|
| Beef, ground, 85% lean / 15% fat, raw | 171796 |
| Beef, ground, 93% lean / 7% fat, raw | 173110 |
| Lamb, domestic, leg, whole, raw | 174311 |
| Goat, raw | 175303 |

**Not one ID in common, and there is no ground lamb in the calculator at all.**
The deck's closing line claims the tutorial *"exercises the macro calculator on
ground beef and ground lamb"* — half false. The tutorial's own `spec:` lines
talk about 85%-lean and 93%-lean ground beef and about which of four items is
leanest.

Resolution per decision 6: replace the deck and lecture tables with the
calculator's four items. **This is the one repair in the epic that forces
graded-field rewrites**, in two places:

- `src/content/lectures/week-04.md`, the `spec:` line reading *"you can state
  the fat, protein and calorie content per 100 g of ground beef and ground
  lamb, with a source"* — realigning makes that promise uncheckable.
- `src/content/lectures/week-04.md`, the `description`, which names *"a mince
  and a ground lamb"* — also stale after the change, and **also scanned** by
  the cooking-verb test.

Both fields are scanned by the cooking-verb regex. See the spec constraints
below and reuse week 4's own existing dodge — its first `spec:` line says
"slow, **moist treatment**" and "fast, **dry treatment**" precisely to avoid
the banned verbs.

### Deepening, both weeks

Add **iron (mg)** as the extra column (decision 8), and grow each table toward
the calculator's four items plus any further USDA-verified additions that stay
within the week's own subject. Every figure per **100 g raw edible portion**,
each with its FDC ID, verified against FoodData Central before recording.

**Constraints:**

- At least one `links[].label` per lecture must keep the literal words
  **"FoodData Central"** — the graded citation test matches on the label text,
  and `https://fdc.nal.usda.gov/…` does not contain that string. Shortening a
  label to e.g. "FDC 171077" breaks a graded test.
- `src/data/macro/types.ts` documents 4–6 ingredients a student can select.
  Both weeks sit at four, so growth to six is available but **eight is not**.
  Week 2's own precedent was to leave the calculator alone and state the
  relationship truthfully.
- If a calculator file *is* extended, confirm the consuming end still works —
  `src/components/MacroCalculator.astro` and the tutorial page that renders it
  — not merely that the data file compiles.
- Nutrition figures belong to **weeks 2, 3, 4 and 9 only**. Do not spread
  nutrition content into other weeks.
- **Plan two nutrition slides per week from the outset.** Week 2's widened
  table overflowed the fixed canvas and had to be split retroactively.
- The sentence relating the slides to the calculator must be **true** after the
  change, in both decks.

## Image sourcing — the standing convention

Carried from week 2, with its two hard-won amendments.

1. Source from **Wikimedia Commons** (search + imageinfo API) or another
   explicitly free source. Licence must permit reuse: CC0, public domain,
   CC BY, CC BY-SA.
2. **Look at the image before using it.** Commons search ranking is unreliable
   and returns mismatched subjects.
3. **Check EXIF for AI-generation tells** — an implausible camera model, a
   placeholder timestamp. Week 1 rejected a file reporting camera model
   `NIKON Z6_3`, which does not exist, timestamped `2024:01:01 00:00:16`.
4. **Resize to ~960 px wide, not 1280.** 1280 overflowed the slide; 960 matches
   the convention every other image in these decks already follows.
5. Save under `src/decks/assets/week-0N/`.
6. One credit line per file in **that week's** `SOURCES.md`, in the existing
   format, recording any resize:

   `` `filename.jpg` — File:<Commons title> — <permalink URL> — <licence> — <author> (<size>) ``

Nothing automated enforces any of this. A marker does.

## Accessibility and presentation

- Every informative inline image needs **real alt text** — axe runs during
  `pnpm build` and fails the build without it.
- `![bg …]` **discards alt text**, so a background must never be the sole
  carrier of information. This is why decision 10 converts week 3's
  chicken-thigh panel.
- **Budget against the fixed 1280×720 canvas.** `.reveal` and `body` are
  `overflow: hidden` with no scroll, so a tall image is permanently clipped.
  Week 2 shipped **seven** clipped slides that `pnpm check` could not see; they
  were fixed with raw `<img>` plus `max-height`. Per-image inline `max-height`
  is preferred over a new shared CSS class — see the parallelism plan.
- **Body text before image, not after.** Image-first pushed sourced text below
  the fold in week 2 and had to be reordered.
- Captions in the course's deadpan register, units attached. Never "look at the
  bad one".

## Files touched

- `src/decks/week-03.deck.mdx`, `src/decks/week-04.deck.mdx`
- `src/decks/assets/week-03/` and its `SOURCES.md`
- `src/decks/assets/week-04/` and its `SOURCES.md`
- `src/content/lectures/week-03.md` — nutrition section only
- `src/content/lectures/week-04.md` — nutrition section, the one `spec:` line,
  and the `description` (per §5 and decision 13)
- `src/data/macro/week-03.ts` / `week-04.ts` — only if §5 chooses to extend
  them
- `src/decks/theme.css` — **only** if a new shared class is genuinely needed,
  and then only by the single task that owns it

## Not touched

`src/decks/week-07.deck.mdx` and every other deck (1, 2, 5, 6, 8–12).
`src/content/sessions/03-poultry-and-fish.mdx` and `04-red-meat.mdx` — the
chosen nutrition resolution aligns the slides *to* them, so they need no edit.
`astro.config.ts`. `scripts/pages-base.ts`. `src/content.config.ts`.
`src/site-config.ts`. `src/course-config.ts`. Anything under `dist/`.
`package.json` and `pnpm-lock.yaml` (the phantom CRLF diff).

## Spec constraints this epic must respect

Both spec files read **only** `dist/api/index.json` and `dist/api/<id>.json`.
Nothing reads source files, markup, or `SOURCES.md`. Only `sessions`,
`assessments`, `lectures` and `people` become API nodes — **decks are not a
content collection, so no deck prose is ever visible to any test.**

Three live hazards, by name:

1. **The cooking-verb test** (`spec/course-promises.test.ts`) asserts weeks
   1–10 never claim cooking. It scans the **`title`, `description` and
   `spec[]`** of `sessions` and `lectures` nodes — not body prose. The regex
   covers `cook`, `sauté`, `saute`, `fry`, `fried`, `boil`, `roast`, `grill`,
   `bake`, `simmer`, `braise`, `sear`, `poach` and their inflections,
   case-insensitively and word-bounded. `slice`, `chop`, `dice`, `portion`,
   `grind`, `fillet` and `treatment` are all safe. **The only way this epic can
   trip it is §5's rewrite of week 4's `spec:` line and `description`.** Reuse
   week 4's existing "moist treatment / dry treatment" phrasing discipline.
2. **The FoodData Central citation test** requires weeks 2, 3, 4 and 9 to cite
   it, matching `/FoodData Central/i` against each `links[].label` **or**
   `links[].url`. The URLs do not contain the string, so the tests currently
   pass on **label text only**. Do not shorten those labels.
3. **Every graph node needs at least one `related:` edge.** Week 3's lecture
   currently has **exactly one** (`sessions/03-poultry-and-fish`) — it is one
   deletion away from failing. Week 4's has two.

Also standing: 12 lectures and 12 decks, and every `slides:` value must
resolve to a built `dist/decks/week-0N/index.html` — so do not rename, split
or add a deck file. The tutorial split is pinned exactly and weeks 3 and 4 must
both keep `tutorial: true`. Every dated node stays inside the teaching period.
Assessment weights sum to 100 (untouched here).

**Definitively not caught by anything:** week 4's "…before cooking" image
credit line. `SOURCES.md` is not under `src/content/`, is never loaded into a
collection, is never an API node, and no test opens it — and deck prose
containing the verb already passes today in both decks with the suite green.
Hence decision 12.

**No test constrains** image count, slide count, deck length, table width,
`SOURCES.md` contents, licensing, or alt text (axe enforces alt during
`pnpm build`, not the spec suite).

One pre-existing failure to know about: `pnpm check:evidence` currently fails
on `PROCESS.md`'s `TEMPLATE:` comment — deliberately deferred by the parent
epic. This epic must not add a *new* evidence failure, but cannot be gated on
that command going green.

## Definition of done

1. `pnpm install` run; all four background directives verified broken by
   screenshot, fixed, and confirmed painting in **both** `astro dev` and a
   production build, with the before-and-after observation recorded.
2. Both weeks have a portioning section with photographs, anchored on the
   already-sourced whole-cut-versus-ground holding-time contrast, containing
   **no invented dimension** and no knife technique.
3. At least **two** new storage or handling photographs per week, each
   depicting the rule or the check rather than merely the material, with every
   existing sourced claim unchanged.
4. Week 3 has a fish-freshness section built on the already-cited FDA source.
   Week 4 has the bright-red-versus-brown slide captioned as **oxidation, not
   spoilage**, with the real spoilage indicators named separately. No single
   photograph is presented as a comparison.
5. Both nutrition tables reconciled with their calculators; **every sentence
   relating slides to calculator is true**; the iron column added; every figure
   carries an FDC ID verified against FoodData Central.
6. Week 4's rewritten `spec:` line and `description` are independently
   checkable and free of every verb in the cooking regex.
7. Every new image freely licensed, visually inspected, EXIF-checked, ~960 px
   wide, alt-texted, and credited one line per file in the right week's
   `SOURCES.md`. Files and credit lines match one-to-one in both directions,
   with no orphans.
8. **No slide clipped against the 720 px canvas** — confirmed by a
   slide-by-slide walk of **both** decks at 1280×800 and 375×812, with
   `pageerror` and `console` listeners attached and every `img.naturalWidth > 0`.
9. `pnpm check` green: typecheck, production build with axe and link checking,
   and all spec tests.
10. `pnpm check:evidence` no worse than it is now.
11. `src/decks/week-07.deck.mdx` and decks 1, 2, 5, 6, 8–12 untouched,
    confirmed by `git diff`.
12. Small commits, one decision each.

## Parallelism plan

Week 2's epic was strictly sequential — all six tasks touched one deck file.
Weeks 3 and 4 are two file families, so **the content work genuinely
parallelises, but the build and verification work does not.**

**Not shared, so no cross-week collision:** `week-03.deck.mdx` against
`week-04.deck.mdx`; `assets/week-03/` against `assets/week-04/`; **each week's
`SOURCES.md` is its own file**; `lectures/week-03.md` against `week-04.md`;
`data/macro/week-03.ts` against `week-04.ts`.

**Genuinely contended:**

1. **`src/decks/theme.css`** — one file, every deck. Week 2 already added
   `.compare` with `max-height: 19rem`, so if both weeks reuse it **no edit is
   needed at all**. Week 2's task 006 deliberately avoided touching
   `theme.css` and used per-image inline `max-height` instead; that precedent
   lets both lanes size their own images with zero shared-file contact and is
   the default here. If a new shared class is genuinely wanted, one task owns
   `theme.css`, runs before both lanes, and both lanes consume it.
2. **`dist/` and `.astro/`** — the real hazard. Two agents running `pnpm build`
   concurrently in one worktree clobber each other's `dist/`, and the spec
   tests read `dist/api/index.json`, so a concurrent build makes test output
   meaningless. Two concurrent `astro dev` servers also both write `.astro/`
   content-collection types. **One build at a time, full stop.**
3. **The git index** — concurrent commits in one worktree race on
   `.git/index`. Each lane stages only its own paths.
4. **Dev-server ports** — week 2 recorded four servers already listening on
   4321–4324 from other worktrees. Each lane binds its own port and verifies
   which worktree a listener belongs to before killing anything.

**Three-phase graph:**

- **Phase 0 — sequential, sole owner.** `pnpm install`; screenshot-verify the
  background bug on both decks; fix all four paths; confirm in dev and in
  `dist`; baseline `pnpm check`. This task alone touches both deck files, which
  is why it runs alone. Splitting a four-line mechanical change across two
  agents saves nothing and buys a build race.
- **Phase 1 — two parallel lanes.** Lane A owns everything `week-03*`; lane B
  owns everything `week-04*`. `parallel: true` and no `conflicts_with`
  **across** lanes. **Within** each lane the tasks stay sequential, because
  that lane's own deck file and `SOURCES.md` are appended to by every one of
  its content tasks — the same reason week 2 sequenced its chain. Lanes may run
  `astro dev` on distinct ports to screenshot as they go; **neither lane runs
  `pnpm build` or `pnpm check`.** Lanes should screenshot as they go and accept
  the small `.astro/` race: discovering a 900 px-tall image at phase 2 means
  reopening a content decision the lane already committed.
- **Phase 2 — sequential, sole owner.** The only production builds in the
  epic: `pnpm check`; the slide-by-slide walk of both decks at both viewports
  with error listeners; the `SOURCES.md`-to-file cross-check per week; the
  no-invented-number spot-check against each lane's update notes; `git diff`
  confirmation that week 7 and decks 1, 2, 5, 6, 8–12 are untouched; and the
  Definition of Done. May make small fix-ups (week 2's equivalent task found
  seven clipped slides) but must not reopen content decisions.

**Where the parallel win actually is:** image sourcing — Commons search,
visual inspection, EXIF checks, resizing — is the slowest work in the epic and
is entirely per-week. That is what the two lanes buy.

## Deliberately deferred

- The background-path fix for decks 1 and 5–12, and the `astromotion` bump
  that would fix it upstream. Platform decision, not this epic's.
- Week 2's pre-existing "Families, briefly" slide overflow (`onions.jpg`),
  flagged during week 2's verification and left alone as out of scope.
- Week 7's knife photographs, and the week 2 ↔ week 7 cut-shapes duplication
  that week 2 knowingly created.
- The `beef-cuts-diagram.png` "Shankle" misspelling, twice — decision 11 keeps
  the diagram as-is.
- Weeks 5, 6 and 8–12 in the deck-improvement series.

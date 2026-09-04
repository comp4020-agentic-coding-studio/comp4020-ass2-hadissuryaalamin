# Epic: SLOP1640 Introduction to Preparing Meal

Build the full course site for Assignment 2. This document is the contract: a
build agent with no memory of the conversation that produced it should be able
to implement from this file alone, together with `CLAUDE.md`, `README.md` and
`spec/`.

**Status when this was written:** the harness (`CLAUDE.md`) and the course
record (`src/course-config.ts`) are committed and `pnpm check` is green. All
twelve teaching weeks, both assessments, the people entries, the deck and the
course-specific spec tests are still to be written.

## The course

**Title:** Introduction to Preparing Meal
**Code:** SLOP1640 (level 1, undergraduate — the last three digits `640` are
allocated to this repo and must not change)
**Session:** Semester 1, 2027 — 22 February to 28 May 2027

**Thesis: a meal is decided before it is cooked.** Selection, storage,
temperature, cutting and sequence determine the outcome; the stove only reveals
it. Weeks 1–10 are preparation. Weeks 11–12 cook, and cook only to test the
thesis.

**Time is a constraint, not the subject.** Week 1 establishes it with real
figures and it recurs as a pressure throughout — but this is not a productivity
course, and no page may read as life-hack content.

**Voice: deadpan academic.** Treat storing a carrot with the full seriousness of
a discipline. Learning outcomes, prescribed readings, precise language and
marking rubrics applied without irony to work usually treated as beneath
explanation. Never explain the joke, never wink at Slop University being
fictional, never use exclamation marks. Numbers carry units: temperatures in
Celsius, times in minutes or hours, weights in grams.

## Non-negotiable constraints

These come from `CLAUDE.md`, `README.md` and the published brief. A build agent
must not trade them away.

1. **Twelve dated teaching weeks**, every date inside 2027-02-22 … 2027-05-28.
   `spec/data-integrity.test.ts` already enforces this and must stay green.
2. **Assessment weights sum to exactly 100** across
   `src/content/assessments/`. The schema enforces per-assessment criteria
   summing to 100; the cross-assessment total is this epic's promise and needs
   its own test.
3. **At least one lecture carries a real slide deck** — `src/decks/*.deck.mdx`,
   linked from its lecture page as `/decks/<name>/`.
4. **No `STARTER_CONTENT` marker may survive** a commit that replaces the
   fragment it marks. Twelve remain at the time of writing:
   `src/content/assessments/{assignment-1,final-project}.md`,
   `src/content/lectures/week-0{1,2}.md`,
   `src/content/people/{idris-fenn,marisol-quaye}.md`,
   `src/content/sessions/{01-getting-started,02-first-review}.md`,
   `src/decks/week-01.deck.mdx`, `src/pages/index.astro` (×2),
   `src/pages/policies/index.mdx`.
5. **Starter imagery must be replaced**, or the site must adopt a deliberate
   image-free treatment. `pnpm check:evidence` fails on the shipped artwork.
6. **The platform is fixed.** Do not edit `astro.config.ts`,
   `scripts/pages-base.ts`, the four shipped collections in
   `src/content.config.ts`, or the Slop branding spread in `src/site-config.ts`.
7. **No real person is presented as teaching this course.** The guest lecturer
   in week 8 is a fictional character with an invented name. Do not name Gordon
   Ramsay or any other real chef as a teacher, and do not attribute invented
   quotes to real people.
8. **Every factual claim carries a real, checkable source.** Nutrition figures,
   storage temperatures, timing research and the microplastics material must
   cite work that exists. Never invent a statistic, a study or a DOI. If a
   figure cannot be sourced, teach the concept without the number.
9. **Every content node carries at least one `related:` edge.** Markers sample
   non-adjacent weeks; an unconnected page reads as a page from another course.

## Week plan

Weeks run Mondays from 2027-02-22. Week 1 = 22 Feb, week 2 = 1 Mar, week 3 =
8 Mar, week 4 = 15 Mar, week 5 = 22 Mar, week 6 = 29 Mar, week 7 = 5 Apr,
week 8 = 12 Apr, week 9 = 19 Apr, week 10 = 26 Apr, week 11 = 3 May, week 12 =
10 May. This leaves 11–28 May clear for the final assessment, and every date
sits inside the teaching period.

Each week needs a session entry (`src/content/sessions/NN-slug.md`). Lectures
are a separate collection; not every week needs its own lecture page, but the
weeks marked **lecture** below do.

### Week 1 — Why prepare at all (lecture)

The case for preparation, argued with figures rather than assertion. What
people actually spend on feeding themselves, in time and in money, and where
that time goes. The recurring observation the course is built on: eating
quickly and eating well are not opposites, but they are only reconciled before
the cooking starts.

Sourced material required. Verified starting points, all real:

- US Bureau of Labor Statistics American Time Use Survey via USDA ERS —
  average time on food preparation, serving and cleanup.
  <https://www.ers.usda.gov/amber-waves/2016/november/americans-spend-an-average-of-37-minutes-a-day-preparing-and-serving-food-and-cleaning-up>
- USDA ERS, "More Americans Spend More Time in Food-Related Activities Than a
  Decade Ago".
  <https://www.ers.usda.gov/amber-waves/2020/april/more-americans-spend-more-time-in-food-related-activities-than-a-decade-ago>
- Monsivais, Aggarwal & Drewnowski, "Time spent on home food preparation and
  indicators of healthy eating", *Am J Prev Med* (2014).
  <https://www.sciencedirect.com/science/article/pii/S0749379714004000>

Cost-of-eating-out figures need a better source than the content-marketing
pages that dominate search results; prefer a statistical agency or peer-reviewed
work, and drop the claim rather than cite a listicle.

Set up the semester-long spine: state the thesis, and say that weeks 11–12 will
test it.

### Week 2 — Vegetables

Families and what they have in common. Storage: what belongs in the
refrigerator and what is ruined by it; which shelf; which drawer and at what
humidity setting; target temperatures in Celsius. Ethylene producers versus
ethylene-sensitive produce, and why they are separated. Choosing well at the
market. Cuts are touched on only as they affect keeping quality — the knife has
its own week (7), and week 2 must not pre-empt it.

Verified starting point: USDA refrigerator guidance (fridge at or below 4 °C)
plus crisper-drawer humidity behaviour — high humidity for leafy greens, low
humidity for ethylene producers. Cite the USDA/FDA guidance directly rather
than appliance-manufacturer blogs.

### Week 3 — Animal protein I: poultry and fish (lecture)

Chicken and fish as the primary material, duck touched on briefly. Anatomy
first, so that the reason a cut behaves as it does is visible: muscle use,
connective tissue, fat distribution. Then handling — cold chain, cross-
contamination, cleaning, portioning. Storage temperatures and safe holding
times, sourced.

### Week 4 — Animal protein II: red meat

Beef as the primary material; goat and lamb briefly. Same structure as week 3 —
anatomy, then handling, then portioning — so the two weeks read as one argument
across two materials. Which cuts suit which treatment, and why that follows from
the anatomy rather than from tradition.

### Week 5 — Spices, aromatics and oil

What each aromatic contributes and how processing changes it: galangal,
shallots, onion, garlic. Chopped versus crushed versus sliced, and why the
result differs — cell rupture, enzyme reactions, surface area. Bay leaf, lime
leaf, oregano, basil: when they go in and what heat does to them. Oils: smoke
point, flavour, when the choice matters.

### Week 6 — The kitchen: tools and surfaces

Chopping boards, choppers, strainers, containers. Maintenance and cleaning.
Board materials compared — wood, marble, plastic — on hygiene, knife wear and
particle shedding.

Verified starting point for the microplastics material:

- Yadav et al., "Cutting Boards: An Overlooked Source of Microplastics in Human
  Food?", *Environmental Science & Technology* (2023).
  <https://pubs.acs.org/doi/abs/10.1021/acs.est.3c00924>
- American Chemical Society press summary.
  <https://www.acs.org/pressroom/presspacs/2023/june/cutting-boards-can-produce-microparticles-when-chopping-veggies.html>

Report the finding honestly, including its limits: the same study found no
significant effect on mouse fibroblast cell viability at 72 hours and called for
further work. Deadpan means accurate, not alarmist.

### Week 7 — The knife (lecture, carries the deck)

The most detailed week. Knife types and what each is for; blade geometry and
edge angles; steel and hardness; typical lengths in millimetres and weights in
grams; balance. Sharpening and honing as distinct operations, with the
maintenance schedule stated. Grip and the cuts themselves.

This is the week that carries the slide deck (`src/decks/`), because it is the
most demonstrative material in the course.

### Week 8 — Guest lecture: time management under service (lecture)

A visiting chef on how preparation is organised in a professional kitchen when
service is timed: what is done before the doors open, what is held, what is
made to order, and how the order of work is decided.

**The guest is a fictional character.** Invent a name and a plausible career,
and write the `people` entry as fiction consistent with Slop University. No real
chef is named as teaching this course.

This week closes the loop on week 1: time was the argument for preparing, and
here is the discipline that treats it as a design constraint.

### Week 9 — Fruit

Varieties and what distinguishes them; where each is stored and why (this is
where the ethylene material from week 2 pays off); choosing at the market;
ripening as a process that can be scheduled rather than waited on.

### Week 10 — Food safety and the cold chain

The synthesis week, and the last before cooking. Temperature danger zone,
cross-contamination, safe holding times, how long prepared material actually
keeps. Pulls together the storage material from weeks 2, 3, 4 and 9 into one
account, so that the reader sees the preceding weeks were one subject.

All temperatures and times must be sourced from a food-safety authority (USDA,
FSANZ or equivalent), not from memory.

### Week 11 — Cooking

The first week at the stove. Identical dishes cooked from differently prepared
material, so the difference is attributable to the preparation rather than to
the cooking. Heat methods are covered only as far as this comparison needs.

### Week 12 — Live test: the public kitchen

Assessed practical. Students prepare and cook in front of an audience under
time constraint. The examination is of the preparation: what was done before
the heat, and whether it held up.

## Assessments

Two pieces, summing to exactly 100.

### Assignment: invent a recipe (week 6, 40%)

Students invent a dish and submit a written account of it: the preparation
process step by step, the nutritional composition of the result, and a sensory
description — colour, aroma, flavour, texture. The dish is not cooked for this
submission; the point is that a recipe can be reasoned about before it exists.

Nutritional figures must be traceable to a food-composition database (USDA
FoodData Central, FSANZ NUTTAB or equivalent). Name the database in the brief.

Use a `weighted` marking block whose criteria sum to 100.

### Final: the public kitchen (week 12, 60%)

The week 12 practical, assessed. State what is examined: the preparation
decisions, their execution under time constraint, and whether the result matches
what the student's own account predicted.

Weight split is a judgement call; 40/60 reflects that the practical is the
course's proof. Change it if you prefer, but the two must still sum to 100.

## Other pages

- **`src/pages/index.astro`** — the home page. Two `STARTER_CONTENT` markers,
  including the hero artwork. It must state the thesis in the first screen.
- **`src/pages/policies/index.mdx`** — late work, extensions, academic
  integrity, and the practical-specific policies this course needs (allergies,
  dietary requirements, kitchen safety, what happens if a student cannot attend
  the live test).
- **`src/content/people/`** — replace both starter entries. The course needs a
  convenor and at least one other teacher, plus the fictional week-8 guest.
- **`src/site-config.ts`** — `sessionLabels` is the one part of this file that
  is yours. `CLAUDE.md` names the sessions **Preps**; confirm that reads well on
  the built site before committing to it.

## Spec tests to write

`CLAUDE.md` states that a promise about the course is written as a test rather
than trusted as prose. Add these in `spec/*.test.ts`, reading
`dist/api/index.json` rather than source files or markup, so they survive a
change of approach:

1. **Assessment weights total exactly 100** across all published assessments.
2. **Twelve teaching weeks exist**, numbered 1–12 with no gaps and no
   duplicates.
3. **Weeks 1–10 do not teach cooking.** Assert that no session in weeks 1–10
   claims cooking in its title, description or `spec:` lines. This is the
   course's central promise and the one most likely to erode as content is
   written.
4. **Every node carries at least one `related:` edge**, so no page is orphaned
   from the graph.
5. **At least one lecture links a deck** via its `slides:` field.

Test the contract, not the wording. A test that pins exact prose will fail on
every edit and teach the next agent to weaken it.

## Definition of done

- Twelve session entries, dated Mondays 22 Feb – 10 May 2027.
- Lecture pages for weeks 1, 3, 7 and 8 at minimum; week 7 links the deck.
- Two assessments summing to 100, with marking blocks.
- People entries replaced, including the fictional week-8 guest.
- Home page and policies page written; starter artwork replaced.
- Zero `STARTER_CONTENT` markers anywhere in `src/`.
- The five spec tests above written and passing.
- `pnpm check` green and `pnpm check:evidence` green.
- Every factual claim carries a source that resolves.

## Round 2 — every week gets a lecture and a deck, tutorials replace prep prose

Round 1 (above) shipped lecture pages for weeks 1, 3, 7, 8 and decks for weeks
1 and 7. This round closes both gaps to all twelve weeks, replaces the
sessions collection's content with hands-on exercises where the topic
supports one, and adds nutrition/storage data feeding two reusable
calculators. All round 1 constraints and the platform-lock rules continue to
apply unchanged. A build agent should be able to work from this section plus
`CLAUDE.md`, `spec/` and round 1 above, without the brainstorming
conversation that produced it.

### New constraints

10. **Every teaching week carries both a lecture page and a slide deck** —
    12 lectures, 12 decks, each lecture's `slides:` field resolving to its
    matching deck.
11. **The sessions collection (labelled Tutorials) keeps all twelve entries**,
    but its content splits by topic fit: weeks 2, 3, 4, 5, 8, 9, 10 hold a
    hands-on calculator exercise; weeks 1, 6, 7, 11, 12 state plainly that
    there is no tutorial that week and why (week 1 has no prep decision yet
    to practice; weeks 11–12 are past the prep stage). No week is dropped
    from the collection — `spec/data-integrity.test.ts`'s twelve-week promise
    still holds.
12. **Two reusable calculator components, not twelve bespoke tools:**
    - **Macro/calorie calculator** — ingredient + grams in, fat/protein/
      calories out. Used on the tutorial pages of weeks 2, 3, 4, 9. Data
      sourced from USDA FoodData Central, per ingredient, per 100 g, cited.
    - **Storage-duration calculator** — prep date/time + ingredient or dish
      type in, safe-until date/time out. Used on the tutorial pages of weeks
      5, 8, 10. Data sourced from the same USDA FSIS cold-chain guidance
      already cited in `10-food-safety-and-the-cold-chain.md` and
      `11-first-heat.md`.
    Both are content-driven by a per-week data file, not duplicated per week.
13. **Slide deck images live under `src/decks/assets/<week-slug>/`**,
    referenced with a relative path (`./assets/<week-slug>/file.jpg`) from
    the matching `.deck.mdx`. Confirmed against astromotion's own resolution
    rule: a relative image path is only rewritten correctly when it resolves
    to somewhere under `src/` — `public/` or an absolute `/…` path 404s on
    this site's subpath deploy. Applies to both `![bg](...)` backgrounds and
    plain inline `![alt](...)` images.
14. **Weeks 2, 3, 4, 9 name that week's most common ingredients** with fat,
    protein and calorie figures in the lecture page, feeding directly into
    that week's macro calculator. The other eight lectures stay on their own
    topic and carry no nutrition content — this is not a blanket requirement
    across all twelve weeks.

### Week-by-week additions

| Week | Lecture | Deck | Tutorial (sessions page) |
|---|---|---|---|
| 1 — Why prepare at all | existing, unchanged | rework existing deck to the new detail/image standard | no tutorial — week 1 argues the case, it has no prep decision yet |
| 2 — Vegetables | new, + common vegetables' fat/protein/calories | new | macro calculator exercise |
| 3 — Poultry and fish | existing, + common poultry/fish fat/protein/calories | new | macro calculator exercise |
| 4 — Red meat | new, + common red meat cuts' fat/protein/calories | new | macro calculator exercise |
| 5 — Aromatics and oil | new | new | storage-duration calculator exercise |
| 6 — Kitchen tools and surfaces | new | new | no tutorial — topic has no ingredient or storage decision to exercise |
| 7 — The knife | existing (already carries the round 1 deck; the most detailed) | rework for images/consistency, keep as the detail baseline | no tutorial — knife technique has no calculator to fit |
| 8 — Guest lecture: time management | existing | new | storage-duration calculator exercise |
| 9 — Fruit | new, + common fruit fat/protein/calories | new | macro calculator exercise |
| 10 — Food safety and the cold chain | new | new | storage-duration calculator exercise |
| 11 — Cooking | new | new | no tutorial — past the prep stage |
| 12 — Live test | new | new | no tutorial — the live test is itself the exercise |

Deck detail: each deck should peel its lecture's content into materially more
slides than a one-slide-per-paragraph summary — use the existing
`week-07.deck.mdx` (239 lines, round 1's most developed deck) as the detail
baseline the other eleven should match, not `week-01.deck.mdx`'s original 99
lines.

### Spec tests to add

Alongside the five from round 1, add to `spec/*.test.ts`, reading
`dist/api/index.json`:

6. **Twelve lecture entries exist**, numbered 1–12, no gaps or duplicates.
7. **Twelve decks exist**, one per week, and every lecture's `slides:` field
   resolves to a deck that exists.
8. **Exactly seven sessions entries carry tutorial content** (weeks 2, 3, 4,
   5, 8, 9, 10) **and exactly five carry the no-tutorial disposition** (weeks
   1, 6, 7, 11, 12) — gate this on a checkable frontmatter field (e.g.
   `tutorial: true`/`false`) rather than string-matching prose, since the
   `sessions` schema is `.loose()` and accepts it without touching
   `content.config.ts`.
9. **Weeks 2, 3, 4 and 9 each cite a nutrition source** for their macro
   figures.
10. **Weeks 5, 8 and 10 each cite a storage-safety source** for their
    duration figures.

Test the contract (counts, links, presence of a citation), not exact prose.

### Round 2 definition of done

- Twelve lecture pages, weeks 1–12, no gaps; twelve decks, weeks 1–12, each
  linked from its lecture's `slides:` field.
- Seven tutorial exercise pages (weeks 2, 3, 4, 5, 8, 9, 10) and five
  no-tutorial pages (weeks 1, 6, 7, 11, 12); twelve sessions entries total,
  unchanged from round 1's count.
- Macro/calorie calculator component built, used on weeks 2, 3, 4, 9;
  ingredient data cites USDA FoodData Central.
- Storage-duration calculator component built, used on weeks 5, 8, 10; data
  cites the same USDA FSIS guidance already used in round 1.
- All twelve decks materially more detailed than round 1's originals; images
  live under `src/decks/assets/<week-slug>/`, no broken image paths (the
  build's own broken-link check should catch these).
- Spec tests 6–10 above written and passing; round 1's five spec tests still
  passing.
- `pnpm check` green. `pnpm check:evidence` at least as green as round 1 left
  it — do not introduce a new failure beyond the already-deferred
  `PROCESS.md` item.
- Platform files still unchanged vs `main`: `astro.config.ts`,
  `scripts/pages-base.ts`, `src/content.config.ts`'s four shipped schemas,
  and the Slop branding spread in `src/site-config.ts`.

### Round 2 task breakdown (for `epic-dispatch`)

Use this table as the task template instead of deriving tasks from scratch —
it is more specific than `CLAUDE.md`'s generic field breakdown for this
round.

| # | Task | Scope |
|---|---|---|
| 011 | Lecture content | 8 new lecture pages (2, 4, 5, 6, 9, 10, 11, 12); add nutrition content to existing week 3 and new weeks 2, 4, 9. `src/content/lectures/*` |
| 012 | Tutorial content | Rewrite all 12 `src/content/sessions/*` entries: 7 exercise pages, 5 no-tutorial pages |
| 013 | Macro/calorie calculator | Reusable component + per-week ingredient data files for weeks 2, 3, 4, 9 |
| 014 | Storage-duration calculator | Reusable component + per-week storage data files for weeks 5, 8, 10 |
| 015 | Decks batch A | Weeks 1–4: rework week 1, new 2/3/4 |
| 016 | Decks batch B | Weeks 5–8: new 5/6, rework 7, new 8 |
| 017 | Decks batch C | Weeks 9–12: new 9/10/11/12 |
| 018 | Deck images | Source/generate candidates into `src/decks/assets/<week-slug>/`, wire into decks |
| 019 | Spec tests | Add spec tests 6–10 above to `spec/*.test.ts` |
| 020 | Final integration and check | `pnpm check` across all of the above, fix cross-task breakage, verify definition of done |

Tasks 011 and 012 should land before 013/014 (calculators need the tutorial
pages to render on) and before 015–017 (decks summarise lecture content).
018 depends on 015–017 existing. 019 depends on 011, 012, 013, 014 existing.
020 depends on everything.

## Notes for the executing session

- **Windows build fix already applied.** The theme's `defaultLayout` remark
  plugin matches `path.sep + "pages" + path.sep` against a POSIX-style path, so
  on Windows it never fires and markdown pages build without `<html>`. Every
  markdown page under `src/pages/` therefore names its layout explicitly in
  frontmatter (commit `f1c1ef8`). **Any new markdown page under `src/pages/`
  must do the same**, or it will fail axe with `document-title`,
  `html-has-lang` and `region` violations.
- Work in small commits, one decision each. `PROCESS.md` cites commits, and a
  commit that does four unrelated things cannot be cited for any of them.
- `PROCESS.md` (400–600 words) is a submission requirement and is not covered by
  this epic. It is written last, from the commit history this work produces.
- Run `pnpm check` before claiming anything works; `pnpm check:evidence` before
  shipping. Never weaken a test to make it pass.

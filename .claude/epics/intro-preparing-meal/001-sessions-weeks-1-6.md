---
status: completed
depends_on: []
parallel: true
conflicts_with: []
---
# Sessions weeks 1-6

Write `src/content/sessions/01-getting-started.md` through
`src/content/sessions/06-<slug>.md` (rename/replace the two starter files,
create four new ones) — six session entries for SLOP1640 "Introduction to
Preparing Meal", one per teaching week 1-6. Read `.claude/epics/intro-preparing-meal/epic.md`
in full first — it is the contract. Read `CLAUDE.md` and `src/content.config.ts`
for the sessions schema before writing.

File scope: only `src/content/sessions/*.md` for weeks 1-6. Do not touch
lectures, assessments, people, decks, or pages — those are other tasks.

## Per-week content (from the epic)

- **Week 1 — Why prepare at all.** Case for preparation, argued with real
  figures (time/money spent feeding oneself). State the course thesis: "a
  meal is decided before it is cooked." Say weeks 11-12 will test it. Must
  cite (real, checkable, no invented stats):
  - USDA ERS via BLS American Time Use Survey: https://www.ers.usda.gov/amber-waves/2016/november/americans-spend-an-average-of-37-minutes-a-day-preparing-and-serving-food-and-cleaning-up
  - USDA ERS follow-up: https://www.ers.usda.gov/amber-waves/2020/april/more-americans-spend-more-time-in-food-related-activities-than-a-decade-ago
  - Monsivais, Aggarwal & Drewnowski, *Am J Prev Med* (2014): https://www.sciencedirect.com/science/article/pii/S0749379714004000
  - Drop any cost-of-eating-out claim rather than cite a listicle; use a
    statistical agency or peer-reviewed source if you keep it at all.
- **Week 2 — Vegetables.** Storage: fridge vs not, which shelf/drawer,
  humidity setting, target temperatures in Celsius. Ethylene producers vs
  ethylene-sensitive produce and why separated. Choosing well at market.
  Cuts touched only as they affect keeping quality (full knife content is
  week 7 — do not pre-empt it). Cite USDA/FDA fridge guidance (4 °C or
  below) and crisper humidity behaviour directly, not appliance-blog
  sources — find real USDA/FDA pages via search.
- **Week 3 — Animal protein I: poultry and fish.** Chicken and fish
  primary, duck brief. Anatomy first (muscle use, connective tissue, fat
  distribution), then handling (cold chain, cross-contamination, cleaning,
  portioning), then sourced storage temps/safe holding times. Source from
  USDA FSIS or FDA/FSANZ equivalent — search for real pages, do not invent
  numbers.
- **Week 4 — Animal protein II: red meat.** Beef primary, goat/lamb brief.
  Same structure as week 3 (anatomy → handling → portioning) so the two
  weeks read as one argument. Which cuts suit which treatment, and why that
  follows from anatomy not tradition. Source real storage/safety figures.
- **Week 5 — Spices, aromatics and oil.** What each aromatic contributes
  and how processing changes it: galangal, shallots, onion, garlic.
  Chopped vs crushed vs sliced and why result differs (cell rupture, enzyme
  reactions, surface area). Bay leaf, lime leaf, oregano, basil — when
  added, what heat does to them. Oils: smoke point, flavour, when the
  choice matters. Cite real sources for smoke points and enzyme/cell-rupture
  claims (food-science references, not blogs).
- **Week 6 — The kitchen: tools and surfaces.** Chopping boards, choppers,
  strainers, containers, maintenance/cleaning. Board materials compared
  (wood, marble, plastic) on hygiene, knife wear, particle shedding. Must
  cite, and report honestly including limits (deadpan = accurate, not
  alarmist — the study found no significant effect on mouse fibroblast
  viability at 72h and called for further work):
  - Yadav et al., *Environmental Science & Technology* (2023): https://pubs.acs.org/doi/abs/10.1021/acs.est.3c00924
  - ACS press summary: https://www.acs.org/pressroom/presspacs/2023/june/cutting-boards-can-produce-microparticles-when-chopping-veggies.html

## Constraints that apply to every file you write

- Dates: Mondays from 2027-02-22. Week 1 = 2027-02-22, week 2 = 2027-03-01,
  week 3 = 2027-03-08, week 4 = 2027-03-15, week 5 = 2027-03-22, week 6 =
  2027-03-29.
- Voice: deadpan academic. No exclamation marks, never wink at the fiction,
  never explain the joke. Numbers carry units (°C, minutes/hours, grams).
- Weeks 1-10 must never claim or imply cooking happens — a spec test
  (task 009) asserts this on title/description/`spec:` fields. Cutting,
  storing, choosing, handling are fine; cooking is not.
- Every session file needs at least one `related:` edge (ref to another
  node, e.g. `sessions/02-vegetables` or `lectures/week-03`). Cross-link
  weeks 2/3/4/6/9 where the epic says they connect (e.g. week 2's ethylene
  material pays off in week 9).
- No `STARTER_CONTENT` marker may remain in the two files you're replacing.
- Follow the sessions schema in `src/content.config.ts` exactly (required
  frontmatter keys, date format, etc).
- Every factual claim needs a real source that resolves — link it in the
  content (e.g. a markdown link or a `links:`/`sources` field if the schema
  supports one; otherwise cite in body prose). Never invent a statistic,
  study, or DOI.

## Done when

- Six files exist: `src/content/sessions/01-*.md` .. `06-*.md`, correctly
  dated, zero `STARTER_CONTENT` markers, each with `related:`.
- `pnpm check` build step doesn't error on these files (schema-valid
  frontmatter, no dangling `related:` refs — refs to weeks 7+ are fine to
  add once those files exist, but don't create a dangling ref to a slug
  that will never exist).
- Log progress to `.claude/epics/intro-preparing-meal/updates/001.md` as you
  work; flip this file's `status` to `in_progress` then `completed`.

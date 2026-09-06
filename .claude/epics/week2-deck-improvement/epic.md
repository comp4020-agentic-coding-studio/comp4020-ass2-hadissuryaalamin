# Epic: week-02 deck improvement — cuts, storage, market selection, nutrition

## Context

Week 2 slide deck (`src/decks/week-02.deck.mdx`) is the *Vegetables* week: storage,
ethylene, choosing at market, and the nutrition of four common vegetables. The
user reviewed the built site and asked for a substantially more image-led and
more detailed deck, with cutting technique elaborated, storage and market
selection illustrated, and the nutrition section deepened.

This is a content refinement of an already-shipped epic (`intro-preparing-meal`),
scoped to one deck file and its assets — written epic-style per this repo's
convention so it stands as its own contract. Like `week1-deck-improvement`, it is
one file family with no parallel work to gain, so it does not need
`epic-dispatch`'s multi-agent fan-out.

It is the second in the per-deck improvement series that began with
`.claude/epics/week1-deck-improvement/epic.md` (branch
`worktree-week1-deck-improve`, unmerged at time of writing). Read that epic
first: its §6 diagnoses a deck-wide background-image bug that this epic must
work around, and its §8 establishes the EXIF check that every new image here
must pass.

## Decisions already taken by the user

These were settled in discovery. A build agent must not reopen them.

1. **Scope is the week-02 deck only.** `src/decks/week-07.deck.mdx` is *not*
   touched by this epic, even where §2 below creates overlap with it.
2. **Week 2 takes the cut shapes fully**, with photographs. The existing slide
   `## What this week leaves out` (lines 52–58) — which currently defers all
   cutting to week 7 — is rewritten accordingly. This is a deliberate change to
   the course's internal boundary, made with the user's explicit agreement.
3. **The resulting duplication with week 7 is accepted for now.** Week 7's
   cut-shapes table (`week-07.deck.mdx` lines 210–222) stays where it is. A
   follow-up epic ("deck #7") will add knife photographs to week 7 and resolve
   the overlap then. Do not pre-empt it.
4. **Images must be freely licensed**, sourced and credited exactly as every
   other deck in this repo already does — Wikimedia Commons or another
   explicitly free source, recorded in `SOURCES.md`. No image whose licence does
   not permit reuse, regardless of how well it fits.
5. **Fix the background-image bug for week 2 first**, and confirm by screenshot
   that backgrounds actually paint, before adding new imagery (§1).

## 1. Fix the deck background images first

`week1-deck-improvement` §6 established that astromotion writes
`background-image: url('./assets/<deck>/<file>')` into the slide, resolved
against the page at `/decks/<slug>/`, but copies deck assets to
`dist/src/decks/assets/<deck>/`. Those two paths never meet, so every
`![bg ...]` directive resolves to a 404 and paints nothing. Week 1 was fixed by
writing the path relative to the built page; **decks 2–12 were left affected**.

Week 2 currently has two `![bg ...]` directives, both presumed blank:

- line 8 — `![bg blur:2px brightness:0.5](./assets/week-02/vegetable-market.jpg)`
  on the title slide
- line 143 — `![bg right:30% contain](./assets/week-02/carrots.jpg)` on
  `## Three checks before anything goes in a bag`

Required:

- **Verify the bug before fixing it.** Build, serve, and screenshot
  `/decks/week-02/` with headless Chrome. Confirm the backgrounds are absent and
  that the asset URL 404s. Record what you observed. Do not fix on the strength
  of this epic's say-so — `updates/018.md` of the parent epic reached a
  *different* diagnosis (a Windows-only path-separator quirk), and only a
  screenshot settles which is right.
- Apply the same remedy week 1 used — paths written relative to the built page
  (`../../src/decks/assets/week-02/...`) — and re-screenshot to confirm the
  backgrounds now paint in **both** `astro dev` and `dist`.
- Do not fix decks 3–12. Out of scope; note them as still affected.
- Do not bump the pinned `astromotion` v0.23.0. That is a platform decision and
  `astro.config.ts` is in **Do not touch**.

## 2. Cut shapes, and what each cut costs in storage life

Rewrite `## What this week leaves out` (lines 52–58). It currently says cuts are
noted "only as they affect keeping quality" and that the lecture "does not
pre-empt" week 7. Per decision 2 above, week 2 now covers the cut shapes
properly.

Required content:

- A slide (or short run of slides) presenting the standard cut shapes —
  **julienne, batonnet, brunoise, small dice, chiffonade** — each with a
  photograph, and each with its conventional dimensions.
- The carrot worked through explicitly, since the user named it: what a carrot
  looks like cut each way, and which cut suits which storage intention.
- The storage consequence stated per cut: a cut surface is a wound, and more cut
  surface per gram means faster moisture loss and faster microbial access. This
  is what keeps the material inside week 2's remit rather than week 7's — the
  argument is *keeping quality*, not knife handling.

Sourcing obligations — these bite hard here:

- **Dimensions are factual claims and need a source that resolves.** "Julienne
  is 3 mm × 3 mm × 50 mm" must cite a real culinary reference, not be asserted.
  If no citable source is found for a given cut's dimensions, present the cut
  without numbers rather than inventing them.
- **Storage-life figures per cut are factual claims and need a source that
  resolves.** Do not state "grated carrot keeps 2 days, whole carrot 21 days"
  unless an extension service, food-safety authority or published study is cited
  for it. If no source exists, make the qualitative point (more cut surface
  spoils faster) and omit the numbers. A fabricated figure is worse than a
  missing one — `CLAUDE.md`, content rules.
- Do not describe knife grip, technique, or how to execute a cut. That remains
  week 7's, notwithstanding the table duplication in decision 3.

## 3. Storage imagery

The three storage slides (lines 67–98: `## Not refrigerated`,
`## Refrigerated`, `## Humidity setting`) currently carry **no images at all**.

Required:

- A photograph of a refrigerator crisper drawer, or refrigerated produce
  storage, beside the refrigerated slide.
- A photograph of cool, dark, unrefrigerated storage — potatoes, onions or
  winter squash out of the fridge — beside `## Not refrigerated`.
- Optionally one illustrating the humidity-vent distinction if a suitable free
  image exists; skip rather than force it.

The existing sourced claims on these slides (FDA 4 °C / −18 °C, the University
of Arkansas Cooperative Extension humidity guidance) stay as they are. Images
illustrate them; they do not replace or restate them.

## 4. Choosing well at market — good versus spoiled

`## Three checks before anything goes in a bag` (lines 141–151) states three
checks — firmness, colour, smell — with a single carrot side panel and no
comparative imagery. The user specifically asked for good-versus-not-good
comparisons, giving yellowing pak choy as the example.

Required:

- At least one **side-by-side pair** of photographs: the same or comparable
  produce fresh, and visibly declining. Presented as two images with a one-line
  caption each, not as a side panel — a 30 % side panel is too small to compare
  two things in.
- The caption states what the reader should be looking at, in the course's
  register: what has changed, and what it indicates. Not "look at the bad one".
- Ideally covering colour (the user's yellowing-greens example) and at least one
  of firmness or cut-edge discolouration.

Fallback order if no suitable free photograph exists — pak choy in particular may
simply not be photographed in a spoiled state on Commons:

1. **Substitute a comparable vegetable** where good and declining photographs do
   both exist. A real photograph of a real spoiling vegetable is worth more than
   a drawing of the intended one.
2. If no pairing can be assembled at all, a drawn diagram, clearly labelled as an
   illustration rather than a photograph.
3. Do not present a single photograph as if it were a comparison.

Any claim about *why* a colour change indicates decline (chlorophyll
degradation, senescence) is a factual claim and needs a source that resolves, or
should be stated only descriptively.

## 5. Nutrition — more detail, and fix a real inconsistency

Two separate jobs. Both are required.

**5a. The existing table is inconsistent with the tutorial calculator.** This is
a genuine defect, found during discovery:

| | Deck (lines 165–170) | Calculator (`src/data/macro/week-02.ts`) |
|---|---|---|
| Ingredient count | 4 | **5** (adds broccoli, FDC 170379) |
| Potato entry | "Potato, raw, skin" | "Potatoes, flesh and skin, raw" |
| Potato FDC ID | 170032 | **170026** |
| Potato calories | 58 kcal | **77 kcal** |

Line 178 then claims "the tutorial's macro calculator uses exactly these four
figures". That claim is false on both the count and the potato figure.

Required:

- Verify both FDC IDs against USDA FoodData Central. They may well both be real
  but different foods — potato skin alone versus flesh-and-skin — in which case
  the numbers are each correct and only the *equality claim* is wrong.
- Reconcile so the deck, the lecture (`src/content/lectures/week-02.md`, its
  nutrition section) and the calculator agree. Default resolution: align the
  deck table to the calculator's five ingredients, since the calculator is what
  the tutorial actually runs, and restate line 178 truthfully.
- Whatever is chosen, the sentence describing the relationship between the table
  and the calculator must be true after the change.

**5b. Deepen the section**, per the user's "more detail and various":

- More vegetables — add roughly 3–4 rows beyond the current set, chosen to span
  the families the deck already names (roots and tubers, alliums, leafy greens,
  brassicas) so the table argues the deck's own grouping.
- More nutrients per vegetable — extend beyond calories/fat/protein with
  something like fibre, total sugars or vitamin C, whichever the SR Legacy
  entries carry consistently for the chosen set.
- Every figure per 100 g of the raw, edible portion, with its FDC ID, from USDA
  FoodData Central — the same convention `src/data/macro/week-02.ts` already
  documents. Cross-check each figure before recording it.
- If the calculator is extended to match, `src/data/macro/week-02.ts` may be
  edited; it is not in **Do not touch**. If it is extended, the tutorial that
  consumes it must still work — check the consuming end, not just that the data
  file compiles.

**Constraint:** nutrition figures belong to weeks 2, 3, 4 and 9 only, per the
parent epic's constraint 14. This work must not spread nutrition content into
other weeks.

## Image sourcing — the standing convention

Every new image in this epic follows the process already used across all twelve
decks, and hardened by `week1-deck-improvement` §8:

1. Source from Wikimedia Commons (search + imageinfo API), or another
   explicitly free source. Licence must permit reuse — CC0, public domain, CC BY,
   CC BY-SA are all already present in this repo.
2. **Look at the image before using it.** Commons search ranking is unreliable
   and returns subjects that do not match the query.
3. **Check EXIF for AI-generation tells.** `week1-deck-improvement` §8 rejected
   an image reporting camera model `NIKON Z6_3` — not a model Nikon makes — with
   a placeholder capture timestamp. Do the same check on every file.
4. Resize to roughly 1280 px width via Commons' own thumbnailer. Existing files
   run 73–342 KB.
5. Save under `src/decks/assets/week-02/`, referenced from the deck. Files in
   `public/` or referenced from `/…` 404 on the sub-path deployment.
6. Add one line per file to `src/decks/assets/week-02/SOURCES.md` in the existing
   format:
   `` `filename.jpg` — File:<Commons title> — <permalink URL> — <licence> — <author> (<size>) ``
   Record the resize if one was done.

Nothing in the repo enforces this automatically — no test reads `SOURCES.md`.
It is enforced by a marker, which is why it matters.

## Accessibility and presentation

- Inline `![alt](…)` images become real `<img>` elements and **need alt text**.
  `pnpm build` runs axe over every built page and will fail without it.
- `![bg …](…)` becomes a CSS background and its alt text is discarded — so a
  background image carries no accessible text and must never be the sole carrier
  of information.
- Write the alt text as part of this work. It describes what is in the image, in
  the course's register.
- Captioned full-width images are permitted for the cut-shape and
  good-versus-spoiled comparisons, where a 30 % side panel cannot do the job.
  Elsewhere, keep to the deck's existing forms.
- Captions stay deadpan and carry units: "Carrot, batonnet, 6 mm × 6 mm" rather
  than any commentary on how the vegetable looks.

## Files touched

- `src/decks/week-02.deck.mdx` — background paths (§1), cut shapes (§2), storage
  images (§3), market comparison (§4), nutrition (§5), reading list additions
- `src/decks/assets/week-02/*.jpg` — new sourced images
- `src/decks/assets/week-02/SOURCES.md` — one credit line per new image
- `src/content/lectures/week-02.md` — only its nutrition section, and only as far
  as §5a requires for consistency
- `src/data/macro/week-02.ts` — only if §5b extends the calculator

Not touched: `src/decks/week-07.deck.mdx` (decision 3), decks 3–12,
`astro.config.ts`, `scripts/pages-base.ts`, `src/content.config.ts`,
`src/site-config.ts`, anything under `dist/`.

## Spec constraints this epic must respect

Verified against `spec/course-promises.test.ts` and `spec/data-integrity.test.ts`
during discovery. No spec test constrains image count, slide count or deck
length — imagery is free. These do bind:

- **Weeks 1–10 never claim cooking.** The test matches
  cook/fry/boil/roast/grill/bake/simmer/braise/sear/poach against session and
  lecture `title`, `description` and `spec:` lines. *Slice, chop, dice* are safe.
  Do not add a cooking verb to week 2's `spec:` lines.
- **Week 2's lecture must keep its FoodData Central entry in `links:`.** Any
  nutrition rewrite preserves it.
- **12 lectures, 12 decks, every `slides:` reference resolves.** Do not rename or
  split this deck.
- **Every graph node keeps at least one `related:` edge.**
- No spec test names week 7 or the knife, so decision 3's duplication breaks no
  graded test.

## Definition of done

- Week 2's background images verified broken by screenshot, fixed, and verified
  painting in both `astro dev` and `dist`. Observation recorded.
- Cut shapes covered with photographs and sourced dimensions, framed as a
  storage argument; `## What this week leaves out` rewritten.
- Storage slides carry at least two new photographs.
- At least one genuine side-by-side good-versus-declining comparison, captioned.
- Nutrition table and calculator reconciled; the sentence relating them is true.
- Nutrition section deepened by roughly 3–4 vegetables and at least one further
  nutrient column, every figure carrying an FDC ID.
- Every new image freely licensed, EXIF-checked, credited in `SOURCES.md`.
- No invented dimension, storage-life or nutrition figure anywhere in the deck.
- Alt text on every inline image.
- `pnpm check` green (typecheck, production build with axe and link checking,
  spec tests).
- Deck visually confirmed by screenshotting `/decks/week-02/` on the running dev
  server, at the two viewports markers use. A jsdom-based check cannot see
  layout, overlap or a 404'd background.
- Work committed in small commits, one decision each, so `PROCESS.md` can cite
  them.

## Deliberately deferred

- Week 7 knife and cut photographs, and resolving the cut-shapes duplication
  decision 3 creates. Follow-up epic.
- The background-image fix for decks 3–12, and the upstream `astromotion` bump
  that would fix it properly (pinned v0.23.0 is well behind v0.25.1). Platform
  decision.

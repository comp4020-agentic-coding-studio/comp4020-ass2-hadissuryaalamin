# Epic: weeks 11–12 deck improvement — the two cook weeks

## Context

Fourth in the per-deck improvement series, after `week1-deck-improvement`,
`week2-deck-improvement` and `weeks34-deck-improvement` (all merged to
`main`). User asked for improvement epics across remaining weeks (5–12),
split into pairs matching weeks3-4 shape: 5-6, 7-8, 9-10, 11-12. This is
the 11-12 pair. **Pairing is the only scope decision user actually made
for this epic** — everything else below is this epic's own judgment call,
drafted for review before any build agent touches it.

**This pair is structurally unlike every prior epic in the series.** Weeks
1–10 are preparation-only, and `spec/course-promises.test.ts`'s "never
claims cooking happens in weeks 1-10" test (read in full before writing
this epic) filters explicitly on `(node.meta?.week ?? 0) >= 1 && <= 10` —
**confirmed cooking-verb ban does not extend to weeks 11 or 12.** Week 11
(`Cooking`) and week 12 (`Live test — the public kitchen`) are the course's
two cook weeks, and the thesis they exist to test is "a meal is decided
before anything is cooked" (`CLAUDE.md`): both decks already frame
themselves correctly as *testing weeks 1-10's preparation decisions*, not
new cooking-technique instruction. **No voice or thesis drift found** —
both decks explicitly separate "heat as instrument" from "heat as
subject" and repeatedly say exercise is attribution, not technique. Stated
here so no build agent second-guesses framing; job is
imagery/accessibility/path-bug repair, not content rewrite.

## Setup

`node_modules/` and `dist/` both absent in this worktree (verified).
**Task 001 must run `pnpm install` before any `pnpm dev`, `pnpm build` or
`pnpm check`.** Worktree branches directly from `origin/main` (`486ff9d`,
weeks 1–4 merged) — no stacking needed, unlike earlier epics in this
series that had to stack on each other's unmerged branches.

## Decisions already taken by the user

1. Epic grouping: pairs, 4 epics (5-6, 7-8, 9-10, 11-12) — this epic is
   the 11-12 pair.

## Resolved by judgment (no user sign-off yet — flag before dispatch if wrong)

1. **Both decks' central framing stays untouched.** Confirmed no
   thesis/voice drift (see Context). Epic does not rewrite argument, only
   repairs background-image bug and closes two accessibility gaps.
2. **Only the two informative content images convert to in-flow `<img>`
   with alt text** — the two title-slide background images
   (decorative/atmospheric, same pattern every other week's title slide
   uses) stay as `![bg …]`.
3. **No new imagery mandated.** Both decks are a designed comparison
   exercise, not a "place" or "material" — most slides argue
   procedure/logic (two-batch design, what counts as a result), which
   nothing genuine photographs. Forcing photos onto them would pad the
   deck the way a photo of raw chicken beside a holding-time table would
   have (weeks34's own caution). One optional deepening candidate named in
   §2, pursue only if a real non-forced source turns up — skip rather than
   force, per standing convention.
4. **Nutrition out of scope.** Reserved for weeks 2, 3, 4, 9 only
   (already-established project convention); nothing here adds a table.
5. **No new external citation mandated for week 12.** Its lecture
   (`src/content/lectures/week-12.md`) carries no `links:` field at all,
   but makes no quantifiable/scientific claim (temperatures, timings,
   statistics) — everything it asserts is either procedural (how
   assessment reads the plate) or an internal cross-reference (week 6,
   week 11), both already covered by `related:`. Week 11 already cites two
   USDA/FSIS sources. Stated so a build agent doesn't invent a citation to
   satisfy a non-existent test — `course-promises.test.ts` requires
   FoodData Central citations only for weeks 2/3/4/9 and USDA/FSIS storage
   citations only for weeks 5/8/10; neither rule touches 11 or 12.

## 1. Fix deck background images first — both weeks

Same bug as decks 1 and 5-12 generally (deferred by every prior epic in
this series): `![bg …]` paths written relative to deck source
(`./assets/week-11/…`) but astro copies assets to
`dist/src/decks/assets/<deck>/` and resolves against served page path, so
directive 404s.

Four affected directives:

| File | Line | File referenced | Form |
|---|---|---|---|
| `src/decks/week-11.deck.mdx` | 8 | `frying-pan-cooking.jpg` | title background |
| `src/decks/week-11.deck.mdx` | 87 | `thermometer-cooking.jpg` | `![bg right:30% contain]` |
| `src/decks/week-12.deck.mdx` | 8 | `cooking-competition.jpg` | title background |
| `src/decks/week-12.deck.mdx` | 62 | `plated-presentation.jpg` | `![bg right:32% contain]` |

**Verify by screenshot before fixing**, then rewrite as
`../../src/decks/assets/week-1N/<file>`. Re-verify in both `astro dev` and
production `pnpm build` + `pnpm preview`. Do not touch decks 1, 5-10 —
deferred, same as every prior epic.

## 2. Convert two informative background images to alt-texted in-flow images

Per same rule that drove weeks34's decision 10: `![bg …]` discards alt
text, so a background must never be sole carrier of information.

- **`thermometer-cooking.jpg`** (`week-11.deck.mdx`, currently line 87, on
  "The thermometer decides" slide) — illustrates actual check being taught
  (thermometer against minimum internal temperature). Convert to `<img>`
  with real alt text describing what photo shows (probe placement,
  dial/digital reading), body text before image, sized against fixed
  1280×720 canvas.
- **`plated-presentation.jpg`** (`week-12.deck.mdx`, currently line 62, on
  "How the examination reads the plate") — illustrates plate as evidence
  of preparation decisions, slide's actual argument. Same conversion.
- Two title-slide images (`frying-pan-cooking.jpg`,
  `cooking-competition.jpg`) stay as `![bg …]` — decorative/atmospheric,
  matching every other week's title-slide pattern; converting would be
  churn with no accessibility gain.

**Optional deepening, pursue only if genuinely sourced, do not force:** a
second photograph for week 11 showing two prepared batches or two
finished plates side by side, to make "one stated variable" design
visible rather than only argued in prose. A real, comparably-shot pair
for a specific teaching exercise like this is unlikely to exist on
Commons — search in good faith, skip if nothing matches, exactly as
weeks34's task 011 did for the "good vs bad meat" search and found
nothing.

## Image sourcing — the standing convention

Unchanged from prior epics: Wikimedia Commons (or another explicitly free
source) only; licence must permit reuse (CC0/public domain/CC BY/CC
BY-SA); look at image before using; check EXIF for AI-generation tells;
resize to ~960px wide; save under `src/decks/assets/week-1N/`; one credit
line per file in that week's `SOURCES.md` in existing format.

## Accessibility and presentation

- Real alt text on every informative inline image — axe fails build
  without it.
- Budget against fixed 1280×720 canvas (`.reveal`/`body` are
  `overflow: hidden`, no scroll). Body text before image, not after.
- `.compare` class in `theme.css` exists and reusable if optional §2 pair
  ever sourced — do not duplicate it, do not edit `theme.css` unless a
  lane genuinely needs a new shared rule.

## Files touched

- `src/decks/week-11.deck.mdx`, `src/decks/week-12.deck.mdx`
- `src/decks/assets/week-11/` and its `SOURCES.md`
- `src/decks/assets/week-12/` and its `SOURCES.md`

## Not touched

`src/content/lectures/week-11.md` and `week-12.md` (no factual/citation
gap found — see "Resolved by judgment" item 5), every other deck and
lecture, `src/decks/theme.css` (unless a lane needs a new shared rule for
optional §2 pair), `astro.config.ts`, `scripts/pages-base.ts`,
`src/content.config.ts`, `src/site-config.ts`, `src/course-config.ts`,
`src/content/assessments/the-public-kitchen.md` (assessment weighting out
of scope for every epic in this series), anything under `dist/`.

## Spec constraints this epic must respect

- **Cooking-verb ban does not apply here** — confirmed by reading
  `spec/course-promises.test.ts` directly: `COOKING_PATTERN` is
  `/\b(cook(?:ing|ed|s)?|sauté(?:ing|ed)?|saute(?:ing|ed)?|fry(?:ing)?|fried|boil(?:ing|ed|s)?|roast(?:ing|ed|s)?|grill(?:ing|ed|s)?|bak(?:e|ing|ed|es)|simmer(?:ing|ed|s)?|braise(?:d|ing|s)?|sear(?:ing|ed|s)?|poach(?:ing|ed|es)?)\b/i`,
  scanned only against `sessions`/`lectures` nodes with
  `(node.meta?.week ?? 0) >= 1 && (node.meta?.week ?? 0) <= 10`. Nothing
  in this epic needs the "moist/dry treatment" phrasing dodge earlier
  epics needed.
- **No nutrition or storage-safety citation test touches weeks 11/12** —
  those tests hardcode `nutritionWeeks = [2, 3, 4, 9]` and
  `storageWeeks = [5, 8, 10]` respectively.
- **`related:` edges** — both lectures already have 3 each; nothing here
  removes or weakens one.
- **`tutorial:false` for weeks 11 and 12 already correct** and unaffected
  by this epic (confirmed against round-2 spec test's exact week list:
  `tutorialWeeks = [2,3,4,5,8,9,10]`, `noTutorialWeeks = [1,6,7,11,12]`).
- Decks are not a content collection — no deck prose visible to any spec
  test; only `sessions`/`assessments`/`lectures`/`people` are API nodes.

## Definition of done

1. `pnpm install` run; both background directives verified broken by
   screenshot, fixed, confirmed painting in `astro dev` and a production
   build.
2. `thermometer-cooking.jpg` and `plated-presentation.jpg` converted to
   in-flow `<img>` with real, descriptive alt text; title-slide images
   left as `![bg …]`.
3. No slide clipped against 1280×720 canvas — confirmed by a
   slide-by-slide walk of both decks at 1280×800 and 375×812, with
   `pageerror`/`console` listeners attached and every `img.naturalWidth > 0`.
4. `pnpm check` green: typecheck, production build with axe and link
   checking, all spec tests.
5. `pnpm check:evidence` no worse than it is now.
6. Every other deck/lecture untouched, confirmed by `git diff`.
7. Small commits, one decision each.

## Parallelism plan

Two file families (`week-11.*` vs `week-12.*`), each small (~180 lines, 2
images). Given size, a single lane covering both sequentially is
plausible, but series convention is two lanes for two independent weeks —
kept here for consistency and because image sourcing (optional §2
deepening) is the one genuinely slow, per-week task.

- **Phase 0 — sequential, sole owner.** `pnpm install`; screenshot-verify
  both background bugs; fix all four paths; confirm in dev and `dist`;
  baseline `pnpm check`.
- **Phase 1 — two parallel lanes.** Lane A owns `week-11.*` (deck +
  `assets/week-11/`); Lane B owns `week-12.*`. Each lane converts its one
  bg-image-with-information to in-flow `<img>`, alt-texts it, and
  optionally searches for §2 deepening pair. Neither lane runs `pnpm
  build` or `pnpm check`.
- **Phase 2 — sequential, sole owner.** `pnpm check`; slide-by-slide walk
  at both viewports; `SOURCES.md`-to-file cross-check; `git diff`
  confirmation that no other week was touched; Definition of Done.

## Deliberately deferred

- Background-path fix for decks 1 and 5-10 (owned by other epics in this
  series or left to a platform-level fix).
- Any new imagery beyond the two conversions, unless optional §2 pair is
  genuinely sourced.
- Weeks 5-6, 7-8, 9-10 (separate epics in this series).

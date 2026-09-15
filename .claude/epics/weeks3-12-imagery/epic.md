# Epic: weeks 03–12 deck imagery and layout

## Context

Fifth and final entry in the per-deck improvement series. The four earlier
epics (`week1-deck-improvement`, `week2-deck-improvement`,
`weeks34-deck-improvement`, and the four per-week epics for weeks 5–12) are
all **merged into `main`** as of PRs #1–#8. This epic starts from `main` at
commit `ba13739`, verified green before writing:

```
Checked 48 pages — no accessibility violations.
Checked 48 pages — all internal links respect base.
Copied 51 deck asset(s) to build output.
Checked 12 deck(s) — no structural violations.
No broken links detected.
Test Files 2 passed (2) | Tests 11 passed (11)
```

The user reviewed the built decks in a browser and reported, of weeks 3–6:
**"the pictures are not visible and too small"** and **"the layout is too
plain"**, then asked for the same treatment across **weeks 3–12**, not just
3–6. Weeks 1 and 2 are the reference standard and are **not touched**.

## The diagnosis — read this before changing anything

The earlier epics were not careless. They hit a real constraint and traded the
wrong way, and the trade compounded across eight decks.

Background images (`![bg …]`) **discard alt text**. axe runs during
`pnpm build`, and the project rule is that a background must never be the sole
carrier of information. So each per-week epic converted its informative
`![bg right:32% contain]` split panels into in-flow `<img>` tags with real alt
text. That part was correct and must not be reverted.

But an in-flow `<img>` placed *after* a slide's body text inherits only the
**vertical space left over** on the fixed 1280×720 canvas. `.reveal` and
`body` are `overflow: hidden`, so anything taller is permanently clipped. Each
epic's screenshot verification then correctly found clipping and fixed it the
only way a single-column layout allows — by shrinking `max-height` until the
image fit:

| Deck | Image | Final size | Slide |
|---|---|---|---|
| week-05 | `garlic.jpg` | **75px** | What intact tissue keeps apart |
| week-10 | `meat-thermometer.jpg` | **80px** | Poultry, fish and red meat |
| week-04 | `beef-steak-fresh.jpg` | **90px** | Bright red, then brown |
| week-07 | blade-anatomy SVG | **124px** | Anatomy of a blade |
| week-03 | `fridge-thermometer.jpg` | **140px** | Poultry |
| week-08 | sequencing SVG | **150px** | Deciding the order of work |
| week-03 | `chicken-leg-quarters.jpg` | 170px | Eight-piece breakdown |
| week-06 | `plastic-cutting-board.jpg` | 170px | Plastic |

Week 7's blade-anatomy diagram is the clearest case: it is the centrepiece of
the most detailed week in the course, and it renders 124px tall.

**Week 2 escapes this only by accident** — its image-bearing slides carry two
to four lines of text, so a 260px image fits underneath. Week 1 escapes it
differently, by keeping `![bg right:34% contain]` split panels for images that
are genuinely decorative, where the prose carries all the information.

So the defect is **architectural, not per-image**: single-column slides give
images the leftovers. Raising `max-height` re-introduces clipping. The fix is
to stop stacking text above image.

### The fix already ships in the theme and is completely unused

`astro-theme-university/styles/deck.css` defines, inside
`:where(.reveal .slides) section` (line 115), three classes that **no deck
uses**:

```css
.columns {                                   /* deck.css:472 */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
  width: 100%;
  flex-grow: 1;
}
.split-content { padding: var(--at-slide-padding); }       /* deck.css:481 */
.image-credit { /* absolute, bottom right, 60% white */ }  /* deck.css:508 */
```

Verified unused: `columns`, `split-content` and `image-credit` appear nowhere
under `src/decks/` — every repository hit is a site component (`CardGrid
columns={2}`) or calculator CSS.

`.columns` is a real two-column grid with `flex-grow: 1`, so it takes the
slide's full remaining height. Text in one cell, image in the other, gives the
image roughly **600px wide and ~480px tall** — six times week 5's garlic — and
it keeps the `<img>` tag, so it keeps real alt text. That is the whole fix.

**Raw `<div class="…">` passes through MDX to the slide.** Proven in this
repo: `src/decks/week-02.deck.mdx:238` already wraps two `<figure>` elements in
`<div class="compare">` and renders correctly. `.columns` should behave the
same way, but it is still prototyped and screenshotted before rollout (task
001).

## Decisions already taken by the user

Closed list. Do not reopen without asking.

1. **Scope is weeks 3–12.** Weeks 1 and 2 are the reference and are not
   edited.
2. **Base is `main` with all four outstanding branches merged** (done, PRs
   #5–#8). Do not branch from any `worktree-week*` branch.
3. **Relayout *and* new sourced images** — not layout-only. Weeks 5, 6, 8, 11
   and 12 carry only two or three images each against week 2's eleven, and
   that starvation is half of what "too plain" means.

Resolved by judgment, recorded so no build agent has to guess:

4. **`.columns` is the primary layout primitive**, used in the three-tier
   scheme in §1. Prefer it over raising `max-height`.
5. **Background split panels (`![bg right:N%]`) stay only where the image is
   decorative** and the prose carries every fact — week 1's usage. Any image
   that is the sole evidence for a claim becomes an in-flow `<img>` in a
   `.columns` cell.
6. **Target roughly six to eight images per deck**, matching week 2's density.
   A target, not a quota — skip rather than force (§3).
7. **Prototype before rollout.** Task 001 builds one `.columns` slide,
   screenshots it at both viewports, and confirms it before any lane adopts
   the pattern. The series' standing lesson is that screenshots catch what
   every automated check misses; that applies to a new layout primitive most
   of all.

## 1. The layout scheme — three tiers

**Tier 1 — `.columns`, the workhorse.** Any slide with substantial body text
*and* an informative image:

```mdx
<div class="columns">
<div>

- the slide's existing bullets, unchanged
- sourced claims stay exactly as they are

</div>
<div>

<img src="../../src/decks/assets/week-0N/file.jpg" alt="real alt text" style="max-height: 480px; width: 100%; object-fit: contain;" />

</div>
</div>
```

Blank lines around the inner markdown are required — MDX needs them to parse
the block as markdown rather than raw HTML.

**Tier 2 — `.compare`, for genuine pairs.** Already defined in
`src/decks/theme.css` (flex, `figure { flex: 1 1 0; max-width: 44% }`,
`img { max-height: 19rem }`). Use for two captioned specimens shown together.
Note the child-count maths recorded in
`week5-6-deck-improvement/updates/003.md`: at two children the 44% cap binds;
at three children equal division is already 33%, so three should lay out
without a CSS change. **Three children is unverified by render** — if a lane
uses it, screenshot it.

**Tier 3 — background, decorative only.** Full-bleed `![bg blur:2px
brightness:0.5]` title slides stay exactly as they are. `![bg right:N% contain]`
stays only where the prose is self-sufficient.

astromotion's supported directives (its README, "Marp-inspired background
image syntax"): `![bg]`, `![bg contain]`/`![bg cover]`,
`![bg left:N%]`/`![bg right:N%]`, and filters `blur:`, `brightness:`,
`saturate:`.

**If `.columns` alone proves insufficient**, task 001 may add *one* narrow
helper class to `src/decks/theme.css` — that file is shared by all twelve
decks, so only task 001 touches it, and only once, before the lanes start.

## 2. Per-week targets

Each lane owns one pair of weeks. "Image-free sections" are slides that
currently carry no image at all and are candidates, not obligations.

### Week 3 — poultry and fish (26 slides, 8 images)
Relayout-heavy; sourcing is largely done. Too small: `fridge-thermometer`
140px, `chicken-leg-quarters` 170px, `fish-gill-eye-check` 190px,
`fish-counter-ice` 190px, `chicken-thigh` 220px, `salmon-fillet` 220px. Only
`salmon-myotomes` (320px) is adequate. Image-free: *Duck, briefly*; *Fish
anatomy* (prose only — a labelled myotome diagram would carry it); *What the
grading standard adds*; *Cold chain*; *Cross-contamination*; *Portioning*.

### Week 4 — red meat (23 slides, 8 images)
Two three-up rows already sit at 190px each (`beef-cuts-diagram.png` +
`beef-shank` + `beef-tenderloin`; `beef-rib-roast` + `ground-beef`) — the
clearest `.columns`/`.compare` candidates in the course. `beef-steak-fresh` at
90px. Image-free: *What follows from that*; *Goat and lamb, briefly*;
*Treatment follows anatomy*; *Portioning*; *What actually indicates spoilage*.

### Week 5 — aromatics and oil (19 slides, 3 images) — most starved
`garlic.jpg` at **75px** is the worst image in the course. Whole sections carry
nothing: *Leaf aromatics* (two slides on bay, lime leaf, oregano and basil —
four named subjects, all abundantly photographed on Commons); *Chopped,
crushed, sliced* (a table with no visual — but
`week5-6-deck-improvement/updates/002.md` records that a matched three-state
garlic set could not be sourced; respect that finding and consider a
`.compare` two-state fallback); *Not a fixed constant*; *When the choice
matters*.

### Week 6 — tools and surfaces (18 slides, 2 images) — most starved
`plastic-cutting-board` 170px; `wood-cutting-board` is title background only,
so the *Wood* slide has no image despite a board photo sitting in its own asset
folder. Image-free: *The inventory* (four named tool categories); *Three
materials, no outright winner*; *Wood*; *Marble and other hard stone*; *The
Yadav et al. (2023) finding*; *Wood board maintenance*.
**Known-hard:** `week5-6-deck-improvement/updates/004.md` records an exhaustive
negative Commons search for a marble/stone board —
`Category:Cutting_boards` has ten subcategories, none marble or stone. Do not
repeat that search from scratch; apply the §3 fallback ladder.

### Week 7 — the knife (20 slides, 3 images + 1 SVG)
The blade-anatomy SVG at **124px** is the priority fix — it is already
`viewBox="0 0 700 240"` and scales losslessly, so a `.columns` cell or a
full-width slide costs nothing but layout. Image-free: *Edge angle and hardness
trade off*; *Steel and hardness*; *Typical dimensions*; *Balance*; *Grip*;
*The standard cuts*; *Maintenance schedule*.

### Week 8 — time under service (17 slides, 2 images + 1 SVG)
Sequencing SVG at 150px. Image-free: *Finished ahead of time*; *Stable, not
finished*; *Deliberately left undone*; *Closing the loop on week 1*.
**Constraint:** the week 8 guest lecturer is a fictional character. Never use a
photograph of a real, identifiable chef, and never caption an image in a way
that implies a real person teaches here.

### Week 9 — fruit (22 slides, 3 images)
`apple.jpg` is title background, `bananas.jpg` a `bg right` panel,
`oranges.jpg` a plain-markdown image. Climacteric versus non-climacteric is a
natural `.compare` pair. Image-free: *Counter only*; *Counter first, then
refrigerator*; *Refrigerator from the start*; *The link back to week 2*;
*Ripeness is read fruit by fruit*; *Buying underripe is a decision*;
*Non-climacteric offers no such choice*.

### Week 10 — food safety and the cold chain (20 slides, 3 images)
`meat-thermometer` at **80px**, second worst in the course. *The four-step
framework* names four steps and shows one photograph — a four-up or `.columns`
treatment fits exactly. Image-free: *The range, and how fast it works*; *The
two-hour rule*; *Worked example*; *One argument, not four pieces of advice*.

### Week 11 — cooking, the controlled comparison (17 slides, 2 images)
The two-batch design is the week's whole argument and has no visual;
`.compare` is the obvious treatment. Image-free: *Two batches, one stated
variable*; *Everything else held identical*; *What the variable can be*; *Why
colour and time are not reliable*; *Recording the result*.

### Week 12 — the live test (18 slides, 2 images)
`plated-presentation` 220px. Image-free: *The test, repeated once, live*;
*Preparation, not the plate in isolation*; *Right for the wrong reason*; *What
week 6 predicted*; *Why a clock and an audience are a real test*.

## 3. Image sourcing — the standing convention

Carried forward verbatim. Nothing automated enforces any of this; a marker
does.

1. Source from **Wikimedia Commons** (search + imageinfo API) or another
   explicitly free source. Licence must permit reuse: CC0, public domain,
   CC BY, CC BY-SA.
2. **Look at the image before using it.** Commons search ranking is unreliable
   and returns mismatched subjects — week 5 rejected a "chopped garlic" file
   that was a Zuppa Toscana photograph.
3. **Check EXIF for AI-generation tells.** Week 1 rejected a file reporting
   camera model `NIKON Z6_3`, which does not exist, timestamped
   `2024:01:01 00:00:16`.
4. **Resize to ~960px wide.** 1280 overflows the slide.
5. Save under `src/decks/assets/week-0N/`.
6. One credit line per file in **that week's** `SOURCES.md`, in the existing
   format, recording any resize:

   `` `filename.jpg` — File:<Commons title> — <permalink URL> — <licence> — <author> (<size>) ``

**The fallback ladder, when no honest image exists:**

1. a comparable substitute subject where the real photograph exists — prefer
   this;
2. a drawn diagram or hand-authored SVG, clearly labelled as an illustration
   (week 1's bar chart and week 7's blade anatomy are the precedents);
3. **skip, and record the skip in the update note.** Never present a single
   photograph as if it were a comparison, and never force a mismatched image.
   Three documented skips already exist in this series and were the right call.

**Alt text describes what the photograph actually shows**, not what the slide
wishes it showed. Week 6's plastic-board alt text is the precedent: the slide
argues knife scarring, the photograph shows none, and the alt text says what is
actually there.

## 4. Accessibility and the fixed canvas

- Every informative image needs **real alt text** — axe runs during
  `pnpm build` and fails the build without it.
- `![bg …]` discards alt text and can never be the sole carrier of a fact.
- **The canvas is 1280×720 and does not scroll.** Reveal.js renders onto that
  fixed canvas and scales it with CSS `transform: scale()`, so layout is
  pixel-identical at every viewport and overflow is permanent clipping.
- **`pnpm check` cannot see image clipping.** astromotion's own
  `deck-check.mjs` sets
  `TEXT_SELECTOR = "h1, h2, h3, h4, h5, h6, p, ul, ol, pre, table, blockquote, dl"`
  and states in its own comment: *"Backgrounds, split-image panels and
  decorative art bleed off the canvas by design, so only text-bearing elements
  are measured for `overflow`."* Images and SVGs are deliberately excluded.
  **Screenshot verification is mandatory, not optional.** Four image-clipping
  defects in this series were found only that way.
- A verification script must measure canvas-relative: select the active slide
  as `.reveal .slides > section.present`, compute `scale = box.height / 720`,
  navigate with one-based hashes (`location.hash = "#/N"`), await
  `document.fonts.ready`, and allow a 4px tolerance. It must attach `pageerror`
  and `console` listeners and assert `img.naturalWidth > 0` — a broken page
  still returns 200 and still passes a build.
- **Asset paths differ by image form. Follow the form, not a blanket rule:**
  - `![bg …]` directives → `../../src/decks/assets/week-0N/file.jpg`
  - raw `<img src>` tags → `../../src/decks/assets/week-0N/file.jpg`
  - plain markdown `![alt](./assets/week-0N/file.jpg)` → correct as written;
    Astro rewrites it at build. `week-02.deck.mdx:48` and week 9's
    `oranges.jpg` both prove this. Rewriting these churns working lines.
- The local preview server serves under the Pages base path
  (`/comp4020-ass2-hadissuryaalamin/`); the bare root 404s.

## 5. Spec constraints

Both spec files read only `dist/api/index.json` and `dist/api/<id>.json`.
**Decks are not a content collection, so no deck prose is ever visible to any
test.** This epic is deck-only, which keeps it clear of every live hazard — but
the hazards still bind if a lane decides to touch a lecture or session file:

1. **The cooking-verb test** asserts weeks 1–10 never claim cooking. It scans
   the `title`, `description` and `spec[]` of `sessions` and `lectures` nodes.
   The regex covers `cook`, `sauté`, `fry`, `boil`, `roast`, `grill`, `bake`,
   `simmer`, `braise`, `sear`, `poach` and inflections. `slice`, `chop`,
   `dice`, `portion` and `treatment` are safe.
2. **The FoodData Central citation test** matches `/FoodData Central/i` against
   each `links[].label` or `links[].url` for weeks 2, 3, 4 and 9. The URLs do
   not contain the string, so it passes on **label text only** — do not shorten
   those labels.
3. **Every graph node needs at least one `related:` edge.** Week 3's lecture
   has exactly one.
4. Twelve lectures and twelve decks, and every `slides:` value must resolve to
   a built `dist/decks/week-0N/index.html`. **Do not rename, split, add or
   remove a deck file.**

**Pre-existing, not this epic's to fix:** `pnpm check:evidence` fails on
`PROCESS.md`'s template comment and two placeholder commit hashes. This epic
must not add a *new* evidence failure but cannot be gated on that going green.

## Definition of done

1. Task 001's `.columns` prototype screenshotted at 1280×720 and 375×812 and
   confirmed before any lane adopts it.
2. **No image in weeks 3–12 renders below 200px tall** unless it is
   deliberately a small inline mark, and no image in the diagnosis table above
   remains at its recorded size.
3. Every deck in weeks 3–12 uses at least one layout beyond the default single
   column — `.columns`, `.compare`, or a deliberate full-bleed.
4. Weeks 5, 6, 8, 11 and 12 each carry **at least six images**, or a recorded
   skip explaining why the sixth could not be sourced honestly.
5. Week 7's blade-anatomy SVG and week 8's sequencing SVG render at a size
   where their labels are legible.
6. Every new image freely licensed, visually inspected, EXIF-checked, ~960px
   wide, alt-texted, and credited one line per file in the right week's
   `SOURCES.md`. Files and credit lines match one-to-one in both directions.
7. **No slide clipped against the 720px canvas** — confirmed by a
   slide-by-slide walk of all ten decks at 1280×720 and 375×812, with
   `pageerror`/`console` listeners attached and every `img.naturalWidth > 0`.
8. `pnpm check` green: typecheck, production build with axe and link checking,
   astromotion deck-check, and all spec tests.
9. `pnpm check:evidence` no worse than it is now.
10. `src/decks/week-01.deck.mdx` and `src/decks/week-02.deck.mdx` untouched,
    confirmed by `git diff`.
11. Every sourced claim, figure, table and citation already in these decks is
    unchanged. This epic adds imagery and changes layout; **it does not rewrite
    content.**
12. Small commits, one decision each.

## Parallelism plan

**Phase 0 (task 001) — sequential, sole owner.** Prove the pattern, own
`theme.css`, baseline the check.

**Phase 1 (tasks 002–006) — five parallel lanes**, each owning one pair of
weeks and touching nothing outside it:

| Task | Lane | Deck files | Assets |
|---|---|---|---|
| 002 | A | `week-03`, `week-04` | `assets/week-03/`, `assets/week-04/` |
| 003 | B | `week-05`, `week-06` | `assets/week-05/`, `assets/week-06/` |
| 004 | C | `week-07`, `week-08` | `assets/week-07/`, `assets/week-08/` |
| 005 | D | `week-09`, `week-10` | `assets/week-09/`, `assets/week-10/` |
| 006 | E | `week-11`, `week-12` | `assets/week-11/`, `assets/week-12/` |

Each week's `SOURCES.md` is its own file, so lanes never share one.

**Genuinely contended — the rules that make the fan-out safe:**

1. **`src/decks/theme.css`** — one file, all twelve decks. Task 001 owns it.
   No lane edits it. Lanes size images with per-image inline styles.
2. **`dist/` and `.astro/`** — the real hazard. Two agents running `pnpm build`
   concurrently in one worktree clobber each other's `dist/`, and the spec
   tests read `dist/api/index.json`. **One build at a time.** No lane runs
   `pnpm build` or `pnpm check`; lanes screenshot against their own `astro dev`
   on distinct ports.
3. **The git index** — concurrent commits race on `.git/index`. Each lane
   stages only its own paths.
4. **Dev-server ports** — several worktrees already hold listeners on
   4321–4324. Each lane binds its own port and verifies which worktree a
   listener belongs to before killing anything.

**Phase 2 (task 007) — sequential, sole owner.** The only production build in
the epic.

**Where the parallel win is:** image sourcing — Commons search, visual
inspection, EXIF checks, resizing — is the slowest work here and is entirely
per-week.

## Files touched

- `src/decks/week-03.deck.mdx` … `src/decks/week-12.deck.mdx` (ten files)
- `src/decks/assets/week-03/` … `week-12/` and each `SOURCES.md`
- `src/decks/theme.css` — **task 001 only**, and only if genuinely needed

## Not touched

`src/decks/week-01.deck.mdx`, `src/decks/week-02.deck.mdx` and their assets.
All lecture, session and assessment content — this epic changes no prose and no
figure. `src/data/macro/`. `astro.config.ts`. `scripts/pages-base.ts`.
`src/content.config.ts`. `src/site-config.ts`. `src/course-config.ts`. Anything
under `dist/`. The pinned `astromotion` version. `package.json` and
`pnpm-lock.yaml` (they show a phantom CRLF diff with empty content — never
stage them).

## Deliberately deferred

- Weeks 1 and 2, which are the reference standard.
- The `beef-cuts-diagram.png` "Shankle" misspelling, twice.
- The upstream astromotion fix for the `![bg …]` asset-path bug; all twelve
  decks now carry the local workaround.
- `PROCESS.md`'s template comment and its two placeholder commit hashes.

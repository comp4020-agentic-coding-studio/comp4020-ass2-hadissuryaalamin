---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Week 5 (Lane A): garlic/oil conversion and chopped-crushed-sliced imagery

Lane A owns everything `week-05*`. May run concurrently with Lane B
(003/004, the week-06 equivalents) — disjoint files. Does not run
`pnpm build`/`pnpm check` itself — dev-server screenshots only, on a port
distinct from Lane B's.

## Scope

Files: `src/decks/week-05.deck.mdx`, `src/decks/assets/week-05/`, its
`SOURCES.md`.

- Convert `garlic.jpg` (the "What intact tissue keeps apart" slide) from
  `![bg right:32% contain]` to an in-flow `<img>` with real alt text,
  moved to after the slide's body text (convention: body before image).
  The photo (Commons "Garlic bulbs and cloves.jpg") shows two whole bulbs,
  one peeled ivory clove and one unpeeled purple-skinned clove — write alt
  text from what is actually visible, not from the Commons title alone.
- Convert `olive-oil.jpg` (the "How it degrades with use" slide,
  smoke-point section) the same way. It shows a bottle of olive oil beside
  a small bowl of poured oil (a branded product photo — the label is
  visible; alt text should describe the photo, not promote or omit-dodge
  the brand, deadpan and neutral).
- **New image opportunity, not committed:** a photo (or `.compare` set)
  showing garlic or onion chopped/crushed/sliced side by side, for the
  table at lines 86-100. This was researched but not completed in the
  epic-decomposition pass (see note below) — pick it up here if a good
  source can be found and downloaded, or record the skip.
- Leaf-aromatics section (lines 108-137): epic explicitly treats
  image-free as an acceptable, lower-priority outcome for a timing
  argument a single photo represents poorly. Skip unless a genuinely
  strong source turns up.

## Note carried from epic decomposition: chopped/crushed/sliced research so far

Wikimedia Commons `intitle:` searches for chopped/crushed/sliced garlic and
onion turned up:

- "File:Chopped Garlic (8364571106).jpg" — **disqualified**: its own Commons
  description says it actually depicts "Zuppa Toscana," not a garlic
  close-up (a Commons search-ranking trap, not a chopped-garlic photo at
  all).
- "File:Fresh chopped garlic on wooden board.jpg" (CC BY-SA 4.0, Nikowsk,
  <https://commons.wikimedia.org/wiki/File:Fresh_chopped_garlic_on_wooden_board.jpg>)
  — real chopped garlic on a wood board, but Commons itself flags the file
  as underexposed (hidden category "Underexposed images"). Usable only if
  contrast/levels correction is judged acceptable, or as a last resort.
- "File:Ground-Garlic 31534-480x360 (4904476989).jpg" — **disqualified on
  inspection**: categorised under "Garlic powder," i.e. a dried spice
  product, not fresh cut garlic. Looked like a series match to the crushed
  photos below by filename pattern; it is not the same subject.
- "File:Crushed-Garlic 32885-480x360 (4904476989).jpg" and
  "File:Crushed-Garlic 52695-480x360 (4905066500).jpg" — same photographer
  (Emilian Robert Vicol, Com. Bălănești, Romania), same CC BY 2.0 license,
  same "480x360" Flickr-derived series. Both genuinely show crushed garlic.
  No matching "Chopped-Garlic" or "Sliced-Garlic" entry exists in the same
  numbered series (checked directly) — so this is at best a real crushed-
  garlic source, not a matched three-state set.
- No fully vetted chopped/sliced candidate was confirmed. If none can be
  found to the series' own standard (real photograph, not stock composite,
  visually inspected, EXIF-checked, no AI tells), **skip is the correct,
  epic-sanctioned outcome** — record it plainly rather than forcing a weak
  substitute.

## Image sourcing convention (unchanged from weeks 1-4)

Wikimedia Commons (search + imageinfo) or other explicitly free source; CC0/
PD/CC BY/CC BY-SA; look at the image before using it; check EXIF for AI-tells;
resize ~960px wide; save to `src/decks/assets/week-05/`; one credit line per
file in `src/decks/assets/week-05/SOURCES.md` in the existing format.

## Done when

`garlic.jpg` and `olive-oil.jpg` converted to in-flow `<img>` with real alt
text, moved after body text, nothing clipped against the 720px canvas
(verify by screenshot at 1280×800 and 375×812). Chopped/crushed/sliced
imagery either sourced-and-credited properly or explicitly recorded as
skipped with reasoning. `SOURCES.md` still 1:1 with asset files. Flip
status, log to `.claude/epics/week5-6-deck-improvement/updates/002.md`.

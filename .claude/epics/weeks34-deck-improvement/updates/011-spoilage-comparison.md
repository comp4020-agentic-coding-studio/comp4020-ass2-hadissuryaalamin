# Task 011 — week 4: real spoilage-indicator comparison (follow-up to 008)

## The ask

Follow-up to 008's "Choosing well" oxidation-vs-spoilage section. The client
clarified that what they actually want is a genuine fresh-vs-spoiled raw meat
photo **pair** built around a real spoilage indicator — texture/slime, mould,
or visible breakdown, **not** colour — additive to, not a replacement for,
008's existing oxidation-not-spoilage argument (which stays untouched).

## What was searched

Wikimedia Commons, via the Commons search API (`list=search`, `srnamespace=6`)
and `imageinfo` lookups for promising hits, across more than two dozen query
variants, run in several batches:

- `spoiled meat slime`, `meat spoilage`, `rotten meat`, `moldy meat`,
  `moldy chicken`, `mold on meat`, `rancid meat`, `meat gone bad`,
  `discolored meat`, `freezer burn meat`, `sell by date meat`,
  `spoiled steak`, `spoiled ground beef`, `raw chicken spoiled`,
  `pork spoiled raw`, `slimy chicken`, `slimy chicken breast`,
  `chicken meat slime`, `spoiled raw meat`, `bad meat package`,
  `meat freshness comparison`, `spoilage indicators meat`,
  `meat spoilage signs`, `meat spoilage diagram`, `food spoilage infographic`,
  `USDA meat spoilage`, `food safety infographic meat`,
  `how to tell meat spoiled`, `meat quality check slime`, `ropiness meat`,
  `sticky meat surface`, `tacky meat`, `fresh and spoiled meat`,
  `before and after meat spoilage`, `meat decomposition bacteria`,
  `chicken slime spoilage`, `beef sliminess`.
- Category browsing: `Category:Meat` (no subcategories returned),
  `Category:Food spoilage` (does not exist as a Commons category),
  `Category:Rotten food` (empty).
- Openverse (`api.openverse.org`, CC-licensed aggregator covering Flickr and
  other sources — the "another explicitly free/licensed source" the task
  allowed): `spoiled meat`, `moldy meat raw`, `slimy chicken breast`,
  `rotten meat texture`, `meat spoilage`, `off meat`.

## What turned up, and why each candidate was rejected

Four candidates reached the point of an `imageinfo`/detail check; none
qualified:

- **File:Moldy chicken.JPG** — the only direct "moldy [meat]" hit on Commons.
  Its own description reads "Cooked chicken that had been left in the
  refrigerator for too long" — **cooked**, not raw, so it doesn't match this
  deck's raw-meat argument (same wrong-subject rejection reason 008 used for
  a cooked steak).
- **File:Mold surface with a piece of meat.jpg** — a macro photography
  submission (Russian Science Photo Competition 2019, category `Mold
  (fungus)`) of a mould colony's surface texture, with a piece of meat only
  as substrate. Its own description is "Surface of mold", not a food-safety
  illustration of meat spoilage; no second image exists to pair it with.
- **File:Mouldy meat sauce.jpg** — a **cooked** ground-meat sauce ("Homehtunut
  jauhelihakastike" / "mouldy ground-meat sauce" in the original Finnish
  description), not a raw cut, and a single unpaired image.
- **File:Refrigerator Infographic (16835927021).jpg** — a real food-safety
  infographic, but about refrigerator temperature and juice containment, not
  about spoilage signs (no slime/odour/date content); doesn't fit rung 2's
  "diagram illustrating real spoilage signs" requirement.

No search turned up a second, matching "fresh" counterpart for any of the
above, so no matched **pair** was ever in reach even before the individual
rejections above — and no clean, correctly-licensed diagram naming the real
FSIS-style spoilage checks (slime/tackiness, off odour, date vs. holding time)
turned up either.

## Outcome: rung 1 and rung 2 both fail; nothing added

Per the task's fallback ladder: rung 1 (a genuine matched fresh/spoiled raw
meat pair, texture-based) and rung 2 (a labelled spoilage-signs diagram) were
both searched for in good faith and both came up empty. Rung 3 for this task
is explicit — "if neither pair nor diagram exists, do not add an image at
all" — so, consistent with how tasks 003 and 004 skipped imagery for slides
where nothing suitable existed rather than forcing a mismatched substitute,
**no image was added and `src/decks/week-04.deck.mdx` was not touched.**

008's existing "What actually indicates spoilage" slide already carries the
three real FSIS spoilage checks (slime/tackiness, off odour, date vs. holding
time) as text only, with no image — that stays exactly as it is. This task
adds nothing on top of it, because nothing found was good enough to add.

## Scope discipline

No files were modified. `src/decks/week-04.deck.mdx`,
`src/decks/assets/week-04/SOURCES.md`, `src/decks/theme.css`, and
`week-03*` were all left untouched — confirmed via `git status` showing no
changes from this task (the only untracked content in the worktree,
`scripts-tmp/`, predates this task and belongs to a prior task's
verification scratch files, not this one).

## Status

`011-spoilage-comparison.md` — no corresponding task file existed under
`.claude/epics/weeks34-deck-improvement/` (numbering ends at
`010-verification-integration.md`); this is a direct follow-up dispatched
after the epic's own verification/integration task, so there is no task file
to flip `pending` → `completed`. This update file is the only record.

---
status: completed
depends_on: [001]
parallel: false
conflicts_with: [001, 003]
---
# Phase 1: week 9 nutrition table reconcile to five fruits (sole owner)

Solo task, runs second, alone, once Phase 0 is complete.

## Scope

Files: `src/decks/week-09.deck.mdx` (nutrition section), `src/content/lectures/week-09.md`
(nutrition section only), `src/data/macro/week-09.ts` (read/verify only).

- The calculator (`src/data/macro/week-09.ts`) carries five ingredients;
  the deck and lecture tables carry three (apple, banana, orange), missing
  strawberry (FDC 167762) and mango (FDC 169910) — both already named by
  the week 9 tutorial session (`src/content/sessions/09-fruit.mdx`).
- **Verify all five figures fresh against USDA FoodData Central before
  touching anything** — do not trust the epic's cited numbers or
  training-data recollection uncritically. Record the verification method
  and result in `updates/002.md`.
- Grow both tables (deck lines ~187–191, lecture lines ~105–109) from three
  rows to five, adding strawberry and mango with their FDC IDs.
- Rename the `Source` column header to `FDC ID` in both tables (decision 6
  — the column's content was already an FDC ID in every case).
- Reword the "Why this week carries a number" framing paragraph (deck
  ~172–181, lecture ~97–103) — it currently says "one apple, one banana,
  one orange," which becomes false once the table has five rows. Reword to
  name or count all five, ideally echoing the tutorial session's own
  climacteric/non-climacteric framing (apple/banana/mango vs.
  orange/strawberry) for consistency.
- Reword the closing sentence in both places (deck ~204–205, lecture
  ~111–114) so it states the tutorial exercise uses all five calculator
  entries, not "these three... and any others."
- **No `spec:` change needed** — week 9's lecture `spec:` line ("at least
  two fruits named this week, with a source") stays true as a subset.
- Do not add an iron column (decision 5 — no myoglobin/iron narrative has
  been set up for fruit; adding one would repeat week 2's original
  "column for its own sake" mistake).
- Do not touch `src/content/sessions/09-fruit.mdx` — it already correctly
  names all five fruits; the deck/lecture were what was out of sync.
- Do not touch week 10 in this task — no nutrition content is added there.
- Keep at least one `links[].label` in the lecture with the literal string
  "FoodData Central" intact.
- **Plan for the table needing its own slide, separate from any image**,
  if five rows risk overflowing the fixed 1280×720 canvas alongside the
  `oranges.jpg` image that previously shared its slide — verify by
  screenshot, matching how weeks 3/4 kept their nutrition table and its
  accompanying image on separate slides.

## Done when

Both tables show five rows with correct, freshly-verified figures; header
renamed `FDC ID`; framing paragraph and closing sentence true after the
change; no iron column added; `src/data/macro/week-09.ts` confirmed
unchanged (no wrong figure found); no slide clipped. Flip status, log to
`.claude/epics/week9-10-deck-improvement/updates/002.md`.

## Status note

**Content drafted and FDC-verified, not yet applied or build-checked.** All
five figures were re-verified fresh against the USDA FoodData Central API
in this session (see `updates/002.md` for each value and the method) and
the deck/lecture text was rewritten accordingly. The same harness bug
described in task 001's status note blocked every shell command, so
`pnpm check` (typecheck/build/spec tests) has not been run against this
change and the rewritten files are saved under the agent's scratch dir
rather than this worktree's real paths. Status stays `in_progress` until a
session that can execute shell commands here applies and verifies it.

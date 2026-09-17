---
status: pending
depends_on: [002, 003, 004, 005, 006]
parallel: false
conflicts_with: []
---
# Phase 2 — verification and integration

Read `epic.md` first, especially §4 (accessibility and the canvas), §5 (spec
constraints) and the Definition of Done. Then read `updates/001.md` through
`updates/006.md` — every lane's skip decisions and measurements are recorded
there, and you are checking their claims, not repeating their work.

**You own the only production build in this epic.** No lane has run
`pnpm build` or `pnpm check`. Confirm all five lanes report `status:
completed` before you start.

## Scope

- Run the checks; make small fix-ups only
- `.claude/epics/weeks3-12-imagery/updates/007.md`

**Do not reopen a lane's content decisions.** If a lane skipped an image and
recorded why, that stands. Your job is to catch what the lanes could not see
from inside their own slice.

## What to do

1. **`pnpm check`** — typecheck, production build with axe and link checking,
   astromotion deck-check, and the spec tests. Record the output.

2. **The slide-by-slide clipping walk — the part that matters most.**
   `pnpm check` **cannot see image clipping**: astromotion's `deck-check.mjs`
   sets
   `TEXT_SELECTOR = "h1, h2, h3, h4, h5, h6, p, ul, ol, pre, table, blockquote, dl"`
   and deliberately excludes images and SVGs. Four image-clipping defects in
   this series were found only by screenshot.

   Walk **all ten decks (weeks 3–12)** at 1280×720 and 375×812. The script
   must:
   - select the active slide as `.reveal .slides > section.present`
   - convert to canvas units with `scale = box.height / 720`
   - navigate with one-based hashes (`location.hash = "#/N"`)
   - await `document.fonts.ready` before measuring
   - allow a 4px tolerance
   - attach `pageerror` and `console` listeners
   - assert `img.naturalWidth > 0` on every image

   Serve under the Pages base path (`/comp4020-ass2-hadissuryaalamin/`); the
   bare root 404s.

   **Delete the script and its screenshots before committing** — they are
   scratch artifacts. If you install a browser driver to run it, remove it from
   `package.json` and `pnpm-lock.yaml` afterwards and confirm via `git diff`
   that it did not leak into the commit.

3. **Check the Definition of Done point 2 directly:** no image in weeks 3–12
   renders below 200px tall unless deliberately a small inline mark, and none
   of the eight images in `epic.md`'s diagnosis table remains at its recorded
   size. This is the user's actual complaint — verify it rather than assuming
   the lanes handled it.

4. **`SOURCES.md`-to-file cross-check, per week.** Every file on disk has
   exactly one credit line, and every credit line names a file that exists. No
   orphans in either direction. There were 51 assets at `ba13739`.

5. **`git diff` confirmation** that `src/decks/week-01.deck.mdx` and
   `src/decks/week-02.deck.mdx` are untouched, that no lecture, session or
   assessment file changed, and that **no sourced claim, figure, table or
   citation was altered** in any deck. This epic adds imagery and changes
   layout; it does not rewrite content. Spot-check each lane's diff against its
   update note.

6. **`pnpm check:evidence`** — record the result. It fails at baseline on
   `PROCESS.md`'s template comment and two placeholder commit hashes. That is
   pre-existing and deferred; confirm only that this epic added no *new*
   evidence failure.

7. Confirm `package.json` and `pnpm-lock.yaml` are unstaged — they carry a
   phantom CRLF diff with empty content.

8. Walk the full Definition of Done, point by point, and record the verdict on
   each.

## Done when

- `pnpm check` is green and the output is recorded.
- All ten decks pass the clipping walk at both viewports with zero page errors,
  zero canvas overflow and every image loaded.
- Definition of Done points 1–12 are each confirmed or explicitly flagged.
- Scratch scripts, screenshots and any temporary dependency are removed, with
  `git diff` confirming they did not leak into the commit.
- `updates/007.md` records every command's output, every fix-up made, and any
  defect found that was left unfixed with a reason.

---

## Already verified by the coordinating session (2026-09-16)

Recorded so this task does not re-derive it. All of the following was checked
**after lanes A and B completed**, at branch commit `4e356c4`. Re-check only if
later lanes change these files.

`pnpm check` — **green**, run by the coordinating session because lanes are
forbidden from building:

```
Checked 48 pages — no accessibility violations.
Checked 48 pages — all internal links respect base.
Copied 58 deck asset(s) to build output.
Checked 12 deck(s) — no structural violations.
No broken links detected.
Test Files 2 passed (2) | Tests 11 passed (11)
```

- **`SOURCES.md` 1:1 confirmed** for every changed week: week 3 8 files/8
  credits, week 4 8/8, week 5 7/7, week 6 5/5.
- **Referenced assets exactly equal on-disk assets** for weeks 3–6 — no
  orphans, nothing missing.
- **Weeks 1 and 2 untouched**, confirmed by `git diff` against `ba13739` on
  both deck files and both asset directories.
- **Branch scope clean**: only this epic's own directory, `src/decks/theme.css`,
  the weeks 3–6 deck files, and the new week 5–6 assets. No lecture, session,
  assessment, config or `src/data/` file was touched.
- **DoD #3 satisfied for changed decks** — layout blocks per deck: week 3 six,
  week 4 three, week 5 three, week 6 three.

### Three images deliberately left at their original size

All clear the 200px floor in DoD #2, so none is a violation, but they are the
only images in weeks 3–6 not moved into a `.columns` or `.compare` layout.
Confirm they still read acceptably during the walk, and either relayout or
record the reason:

| Deck | Image | Size | Note |
|---|---|---|---|
| week-03 | `salmon-myotomes.jpg` | 320px | Lane A judged it already adequate |
| week-04 | `fridge-thermometer.jpg` | 220px | Not mentioned in lane A's report |
| week-05 | `olive-oil.jpg` | 220px | Pre-existing, never clipped |

### SUPERSEDED — updated 2026-09-17, all five lanes are now complete

The paragraph that stood here said lanes C, D and E had not run and that weeks
7–12 were unchanged from `main`. **That is no longer true.** All five content
lanes report `status: completed`, and **all ten decks (weeks 3–12) have
changed.** Do the full ten-deck walk; do not scope it down.

The `pnpm check` output recorded above was taken at commit `4e356c4`, after
lanes A and B only. **It predates lanes C, D and E — re-run it.** The
`SOURCES.md` parity and asset-reference figures above likewise cover only
weeks 3–6.

The coordinating session has since verified, at commit `a995ebd`:

- `SOURCES.md` 1:1 with files on disk in **every** week 3–12: wk3 8/8, wk4 8/8,
  wk5 7/7, wk6 5/5, wk7 5/5, wk8 4/4, wk9 6/6, wk10 5/5, wk11 4/4, wk12 5/5.
- Referenced assets exactly equal on-disk assets in all ten decks.
- `package.json` / `pnpm-lock.yaml` diff against `main` is **empty** — no lane
  leaked a temporary Playwright dependency, including the one that self-reported
  sweeping it in with `git commit -am` and then reverted it.
- Weeks 1 and 2 untouched. `src/decks/theme.css` carries only task 001's helper
  class (+17 lines) and nothing since.
- One defect found and fixed by the coordinating session: `oranges.jpg`'s credit
  line still recorded its pre-resize size after lane D shrank the file; it now
  records 66KB and the resize. A 1:1 parity check does not catch a stale size —
  **when you do the `SOURCES.md` cross-check, compare recorded sizes against the
  files, not just the count.**

### Baseline canvas overflow — a defect class that predates this epic

Lane C discovered that **slides were already overflowing the 720px canvas on
`main`**, with `pnpm check` green throughout, because the clipping is the
section's `overflow: hidden` rather than element-level overflow. Status:

| Deck | Slide | State |
|---|---|---|
| week-07 | "The working set", "The blade in profile", "Two different operations", "The standard cuts" | **fixed** by lane C |
| week-09 | bananas `bg right` panel; `oranges.jpg` slide | **fixed** by lane D |
| week-11 | "The thermometer decides" — overflows by 7px, both viewports | **OPEN — not fixed by any lane** |

Week 11's is the one left. Lane E measured it, confirmed it never touched that
slide, and left it as out of its scope. Fix it if cheap, or record why not.

**This means weeks 1 and 2 may carry the same defect and nobody has looked.**
They are outside this epic's scope to *edit*, but if you have a browser open,
measuring them costs little and the finding is worth recording even if you
change nothing.

### Running Playwright

The repo's `node_modules` has no Playwright — every lane installed it
temporarily and removed it. Lane D avoided touching the repo at all by using an
isolated scratch npm project outside the repo and importing it via
`createRequire` with an absolute path. Chromium is already cached system-wide at
`C:\Users\hadis\AppData\Local\ms-playwright`, so no re-download is needed.
Either approach is fine — but whatever you do, `package.json` and
`pnpm-lock.yaml` must show no content diff when you finish, and must never be
staged. Do not use `git commit -am`; that is exactly how one lane swept the
dependency in.

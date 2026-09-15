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

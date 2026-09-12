---
status: completed
depends_on: [001]
parallel: true
conflicts_with: []
---
# Week 6 (Lane B, step 1): `.compare` child-count check

Solo, short, first step within Lane B — run before any board-material
sourcing so a `theme.css` edit (if actually needed) isn't a late surprise.
May run concurrently with Lane A (002) — disjoint files; this task does not
touch `week-05*`.

## Scope

`src/decks/theme.css`'s `.compare` class was added in week 2 with a code
comment reading "background side panel too small to compare two specimens
in," which epic.md flags as possibly meaning `.compare` only supports
exactly 2 `figure` children. Confirm before assuming either way.

Read the actual rules (already read once during epic decomposition, recorded
here for continuity):

```css
.compare { display: flex; justify-content: center; gap: 2rem; }
.compare figure { margin: 0; flex: 1 1 0; max-width: 44%; }
.compare figure img { display: block; width: auto; height: auto;
  max-width: 100%; max-height: 19rem; margin: 0 auto; border-radius: 0.25rem; }
.compare figcaption { margin-top: 0.5rem; font-size: 0.7em; text-align: center; }
```

**Analysis from decomposition (not yet confirmed by an actual render):**
`flex: 1 1 0` with 3 children divides available space into equal ~33%
shares via flex-grow *before* the `max-width: 44%` cap would ever bind (44%
only matters when equal-division would exceed it, which happens at 2
children — 50% > 44% — but not at 3 — 33% < 44%). So `.compare` should lay
out 3 figures without a CSS change. **Confirm this with an actual
`astro dev` render and screenshot before relying on it** — the analysis is
sound flex-box math but has not been visually verified in this epic.

## Done when

Either (a) confirmed by screenshot that 3 `figure` children lay out cleanly
with no CSS change — record the screenshot evidence and move on, `theme.css`
untouched; or (b) confirmed broken — make the minimal fix to `theme.css`
needed to support 3, and only this task touches that file. Flip status, log
to `.claude/epics/week5-6-deck-improvement/updates/003.md`, then unblock 004.

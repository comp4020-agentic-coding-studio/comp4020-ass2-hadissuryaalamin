---
status: completed
depends_on: [002]
parallel: true
conflicts_with: []
---
# Week 3 (lane A): handling/storage imagery

Follows 002 (same deck file/SOURCES.md). May run concurrently with lane B's 007.

## Scope

Files: `src/decks/week-03.deck.mdx` — image-free sections `## Cold chain` (~line 78), `## Cross-contamination` (~line 92), `## Poultry` (~line 120), `## Fish and shellfish` (~line 129); `src/decks/assets/week-03/`; its `SOURCES.md`.

- These slides are tables of days/temperatures, not a "place" like week 2's crisper drawer — a photo of raw chicken beside a holding-time table illustrates material, not the rule. Photograph **the rule or the check**, not merely the meat.
- Candidates: whole fish buried in crushed ice at a fishmonger's display (canonical, abundantly-licensed Commons subject, and for fish it *is* the rule); an appliance thermometer reading in the 4°C range.
- **At least two** new storage/handling photographs for this week, each depicting the rule/check. Skip rather than force, exactly as week 2 skipped its humidity-setting image.
- **Do not duplicate week 10's subject** — week 10 already uses `meat-thermometer.jpg`; pick a different file/framing.
- Leave every existing sourced claim exactly as-is (2 hours/1 hour above 32°C rule, 4.4°C, danger zone, FSIS holding windows) — images illustrate, never restate or replace them.
- Same image-sourcing convention as task 002 (Commons/free source, licence check, visual inspection, EXIF check, ~960px resize, credit line in `SOURCES.md`).
- Real alt text on every informative inline image (axe fails build without it). `![bg …]` discards alt text — never the sole carrier of information.
- Budget against fixed 1280×720 canvas; body text before image.

## Done when

At least 2 new storage/handling photos for week 3, each carrying the rule not just the material, distinct from week 10's subject, existing sourced claims untouched, alt-texted, credited. Flip status, log to `updates/003.md`.

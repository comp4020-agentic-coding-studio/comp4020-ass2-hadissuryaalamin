# Process overview

## What I built

SLOP1640 *Introduction to Preparing Meal* — a course site for a first-year
Slop University course about everything that happens in a kitchen before the
heat comes on. Twelve dated weeks, each with a lecture, a practical "Prep" and
a slide deck; two assessments; interactive storage and macronutrient
calculators; and a spec suite that refuses content contradicting the course's
own thesis. The voice is deadpan academic: storing a carrot is treated with the
full seriousness of a discipline, and nothing is ever winked at.

## How I got here

**The harness came before the content.** I wrote `CLAUDE.md` first
([`1c7a2fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/1c7a2fa))
— the thesis, the voice rules, a Do-not-touch list, and the process rules I
wanted agents held to. Everything after was built by agents working inside those
constraints.

**It grew from failures, not foresight.** An early build shipped markdown pages
with no `<html>` element, failing axe, because the theme's automatic layout does
not fire on Windows
([`f1c1ef8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/f1c1ef8)).
The fix took a minute; the useful part was writing the rule into `CLAUDE.md`,
which now cites that commit by hash. Several sections of the harness exist
because something broke exactly once.

**Promises became tests.** Rather than trusting prose, the course's claims are
asserted against the built API
([`979ece8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/979ece8)):
assessment weights sum to 100, twelve weeks appear with no gaps, and weeks 1–10
never claim cooking happens.

**Work was decomposed and dispatched.** I used an epic/task pattern —
dependency-tagged task files, isolated worktrees, agents run in parallel only
where file scopes were disjoint
([`7691189`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/7691189)).
It was not smooth. One wave records a task recovered after an agent crashed
mid-flight
([`e30fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/e30fdbf)).

**The lesson I actually paid for: a green check proves almost nothing.** Late
on, I asked for the decks to be reviewed:

> can you see the different of week 1-2 and week 3-6. The pictures is not
> visible and to small

Diagnosis found the cause was architectural. Converting background images to
in-flow `<img>` tags had been correct — backgrounds discard alt text and fail
axe — but an in-flow image after body text inherits only leftover space on a
fixed 1280×720 canvas, so clipping checks had shrunk images to as little as
75px. The theme already shipped an unused two-column grid. I had it prototyped
before rollout, and the prototype proved two claims in my own epic were false
([`5c26464`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/5c26464),
[`0a2822e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/0a2822e)).

That scepticism kept earning out. A verification pass found **five slides
clipped by the agents that had just reported them as passing** — they measured
the text column while the image in the other column hung off the canvas
([`ff7792c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/ff7792c)).
Another caught a sourced image carrying EXIF "All Rights Reserved" and
re-sourced seven files rather than salvage any on weak evidence
([`0b67869`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/0b67869)).
`pnpm check` was green through all of it, because canvas clipping is
`overflow: hidden` and invisible to it.

The same discipline caught my own mistakes. An instruction I wrote into an epic
made an assessment page cite a lecture that undercut it, and the agent
faithfully wrote what I asked
([`ceee55a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/ceee55a)).
Changing a rubric weight also made a sentence elsewhere false
([`814fc71`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/814fc71)).

What I would carry forward: write the constraints down first, make promises into
tests, and never accept a passing build as evidence that the page is right.

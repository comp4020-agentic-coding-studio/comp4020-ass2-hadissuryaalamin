# Process overview

## What I built

SLOP1640 *Introduction to Preparing Meal* — a course site for a first-year Slop
University course about what happens in a kitchen before the heat comes on.
Twelve dated weeks, each with a lecture, a practical "Prep" and a slide deck;
two assessments; storage and macronutrient calculators; and a spec suite that
refuses content contradicting the course's own thesis. The voice is deadpan
academic: storing a carrot is treated as a discipline, and nothing is winked at.

## How I got here

**First, the harness.** I wrote `CLAUDE.md` before any content ([`1c7a2fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/1c7a2fa)) — the
thesis, the voice rules, a Do-not-touch list, the process rules. Everything
after was built by agents inside those constraints.

**Then one detailed epic for the whole course.** Not a brief. Week by week, what
each one teaches — week 1 storage, cutting, selection, composition — through to
both assessments, written out in full so a build agent needed nothing from me
([`7691189`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/7691189)). I ran it on Sonnet. Twelve weeks of lectures, Preps, decks, tutorials and
two calculators came out of it.

**It grew from failures, not foresight.** An early build shipped markdown pages
with no `<html>`, failing axe, because the theme's automatic layout does not
fire on Windows ([`f1c1ef8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/f1c1ef8)). The fix took a minute; the useful part was writing the
rule into `CLAUDE.md`, which cites that commit. Several harness sections exist
because something broke exactly once. One dispatch wave records a task recovered
after an agent crashed mid-flight ([`e30fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/e30fdbf)).

**Promises became tests.** The course's claims are asserted against the built
API ([`979ece8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/979ece8)), not trusted as prose: assessment weights sum to 100, twelve weeks
appear with no gaps, weeks 1–10 never claim cooking happens.

## What the decks cost me to learn

The content was there; the decks were plain. So I wrote a second epic to improve
them, and worked through the models the expensive way.

**Weeks 1–2 on Opus.** The result was what I wanted. It also hit my weekly
budget limit, which made running the remaining ten weeks the same way
impossible.

**Weeks 3 onward on Sonnet — epic and execution both.** Affordable, and the
output was poor. Week 3 was visibly worse than weeks 1–2, and browsing the built
site I said so:

> can you see the different of week 1-2 and week 3-6. The pictures is not
> visible and to small

**Then the split that worked.** I went back to Opus for the *epic only* —
diagnose why weeks 3–6 failed, prototype the fix on one slide, and instruct the
lanes to follow the weeks 1–2 house style explicitly ([`5c26464`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/5c26464), [`0a2822e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/0a2822e)). Execution
went to Sonnet, five lanes in parallel, roughly $13 a lane.

| Work | Model |
|---|---|
| Harness, course record, the course epic | Opus |
| Running the course epic (12 weeks, assessments, calculators) | Sonnet |
| Deck improvement, weeks 1–2 | Opus — good, hit the limit |
| Deck improvement, weeks 3+, first attempt | Sonnet — poor |
| Diagnosis, `weeks3-12-imagery` epic, `.columns` prototype | Opus |
| Lanes A–E, weeks 3–12, five agents in parallel | Sonnet, ~$13/lane |
| Verification, integration, `pnpm check` | Opus |

The lesson is not that Sonnet is worse. Sonnet had failed and succeeded on the
same task. What changed was that the second epic carried a worked example and a
measured prototype, so the lanes had a pattern to copy instead of a goal to
interpret.

**The diagnosis itself was architectural.** Converting background images to
in-flow `<img>` was correct — backgrounds discard alt text and fail axe — but an
in-flow image after body text inherits only leftover space on a fixed 1280×720
canvas, so clipping checks had shrunk images to 75px. Each epic made that trade
locally and correctly, and it compounded across eight decks. The theme already
shipped an unused two-column grid; prototyping it first proved two claims in my
own epic false.

**A green check proves almost nothing.** A verification pass found **five slides
clipped by the agents that had just reported them passing** — they measured the
text column while the image in the other hung off the canvas ([`ff7792c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/ff7792c)). Another
caught a sourced image carrying EXIF "All Rights Reserved" and re-sourced seven
files rather than salvage any on weak evidence ([`0b67869`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/0b67869)). `pnpm check` was green
throughout, because clipping is `overflow: hidden` and invisible to it.

It caught my own mistakes too. An instruction I wrote into an epic made an
assessment page cite a lecture that undercut it, and the agent faithfully wrote
what I asked ([`ceee55a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/ceee55a)). Changing a rubric weight made a sentence elsewhere false
([`814fc71`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-hadissuryaalamin/commit/814fc71)).

What I carry forward: write the constraints down first, make promises into
tests, spend the expensive model on the epic rather than the execution, and
never accept a passing build as evidence the page is right.

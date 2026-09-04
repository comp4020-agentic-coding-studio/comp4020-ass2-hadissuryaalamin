# SLOP1640 — the harness

This repo builds one thing: the website for **SLOP1640 Introduction to
Preparing Meal**, a first-year Slop University course about everything that
happens in a kitchen before the heat comes on.

Read `README.md` for the platform. This file is the part that is mine: what the
course is, what I will not let drift, and how I know a change is right.

## The course

**Thesis: a meal is decided before anything is cooked.** Selection, storage,
temperature, cutting, and sequence determine the outcome; the stove only
reveals it.

Twelve dated weeks:

- **Weeks 1–10 are preparation only.** Why preparation pays, vegetables,
  animal protein, aromatics and oil, tools and surfaces, the knife, time under
  service, fruit, and the cold chain that ties the storage weeks together.
- **Weeks 11–12 cook**, and cook only to test the thesis: identically cooked
  dishes from differently prepared material, then an assessed practical.

The week-by-week plan, its sourcing obligations and the tests that protect it
live in `.claude/epics/intro-preparing-meal/epic.md`.

**Time is a constraint, not the subject.** A week may argue about batching,
sequencing, or what to do the night before — but the course is not a
productivity course, and no page should read as life-hack content.

### Voice: deadpan academic

Treat storing a carrot with the full seriousness of a discipline. Learning
outcomes, prescribed readings, marking rubrics, and precise language, applied
without irony to work that is usually treated as beneath explanation. The joke,
where there is one, is that nothing is ever winked at.

Rules for the voice:

- Never explain the joke, never use exclamation marks, never address the reader
  as "you guys" or wink at Slop University being fictional.
- Prefer the specific over the general: "4 °C on the middle shelf" beats "keep
  it cold".
- Numbers carry units. Temperatures in Celsius, times in minutes or hours,
  weights in grams.

### What every page must earn

A marker spends about ten minutes browsing as a prospective student, sampling
weeks that are not adjacent. So each session, lecture and assessment page must
stand alone **and** visibly belong to the same semester:

- Name the preparation decision the week is about, in the first sentence.
- Connect back to the thesis: what does this week decide about the finished
  meal?
- Use `related:` to link at least one other node. A week with no edges reads as
  a page from a different course.

## Rules I hold the agent to

### Do not touch

The platform is fixed. Do not edit `astro.config.ts`, `scripts/pages-base.ts`,
`src/content.config.ts`'s four shipped collections, the Slop branding spread in
`src/site-config.ts`, or anything under `dist/`. Adding a collection, page or
component is allowed; changing the shipped contract is not.

`SLOP1640` keeps its last three digits (`640`). The level digit is `1`, and
`courseMeta.level` must stay `1` to match.

### Content rules

- `src/course-config.ts` is the single source of the course record. Do not
  restate its title, code, dates or description in page prose — link or read
  from it.
- Every `spec:` line is a promise a reader can check without asking me. If a
  line cannot be checked by reading the page, rewrite it or drop it.
- Assessment weights across `src/content/assessments/` sum to exactly 100.
- Every dated node sits inside the teaching period in `src/course-config.ts`.
- Sessions are labelled **Preps** (`sessionLabels` in `src/site-config.ts`) —
  the collection key, refs and URL stay `sessions`.
- No `STARTER_CONTENT` comment survives a commit that replaces the fragment it
  marks.
- **No real person teaches this course.** The week 8 guest lecturer is a
  fictional character with an invented name. Never present a real chef as
  teaching here, and never attribute an invented quote to a real person.
- **Every factual claim carries a source that resolves.** Nutrition figures,
  storage temperatures, timing research: cite work that exists, or teach the
  concept without the number. A fabricated statistic on a course page is worse
  than a missing one.
- **A new markdown page under `src/pages/` names its layout in frontmatter**
  (`layout: ../../layouts/PageLayout.astro`). The theme's automatic layout does
  not fire on Windows, and a page without it builds with no `<html>` and fails
  axe — see commit `f1c1ef8`.

### Process rules

- Work in small commits, one decision each. `PROCESS.md` cites commits, so a
  commit that does four unrelated things cannot be cited for any of them.
- When a rule here is a promise about the course, write it as a test in
  `spec/*.test.ts` rather than trusting prose. Prose reminds; a test refuses.
- Tests assert **contracts** — what the built site must be true of — read from
  `dist/api/index.json`, not from source files or markup structure.
- Run `pnpm check` before claiming anything works. Run `pnpm check:evidence`
  before shipping. Never report a change as done without the command output.
- If a check fails, fix the cause. Do not weaken a test to make it pass, and do
  not delete a test I wrote without telling me which promise it was protecting.

### What earlier weeks taught me

Carried forward from prior prototypes. Add to this list rather than re-learning
an item the hard way.

**A green `check` does not mean the content is connected.** Typecheck, build and
the spec tests cannot see a page nothing links to, a collection entry with no
`related:` edge pointing at it, or a component nothing renders. After adding a
page, confirm a student could actually reach it from the nav or from another
page.

**A feature can be finished on one side of a boundary and never connected.** A
schema field, a component prop or a config value can be fully implemented and
still be dead, because nothing reads it or the caller drops it before it
matters. Check the consuming end, not just that the producing end compiles.

**Screenshots catch what every automated check misses.** Markers view the site
in Chrome at two fixed viewports. Layout breaking, text overflow, an image
covering content, or a page still reading as "the starter with the nouns
swapped" only show up on screen.

**Any script that drives the running site asserts zero page errors.** A blank or
broken page still returns 200 and still passes a build. Listen for
`pageerror`/`console` rather than trusting that something rendered.

### When to stop and ask

Ask me rather than guessing when:

- A change would alter the course's thesis, the preparation/cooking split, or
  the voice.
- The brief and the spec appear to conflict.
- A fix requires editing something in **Do not touch**.

Filling in ordinary content — a week's prose, a person's bio, a reading — under
these rules is not a question. Write it.

## Checks

```sh
pnpm dev             # http://localhost:4321/<repo>/  (the bare root 404s)
pnpm check           # typecheck, production build, spec/*.test.ts
pnpm check:evidence  # submission gate: PROCESS.md citations, no starter content
```

`pnpm build` already enforces accessibility (axe), internal links, dangling
content refs, and deck compilation. Do not write tests that duplicate it; write
tests for the course promises above, which the build cannot see.

---
status: pending
depends_on: []
parallel: true
conflicts_with: []
---
# Home page, policies page, artwork, session labels

Rewrite `src/pages/index.astro` (clears its two `STARTER_CONTENT` markers,
including the hero artwork) and `src/pages/policies/index.mdx`, replace or
deliberately drop the starter imagery under `src/assets/images/`, and
confirm/adjust `sessionLabels` in `src/site-config.ts`. Read
`.claude/epics/intro-preparing-meal/epic.md` fully first, plus
`CLAUDE.md`'s Windows layout note (any markdown page under `src/pages/`
needs explicit `layout:` frontmatter, per commit `f1c1ef8`) and
`src/layouts/PageLayout.astro`.

File scope: `src/pages/index.astro`, `src/pages/policies/index.mdx`,
`src/assets/images/*`, and the `sessionLabels` value in
`src/site-config.ts` only. Do not touch anything else in
`src/site-config.ts` (branding is fixed platform) or any other page.

## Content

- **Home page (`src/pages/index.astro`).** Must state the course thesis —
  "a meal is decided before it is cooked" — in the first screen. Deadpan
  academic voice, no wink. Replace the hero artwork with real replacement
  imagery, or commit to a deliberate image-free treatment (`pnpm
  check:evidence` fails on the shipped placeholder either way it's
  resolved).
- **Policies page (`src/pages/policies/index.mdx`).** Late work,
  extensions, academic integrity, plus the practical-specific policies
  this course needs: allergies, dietary requirements, kitchen safety, and
  what happens if a student can't attend the live test (week 12). This
  page is an `.mdx` under `src/pages/` — give it explicit `layout:`
  frontmatter per the Windows fix, or it will fail axe
  (`document-title`, `html-has-lang`, `region`).
- **`sessionLabels` in `src/site-config.ts`.** `CLAUDE.md` names the
  sessions "Preps." Set `sessionLabels` accordingly and check with `pnpm
  dev` that it reads well on the built site (singular/plural forms,
  wherever the theme surfaces the label) before treating this as done.

## Constraints

- Voice: deadpan academic throughout, no exclamation marks.
- Zero `STARTER_CONTENT` markers left in `index.astro` or
  `policies/index.mdx`.
- Do not edit `astro.config.ts`, `scripts/pages-base.ts`, the shipped
  collections in `src/content.config.ts`, or the Slop branding spread
  elsewhere in `src/site-config.ts` — platform is fixed.
- Any factual policy claim (e.g. allergen handling standards) that leans
  on an external standard should be accurate; this page doesn't need the
  same density of academic citation as the teaching weeks, but don't
  invent a regulation number.

## Done when

- Home page states the thesis in the first screen, zero
  `STARTER_CONTENT` markers, real or deliberately absent hero art.
- Policies page covers late work, extensions, academic integrity,
  allergies/dietary, kitchen safety, live-test non-attendance — has
  explicit `layout:` frontmatter.
- `sessionLabels` set to "Preps" (or confirmed alternative) and verified
  to read well via `pnpm dev`.
- No placeholder artwork remains under `src/assets/images/` unless
  intentionally kept and non-starter.
- `pnpm check` build doesn't error on these files.
- Log progress to `.claude/epics/intro-preparing-meal/updates/008.md`; flip
  `status` to `in_progress` then `completed`.

# Style architecture (phase 3, kept for the life of the site)

Parallel builders and later edits drift: a fifth grey, a 13 px gap, a breakpoint at
47rem. Words in a brief don't stop it; a check that fails the build does.

## Layers
One entry stylesheet imports them in this order; a later layer wins at equal specificity.

| Layer | File (example) | Holds |
|---|---|---|
| tokens | `src/styles/tokens.css` | every raw value: colours, fonts, type scale, spacing, radii, shadows, `--z-*` layers, `--duration-*`, `--ease-*`; in Tailwind v4 inside `@theme` |
| base | `base.css` | reset and element defaults (body ground, text, focus ring, selection, reduced motion) |
| components | `components.css` or the shared components | everything used by more than one section or page: buttons, section header, cards, forms |
| layout | `layout.css` | page grid, header, phone menu, footer, section shells |
| pages | one file per page or page group | only what that page has; a deliberate difference from a shared block is written here with a comment |

Where a new element goes: first look for a similar shared block and add a variant
(`block--variant`), not a copy. An element of one page goes in that page's file; when a
second page needs it, move it to components.

## Rules
- Raw values live only in the tokens file. Name tokens by job (`--color-muted`), not look
  (`--color-grey-400`). JavaScript, GSAP and shaders read the same CSS variables at runtime
  (`getComputedStyle(document.documentElement).getPropertyValue('--color-accent')`).
- Tailwind v4: reset the default palette in `@theme` so only the site's colours exist (check
  the current docs for the syntax); no arbitrary values like `text-[#…]` or `mt-[13px]`;
  `-[var(--token)]` is fine.
- A fixed set of breakpoints, written in the tokens file (CSS variables don't work in
  `@media`). Nothing else may appear in `@media`.
- Font sizes only from the type scale, never `px`; `z-index`, durations and easings only from
  tokens.
- Every class defined in CSS is used; every `var(--x)` is declared.
- A builder that needs a missing value reports it; you (lead) add the token.

## The check (required in phase 3, before any builder is dispatched)
Copy `assets/check-tokens.mjs` from this skill into the project's `scripts/`, set its
constants (tokens path, breakpoints), and wire it in as `"prebuild": "node scripts/check-tokens.mjs"`.
It fails on colour literals, `px` font sizes, raw `z-index` and timings, Tailwind arbitrary
values, breakpoints outside the set, undeclared variables and dead classes. A line that
must break a rule carries `tokens-ok: <reason>`; keep that list short.
Done means: the build fails on a planted `color: #fff` in a section file, and passes once it
is removed.

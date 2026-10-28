# Changelog

## 1.0.0 (2026-10-28)

First public release.

- Packaged as a Claude Code plugin with its own marketplace; the skill follows the
  Agent Skills layout (`SKILL.md`, `references/`, `scripts/`, `assets/`).
- Phase 3 sets up style layers and a build-time token check (`assets/check-tokens.mjs`):
  colour literals, `px` font sizes, raw `z-index` and timings, Tailwind arbitrary values,
  unknown breakpoints, undeclared variables and dead classes fail the build.
- Launch asks whether a site already runs on the domain, redirects its old addresses,
  and reads real-visit 404s weekly for the first month.
- The footer studio credit is now opt-in, set in the user's own instructions.

---
name: creative-landing
license: MIT
description: Use when the user wants an animated, award-level marketing or product landing page built, redesigned, polished or "made like this site / this video" — heavy motion, scroll scenes, WebGL or 3D, their own photos or 3D models turned into visuals. Also when an existing landing page looks generic, flat or template-like. Russian triggers — "сделай лендинг", "сайт с анимациями", "как на этом сайте", "переделай страницу", "редизайн", "добавь 3D", "сайт выглядит скучно".
---

# Creative landing

## Overview
Build a landing page that looks designed for this one product, with at least two
showcase scenes of real visual craft. Two failure modes this skill exists to prevent:
- **Template clone** — every project gets the same sections, cursor, blur-ins and
  particle background, reskinned. (Caused by a recipe that fixes the page.)
- **Safe and bland** — default fonts, cards and fades, no real visual. (Caused by
  rules that only forbid and never demand.)

The page is built by the lead agent (you) directing specialised subagents, and is
verified in a headless browser before anyone calls it done.

## Workflow

| Phase | Who | Output | Details |
|---|---|---|---|
| 0. Interview | you | answers | [`interview.md`](references/interview.md) |
| 1. Art direction | you | `DIRECTION.md` in the project | [`art-direction.md`](references/art-direction.md) |
| 2. Checkpoint | user | "go" or edits | explain the choice in plain words, wait |
| 2a. Mockups (when asked) | you → user | 3 static HTML mockups, then revisions on the chosen one | [`interview.md`](references/interview.md) → Mockups |
| 2b. Move to a real stack | user decides | the approved mockup becomes the app | [`interview.md`](references/interview.md) → Mockups |
| 3. Scaffold + tokens | you | running app, tokens, token check in the build, fonts, section stubs, site chrome, search files | [`toolkit.md`](references/toolkit.md) → Stack, [`build-with-subagents.md`](references/build-with-subagents.md), [`style-architecture.md`](references/style-architecture.md) |
| 4. Build | subagents in parallel | scenes + sections | [`build-with-subagents.md`](references/build-with-subagents.md) |
| 5. QA loop | QA subagent → builders | defect list → fixes | [`qa-loop.md`](references/qa-loop.md) |
| 6. Report | you | what was built, fps, still weak | below |
| 7. Revisions | you → owning builder | fixes from the user's plain-words feedback | [`revisions.md`](references/revisions.md) |
| 8. Launch | you | legal pages, security headers, deploy verified live, handover | [`launch.md`](references/launch.md) |

Selling on the site (cart, payment, delivery): only when the client asks for it or answers yes when asked; then also [`shop.md`](references/shop.md).

Read each file when you reach its phase, not before. Files in `references/`, `scripts/`
and `assets/` are in this skill's folder: `${CLAUDE_SKILL_DIR}`.

## Non-negotiables
- **Questions first, about the business, never about design.** Never write design or
  code while what the product is, who it is for and the main action are unknown. Ask
  once, in one message, in plain words ([`interview.md`](references/interview.md)), including whether they have
  their own photos, logos or documents they'd like used.
- **You choose the style, then explain it.** Most clients can't name a style; they can
  react to one. Decide the direction yourself and justify it in plain words.
- **Offer, don't impose, the big extras.** 3D, scroll-driven video, motion-design clips,
  sound and voice-over are proposed to the client in plain words and used only with a
  yes ([`interview.md`](references/interview.md) question 9 and Checkpoint).
- **Two showcase scenes minimum** — the hero and one mid-page — each built from the
  catalogue in [`art-direction.md`](references/art-direction.md) with a technique from [`toolkit.md`](references/toolkit.md). A page of fades
  and cards fails this skill no matter how clean it is.
- **Expressive type.** No Inter, Geist, Roboto, Arial, system-ui, Poppins, Space
  Grotesk, Montserrat as the display face.
- **User assets become the visual.** Supplied photos or 3D models go into a scene
  (depth, texture, model), not into an `<img>` box.
- **Library APIs from docs.** Before using any library in [`toolkit.md`](references/toolkit.md), check its
  current docs (context7 or official site). Versions drift.
- **Search and share files from the first build, unasked.** sitemap, robots, llms.txt,
  manifest, icons, share image, canonicals: [`build-with-subagents.md`](references/build-with-subagents.md) → Search files. Never wait for the
  client to ask for them.
- **Headless only.** Never open a visible browser window. One browser at a time,
  closed after use. Stop every dev server you started except the one you hand over.

## Report (phase 6), in this order
1. URL and how to run it.
2. The direction in 6 lines: core idea, character, layout, palette, fonts, the two
   showcase scenes.
3. Lowest measured fps (desktop and throttled phone) and how it was measured.
4. What QA found and what was fixed.
5. What is still weaker than it should be. Never omit this.

## Red flags — stop and fix before continuing
- Sections match a previous project with new words in them.
- Hero is a heading + two buttons + a screenshot card, and nothing else moves.
- You picked a font because it is safe.
- You called it done from code reading, without QA screenshots and an fps number.
- A browser window appeared on the user's screen.
- A 3D object is cut off by the screen edge at some scroll position, or its parts float
  unattached.
- You asked the client to pick a font, palette or "style".
- 3D, video or sound appeared on the page without the client having agreed to it.

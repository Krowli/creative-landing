# Phase 1 — Art direction

Write `DIRECTION.md` at the project root with the sections below, in this order.
Builders read only this file and the tokens, so it must be complete.

## 1. Core idea
Three candidate visual ideas taken from the product's own world — its material, data,
ritual, place, or the problem it removes. Not "tech", not "AI glow". Pick one, one
sentence on why.
Examples: sleep tracker → tide lines that calm as the night goes on; hot sauce box →
riso-printed labels and a heat dial; logistics → a paper map folding into routes.

## 2. Motion character (pick one; mixing two is allowed only if the second is minor)
- **Editorial** — typographic motion, image and clip-path mask reveals, slow crossfades.
- **Tactile** — springs, drag, snap, stacking, physics; things you can push.
- **Cinematic** — pinned full-screen scenes where scroll plays a story.
- **Instrument** — crisp micro-interactions, live data widgets, tickers.
- **Object** — one hero 3D object (product or symbol) that turns and changes with scroll.
- **Graphic** — flat color fields, huge type, marquees, hard cuts and color swaps.
- **Immersive** — a WebGL world the page travels through (particles, fluid, terrain).

## 3. Layout archetype
Long narrative / horizontal chapters / bento-first / sticky split / magazine grid /
app-like single screen / scroll-driven 3D stage with overlay text.

## 4. Showcase scenes (minimum two: hero + one mid-page)
For each: what the viewer sees, what drives it (time, scroll, pointer), the technique
from `toolkit.md`, and the fallback on phones / reduced motion.
Catalogue to draw from (adapt, combine, or invent):
- Product object in 3D reacting to scroll and pointer (model, or built from primitives).
- User photo turned into depth parallax / displacement that moves with the pointer.
- Particles that assemble into the logo, product or a photo, then scatter on scroll.
- Image-to-image WebGL transitions (ripple, liquid, pixel sort) between chapters.
- A pinned sequence where the product assembles or a process plays step by step.
- Kinetic typography: split into letters, 3D rotation, text on a path, variable weight.
- Fluid / smoke / ink shader reacting to the cursor.
- A physical playground: drag, throw and stack product objects.
- Data made physical: a chart that grows into a 3D landscape.
- A logo or mark that travels through the page and docks in later sections.
- Scroll-scrubbed video: a product film or 3D render played frame by frame by scroll.
- Motion-design clips (Lottie / Rive) that explain a step or react to hover.
- Page or section transitions (View Transitions, shared-element morphs, curtain wipes).
- Sound layer: UI clicks, scroll ticks, ambience, narrated intro — muted by default.
- Interactive toy: configurator, before/after slider, map or globe, "try it" demo.
- Generative art from the brand (patterns, ornaments, noise fields) drawn in code.
Heavy options (3D, scroll video, sound, voice) only with the client's agreement.

## 5. Palette
Hex values: background, surface, text, muted, one or two accents. Derived from the core
idea. Near-black + neon is allowed only if the idea demands it — say why.

## 6. Type
Display + text (+ mono if data-heavy). Sources: Fontshare (Clash Display, Cabinet
Grotesk, Satoshi, General Sans, Zodiak, Gambetta, Tanker, Boska) or Google Fonts
(Fraunces, Instrument Serif, Bricolage Grotesque, Syne, Unbounded, Familjen Grotesk,
Big Shoulders Display, DM Serif Display). Banned as display face: Inter, Geist, Roboto,
Arial, system-ui, Poppins, Space Grotesk, Montserrat. Max 3 font files.

## 7. Sections
6–10 sections built from the product. Each: name, job in one line, layout, its one
motion idea. Required somewhere: value in the hero, how it works shown with product-like
visuals and realistic data, proof, the offer, a final call to action. Decide whether the
page needs navigation (long pages and multi-page sites usually do; a short one-screen
story may not) and state the decision; if there is a menu, it stays readable over every
section and works on a phone. Adjacent sections never share a layout. Plan the site chrome
from `build-with-subagents.md` → Site chrome and the phone layout of every section (360–1920 px) here,
not after QA.

## 8. Anti-sameness
Three concrete ways this page differs from a dark Linear/Vercel-style SaaS page. Also
list which of these are used and why: custom cursor, smooth-scroll library, preloader,
glass cards, blur-in headings. Using one without a reason tied to the core idea means
remove it.

## Checkpoint (phase 2)
DIRECTION.md is for builders. For the client, explain the choice in plain words as in
`interview.md` → Checkpoint, and wait. Skip the wait only if the user said to proceed
without review.

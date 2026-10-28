# Phase 5 — QA loop

## Render budget (applies to every agent, whole build)
Browser runs cost the user tokens, power and time. Verify cheaply first — typecheck,
build, numbers logged from code (sizes, positions, camera) — and open a browser only
to confirm. Batch every known fix, then one run. Shoot only what changed, 1440×900
JPEG ~70, viewed downscaled; for 3D, one tiled image of several scroll positions.
Budget: ~6 browser runs per page (~8 with a 3D scene), final QA and fps included. At
the budget, stop and list what is unverified instead of running more.

Dispatch ONE QA subagent with fresh context. It reviews, it does not fix.

## QA brief
1. Read `DIRECTION.md`.
2. Tools: `scripts/shoot.mjs` and `scripts/fps.mjs` from this skill (copy them into the
   project's `qa/` folder; they need `puppeteer-core` installed there). Headless only,
   one browser at a time.
3. Shoot every section at 1440×900 and 390×844 after its animations finish, plus frame
   sequences (every ~100 ms for 2 s) of both showcase scenes and the hero intro.
4. Measure fps while scrolling the whole page: desktop, and phone size with CPU
   throttled 4×. Report the lowest one-second value for each.
5. Check every screenshot and sequence against this list:
   - lines connect end to end; no accidental dashes; nothing clipped by its box
   - highlights appear on arrival, counters end on their values
   - text readable over backgrounds; nothing overlaps; nothing overflows at 390 px
   - each showcase scene actually reads as the scene described in DIRECTION.md
   - the page matches the chosen character and passes the anti-sameness list
   - if there is navigation: links scroll to the right sections, the phone menu opens
   - 3D objects are fully in frame at every captured position; no parts floating
   - the build passes, its token check included (`style-architecture.md`)
6. Responsive pass over every page (not just the home page) at 360, 390, 768, 1024,
   1280 and 1920 px wide, with menus and drawers opened: horizontal overflow, elements
   wider than the screen, tap targets under 40 px on touch widths, console errors. If
   there is analytics behind a consent banner: zero requests to the analytics host
   before a choice, the tag loads after «Accept», nothing after «Reject».
7. Return a numbered defect list: section, what is wrong, screenshot path, severity
   (broken / looks wrong / polish). Plus the fps numbers.

## Loop
Send each defect to the builder that owns the file (or fix it yourself if small).
Re-run QA on the changed sections only. Stop after the list has no "broken" or
"looks wrong" items, or after 3 rounds — then report what remains.

## Scripts
- `scripts/shoot.mjs <url> <outDir>` — full-page walk, one screenshot per viewport
  height at 1440×900 and 390×844, after waiting for animations.
- `scripts/fps.mjs <url> [cpuThrottle] [desktop|phone]` — scrolls top to bottom and
  back, prints the lowest and median one-second fps.

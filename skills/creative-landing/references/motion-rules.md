# Motion rules (paste into every builder brief)

- One main motion idea per section; everything else still or subtle.
- Motion shows how the product works, leads the eye, or confirms an action. Motion
  that does none of these is removed.
- Anything that animates data finishes it: lines draw end to end, counters stop on
  their exact value, dots travel the whole path, typewriters complete.
- A highlight fires when the moving thing arrives, never before. In GSAP, a `fromTo`
  added to a timeline renders its start state immediately — set
  `immediateRender: false` on highlight tweens.
- SVG line drawing: `pathLength={1}` + `stroke-dasharray` + `vector-effect:
  non-scaling-stroke` breaks strokes into dashes in Chrome. Draw in the SVG's real pixel
  coordinates instead.
- GSAP `quickTo` cannot drive `rotateX`/`rotateY`; for pointer tilt retarget a tween
  with `overwrite: 'auto'`.
- Reveals start early (element top at ~90% of the viewport), 300–700 ms, and content
  stays visible if JavaScript fails.
- Scrub by scroll only for story moments (pinned scenes, travelling objects). Widgets
  play on time once they enter.
- Curved paths (ribbons, routes) keep turns far apart so fanned strands never fold.
- Blurred layers fade in and out with gradient masks — no hard horizontal edges.
- Sound: off until the visitor turns it on, one visible toggle, short and quiet, never
  on page load; respect `prefers-reduced-motion` as a hint to keep it off.
- 3D: every part is physically attached — each leaf, flower, bead or panel touches its
  base, stem or frame; nothing floats, and gaps look like the real object's gaps. Check
  it with numbers from code (distance from each part to its support).
- 3D framing: the whole object (tallest part included) stays inside the frame with
  margin at every scroll position and pointer extreme, on 1440×900 and 390×844. Check it
  by projecting the object's bounding points per progress step, before any screenshot.
- Respect `prefers-reduced-motion`: final states, no scrubbing, no autoplaying scenes.

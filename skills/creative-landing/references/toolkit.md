# Toolkit

Check current docs (context7 or the official site) before using any library here.
Package names are given so you can look them up; do not trust remembered APIs.

## Stack (default for a new page)
Vite + React + TypeScript + Tailwind CSS v4. For an existing page, use its stack.
One component per section, per scene, per widget. No UI kits.

## Motion
| Need | Tool |
|---|---|
| Timelines, scroll triggers, pinning, scrubbing | `gsap` + ScrollTrigger, `@gsap/react` (`useGSAP`) |
| Split text into chars/words/lines | GSAP SplitText (ships in the `gsap` package) |
| Morph SVG shapes, draw SVG strokes | GSAP MorphSVG, DrawSVG (same package; check licence/docs) |
| Moving one element between layouts | GSAP Flip, or `motion` layout animations |
| Springs, drag, gestures, React-first | `motion` (formerly framer-motion) |
| Smooth scroll (only if the character needs it) | `lenis`, driven by the GSAP ticker |
| Scroll-driven CSS without JS | CSS `animation-timeline: view()` (check browser support) |

## 3D and WebGL
| Need | Tool |
|---|---|
| 3D scene in React | `three`, `@react-three/fiber`, helpers `@react-three/drei` |
| Bloom, depth of field, chromatic, noise | `@react-three/postprocessing` |
| Physics in 3D | `@react-three/rapier` |
| Physics in 2D (drag, stack, throw) | `matter-js` |
| Lightweight custom shaders without three | `ogl` |
| Designer-made 3D scene, embedded | Spline (`@splinetool/react-spline`) |
| Interactive vector animation with state | Rive (`@rive-app/react-canvas`) |
| Designer-made vector animation | Lottie (`@lottiefiles/dotlottie-react` or `lottie-react`) |
| Load user 3D models | `.glb`/`.gltf` via drei `useGLTF`; compress with `gltf-transform` / Draco |

## User photos → visuals
- **Depth parallax / 3D photo:** make a depth map (Depth Anything via
  `@huggingface/transformers` depth-estimation pipeline at build time, or ask the user
  for one), then displace a plane in a shader and move the camera with the pointer.
- **Image transitions:** photos as textures, transition with a displacement or noise
  shader (ogl or three).
- **Particles from a photo:** sample pixel brightness into a point cloud; animate
  points between photo, logo and scatter.
- **Cut-outs:** remove background (ask the user, or `@imgly/background-removal`) and
  layer the subject over type for depth.
Generate depth maps and cut-outs once, at build time, and commit the results — never
on page load.

## Video, motion design, sound (only with the client's yes)
| Need | Tool | Honest note |
|---|---|---|
| Video played by scroll | image sequence on a canvas (frames extracted with `ffmpeg`), or a short `<video>` scrubbed by `currentTime` | needs source footage or frames rendered from a 3D scene; compress hard, lazy-load |
| Frames rendered from our own 3D | three.js scene rendered to PNG frames headless, then `ffmpeg` to WebP/AVIF sequence | build-time only |
| Motion-design clips | Lottie / Rive (see above), or CSS/SVG animation | designer files or code-drawn |
| UI sounds, ambience | Web Audio API, `tone` (Tone.js) for generated sounds, `howler` for files | generated in code, or licensed files the client provides |
| Voice-over | a text-to-speech service (needs the client's account/API key) or a recorded file | never claim a voice exists without one |

## Fonts
Fontshare (self-host the woff2) or Google Fonts via `@fontsource/*` or `<link>`.
`font-display: swap`, subset to latin, max 3 files.

## Performance as engineering (not as a reason to skip scenes)
- 60 fps target while scrolling on a 2020 laptop; throttled-CPU phone ≥ 50 fps.
- Animate `transform` and `opacity`. `filter: blur()` only on small, short-lived
  elements. No `backdrop-filter` over an animated canvas or video.
- One WebGL canvas for the page where possible; share it between scenes or use
  drei `View` for several viewports. DPR ≤ 1.5 (≤ 1 on phones).
- Pause rendering when the canvas is off-screen (IntersectionObserver) and when the tab
  is hidden. Render on demand for static 3D.
- Lazy-load three.js and heavy assets after first paint; show a still frame first.
- Phones: lighter version of each scene (fewer particles, no postprocessing) or a
  pre-rendered video/image. Decide per scene in DIRECTION.md.
- The hero heading is visible at first paint; intros never block it.

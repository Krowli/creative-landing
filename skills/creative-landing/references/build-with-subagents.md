# Phase 3–4 — Scaffold, then build with subagents

## You (lead) do phase 3 yourself
1. Create the app, install the libraries DIRECTION.md needs, set up fonts.
2. Write design tokens (palette, type scale, spacing, radii, easings, durations) in one
   file, e.g. `src/styles/tokens.css` via Tailwind `@theme`, lay out the style layers and
   wire the token check into the build: `style-architecture.md`.
3. Create a stub component per section in the final order, and the shared pieces
   (buttons, section header, reveal helper) so builders don't reinvent them.
4. Build the site chrome and the search files below; builders don't touch them.
5. Start the dev server once, on a fixed port. Builders reuse it; they never start
   their own.

### Site chrome (every multi-section site)
- Phone (≤ 820 px): logo, the main action or cart, and a burger that opens a full menu
  with every section link, plus the secondary links (legal, socials). Never just a cart.
- A header that is transparent over the hero gets a solid ground once the hero is
  behind it, so it never sits on top of text.
- After the hero, the main action (on a shop: «order», leading to the products; the cart
  stays in the header) floats bottom-right and leads to its section; it hides while that
  section or the footer is on screen.
- Footer: the section and legal links, contact. If the user's instructions (CLAUDE.md
  or similar) define a studio credit for client sites, e.g. «Design & development by
  Studio» linking to its site, add it on every site made for a client unless the client
  asks to leave it out. Without such an instruction, add no credit.

### Search files (from the first app build, without being asked; not for static mockups)
Generated at build time from the pages that actually exist, so a new page is listed
without anyone remembering:
- per page: title, meta description, canonical, Open Graph + Twitter tags; a listed
  page without a canonical to itself fails the build;
- `sitemap.xml`, `robots.txt` (with the sitemap line), `llms.txt` (llmstxt.org: H1,
  one-line summary, pages by section with their descriptions, extras under «Optional»);
- web manifest, `favicon.ico` + SVG, `apple-touch-icon` 180, icons 192/512 and a
  maskable 512 (pixel art scaled without smoothing);
- share image 1200×630 (or 2×): a placeholder now, reshot from the finished hero in phase 5;
- a 404 page that answers with status 404 (no rewrite that serves the home page instead);
- structured data only when true.
The site's address lives in one config value; on Vercel fall back to the production
address it provides until there is a domain.

## Builder roles (phase 4, dispatched in parallel)
| Role | Owns | Count |
|---|---|---|
| Scene builder | one showcase scene (component + shaders + assets) | one per scene |
| Section builder | 2–4 non-scene sections and their widgets | as many as needed |
| Asset prep (optional) | depth maps, cut-outs, model compression, icons | one |

Give each builder exactly this brief, in this order:
1. Goal: the scene or sections it owns, in one sentence.
2. Read: `DIRECTION.md`, the tokens file, the shared components. Nothing else needed.
3. Owns: the exact file paths it may create or edit. It must not touch other files;
   if it needs a shared change, it reports it instead.
4. Spec: that part of DIRECTION.md, verbatim.
5. Rules: `motion-rules.md` (paste it), library docs before APIs, no visible browser.
6. Done means: builds without type errors and the token check passes, its part renders at the dev server URL, one
   headless screenshot of its part at 1440×900 saved to `qa/<name>.png`.
7. Return: files changed, screenshot path, anything it could not do.

## Rules that keep parallel builders out of each other's way
- Shared files (App, tokens, global CSS, layout shells) belong to you. Before dispatch,
  create stubs for anything new builders will fill, and mount them yourself.
- If a builder needs a shared change, it reports it; you make it.
- When a file must be touched by two builders, split by element: e.g. one owns a
  section's root element (background, spacing), the other owns everything inside it.
  If an edit fails because the file changed, the builder re-reads and retries.
- One headless browser at a time across all builders: a lock file in the shared QA
  launcher. Only the process that created the lock deletes it.
- Commit a baseline before dispatch so any builder's work can be rolled back.
- Follow-up fixes go back to the builder that owns the file (it still has the context),
  not to a new agent.

## Merge
After builders return: run the build, look at each screenshot, resolve shared-file
requests yourself, then start the QA loop (`qa-loop.md`).

## Small jobs
Polish of one or two sections, or pages under ~5 sections: skip subagents, build it
yourself, still run the QA loop.

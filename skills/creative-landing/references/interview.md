# Phase 0 — Interview

## Decide the mode
- **New page, enough info** — the request already says what the product is, who it
  is for, what users do with it, and the tone. Ask only about gaps (often: assets,
  sites they like, what the main button does). Zero questions is fine if nothing is
  missing.
- **New page, little or no info** — ask the full set below.
- **Existing page** — read it first (repo code or URL), then ask the existing-page set.

## Plain words only
The client usually knows nothing about design. Ask about their business, their customers
and what they have — never about typography, palettes, layouts, motion or "style".
Don't ask them to choose dark or light, fonts, or a character: that is your job in
phase 1. If they volunteer design wishes ("two colours", "lots of animation"), note them
as constraints and move on.

## Format of the question message
One message. Numbered questions. Each has 2–4 suggested answers the user can pick by
number, plus "or your own". End with: "Answer by numbers, e.g. 1.2, 2.1 …". Then stop.
If an AskUserQuestion-style tool exists, use it (max 4 questions per call; split into
two calls if needed).

## Full set — new page
1. What do you sell or offer, and who buys it?
2. What should a visitor do on the site (call, book, buy, sign up, download)?
3. What do your customers do with the product — the 3 main things (these become the
   "how it works" story)?
4. What makes you different from others in your field?
5. What do you already have: photos, logo, brand colours, product files, documents,
   video? (Paths or links — real material beats anything invented.)
6. Any websites or brands you like, from any field — and in a few words, what you like
   about them ("feels expensive", "simple", "friendly").
7. How should a visitor feel after the first screen — like in an expensive boutique,
   a friendly neighbourhood shop, a precise workshop, something else?
8. Name and prices: real (give them) or should I use placeholders?
9. Which of these extras would you like? (Pick any, or "none", or "you decide".)
   1. A 3D model of your product or symbol that turns as you scroll
   2. A video that plays frame by frame as you scroll (like Apple's product pages)
   3. Short animated clips or illustrations (motion design)
   4. Sound: soft sounds on clicks and scroll, background ambience (always off until
      the visitor turns it on)
   5. A voice-over or narrated intro
   6. Interactive toys: build-your-own / configurator, before-after slider, a map
   Mention cost honestly where it applies: voice-over and custom video need a
   text-to-speech service or source footage; 3D and scroll video make the page heavier.
10. Will people buy on the site (cart, payment, delivery)? 1. Yes, now 2. Later 3. No.
    Only «yes, now» brings in `shop.md`; «later» builds nothing for it yet.
11. Which languages should the site be in? Recommend: build in one language first,
    translate once they like the site — changing a design in two languages costs double.

Hosting, forms, analytics and legal details are asked at launch (`launch.md`), not here.

## Existing-page set
First post a 5–8 line summary: sections, stack, styling, what animates, what looks weak.
Then ask:
1. Level of change:
   - **Polish** — same layout, sections, copy, colors. Better motion, spacing, type,
     widgets. Nothing removed.
   - **Refresh** — same structure and content, new art direction.
   - **Redesign** — keep content and stack, new layout and scenes.
2. What must not change (brand color, a section, copy, framework).
3. Which sections matter most.
4. Assets to add (photos, 3D).

Existing page rules: stay in its framework and styling system; change one section at a
time; post a short plan before editing; keep a way back (git branch or copy).

## After the answers
Restate the brief in 4–6 lines and go to phase 1. Do not ask a second round unless an
answer contradicts another. The client usually doesn't know yet what they want in
detail (tone of copy, captions, navigation, extra sections): pick strong defaults for
the first build and let them refine it in phase 7.

## Mockups (phase 2a–2b)
When the client asks to see mockups or variants first (or is unsure about the direction):
1. Instead of one direction, write three short ones (core idea, character, layout, palette,
   type) and make a static HTML mockup of each in `variants/`, radically different in idea,
   layout and type (not one design in three palettes), plus one page that shows them side
   by side. Real content and the client's own material, not lorem ipsum. The client's pick
   is the phase 2 checkpoint; `DIRECTION.md` is then written for the chosen one.
2. Copy the chosen mockup to its own folder and revise it there; it stays plain
   HTML/CSS/JS while the design is still moving. Search files and the stack come later.
3. When the client says it looks good, say where things stand and ask before moving on:
   «This is still a static HTML mockup. Shall we move it to a proper stack?» Offer 2–3
   options that fit what the site must do, with one line each, and «or name your own»:
   - Vite + React — showcase and docs sites, everything static (`toolkit.md` default);
   - Next.js — selling (now or planned later), forms with a server, sign-in, anything
     with server code;
   - Astro — mostly text: blog, notes, many content pages.
   Move only after they choose; the move keeps the approved look exactly.
4. At the same moment, ask once whether they want a brand kit: logo files, social avatars
   and covers, share images. Render them at twice the platform size as PNG; never upscale.

## If the client asks «isn't this a copy of …?»
Don't raise similarity yourself. When the client asks: list what the page shares with
the reference (layout, character, palette, type, motion) in plain words, give no legal
verdict, and ask which of these to change; then change the signature one(s) they pick.

## Checkpoint (phase 2) — explain, don't quiz
Tell the client what you will make and why, in 2–4 plain sentences, e.g. "I'll make it
warm and tactile — handmade things sell on touch, so the first screen shows the wreath
close up, turning as you scroll." If you want to use 3D, scroll video, motion clips or sound that the client did not
already ask for in question 9, say so here in one line with the reason, and use it only
if they agree. Then ask "Go, or change something?". If they are unsure or reject the
direction, offer the mockups above.

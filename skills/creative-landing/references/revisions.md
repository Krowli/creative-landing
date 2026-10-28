# Phase 7 — Revisions: turning plain-words feedback into fixes

Clients describe problems in everyday words. Translate each complaint into concrete
fixes, make them, and check the result the same way the complaint was noticed (a
screenshot of that spot, a frame sequence for motion, an fps number for lag).

| The client says | Usually means | Fix |
|---|---|---|
| "looks cheap" | cramped spacing, random fonts, stock icons, weak contrast | more space, one expressive type pair, own graphic elements, stronger contrast |
| "boring" | no main scene, everything the same size, motion without meaning | one strong scene, sharp size hierarchy, motion that explains the product |
| "blends in", "everything merges" | too little contrast between background, cards, text | separate the tones, a dark chapter or shadow, check text contrast ≥ 4.5:1 |
| "floats in the air", "crooked" | no grid or support, uneven spacing, 3D parts unattached | one grid, spacing from the scale, every part connected to its support |
| "too much going on" | no hierarchy, everything animates | remove half, one motion idea per section, empty space |
| "things overlap", "runs into each other" | elements cross during animation | check overlap on every frame, separate them in time or space |
| "it lags" | heavy effects on scroll, SVG masks/filters redrawn every frame | draw once, animate transform/opacity only, measure frames before and after |
| "the text makes no sense" | jargon, internal terms | problem → what it does → why it's safe → how to start, plain words |
| "I don't get what this is" | the first screen doesn't say what and why | one sentence of value in the hero, a before/after example |
| "doesn't look like our product / brand" | invented visuals instead of their material | use their photos, products and colours; rebuild the key visual from them |
| "cut off", "doesn't fit" | object leaves the frame at some scroll position or screen size | project its bounds per progress step at desktop and phone, fix framing |

When a complaint isn't in the table, ask one short question about where they see it
("which section / which moment?"), not about design.

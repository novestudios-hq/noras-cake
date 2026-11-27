# Nora’s Cake — Five-page website plan

## Scope

Build a polished, responsive five-page website for Nora’s Cake in Ferizaj. The website uses a shared visual system but gives each page a distinct job: the home page introduces the brand, Services explains the offer, Weddings & Fejesa creates a high-intent path for event clients, Gallery showcases the work, and Contact / Order converts interest into a useful enquiry.

## Design direction

**Chosen style: soft handmade bakery editorial.** It keeps the premium patisserie foundation but adds a warmer, more tactile bakery feeling through gentle surfaces, rounded photo framing, and quieter romantic details.

- **Design movement:** modern patisserie editorial with soft bridal stationery cues.
- **Core principles:** generous negative space, cake-first photography, gentle tactile framing, delicate typographic contrast, clear conversion paths.
- **Color philosophy:** warm paper, blush, and cream should feel like bakery wrapping and soft icing; burgundy gives Nora’s Cake an ownable premium anchor; muted gold is reserved for small details so the page stays tender rather than ornate.
- **Layout paradigm:** an asymmetrical editorial flow with offset image cards, a moving service ticker, and full-width color bands rather than a centered template grid.
- **Signature elements:** Parisienne-style script wordmark, softly rounded photo frames with one slightly irregular corner, thin burgundy rules, small circular seal motif, and hand-lettered-style italic emphasis.
- **Interaction philosophy:** every interaction should reduce ordering friction; filter the gallery, jump to the right section, or open WhatsApp/phone directly.
- **Animation:** restrained entrance motion, slow image hover zoom, and a continuous service ticker. Gallery images open as still photographs; real videos should only be added when Nora’s original video files are available, never inferred from social-media screenshots.
- **Typography system:** Parisienne for the wordmark, Cormorant Garamond for expressive headings and product labels, DM Sans for navigation, form-like text, and CTAs.
- **Brand essence:** custom cakes and sweets for Ferizaj celebrations, made with care and designed around the person and occasion. Personality: elegant, warm, attentive.
- **Brand voice:** intimate, simple, and specific. Example lines: “Momente të ëmbla, të bëra vetëm për ju.” and “Na tregoni për ditën; ne kujdesemi për detajet.”
- **Wordmark concept:** “Nora’s” in a flowing signature with a compact “CAKE • FERIZAJ” line beneath; the future logo can add a small floral seal rather than a cupcake icon.
- **Signature brand color:** burgundy `#76263F`, supported by blush `#F8E5E7` and cream `#FFFAF4`.

## Implementation approach

Use a lightweight static web stack so the site remains easy to export to GitHub Pages or adapt into a framework later. `index.html` owns the home page; `services/index.html`, `weddings/index.html`, `gallery/index.html`, and `contact/index.html` own the four supporting pages. `styles.css` owns the shared design system and page layouts, while `app.js` owns mobile navigation, gallery filtering, and the demo form response. Local assets live in `assets/` and use project-relative paths so both the Manus preview and GitHub Pages project URL resolve them correctly.

The current content is in Albanian with direct actions for WhatsApp, phone, Instagram, and location. Social images are treated as demo previews and should be replaced by owner-approved source files before public launch.

## Project structure

- `index.html`: brand-led home page with hero, services snapshot, gallery preview, process, and CTA.
- `services/index.html`: service overview covering weddings, celebrations, cheesecake, and sweets.
- `weddings/index.html`: dedicated high-intent page for wedding and engagement cake enquiries.
- `gallery/index.html`: filterable cake gallery with category labels and image notes.
- `contact/index.html`: contact details, order enquiry form, and WhatsApp path.
- `styles.css`: tokens, typography, editorial layout, responsive breakpoints, motion.
- `app.js`: mobile nav and category filter interactions.
- The supplied menu poster is reference-only; its service information is reflected in the page copy, while the poster image itself is not displayed.
- `public/assets/social/`: temporary social-preview gallery imagery.
- `manus-routes.json` and `public/manus-routes.json`: synchronized five-page route manifests.
- `app.config.ts`: project logo metadata.
- `package.json`: managed preview command.

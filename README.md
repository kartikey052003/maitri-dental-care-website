# Maitri Dental Care – website

Static site: no build step, no backend.

## Run in VS Code
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.
(Or run `npx serve .` / `python -m http.server` in this folder.)

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or normal web hosting). `index.html` must stay at the top level.

## After you have a domain
- Add `sitemap.xml` and a `Sitemap:` line in `robots.txt`.
- Canonical and og:url are set automatically from the live domain.
- Replace the Google Maps link in `script.js` (`MAPS_URL`) with the clinic's verified Google Maps place link.
- Optional: add a 1200x630 share image and an `og:image` tag.

## Edit content
- Phone/WhatsApp number and message: top of `script.js` (`NUM`, `BASE`).
- Services and FAQs: arrays `S` and `F` in `script.js`.
- Colours: CSS variables at the top of `styles.css`.

# Linnea Sablosky — website

One-page static site. No Jekyll. GitHub Pages via Actions.

Review URL (until a custom domain): `https://linneapatricia.github.io/Linnea-Sablosky-website/`

## Edit loop

1. GitHub Desktop → Pull if needed → Open in VS Code
2. Preview: open `index.html` in a browser, or from the terminal in this folder:
   `python3 -m http.server 4000` → http://127.0.0.1:4000
3. Edit copy in `index.html`. Colors live in `css/main.css` under `:root`
4. Commit + Push in GitHub Desktop. Live site updates in a minute or two.

## Files

- `index.html` — all page copy. Change the words.
- `css/main.css` — colors at the top (`:root`)
- `js/main.js` — jump-nav highlight only. Leave alone unless asked.
- `images/` — drop photos here, then point at them from `index.html` / `css/main.css`
- Do not edit `.github/`

## Design notes (for round 2)

- Fixed atmospheric background; solid color slabs scroll over it (Hana structure + Brìghde boldness)
- Jump nav anchors down the page
- Palette: primary red / yellow / blue (from the photo set) + ink / paper
- Type: Oswald (display, all-caps) + IBM Plex Sans (body)
- Photos: drop files in `images/`. Web-sized copies are what the site uses. Camera originals can live in `images/originals/` (gitignored).
- Current: `background` = fixed hero atmosphere; `portrait` = full-bleed band before Bio.
- *Lean* listen/buy URL still TBD in the Lean section
- Hire section covers arranging, vocals, songwriting, touring, teaching, workshops
- Yosemite Choir has membership form link

## Domain

They own the GitHub account and the registrar forever. Hosting is free while the repo stays public.

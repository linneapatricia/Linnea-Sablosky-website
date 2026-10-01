# Linnea Sablosky — website

One-page static site deployed with GitHub Pages via Actions.

## How to make changes

1. GitHub Desktop → Pull if needed → Open in VS Code
2. Preview: open `index.html` in a browser, or from the terminal in this folder:
  `python3 -m http.server 4000` → [http://127.0.0.1:4000](http://127.0.0.1:4000)
3. Edit copy in `index.html`. Colors live in `css/main.css` under `:root`
4. Commit + Push in GitHub Desktop. Live site updates in a minute or two.

## Files

- `index.html` — all page copy. Change the words.
- `css/main.css` — colors at the top (`:root`)
- `js/main.js` — menu, nav highlight, auto-hides shows 3 days past `datetime`. Leave alone unless asked.
- `images/` — drop photos here, then point at them from `index.html` / `css/main.css`
- Do not edit `.github/`


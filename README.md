# Linnea Sablosky — website

This is a one page site - once you push your changes, Github Actions automatically updates [linneasablosky.com](http://linneasablosky.com) 🪄

## One-time setup

1. Install [GitHub Desktop](https://desktop.github.com/). Click the Mac icon on your computer — if the chip says Apple, grab the Apple Silicon download; otherwise grab the Intel one.
2. Go to [the repo](https://github.com/linneapatricia/Linnea-Sablosky-website), click the green **Code** button, and open it in GitHub Desktop. Choose where to save it on your computer.
3. Install [Visual Studio Code](https://code.visualstudio.com/). Close the chat panel, skip logging in. Click **Open Folder** and go to wherever you saved the repo.



## Making changes

1. Open GitHub Desktop. Click **Fetch**, then **Pull** if there are changes.
2. In VS Code, right-click `index.html` → **Open in Integrated Browser**.
3. Open `index.html` in the text editor, find what you need to change.
4. Change it, press **Cmd+S** to save.
5. Check the preview in the browser tab.
6. If it looks good, go to GitHub Desktop, type a short note about what you changed, and press **Commit**.
7. Press **Push** in GitHub Desktop.
8. Watch it update at [Actions](https://github.com/linneapatricia/Linnea-Sablosky-website/actions) — when it's green, refresh [linneasablosky.com](https://linneasablosky.com/) and make sure it looks right. Also check it on your phone.



## HTML cheats

- **tag** = what's inside the `<>` — e.g. `<li>` or `<a>`
- **block** = everything from an open tag to its close tag — e.g. `<li>.....</li>`
- **close tag** = a tag with a `/` at the start — e.g. `</li>`
- `li` = list item
- `ul` = unordered list
- `a` = link. Change the `href` to where you want the link to go.
- `<!--` = start of a comment
- `-->` = end of a comment
- To hide something temporarily: put `<!--` before it and `-->` after it. To unhide it, delete those comment markers.



## Adding / deleting shows

1. Copy a whole `<li>.....</li>` block from another show and paste it in with the others.
2. Change:
   - the date in the `<time>` tag (`datetime="YYYY-MM-DD"`) — this is the machine date the site uses
   - the white text inside the `<time>` block — that's the date people see on screen
   - the name / description in the `<span class="show-what">`
   - the link in the `<a>` tag (or delete the whole `<a>...</a>` if there isn't one)

Shows hide themselves on the site 3 days after the date in that `<time>` tag. For multi-day runs, put the date of the **last** show so it stays up until then — not the first night. You can delete old blocks when you add new ones to keep things tidy, but you don't have to do it on a schedule.

Shows display in order based on that `<time>` date. If that ever bothers you I can change it, but it should stay neat without you reordering things by hand.



## Adding / updating music

Copy a `<li>.....</li>` block from an existing one and paste it wherever you want it in the list. Edit the `href` on the `<a>` to your new URL, and edit the white text between `<a>...</a>` to whatever should show up on the page.



## Other hints

- Press **Option+Z** once in VS Code so the text wraps instead of making you scroll sideways.
- **Cmd+X** cuts (copies and deletes).
- If the live site looks weird or stuck on an old version, try **Cmd+Shift+R** to force-refresh the page.



## If the site breaks

If something looks bad or weird after a change, check what you did:

- [Commit history on GitHub](https://github.com/linneapatricia/Linnea-Sablosky-website/commits/main/), or History in GitHub Desktop

If you need to undo something, you can right-click a commit in GitHub Desktop History and choose **Reset to Commit** — but probably just call me if you need help here.

## Future: transferring the domain

When you transfer the domain (pick a registrar like GoDaddy or Cloudflare and make an account), go to the GitHub repo → **Settings** → **Pages** and force-enable HTTPS. (And make sure all the DNS records are set up right according to this [Github guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)).

## Files

- `index.html` — all page copy. Change the words.
- `css/main.css` — colors at the top (`:root`)
- `js/main.js` — menu, nav highlight, auto-hides shows 3 days past `datetime`. Leave alone unless asked.
- `images/` — drop photos here, then point at them from `index.html` / `css/main.css`
- Don't edit `.github/` , robots.txt, .nojekyll, .gitignore, CNAME, etc.


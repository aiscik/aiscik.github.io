# AI and Science: Evolution or Extinction? — Workshop Website

Static website for the NeurIPS 2026 workshop. Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

Three pages, navigated by the top menu (About uses the full title banner; the
others use a slimmer one):

```
index.html                   # About: the workshop, scope, dates, speakers, organizers
schedule/index.html          # Schedule: the day's schedule
call-for-papers/index.html   # Call for Papers: call (with scope), tracks, guidelines
css/styles.css               # all styling (design tokens at the top in :root)
js/main.js                   # mobile nav toggle (site works without JS)
assets/headshots/            # placeholder headshot SVGs — replace with real photos
```

The Schedule page links across to the speaker cards on the About page
(e.g. `/#speaker-1`). Links to CSS/JS carry a `?v=N` query to defeat GitHub
Pages' caching — bump `N` on every page when you change `styles.css` or
`main.js`.

## Previewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

## Replacing placeholder content

- **Text**: the held (commented-out) lorem ipsum lives in `call-for-papers/index.html`; each section on every page is marked with a `<!-- ======= SECTION ======= -->` comment.
- **Headshots**: drop real photos (ideally square-ish, ≥400px wide) into `assets/headshots/` and update the `src` attributes. The arched-frame placeholder SVGs can be deleted once replaced.
- **Colors/fonts**: edit the CSS custom properties in the `:root` block at the top of `css/styles.css`.

## Deploying

The site is published from the `main` branch of `aiscik/aiscik.github.io`
via GitHub Pages, at <https://aiscik.github.io/>.

The repository name has to stay `aiscik.github.io` — that is what makes
Pages serve it at the root of the address rather than in a subpath.

Deploying a change is just a push:

```bash
git add -A && git commit -m "Describe the change" && git push
```

Pages rebuilds automatically, usually within a minute. A `.nojekyll` file at the
repo root tells GitHub to serve the files as-is rather than running them through
Jekyll.

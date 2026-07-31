# AI and Science: Evolution or Extinction? — Workshop Website

Static single-page website for the NeurIPS 2026 workshop. Plain HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html          # the whole site (all sections)
css/styles.css      # all styling (design tokens at the top in :root)
js/main.js          # mobile nav toggle + scroll-spy (site works without JS)
assets/headshots/   # placeholder headshot SVGs — replace with real photos
```

## Previewing locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

## Replacing placeholder content

- **Text**: all lorem ipsum lives in `index.html`; each section is marked with a `<!-- ======= SECTION ======= -->` comment.
- **Headshots**: drop real photos (ideally square-ish, ≥400px wide) into `assets/headshots/` and update the `src` attributes. The arched-frame placeholder SVGs can be deleted once replaced.
- **Colors/fonts**: edit the CSS custom properties in the `:root` block at the top of `css/styles.css`.

## Deploying

The site is published from the `main` branch of `nsurijr/neurips2026-ai-science`
via GitHub Pages, at <https://nsurijr.github.io/neurips2026-ai-science/>.

Deploying a change is just a push:

```bash
git add -A && git commit -m "Describe the change" && git push
```

Pages rebuilds automatically, usually within a minute. A `.nojekyll` file at the
repo root tells GitHub to serve the files as-is rather than running them through
Jekyll.

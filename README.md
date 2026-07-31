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

## Publishing to GitHub Pages

1. Create a repository on GitHub (e.g. `your-org/neurips2026-ai-science` or `your-org.github.io`).
2. From this folder:

```bash
git init && git add -A && git commit -m "Workshop website" && git branch -M main && git remote add origin git@github.com:YOUR-ORG/YOUR-REPO.git && git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root → Save**.
4. The site appears at `https://YOUR-ORG.github.io/YOUR-REPO/` within a minute or two.

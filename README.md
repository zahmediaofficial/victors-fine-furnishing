# Victor's Fine Furnishing — website

A static website for **Victor's Fine Furnishing**, custom furniture handcrafted in
Siparia, Trinidad & Tobago. Built from the client's design-concept poster
("made for your home.") and brand logo.

- Bespoke kitchens · custom furniture · home accessories
- Workshop: #99 Coora Branch Road, Siparia, Trinidad & Tobago
- Contact: vffurnishings@gmail.com · Facebook: Victor's Fine Furnishing

## Structure

```
index.html      — the whole site (one page)
styles.css      — all styling (poster black/white + logo olive & gold)
script.js       — menu, scroll reveals, details filter, quote form (mailto)
assets/         — images (see CREDITS.md for sources & licences)
.github/workflows/pages.yml — GitHub Pages deploy (Actions)
```

No build step, no dependencies. Plain HTML/CSS/JS.

## Run it locally

```sh
python3 -m http.server 8080
# then open http://localhost:8080
```

## Publish on GitHub Pages

1. Push this repo to GitHub (see below if the repo doesn't exist yet).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/pages.yml` deploys it.

## Notes

- The quote form opens the visitor's email app pre-addressed to
  vffurnishings@gmail.com. Nothing is stored by the site. To use a hosted
  form instead (e.g. Formspree/Jotform), swap the handler in `script.js`.
- Imagery is illustrative (see CREDITS.md) — swap in real workshop photos
  in `assets/` using the same filenames and the site updates itself.

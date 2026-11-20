# Niche Books and Planners

Static Astro site for a small imprint of planners, journals, workbooks and niche guides. All titles are in development; nothing is for sale.

Live: https://lbd-dash.github.io/niche-books-planners/

```bash
npm install
npm run build   # SITE_URL and BASE_PATH env vars override the defaults
```

- `src/content/titles/*.md`: one file per title (schema in `src/content.config.ts`, validated at build)
- `src/data/partners.json`: storefront entries, URLs empty until approved
- `.github/workflows/deploy.yml`: deploys to GitHub Pages on push to main

See PLAYBOOK.md and STATUS.md.

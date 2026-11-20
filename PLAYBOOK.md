# PLAYBOOK: add one new title page

1. Pick the next title from the priority list below. Confirm the audience and what the title will contain.
2. Create `src/content/titles/<slug>.md` with all frontmatter fields: title, description (50-170 chars), format (Planner, Journal, Workbook or Guide), `status: In development`, audience, contents (3+ items), `price: Coming soon`, lastUpdated.
3. Never add ISBNs, prices, release dates, reviews, ratings, sales figures or testimonials. Any factual claim must link a source and show a last checked date, or be left out.
4. For store claims (KDP, Gumroad), cite the official page and add "last checked YYYY-MM-DD".
5. Run `npm run build`. The schema fails the build on missing or invalid fields.
6. Check for the em dash character: `grep -rn "$(printf '\xe2\x80\x94')" src dist` must return nothing. Avoid "passive income" and "guaranteed income" wording.
7. Commit source only (never node_modules or dist) and push to main. Confirm the Actions run is green and the live URL returns 200.
8. Update STATUS.md.

## Priority list of next pages

1. Choose the first real niche guide topic and replace the template guide page (needs Kevin's decision and sourced research).
2. Sample pages page (a free preview of one planner spread), once designed.
3. "How we research" page describing the source and review process.
4. Contact page with a mailto, once Kevin supplies an address (set CONTACT_EMAIL in `src/lib/url.ts`).
5. Store links (fill `src/data/partners.json`) only after Kevin opens KDP or Gumroad accounts and approves.
6. Pricing, only after Kevin approves.

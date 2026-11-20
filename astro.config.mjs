// @ts-check
import { defineConfig } from 'astro/config';
const site = process.env.SITE_URL || 'https://lbd-dash.github.io';
const base = process.env.BASE_PATH ?? '/niche-books-planners/';
export default defineConfig({ site, base, trailingSlash: 'always', build: { format: 'directory' }, compressHTML: true });

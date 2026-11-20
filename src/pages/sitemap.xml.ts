import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';
export const GET: APIRoute = async ({ site }) => {
  const titles = await getCollection('titles');
  const urls = ['', 'titles/', 'about/', 'faq/', 'privacy/', 'disclosure/', ...titles.map((t) => `titles/${t.id}/`)].map((p) => absUrl(p, site));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') + `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

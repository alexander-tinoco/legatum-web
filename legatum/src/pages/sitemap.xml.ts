import { getCollection } from 'astro:content';
import { services, site } from '../data/site';

export async function GET() {
  const now = new Date().toISOString().split('T')[0];

  const servicePages = services.map((service) => ({
    url: `${site.url}/servicios/${service.slug}/`,
    lastmod: now,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  let blogPages: Array<{ url: string; lastmod: string; changefreq: string; priority: string }> = [];
  try {
    const posts = await getCollection('blog');
    if (posts.length > 0) {
      blogPages = [
        { url: `${site.url}/blog/`, lastmod: now, changefreq: 'weekly', priority: '0.7' },
        ...posts.map((post) => ({
          url: `${site.url}/blog/${post.id}/`,
          lastmod: post.data.pubDate.toISOString().split('T')[0],
          changefreq: 'monthly',
          priority: '0.6',
        })),
      ];
    }
  } catch {
    // no blog collection yet
  }

  const mostRecentPost = blogPages.length > 1
    ? blogPages.slice(1).sort((a, b) => b.lastmod.localeCompare(a.lastmod))[0].lastmod
    : now;

  const pages = [
    { url: `${site.url}/`, lastmod: mostRecentPost, changefreq: 'weekly', priority: '1.0' },
    { url: `${site.url}/servicios/`, lastmod: now, changefreq: 'monthly', priority: '0.9' },
    ...servicePages,
    { url: `${site.url}/metodo/`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { url: `${site.url}/nosotros/`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { url: `${site.url}/casos-de-exito/`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    { url: `${site.url}/contacto/`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { url: `${site.url}/preguntas-frecuentes/`, lastmod: now, changefreq: 'monthly', priority: '0.6' },
    { url: `${site.url}/aviso-de-privacidad/`, lastmod: '2026-06-01', changefreq: 'yearly', priority: '0.3' },
    { url: `${site.url}/terminos/`, lastmod: '2026-06-01', changefreq: 'yearly', priority: '0.3' },
    ...blogPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

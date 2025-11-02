import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.lrbd.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();
  const now = new Date();
  const seenUrls = new Set<string>();

  // Start with the home page
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  seenUrls.add(siteUrl);

  // Add all documentation pages
  for (const page of pages) {
    const slug = page.slugs;
    const url = slug.length > 0
      ? `${siteUrl}/docs/${slug.join('/')}`
      : `${siteUrl}/docs`;

    // Skip if we've already added this URL
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);

    // Determine priority based on depth (root pages higher priority)
    const depth = slug.length;
    const priority = depth === 0 ? 0.9 : Math.max(0.3, 1 - depth * 0.1);

    // Determine change frequency (main pages change less frequently)
    const changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' =
      depth === 0 ? 'weekly' : depth === 1 ? 'daily' : 'weekly';

    sitemapEntries.push({
      url,
      lastModified: now,
      changeFrequency,
      priority,
    });
  }

  return sitemapEntries;
}


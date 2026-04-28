import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { industrySlugs } from '@/content/industries';
import { getAllBlogSlugs } from '@/lib/mdx';
import { locales, defaultLocale } from '@/i18n/routing';

const STATIC_PATHS = [
  '/',
  '/industries',
  '/solutions',
  '/integrations',
  '/pricing',
  '/blog',
  '/about',
  '/contact'
];

const LEGAL_PATHS = ['/privacy-policy', '/terms', '/cookie-policy'];

function buildAlternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((l) => [
      l,
      `${siteConfig.url}${l === defaultLocale ? '' : `/${l}`}${path === '/' ? '' : path}`
    ])
  );
  return { languages };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllBlogSlugs();
  const now = new Date();

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
    alternates: buildAlternates(path)
  }));

  const industryEntries = industrySlugs.map((slug) => ({
    url: `${siteConfig.url}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: buildAlternates(`/industries/${slug}`)
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: buildAlternates(`/blog/${slug}`)
  }));

  const legalEntries = LEGAL_PATHS.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
    alternates: buildAlternates(path)
  }));

  return [...staticEntries, ...legalEntries, ...industryEntries, ...blogEntries];
}

import type { Metadata } from 'next';
import { siteConfig } from './site';
import { locales, defaultLocale, type Locale } from '@/i18n/routing';

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = '/',
  locale = defaultLocale,
  image,
  noIndex
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const og = image || siteConfig.defaultOgImage;

  // hreflang map: every supported locale points at the localized variant.
  const languages = Object.fromEntries(
    locales.map((l) => [l, l === defaultLocale ? path : `/${l}${path}`])
  ) as Record<string, string>;
  languages['x-default'] = path;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages
    },
    openGraph: {
      type: 'website',
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale,
      images: [{ url: og, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitter,
      title,
      description,
      images: [og]
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true }
  };
}

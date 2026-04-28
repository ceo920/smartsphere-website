import { siteConfig } from '@/lib/site';
import type { Industry } from '@/content/industries';

export function organizationSchema() {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og/logo.png`,
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressLocality: 'Dubai'
    },
    areaServed: [
      'United Arab Emirates',
      'Qatar',
      'Pakistan',
      'Saudi Arabia',
      'Worldwide'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.contact.sales,
        telephone: siteConfig.contact.phoneTel,
        contactType: 'Sales',
        areaServed: ['AE', 'QA', 'PK', 'Worldwide'],
        availableLanguage: ['English', 'Arabic', 'Urdu']
      }
    ]
  };
  if (siteConfig.foundingDate) base.foundingDate = siteConfig.foundingDate;
  return base;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url
  };
}

export function productSchemaForIndustry(industry: Industry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${siteConfig.name} for ${industry.name}`,
    description: industry.metaDescription,
    brand: { '@type': 'Brand', name: siteConfig.name },
    category: industry.name,
    url: `${siteConfig.url}/industries/${industry.slug}`
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  };
}

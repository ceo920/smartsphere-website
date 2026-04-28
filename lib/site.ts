export const siteConfig = {
  name: 'SmartSphere Technologies',
  shortName: 'SmartSphere',
  legalName: 'SmartSphere Technologies',
  domain: 'smartspheretechnologies.ai',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://smartspheretechnologies.ai',
  description:
    'Conversational AI agents for healthcare, real estate, logistics, e-commerce, banking, education, hospitality, and customer support — in 26+ languages, with native CRM, WhatsApp, and telephony integrations.',
  defaultOgImage: '/og/default.png',
  twitter: '@smartsphere',
  foundingDate: '',
  contact: {
    email: 'sales@smartspheretechnologies.com',
    sales: 'sales@smartspheretechnologies.com',
    phone: '+971 58 302 1931',
    phoneTel: '+971583021931'
  },
  locations: [
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      flag: '🇦🇪',
      role: 'Headquarters · Sales & Customer Success',
      blurb:
        'Our HQ — sales, customer success, and regional partnerships across MENA.'
    },
    {
      country: 'Qatar',
      city: 'Doha',
      flag: '🇶🇦',
      role: 'GCC Regional Office · Business Development',
      blurb:
        'Regional office driving business development across Qatar and the wider GCC.'
    },
    {
      country: 'Pakistan',
      city: 'Pakistan',
      flag: '🇵🇰',
      role: 'Engineering Hub · Product & Operations',
      blurb:
        'Engineering, product development, and operations powering the platform.'
    }
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/smartsphere-technologies',
    twitter: 'https://twitter.com/smartsphere',
    github: 'https://github.com/smartsphere'
  }
} as const;

export type SiteConfig = typeof siteConfig;

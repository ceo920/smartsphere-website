// Content for the new marketing homepage. Industries grid, how-it-works steps,
// product showcase bullets, integrations logo grid, FAQs.

export type IndustryCard = {
  slug: string;
  name: string;
  description: string;
  icon:
    | 'HeartPulse'
    | 'Building2'
    | 'Truck'
    | 'ShoppingBag'
    | 'Banknote'
    | 'GraduationCap'
    | 'Hotel'
    | 'Headset';
};

export const industryCards: IndustryCard[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Appointment booking, triage, refill requests — without the wait.',
    icon: 'HeartPulse'
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Qualify leads, book tours, follow up after viewings — 24/7.',
    icon: 'Building2'
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    description: 'Track shipments, handle delivery exceptions, route driver requests.',
    icon: 'Truck'
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    description: 'Order status, returns, product Q&A across web, WhatsApp, and voice.',
    icon: 'ShoppingBag'
  },
  {
    slug: 'banking',
    name: 'Banking & Finance',
    description: 'Account servicing, KYC walk-throughs, fraud-alert resolution.',
    icon: 'Banknote'
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Admissions enquiries, fee reminders, student services in 26+ languages.',
    icon: 'GraduationCap'
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    description: 'Reservations, concierge requests, post-stay follow-ups.',
    icon: 'Hotel'
  },
  {
    slug: 'customer-support',
    name: 'Customer Support',
    description: 'Tier-1 deflection with grounded answers and clean ticket handoffs.',
    icon: 'Headset'
  }
];

export type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
  icon: 'Compass' | 'SlidersHorizontal' | 'PlugZap' | 'Rocket';
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Choose Your Industry',
    description:
      'Pick from 8 pre-trained playbooks. Each ships with industry-specific intents, scripts, and integrations.',
    icon: 'Compass'
  },
  {
    number: '02',
    title: 'Configure & Train',
    description:
      'Upload your knowledge base, define your tone, and set guardrails. We tune the agent on your data.',
    icon: 'SlidersHorizontal'
  },
  {
    number: '03',
    title: 'Integrate',
    description:
      'Connect your CRM, telephony, WhatsApp, calendar, and helpdesk. No-code wiring, full REST API.',
    icon: 'PlugZap'
  },
  {
    number: '04',
    title: 'Go Live',
    description:
      'Run real conversations across voice and chat. Monitor, A/B test, and iterate with conversation analytics.',
    icon: 'Rocket'
  }
];

export const productBullets: string[] = [
  'Real-time conversation transcripts between caller and AI agent',
  'Automatic sentiment analysis (Positive / Neutral / Negative)',
  'Multi-language detection and smart routing',
  'Smart categorization (Sales / Support / General)'
];

export type IntegrationLogo = {
  slug: string;
  name: string;
  src: string;
};

export const homepageIntegrationLogos: IntegrationLogo[] = [
  { slug: 'hubspot', name: 'HubSpot', src: '/images/integration-logos/hubspot.svg' },
  { slug: 'salesforce', name: 'Salesforce', src: '/images/integration-logos/salesforce.svg' },
  { slug: 'zoho', name: 'Zoho', src: '/images/integration-logos/zoho.svg' },
  { slug: 'whatsapp', name: 'WhatsApp Business', src: '/images/integration-logos/whatsapp.svg' },
  { slug: 'twilio', name: 'Twilio', src: '/images/integration-logos/twilio.svg' },
  { slug: 'telnyx', name: 'Telnyx', src: '/images/integration-logos/telnyx.svg' },
  { slug: 'ringcentral', name: 'RingCentral', src: '/images/integration-logos/ringcentral.svg' },
  { slug: 'calendly', name: 'Calendly', src: '/images/integration-logos/calendly.svg' },
  { slug: 'stripe', name: 'Stripe', src: '/images/integration-logos/stripe.svg' },
  { slug: 'zapier', name: 'Zapier', src: '/images/integration-logos/zapier.svg' },
  { slug: 'make', name: 'Make', src: '/images/integration-logos/make.svg' },
  { slug: 'slack', name: 'Slack', src: '/images/integration-logos/slack.svg' }
];

export type SecurityCard = {
  title: string;
  description: string;
  icon: 'Lock' | 'Globe2' | 'ShieldCheck' | 'BadgeCheck' | 'KeyRound' | 'FileCheck2';
};

export const securityCards: SecurityCard[] = [
  {
    title: 'End-to-End Encryption',
    description: 'TLS 1.3 in transit, AES-256 at rest, key management via cloud KMS.',
    icon: 'Lock'
  },
  {
    title: 'Regional Data Residency',
    description: 'UAE, EU, and US deployment options to meet local data-handling needs.',
    icon: 'Globe2'
  },
  {
    title: 'GDPR-Aligned Data Handling',
    description: 'Designed to support GDPR compliance — documented flows and DSAR process.',
    icon: 'ShieldCheck'
  },
  {
    title: 'UAE PDPL-Ready',
    description: 'Built with the UAE Personal Data Protection Law in mind from day one.',
    icon: 'BadgeCheck'
  },
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions for admins, builders, reviewers, and viewers.',
    icon: 'KeyRound'
  },
  {
    title: 'Audit Logs & Data Export',
    description: 'Full transparency. Export your conversations and data at any time.',
    icon: 'FileCheck2'
  }
];

export const securityRoadmap: string[] = [
  'SOC 2 Type II audit (2026)',
  'HIPAA-compliant deployments (Enterprise)',
  'ISO 27001 (planned)'
];

export type HomeFAQ = { q: string; a: string };

export const homepageFAQ: HomeFAQ[] = [
  {
    q: 'How long does it take to get a SmartSphere agent live?',
    a: 'Most customers go live in 2–3 weeks. Our team handles the custom build, integrations, and two team training sessions during the included $495 setup engagement (waived on Growth and Enterprise).'
  },
  {
    q: 'Which languages do SmartSphere agents speak?',
    a: 'We support 26+ languages including Arabic (with full RTL handling), English, Spanish, French, German, Mandarin, Hindi, Urdu, and many more. Voice agents use locale-aware accents and pronunciation.'
  },
  {
    q: 'What systems do you integrate with?',
    a: 'Native connectors for HubSpot, Salesforce, Zoho, WhatsApp Business API, Twilio, Telnyx, RingCentral, Calendly, Stripe, Zapier, Make, Slack, and more — plus a REST API for custom systems.'
  },
  {
    q: 'Where is my data stored?',
    a: 'We offer regional data residency in the UAE, EU, and US. Your conversation data, recordings, and customer records stay in the region you choose. Available on Growth and Enterprise.'
  },
  {
    q: 'How does pricing work?',
    a: 'Four tiers: Starter at $300/mo, Pro at $750/mo, Growth at $1,800/mo, and custom Enterprise. Starter and Pro include a one-time $495 setup fee; Growth and Enterprise have setup waived. All paid plans include a 30-day money-back guarantee.'
  },
  {
    q: 'What kind of support do I get?',
    a: 'Email support on Starter, priority email + chat on Pro, a dedicated Customer Success Manager and shared Slack channel on Growth, and a dedicated support engineer with a 99.9% SLA on Enterprise.'
  }
];

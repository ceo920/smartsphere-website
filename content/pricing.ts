export type PricingTier = {
  name: string;
  monthly: string;
  annual: string;
  monthlyNumeric: number;
  annualNumeric: number;
  cadence: string;
  tagline: string;
  setupFee: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  customPrice?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    monthly: '$300',
    annual: '$240',
    monthlyNumeric: 300,
    annualNumeric: 240,
    cadence: '/month',
    tagline: 'For teams launching their first AI agent on a single workflow.',
    setupFee: '$495 one-time setup fee',
    features: [
      '1,000 voice minutes / month',
      '5,000 chat messages / month',
      '1 AI agent',
      '2 integrations (CRM + WhatsApp or telephony)',
      'English + 1 additional language',
      'Email support',
      '$0.30/min overage',
      '30-day money-back guarantee'
    ],
    cta: 'Get started',
    ctaHref: '/contact'
  },
  {
    name: 'Pro',
    monthly: '$750',
    annual: '$600',
    monthlyNumeric: 750,
    annualNumeric: 600,
    cadence: '/month',
    tagline: 'For teams running production agents across multiple channels.',
    setupFee: '$495 one-time setup fee',
    features: [
      '3,000 voice minutes / month',
      '15,000 chat messages / month',
      '5 AI agents',
      'All standard integrations (CRM, WhatsApp, telephony, email, calendar)',
      '5 languages',
      'Priority email + chat support',
      '$0.25/min overage',
      'Workflow builder, conversation analytics',
      '30-day money-back guarantee'
    ],
    cta: 'Book a demo',
    ctaHref: '/contact',
    highlighted: true
  },
  {
    name: 'Growth',
    monthly: '$1,800',
    annual: '$1,440',
    monthlyNumeric: 1800,
    annualNumeric: 1440,
    cadence: '/month',
    tagline: 'For scaling teams with global, multi-channel deployments.',
    setupFee: 'Setup fee waived',
    features: [
      '10,000 voice minutes / month',
      '50,000 chat messages / month',
      'Unlimited AI agents',
      'All integrations + custom REST API',
      '26+ languages',
      'Dedicated Customer Success Manager + Slack channel',
      '$0.18/min overage',
      'White-label option, advanced analytics, A/B testing',
      '30-day money-back guarantee'
    ],
    cta: 'Talk to sales',
    ctaHref: '/contact'
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    annual: 'Custom',
    monthlyNumeric: 0,
    annualNumeric: 0,
    cadence: '',
    tagline: 'For regulated industries, custom contracts, and on-prem.',
    setupFee: 'Setup fee waived',
    features: [
      'Unlimited voice minutes & chat messages',
      'Unlimited agents',
      'Custom integrations & on-premise option',
      'All 26+ languages',
      'Dedicated support engineer + 99.9% SLA',
      '$0.10/min usage rate (target)',
      'Custom MSAs, DPAs, BAA available',
      'Custom contracts and procurement workflows'
    ],
    cta: 'Talk to sales',
    ctaHref: '/contact',
    customPrice: true
  }
];

export type FeatureRow = {
  feature: string;
  starter: string | boolean;
  pro: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
};

export const featureMatrix: FeatureRow[] = [
  { feature: 'Voice minutes / month', starter: '1,000', pro: '3,000', growth: '10,000', enterprise: 'Unlimited' },
  { feature: 'Chat messages / month', starter: '5,000', pro: '15,000', growth: '50,000', enterprise: 'Unlimited' },
  { feature: 'AI agents', starter: '1', pro: '5', growth: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Languages', starter: '2', pro: '5', growth: '26+', enterprise: '26+' },
  { feature: 'CRM integration', starter: true, pro: true, growth: true, enterprise: true },
  { feature: 'WhatsApp Business API', starter: 'Optional', pro: true, growth: true, enterprise: true },
  { feature: 'Telephony', starter: 'Optional', pro: true, growth: true, enterprise: true },
  { feature: 'Email & calendar integrations', starter: false, pro: true, growth: true, enterprise: true },
  { feature: 'Custom REST API', starter: false, pro: false, growth: true, enterprise: true },
  { feature: 'Workflow builder', starter: false, pro: true, growth: true, enterprise: true },
  { feature: 'Conversation analytics', starter: 'Basic', pro: true, growth: 'Advanced', enterprise: 'Advanced' },
  { feature: 'A/B testing', starter: false, pro: false, growth: true, enterprise: true },
  { feature: 'White-label option', starter: false, pro: false, growth: true, enterprise: true },
  { feature: 'On-premise deployment', starter: false, pro: false, growth: false, enterprise: true },
  { feature: 'Custom integrations', starter: false, pro: false, growth: 'Limited', enterprise: true },
  { feature: 'Overage rate', starter: '$0.30/min', pro: '$0.25/min', growth: '$0.18/min', enterprise: '$0.10/min target' },
  { feature: 'Setup fee', starter: '$495', pro: '$495', growth: 'Waived', enterprise: 'Waived' },
  { feature: 'Support', starter: 'Email', pro: 'Priority email + chat', growth: 'Dedicated CSM + Slack', enterprise: 'Dedicated engineer' },
  { feature: 'SLA', starter: 'Best effort', pro: '99.5%', growth: '99.9%', enterprise: '99.9%+ custom' },
  { feature: '30-day money-back guarantee', starter: true, pro: true, growth: true, enterprise: 'Negotiable' },
  { feature: 'BAA / DPA / custom MSA', starter: false, pro: false, growth: 'On request', enterprise: true }
];

export const allPlansInclude: { title: string; description: string }[] = [
  {
    title: '26+ language base infrastructure',
    description: 'Full access to our multilingual stack — pay for what you enable per agent.'
  },
  {
    title: 'GDPR-aligned data handling',
    description: 'Documented data flows, sub-processor list, and data subject rights process.'
  },
  {
    title: 'End-to-end encryption',
    description: 'TLS 1.3 in transit, AES-256 at rest, key management via cloud KMS.'
  },
  {
    title: 'Role-based access control',
    description: 'Granular permissions for admins, builders, reviewers, and viewers.'
  },
  {
    title: 'Conversation logs',
    description: 'Searchable transcripts and recordings with redaction options.'
  },
  {
    title: 'Data export',
    description: 'CSV and JSON export of conversations, contacts, and analytics — at any time.'
  },
  {
    title: 'Weekly product updates',
    description: 'Continuous deployment of agent capabilities and integrations.'
  },
  {
    title: 'Knowledge base',
    description: 'Self-serve docs, recipes, and a sample-app gallery to get unblocked fast.'
  }
];

export type PricingFAQ = { q: string; a: string };

export const pricingFAQ: PricingFAQ[] = [
  {
    q: 'How does the setup work?',
    a: 'Our team will (1) build a custom AI agent from scratch trained on your data, (2) set up full integration with your CRM, WhatsApp, telephony, and other tools, (3) conduct two training sessions for your team, and (4) provide 30 days of dedicated post-launch support. Setup is a one-time $495 fee on Starter and Pro, and waived on Growth and Enterprise.'
  },
  {
    q: 'What if I exceed my minutes or messages?',
    a: 'You can pick a soft cap (notify and pause until next cycle) or pay-as-you-go overage at $0.30, $0.25, $0.18, or $0.10 per voice minute on Starter, Pro, Growth, and Enterprise respectively. Chat messages overage is billed similarly. Overage is opt-in.'
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a 30-day money-back guarantee on all paid plans instead of a free trial — that means you can run a real production deployment, and if it does not work, we refund the subscription fee. The setup fee is non-refundable as it covers custom build work.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly plans cancel at the end of the current billing cycle. Annual plans can be cancelled with a pro-rated refund within the first 30 days under the money-back guarantee; after that, annual plans run to term.'
  },
  {
    q: 'How does the money-back guarantee work?',
    a: 'If you cancel within 30 days of your first paid invoice, we refund the subscription fee in full. The one-time $495 setup fee on Starter and Pro is non-refundable because it covers dedicated build work delivered upfront.'
  },
  {
    q: 'Do you offer custom pricing?',
    a: 'Yes — Enterprise is fully custom. We also offer non-profit and education discounts. Talk to sales and tell us about your volume, integrations, and compliance needs.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Credit card (Visa, Mastercard, Amex) and ACH/SEPA bank transfer for monthly plans. Annual and Enterprise plans also support invoicing with NET 30 terms and procurement workflows.'
  },
  {
    q: 'Are there annual discounts beyond 20%?',
    a: 'The standard annual discount is 20% off monthly pricing. Multi-year commitments and high-volume Enterprise contracts can unlock additional discounts — discuss with sales.'
  }
];

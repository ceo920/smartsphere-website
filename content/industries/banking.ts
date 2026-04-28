import type { Industry } from './index';

export const banking: Industry = {
  slug: 'banking',
  name: 'Banking & Financial Services',
  shortName: 'Banking',
  tagline: 'Compliant, auditable agents for retail banks, lenders, and fintechs.',
  intro:
    'Banking customer service has the hardest constraint set in any industry: identity has to be verified, every interaction has to be auditable, sensitive data cannot leave approved boundaries, and the user experience still has to feel modern. SmartSphere Technologies deploys voice and chat agents that meet that bar — strong identity verification, region-pinned data residency, audit-grade logging, and policy-bound actions — across account servicing, KYC follow-ups, loan origination, and soft collections. They speak 26+ languages, run over phone, web, and WhatsApp, and integrate with the core systems your operations team already lives in.',
  hero: {
    title: 'Customer service that meets your compliance bar',
    subtitle:
      'AI voice and chat agents for account servicing, KYC follow-ups, collections, and loan origination — with audit-grade logging and data residency.'
  },
  metaTitle: 'Banking & Fintech AI Agents | Compliant by Design | SmartSphere',
  metaDescription:
    'Compliant AI voice and chat agents for banks, credit unions, lenders, and fintechs. Account servicing, KYC, collections, and origination in 26+ languages.',
  useCases: [
    {
      title: 'Account servicing and balance inquiries',
      description:
        'Authenticate the customer, look up balances and recent transactions, and explain charges in plain language without an agent in the loop.'
    },
    {
      title: 'KYC and document follow-ups',
      description:
        'Chase missing documents, walk customers through ID upload, and update onboarding status in real time across email, SMS, and voice.'
    },
    {
      title: 'Loan origination and pre-qualification',
      description:
        'Pre-qualify applicants conversationally, gather income and employment data, and hand off warm leads to a loan officer with full context.'
    },
    {
      title: 'Soft collections and payment plans',
      description:
        'Empathetic, compliant outbound that offers payment plans within policy and writes promises-to-pay back into your collections system.'
    },
    {
      title: 'Fraud alerts and confirmation calls',
      description:
        'Outbound voice and SMS for transaction verification with strong identity proofing and tamper-evident audit trails.'
    },
    {
      title: 'Multilingual customer support',
      description:
        '26+ languages including Spanish, Mandarin, and Arabic, with locale-aware tone for sensitive conversations.'
    }
  ],
  features: [
    {
      title: 'Audit-grade logging',
      description:
        'Every interaction is recorded, transcribed, and retained per your policy. Tamper-evident logs satisfy internal audit and regulator review.'
    },
    {
      title: 'Strong identity verification',
      description:
        'Voice biometrics, OTP via SMS or email, and knowledge-based authentication flows. Sensitive fields collected via DTMF with on-the-fly redaction.'
    },
    {
      title: 'Region-aware deployments',
      description:
        'EU, UK, US, and APAC data residency with region-pinned infrastructure. SOC 2 Type II and ISO 27001 in production.'
    }
  ],
  outcomes: [
    { metric: '45%', label: 'reduction in average handle time' },
    { metric: '2×', label: 'collections promise-to-pay rate' },
    { metric: '100%', label: 'call recording and audit coverage' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a regulated financial services stack',
    body:
      'Banks and fintechs need conversational AI that respects three things they already invest heavily in: identity, auditability, and data boundaries. SmartSphere Technologies was designed for that envelope. Sensitive fields like SSNs, account numbers, and security codes are collected via DTMF or constrained voice prompts, redacted on the fly, and never enter LLM context. Every interaction is recorded, transcribed, and retained per your retention policy, with tamper-evident logs that satisfy internal audit and regulator review. Deployments are region-pinned to EU, UK, US, or APAC residency, and we support BAA-equivalent terms for institutions that need them. The agent integrates with Salesforce Financial Services Cloud, Temenos, nCino, Plaid, and most core banking platforms — so the conversation produces clean, structured updates inside the systems your operations team already lives in.'
  },
  integrations: ['Salesforce Financial Services', 'Temenos', 'nCino', 'Plaid', 'Twilio'],
  faq: [
    {
      q: 'How are sensitive fields like SSN handled?',
      a: 'Sensitive data is collected via DTMF or constrained voice prompts with on-the-fly redaction. Raw values never enter LLM context, and they are stored in encrypted, region-pinned vaults with strict access policies.'
    },
    {
      q: 'Do you support data residency requirements?',
      a: 'Yes. Deployments are region-pinned and we support EU, UK, US, and APAC data residency. Each region runs in isolated infrastructure with no cross-region data movement.'
    },
    {
      q: 'What compliance certifications does SmartSphere Technologies hold?',
      a: 'SOC 2 Type II and ISO 27001 in production. We can sign BAA-equivalent terms and provide a compliance brief covering encryption, retention, and audit controls.'
    },
    {
      q: 'Can the agent transfer to a licensed loan officer?',
      a: 'Yes. Conversations that require licensed advice warm-transfer to a human with a structured summary, and the AI does not make recommendations outside its scoped playbook.'
    },
    {
      q: 'How does identity verification work?',
      a: 'You can mix voice biometrics, OTP via SMS or email, and knowledge-based authentication. The flow is configurable per channel and per workflow risk level.'
    }
  ],
  related: ['customer-support', 'healthcare', 'ecommerce']
};

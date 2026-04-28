import type { Industry } from './index';

export const education: Industry = {
  slug: 'education',
  name: 'Education',
  shortName: 'Education',
  tagline: 'From admissions to alumni — answer every student in their own language.',
  intro:
    'Schools, universities, and online learning providers face a hard inbound problem: thousands of prospective and current students asking the same hundred questions about admissions, financial aid, course selection, and registration — across email, web chat, phone, and WhatsApp, in dozens of languages, twenty-four hours a day. Hiring keeps up at orientation but not in October at 2am when an international applicant in Lagos has a deadline tomorrow. SmartSphere Technologies deploys AI voice and chat agents that handle the full lifecycle from inquiry to alumni engagement, with FERPA-aligned controls and integrations into Workday Student, Banner, and PowerSchool.',
  hero: {
    title: 'Admissions, advising, and student services that scale',
    subtitle:
      'AI agents for K-12, higher ed, and online learning. Handle admissions inquiries, financial aid questions, advising, and re-enrollment in 26+ languages.'
  },
  metaTitle: 'Education AI Agents for Admissions & Advising | SmartSphere',
  metaDescription:
    'Conversational AI for schools, universities, and online learning. Admissions, financial aid, advising, and student services in 26+ languages, 24/7.',
  useCases: [
    {
      title: 'Admissions inquiries and tour booking',
      description:
        'Answer program questions in plain language, qualify prospective students, and book campus or virtual tours into the right counselor’s calendar.'
    },
    {
      title: 'Financial aid and scholarship Q&A',
      description:
        'Walk applicants through FAFSA, scholarship deadlines, and aid package questions, escalating complex cases to a counselor with full context.'
    },
    {
      title: 'Course advising and registration help',
      description:
        'Help current students pick courses, check prerequisites against the SIS, and resolve registration errors without a wait in the advising queue.'
    },
    {
      title: 'Re-enrollment and retention outreach',
      description:
        'Outbound campaigns to at-risk and stopped-out students that re-engage them on their preferred channel and language.'
    },
    {
      title: 'Alumni engagement campaigns',
      description:
        'Conversational fundraising and event outreach that respects opt-outs and produces structured engagement data for your CRM.'
    },
    {
      title: 'Multilingual support for international students',
      description:
        '26+ languages including Mandarin, Hindi, Arabic, and Portuguese — critical for international recruitment markets.'
    }
  ],
  features: [
    {
      title: 'Student-data aware',
      description:
        'Connectors for Workday Student, Banner, and PowerSchool with FERPA-aligned access controls and consent capture.'
    },
    {
      title: 'Conversational in 26+ languages',
      description:
        'Critical for international applicants — agents reply natively, not via translation, with locale-aware tone.'
    },
    {
      title: 'Escalation to advisors',
      description:
        'Warm-transfer to human advisors with a structured summary and recommended next-best-action already in their queue.'
    }
  ],
  outcomes: [
    { metric: '+22%', label: 'inquiry-to-application conversion' },
    { metric: '24/7', label: 'admissions coverage worldwide' },
    { metric: '5×', label: 'advisor capacity in peak season' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into the student lifecycle',
    body:
      'Most institutions split the student lifecycle across systems and teams that don’t share a conversational layer: admissions runs Slate, registrar runs Banner or Workday, advising runs Salesforce, and IT keeps it all glued together. SmartSphere Technologies sits across that stack as a single front door for the student. The same agent that answers a prospective student’s question about transfer credit at midnight can answer their financial aid question in March, help them register for fall classes in July, and re-engage them as alumni five years later — same memory, same tone, same compliance posture. FERPA-aligned access controls determine what each conversation can see, and warm transfers carry full context to advisors so students don’t have to repeat themselves. International recruitment finally gets first-class multilingual coverage instead of business-hours staffing.'
  },
  integrations: ['Workday Student', 'Banner', 'PowerSchool', 'Salesforce Education Cloud', 'Slate'],
  faq: [
    {
      q: 'Are you FERPA-aligned?',
      a: 'Yes. We support FERPA-aligned data handling, including consent capture, scoped access controls, and audit logs that show what was disclosed in each conversation.'
    },
    {
      q: 'Can it handle financial aid questions?',
      a: 'Agents answer FAQ-level financial aid questions and walk applicants through FAFSA flows. Complex cases warm-transfer to a financial aid counselor with the full conversation summary.'
    },
    {
      q: 'Does it work for K-12 as well as higher ed?',
      a: 'Yes. Playbooks ship for K-12 enrollment, attendance and absence outreach, parent communication, and after-school program registration.'
    },
    {
      q: 'How does it handle international applicants?',
      a: '26+ languages with time-zone-aware outbound. The same agent answers a Lagos applicant in English at 2am and a Shanghai applicant in Mandarin at 7am with locale-aware tone.'
    }
  ],
  related: ['customer-support', 'healthcare', 'banking']
};

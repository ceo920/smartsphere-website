import type { Industry } from './index';

export const healthcare: Industry = {
  slug: 'healthcare',
  name: 'Healthcare',
  shortName: 'Healthcare',
  tagline: 'HIPAA-aware voice and chat agents for clinics, payers, and digital health.',
  intro:
    'Healthcare front-office teams field thousands of repetitive calls each week — appointment requests, prescription refills, intake forms, benefits questions — while clinical staff burn out and patients sit on hold. SmartSphere Technologies deploys HIPAA-aware AI voice and chat agents that handle these conversations end-to-end, integrate directly with your EHR and scheduling systems, and warm-transfer anything clinical to a real human. Our healthcare playbooks are pre-trained on common front-desk and contact-center workflows, and they speak 26+ languages, so multilingual patient populations get the same response time and quality as everyone else.',
  hero: {
    title: 'Healthcare AI agents that handle the calls clinics shouldn’t put on hold',
    subtitle:
      'Automate appointment scheduling, prescription refills, intake, and benefits checks with HIPAA-aware voice and chat agents — across phone, web, and SMS.'
  },
  metaTitle: 'Healthcare AI Voice & Chat Agents | HIPAA-Aware | SmartSphere',
  metaDescription:
    'HIPAA-aware AI voice and chat agents for healthcare. Automate scheduling, intake, refills, and benefits checks across phone, web, and SMS in 26+ languages.',
  useCases: [
    {
      title: 'Appointment scheduling and reminders',
      description:
        'Patients book, reschedule, and cancel by voice or chat. Agents check provider availability against your scheduler and send confirmations over SMS or email.'
    },
    {
      title: 'Patient intake and triage',
      description:
        'Collect demographics, insurance, and chief complaint before the visit, with adaptive questioning that follows your clinical intake forms.'
    },
    {
      title: 'Prescription refills and pharmacy callbacks',
      description:
        'Verify identity, confirm prescription details, and route refill requests to the right provider or pharmacy without front-desk involvement.'
    },
    {
      title: 'Insurance and benefits verification',
      description:
        'Run real-time eligibility checks, explain coverage in plain language, and capture authorizations so patients arrive informed.'
    },
    {
      title: 'Post-visit follow-up and surveys',
      description:
        'Automated follow-up calls and chats for adherence, recovery check-ins, and CAHPS-aligned satisfaction surveys.'
    },
    {
      title: 'After-hours and overflow coverage',
      description:
        'A 24/7 first-line responder that resolves common questions and pages on-call providers for true urgencies.'
    }
  ],
  features: [
    {
      title: 'HIPAA-aware data handling',
      description:
        'PHI is redacted in transcripts and logs by default; deployable to BAA-covered cloud regions with full audit trails.'
    },
    {
      title: 'EHR + scheduler integrations',
      description:
        'Native connectors for Epic, Cerner, athenahealth, and any FHIR-compliant system. Read and write appointments, demographics, and notes.'
    },
    {
      title: 'Clinical-safe guardrails',
      description:
        'Agents stay inside scoped playbooks and escalate clinical questions to staff with a structured handoff summary.'
    }
  ],
  outcomes: [
    { metric: '62%', label: 'reduction in missed appointments' },
    { metric: '24/7', label: 'patient access without after-hours staffing' },
    { metric: '3×', label: 'faster intake completion' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into healthcare front-office workflows',
    body:
      'Most clinics already run a scheduler, an EHR, and a phone system that don’t talk to each other. SmartSphere Technologies sits between the patient and that stack: the agent answers the phone or web chat, identifies the patient against your EHR, runs the appropriate playbook (booking, refill, intake), and writes the result back to the system of record. For anything outside its scope — clinical questions, complaint escalations, billing disputes — it warm-transfers to a human with a structured summary already in their queue, so staff don’t have to ask the patient to repeat themselves. We deploy region-pinned to BAA-covered cloud regions, redact PHI in transcripts and logs by default, and emit a full audit trail per interaction. Most teams get their first production scenario live in 2–3 weeks, starting with a single high-volume call type and expanding from there.'
  },
  integrations: ['Epic', 'Cerner', 'athenahealth', 'Twilio', 'Salesforce Health Cloud'],
  faq: [
    {
      q: 'Is SmartSphere Technologies HIPAA compliant?',
      a: 'SmartSphere Technologies supports HIPAA-aligned deployments including a signed BAA, PHI redaction in transcripts, region-pinned infrastructure, and tamper-evident audit logging. Contact us for a compliance brief and a copy of our SOC 2 Type II report.'
    },
    {
      q: 'Can the agent transfer to a live nurse or provider?',
      a: 'Yes. Agents follow clinical escalation rules and warm-transfer to staff over voice, with a structured summary delivered to the human queue so the patient does not need to repeat themselves.'
    },
    {
      q: 'Which EHRs are supported?',
      a: 'Epic, Cerner, and athenahealth ship with native connectors. Any FHIR-compliant system works out of the box, and custom integrations are available for legacy on-premise systems.'
    },
    {
      q: 'Does it work for multilingual patient populations?',
      a: 'Yes — SmartSphere Technologies speaks 26+ languages including Spanish, Mandarin, Arabic, Vietnamese, and Tagalog. The agent auto-detects the caller’s preferred language and replies natively, not via translation.'
    },
    {
      q: 'How long is implementation?',
      a: 'Most healthcare customers run their first production scenario within 2–3 weeks. We start narrow — typically scheduling or refills — and expand from there once metrics validate the pattern.'
    }
  ],
  related: ['customer-support', 'banking', 'hospitality']
};

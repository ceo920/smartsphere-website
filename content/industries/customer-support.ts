import type { Industry } from './index';

export const customerSupport: Industry = {
  slug: 'customer-support',
  name: 'Customer Support',
  shortName: 'Support',
  tagline: 'Tier-1 deflection that customers actually like.',
  intro:
    'Customer support is the most common starting point for conversational AI, and the most commonly disappointing. The average chatbot deflects a small slice of tier-1 questions, frustrates everyone else, and quietly hands ticket volume back to the queue. SmartSphere Technologies takes a different approach: it’s an agent, not a chatbot. It can take real actions in your stack — issuing refunds, updating subscriptions, rescheduling visits — not just paste FAQ text. It runs over voice, web chat, WhatsApp, and email with one shared knowledge surface. And every interaction is auto-scored on quality and CSAT prediction so you can see exactly where the AI is helping and where it isn’t.',
  hero: {
    title: 'Resolve more tickets without growing headcount',
    subtitle:
      'AI agents that handle tier-1 support, triage tier-2, and write a clean handoff for your humans — across phone, chat, and email in 26+ languages.'
  },
  metaTitle: 'AI Customer Support Agents | Tier-1 Deflection | SmartSphere',
  metaDescription:
    'Conversational AI for customer support. Tier-1 deflection, triage, and warm handoff with full context across voice, chat, and email in 26+ languages.',
  useCases: [
    {
      title: 'Tier-1 deflection across all channels',
      description:
        'Handle the high-volume questions — order status, password resets, billing, account changes — with grounded answers from your knowledge base.'
    },
    {
      title: 'Triage and routing for tier-2',
      description:
        'For escalations, the agent collects context, classifies severity, and routes to the right team with a structured summary already in their queue.'
    },
    {
      title: 'Knowledge-base grounded answers',
      description:
        'Agents reason over your KB, macros, and policies — no hallucinated answers, no contradictory advice across channels.'
    },
    {
      title: 'Multilingual support coverage',
      description:
        '26+ languages with locale-aware tone, so global customers get parity instead of a fallback experience.'
    },
    {
      title: 'Escalation with full context handoff',
      description:
        'When humans are needed, they pick up a conversation that already has summary, intent, and recommended next-best-action attached.'
    },
    {
      title: 'Auto QA on 100% of interactions',
      description:
        'Stop sampling 2% of conversations. Every interaction is auto-scored for quality, sentiment, and CSAT prediction.'
    }
  ],
  features: [
    {
      title: 'Helpdesk integrations',
      description:
        'Native Zendesk, Intercom, Salesforce Service Cloud, and Freshdesk connectors. Read tickets, write updates, close loops automatically.'
    },
    {
      title: 'Grounded in your knowledge',
      description:
        'Agents reason over your KB, macros, and policies — no hallucinated answers. If the agent doesn’t know, it says so and escalates.'
    },
    {
      title: 'Quality scoring built in',
      description:
        'Automated CSAT prediction, sentiment, and conversation quality scoring on every interaction — not a 2% sample.'
    }
  ],
  outcomes: [
    { metric: '74%', label: 'tier-1 ticket deflection' },
    { metric: '−38%', label: 'average handle time on tier-2' },
    { metric: '+11', label: 'CSAT points vs. legacy IVR' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a modern support organization',
    body:
      'A typical support stack already has a great helpdesk, a thoughtful KB, and a backlog that grows faster than headcount. Adding a chatbot on top usually adds a layer the customer wants to skip and the team has to maintain. SmartSphere Technologies is structured to do the opposite. It plugs into Zendesk, Intercom, or Salesforce Service Cloud as a first responder across voice, web chat, WhatsApp, and email. It reads your existing KB and macros so it answers exactly the way your team would, in 26+ languages. It can take real actions — issue a refund, swap a subscription tier, reschedule a service visit — not just hand the customer a help-center link. When a human takes over, the conversation arrives with summary, intent, and next-best-action; the customer never has to repeat themselves. And because every interaction gets auto-QA, you finally see what your support is actually doing instead of inferring from a sample.'
  },
  integrations: ['Zendesk', 'Intercom', 'Salesforce Service Cloud', 'Freshdesk', 'Twilio'],
  faq: [
    {
      q: 'How is this different from a chatbot?',
      a: 'It is an agent: it can take actions in your stack — refunds, subscription changes, service rescheduling — not just answer questions. It also runs over voice, not just chat, and maintains memory across channels.'
    },
    {
      q: 'How long is implementation?',
      a: 'Most customers run their first production scenarios within 2–3 weeks. We start narrow on a single high-volume topic and expand once metrics validate the pattern.'
    },
    {
      q: 'How do you prevent hallucinated answers?',
      a: 'Agents are grounded in your KB, macros, and policies. They cannot answer outside their scoped knowledge surface; if they don’t know, they say so and escalate rather than invent.'
    },
    {
      q: 'Does it integrate with our existing helpdesk?',
      a: 'Native Zendesk, Intercom, Salesforce Service Cloud, and Freshdesk connectors. Tickets, fields, status updates, and macros stay in sync.'
    },
    {
      q: 'How is conversation quality measured?',
      a: 'Every interaction is auto-scored for quality, sentiment, and CSAT prediction. You see the rubric you would apply manually, applied to 100% of conversations instead of a 2% sample.'
    }
  ],
  related: ['ecommerce', 'banking', 'healthcare']
};

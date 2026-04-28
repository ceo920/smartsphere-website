import type { Industry } from './index';

export const realEstate: Industry = {
  slug: 'real-estate',
  name: 'Real Estate',
  shortName: 'Real Estate',
  tagline: 'Qualify leads, schedule tours, and follow up — at the speed of inbound.',
  intro:
    'In residential, commercial, and rental real estate, the team that responds first usually wins the deal. But agents are showing properties, brokers are negotiating, and inbound leads come in at all hours from a dozen different channels. SmartSphere Technologies deploys voice and chat agents that pick up the phone in under a second, answer listing questions grounded in your live MLS feed, qualify the lead against your criteria, and book a tour directly into the right agent’s calendar. They run 24/7 in 26+ languages, so international buyers and renters get the same response time as everyone else, and every conversation lands cleanly in your CRM.',
  hero: {
    title: 'Never miss another inbound real estate lead',
    subtitle:
      'Voice and chat agents that qualify, schedule tours, and nurture buyers and renters across every channel — in 26+ languages.'
  },
  metaTitle: 'Real Estate AI Agents for Lead Qualification | SmartSphere',
  metaDescription:
    'AI voice and chat agents for residential, commercial, and rental brokerages. Qualify leads, book tours, and nurture buyers in 26+ languages, 24/7.',
  useCases: [
    {
      title: 'Inbound lead qualification',
      description:
        'Agents answer immediately, ask qualifying questions tied to your buyer or tenant criteria, and route the lead to the right human only when ready.'
    },
    {
      title: 'Property tour scheduling',
      description:
        'Book, reschedule, and cancel showings directly into the listing agent’s calendar, with automatic confirmations and reminders.'
    },
    {
      title: 'Tenant screening and renewals',
      description:
        'Pre-screen rental applicants, collect documents, and run renewal outreach without a property manager in the loop.'
    },
    {
      title: 'Listing-specific Q&A on web and WhatsApp',
      description:
        'Agents read your live MLS or PMS feed and answer questions about square footage, HOA fees, school zones, and amenities in plain language.'
    },
    {
      title: 'Drip nurture for cold buyers',
      description:
        'Multi-touch outbound across SMS, email, and WhatsApp that re-engages cold leads without burning agent hours.'
    },
    {
      title: 'After-hours coverage for international buyers',
      description:
        'Pick up calls and chats in 26+ languages, then schedule a follow-up at a time that works for both sides of the world.'
    }
  ],
  features: [
    {
      title: 'CRM round-trip',
      description:
        'Two-way sync with Salesforce, HubSpot, Follow Up Boss, Lofty, and KvCORE so leads, notes, and stages stay aligned.'
    },
    {
      title: 'Listing-aware answers',
      description:
        'Agents ingest your MLS (RETS or RESO Web API) and reason over live inventory — no hallucinated availability.'
    },
    {
      title: 'Multilingual outreach',
      description:
        'Convert international buyers and renters in their preferred language and time zone, with locale-aware tone.'
    }
  ],
  outcomes: [
    { metric: '<60s', label: 'response time on inbound leads' },
    { metric: '38%', label: 'lift in tour-booking rate' },
    { metric: '6×', label: 'after-hours pipeline coverage' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a brokerage’s lead flow',
    body:
      'Most brokerages have a lead flow that looks fine on paper and leaks badly in practice: Zillow and portal leads come into one inbox, web inquiries hit a Calendly, WhatsApp messages live on someone’s personal phone, and the CRM is updated whenever an agent gets a moment. SmartSphere Technologies collapses that surface into one consistent first response. Inbound leads — voice, web chat, WhatsApp, SMS — hit the agent first; it qualifies against the criteria you set, looks up the property in your MLS feed, schedules a tour against the listing agent’s calendar if there’s a fit, and writes a structured lead record into your CRM with full transcript. Cold leads enter a multi-touch nurture sequence that re-engages over time without burning agent hours. When a human is needed, the warm transfer arrives with the full conversation summary already in the agent’s queue.'
  },
  integrations: ['Salesforce', 'HubSpot', 'Follow Up Boss', 'WhatsApp', 'Twilio'],
  faq: [
    {
      q: 'Can agents pull from our MLS?',
      a: 'Yes. We ingest MLS feeds (RETS or RESO Web API) so agents reason over live listings, not stale snippets. Updates flow through within minutes of your feed publishing.'
    },
    {
      q: 'How does it handle DNC and TCPA compliance?',
      a: 'Outbound calling honors DNC lists and recorded consent per number, with full audit trails per call. Calling windows respect the recipient’s local time zone.'
    },
    {
      q: 'Will this replace our agents?',
      a: 'No. The goal is to never lose a lead because no human was free at 11pm. Humans still close — the AI just makes sure every lead gets a fast, qualified first conversation.'
    },
    {
      q: 'Can it handle commercial and rental, not just residential?',
      a: 'Yes. Playbooks ship for residential resale, new construction, commercial leasing, and multifamily rentals, and they can be customized for your specific criteria.'
    },
    {
      q: 'How fast do leads get a first response?',
      a: 'Voice and chat are answered in under a second. The agent qualifies and books or hands off in a single conversation, not a series of email tag.'
    }
  ],
  related: ['hospitality', 'customer-support', 'banking']
};

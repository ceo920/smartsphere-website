import type { Industry } from './index';

export const hospitality: Industry = {
  slug: 'hospitality',
  name: 'Hospitality & Travel',
  shortName: 'Hospitality',
  tagline: 'Concierge-level service across every property and time zone.',
  intro:
    'Hospitality runs on responsiveness in the guest’s native language. A guest in Tokyo wants to extend their stay at 11pm local time; an airline passenger needs to rebook a missed connection from a noisy gate; a restaurant guest wants a table for six tonight. None of those requests can wait for office hours, and none of them should require translation. SmartSphere Technologies deploys multilingual voice and chat agents over hotel phone systems, OTAs, WhatsApp, and SMS that handle reservations, in-stay requests, restaurant bookings, and travel changes — natively in 26+ languages, with deep PMS and booking-engine integrations.',
  hero: {
    title: 'A multilingual concierge for every guest',
    subtitle:
      'Voice and chat agents that handle reservations, upgrades, in-stay requests, and post-stay follow-up across hotels, restaurants, and travel.'
  },
  metaTitle: 'Hospitality & Travel AI Agents | Multilingual | SmartSphere',
  metaDescription:
    'AI voice and chat agents for hotels, restaurants, airlines, and travel. Reservations, in-stay requests, and multilingual concierge service in 26+ languages.',
  useCases: [
    {
      title: 'Reservations and upgrades',
      description:
        'Take, modify, and cancel reservations directly in your PMS or booking engine, and proactively offer upgrades when inventory and policy align.'
    },
    {
      title: 'In-stay requests and room service',
      description:
        'Pick up the in-room phone or WhatsApp message, route housekeeping and maintenance, and dispatch room service in the guest’s preferred language.'
    },
    {
      title: 'Restaurant bookings and waitlists',
      description:
        'Manage tables, waitlists, and special requests directly in OpenTable, Toast, or your reservation system without holding the line.'
    },
    {
      title: 'Travel changes and rebooking',
      description:
        'For airlines and OTAs: handle schedule changes, IRROPS rebooking, and refund requests with policy-aware decisions.'
    },
    {
      title: 'Post-stay surveys and loyalty',
      description:
        'Conversational post-stay outreach that produces real qualitative feedback, not 1–5 ratings, and feeds your loyalty program.'
    },
    {
      title: 'After-hours and overflow coverage',
      description:
        '24/7 multilingual concierge so a single front-desk agent doesn’t have to choose between checking in a guest and answering the phone.'
    }
  ],
  features: [
    {
      title: 'PMS and booking integrations',
      description:
        'Connectors for Opera, Mews, Cloudbeds, Toast, OpenTable, and major OTAs. Read availability, write reservations, manage folio.'
    },
    {
      title: 'Always-on multilingual',
      description:
        '26+ languages including Arabic, Mandarin, Japanese, and Portuguese with locale-aware tone and accents.'
    },
    {
      title: 'In-room channels',
      description:
        'Voice agent over hotel phone via PBX integration, plus chat over WhatsApp, SMS, and the hotel app.'
    }
  ],
  outcomes: [
    { metric: '92%', label: 'first-contact resolution on requests' },
    { metric: '+14%', label: 'direct booking lift' },
    { metric: '24/7', label: 'multilingual concierge coverage' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a hotel or travel operation',
    body:
      'Hotels and travel brands already have a great PMS and a great booking engine; the gap is the conversational layer that connects them to guests in real time, in any language, on any channel. SmartSphere Technologies fills that gap. The same agent that takes the reservation on WhatsApp answers the in-room phone, dispatches housekeeping, recommends the rooftop bar, and runs the post-stay survey — all in the guest’s language, all written back into Opera or Mews. For airlines and OTAs, the same primitives apply to flight changes, IRROPS rebooking, and loyalty engagement. Crucially, the agent never invents availability or pricing: it reads from your live booking engine, so what the guest is told matches what the system can actually do. When a guest needs a real human, the warm transfer arrives with full context.'
  },
  integrations: ['Opera', 'Mews', 'Cloudbeds', 'Toast', 'WhatsApp'],
  faq: [
    {
      q: 'Can it handle group and event bookings?',
      a: 'Yes — agents qualify group and event leads, capture attendee counts and special requirements, and route to your sales team with structured details.'
    },
    {
      q: 'Does it work over the in-room phone?',
      a: 'Yes. We integrate with major PBX systems so guests can dial 0 and reach a multilingual concierge any time of day or night.'
    },
    {
      q: 'Will it disrupt existing OTA contracts?',
      a: 'No. The agent works alongside your OTA distribution; it’s designed to capture more direct bookings and improve conversion on inbound traffic, not to bypass channel agreements.'
    },
    {
      q: 'Which languages are supported for guest communication?',
      a: '26+ languages including Arabic, Mandarin, Japanese, Korean, Portuguese, French, German, and Spanish — with locale-aware tone and TTS voices.'
    }
  ],
  related: ['real-estate', 'ecommerce', 'customer-support']
};

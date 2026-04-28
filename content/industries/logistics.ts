import type { Industry } from './index';

export const logistics: Industry = {
  slug: 'logistics',
  name: 'Logistics & Supply Chain',
  shortName: 'Logistics',
  tagline: 'Dispatch, track, and resolve — without the phone tag.',
  intro:
    'Logistics runs on phone calls: drivers checking in, customers asking where their order is, dispatchers chasing exception updates, and warehouse leads trying to confirm a yard slot. Most of those calls are repetitive, low-margin, and unnecessarily human. SmartSphere Technologies deploys voice and chat agents that handle them end-to-end — driver check-ins over the cab phone, "where is my order" inquiries grounded in live tracking data, exception handling that reschedules deliveries against your TMS, and dispatch coordination across time zones. They speak 26+ languages, work over voice, SMS, WhatsApp, and email, and write every interaction back into your TMS, OMS, or last-mile platform.',
  hero: {
    title: 'Cut dispatch overhead and answer “where’s my order?” instantly',
    subtitle:
      'AI voice and chat agents for carriers, 3PLs, and last-mile teams. Automate driver check-ins, ETA updates, and exception handling in 26+ languages.'
  },
  metaTitle: 'Logistics AI Agents for Dispatch & Tracking | SmartSphere',
  metaDescription:
    'AI voice and chat agents for logistics, 3PLs, and last-mile. Driver check-ins, ETA inquiries, and exception handling in 26+ languages, 24/7.',
  useCases: [
    {
      title: 'Driver check-ins and load updates',
      description:
        'Hands-free voice check-ins over the cab phone, with noise-robust speech recognition tuned for in-cab and yard environments.'
    },
    {
      title: '“Where is my order?” inquiries',
      description:
        'Agents read live GPS and ETA streams to answer with current state, deflecting most WISMO calls without an agent.'
    },
    {
      title: 'Delivery rescheduling and exception handling',
      description:
        'Reroute, reschedule, or escalate failed deliveries with policy-aware decisions written back into your TMS.'
    },
    {
      title: 'Dispatch coordination across time zones',
      description:
        'A 24/7 first responder for carrier partners, brokers, and shippers in any region — no third-shift staffing required.'
    },
    {
      title: 'Customer notifications and proof of delivery',
      description:
        'Outbound voice and SMS for delivery windows, dock arrival, and POD capture — fully multilingual.'
    },
    {
      title: 'Returns pickup scheduling',
      description:
        'Customers schedule pickups by chat or phone; the agent confirms windows and writes the work order to your routing engine.'
    }
  ],
  features: [
    {
      title: 'TMS and OMS integrations',
      description:
        'Native connectors for SAP, Oracle TMS, Manhattan Active, Shopify Fulfillment, and most last-mile platforms.'
    },
    {
      title: 'Driver-friendly voice',
      description:
        'Hands-free check-ins over phone with noise-robust ASR tuned for cab, yard, and warehouse environments.'
    },
    {
      title: 'Real-time tracking context',
      description:
        'Agents read live GPS, ETA, and exception streams so answers reflect current state, not last-known status.'
    }
  ],
  outcomes: [
    { metric: '70%', label: 'inbound WISMO calls deflected' },
    { metric: '4 min', label: 'average dispatch handling time' },
    { metric: '99.5%', label: 'driver check-in capture rate' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a logistics operation',
    body:
      'Logistics workflows are deeply tool-fragmented: TMS, OMS, WMS, last-mile routing, telematics, and a phone system that ties them together with humans. SmartSphere Technologies acts as the conversational layer over that stack. When a driver calls in, the agent identifies them by phone number, pulls the active load, captures arrival or delay, and writes the update to the TMS without dispatch lifting a finger. When a shipper asks about an order, the agent grounds its answer in live ETA data and only escalates if there’s a true exception. When a delivery fails, the agent reschedules within policy and notifies the customer in their preferred channel and language. Every conversation produces a structured event in your data warehouse, so you can finally measure the volume and resolution rate of phone-based exceptions instead of guessing.'
  },
  integrations: ['SAP', 'Oracle TMS', 'Manhattan Active', 'Shopify', 'Twilio'],
  faq: [
    {
      q: 'Does it work in noisy cab and yard environments?',
      a: 'Yes. We use noise-robust speech models tuned specifically for in-cab, yard, and warehouse audio. Recognition rates hold up over standard cellular, Bluetooth headsets, and PTT radios.'
    },
    {
      q: 'Can drivers and customers text instead of call?',
      a: 'Agents work over voice, SMS, WhatsApp, and email — drivers and customers can reply on their preferred channel and the conversation context follows them.'
    },
    {
      q: 'Which TMS systems are supported?',
      a: 'SAP TM, Oracle TMS, Manhattan Active, MercuryGate, and most major last-mile platforms ship with native connectors. Custom integrations are available for proprietary systems.'
    },
    {
      q: 'Can it handle international shipments and multilingual drivers?',
      a: 'Yes. 26+ languages with locale-aware tone, and time-zone-aware outbound that respects local calling windows for each driver and recipient.'
    }
  ],
  related: ['ecommerce', 'customer-support', 'real-estate']
};

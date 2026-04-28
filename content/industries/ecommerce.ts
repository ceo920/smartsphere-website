import type { Industry } from './index';

export const ecommerce: Industry = {
  slug: 'ecommerce',
  name: 'E-commerce & Retail',
  shortName: 'E-commerce',
  tagline: 'Convert, support, and retain — across every channel a shopper uses.',
  intro:
    'Modern e-commerce customers expect a concierge experience and a self-service workflow at the same time. They DM you on Instagram about sizing, ask order-status questions on WhatsApp, and want returns processed before they finish their next coffee. Most stores cannot staff every channel in every language at every hour — so they leak conversion on pre-sales and pile up tickets on post-sales. SmartSphere Technologies deploys a single AI agent that runs across web chat, WhatsApp, Instagram, email, and voice; reasons over your live product catalog and policies; and takes real action — placing orders, processing refunds, scheduling returns — without forcing the customer into a queue.',
  hero: {
    title: 'A shopping concierge for every customer, in every language',
    subtitle:
      'AI agents that handle product Q&A, order tracking, returns, and post-purchase loyalty across web chat, WhatsApp, and email.'
  },
  metaTitle: 'E-commerce AI Chat & Voice Agents for Retail | SmartSphere',
  metaDescription:
    'Conversational AI for online retail. Pre-sales product Q&A, order tracking, returns, and post-purchase loyalty across web, WhatsApp, and email.',
  useCases: [
    {
      title: 'Pre-sales product discovery and recommendations',
      description:
        'Shoppers describe what they want; the agent navigates your catalog, filters by stock and policy, and recommends without making things up.'
    },
    {
      title: 'Order status, returns, and exchanges',
      description:
        'End-to-end RMA flows with policy-aware decisions and direct write-back into Shopify, Magento, or Salesforce Commerce.'
    },
    {
      title: 'Cart-recovery outreach',
      description:
        'Multi-channel cart-recovery on WhatsApp, SMS, and email that asks the right question instead of sending a one-size-fits-all coupon.'
    },
    {
      title: 'Post-purchase loyalty and upsell',
      description:
        'Replenishment reminders, accessory recommendations, and loyalty-tier perks delivered conversationally on the channel customers actually read.'
    },
    {
      title: 'Multilingual support for global stores',
      description:
        'A single agent detects the customer’s language and replies in it, including RTL scripts and CJK rendering.'
    },
    {
      title: 'Wholesale and B2B inquiries',
      description:
        'Qualify wholesale leads, capture EIN and resale certificates, and hand off to your B2B sales team with full context.'
    }
  ],
  features: [
    {
      title: 'Catalog-grounded answers',
      description:
        'Agents read your product feed, inventory, and policies — not just FAQs. No invented sizing, prices, or availability.'
    },
    {
      title: 'Returns and refund automation',
      description:
        'End-to-end RMA flows with policy-aware decisions. Refunds, exchanges, or store credit issued within rules you configure.'
    },
    {
      title: 'Channel parity',
      description:
        'One agent brain across web chat, WhatsApp, Instagram DMs, Apple Messages for Business, email, and voice.'
    }
  ],
  outcomes: [
    { metric: '+18%', label: 'conversion lift on guided pre-sales' },
    { metric: '80%', label: 'tier-1 tickets resolved without a human' },
    { metric: '24/7', label: 'multilingual coverage across channels' }
  ],
  workflow: {
    title: 'How SmartSphere Technologies fits into a modern commerce stack',
    body:
      'Most e-commerce stacks already have a great storefront, a working checkout, and a help desk that drowns when traffic spikes. The gap is conversational depth: most chatbots can answer FAQ-level questions but cannot reason over the catalog, take action against the order system, or maintain context across channels. SmartSphere Technologies fixes that gap. It connects directly to Shopify, Magento, or Salesforce Commerce; reads your live product feed, inventory, and policies; and exposes that knowledge as a conversational agent over web chat, WhatsApp, Instagram, email, and voice. The same agent that recommends a pair of running shoes can also process the return three weeks later — same memory, same policies, same brand voice. Quality scoring runs on every conversation so you can see what works and what doesn’t without sampling a handful of tickets.'
  },
  integrations: ['Shopify', 'Magento', 'Salesforce Commerce', 'Klaviyo', 'WhatsApp'],
  faq: [
    {
      q: 'Can it process refunds and exchanges end-to-end?',
      a: 'Yes — agents can issue refunds, exchanges, or store credit within the policies you configure, including conditions like time windows, item categories, and reason codes.'
    },
    {
      q: 'How does it handle 26 languages on one store?',
      a: 'A single agent detects the customer’s language from their first message and replies in it — including RTL scripts (Arabic, Hebrew) and CJK rendering (Chinese, Japanese, Korean) — with locale-aware tone.'
    },
    {
      q: 'Does it work with Shopify Plus and headless setups?',
      a: 'Yes. Native Shopify, Shopify Plus, and headless Storefront API support, plus full Magento, BigCommerce, and Salesforce Commerce Cloud integrations.'
    },
    {
      q: 'Can the same agent run on web chat and WhatsApp?',
      a: 'Yes — that is the point. One agent brain, one knowledge surface, one set of policies, deployed across every channel a customer might use, with conversation history that follows them.'
    },
    {
      q: 'How does it avoid making up product details?',
      a: 'Answers are grounded in your live product feed and policies, not in pre-written FAQs. If the agent doesn’t know, it says so and offers to escalate rather than hallucinate.'
    }
  ],
  related: ['logistics', 'customer-support', 'hospitality']
};

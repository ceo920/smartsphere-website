export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
};

export const solutions: Solution[] = [
  {
    slug: 'voice-agents',
    name: 'Voice Agents',
    tagline: 'Phone agents that don’t sound like a 2010s IVR.',
    description:
      'Production-grade voice agents over PSTN, SIP, and WebRTC, with sub-second turn latency and noise-robust ASR.',
    features: [
      { title: 'Sub-second turn latency', description: 'Streaming ASR + TTS keep conversations natural.' },
      { title: 'Bring your own carrier', description: 'Twilio, Vonage, Amazon Connect, or any SIP trunk.' },
      { title: 'Voice biometrics', description: 'Optional speaker verification for sensitive flows.' }
    ]
  },
  {
    slug: 'chat-agents',
    name: 'Chat Agents',
    tagline: 'One agent across web chat, WhatsApp, SMS, and email.',
    description:
      'Channel-agnostic chat with persistent memory and a unified knowledge surface across every customer touchpoint.',
    features: [
      { title: 'Channel parity', description: 'Same agent brain on web, WhatsApp, SMS, Instagram, email.' },
      { title: 'Persistent memory', description: 'Conversations follow the customer across channels.' },
      { title: 'Action tools', description: 'Take actions in your stack — refunds, bookings, lookups.' }
    ]
  },
  {
    slug: 'multilingual',
    name: 'Multilingual',
    tagline: '26+ languages, native-feel responses.',
    description:
      'Locale-aware tone, accents, and scripts. RTL layouts and CJK rendering supported across web and chat.',
    features: [
      { title: 'Auto language detection', description: 'Reply in the customer’s language without setup.' },
      { title: 'Locale-aware voices', description: 'Region-specific accents and TTS voices.' },
      { title: 'RTL + CJK rendering', description: 'Arabic, Hebrew, Chinese, Japanese, Korean.' }
    ]
  },
  {
    slug: 'analytics',
    name: 'Analytics & QA',
    tagline: 'See and improve every conversation.',
    description:
      'Conversation analytics, automated quality scoring, and CSAT prediction across every interaction.',
    features: [
      { title: 'Auto QA on 100% of calls', description: 'No more sampling 2% of conversations.' },
      { title: 'CSAT prediction', description: 'Catch churn signals before the survey hits.' },
      { title: 'Topic and intent analytics', description: 'See what customers are actually calling about.' }
    ]
  }
];

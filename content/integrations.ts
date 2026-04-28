export type IntegrationCategory = {
  slug: string;
  name: string;
  description: string;
  items: string[];
};

export const integrationCategories: IntegrationCategory[] = [
  {
    slug: 'crm',
    name: 'CRM',
    description: 'Two-way sync for leads, contacts, and conversation history.',
    items: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho', 'Pipedrive']
  },
  {
    slug: 'helpdesk',
    name: 'Helpdesk',
    description: 'Create, update, and resolve tickets from inside conversations.',
    items: ['Zendesk', 'Intercom', 'Freshdesk', 'Salesforce Service Cloud']
  },
  {
    slug: 'telephony',
    name: 'Telephony',
    description: 'Bring your own carrier or use ours. SIP, PSTN, WebRTC.',
    items: ['Twilio', 'Vonage', 'Amazon Connect', 'Genesys', 'SIP/PBX']
  },
  {
    slug: 'messaging',
    name: 'Messaging',
    description: 'One agent across web chat, WhatsApp, SMS, and social DMs.',
    items: ['WhatsApp Business', 'SMS', 'Instagram', 'Facebook Messenger', 'Apple Messages for Business']
  },
  {
    slug: 'email',
    name: 'Email',
    description: 'Read, draft, and send email with full thread context.',
    items: ['Gmail', 'Microsoft 365', 'SendGrid', 'Postmark']
  },
  {
    slug: 'calendars',
    name: 'Calendars & Scheduling',
    description: 'Book, reschedule, and cancel without leaving the conversation.',
    items: ['Google Calendar', 'Microsoft 365', 'Calendly', 'Cal.com']
  },
  {
    slug: 'data',
    name: 'Data & Knowledge',
    description: 'Ground agents in your knowledge base, docs, and product catalog.',
    items: ['Notion', 'Confluence', 'Google Drive', 'SharePoint', 'Custom REST']
  }
];

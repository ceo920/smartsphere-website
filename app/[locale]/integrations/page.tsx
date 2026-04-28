import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { integrationCategories } from '@/content/integrations';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Integrations: CRM, WhatsApp, Telephony, Email | SmartSphere',
    description:
      'Native integrations for HubSpot, Salesforce, Zoho, WhatsApp Business API, Twilio, SIP, Gmail, Microsoft 365, Google Calendar, and more.',
    path: '/integrations',
    locale: params.locale as Locale
  });
}

export default function IntegrationsPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Integrations', url: `${siteConfig.url}/integrations` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Integrations', href: '/integrations' }
          ]}
        />
      </Container>

      <section className="pb-8">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Integrations"
            title="Plug SmartSphere Technologies into the systems your team already runs"
            subtitle="Native connectors for CRM, helpdesk, telephony, messaging, email, calendars, and knowledge sources — plus a REST API for everything else."
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="prose prose-slate max-w-none">
            <p className="text-base leading-relaxed text-slate-700">
              Conversational AI is only useful if it can read and write the
              systems your team already lives in. SmartSphere Technologies ships with native,
              two-way integrations across the categories below — CRM, helpdesk,
              telephony, messaging, email, calendars, and knowledge sources —
              and a clean REST API for anything custom.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-2">
            {integrationCategories.map((cat) => (
              <li key={cat.slug}>
                <article
                  id={cat.slug}
                  className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-7"
                >
                  <h2 className="text-xl font-semibold text-navy-900">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {cat.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="featured-heading">
        <Container>
          <h2
            id="featured-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Featured integrations
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold text-navy-900">
                CRM (HubSpot, Salesforce, Zoho)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Two-way sync for leads, contacts, opportunities, and full
                conversation transcripts. Custom fields, lifecycle stages, and
                lead scoring all stay aligned. Salesforce ships with both
                Service Cloud and Sales Cloud connectors; HubSpot uses the
                v3 CRM API; Zoho uses Zoho One. Every conversation produces a
                structured record so reporting actually reflects pipeline
                reality.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-navy-900">
                WhatsApp Business API
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Direct WhatsApp Business API integration with template-message
                support, opt-in tracking, and locale-aware tone across 26+
                languages. The same agent that runs on web chat handles
                WhatsApp with persistent memory across channels — your customer
                doesn’t restart the conversation when they switch from web to
                mobile.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-navy-900">
                Telephony (Twilio, Vonage, SIP)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Bring your own carrier or use ours. We integrate with Twilio,
                Vonage, Amazon Connect, Genesys, and any SIP trunk. Sub-second
                turn latency, noise-robust ASR for cab/yard environments, and
                hand-off support that warm-transfers to human agents with a
                structured summary already in the queue.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-navy-900">Email</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Read incoming threads, draft contextual replies, and send via
                Gmail, Microsoft 365, SendGrid, or Postmark. Email becomes a
                first-class channel rather than a fallback, with thread
                memory shared across web chat and voice.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-navy-900">
                Calendars & scheduling
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Book, reschedule, and cancel directly in Google Calendar,
                Microsoft 365, Calendly, or Cal.com — without leaving the
                conversation. The agent reads availability and writes events
                back, with timezone-aware handling for international
                customers.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-navy-900">
                REST API + webhooks
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                For everything we don’t ship a native connector for, our REST
                API and outbound webhooks let you wire SmartSphere Technologies into any
                custom system. Authentication via OAuth 2.0 or signed
                webhooks; sandbox environments for safe development.
              </p>
            </article>
          </div>
          <p className="mt-10 text-base leading-relaxed text-slate-700">
            Need something custom? Talk to{' '}
            <Link
              href="/contact"
              className="font-medium text-teal-700 hover:text-teal-600"
            >
              our solutions team
            </Link>{' '}
            — most institution-specific systems can be wired in within a few
            days using the REST API.
          </p>
        </Container>
      </section>

      <CTA />
    </>
  );
}

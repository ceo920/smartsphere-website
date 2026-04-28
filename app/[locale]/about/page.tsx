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
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'About SmartSphere — Conversational AI for Global Teams',
    description:
      'SmartSphere Technologies builds AI voice and chat agents for 8+ industries in 26+ languages. Read about our team, mission, and approach to conversational AI.',
    path: '/about',
    locale: params.locale as Locale
  });
}

export default function AboutPage({
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
          { name: 'About', url: `${siteConfig.url}/about` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' }
          ]}
        />
      </Container>

      <section className="pb-12">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="We build conversational AI agents that customers actually want to talk to"
            subtitle="SmartSphere Technologies is a small team of engineers, linguists, and operators building the conversational layer for the modern enterprise — across 8+ industries and 26+ languages."
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <article>
              <h2 className="text-xl font-semibold text-navy-900">
                Our mission
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Most customer interactions today are still wait-times wrapped in
                hold music or chatbots that fall over on the second turn. We
                think every customer deserves an immediate, capable, native-language
                response — and every operations team deserves tools that produce
                clean structured data instead of a queue.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold text-navy-900">
                Our approach
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                We ship narrow first, expand fast. Most customers are in
                production within 2–3 weeks on a single high-volume scenario,
                with metrics in hand to decide what to automate next. We
                instrument every conversation so you don’t have to guess at
                quality.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold text-navy-900">
                Where we focus
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Eight industries where conversational AI changes operating
                economics, not just CX vanity metrics: healthcare, real estate,
                logistics, e-commerce, banking, education, hospitality, and
                customer support. Twenty-six languages because most operations
                are global whether they admit it or not.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Our Locations"
            title="Built across continents, focused on impact"
            subtitle="From Dubai to Doha to engineering excellence in Pakistan, our globally distributed team builds the future of conversational AI."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {siteConfig.locations.map((loc) => (
              <li
                key={loc.country}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <p className="text-5xl leading-none" aria-hidden>
                  {loc.flag}
                </p>
                <h3 className="mt-4 text-base font-semibold text-navy-900">
                  {loc.country}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{loc.city}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-teal-700">
                  {loc.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {loc.blurb}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="values-heading">
        <Container>
          <h2
            id="values-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            What we care about
          </h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            <li className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-navy-900">
                Production over demos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A working pilot beats a polished pitch. We measure ourselves on
                customers in production with metrics that matter.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-navy-900">
                Grounded answers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Agents read your systems and reason from there. If they don’t
                know, they say so and escalate — never fabricate.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-navy-900">
                Compliance is a feature
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                HIPAA, SOC 2 Type II, ISO 27001, region-pinned residency, and
                audit-grade logging are part of the platform — not bolted on.
              </p>
            </li>
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <article>
              <h2 className="text-xl font-semibold text-navy-900">
                Where to go next
              </h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
                <li>
                  · See{' '}
                  <Link
                    href="/industries"
                    className="font-medium text-teal-700 hover:text-teal-600"
                  >
                    industries
                  </Link>{' '}
                  for pre-trained playbooks across healthcare, real estate, and more.
                </li>
                <li>
                  · Read{' '}
                  <Link
                    href="/solutions"
                    className="font-medium text-teal-700 hover:text-teal-600"
                  >
                    solutions
                  </Link>{' '}
                  for voice, chat, multilingual, and analytics.
                </li>
                <li>
                  · Browse{' '}
                  <Link
                    href="/integrations"
                    className="font-medium text-teal-700 hover:text-teal-600"
                  >
                    integrations
                  </Link>{' '}
                  for connectors to the systems you already run.
                </li>
                <li>
                  · Or check{' '}
                  <Link
                    href="/pricing"
                    className="font-medium text-teal-700 hover:text-teal-600"
                  >
                    pricing
                  </Link>{' '}
                  for plans.
                </li>
              </ul>
            </article>
            <article>
              <h2 className="text-xl font-semibold text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Sales:{' '}
                <a
                  href={`mailto:${siteConfig.contact.sales}`}
                  className="font-medium text-teal-700 hover:text-teal-600"
                >
                  {siteConfig.contact.sales}
                </a>
                <br />
                Phone:{' '}
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="font-medium text-teal-700 hover:text-teal-600"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Or use the{' '}
                <Link
                  href="/contact"
                  className="font-medium text-teal-700 hover:text-teal-600"
                >
                  contact form
                </Link>{' '}
                to book a demo on your stack.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

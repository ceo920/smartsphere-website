import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import {
  Lock,
  Globe2,
  ShieldCheck,
  KeyRound,
  Server,
  FileCheck2,
  ScrollText,
  Mail
} from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

const SECURITY_EMAIL = 'security@smartspheretechnologies.com';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Security & Privacy | SmartSphere',
    description:
      'How SmartSphere protects your data: encryption, regional residency, GDPR-aligned operations, UAE PDPL readiness, sub-processor list, and customer rights process.',
    path: '/security',
    locale: params.locale as Locale
  });
}

const subProcessors = [
  {
    name: 'OpenAI',
    purpose: 'Large language model inference',
    region: 'United States',
    notes: 'Enterprise data-handling controls'
  },
  {
    name: 'Anthropic',
    purpose: 'Large language model inference',
    region: 'United States',
    notes: 'Enterprise data-handling controls'
  },
  {
    name: 'Twilio',
    purpose: 'Telephony, SMS, and WhatsApp Business API',
    region: 'United States',
    notes: 'SOC 2 Type II'
  },
  {
    name: 'Amazon Web Services',
    purpose: 'Application hosting and storage',
    region: 'Multi-region (UAE / EU / US)',
    notes: 'SOC 2, ISO 27001, ISO 27018'
  },
  {
    name: 'Stripe',
    purpose: 'Payments and subscription billing',
    region: 'United States',
    notes: 'PCI DSS Level 1'
  }
];

const sectionTiles: { id: string; icon: typeof Lock; title: string }[] = [
  { id: 'overview', icon: ShieldCheck, title: 'Overview' },
  { id: 'infrastructure', icon: Server, title: 'Infrastructure' },
  { id: 'encryption', icon: Lock, title: 'Data encryption' },
  { id: 'privacy', icon: Globe2, title: 'Privacy compliance' },
  { id: 'sub-processors', icon: KeyRound, title: 'Sub-processors' },
  { id: 'customer-rights', icon: FileCheck2, title: 'Customer rights' },
  { id: 'roadmap', icon: ScrollText, title: 'Roadmap' },
  { id: 'contact', icon: Mail, title: 'Contact' }
];

export default function SecurityPage({
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
          { name: 'Security', url: `${siteConfig.url}/security` }
        ])}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Security', href: '/security' }
          ]}
        />
      </Container>

      <section className="pb-12">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Trust"
            title="Security & Privacy"
            subtitle="How we protect your data and respect your customers' privacy."
          />
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectionTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <li key={tile.id}>
                  <a
                    href={`#${tile.id}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-navy-900 transition-colors hover:border-teal-200 hover:text-teal-700"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-teal-50 text-teal-600"
                    >
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    {tile.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section id="overview" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Overview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            SmartSphere is built security-first. We&rsquo;re a UAE-headquartered
            company designed to serve enterprises in regulated industries
            globally — healthcare, banking, real estate, and more. Our
            architecture, processes, and roadmap are oriented toward making
            sensitive deployments straightforward to approve and operate.
          </p>
        </Container>
      </section>

      <section
        id="infrastructure"
        className="bg-slate-50 py-12 scroll-mt-24"
      >
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Infrastructure
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            SmartSphere runs on top-tier cloud providers (AWS and Google Cloud)
            whose underlying infrastructure is independently audited under SOC 2
            and ISO 27001. We support regional deployment options across UAE,
            EU, and US so customer data can be pinned to the residency you
            require.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { region: 'UAE', body: 'Primary deployment region for MENA customers.' },
              { region: 'European Union', body: 'GDPR-aligned residency option.' },
              { region: 'United States', body: 'For US-based customers and partners.' }
            ].map((r) => (
              <li
                key={r.region}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-navy-900">{r.region}</p>
                <p className="mt-1 text-sm text-slate-600">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="encryption" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Data encryption
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'In transit',
                body: 'TLS 1.3 enforced across all customer-facing traffic and inter-service calls.'
              },
              {
                title: 'At rest',
                body: 'AES-256 encryption for stored conversations, recordings, and customer records.'
              },
              {
                title: 'Key management',
                body: 'Managed via cloud KMS with rotation policies and access logging.'
              }
            ].map((card) => (
              <li
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-navy-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{card.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="privacy" className="bg-slate-50 py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Privacy compliance
          </h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-navy-900">
                GDPR-aligned
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Documented data flows, a published sub-processor list, a
                Data Subject Access Request (DSAR) process, and the ability to
                honor the full set of data subject rights — access,
                rectification, erasure, portability, objection, restriction,
                and withdrawal of consent.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-navy-900">
                UAE PDPL-ready
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Aligned with the UAE Personal Data Protection Law. UAE data
                residency is available, and our processing roles, retention
                practices, and breach notification workflows are built with
                PDPL in mind.
              </p>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600">
            <strong className="text-navy-900">Note:</strong> We are{' '}
            <em>designed to support</em> these frameworks. Specific
            certifications such as SOC 2 Type II and HIPAA-compliant
            deployments are available on Enterprise plans or are on our
            public roadmap.
          </p>
        </Container>
      </section>

      <section id="sub-processors" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Sub-processors
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            We use a small set of carefully selected sub-processors to power
            specific parts of the platform. The list below is illustrative;
            customers under DPA receive an authoritative, version-controlled
            list with change notifications.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Sub-processor
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Purpose
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {subProcessors.map((row) => (
                  <tr key={row.name}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-left font-medium text-navy-900"
                    >
                      {row.name}
                    </th>
                    <td className="px-6 py-4 text-slate-700">{row.purpose}</td>
                    <td className="px-6 py-4 text-slate-700">{row.region}</td>
                    <td className="px-6 py-4 text-slate-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section
        id="customer-rights"
        className="bg-slate-50 py-12 scroll-mt-24"
      >
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Customer rights
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'DSAR process',
                body: 'Submit a Data Subject Access Request to ' + SECURITY_EMAIL + ' and we acknowledge within 5 business days.'
              },
              {
                title: 'Data export',
                body: 'Export your conversations, contacts, and analytics — fulfilled within 30 days.'
              },
              {
                title: 'Deletion requests',
                body: 'Account and customer data deletion fulfilled within 30 days, subject to legal retention obligations.'
              }
            ].map((card) => (
              <li
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-navy-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{card.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="roadmap" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Roadmap
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            We&rsquo;re actively investing in deeper compliance certifications.
            Current targets:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'SOC 2 Type II',
                status: 'Audit planned for 2026',
                body: 'Independent attestation of security, availability, and confidentiality controls.'
              },
              {
                title: 'HIPAA-compliant deployments',
                status: 'Enterprise tier',
                body: 'Designed for healthcare customers requiring BAA and PHI handling.'
              },
              {
                title: 'ISO 27001',
                status: 'Planned',
                body: 'Information security management system certification.'
              }
            ].map((card) => (
              <li
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-navy-900">
                  {card.title}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {card.status}
                </p>
                <p className="mt-2 text-sm text-slate-600">{card.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="contact" className="bg-slate-50 py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-semibold text-navy-900 sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            Security questions, vulnerability disclosures, and DSAR requests:{' '}
            <a
              href={`mailto:${SECURITY_EMAIL}`}
              className="font-medium text-teal-700 hover:text-teal-600"
            >
              {SECURITY_EMAIL}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-slate-600">
            For procurement, MSAs, DPAs, or BAAs, see our{' '}
            <Link
              href="/contact"
              className="font-medium text-teal-700 hover:text-teal-600"
            >
              contact page
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTA />
    </>
  );
}

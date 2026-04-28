import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

const PRIVACY_EMAIL = 'privacy@smartspheretechnologies.com';
const LAST_UPDATED = 'April 28, 2026';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Privacy Policy | SmartSphere',
    description:
      'How SmartSphere Technologies collects, uses, and protects your personal data — including GDPR, UAE PDPL, your rights, retention, and international transfers.',
    path: '/privacy-policy',
    locale: params.locale as Locale
  });
}

export default function PrivacyPolicyPage({
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
          { name: 'Privacy Policy', url: `${siteConfig.url}/privacy-policy` }
        ])}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Privacy Policy', href: '/privacy-policy' }
          ]}
        />
      </Container>

      <article className="pb-20">
        <Container className="max-w-3xl">
          <p className="italic text-slate-500">
            This Privacy Policy is a template. Please consult legal counsel
            before going live.
          </p>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last Updated: {LAST_UPDATED}
          </p>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              {siteConfig.legalName} (&ldquo;SmartSphere&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides
              conversational AI agents for voice, chat, and messaging. This
              Privacy Policy explains what personal data we collect, how we use
              it, and the rights you have over that data. It applies to our
              websites, products, and services, but not to third-party sites we
              link to.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              2. Information We Collect
            </h2>
            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Account information
            </h3>
            <p className="mt-2">
              Name, work email, company, role, phone number, and billing
              details you provide when you sign up, request a demo, or contact
              sales.
            </p>
            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Usage data
            </h3>
            <p className="mt-2">
              Device, browser, IP address, pages visited, time on page,
              referrer, and similar diagnostic and analytics data we receive
              automatically when you use our services.
            </p>
            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Conversation data
            </h3>
            <p className="mt-2">
              Voice recordings, transcripts, chat messages, and metadata
              generated when end-users interact with agents you operate. This
              data is processed on behalf of our customers under a Data
              Processing Agreement.
            </p>
            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Cookies and similar technologies
            </h3>
            <p className="mt-2">
              We use cookies and similar technologies for essential site
              functions, analytics, and marketing. See our{' '}
              <Link
                href="/cookie-policy"
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                Cookie Policy
              </Link>{' '}
              for details and your choices.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              3. How We Use It
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our services.</li>
              <li>Authenticate users and secure our platform.</li>
              <li>Bill and administer subscriptions.</li>
              <li>
                Provide customer support and respond to your inquiries.
              </li>
              <li>
                Send service updates, security notices, and (with consent)
                marketing communications.
              </li>
              <li>
                Comply with legal obligations and enforce our agreements.
              </li>
            </ul>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              4. Legal Basis for Processing (GDPR &amp; UAE PDPL)
            </h2>
            <p className="mt-3">
              Where the EU General Data Protection Regulation (GDPR) or the UAE
              Personal Data Protection Law (PDPL) applies, we rely on one or
              more of the following legal bases:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-navy-900">Contract</strong> — to
                provide the services you or your organization signed up for.
              </li>
              <li>
                <strong className="text-navy-900">Legitimate interests</strong>{' '}
                — to operate, secure, and improve the platform, where those
                interests are not overridden by your rights.
              </li>
              <li>
                <strong className="text-navy-900">Consent</strong> — for
                non-essential cookies, marketing communications, and any
                processing that requires opt-in.
              </li>
              <li>
                <strong className="text-navy-900">Legal obligation</strong> —
                where we are required to process data to comply with applicable
                law.
              </li>
            </ul>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              5. Data Retention
            </h2>
            <p className="mt-3">
              We keep personal data only for as long as necessary for the
              purposes described in this policy, to comply with our legal
              obligations, resolve disputes, and enforce our agreements.
              Customer conversation data is retained according to the retention
              window configured in the customer&rsquo;s workspace, after which
              it is deleted or anonymized.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              6. Your Rights
            </h2>
            <p className="mt-3">
              Depending on where you live, you may have the following rights in
              relation to your personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-navy-900">Access</strong> — request a
                copy of the personal data we hold about you.
              </li>
              <li>
                <strong className="text-navy-900">Rectification</strong> — ask
                us to correct inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-navy-900">Erasure</strong> — request
                deletion of your personal data, subject to legal retention
                obligations.
              </li>
              <li>
                <strong className="text-navy-900">Portability</strong> —
                receive your data in a structured, machine-readable format.
              </li>
              <li>
                <strong className="text-navy-900">Objection</strong> — object
                to processing based on legitimate interests or for direct
                marketing.
              </li>
              <li>
                <strong className="text-navy-900">Restriction</strong> —
                request that we limit how we process your data in certain
                circumstances.
              </li>
              <li>
                <strong className="text-navy-900">Withdrawal of consent</strong>{' '}
                — withdraw consent at any time where processing is based on
                consent.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                {PRIVACY_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              7. International Data Transfers
            </h2>
            <p className="mt-3">
              We operate globally and may transfer personal data outside your
              country of residence — including to the United States and other
              jurisdictions. Where required, we rely on appropriate safeguards
              such as the European Commission&rsquo;s Standard Contractual
              Clauses (SCCs) and equivalent transfer mechanisms recognized
              under the UAE PDPL.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              8. Cookies
            </h2>
            <p className="mt-3">
              We use cookies and similar technologies to operate our website,
              measure performance, remember your preferences, and (with
              consent) deliver marketing. For a full list and your choices, see
              our{' '}
              <Link
                href="/cookie-policy"
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              9. Sub-processors
            </h2>
            <p className="mt-3">
              We use a small number of carefully selected sub-processors to
              power specific parts of the platform (cloud hosting, telephony,
              LLM inference, payments). The current list is published on our{' '}
              <Link
                href="/security"
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                Security &amp; Privacy
              </Link>{' '}
              page; customers under a DPA receive change notifications.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              10. Children&rsquo;s Privacy
            </h2>
            <p className="mt-3">
              Our services are designed for businesses and are not directed to
              children under 16. We do not knowingly collect personal data
              from children. If you believe a child has provided us with
              personal data, please contact us at{' '}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                {PRIVACY_EMAIL}
              </a>{' '}
              and we will delete it.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              11. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. When we do,
              we will revise the &ldquo;Last Updated&rdquo; date above and, for
              material changes, provide notice through the service or by
              email.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              12. Contact
            </h2>
            <p className="mt-3">
              For privacy questions, requests, or concerns, contact us at{' '}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                {PRIVACY_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              13. Complaints
            </h2>
            <p className="mt-3">
              If you believe our processing of your personal data infringes
              applicable law, you have the right to lodge a complaint with a
              supervisory authority. In the EU/EEA, that is your local Data
              Protection Authority (DPA). In the United Arab Emirates,
              complaints can be directed to the UAE Telecommunications and
              Digital Government Regulatory Authority (TDRA).
            </p>
          </section>
        </Container>
      </article>
    </>
  );
}

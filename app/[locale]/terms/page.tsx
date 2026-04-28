import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

const LEGAL_EMAIL = 'legal@smartspheretechnologies.com';
const LAST_UPDATED = 'April 28, 2026';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Terms of Service | SmartSphere',
    description:
      'The terms governing your use of SmartSphere Technologies products and services — subscriptions, acceptable use, IP, liability, governing law, and dispute resolution.',
    path: '/terms',
    locale: params.locale as Locale
  });
}

export default function TermsPage({
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
          { name: 'Terms of Service', url: `${siteConfig.url}/terms` }
        ])}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Terms of Service', href: '/terms' }
          ]}
        />
      </Container>

      <article className="pb-20">
        <Container className="max-w-3xl">
          <p className="italic text-slate-500">
            These Terms of Service are a template. Please consult legal counsel
            before going live.
          </p>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last Updated: {LAST_UPDATED}
          </p>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              1. Service Description
            </h2>
            <p className="mt-3">
              {siteConfig.legalName} (&ldquo;SmartSphere&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
              provides a conversational AI platform that enables customers to
              deploy voice and chat agents across telephony, web, and
              messaging channels. These Terms of Service (&ldquo;Terms&rdquo;)
              govern your access to and use of the SmartSphere services,
              websites, dashboards, APIs, and related software (collectively,
              the &ldquo;Services&rdquo;).
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              2. Eligibility
            </h2>
            <p className="mt-3">
              You may use the Services only if you are at least 18 years old,
              have the legal capacity to enter into a binding contract, and are
              accessing the Services on behalf of a business or organization
              for business purposes. The Services are not intended for personal
              or consumer use.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              3. Account
            </h2>
            <p className="mt-3">
              You are responsible for safeguarding your account credentials
              and for all activity that occurs under your account. You agree
              to provide accurate, current, and complete information and to
              promptly notify us of any unauthorized access or suspected
              security incident.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              4. Subscription Plans &amp; Fees
            </h2>
            <p className="mt-3">
              SmartSphere offers tiered subscription plans designed for
              different scales of usage. Current published plans include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-navy-900">Starter</strong> — $300 per
                month.
              </li>
              <li>
                <strong className="text-navy-900">Pro</strong> — $750 per
                month.
              </li>
              <li>
                <strong className="text-navy-900">Growth</strong> — $1,800 per
                month.
              </li>
              <li>
                <strong className="text-navy-900">Enterprise</strong> — custom
                pricing.
              </li>
            </ul>
            <p className="mt-3">
              A one-time setup fee of <strong className="text-navy-900">$495</strong>{' '}
              applies to new accounts. We offer a{' '}
              <strong className="text-navy-900">30-day money-back guarantee</strong>{' '}
              on the initial subscription term, subject to the terms communicated
              at signup. Plan inclusions, usage limits, and overage charges are
              described on our pricing page or in your order form.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              5. Payment Terms
            </h2>
            <p className="mt-3">
              Subscription fees are billed in advance and are non-refundable
              except as expressly stated in these Terms or required by
              applicable law. You authorize us (or our payment processor) to
              charge your designated payment method for all fees due. Late
              payments may incur interest at the lesser of 1.5% per month or
              the maximum rate permitted by law. Fees are exclusive of taxes,
              which you are responsible for paying.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              6. Acceptable Use Policy
            </h2>
            <p className="mt-3">You agree not to use the Services to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Violate any applicable law or regulation.</li>
              <li>
                Infringe the intellectual property, privacy, or other rights of
                any third party.
              </li>
              <li>
                Send spam, conduct unsolicited outbound campaigns prohibited by
                law, or impersonate another person or entity.
              </li>
              <li>
                Upload or transmit malware, harmful code, or content that is
                unlawful, defamatory, or harassing.
              </li>
              <li>
                Probe, scan, reverse-engineer, or attempt to disrupt the
                Services or any associated infrastructure.
              </li>
              <li>
                Use the Services to deceive end-users about the fact they are
                interacting with an automated agent in any jurisdiction that
                requires such disclosure.
              </li>
            </ul>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              7. Intellectual Property
            </h2>
            <p className="mt-3">
              We own and retain all right, title, and interest in and to the
              Services, including all underlying software, models, content,
              and trademarks. You retain all right, title, and interest in
              and to the Customer Data you submit to the Services. Subject to
              your payment of applicable fees, we grant you a non-exclusive,
              non-transferable, revocable license to use the Services during
              the subscription term.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              8. Customer Data
            </h2>
            <p className="mt-3">
              &ldquo;Customer Data&rdquo; means data, content, and materials
              you or your end-users submit to the Services. You grant us a
              limited license to process Customer Data solely to provide,
              secure, and improve the Services in accordance with our Privacy
              Policy and any applicable Data Processing Agreement. You are
              responsible for ensuring you have all rights and consents
              necessary to submit Customer Data.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              9. Limited Warranties
            </h2>
            <p className="mt-3">
              We will provide the Services in a professional and workmanlike
              manner. EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, THE
              SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND WE DISCLAIM ALL
              OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
              SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL
              COMPONENTS, OR THAT AI-GENERATED OUTPUTS WILL ALWAYS BE
              ACCURATE.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              10. Limitation of Liability
            </h2>
            <p className="mt-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY
              SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
              OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mt-3">
              EACH PARTY&rsquo;S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR
              RELATING TO THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY
              YOU TO SMARTSPHERE FOR THE SERVICES IN THE TWELVE (12) MONTHS
              IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              11. Indemnification
            </h2>
            <p className="mt-3">
              You agree to defend, indemnify, and hold harmless SmartSphere
              and its affiliates, officers, employees, and agents from and
              against any third-party claims, damages, liabilities, costs, and
              expenses (including reasonable attorneys&rsquo; fees) arising
              out of or related to (a) your Customer Data, (b) your use of
              the Services in breach of these Terms, or (c) your violation of
              applicable law or third-party rights.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              12. Termination
            </h2>
            <p className="mt-3">
              Either party may terminate these Terms for material breach if
              the breach is not cured within 30 days of written notice. We
              may suspend or terminate your access immediately for serious
              breaches of the Acceptable Use Policy or non-payment. Upon
              termination, your right to use the Services ceases and we will
              make Customer Data available for export for a reasonable period
              before deletion.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              13. Governing Law
            </h2>
            <p className="mt-3">
              These Terms are governed by and construed in accordance with
              the laws of the United Arab Emirates and, where applicable, the
              laws of the Emirate of Dubai, without regard to conflict-of-laws
              principles.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              14. Dispute Resolution
            </h2>
            <p className="mt-3">
              Any dispute arising out of or in connection with these Terms,
              including any question regarding their existence, validity, or
              termination, shall be referred to and finally resolved by
              arbitration under the Arbitration Rules of the DIFC-LCIA
              Arbitration Centre (or its successor institution). The seat of
              arbitration shall be the Dubai International Financial Centre
              (DIFC), and the language of the arbitration shall be English.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              15. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms from time to time. When we do, we
              will revise the &ldquo;Last Updated&rdquo; date above and, for
              material changes, provide notice through the Services or by
              email. Your continued use of the Services after the effective
              date of any changes constitutes your acceptance of the updated
              Terms.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              16. Contact
            </h2>
            <p className="mt-3">
              For legal notices and questions regarding these Terms, contact
              us at{' '}
              <a
                href={`mailto:${LEGAL_EMAIL}`}
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                {LEGAL_EMAIL}
              </a>
              .
            </p>
          </section>
        </Container>
      </article>
    </>
  );
}

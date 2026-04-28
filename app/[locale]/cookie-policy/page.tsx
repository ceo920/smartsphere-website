import type { Metadata } from 'next';
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
    title: 'Cookie Policy | SmartSphere',
    description:
      'How SmartSphere uses cookies and similar technologies, the categories we use, third-party cookies, Do Not Track, and how to manage your preferences.',
    path: '/cookie-policy',
    locale: params.locale as Locale
  });
}

const cookieRows: {
  name: string;
  provider: string;
  purpose: string;
  category: string;
  duration: string;
}[] = [
  {
    name: 'cookie_consent',
    provider: 'SmartSphere',
    purpose: 'Stores your cookie preferences for this site.',
    category: 'Strictly Necessary',
    duration: '365 days'
  },
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Distinguishes unique users for aggregated analytics.',
    category: 'Performance / Analytics',
    duration: '2 years'
  },
  {
    name: '_ga_<container-id>',
    provider: 'Google Analytics',
    purpose: 'Persists session state for GA4 properties.',
    category: 'Performance / Analytics',
    duration: '2 years'
  },
  {
    name: 'NEXT_LOCALE',
    provider: 'SmartSphere',
    purpose: 'Remembers your language preference.',
    category: 'Functional',
    duration: '1 year'
  },
  {
    name: '_fbp',
    provider: 'Meta',
    purpose: 'Used for advertising measurement and retargeting.',
    category: 'Marketing',
    duration: '90 days'
  }
];

export default function CookiePolicyPage({
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
          { name: 'Cookie Policy', url: `${siteConfig.url}/cookie-policy` }
        ])}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Cookie Policy', href: '/cookie-policy' }
          ]}
        />
      </Container>

      <article className="pb-20">
        <Container className="max-w-3xl">
          <p className="italic text-slate-500">
            This Cookie Policy is a template. Please consult legal counsel
            before going live.
          </p>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last Updated: {LAST_UPDATED}
          </p>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              1. What Are Cookies
            </h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you
              visit a website. They are widely used to make websites work, or
              work more efficiently, as well as to provide reporting
              information and to support advertising. Similar technologies
              (such as pixels, local storage, and SDKs) operate in the same
              general way and are referred to collectively as
              &ldquo;cookies&rdquo; in this policy.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              2. Types of Cookies We Use
            </h2>

            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Strictly Necessary <span className="text-sm font-normal text-slate-500">(always on)</span>
            </h3>
            <p className="mt-2">
              Required for core site functions such as routing, security, and
              remembering your cookie preferences. The site will not work
              correctly without these and they cannot be disabled in our
              banner.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Performance / Analytics
            </h3>
            <p className="mt-2">
              Help us understand how visitors interact with the site —
              aggregate page views, popular pages, and performance issues.
              We use this information to improve the site.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Functional
            </h3>
            <p className="mt-2">
              Remember choices you make (such as language or region) to
              provide a more personalized experience.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-navy-900">
              Marketing
            </h3>
            <p className="mt-2">
              Used to deliver advertising more relevant to you and your
              interests, and to measure the effectiveness of advertising
              campaigns. These may be set by us or by third-party advertising
              partners.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              3. Specific Cookies
            </h2>
            <p className="mt-3">
              The table below lists representative cookies in use. The exact
              set may vary depending on which features you use and which
              third-party tools are enabled.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Name
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Provider
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Purpose
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Category
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cookieRows.map((row) => (
                    <tr key={row.name}>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-navy-900"
                      >
                        {row.name}
                      </th>
                      <td className="px-5 py-4 text-slate-700">
                        {row.provider}
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        {row.purpose}
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        {row.category}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              4. Third-Party Cookies
            </h2>
            <p className="mt-3">
              Some cookies are placed by third parties — for example,
              analytics providers, advertising networks, or embedded content
              providers. These third parties have their own privacy and
              cookie policies, which we encourage you to review.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              5. Managing Your Preferences
            </h2>
            <p className="mt-3">
              You can change your cookie preferences for this site at any
              time using our cookie banner. You can also control cookies
              directly in your browser. The links below provide instructions
              for the most common browsers:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-navy-900">Chrome:</strong> Settings →
                Privacy and security → Cookies and other site data.
              </li>
              <li>
                <strong className="text-navy-900">Firefox:</strong> Settings →
                Privacy &amp; Security → Cookies and Site Data.
              </li>
              <li>
                <strong className="text-navy-900">Safari:</strong> Preferences
                → Privacy → Manage Website Data.
              </li>
              <li>
                <strong className="text-navy-900">Edge:</strong> Settings →
                Cookies and site permissions → Manage and delete cookies and
                site data.
              </li>
            </ul>
            <p className="mt-3">
              Blocking all cookies — including strictly necessary ones — may
              cause parts of the site to stop working.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              6. Do Not Track
            </h2>
            <p className="mt-3">
              Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal.
              Because there is not yet a common industry or legal standard
              for how to respond to DNT signals, we do not currently respond
              to them. You can still manage your preferences using our cookie
              banner or your browser settings.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              7. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Cookie Policy from time to time. When we do,
              we will revise the &ldquo;Last Updated&rdquo; date above and,
              for material changes, provide notice through the site.
            </p>
          </section>

          <section className="mt-10 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-semibold text-navy-900">
              8. Contact
            </h2>
            <p className="mt-3">
              For questions about our use of cookies, contact us at{' '}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="font-medium text-teal-700 hover:text-teal-600"
              >
                {PRIVACY_EMAIL}
              </a>
              .
            </p>
          </section>
        </Container>
      </article>
    </>
  );
}

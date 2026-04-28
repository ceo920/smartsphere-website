import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Sparkles } from 'lucide-react';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { PricingTable } from '@/components/pricing/PricingTable';
import { RoiCalculator } from '@/components/pricing/RoiCalculator';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { allPlansInclude, featureMatrix, pricingFAQ } from '@/content/pricing';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Pricing — Starter, Pro, Growth & Enterprise | SmartSphere',
    description:
      'Transparent SmartSphere pricing: Starter $300/mo, Pro $750/mo, Growth $1,800/mo, custom Enterprise. 30-day money-back guarantee, 20% off annual.',
    path: '/pricing',
    locale: params.locale as Locale
  });
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="text-teal-600" aria-label="Included">
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-slate-300" aria-label="Not included">
        —
      </span>
    );
  }
  return <span className="text-slate-700">{value}</span>;
}

export default function PricingPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Pricing', url: `${siteConfig.url}/pricing` }
          ]),
          faqSchema(pricingFAQ)
        ]}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Pricing', href: '/pricing' }
          ]}
        />
      </Container>

      <section className="pb-8">
        <Container className="text-center">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="All plans include a 30-day money-back guarantee. Cancel anytime."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <PricingTable />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700"
              >
                <Sparkles size={20} strokeWidth={2} />
              </span>
              <h2 className="text-xl font-semibold text-navy-900 sm:text-2xl">
                What&rsquo;s included in the $495 setup
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Our team will:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                'Build a custom AI agent from scratch trained on your data',
                'Set up full integration with your CRM, WhatsApp, telephony, and other tools',
                'Conduct 2 training sessions for your team',
                'Provide 30 days of dedicated post-launch support'
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-teal-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-teal-700">
              Setup fee is waived on Growth and Enterprise plans.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="features-heading">
        <Container>
          <h2
            id="features-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Compare plans feature-by-feature
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Starter
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Pro
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Growth
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureMatrix.map((row) => (
                  <tr key={row.feature}>
                    <th
                      scope="row"
                      className="px-6 py-4 text-left font-medium text-navy-900"
                    >
                      {row.feature}
                    </th>
                    <td className="px-6 py-4">
                      <Cell value={row.starter} />
                    </td>
                    <td className="px-6 py-4">
                      <Cell value={row.pro} />
                    </td>
                    <td className="px-6 py-4">
                      <Cell value={row.growth} />
                    </td>
                    <td className="px-6 py-4">
                      <Cell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="roi-heading">
        <Container>
          <h2
            id="roi-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Estimate your savings
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Plug in your current volume and what each call costs you today —
            we&rsquo;ll suggest a plan and show the monthly impact.
          </p>
          <div className="mt-8">
            <RoiCalculator />
          </div>
        </Container>
      </section>

      <section
        className="bg-slate-50 py-16"
        aria-labelledby="all-plans-heading"
      >
        <Container>
          <h2
            id="all-plans-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            All plans include
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Every SmartSphere plan ships with these foundations — you only pay
            for the volume and channels you need.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allPlansInclude.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="pricing-faq-heading">
        <Container>
          <h2
            id="pricing-faq-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Pricing FAQ
          </h2>
          <dl className="mt-10 grid gap-6 lg:grid-cols-2">
            {pricingFAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <dt className="text-base font-semibold text-navy-900">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CTA />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardBody } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { industries } from '@/content/industries';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Industries We Serve | SmartSphere Conversational AI',
    description:
      'Conversational AI voice and chat agents pre-trained for healthcare, real estate, logistics, e-commerce, banking, education, hospitality, and support.',
    path: '/industries',
    locale: params.locale as Locale
  });
}

export default function IndustriesIndexPage({
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
          { name: 'Industries', url: `${siteConfig.url}/industries` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Industries', href: '/industries' }
          ]}
        />
      </Container>
      <section className="pb-8">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Industries"
            title="Conversational AI tailored to the way your industry works"
            subtitle="Pre-trained playbooks, compliance guardrails, and integrations for the eight industries that benefit most from voice and chat agents — and 26+ languages out of the box."
          />
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block h-full"
                >
                  <Card className="h-full transition-shadow hover:border-teal-200 hover:shadow-soft">
                    <CardBody>
                      <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                        {industry.shortName}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-navy-900">
                        {industry.name}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {industry.tagline}
                      </p>
                      <p className="mt-5 text-sm font-medium text-navy-700 group-hover:text-teal-600">
                        Read more →
                      </p>
                    </CardBody>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTA />
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  productSchemaForIndustry
} from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import {
  industries,
  industryBySlug,
  industrySlugs
} from '@/content/industries';
import type { Locale } from '@/i18n/routing';

const inActionCaptions: Record<string, string> = {
  healthcare:
    'SmartSphere handling a patient appointment inquiry in real-time',
  'real-estate':
    'SmartSphere qualifying a property inquiry and routing to the right agent',
  logistics: 'SmartSphere providing instant shipment status updates',
  ecommerce: 'SmartSphere assisting with order tracking and returns',
  banking:
    'SmartSphere handling account inquiries with secure verification',
  education: 'SmartSphere answering admission queries 24/7',
  hospitality: 'SmartSphere managing booking inquiries and guest requests',
  'customer-support':
    'SmartSphere resolving customer issues across multiple channels'
};

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const industry = industryBySlug[params.slug];
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    locale: params.locale as Locale
  });
}

export default function IndustryPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const industry = industryBySlug[slug];
  if (!industry) notFound();

  const relatedIndustries = industry.related
    .map((s) => industryBySlug[s])
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          productSchemaForIndustry(industry),
          faqSchema(industry.faq),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Industries', url: `${siteConfig.url}/industries` },
            {
              name: industry.name,
              url: `${siteConfig.url}/industries/${industry.slug}`
            }
          ])
        ]}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Industries', href: '/industries' },
            { name: industry.name, href: `/industries/${industry.slug}` }
          ]}
        />
      </Container>

      <section
        className="bg-gradient-to-b from-navy-50 to-white pb-16 pt-2 sm:pb-20"
        aria-labelledby="industry-heading"
      >
        <Container>
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden />
            {industry.shortName}
          </Badge>
          <h1
            id="industry-heading"
            className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl"
          >
            {industry.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {industry.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Book a demo
            </Button>
            <Button href="/solutions" size="lg" variant="secondary">
              See solutions
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="intro-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2
                id="intro-heading"
                className="text-2xl font-semibold text-navy-900"
              >
                {industry.name} agents that ship in weeks, not quarters
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {industry.intro}
              </p>
            </div>
            <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                Outcomes our customers see
              </p>
              <dl className="mt-4 space-y-4">
                {industry.outcomes.map((o) => (
                  <div key={o.label}>
                    <dt className="text-2xl font-semibold text-navy-900">
                      {o.metric}
                    </dt>
                    <dd className="mt-1 text-sm text-slate-600">{o.label}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section
        className="bg-slate-50 py-20"
        aria-labelledby="usecases-heading"
      >
        <Container>
          <h2
            id="usecases-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Common use cases
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            The high-leverage conversations SmartSphere Technologies handles in {industry.name.toLowerCase()} —
            grounded in your systems, not in pre-written FAQs.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {industry.useCases.map((uc) => (
              <li key={uc.title}>
                <article className="h-full rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-semibold text-navy-900">
                    {uc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {uc.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="see-it-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                See It In Action
              </p>
              <h2
                id="see-it-heading"
                className="mt-2 text-2xl font-semibold text-navy-900 sm:text-3xl"
              >
                A real {industry.name.toLowerCase()} conversation, handled end-to-end
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {inActionCaptions[industry.slug] ??
                  'SmartSphere handling a real customer conversation in real-time'}
                . Live transcript, automatic sentiment, and clean handoffs when escalation is needed.
              </p>
              <div className="mt-6">
                <Button href="/contact" size="lg">
                  Book a demo
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
              <Image
                src="/images/conversation-transcript.png"
                alt={
                  inActionCaptions[industry.slug] ??
                  `SmartSphere AI agent conversation for ${industry.name}`
                }
                fill
                loading="lazy"
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="features-heading">
        <Container>
          <h2
            id="features-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Why teams pick SmartSphere Technologies for {industry.name.toLowerCase()}
          </h2>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {industry.features.map((f) => (
              <li key={f.title}>
                <Card className="h-full">
                  <CardBody>
                    <h3 className="text-base font-semibold text-navy-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {f.description}
                    </p>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className="bg-slate-50 py-20"
        aria-labelledby="workflow-heading"
      >
        <Container>
          <div className="max-w-3xl">
            <h2
              id="workflow-heading"
              className="text-2xl font-semibold text-navy-900 sm:text-3xl"
            >
              {industry.workflow.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {industry.workflow.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="integrations-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2
                id="integrations-heading"
                className="text-2xl font-semibold text-navy-900 sm:text-3xl"
              >
                Integrations for {industry.name.toLowerCase()}
              </h2>
              <p className="mt-3 text-slate-600">
                Native connectors that read and write the systems your team
                already lives in. Custom integrations are available for
                proprietary or legacy stacks.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {industry.integrations.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                See the full list on the{' '}
                <Link
                  href="/integrations"
                  className="font-medium text-teal-700 hover:text-teal-600"
                >
                  integrations page
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-navy-900 p-8 text-white">
              <h3 className="text-xl font-semibold">26+ languages, native</h3>
              <p className="mt-3 text-navy-100">
                {industry.shortName} customers don’t live in one language. The
                same agent that answers in English handles Spanish, Mandarin,
                Arabic, Portuguese, and 22 more — with locale-aware tone and
                accents — without a separate deployment per language.
              </p>
              <Link
                href="/solutions#multilingual"
                className="mt-5 inline-flex text-sm font-medium text-teal-200 hover:text-white"
              >
                Multilingual capabilities →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="bg-slate-50 py-20"
        aria-labelledby="faq-heading"
      >
        <Container>
          <h2
            id="faq-heading"
            className="text-2xl font-semibold text-navy-900 sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {industry.faq.map((item) => (
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

      {relatedIndustries.length > 0 && (
        <section className="py-20" aria-labelledby="related-heading">
          <Container>
            <h2
              id="related-heading"
              className="text-2xl font-semibold text-navy-900 sm:text-3xl"
            >
              Related industries
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {relatedIndustries.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/industries/${r.slug}`}
                    className="group block h-full"
                  >
                    <Card className="h-full transition-shadow hover:border-teal-200 hover:shadow-soft">
                      <CardBody>
                        <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                          {r.shortName}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-navy-900">
                          {r.name}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                          {r.tagline}
                        </p>
                        <p className="mt-4 text-sm font-medium text-navy-700 group-hover:text-teal-600">
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
      )}

      <CTA />
    </>
  );
}

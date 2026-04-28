import type { Metadata } from 'next';
import Image from 'next/image';
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
import { solutions } from '@/content/solutions';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Solutions: Voice, Chat, Multilingual & Analytics | SmartSphere',
    description:
      'SmartSphere solutions: voice agents over phone, chat agents across web and WhatsApp, native 26+ language support, and conversation analytics on every interaction.',
    path: '/solutions',
    locale: params.locale as Locale
  });
}

export default function SolutionsPage({
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
          { name: 'Solutions', url: `${siteConfig.url}/solutions` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Solutions', href: '/solutions' }
          ]}
        />
      </Container>
      <section className="pb-8">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Solutions"
            title="Voice, chat, multilingual, and analytics — one platform"
            subtitle="The SmartSphere Technologies platform is four products that work together: production-grade voice agents, channel-agnostic chat agents, native multilingual support, and conversation analytics on 100% of interactions."
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="space-y-16">
            {solutions.map((s, idx) => (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 gap-10 lg:grid-cols-3"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    0{idx + 1} · Solution
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-navy-900 sm:text-3xl">
                    {s.name}
                  </h2>
                  <p className="mt-3 text-slate-600">{s.tagline}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-base leading-relaxed text-slate-700">
                    {s.description}
                  </p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                    {s.features.map((f) => (
                      <li key={f.title}>
                        <Card className="h-full">
                          <CardBody>
                            <h3 className="text-sm font-semibold text-navy-900">
                              {f.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                              {f.description}
                            </p>
                          </CardBody>
                        </Card>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-slate-600">
                    Pair with {' '}
                    <Link
                      href="/integrations"
                      className="font-medium text-teal-700 hover:text-teal-600"
                    >
                      integrations
                    </Link>{' '}
                    to deploy in your stack, or see how it applies in {' '}
                    <Link
                      href="/industries"
                      className="font-medium text-teal-700 hover:text-teal-600"
                    >
                      your industry
                    </Link>
                    .
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="what-you-get-heading">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What You Get"
            title={
              <span id="what-you-get-heading">
                A complete picture of every conversation
              </span>
            }
            subtitle="From AI-powered insights to detailed performance reports — see exactly how your agents perform and where to improve."
            className="mx-auto"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
                <Image
                  src="/images/ai-insights.png"
                  alt="SmartSphere AI Insights dashboard showing sentiment trends, top keywords, and language distribution"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="text-base font-semibold text-navy-900">
                  AI Insights
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Sentiment trends, top keywords, and language distribution across every interaction.
                </p>
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
                <Image
                  src="/images/analytics-reports.png"
                  alt="SmartSphere Analytics & Reports dashboard showing daily call volume, peak hours, and performance metrics"
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="text-base font-semibold text-navy-900">
                  Analytics & Reports
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Daily volume, peak hours, and performance metrics — measured on 100% of conversations.
                </p>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-16" aria-labelledby="how-heading">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <h2
              id="how-heading"
              className="text-2xl font-semibold text-navy-900 sm:text-3xl"
            >
              How SmartSphere Technologies fits together
            </h2>
            <div className="mt-6 grid gap-6 text-base leading-relaxed text-slate-700 lg:grid-cols-2">
              <p>
                Voice and chat share one agent brain. The same playbook that
                handles a phone call can resolve a WhatsApp message, and the
                conversation memory follows the customer across channels. That
                is what makes the difference between a production agent and a
                channel-specific bot.
              </p>
              <p>
                Multilingual is not a switch — it’s the default. The agent
                detects the customer’s language from their first message and
                replies in it, including RTL scripts and CJK rendering. Every
                feature in the platform works in 26+ languages.
              </p>
              <p>
                Analytics runs on 100% of interactions, not a sample. CSAT
                prediction, sentiment, and conversation quality scoring are
                computed automatically, so you finally see what your support
                actually does instead of inferring from a 2% sample.
              </p>
              <p>
                And it ships fast. Most customers run their first production
                scenarios within 2–3 weeks, starting narrow on a single
                high-volume topic and expanding once metrics validate the
                pattern.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

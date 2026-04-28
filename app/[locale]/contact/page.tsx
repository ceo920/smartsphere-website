import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
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
    title: 'Contact Sales — Book a SmartSphere Demo',
    description:
      'Talk to the SmartSphere Technologies team. Book a 30-minute demo, see voice and chat agents on your stack, and get pricing tailored to your industry.',
    path: '/contact',
    locale: params.locale as Locale
  });
}

export default function ContactPage({
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
          { name: 'Contact', url: `${siteConfig.url}/contact` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' }
          ]}
        />
      </Container>

      <section className="pb-20 pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                as="h1"
                eyebrow="Contact"
                title="See SmartSphere on your stack in 30 minutes"
                subtitle="Tell us a bit about your team and we’ll book a demo on your data — voice and chat agents running your real scenarios, not a sandbox."
              />
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-sm font-semibold text-navy-900">
                    Sales
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    <a
                      href={`mailto:${siteConfig.contact.sales}`}
                      className="hover:text-navy-900"
                    >
                      {siteConfig.contact.sales}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy-900">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    <a
                      href={`tel:${siteConfig.contact.phoneTel}`}
                      className="hover:text-navy-900"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy-900">
                    Headquarters
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    🇦🇪 Dubai, United Arab Emirates
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy-900">
                    Offices
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600">
                    🇶🇦 Doha, Qatar  ·  🇵🇰 Pakistan
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-9">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

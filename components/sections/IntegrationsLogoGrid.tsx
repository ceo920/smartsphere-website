import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homepageIntegrationLogos } from '@/content/home';

export function IntegrationsLogoGrid() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="integrations-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Integrations"
          title={
            <span id="integrations-heading">{t('integrationsTitle')}</span>
          }
          subtitle={t('integrationsSubtitle')}
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {homepageIntegrationLogos.map((logo) => (
            <li
              key={logo.slug}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 transition-shadow hover:shadow-soft"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={140}
                height={56}
                className="max-h-12 w-auto"
              />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/integrations"
            className="text-sm font-semibold text-teal-700 hover:text-teal-600"
          >
            View All Integrations →
          </Link>
        </div>
      </Container>
    </section>
  );
}

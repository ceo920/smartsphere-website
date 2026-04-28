import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const trustedLogos = [
  '/images/integration-logos/hubspot.svg',
  '/images/integration-logos/salesforce.svg',
  '/images/integration-logos/zoho.svg',
  '/images/integration-logos/twilio.svg',
  '/images/integration-logos/whatsapp.svg',
  '/images/integration-logos/slack.svg'
];

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden />
              {t('eyebrow')}
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {t('subtitle')}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
              {t('uaePill')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                {t('ctaPrimary')}
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                {t('ctaSecondary')}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
              <Image
                src="/images/dashboard-overview.png"
                alt="SmartSphere AI call center dashboard with real-time metrics and call analytics"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <p className="text-center text-sm font-medium text-slate-500">
            {t('trustedBy')}
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
            {trustedLogos.map((src) => (
              <li key={src} className="grayscale">
                <Image
                  src={src}
                  alt=""
                  width={120}
                  height={48}
                  className="h-10 w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

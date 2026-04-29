import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const trustedLogos = [
  {
    src: '/images/clients/sil.png',
    alt: 'SIL — At the edge of digital innovation',
    width: 252,
    height: 160
  },
  {
    src: '/images/clients/modern-printing-press.png',
    alt: 'Modern Printing Press',
    width: 301,
    height: 160
  }
];

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <Badge>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden />
                {t('eyebrow')}
              </Badge>
            </div>
            <h1 className="mt-6 animate-fade-in-up text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {t('subtitle')}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
              {t('uaePill')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" className="animate-subtle-pulse">
                {t('ctaPrimary')}
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                {t('ctaSecondary')}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] animate-float overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
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

        <div className="mt-16 border-t border-slate-200 py-12 md:py-16">
          <p className="text-center text-sm font-medium text-slate-500">
            {t('trustedBy')}
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {trustedLogos.map((logo) => (
              <li key={logo.src}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-14 md:h-16 w-auto grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

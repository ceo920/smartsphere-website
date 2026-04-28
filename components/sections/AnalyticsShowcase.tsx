import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const items = [
  {
    src: '/images/ai-insights.png',
    alt: 'SmartSphere AI Insights dashboard showing sentiment trends, top keywords, and language distribution',
    title: 'AI Insights',
    caption: 'Sentiment trends, top keywords, language distribution'
  },
  {
    src: '/images/analytics-reports.png',
    alt: 'SmartSphere Analytics & Reports dashboard showing daily call volume, peak hours, and performance metrics',
    title: 'Analytics & Reports',
    caption: 'Daily volume, peak hours, performance metrics'
  },
  {
    src: '/images/calls-management.png',
    alt: 'SmartSphere Call Management interface with searchable calls table, filters, and sentiment analysis',
    title: 'Call Management',
    caption: 'Search, filter, and analyze every interaction'
  }
];

export function AnalyticsShowcase() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="analytics-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Analytics"
          title={<span id="analytics-heading">{t('analyticsTitle')}</span>}
          subtitle={t('analyticsSubtitle')}
          className="mx-auto"
        />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.src} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  quality={90}
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Button href="/contact" size="lg">
            {t('analyticsCta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}

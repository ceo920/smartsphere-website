import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { pricingTiers } from '@/content/pricing';

export function PricingTeaser() {
  const t = useTranslations('sections');
  return (
    <section className="py-20 sm:py-24" aria-labelledby="pricing-teaser-heading">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={
            <span id="pricing-teaser-heading">{t('pricingTeaserTitle')}</span>
          }
          subtitle={t('pricingTeaserSubtitle')}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <li key={tier.name}>
              <article
                className={`flex h-full flex-col rounded-xl border bg-white p-6 shadow-card ${
                  tier.highlighted
                    ? 'border-teal-300 ring-1 ring-teal-300'
                    : 'border-slate-200'
                }`}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {tier.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-navy-900">
                    {tier.monthly}
                  </span>
                  {!tier.customPrice && (
                    <span className="text-sm text-slate-500">
                      {tier.cadence}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-sm text-slate-600">{tier.tagline}</p>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-500">
          {t('pricingGuarantee')}
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/pricing" size="lg" variant="secondary">
            Compare Plans →
          </Button>
        </div>
      </Container>
    </section>
  );
}

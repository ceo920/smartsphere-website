import { useTranslations } from 'next-intl';
import { Compass, SlidersHorizontal, PlugZap, Rocket } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howItWorksSteps, type HowItWorksStep } from '@/content/home';

const iconMap: Record<HowItWorksStep['icon'], typeof Compass> = {
  Compass,
  SlidersHorizontal,
  PlugZap,
  Rocket
};

export function HowItWorks() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title={
            <span id="how-it-works-heading">{t('howItWorksTitle')}</span>
          }
          subtitle={t('howItWorksSubtitle')}
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <li
                key={step.number}
                className="relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-7 items-center rounded-full bg-navy-900 px-3 text-xs font-semibold tracking-wide text-white">
                  STEP {step.number}
                </span>
                <span
                  aria-hidden
                  className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600"
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Lock,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  KeyRound,
  FileCheck2
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { securityCards, securityRoadmap, type SecurityCard } from '@/content/home';

const iconMap: Record<SecurityCard['icon'], typeof Lock> = {
  Lock,
  Globe2,
  ShieldCheck,
  BadgeCheck,
  KeyRound,
  FileCheck2
};

export function SecuritySection() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="security-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Security"
          title={<span id="security-heading">{t('securityTitle')}</span>}
          subtitle={t('securitySubtitle')}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <li
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600"
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t('securityRoadmap')}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
            {securityRoadmap.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-teal-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/security"
            className="text-sm font-semibold text-teal-700 hover:text-teal-600"
          >
            Read our Security & Privacy details →
          </Link>
        </div>
      </Container>
    </section>
  );
}

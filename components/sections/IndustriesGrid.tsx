import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  HeartPulse,
  Building2,
  Truck,
  ShoppingBag,
  Banknote,
  GraduationCap,
  Hotel,
  Headset
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { industryCards, type IndustryCard } from '@/content/home';

const iconMap: Record<IndustryCard['icon'], typeof HeartPulse> = {
  HeartPulse,
  Building2,
  Truck,
  ShoppingBag,
  Banknote,
  GraduationCap,
  Hotel,
  Headset
};

export function IndustriesGrid() {
  const t = useTranslations('sections');
  return (
    <section className="py-20 sm:py-24" aria-labelledby="industries-heading">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title={<span id="industries-heading">{t('industriesTitle')}</span>}
          subtitle={t('industriesSubtitle')}
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industryCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <li key={card.slug}>
                <Link
                  href={`/industries/${card.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100"
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                  <p className="mt-5 text-sm font-medium text-navy-700 group-hover:text-teal-600">
                    Learn more →
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

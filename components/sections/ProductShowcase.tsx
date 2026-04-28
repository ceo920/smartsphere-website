import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { productBullets } from '@/content/home';

export function ProductShowcase() {
  const t = useTranslations('sections');
  return (
    <section className="py-20 sm:py-24" aria-labelledby="showcase-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Product"
              title={<span id="showcase-heading">{t('showcaseTitle')}</span>}
              subtitle={t('showcaseBody')}
            />
            <ul className="mt-8 space-y-4">
              {productBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-50 text-teal-600"
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-base text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
            <Image
              src="/images/conversation-transcript.png"
              alt="Live conversation transcript between SmartSphere AI agent and a customer"
              fill
              loading="lazy"
              quality={90}
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

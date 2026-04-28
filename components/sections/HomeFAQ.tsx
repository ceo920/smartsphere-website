import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homepageFAQ } from '@/content/home';

export function HomeFAQ() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="home-faq-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={<span id="home-faq-heading">{t('faqTitle')}</span>}
          subtitle={t('faqSubtitle')}
        />
        <dl className="mx-auto mt-14 max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {homepageFAQ.map((item) => (
            <details
              key={item.q}
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-navy-900 marker:hidden">
                <dt>{item.q}</dt>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center text-teal-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.a}
              </dd>
            </details>
          ))}
        </dl>
      </Container>
    </section>
  );
}

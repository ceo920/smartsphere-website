import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { languages } from '@/content/languages';

export function LanguagesShowcase() {
  const t = useTranslations('sections');
  return (
    <section className="py-20 sm:py-24" aria-labelledby="languages-heading">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="26+ Languages"
          title={<span id="languages-heading">{t('languagesTitle')}</span>}
          subtitle={t('languagesSubtitle')}
        />
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex flex-col items-start gap-1 rounded-lg border border-slate-200 bg-white px-4 py-3"
            >
              <p className="text-sm font-semibold text-navy-900">
                {lang.name}
              </p>
              <p className="text-xs text-slate-500" lang={lang.code}>
                {lang.native}
              </p>
              {lang.rtl && (
                <span className="mt-1 inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-700">
                  RTL native
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

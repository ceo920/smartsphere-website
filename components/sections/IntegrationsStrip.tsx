import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { integrationCategories } from '@/content/integrations';

export function IntegrationsStrip() {
  const t = useTranslations('sections');
  return (
    <section
      className="bg-slate-50 py-20 sm:py-24"
      aria-labelledby="integrations-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title={<span id="integrations-heading">{t('integrationsTitle')}</span>}
          subtitle={t('integrationsSubtitle')}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrationCategories.slice(0, 6).map((cat) => (
            <article
              key={cat.slug}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-base font-semibold text-navy-900">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{cat.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

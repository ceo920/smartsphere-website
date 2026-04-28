import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function CTA() {
  const t = useTranslations('cta');
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-2xl bg-navy-900 px-8 py-14 text-white sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-100">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                {t('primary')}
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                {t('secondary')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

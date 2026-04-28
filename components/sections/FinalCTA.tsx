import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  const t = useTranslations('sections');
  const cta = useTranslations('cta');
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-2xl bg-navy-900 px-8 py-14 text-center text-white sm:px-14 sm:py-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('finalCtaTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-100">
            {t('finalCtaSubtitle')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              {cta('primary')}
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              {cta('secondary')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

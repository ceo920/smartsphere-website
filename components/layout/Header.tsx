import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/industries', key: 'industries' },
  { href: '/solutions', key: 'solutions' },
  { href: '/integrations', key: 'integrations' },
  { href: '/pricing', key: 'pricing' },
  { href: '/blog', key: 'blog' },
  { href: '/about', key: 'about' }
] as const;

export function Header() {
  const t = useTranslations('nav');
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-navy-900"
        >
          <span
            aria-hidden
            className="inline-block h-6 w-6 rounded-md bg-navy-900"
          />
          SmartSphere
        </Link>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-navy-900"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-slate-700 hover:text-navy-900 sm:inline-flex"
          >
            {t('contact')}
          </Link>
          <Button href="/contact" size="sm">
            {t('bookDemo')}
          </Button>
        </div>
      </Container>
    </header>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-white/85 backdrop-blur transition-all duration-300',
        scrolled ? 'shadow-md' : 'border-b border-slate-200'
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between transition-all duration-300',
          scrolled ? 'h-20' : 'h-28'
        )}
      >
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105"
          aria-label="SmartSphere Technologies — Home"
        >
          <Image
            src="/images/logo-dark.png"
            alt="SmartSphere Technologies"
            width={360}
            height={90}
            priority
            className={cn(
              'w-auto transition-all duration-300',
              scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
            )}
          />
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

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from './Container';
import { siteConfig } from '@/lib/site';
import { industries } from '@/content/industries';
import { solutions } from '@/content/solutions';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
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
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              {t('tagline')}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-navy-900">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions#${s.slug}`}
                    className="hover:text-navy-900"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/integrations" className="hover:text-navy-900">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-navy-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-navy-900">Industries</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {industries.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="hover:text-navy-900"
                  >
                    {i.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="hover:text-navy-900">
                  See all →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-navy-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-navy-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-navy-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-navy-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-navy-900">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-navy-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-navy-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-navy-900">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-navy-900">
                  Security &amp; Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <p className="text-sm font-semibold text-navy-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-navy-900"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="hover:text-navy-900"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-200">
        <Container className="py-5 text-xs text-slate-500">
          <p className="text-center text-slate-400">
            🇦🇪 Dubai (HQ)  ·  🇶🇦 Doha  ·  🇵🇰 Pakistan
          </p>
          <p className="mt-3 italic text-slate-400">
            Product screenshots show anonymized test data. Customer information is masked for privacy.
          </p>
          <div className="mt-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.legalName}. {t('rights')}
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-navy-900"
              >
                {siteConfig.contact.email}
              </a>
              {' · '}
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="hover:text-navy-900"
              >
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

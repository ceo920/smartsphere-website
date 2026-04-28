import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// English is the only fully translated locale today; the rest are scaffolded
// so that adding messages/<code>.json is enough to enable that locale.
export const locales = [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'da', 'no',
  'fi', 'pl', 'cs', 'tr', 'ar', 'he', 'ru', 'uk', 'zh', 'ja',
  'ko', 'hi', 'bn', 'ur', 'id', 'th'
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

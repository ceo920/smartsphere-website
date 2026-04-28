import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = locales.includes(requested as Locale)
    ? (requested as Locale)
    : defaultLocale;

  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../messages/${defaultLocale}.json`)).default;
  }

  return { locale, messages, timeZone: 'UTC' };
});

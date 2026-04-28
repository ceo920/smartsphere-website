import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Run on every path except Next internals, static assets, sitemap/robots, and api.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

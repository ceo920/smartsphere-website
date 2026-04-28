import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Hero } from '@/components/sections/Hero';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { AnalyticsShowcase } from '@/components/sections/AnalyticsShowcase';
import { IntegrationsLogoGrid } from '@/components/sections/IntegrationsLogoGrid';
import { LanguagesShowcase } from '@/components/sections/LanguagesShowcase';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { HomeFAQ } from '@/components/sections/HomeFAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/components/seo/schemas';
import { homepageFAQ } from '@/content/home';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: `${siteConfig.name} — AI Agents That Talk, Sell, and Support in 26+ Languages`,
    description:
      'SmartSphere builds production-grade voice and chat AI agents for healthcare, real estate, logistics, banking, and more. Native CRM, WhatsApp, and telephony integrations. UAE-headquartered.',
    path: '/',
    locale: params.locale as Locale
  });
}

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={faqSchema(homepageFAQ)} />
      <Hero />
      <IndustriesGrid />
      <HowItWorks />
      <ProductShowcase />
      <AnalyticsShowcase />
      <IntegrationsLogoGrid />
      <LanguagesShowcase />
      <SecuritySection />
      <PricingTeaser />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}

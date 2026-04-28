export type IndustryUseCase = {
  title: string;
  description: string;
};

export type IndustryFeature = {
  title: string;
  description: string;
};

export type IndustryFAQ = {
  q: string;
  a: string;
};

export type IndustryWorkflow = {
  title: string;
  body: string;
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  hero: {
    title: string;
    subtitle: string;
  };
  metaTitle: string;
  metaDescription: string;
  useCases: IndustryUseCase[];
  features: IndustryFeature[];
  outcomes: { metric: string; label: string }[];
  workflow: IndustryWorkflow;
  integrations: string[];
  faq: IndustryFAQ[];
  related: string[];
};

import { healthcare } from './healthcare';
import { realEstate } from './real-estate';
import { logistics } from './logistics';
import { ecommerce } from './ecommerce';
import { banking } from './banking';
import { education } from './education';
import { hospitality } from './hospitality';
import { customerSupport } from './customer-support';

export const industries: Industry[] = [
  healthcare,
  realEstate,
  logistics,
  ecommerce,
  banking,
  education,
  hospitality,
  customerSupport
];

export const industryBySlug = Object.fromEntries(
  industries.map((i) => [i.slug, i])
) as Record<string, Industry>;

export const industrySlugs = industries.map((i) => i.slug);

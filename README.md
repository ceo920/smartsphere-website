# SmartSphere Technologies Website

Marketing website for **SmartSphere Technologies** — conversational AI voice and chat agents for 8+ industries in 26+ languages. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and next-intl.

> Brand strings live in `lib/site.ts` and `messages/en.json`. Update both to rebrand.

## Stack

- **Next.js 14** App Router + TypeScript
- **Tailwind CSS** with a custom navy/teal palette
- **next-intl v3** for i18n (English default, scaffolded for 26+ locales)
- **Next-native** `sitemap.xml` and `robots.txt` (`app/sitemap.ts` + `app/robots.ts`)
- **MDX** for the blog (`content/blog/*.mdx`)
- **JSON-LD** schemas: `Organization`, `WebSite`, `Product` (industry pages), `FAQPage`, `BreadcrumbList`

## Getting started

```bash
npm install
cp .env.local.example .env.local   # set NEXT_PUBLIC_SITE_URL and contact emails
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script           | What it does                                             |
| ---------------- | -------------------------------------------------------- |
| `npm run dev`    | Local dev server                                         |
| `npm run build`  | Production build                                         |
| `npm run start`  | Run the production build                                 |
| `npm run lint`   | ESLint                                                   |

## Project layout

```
app/[locale]/      Localized routes (home, industries, solutions, …)
components/
  layout/          Header, Footer, Container
  sections/        Hero, IndustriesGrid, IntegrationsStrip, …
  ui/              Button, Card, Badge, SectionHeading
  seo/             JsonLd + schema builders
  forms/           ContactForm
content/
  industries/      8 industry data modules (typed)
  blog/            MDX posts
  integrations.ts, languages.ts, solutions.ts, pricing.ts
i18n/              next-intl routing + request config
lib/               cn, seo, site, mdx
messages/          en.json (add es.json, fr.json, … to enable a locale)
middleware.ts      next-intl locale negotiation
app/sitemap.ts     Dynamic sitemap (static + industries + blog + hreflang)
app/robots.ts      robots.txt
```

## SEO

- Per-page `Metadata` via `lib/seo.ts` (`buildMetadata`) — unique title/description, OG, Twitter, canonical, hreflang.
- JSON-LD injected per page using `components/seo/JsonLd.tsx` and the schema builders in `components/seo/schemas.ts`.
- `sitemap.xml` and `robots.txt` are generated dynamically by Next at request time (`app/sitemap.ts`, `app/robots.ts`). The sitemap pulls industry slugs and blog posts automatically and emits `<xhtml:link>` hreflang alternates.
- Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs and the sitemap point at the right host.

## Adding a locale

1. Create `messages/<code>.json` (copy from `messages/en.json`).
2. Make sure `<code>` is in the `locales` array in `i18n/routing.ts`.
3. That's it — `app/[locale]/...` will start serving it.

Locales without their own message file fall back to English (see `i18n/request.ts`).

## Adding an industry

1. Create `content/industries/<slug>.ts` exporting an `Industry` (see `content/industries/index.ts` for the type).
2. Import it in `content/industries/index.ts` and add it to the `industries` array.
3. The page at `/industries/<slug>` renders automatically.

## Adding a blog post

Drop an `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "Post title"
description: "One-line summary"
date: "2026-04-25"
---

Content here.
```

## Contact form

The contact form (`components/forms/ContactForm.tsx`) is UI-only. To wire a backend, point its `action` at a Next.js route handler under `app/api/contact/route.ts` or a third-party endpoint (Formspree, Resend, etc.).

## Deploying to Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **Import Project** → pick the repo. Vercel auto-detects Next.js.
3. **Environment variables** (Project Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `NEXT_PUBLIC_COMPANY_NAME` = `SmartSphere Technologies` (or rebrand)
4. Deploy. The first build will produce `sitemap.xml` and `robots.txt` via the `postbuild` hook.
5. Add a custom domain in **Settings → Domains** and Vercel will provision SSL automatically.

### Production checklist

- [ ] Replace `NEXT_PUBLIC_SITE_URL` with the real domain.
- [ ] Replace `siteConfig` placeholders in `lib/site.ts` (legalName, contact, social).
- [ ] Add real OG images in `public/og/` (default referenced: `/og/default.png`).
- [ ] Wire the contact form to a backend.
- [ ] Add Google Search Console + submit `sitemap.xml`.
- [ ] Add analytics (Vercel Analytics, Plausible, or GA4).

## License

Proprietary. © SmartSphere Technologies.

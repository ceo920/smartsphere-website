import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { CTA } from '@/components/sections/CTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getAllBlogSlugs, getBlogPost } from '@/lib/mdx';
import type { Locale } from '@/i18n/routing';

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.slug}`,
    locale: params.locale as Locale
  });
}

function articleSchema(post: NonNullable<Awaited<ReturnType<typeof getBlogPost>>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      '@type': 'Organization',
      name: post.frontmatter.author || siteConfig.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/og/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`
    },
    keywords: post.frontmatter.tags?.join(', ')
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-10 text-2xl font-semibold tracking-tight text-navy-900"
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="mt-8 text-xl font-semibold tracking-tight text-navy-900"
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      {...props}
      className="mt-5 text-base leading-relaxed text-slate-700"
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="mt-4 list-disc space-y-2 pl-6 text-slate-700" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="mt-4 list-decimal space-y-2 pl-6 text-slate-700" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className="font-semibold text-navy-900" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="font-medium text-teal-700 underline-offset-2 hover:text-teal-600 hover:underline"
    />
  )
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPostPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Blog', url: `${siteConfig.url}/blog` },
            {
              name: post.frontmatter.title,
              url: `${siteConfig.url}/blog/${post.slug}`
            }
          ])
        ]}
      />

      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.frontmatter.title, href: `/blog/${post.slug}` }
          ]}
        />
      </Container>

      <article className="pb-12">
        <Container>
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              {formatDate(post.frontmatter.date)} · {post.frontmatter.author}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {post.frontmatter.description}
            </p>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <div className="prose prose-slate mt-12 max-w-3xl">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <div className="mt-16 max-w-3xl border-t border-slate-200 pt-8 text-sm text-slate-600">
            <Link
              href="/blog"
              className="font-medium text-teal-700 hover:text-teal-600"
            >
              ← All posts
            </Link>
          </div>
        </Container>
      </article>

      <CTA />
    </>
  );
}

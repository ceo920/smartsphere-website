import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';

import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardBody } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/sections/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getAllBlogPosts } from '@/lib/mdx';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    title: 'Blog — Conversational AI Insights | SmartSphere Technologies',
    description:
      'Practical writing on conversational AI, voice and chat agents, customer support automation, multilingual rollouts, and the operations behind it.',
    path: '/blog',
    locale: params.locale as Locale
  });
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogIndexPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const posts = await getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` }
        ])}
      />
      <Container className="py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' }
          ]}
        />
      </Container>

      <section className="pb-8">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="Notes from the conversational AI frontline"
            subtitle="Practical writing for teams shipping voice and chat agents in production. No demos, no hype — what we’ve learned from the work."
          />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {posts.length === 0 ? (
            <p className="text-slate-600">No posts yet — check back soon.</p>
          ) : (
            <ul className="grid gap-6 lg:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <Card className="h-full transition-shadow hover:border-teal-200 hover:shadow-soft">
                      <CardBody>
                        <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                          {formatDate(post.frontmatter.date)} ·{' '}
                          {post.frontmatter.author}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold text-navy-900">
                          {post.frontmatter.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {post.frontmatter.description}
                        </p>
                        {post.frontmatter.tags &&
                          post.frontmatter.tags.length > 0 && (
                            <ul className="mt-4 flex flex-wrap gap-2">
                              {post.frontmatter.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          )}
                        <p className="mt-5 text-sm font-medium text-navy-700 group-hover:text-teal-600">
                          Read post →
                        </p>
                      </CardBody>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}

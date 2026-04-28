import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => f.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  let raw: string;
  try {
    raw = await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
  const parsed = matter(raw);
  return {
    slug,
    frontmatter: parsed.data as BlogFrontmatter,
    content: parsed.content
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs();
  const posts = await Promise.all(slugs.map((s) => getBlogPost(s)));
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    );
}

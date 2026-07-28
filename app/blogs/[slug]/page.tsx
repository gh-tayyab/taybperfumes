import { client } from "@/lib/sanity";
import { blogQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { portableTextComponents } from "@/components/PortableTextComponents";

export const dynamic = "force-dynamic";
export const revalidate = 60;
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await client.fetch(blogQuery, {
    slug: params.slug,
  });

  if (!blog) {
    return {
      title: "Blog Not Found | TAYB Perfumes",
      description: "This blog could not be found.",
    };
  }
  console.log("BLOG DATA:", blog);

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,

    alternates: {
      canonical: `/blogs/${params.slug}`,
    },

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.image ? [blog.image] : [],
      type: "article",
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const blog = await client.fetch(blogQuery, {
    slug: params.slug,
  });

  if (!blog) {
    notFound();
  }
  console.log(blog);
  return (
    <main className="pt-[80px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-6 text-sm text-white/60">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link href="/blogs" className="hover:text-gold transition-colors">
            Blog
          </Link>

          <span className="mx-2">/</span>

          <span className="text-white">{blog.title}</span>
        </div>
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={700}
            className="rounded-xl mb-10"
          />
        )}

        <p className="text-gold uppercase tracking-widest text-xs">
          {blog.category}
        </p>

        <h1 className="text-5xl font-display mt-3 mb-4">{blog.title}</h1>

        <div className="text-white/60 mb-10">
          {blog.author} •{" "}
          {blog.publishedAt
            ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Draft"}
        </div>

        <article className="prose prose-invert max-w-none">
          <PortableText value={blog.body} components={portableTextComponents} />
        </article>
      </div>
    </main>
  );
}

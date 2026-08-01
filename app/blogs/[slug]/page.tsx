import { client } from "@/lib/sanity";
import { blogQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { readNextBlogsQuery } from "@/lib/queries";

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
  const relatedProducts = products
    .filter((product) => product.category === blog.productCategory)
    .slice(0, 3);
  const readNextBlogs = await client.fetch(readNextBlogsQuery, {
    productCategory: blog.productCategory,
    slug: params.slug,
  });
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
          {blog.author?.name} •{" "}
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
        <section className="mt-20 border-t border-gold/10 pt-16 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
            Discover More
          </p>

          <h2 className="font-display text-4xl mb-5">
            Find Your Signature Fragrance
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Explore premium long-lasting perfumes crafted for men, women and
            exclusive gift bundles.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/men"
              className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition"
            >
              Shop Men
            </Link>

            <Link
              href="/women"
              className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition"
            >
              Shop Women
            </Link>

            <Link
              href="/bundles"
              className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition"
            >
              Shop Bundles
            </Link>
          </div>
        </section>
        {relatedProducts.length > 0 && (
          <section className="mt-20 border-t border-gold/10 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                  Recommended
                </p>

                <h2 className="font-display text-3xl text-cream">
                  Related Perfumes
                </h2>
              </div>

              <Link href="/all" className="text-sm text-gold hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
        {readNextBlogs.length > 0 && (
          <section className="mt-20 border-t border-gold/10 pt-16">
            <div className="mb-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                Continue Reading
              </p>

              <h2 className="font-display text-3xl text-cream">Read Next</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {readNextBlogs.map((item: any) => (
                <Link
                  key={item._id}
                  href={`/blogs/${item.slug.current}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-display text-cream group-hover:text-gold transition mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-cream/60 line-clamp-3">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section className="mt-20 border-t border-gold/10 pt-16">
  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
    Shop Collections
  </p>

  <h2 className="font-display text-3xl mb-8">
    Explore Our Collections
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <Link
      href="/men"
      className="border border-gold/20 p-8 hover:border-gold transition rounded-lg"
    >
      <h3 className="font-display text-2xl mb-3">
        Men's Perfumes
      </h3>

      <p className="text-white/60">
        Discover bold fragrances crafted for modern gentlemen.
      </p>
    </Link>

    <Link
      href="/women"
      className="border border-gold/20 p-8 hover:border-gold transition rounded-lg"
    >
      <h3 className="font-display text-2xl mb-3">
        Women's Perfumes
      </h3>

      <p className="text-white/60">
        Elegant luxury perfumes designed for every occasion.
      </p>
    </Link>

    <Link
      href="/bundles"
      className="border border-gold/20 p-8 hover:border-gold transition rounded-lg"
    >
      <h3 className="font-display text-2xl mb-3">
        Perfume Bundles
      </h3>

      <p className="text-white/60">
        Save more with premium fragrance bundles.
      </p>
    </Link>

  </div>
</section>
      </div>
    </main>
  );
}

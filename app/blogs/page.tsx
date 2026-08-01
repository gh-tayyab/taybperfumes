import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/lib/sanity";
import { blogsQuery } from "@/lib/queries";

import { products, Product } from "@/lib/data";

import ProductCard from "@/components/ProductCard";

export default async function BlogsPage() {
  const blogs = await client.fetch(blogsQuery);
  const featuredProducts = products.slice(0, 4);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",

    name: "TAYB Perfumes Blog",

    url: "https://taybperfumes.com/blogs",

    blogPost: blogs.map((blog: any) => ({
      "@type": "BlogPosting",

      headline: blog.title,

      url: `https://taybperfumes.com/blogs/${blog.slug.current}`,

      image: blog.image,

      datePublished: blog.publishedAt,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://taybperfumes.com",
      },
      {
        "@type": "ListItem",

        position: 2,

        name: "Blog",

        item: "https://taybperfumes.com/blogs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="pt-[52px] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="font-display text-5xl mb-10">Perfume Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug.current}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h2 className="mt-5 text-2xl font-display group-hover:text-gold transition">
                  {blog.title}
                </h2>

                <p className="mt-3 text-white/60">{blog.excerpt}</p>

                {/* 👇 Author yahin hoga */}
                <div className="flex items-center gap-3 mt-5">
                  <Image
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  <div>
                    <p className="text-sm text-white">{blog.author.name}</p>

                    <p className="text-xs text-white/50">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Featured Products */}

          <section className="mt-24">
            <h2 className="font-display text-4xl mb-10">Shop Best Sellers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Categories */}

          <section className="mt-24">
            <h2 className="font-display text-4xl mb-10">Explore Collections</h2>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/men"
                className="border border-gold px-6 py-3 hover:bg-gold hover:text-black transition"
              >
                Men's Perfumes
              </Link>

              <Link
                href="/women"
                className="border border-gold px-6 py-3 hover:bg-gold hover:text-black transition"
              >
                Women's Perfumes
              </Link>

              <Link
                href="/bundles"
                className="border border-gold px-6 py-3 hover:bg-gold hover:text-black transition"
              >
                Perfume Bundles
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

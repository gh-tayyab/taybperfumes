import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { categoryBlogsQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women’s Luxury Fragrances | TAYB Pakistan",
  description:
    "Explore TAYB women’s luxury perfumes in Pakistan. Long-lasting feminine fragrances crafted for elegance, confidence, and timeless beauty.",
  keywords: [
    "women perfumes Pakistan",
    "luxury perfume for women",
    "TAYB women fragrance",
    "long lasting women perfume",
    "best feminine perfumes Pakistan",
  ],
  openGraph: {
    title: "Women’s Perfumes | TAYB Perfumes",
    description:
      "Discover elegant, long-lasting luxury fragrances for women by TAYB Perfumes.",
    url: "https://taybperfumes.com/women",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Men's Luxury Perfumes",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  alternates: {
    canonical: "https://taybperfumes.com/women",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const womenProducts = products.filter((p) => p.category === "women");

export default async function WomenPage() {
  const blogs = await client.fetch(categoryBlogsQuery, {
    category: "women",
  });
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Women's Luxury Perfumes",

    url: "https://taybperfumes.com/women",

    mainEntity: {
      "@type": "ItemList",

      itemListElement: womenProducts.map((product, index) => ({
        "@type": "ListItem",

        position: index + 1,

        url: `https://taybperfumes.com/product/${product.slug}`,

        name: product.name,
      })),
    },
  };
  return (
    <div className="pt-[52px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/womenhero.png"
          alt="Women's Fragrances"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            For Her
          </p> */}

          <h1 className="font-display text-5xl md:text-7xl italic text-cream leading-tight">
            Women's Luxury
            <span className="block text-gold">Perfumes</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm md:text-lg leading-8 text-cream/60">
            Explore premium luxury perfumes for women in Pakistan inspired by
            world-famous fragrances. Discover elegant, long-lasting scents
            crafted with premium ingredients for everyday wear, weddings, formal
            occasions and unforgettable moments.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-cream/30 text-sm tracking-wider mb-10">
          {womenProducts.length} products
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* CTA */}

<section className="mt-20 border-t border-gold/10 pt-16 text-center">

<p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
  Need Help Choosing?
</p>

<h2 className="font-display text-4xl text-cream mb-5">
  Discover Your Ideal Fragrance
</h2>

<p className="max-w-2xl mx-auto text-cream/60 leading-8 mb-8">
  Explore fragrance families, floral notes, fruity scents and expert
  perfume tips to find a perfume that matches your personality.
</p>

<Link
  href="/blogs"
  className="inline-flex items-center gap-2 border border-gold px-8 py-4
  text-sm tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal
  transition"
>
  Read Perfume Guides →
</Link>

</section>
        {blogs.length > 0 && (
          <section className="mt-24">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Learn More
            </p>

            <h2 className="font-display text-4xl mb-10">Latest Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <Link
                  key={blog._id}
                  href={`/blogs/${blog.slug.current}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="text-xl font-display group-hover:text-gold transition">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-white/60 mt-2">{blog.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}

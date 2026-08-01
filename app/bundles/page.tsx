import type { Metadata } from "next";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { categoryBlogsQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Perfume Bundles Pakistan | TAYB Perfumes",
  description:
    "Shop TAYB Perfumes luxury fragrance bundles in Pakistan. Save 10% on premium long-lasting perfume bundles for men and women.",
  keywords: [
    "perfume bundles pakistan",
    "luxury perfume bundle",
    "tayb perfumes",
    "fragrance gift set pakistan",
    "men perfume bundle",
    "women perfume bundle",
    "best perfume deals pakistan",
  ],
  openGraph: {
    title: "Luxury Perfume Bundles Pakistan | TAYB Perfumes",
    description:
      "Discover TAYB signature perfume bundles. Premium long-lasting fragrances with exclusive savings across Pakistan.",
    url: "https://taybperfumes.com/bundles",
    siteName: "TAYB Perfumes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfume Bundles",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Perfume Bundles Pakistan | TAYB Perfumes",
    description:
      "Shop premium TAYB fragrance bundles and save 10% on long-lasting luxury perfumes.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://taybperfumes.com/bundles",
  },
};

const bundleProducts = products.filter((p) => p.category === "bundle");

export default async function BundlesPage() {
  const blogs = await client.fetch(categoryBlogsQuery, {
    category: "bundle",
  });
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: "Luxury Perfume Bundles",

    url: "https://taybperfumes.com/bundles",

    mainEntity: {
      "@type": "ItemList",

      itemListElement: bundleProducts.map((product, index) => ({
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
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/bundlehero.png"
          alt="Luxury perfume bundles by TAYB Perfumes in Pakistan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Save More
          </p> */}
          <h1 className="font-display text-5xl md:text-7xl italic leading-tight max-w-5xl">
            Luxury Perfume
            <span className="block text-gold">Bundles in Pakistan</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-lg leading-8 text-cream/60">
            Explore premium luxury perfume bundles in Pakistan featuring our
            signature fragrances for men and women. Enjoy exceptional value,
            long-lasting scents and exclusive bundle savings for gifting or your
            personal collection.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* CTA */}

<section className="mt-20 border-t border-gold/10 pt-16 text-center">

<p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
  Want To Learn More?
</p>

<h2 className="font-display text-4xl text-cream mb-5">
  Get More From Every Fragrance
</h2>

<p className="max-w-2xl mx-auto text-cream/60 leading-8 mb-8">
  Discover fragrance layering, perfume care tips and expert advice to
  make the most of your perfume bundle.
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

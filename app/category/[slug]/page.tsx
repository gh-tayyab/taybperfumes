import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/lib/data";
import { categoryPages } from "@/lib/category-config";

import ProductCard from "@/components/ProductCard";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const category = categoryPages.find(
    (c) => c.slug === params.slug,
  );

  if (!category) {
    return {};
  }

  const url = `https://taybperfumes.com/category/${category.slug}`;

  return {
    title: category.title,

    description: category.description,

    keywords: category.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: category.title,
      description: category.description,
      url,
      siteName: "TAYB Perfumes",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default function CategoryPage({
  params,
}: Props) {
  const category = categoryPages.find(
    (c) => c.slug === params.slug,
  );

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    category.filter,
  );

  return (
    <main className="pt-[110px] pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
            TAYB PERFUMES
          </p>

          <h1 className="font-display text-5xl md:text-6xl text-cream mb-5">
            {category.h1}
          </h1>

          <p className="max-w-3xl mx-auto text-cream/60 leading-8">
            {category.description}
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </main>
  );
}
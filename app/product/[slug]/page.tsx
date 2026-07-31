import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/lib/data";
import { client } from "@/lib/sanity";
import { productReviewsQuery } from "@/lib/queries";
import ProductClient from "@/components/ProductClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {};
  }

  const url = `https://taybperfumes.com/product/${product.slug}`;

  return {
    title: `${product.name} | TAYB Perfumes Pakistan`,

    description: `${product.description} Shop ${product.name} by TAYB Perfumes with fast delivery across Pakistan.`,

    keywords: [
      product.name,
      `${product.name} Pakistan`,
      "Luxury Perfumes Pakistan",
      "Long Lasting Perfume",
      product.category,
      "TAYB Perfumes",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: product.name,

      description: product.description,

      url,

      type: "website",

      siteName: "TAYB Perfumes",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: product.name,

      description: product.description,

      images: [product.image],
    },
  };
}
export default async function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }
  const reviews = await client.fetch(
    productReviewsQuery,
    {
      slug: product.slug,
    },
    {
      next: {
        tags: ["reviews"],
      },
    },
  );

  const reviewCount = reviews.length;

  const averageRating =
    reviewCount > 0
      ? (
          reviews.reduce(
            (sum: number, r: { rating: number }) => sum + r.rating,
            0,
          ) / reviewCount
        ).toFixed(1)
      : "5";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    image: [`https://taybperfumes.com${product.image}`],

    description: product.description,

    sku: product.sku,

    brand: {
      "@type": "Brand",
      name: product.brand,
    },

    category: product.category,

    offers: {
      "@type": "Offer",

      url: `https://taybperfumes.com/product/${product.slug}`,

      priceCurrency: "PKR",

      price: product.price,

      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",

      itemCondition: "https://schema.org/NewCondition",
    },

    aggregateRating: {
      "@type": "AggregateRating",

      ratingValue: averageRating,

      reviewCount: reviewCount,
    },
  };

  const breadcrumbLd = {
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

        name:
          product.category.charAt(0).toUpperCase() + product.category.slice(1),

        item: `https://taybperfumes.com/${product.category}`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: product.name,

        item: `https://taybperfumes.com/product/${product.slug}`,
      },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: `How long does ${product.name} last?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${product.name} typically lasts between 8 and 12 hours depending on skin type and environment.`,
        },
      },
      {
        "@type": "Question",
        name: "Is Cash on Delivery available?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cash on Delivery is available throughout Pakistan.",
        },
      },
      {
        "@type": "Question",
        name: "How long does delivery take?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Orders are generally delivered within 2–4 working days.",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd),
        }}
      />

      <ProductClient product={product} reviews={reviews} />
    </>
  );
}

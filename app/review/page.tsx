import ReviewForm from "./ReviewForm";
import ReviewsSection from "@/components/ReviewsSection";
import { client } from "@/lib/sanity";
import { reviewsQuery } from "@/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | TAYB Perfumes Pakistan",

  description:
    "Read genuine customer reviews of TAYB Perfumes. Discover why customers across Pakistan love our premium long-lasting fragrances for men and women.",

  keywords: [
    "TAYB Perfumes reviews",
    "perfume reviews Pakistan",
    "customer reviews",
    "luxury perfumes Pakistan",
    "long lasting perfumes",
    "fragrance reviews",
    "men perfume reviews",
    "women perfume reviews",
    "TAYB customer testimonials",
    "best perfumes Pakistan",
  ],

  openGraph: {
    title: "Customer Reviews | TAYB Perfumes",

    description:
      "See what customers across Pakistan are saying about TAYB Perfumes. Read authentic reviews and discover our long-lasting luxury fragrances.",

    url: "https://taybperfumes.com/reviews",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Customer Reviews",
      },
    ],

    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Customer Reviews | TAYB Perfumes",

    description:
      "Read authentic customer reviews and discover why TAYB Perfumes is trusted for premium long-lasting fragrances in Pakistan.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/reviews",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default async function ReviewPage() {
  const reviews = await client.fetch(reviewsQuery);

  return (
    <main className="pt-[70px] pb-20">

      <ReviewForm />

      <div className="mt-24">
        <ReviewsSection reviews={reviews} carousel={false} showViewAll={false} />
      </div>

    </main>
  );
}
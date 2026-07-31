import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import ReviewsCarousel from "./ReviewsCarousel";
import { products } from "@/lib/data";

type Review = {
  _id: string;
  name: string;
  city: string;
  productSlug: string;
  rating: number;
  review: string;
  verifiedPurchase?: boolean;
  longevity?: string;
  image?: string;
};

export default function ReviewsSection({
  reviews,
  carousel = true,
  showViewAll = true,
}: {
  reviews: Review[];
  carousel?: boolean;
  showViewAll?: boolean;
}) {
  if (!reviews.length) return null;

  const cards = reviews.map((review) => {
    const matchedProduct = products.find(
      (p) => p.slug === review.productSlug
    );

    const productName = matchedProduct?.name ?? "TAYB Perfume";
    const defaultImage = matchedProduct?.image ?? "/placeholder.jpg";

    return (
      <div
        key={review._id}
        className={
          carousel
            ? "min-w-[340px] max-w-[340px] flex-shrink-0"
            : "w-full"
        }
      >
        <div className="h-[640px] flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">

          {/* Product Image */}

          <div className="relative h-[270px] bg-[#171717]">
            <Image
              src={review.image || defaultImage}
              alt={productName}
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div className="flex flex-1 flex-col p-6">

            <div>
              <h3 className="text-xl font-semibold text-white">
                {review.name}
              </h3>

              <p className="text-sm text-white/50">
                {review.city}
              </p>
            </div>

            {/* Rating */}

            <div className="mt-5 flex items-center justify-between">

              <div className="flex gap-1">
                {Array.from({
                  length: review.rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {review.verifiedPurchase && (
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  ✓ Verified Purchase
                </span>
              )}

            </div>

            {/* Review */}

            <div className="mt-6 flex-1">
              <p className="line-clamp-6 italic leading-7 text-white/75">
                "{review.review}"
              </p>
            </div>

            {/* Footer */}

            <div className="mt-6 border-t border-white/10 pt-5">

              <p className="font-semibold text-gold">
                {productName}
              </p>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-sm text-white/50">
                  Lasting
                </span>

                <span className="text-sm font-medium text-gold">
                  {review.longevity || "-"}
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">
            Testimonials
          </p>

          <h2 className="font-display text-4xl text-cream md:text-5xl">
            Happy Customers
          </h2>
        </div>

        {/* Reviews */}

        {carousel ? (
          <ReviewsCarousel>
            {cards.slice(0, 10)}
          </ReviewsCarousel>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cards}
          </div>
        )}

        {/* View All Button */}

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href="/review"
              className="inline-flex items-center rounded-full border border-gold px-8 py-3 text-gold transition hover:bg-gold hover:text-black"
            >
              View All Reviews
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
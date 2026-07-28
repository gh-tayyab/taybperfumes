import { reviews as allReviews } from "@/lib/data";
import { Star } from "lucide-react";

type Review = (typeof allReviews)[number];

type ReviewsSectionProps = {
  reviews: Review[];
};

export default function ReviewsSection({
  reviews,
}: ReviewsSectionProps) {
  return (
    // ...
  
<section className="py-20 bg-[#0f0f0f]">
<div className="max-w-7xl mx-auto px-6">
  <div className="text-center mb-14">
    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
      Testimonials
    </p>
    <h2 className="font-display text-4xl md:text-5xl text-cream">
      Happy Customers
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {reviews.slice(0, 3).map((review) => (
      <div
        key={review.id}
        className="border border-gold/10 p-6 hover:border-gold/30 transition-colors duration-300 bg-charcoal"
      >
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-gold text-gold" />
          ))}
        </div>
        <p className="font-display italic text-lg text-cream/80 leading-relaxed mb-4">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex justify-between items-center text-xs text-cream/30 tracking-wider uppercase">
          <span>{review.name}</span>
          <span>{review.location}</span>
        </div>
        <p className="text-gold/50 text-xs mt-1 tracking-wider">
          {review.product}
        </p>
      </div>
    ))}
  </div>
</div>
</section>
 );
}
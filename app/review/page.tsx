import ReviewForm from "./ReviewForm";
import ReviewsSection from "@/components/ReviewsSection";
import { client } from "@/lib/sanity";
import { reviewsQuery } from "@/lib/queries";

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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchanges | TAYB Perfumes Pakistan",
  description:
    "Read TAYB Perfumes return, refund, and exchange policy. Learn about eligibility, refunds, exchanges, and how to return your fragrance order in Pakistan.",
  keywords: [
    "TAYB returns policy",
    "TAYB exchange policy",
    "perfume returns Pakistan",
    "luxury fragrance refund policy",
    "TAYB perfumes refund",
  ],
  openGraph: {
    title: "Returns & Exchanges | TAYB Perfumes",
    description:
      "View TAYB Perfumes return and exchange policy for secure fragrance shopping in Pakistan.",
    url: "https://taybperfumes.com/returns",
    siteName: "TAYB Perfumes",
    locale: "en_PK",
    type: "website",
  },
  alternates: {
    canonical: "https://taybperfumes.com/returns",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReturnsPage() {
  return (
    <div className="pt-[52px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
          Policies
        </p>

        <h1 className="font-display text-5xl text-cream italic mb-12">
          Returns & Exchanges
        </h1>

        <div className="border border-gold/20 p-6 mb-10 bg-gold/5">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            Our Commitment
          </p>

          <p className="text-cream/70 text-sm">
            Your satisfaction is our priority. If you&apos;re not happy with your
            TAYB purchase, we&apos;ll make it right.
          </p>
        </div>

        <div className="space-y-8 text-cream/50 text-sm leading-relaxed">
          {[
            {
              title: "Return Eligibility",
              body: "Items may be returned within 7 days of delivery if they are unopened, unused, and in original packaging. Opened or used fragrances cannot be returned unless there is a manufacturing defect.",
            },
            {
              title: "Exchanges",
              body: "If you received the wrong item or a damaged product, we will exchange it at no additional cost. Please contact us within 48 hours of receiving your order with photos of the issue.",
            },
            {
              title: "Refund Process",
              body: "Approved refunds are processed within 5–7 business days via bank transfer or Easypaisa/JazzCash. Cash on Delivery refunds will be issued via bank transfer only.",
            },
            {
              title: "How to Initiate a Return",
              body: "Contact our team via WhatsApp or email with your order number and reason for return. We'll guide you through the process and arrange pickup where possible.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="border-b border-gold/10 pb-8"
            >
              <h2 className="font-display text-2xl text-cream mb-3">
                {section.title}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
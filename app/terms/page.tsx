import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | TAYB Perfumes Pakistan",
  description:
    "Read TAYB Perfumes terms and conditions for online fragrance purchases in Pakistan, including pricing, orders, payments, intellectual property, and liability policies.",
  keywords: [
    "TAYB terms and conditions",
    "perfume store terms Pakistan",
    "TAYB legal policy",
    "luxury fragrance website terms",
    "online perfume purchase policy",
  ],
  openGraph: {
    title: "Terms & Conditions | TAYB Perfumes",
    description:
      "Review TAYB Perfumes website terms and conditions for secure fragrance shopping in Pakistan.",
    url: "https://taybperfumes.com/terms",
    siteName: "TAYB Perfumes",
    locale: "en_PK",
    type: "website",
  },
  alternates: {
    canonical: "https://taybperfumes.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-[52px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
          Legal
        </p>

        <h1 className="font-display text-5xl text-cream italic mb-12">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-cream/50 text-sm leading-relaxed">
          {[
            {
              title: "Acceptance of Terms",
              body: "By accessing and using the TAYB Perfumes website, you accept these Terms and Conditions in full. If you disagree with any part, please do not use our website.",
            },
            {
              title: "Products & Pricing",
              body: "All prices are listed in Pakistani Rupees (PKR) and include applicable taxes. We reserve the right to modify prices at any time. Product images are for illustrative purposes only.",
            },
            {
              title: "Orders & Payment",
              body: "Orders are confirmed subject to stock availability. Cash on Delivery is available across Pakistan. We reserve the right to cancel orders at our discretion in case of pricing errors or suspected fraud.",
            },
            {
              title: "Intellectual Property",
              body: "All content on this website, including logos, images, and text, is the property of TAYB Perfumes and is protected by Pakistani and international copyright laws.",
            },
            {
              title: "Limitation of Liability",
              body: "TAYB Perfumes shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the product purchase value.",
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
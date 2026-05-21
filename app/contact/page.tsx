import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | TAYB Perfumes Pakistan",
  description:
    "Contact TAYB Perfumes for customer support, perfume inquiries, orders, collaborations, and fragrance assistance across Pakistan.",
  keywords: [
    "Contact TAYB Perfumes",
    "Perfume support Pakistan",
    "Luxury fragrance contact",
    "TAYB customer care",
    "Perfume order help Pakistan",
  ],
  openGraph: {
    title: "Contact TAYB Perfumes Pakistan",
    description:
      "Get in touch with TAYB Perfumes for support, fragrance guidance, and order assistance.",
    url: "https://taybperfumes.com/contact",
    siteName: "TAYB Perfumes",
    locale: "en_PK",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
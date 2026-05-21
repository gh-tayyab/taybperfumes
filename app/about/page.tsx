import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About TAYB Perfumes | Luxury Fragrances in Pakistan",
  description:
    "Discover the story behind TAYB Perfumes — Pakistan’s premium luxury fragrance brand crafting long-lasting signature scents with world-class quality.",
  keywords: [
    "about TAYB perfumes",
    "luxury perfumes Pakistan",
    "premium fragrances Pakistan",
    "long lasting perfumes",
    "Pakistani perfume brand",
    "signature scents",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TAYB Perfumes",
    description:
      "Learn about TAYB Perfumes and our mission to craft luxury fragrances in Pakistan.",
    url: "/about",
    siteName: "TAYB Perfumes",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
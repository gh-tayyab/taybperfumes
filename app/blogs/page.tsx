import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "TAYB Perfumes Blog | Fragrance Tips & Stories",
  description:
    "Explore TAYB Perfumes blog for fragrance tips, perfume education, scent guides, and behind-the-scenes stories from Pakistan’s luxury perfume brand.",
  keywords: [
    "perfume blog Pakistan",
    "fragrance tips",
    "long lasting perfume guide",
    "luxury perfume education",
    "TAYB blog",
    "perfume notes guide",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "TAYB Perfumes Blog",
    description:
      "Fragrance insights, perfume tips, scent education and stories from TAYB Perfumes.",
    url: "/blogs",
    siteName: "TAYB Perfumes",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
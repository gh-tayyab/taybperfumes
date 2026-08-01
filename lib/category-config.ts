import { Product } from "@/lib/data";

export interface CategoryConfig {
  slug: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  filter: (product: Product) => boolean;
}

export const categoryPages: CategoryConfig[] = [
  {
    slug: "long-lasting-perfumes",

    h1: "Long Lasting Perfumes",

    title: "Long Lasting Perfumes in Pakistan | TAYB Perfumes",

    description:
      "Discover premium long lasting perfumes in Pakistan. Shop luxury fragrances for men and women with exceptional longevity and nationwide delivery.",

    keywords: [
      "Long Lasting Perfumes Pakistan",
      "Best Long Lasting Perfume",
      "Luxury Perfumes Pakistan",
      "TAYB Perfumes",
    ],

    filter: (product) => product.longevity >= 8,
  },

  {
    slug: "luxury-perfumes",

    h1: "Luxury Perfumes",

    title: "Luxury Perfumes Pakistan | TAYB Perfumes",

    description:
      "Explore luxury perfumes for men and women by TAYB Perfumes. Premium fragrances inspired by world-famous scents.",

    keywords: [
      "Luxury Perfumes Pakistan",
      "Premium Perfumes",
      "Designer Inspired Perfumes",
    ],

    filter: (product) => product.quality === "Luxury",
  },

  {
    slug: "best-selling-perfumes",

    h1: "Best Selling Perfumes",

    title: "Best Selling Perfumes | TAYB Perfumes",

    description:
      "Shop our most loved perfumes chosen by customers across Pakistan.",

    keywords: [
      "Best Selling Perfumes",
      "Popular Perfumes Pakistan",
    ],

    filter: (product) => product.bestSeller,
  },
];
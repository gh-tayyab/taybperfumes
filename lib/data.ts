// lib/data.ts

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  size: string;
  category: "men" | "women" | "bundle";
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  description: string;
  longDescription: string;
  image: string;
  hoverImage: string;
  badge?: string;
  discount?: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Laceda 50ml",
    slug: "laceda-50ml",
    price: 4999,
    size: "50ml",
    category: "men",
    notes: {
      top: ["Bergamot", "Black Pepper", "Pink Grapefruit"],
      heart: ["Cedarwood", "Vetiver", "Patchouli"],
      base: ["Amber", "Musk", "Sandalwood"],
    },
    description: "A bold, enduring woody amber for the modern man.",
    longDescription:
      "Laceda is a statement of confidence — a deep, resonant woody amber that opens with the fresh brightness of bergamot and settles into a rich, lasting base of sandalwood and amber. Crafted for those who leave an impression long after they've left the room.",
    image:
      "/perfume.png",
    hoverImage:
      "/botel.jpg",
    badge: "New",
    inStock: true,
  },
  {
    id: "2",
    name: "Angelica 50ml",
    slug: "angelica-50ml",
    price: 4999,
    size: "50ml",
    category: "women",
    notes: {
      top: ["Jasmine", "Rose", "Peach"],
      heart: ["Lily", "Iris", "Violet"],
      base: ["White Musk", "Sandalwood", "Vanilla"],
    },
    description: "Delicate florals kissed by soft musk — endlessly feminine.",
    longDescription:
      "Angelica captures the essence of bloom — a graceful interplay of white florals and warm musk. Jasmine and rose unfurl at the top, while lily and iris bloom at the heart. A whisper of vanilla and white musk grounds this ethereal fragrance in something deeply sensual.",
    image:
      "/womenperfume.png",
    hoverImage:
      "/botel.jpg",
    badge: "New",
    inStock: true,
  },
  {
    id: "3",
    name: "Laceda 10ml",
    slug: "laceda-10ml",
    price: 999,
    size: "10ml",
    category: "men",
    notes: {
      top: ["Bergamot", "Black Pepper", "Pink Grapefruit"],
      heart: ["Cedarwood", "Vetiver", "Patchouli"],
      base: ["Amber", "Musk", "Sandalwood"],
    },
    description: "The signature Laceda in a pocket-sized travel spray.",
    longDescription:
      "All the presence of Laceda in a convenient 10ml travel size. Perfect for those who want to carry their signature scent wherever the day takes them.",
    image:
      "/perfume.png",
    hoverImage:
      "/botel.jpg",
    inStock: true,
  },
  {
    id: "4",
    name: "Laceda 100ml",
    slug: "laceda-100ml",
    price: 7999,
    size: "100ml",
    category: "men",
    notes: {
      top: ["Bergamot", "Black Pepper", "Pink Grapefruit"],
      heart: ["Cedarwood", "Vetiver", "Patchouli"],
      base: ["Amber", "Musk", "Sandalwood"],
    },
    description: "The full expression of Laceda for daily indulgence.",
    longDescription:
      "For those who've made Laceda their signature — the 100ml bottle ensures you'll never run out of the scent that defines you.",
    image:
      "/perfume.png",
    hoverImage:
      "/botel.jpg",
    inStock: true,
  },
  {
    id: "5",
    name: "Angelica 10ml",
    slug: "angelica-10ml",
    price: 999,
    size: "10ml",
    category: "women",
    notes: {
      top: ["Jasmine", "Rose", "Peach"],
      heart: ["Lily", "Iris", "Violet"],
      base: ["White Musk", "Sandalwood", "Vanilla"],
    },
    description: "Angelica in a sleek travel-ready format.",
    longDescription:
      "Carry the delicate magic of Angelica in your pocket. The 10ml travel size is perfect for touch-ups and on-the-go elegance.",
    image:
      "/womenperfume.png",
    hoverImage:
      "/botel.jpg",
    inStock: true,
  },
  {
    id: "6",
    name: "Angelica 100ml",
    slug: "angelica-100ml",
    price: 7999,
    size: "100ml",
    category: "women",
    notes: {
      top: ["Jasmine", "Rose", "Peach"],
      heart: ["Lily", "Iris", "Violet"],
      base: ["White Musk", "Sandalwood", "Vanilla"],
    },
    description: "Angelica's full bloom — the ultimate expression.",
    longDescription:
      "Angelica in its full splendour. The 100ml bottle is for those who've found their signature and want to wear it every single day.",
    image:
      "/womenperfume.png",
    hoverImage:
      "/botel.jpg",
    inStock: true,
  },
  {
    id: "7",
    name: "Bundle – Angelica & Laceda 50ml",
    slug: "bundle-angelica-laceda-50ml",
    price: 8999,
    originalPrice: 9998,
    discount: 10,
    size: "2 × 50ml",
    category: "bundle",
    notes: {
      top: ["Bergamot", "Jasmine", "Rose"],
      heart: ["Cedarwood", "Lily", "Iris"],
      base: ["Amber", "White Musk", "Sandalwood"],
    },
    description: "Both signatures together — one for every mood.",
    longDescription:
      "The ultimate TAYB duo. Laceda's commanding woods paired with Angelica's ethereal florals. A complete fragrance wardrobe in one elegant box. Save 10% when you choose both.",
    image:
      "/bundles.png",
    hoverImage:
      "/botel.jpg",
    badge: "Save 10%",
    inStock: true,
  },
  {
    id: "8",
    name: "Bundle – Angelica & Laceda 10ml",
    slug: "bundle-angelica-laceda-10ml",
    price: 1799,
    originalPrice: 1998,
    discount: 10,
    size: "2 × 10ml",
    category: "bundle",
    notes: {
      top: ["Bergamot", "Jasmine", "Rose"],
      heart: ["Cedarwood", "Lily", "Iris"],
      base: ["Amber", "White Musk", "Sandalwood"],
    },
    description: "Try both — the perfect starter bundle.",
    longDescription:
      "New to TAYB? Start with both. The 10ml bundle lets you explore our two signature scents and discover which one (or both) belong in your daily ritual.",
    image:
      "/bundleperfume.png",
    hoverImage:
      "/botel.jpg",
    badge: "Save 10%",
    inStock: true,
  },
  {
    id: "9",
    name: "Bundle – Angelica & Laceda 50ml",
    slug: "bundle-angelica-laceda-50ml",
    price: 8999,
    size: "Full Collection",
    category: "bundle",
    notes: {
      top: ["Bergamot", "Jasmine", "Peach"],
      heart: ["Cedarwood", "Lily", "Iris"],
      base: ["Amber", "White Musk", "Sandalwood"],
    },
    description: "The complete TAYB experience — a gift they'll never forget.",
    longDescription:
      "Our luxury gift set brings together Angelica 50ml, Laceda 50ml, and two travel-size 10ml companions in a beautifully crafted gift box. The ultimate expression of thoughtful gifting.",
    image:
      "https://images.unsplash.com/photo-1549488344-cbb6c34f3b97?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&q=80",
    badge: "Best Gift",
    inStock: true,
  },
];

export const formatPrice = (price: number) =>
  `Rs.${price.toLocaleString("en-PK")}.00`;

export const reviews = [
  {
    id: 1,
    name: "Fatima K.",
    rating: 5,
    text: "Angelica is absolutely divine. I've received so many compliments — people always ask what I'm wearing. The longevity is unreal for this price point.",
    product: "Angelica 50ml",
    location: "Karachi",
  },
  {
    id: 2,
    name: "Ahmed R.",
    rating: 5,
    text: "Laceda hits different. I've tried foreign brands costing 5x more and Laceda keeps up easily. This is genuinely world-class.",
    product: "Laceda 100ml",
    location: "Lahore",
  },
  {
    id: 3,
    name: "Sara M.",
    rating: 5,
    text: "Bought the bundle as a gift for my husband and he absolutely loves it. The packaging is so elegant and the scents last all day.",
    product: "Bundle – 50ml",
    location: "Islamabad",
  },
  {
    id: 4,
    name: "Bilal T.",
    rating: 5,
    text: "Been wearing Laceda for 3 months now. It's become my signature. Even at 8 hours in, people can still smell it. Incredible sillage.",
    product: "Laceda 50ml",
    location: "Karachi",
  },
  {
    id: 5,
    name: "Nadia H.",
    rating: 5,
    text: "The 10ml is perfect for travel. Same quality, same longevity. I take it everywhere. TAYB has truly changed the Pakistani fragrance game.",
    product: "Angelica 10ml",
    location: "Multan",
  },
];

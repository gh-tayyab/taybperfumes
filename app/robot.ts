import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/checkout",
          "/order-success",
        ],
      },
    ],

    sitemap: "https://taybperfumes.com/sitemap.xml",

    host: "https://taybperfumes.com",
  };
}
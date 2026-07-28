import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await client.fetch(`
    *[_type=="blog"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const blogUrls = blogs.map((blog: any) => ({
    url: `https://taybperfumes.com/blogs/${blog.slug}`,
    lastModified: blog._updatedAt,
  }));

  return [
    {
      url: "https://taybperfumes.com",
      lastModified: new Date(),
    },
    {
      url: "https://taybperfumes.com/about",
    },
    {
      url: "https://taybperfumes.com/contact",
    },
    {
      url: "https://taybperfumes.com/men",
    },
    {
      url: "https://taybperfumes.com/women",
    },
    {
      url: "https://taybperfumes.com/bundles",
    },
    {
      url: "https://taybperfumes.com/blogs",
    },
    {
      url: "https://taybperfumes.com/faq",
    },
    {
      url: "https://taybperfumes.com/privacy",
    },
    {
      url: "https://taybperfumes.com/terms",
    },
    {
      url: "https://taybperfumes.com/shipping",
    },
    {
      url: "https://taybperfumes.com/returns",
    },
    {
      url: "https://taybperfumes.com/order-success",
    },
    {
      url: "https://taybperfumes.com/checkout",
    },

    ...blogUrls,
  ];
}
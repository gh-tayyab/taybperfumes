import { client } from "@/lib/sanity";
import { blogsQuery } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfume Blog | Fragrance Tips, Guides & Trends | TAYB Perfumes",

  description:
    "Explore the TAYB Perfumes Blog for fragrance guides, perfume tips, scent recommendations, layering techniques, and expert advice on choosing long-lasting luxury perfumes in Pakistan.",

  keywords: [
    "perfume blog",
    "fragrance blog Pakistan",
    "perfume guide",
    "luxury perfumes Pakistan",
    "long lasting perfumes",
    "how to choose perfume",
    "perfume tips",
    "fragrance layering",
    "best perfumes Pakistan",
    "TAYB Perfumes blog",
  ],

  openGraph: {
    title: "Perfume Blog | TAYB Perfumes",
    description:
      "Read fragrance guides, perfume tips, scent recommendations and expert advice from TAYB Perfumes. Learn how to choose the perfect luxury fragrance.",

    url: "https://taybperfumes.com/blog",

    siteName: "TAYB Perfumes",

    images: [
      {
        url: "/og-image.jpg",
        width: 1800,
        height: 1200,
        alt: "TAYB Perfumes Blog",
      },
    ],

    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Perfume Blog | TAYB Perfumes",

    description:
      "Fragrance guides, perfume tips and expert advice to help you discover your perfect signature scent.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://taybperfumes.com/blog",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 60;
export default async function BlogsPage() {
  const blogs = await client.fetch(blogsQuery);
  return (
    <main className="pt-[52px] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl mb-10">
          Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {blogs.map((blog: any) => (

            <Link
              key={blog._id}
              href={`/blogs/${blog.slug.current}`}
            >

              <Image
                src={blog.image}
                alt={blog.title}
                width={700}
                height={450}
                className="rounded-lg"
              />

              <h2 className="mt-4 text-2xl">
                {blog.title}
              </h2>

              <p>{blog.excerpt}</p>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}
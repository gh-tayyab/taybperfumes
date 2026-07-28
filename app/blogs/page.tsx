import { client } from "@/lib/sanity";
import { blogsQuery } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";




export const dynamic = "force-dynamic";
export const revalidate = 60;
export default async function BlogsPage() {
  const blogs = await client.fetch(blogsQuery);

  console.log("BLOGS:", blogs);

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
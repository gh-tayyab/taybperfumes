import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "how-to-make-perfume-last-longer",
    title: "How to Make Your Perfume Last All Day",
    excerpt: "Simple tips and tricks to maximize the longevity of your fragrance — from application to storage.",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80",
    category: "Tips",
  },
  {
    slug: "understanding-fragrance-notes",
    title: "Understanding Top, Heart & Base Notes",
    excerpt: "Decoding the structure of a fragrance: what you smell first, what defines it, and what lingers.",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    category: "Education",
  },
  {
    slug: "laceda-story",
    title: "The Story Behind Laceda",
    excerpt: "A deep dive into the inspiration, development, and character of TAYB's bold masculine fragrance.",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
    category: "Behind the Brand",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 border-b border-gold/10">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Journal</p>
        <h1 className="font-display text-5xl md:text-6xl text-cream italic">Blogs</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blogs/${post.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/20 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
                    {post.category}
                  </span>
                </div>

                <p className="text-cream/30 text-xs tracking-wider mb-2">{post.date}</p>
                <h2 className="font-display text-2xl text-cream group-hover:text-gold-light transition-colors duration-300 leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-cream/40 text-sm leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-2 mt-4 text-gold text-xs tracking-widest uppercase">
                  Read More <span>→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

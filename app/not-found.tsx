import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | TAYB Perfumes",
  description:
    "The page you are looking for does not exist. Explore luxury perfumes for men and women at TAYB Perfumes Pakistan.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      className="pt-[52px] min-h-screen flex items-center justify-center text-center px-6"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="404 Page Not Found" />
      <meta
        itemProp="description"
        content="TAYB Perfumes custom 404 page"
      />

      <div>
        <p
          className="font-display text-[12rem] leading-none text-gold/10 font-bold select-none"
          aria-hidden="true"
        >
          404
        </p>

        <h1
          className="font-display text-4xl text-cream italic -mt-8 mb-4"
          itemProp="headline"
        >
          Page Not Found
        </h1>

        <p
          className="text-cream/40 text-sm max-w-sm mx-auto mb-8"
          itemProp="description"
        >
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to discovering your signature scent.
        </p>

        <Link
          href="/"
          aria-label="Go back to TAYB Perfumes homepage"
          className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
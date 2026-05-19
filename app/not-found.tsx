import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-[100px] min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="font-display text-[12rem] leading-none text-gold/10 font-bold select-none">
          404
        </p>
        <h1 className="font-display text-4xl text-cream italic -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-cream/40 text-sm max-w-sm mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to discovering your signature scent.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

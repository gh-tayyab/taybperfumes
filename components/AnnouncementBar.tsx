"use client";

export default function AnnouncementBar() {
  const messages = [
    "✦ Your Signature Scent – Now in 50ml ✦",
    "✦ Free Delivery on Orders Above Rs.3,000 ✦",
    "✦ 100% Authentic Long-Lasting Fragrances ✦",
    "✦ Pakistan's Finest Luxury Perfumes ✦",
  ];

  const doubled = [...messages, ...messages];

  return (
    <div
      role="region"
      aria-label="Store announcements"
      className="bg-gold text-charcoal text-xs font-body font-medium tracking-widest uppercase py-2.5 overflow-hidden"
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        aria-live="polite"
      >
        {doubled.map((msg, i) => (
          <span
            key={i}
            className="mx-12 shrink-0"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeSplitSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mb-20">
        {[
          {
            label: "For Her",
            name: "Angelica",
            desc: "Delicate florals, soft musk, warm sandalwood. A scent that lingers like a beautiful memory.",
            href: "/women",
            img: "/womenperfume.png",
            cta: "Shop Women",
          },
          {
            label: "For Him",
            name: "Laceda",
            desc: "Bold cedarwood, rich amber, clean musk. A commanding presence in every room.",
            href: "/men",
            img: "/perfume.png",
            cta: "Shop Men",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="relative h-[70vh] overflow-hidden group"
          >
            <Image
              src={item.img}
              alt={item.name}
              fill
              loading="lazy"
              quality={70}
              sizes="(max-width:768px)100vw,50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                {item.label}
              </p>
              <h3 className="font-display text-5xl text-cream italic mb-3">
                {item.name}
              </h3>
              <p className="text-cream/50 text-sm mb-6 max-w-xs">{item.desc}</p>
              <Link
                href={item.href}
                className="self-start border border-cream/40 text-cream font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>
  )
}

export default HomeSplitSection
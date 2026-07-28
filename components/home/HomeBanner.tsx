import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
  return (
      <section className="relative h-[60vh] overflow-hidden rounded-lg mb-20">
        <Image
          src="/hero.png"
          alt="TAYB Bundles"
          fill
          loading="lazy"
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Limited Offer
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream mb-4 italic">
            Bundle & Save 10%
          </h2>
          <p className="text-cream/60 text-sm tracking-wider mb-8 max-w-md">
            Get both signature scents together and save on every order.
          </p>
          <Link
            href="/bundles"
            className="bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-xs px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Shop Bundles
          </Link>
        </div>
      </section> 
  )
}

export default HomeBanner

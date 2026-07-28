import Image from 'next/image'
import React from 'react'

const FounderSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/ourstory.png"
                alt="TAYB Founder"
                fill
                loading="lazy"
                quality={80}
                sizes="(max-width:768px)100vw,50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Founder&apos;s
              <em className="block text-gold">Vision</em>
            </h2>
            <p className="text-cream/50 text-sm mb-6 max-w-xs">
              Every fragrance at TAYB PERFUMES is a journey of elegance, crafted
              with passion and inspired by timeless luxury. Designed to leave a
              lasting impression, our perfumes celebrate confidence,
              sophistication, and individuality.
            </p>
          </div>
        </div>
      // </section> 
  )
}

export default FounderSection

"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqs";

const categories = [
  "All",
  "Orders",
  "Shipping",
  "Returns",
  "Payments",
  "Products",
  "Perfume Care",
];

export default function FAQClient() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<number | null>(0);
  const [category, setCategory] = useState("All");

  const filteredFaqs = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
  
    return faqs.filter((faq) => {
      const matchesSearch =
        searchTerm === "" ||
        faq.q.toLowerCase().includes(searchTerm) ||
        faq.a.toLowerCase().includes(searchTerm);
  
      const matchesCategory =
        category === "All" || faq.category === category;
  
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      {/* Search + Categories */}
      <section className="max-w-5xl mx-auto px-6 mb-14">
        <div className="mb-10">
          <label className="block text-gold uppercase tracking-[0.3em] text-xs mb-3">
            Search FAQs
          </label>

          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border border-gold/20 px-5 py-4 outline-none focus:border-gold transition text-white placeholder:text-white/30"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 uppercase tracking-widest text-xs border transition ${
                category === item
                  ? "bg-gold text-black border-gold"
                  : "border-gold/20 hover:border-gold text-white/60"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ List */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-5">
          {filteredFaqs.length === 0 && (
            <div className="text-center border border-gold/10 py-14">
              <p className="text-white/50">No FAQs found.</p>
            </div>
          )}

          {filteredFaqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border border-gold/15 bg-[#111] transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,.08)]"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  className="w-full flex items-center justify-between p-7 text-left"
                >
                  <h2
                    itemProp="name"
                    className="font-display text-2xl italic text-gold pr-6"
                  >
                    {faq.q}
                  </h2>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {open && (
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-7 pb-7"
                  >
                    <p
                      itemProp="text"
                      className="text-white/60 leading-8"
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
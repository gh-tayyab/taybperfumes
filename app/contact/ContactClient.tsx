"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      console.log("Contact ID:", data.contactId);

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main
      className="pt-[52px] min-h-screen"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <meta itemProp="name" content="Contact TAYB Perfumes" />
      <meta
        itemProp="description"
        content="Contact TAYB Perfumes for customer support and fragrance inquiries."
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 border-b border-gold/10">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">
          Get In Touch
        </p>

        <h1 className="font-display text-5xl md:text-6xl text-cream italic">
          Contact Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-8">
              Send a Message
            </h2>

            {sent ? (
              <div className="border border-gold/30 p-8 text-center">
                <p className="text-gold text-2xl font-display italic mb-2">
                  Thank You ✦
                </p>
                <p className="text-cream/50 text-sm">
                  We&apos;ve received your message and will respond within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm font-body placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm font-body placeholder:text-cream/20 outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream/40 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-transparent border border-gold/20 text-cream px-4 py-3 text-sm font-body placeholder:text-cream/20 outline-none focus:border-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-charcoal font-body font-medium tracking-widest uppercase text-sm py-4 hover:bg-gold-light transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-8">
              Our Details
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  icon: <Mail size={16} className="text-gold" />,
                  label: "Email",
                  value: "info@taybperfumes.com",
                },
                {
                  icon: <Phone size={16} className="text-gold" />,
                  label: "WhatsApp",
                  value: "+92 3367189237",
                },
                {
                  icon: <MapPin size={16} className="text-gold" />,
                  label: "Location",
                  value: " R-66 Phase-I Shah Town Bin Qasim. Bin Qasim Karachi",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-cream/30 mb-1">
                      {item.label}
                    </p>
                    <p className="text-cream/70 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/10 pt-8">
              <p className="text-xs tracking-widest uppercase text-cream/30 mb-4">
                Follow Us
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/taybperfumes/"
                  target="_blank"
                  className="border border-gold/20 text-cream/40 hover:border-gold hover:text-gold transition-all p-3"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61591221246286"
                  target="_blank"
                  className="border border-gold/20 text-cream/40 hover:border-gold hover:text-gold transition-all p-3"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            <div className="mt-10 border border-gold/10 p-6">
              <p className="text-xs tracking-widest uppercase text-gold mb-3">
                Working Hours
              </p>
              <p className="text-cream/50 text-sm">
                Monday – Saturday: 10am – 7pm
              </p>
              <p className="text-cream/30 text-xs mt-2">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

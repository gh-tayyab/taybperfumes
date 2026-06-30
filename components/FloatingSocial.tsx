"use client";

import { useState } from "react";
import { ChevronUp, X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-3">

      {/* Social Icons */}

      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="https://wa.me/923367189237"
          target="_blank"
          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href="https://instagram.com/taybperfumes"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://www.facebook.com/people/TAYB-Perfumes/61591221246286/"
          target="_blank"
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
        >
          <FaFacebookF size={20} />
        </a>
      </div>

      {/* Toggle Button */}

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gold text-charcoal shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
      >
        {open ? <X size={20} /> : <ChevronUp size={20} />}
      </button>
    </div>
  );
}
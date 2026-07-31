"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // 200px scroll ke baad show hoga
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full bg-gold text-charcoal shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
    >
      <ChevronUp size={20} />
    </button>
  );
}
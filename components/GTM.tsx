"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function GTM() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        setLoad(true);
      });
    } else {
      const id = setTimeout(() => {
        setLoad(true);
      }, 1500);

      return () => clearTimeout(id);
    }
  }, []);

  return load ? <GoogleTagManager gtmId="GTM-KX7VCG3W" /> : null;
}
"use client";

import { useEffect, useState } from "react";

const words = ["cerca", "pronto", "seguro", "que necesitas"];

export default function AnimatedLogo() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-poppins flex items-center gap-1 text-lg font-semibold leading-none tracking-tight">
      <span className="text-ink">Tenlo</span>
      <span
        className={`text-muted transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        "{words[index]}"
      </span>
    </div>
  );
}

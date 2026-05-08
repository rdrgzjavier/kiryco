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
        setIndex((prev) => {
          if (prev >= words.length - 1) {
            clearInterval(interval);
            setFade(true);
            return prev;
          }
          const next = prev + 1;
          setFade(true);
          return next;
        });
      }, 500);
    }, 4000); // 4 seconds interval for a slower feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-poppins flex items-center gap-1 text-lg font-semibold leading-none tracking-tight">
      <span className="text-ink">Tenlo</span>
      <div className="relative inline-block">
        {/* Transparent longest word to keep the width stable and prevent layout shift */}
        <span className="invisible select-none whitespace-nowrap" aria-hidden="true">que necesitas</span>
        <span
          className={`absolute left-0 text-muted transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {words[index]}
        </span>
      </div>
    </div>
  );
}

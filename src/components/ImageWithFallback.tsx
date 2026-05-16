"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src?: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function ImageWithFallback({ src, fallbackSrc, alt, className, loading = "lazy", fetchPriority }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackSrc);
  const priorityProps = fetchPriority ? { fetchPriority } : {};

  return (
    <img
      {...priorityProps}
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}

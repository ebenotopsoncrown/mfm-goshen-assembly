// components/Hero.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt?: string };

type HeroProps = {
  title?: string;
  subtitle?: string;
  /** Back-compat: single background image */
  image?: string;
  /** Optional slides for cross-fade */
  slides?: Slide[];
  /** Interval between slides (ms). Default: 6000 */
  intervalMs?: number;
};

export function Hero({
  title,
  subtitle,
  image,
  slides,
  intervalMs = 6000,
}: HeroProps) {
  // Choose slides: custom -> single image -> defaults
  const effectiveSlides: Slide[] =
    slides && slides.length
      ? slides
      : image
      ? [{ src: image }]
      : [
          { src: "/hero/hero-1.jpg", alt: "Worship Service" },
          { src: "/hero/hero-2.jpg", alt: "Bible Study" },
          { src: "/hero/hero-3.jpg", alt: "Community Fellowship" },
          { src: "/hero/hero5.jpg", alt: "Fellowship" },
          { src: "/hero/hero6.jpg", alt: "Prayer" },
          { src: "/hero/hero7.jpg", alt: "Praise" },
          { src: "/hero/hero8.jpg", alt: "Community" },
          { src: "/hero/hero9.jpg", alt: "Service" },
        ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (effectiveSlides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % effectiveSlides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [effectiveSlides.length, intervalMs]);

  return (
    <section className="relative isolate h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {effectiveSlides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt ?? "Hero background"}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Text */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 text-white">
          {subtitle && (
            <p className="text-white/85 text-sm sm:text-base">{subtitle}</p>
          )}
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            {title ?? "Welcome to MFM Goshen Assembly"}
          </h1>
        </div>
      </div>
    </section>
  );
}


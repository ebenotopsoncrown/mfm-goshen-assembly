// components/Hero.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt?: string };

export function Hero() {
  const slides: Slide[] = [
    { src: "/images/hero5.jpg", alt: "Worship Service" },
    { src: "/images/hero6.jpg", alt: "Bible Study" },
    { src: "/images/hero7.jpg", alt: "Community Fellowship" },
    { src: "/images/hero8.jpg", alt: "Prayer Time" },
    { src: "/images/hero9.jpg", alt: "Gospel Outreach" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000); // 6 seconds
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
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

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold">
          Welcome to MFM Goshen Assembly
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-200">
          Bournemouth, United Kingdom
        </p>
      </div>
    </section>
  );
}


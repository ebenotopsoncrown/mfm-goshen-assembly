// components/MinistryStrip.tsx
"use client";

import Image from "next/image";

const items = [
  { src: "/ministry-icons/Deliverance.png", alt: "Deliverance Ministry" },
  { src: "/ministry-icons/banner.png", alt: "Praise & Worship" },
  { src: "/ministry-icons/women.png", alt: "Women Ministry" },
  { src: "/ministry-icons/music-worship.png", alt: "Music Ministry" },
  { src: "/ministry-icons/children.png", alt: "Children Ministry" },
];

export default function MinistryStrip() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex gap-4 overflow-x-auto">
        {items.map((it) => (
          <div key={it.src} className="shrink-0">
            <Image
              src={it.src}          // IMPORTANT: starts with "/" and exact file name case
              alt={it.alt}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



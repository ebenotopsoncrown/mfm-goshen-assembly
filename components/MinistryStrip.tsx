"use client";

export function MinistryStrip() {
  const items = [
    { src: "/ministry-icons/children.png", alt: "Children Ministry" },
    { src: "/ministry-icons/deliverance.png", alt: "Deliverance Ministry" },
    { src: "/ministry-icons/we-care.png", alt: "We Care Ministry" },
    { src: "/ministry-icons/music-worship.png", alt: "Music & Worship Ministry" },
    { src: "/ministry-icons/women.png", alt: "Women Ministry" },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        {/* Hide scrollbar for WebKit browsers */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {items.map((it) => (
          <img
            key={it.src}
            src={it.src}
            alt={it.alt}
            className="h-10 w-auto shrink-0 object-contain"
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
}


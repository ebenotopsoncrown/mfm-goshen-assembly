// app/(site)/ministries/page.tsx
import Image from "next/image";

export default function MinistriesPage() {
  const ministries = [
    { src: "/ministry-icons/Deliverance.png", title: "Deliverance Ministry" },
    { src: "/ministry-icons/banner.png", title: "Banner Ministry" },
    { src: "/ministry-icons/music-worship.png", title: "Music & Worship" },
    { src: "/ministry-icons/we-care.png", title: "We Care Ministry" },
    { src: "/ministry-icons/children.png", title: "Children Ministry" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Ministries</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {ministries.map((m) => (
          <div key={m.src} className="text-center">
            <Image
              src={m.src}
              alt={m.title}
              width={120}
              height={120}
              className="mx-auto rounded-md shadow-md object-cover"
            />
            <p className="mt-3 text-sm font-medium text-gray-700">{m.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}



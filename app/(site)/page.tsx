// app/(site)/page.tsx
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function HomePage() {
  const events = [
    {
      src: "/images/event1.jpg",
      title: "Power Must Change Hands",
      desc: "Every first Saturday of the month | 7AM",
    },
    {
      src: "/images/event2.jpg",
      title: "Manna Water Service",
      desc: "Every Wednesday | 5PM",
    },
    {
      src: "/images/event3.jpg",
      title: "12 Days Fasting & Prayer",
      desc: "Starting early 2025 — Theme: O Lord Satisfy Me Early",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Bournemouth, United Kingdom"
        image="/hero/hero-1.jpg"
      />

      {/* Come Experience God Section */}
      <section className="relative bg-[#5B0099] text-white text-center py-16">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-2.jpg"
            alt="Experience God"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold mb-3">COME EXPERIENCE GOD</h2>
          <p className="text-lg mb-4">
            Sundays · 10:00am | Tuesdays · 7:00pm - Virtual
          </p>
          <p className="max-w-xl mx-auto text-sm text-gray-200 leading-relaxed">
            Mountain of Fire and Miracles Ministries, Goshen Assembly, UK
            <br />
            2a Trident Court, East Moors Road, Cardiff, CF24 5TD
            <br />
            Email: info@mfmgoshenassembly.org.uk | Tel: +447311273548
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-white text-[#5B0099] px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Our Events & Programs Slider */}
      <section className="py-16 bg-gradient-to-r from-[#9c27b0] to-[#5B0099] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Events & Programs</h2>
        <p className="mb-8 text-gray-100">
          Follow our events and upcoming programs from here
        </p>

        <div className="flex overflow-x-auto gap-6 px-6 snap-x snap-mandatory">
          {events.map((event) => (
            <div
              key={event.src}
              className="snap-start shrink-0 w-72 bg-white text-[#5B0099] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={event.src}
                alt={event.title}
                width={400}
                height={240}
                className="object-cover w-full h-44"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-sm mb-3">{event.desc}</p>
                <button className="bg-[#5B0099] text-white px-4 py-2 rounded-full hover:bg-[#4a0080]">
                  View Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

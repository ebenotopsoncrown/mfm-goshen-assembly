// app/(site)/page.tsx
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function HomePage() {
  const events = [
  {
    src: "/images/events.jpg",
    title: "Power Must Change Hands",
    desc: "Every first Saturday of the month | 7AM",
  },
  {
    src: "/images/events2.jpg",
    title: "Manna Water Service",
    desc: "Every Wednesday | 5PM",
  },
  {
    src: "/images/events3.jpg",
    title: "12 Days Fasting & Prayer",
    desc: "Start your year strong — Theme: O Lord, Satisfy Me Early",
  },
  {
    src: "/images/events4.jpg",
    title: "Special Deliverance Weekend",
    desc: "Monthly deliverance program at MFM Goshen Assembly, Bournemouth",
  },
];


  return (
    <>
      {/* Hero Section */}
      <Hero
  title="Welcome to MFM Goshen Assembly Bournemouth"
  slides={[
    { src: "/hero/hero-1.jpg" },
    { src: "/hero/hero-2.jpg" },
    { src: "/hero/hero-3.jpg" },
    { src: "/hero/hero5.jpg" },
    { src: "/hero/hero6.jpg" },
    { src: "/hero/hero7.jpg" },
    { src: "/hero/hero8.jpg" },
    { src: "/hero/hero9.jpg" },
  ]}
  intervalMs={6000}
/>

      {/* separator between hero and Experience section */}
<section className="relative mx-auto max-w-7xl px-4">
  <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
</section>

      {/* Come Experience God Section */}
      {/* Come Experience God Section */}
<section className="relative bg-[#5B0099] text-white text-center py-16 overflow-hidden">

  {/* Background cross-fade (12s loop, 6s per image) */}
  <Image
    src="/images/experience.jpg"
    alt="Experience God"
    fill
    priority
    className="absolute inset-0 object-cover opacity-0 will-change-[opacity] slide"
    style={{ animationDelay: "0s" }}
  />
  <Image
    src="/images/experience2.jpg"
    alt="Experience God"
    fill
    className="absolute inset-0 object-cover opacity-0 will-change-[opacity] slide"
    style={{ animationDelay: "6s" }}
  />

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* content */}
  <div className="relative z-10 px-4">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-3 tracking-tight">
      COME AND EXPERIENCE GOD
    </h2>

    <p className="text-base sm:text-lg mb-4">
      Sundays · 10:00am&nbsp;&nbsp;|&nbsp;&nbsp;Tuesdays · 7:00pm — Virtual
    </p>

    <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-200 leading-relaxed">
      Mountain of Fire and Miracles Ministries, Goshen Assembly, UK
      <br />
      2a Trident Court, East Moors Road, Cardiff, CF24 5TD
      <br />
      Email: info@mfmgoshenassembly.org.uk &nbsp;|&nbsp; Tel: +44&nbsp;7311&nbsp;273548
    </p>

    <div className="flex justify-center mt-6">
      <a
        href="/contact"
        className="inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-[#5B0099] shadow-sm transition hover:bg-gray-100"
      >
        Contact Us Now
      </a>
    </div>
  </div>

  {/* cross-fade keyframes (scoped) */}
  <style jsx>{`
    @keyframes fadeCycle {
      0%   { opacity: 0; }
      5%   { opacity: 1; }
      45%  { opacity: 1; }
      50%  { opacity: 0; }
      100% { opacity: 0; }
    }
    .slide {
      animation: fadeCycle 12s linear infinite;
    }
  `}</style>
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






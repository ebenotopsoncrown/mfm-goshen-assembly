// app/(site)/page.tsx
import Image from "next/image";
import { Container } from "@/components/Container";
import { MinistryStrip } from "@/components/MinistryStrip";

export default function Page() {
  return (
    <main>
      {/* MINISTRY ICONS STRIP (from /public/ministry-icons/...) */}
      <MinistryStrip />

      {/* HERO */}
      <section className="relative h-[280px] sm:h-[360px] md:h-[420px] bg-neutral-900">
        <Image
          src="/hero-ministries.svg"
          alt="MFM Goshen Assembly hero image"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif">
            Welcome to MFM Goshen Assembly
          </h1>
          <p className="text-white/80 mt-2">Bournemouth, United Kingdom</p>
        </div>
      </section>

      {/* CONTENT */}
      <Container className="py-16">
        <h2 className="text-2xl font-semibold">Latest Highlights</h2>
        <p className="mt-3 text-gray-600">
          Add service times, welcome message, and calls-to-action.
        </p>
      </Container>
    </main>
  );
}



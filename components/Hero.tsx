import Image from "next/image";
import { Container } from "./Container";

export function Hero({ title, subtitle, image = "/hero-ministries.svg" }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <Container className="py-24 md:py-28 lg:py-32 text-white">
        {subtitle && <p className="opacity-90">{subtitle}</p>}
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      </Container>
    </section>
  );
}

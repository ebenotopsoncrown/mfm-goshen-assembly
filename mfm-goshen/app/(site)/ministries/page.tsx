import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { MINISTRIES } from "@/lib/data.ministries";
import { MinistryCard } from "@/components/MinistryCard";
export default function Page() {
  return (
    <main>
      <Hero title="Our Ministries" subtitle="Mountain of Fire and Miracles Ministries Goshen Assembly" image="/hero-ministries.svg" />
      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {MINISTRIES.map((m) => (<MinistryCard key={m.title} title={m.title} image={m.image} grayscale={m.grayscale} />))}
        </div>
      </Container>
    </main>
  );
}

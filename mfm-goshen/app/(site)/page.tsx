import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
export default function Page() {
  return (
    <main>
      <Hero title="Welcome to MFM Goshen Assembly" subtitle="Bournemouth, United Kingdom" image="/hero-ministries.svg" />
      <Container className="py-16">
        <h2 className="text-2xl font-semibold">Latest Highlights</h2>
        <p className="mt-3 text-gray-600">Add service times, welcome message, and calls-to-action.</p>
      </Container>
    </main>
  );
}

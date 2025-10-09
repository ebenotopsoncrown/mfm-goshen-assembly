import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="About Us" subtitle="Who We Are" />
      <Container className="prose prose-lg max-w-none py-16">
        <p>Replace with church history, mission, vision, and values.</p>
      </Container>
    </main>
  );
}

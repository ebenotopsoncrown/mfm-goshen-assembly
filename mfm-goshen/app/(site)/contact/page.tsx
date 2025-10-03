import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="Contact Us" />
      <Container className="py-16">
        <p>Show service times, address, map, contact form.</p>
      </Container>
    </main>
  );
}

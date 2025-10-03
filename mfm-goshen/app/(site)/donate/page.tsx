import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="Give / Donate" />
      <Container className="py-16">
        <p>Embed your payment link or bank details here.</p>
      </Container>
    </main>
  );
}

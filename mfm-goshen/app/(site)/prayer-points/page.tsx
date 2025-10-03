import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="Prayer Points" />
      <Container className="py-16">Weekly/monthly prayer points with categories.</Container>
    </main>
  );
}

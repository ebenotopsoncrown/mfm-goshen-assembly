import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="Our Branches" />
      <Container className="py-16">List Goshen network locations, times and maps.</Container>
    </main>
  );
}

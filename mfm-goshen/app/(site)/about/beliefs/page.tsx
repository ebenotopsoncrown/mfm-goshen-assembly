import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <main>
      <Hero title="Our Beliefs" />
      <Container className="prose prose-lg max-w-none py-16">
        <ul>
          <li>Scripture</li>
          <li>Trinity</li>
          <li>Salvation</li>
          <li>Prayer & Deliverance</li>
        </ul>
      </Container>
    </main>
  );
}

// app/(site)/about/beliefs/page.tsx
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero"; // <-- named import (critical)

export default function BeliefsPage() {
  return (
    <main>
      <Hero title="Our Beliefs" />
      <Container className="prose prose-lg max-w-none py-16">
        <ul>
          <li>Scripture</li>
          {/* TODO: add the rest of your beliefs content */}
        </ul>
      </Container>
    </main>
  );
}

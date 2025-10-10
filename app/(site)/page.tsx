// app/(site)/page.tsx
import { Hero } from "@/components/Hero";
import MinistryStrip from "@/components/MinistryStrip";

export default function HomePage() {
  return (
    <>
      {/* Remove title to get rid of 'Hero Placeholder' */}
      <Hero
        subtitle="Bournemouth, United Kingdom"
        // If you want a fixed hero image instead of slideshow, uncomment:
        // image="/hero/hero-1.jpg"
      />

      {/* Ministry icons go BELOW the hero, not inside the header */}
      <MinistryStrip />

      {/* Your existing homepage content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <section>
          <h2 className="text-2xl font-semibold">Latest Highlights</h2>
          <p className="text-gray-600">
            Add service times, welcome message, and calls-to-action.
          </p>
        </section>
      </main>
    </>
  );
}

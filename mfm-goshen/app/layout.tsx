import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MFM Goshen Assembly Bournemouth",
  description: "Official website of MFM Goshen Assembly Bournemouth, UK.",
  openGraph: { title: "MFM Goshen Assembly Bournemouth", images: ["/og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

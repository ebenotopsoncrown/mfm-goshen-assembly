// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

// ---- Fonts (CSS variables consumed by Tailwind in tailwind.config) ----
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

// You can set this env var in Cloudflare Pages (Environment variables) to your custom domain later
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mfm-goshen-assembly.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MFM Goshen Assembly | United Kingdom",
    template: "%s | MFM Goshen Assembly",
  },
  description:
    "Official website of MFM Goshen Assembly, United Kingdom — worship times, ministries, locations, and resources.",
  // ---- Icons & manifest ----
  manifest: "/manifest.webmanifest", // make sure this exists in /public (or use app/manifest.ts instead)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      // Uncomment these when you add the PNGs into /public
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // Optional SVG (only if you placed /public/favicon.svg)
      // { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  themeColor: "#5b21b6",
  applicationName: "MFM Goshen Assembly",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MFM Goshen Assembly",
    title: "MFM Goshen Assembly | United Kingdom",
    description:
      "Service times, locations, ministries and resources from MFM Goshen Assembly, UK.",
    images: [
      // Replace with your OG image when ready
      { url: "/og-default.jpg", width: 1200, height: 630, alt: "MFM Goshen Assembly" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MFM Goshen Assembly | United Kingdom",
    description:
      "Service times, locations, ministries and resources from MFM Goshen Assembly, UK.",
    images: ["/og-default.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#5b21b6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}



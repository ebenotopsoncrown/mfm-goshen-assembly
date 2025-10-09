// app/(site)/layout.tsx
import Link from "next/link";

function Header() {
  return (
    <header className="bg-purple-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* If you have /public/logo.svg, uncomment below */}
          {/* <img src="/logo.svg" alt="MFM Goshen Assembly" className="h-8 w-auto" /> */}
          <span className="text-lg font-semibold">MFM Goshen Assembly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-purple-200">Home</Link>
          <Link href="/about" className="hover:text-purple-200">About Us</Link>
          <Link href="/ministries" className="hover:text-purple-200">Our Ministry</Link>
          <Link href="/branches" className="hover:text-purple-200">Our Branches</Link>
          <Link href="/prayer-points" className="hover:text-purple-200">Prayer Points</Link>
          <Link href="/contact" className="hover:text-purple-200">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium hover:bg-white/25"
          >
            DONATE
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">MFM Goshen Assembly</h3>
            <p className="mt-2 text-sm text-neutral-400">United Kingdom</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-300">
              <li><a href="/privacy">Privacy Statement</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-300">
              <li>Phone: +44 0000 000000</li>
              <li>Email: info@mfmgoshenassembly.org.uk</li>
              <li>Address: Bournemouth, United Kingdom</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} MFM Goshen Assembly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

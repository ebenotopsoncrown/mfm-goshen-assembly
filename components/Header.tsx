// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-white">
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* NOTE: file exists at /public/images/logo.png */}
          <Image
            src="/images/logo.png"
            alt="MFM Goshen Assembly"
            width={36}
            height={36}
            priority
          />
          <span className="hidden sm:inline font-semibold">MFM Goshen Assembly</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/(site)/about">About Us</Link>
          <Link href="/(site)/ministries">Our Ministry</Link>
          <Link href="/(site)/branches">Our Branches</Link>
          <Link href="/(site)/prayer-points">Prayer Points</Link>
          <Link href="/(site)/contact">Contact</Link>
          <Link
            href="/(site)/donate"
            className="ml-2 rounded-full bg-white/15 hover:bg-white/25 px-3 py-1.5"
          >
            DONATE
          </Link>
        </nav>
      </div>
    </header>
  );
}

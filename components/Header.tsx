// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#5B0099] text-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-20">
        {/* Left side: Logo + Text */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="MFM Goshen Assembly Logo"
            width={55}
            height={55}
            className="rounded-full"
            priority
          />
          <div>
            <h1 className="text-lg font-semibold leading-tight">
              MFM Goshen Assembly
            </h1>
            <p className="text-sm text-gray-200">Bournemouth, United Kingdom</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/(site)/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/(site)/ministries" className="hover:text-gray-200">
            Our Ministry
          </Link>
          <Link href="/(site)/branches" className="hover:text-gray-200">
            Our Branches
          </Link>
          <Link href="/(site)/prayer-points" className="hover:text-gray-200">
            Prayer Points
          </Link>
          <Link href="/(site)/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link
            href="/(site)/donate"
            className="ml-2 rounded-full bg-white text-[#5B0099] hover:bg-gray-100 px-4 py-2 font-semibold"
          >
            DONATE
          </Link>
        </nav>
      </div>
    </header>
  );
}


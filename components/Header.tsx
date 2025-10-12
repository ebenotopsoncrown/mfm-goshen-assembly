"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#7A20C6] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="MFM Goshen Assembly Logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <div className="leading-tight">
            <span className="block font-serif text-base sm:text-lg">
              MFM Goshen Assembly Bournemouth
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About Us</Link>
          <Link href="/ministry" className="hover:text-gray-200">Our Ministry</Link>
          <Link href="/branches" className="hover:text-gray-200">Our Branches</Link>
          <Link href="/prayer-points" className="hover:text-gray-200">Prayer Points</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#7A20C6] shadow-sm hover:bg-gray-100"
          >
            DONATE
          </Link>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 text-sm font-medium">
            <Link href="/" className="rounded px-2 py-2 hover:bg-white/10">Home</Link>
            <Link href="/about" className="rounded px-2 py-2 hover:bg-white/10">About Us</Link>
            <Link href="/ministry" className="rounded px-2 py-2 hover:bg-white/10">Our Ministry</Link>
            <Link href="/branches" className="rounded px-2 py-2 hover:bg-white/10">Our Branches</Link>
            <Link href="/prayer-points" className="rounded px-2 py-2 hover:bg-white/10">Prayer Points</Link>
            <Link href="/contact" className="rounded px-2 py-2 hover:bg-white/10">Contact</Link>
            <Link
              href="/donate"
              className="mt-2 rounded-full bg-white px-4 py-2 text-center font-semibold text-[#7A20C6] hover:bg-gray-100"
            >
              DONATE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}




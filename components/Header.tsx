"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ORG, NAV } from "@/lib/site";
import { Search } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-purple-700/95 border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo and org name */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/logo.png"
              alt="MFM Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="leading-5">
              <div className="font-semibold">MFM Goshen Assembly</div>
              <div className="text-xs opacity-80">{ORG.countryLine}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-white">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-white opacity-90"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 hidden w-44 rounded-xl border border-white/10 bg-white/95 p-2 text-gray-800 shadow-2xl group-hover:block">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-purple-50"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={ORG.donateUrl}
              className="rounded-full bg-purple-200 px-6 py-2 font-semibold text-purple-900 shadow-sm hover:bg-white"
            >
              DONATE
            </Link>

            {/* Search box */}
            <div className="relative">
              <input
                className="h-10 w-56 rounded-full border-0 bg-white/95 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:outline-none"
                placeholder="Search…"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl border border-white/20 p-2 text-white"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile navigation dropdown */}
        {open && (
          <div className="md:hidden pb-4 text-white/90">
            <div className="grid gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ORG.donateUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-purple-200 px-6 py-2 text-purple-900 font-semibold"
              >
                DONATE
              </Link>
              <div className="relative mt-2">
                <input
                  className="h-10 w-full rounded-full border-0 bg-white/95 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400"
                  placeholder="Search…"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


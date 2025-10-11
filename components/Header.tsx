// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

{/* Left/brand area */}
<div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"        // make sure the file is at public/images/logo.png
    alt="MFM Goshen Assembly Bournemouth"
    width={44}
    height={44}
    className="h-11 w-11 rounded-full"
    priority
  />
  <span className="font-semibold text-white text-lg sm:text-xl">
    MFM Goshen Assembly Bournemouth
  </span>
</div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/(site)/about">About Us</Link>
          <Link href="/(site)/ministries">Our Ministry</Link>
          <Link href="/(site)/branches">Our Branches</Link>
          <Link href="/(site)/prayer-points">Prayer Points</Link>
          <Link href="/(site)/contact">Contact</Link>
          <Link
            href="/(site)/donate"
            className="ml-2 rounded-full bg-white text-[#5B0099] px-4 py-2 font-semibold hover:bg-gray-100"
          >
            DONATE
          </Link>
        </nav>
      </div>
    </header>
  );
}


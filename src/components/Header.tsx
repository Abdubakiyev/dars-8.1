"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Dars-5
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

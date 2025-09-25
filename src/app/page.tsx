"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (token) {
      setUser({ name: name || "", email: email || "" });
    }
  }, []);

  if (user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">🏠 Home Page</h1>
        <p>👤 Name: {user.name}</p>
        <p>📧 Email: {user.email}</p>

        <button
          onClick={() => {
            localStorage.clear();
            setUser(null);
          }}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Asosiy Sahifa</h1>
      <p className="mb-6">Xush kelibsiz!</p>

      {/* Login sahifaga o‘tish */}
      <Link
        href="/login"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login sahifaga o‘tish
      </Link>

      {/* Register sahifaga o‘tish */}
      <Link
        href="/register"
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Register sahifaga o‘tish
      </Link>
    </main>
  );
}

import Link from "next/link";

export default function HomePage() {
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

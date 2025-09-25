"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ⬅️ Router import
import axios from "axios";

export default function LoginPage() {
  const router = useRouter(); // ⬅️ Router init

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/auth/login", form);

      console.log("✅ Login success:", res.data);

      localStorage.setItem("token", res.data.access_token);

      // 🔹 Home page (/ ) ga redirect
      router.push("/");
    } catch (err: any) {
      console.error("❌ Login error:", err);
      setError(err.response?.data?.message || "Noma’lum xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Enter your email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:bg-blue-400"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Agar siz ro‘yxatdan o‘tmagan bo‘lsangiz{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

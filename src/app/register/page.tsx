"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ⬅️ qo‘shildi
import { regions, districts, District } from "@/app/store/location-data";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter(); // ⬅️ qo‘shildi

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    region: regions[0].value,
    district: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const availableDistricts: District[] = districts[form.region] || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/auth/register", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Register success:", res.data);


      router.push("/");
    } catch (err: any) {
      alert("❌ Error: " + (err.response?.data?.message || err.message));
      console.error("Error:", err);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:4000/auth/github";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-900 placeholder-gray-400"
            required
          />

          <select
            name="region"
            value={form.region}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-900"
          >
            <option value="">Viloyat tanlang</option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>

          <select
            name="district"
            value={form.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-900"
            disabled={!form.region}
          >
            <option value="">Tuman tanlang</option>
            {availableDistricts.map((district) => (
              <option key={district.value} value={district.value}>
                {district.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-50"
          >
            <FcGoogle className="text-xl" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-50"
          >
            <FaGithub className="text-xl text-gray-900" />
            <span className="text-gray-700 font-medium">
              Continue with GitHub
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

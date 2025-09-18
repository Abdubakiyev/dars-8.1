"use client";

import { useState } from "react";
import { regions, districts, District } from "@/app/store/location-data";

export default function RegisterPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2)); 
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
      </div>
    </div>
  );
}

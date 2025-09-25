"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    const email = params.get("email");
    const name = params.get("name");

    if (token) {
      // 🔹 Token va user ma’lumotlarini localStorage ga yozib qo‘yamiz
      localStorage.setItem("token", token);
      localStorage.setItem("email", email || "");
      localStorage.setItem("name", name || "");

      // 🔹 Home page ga yo‘naltiramiz
      router.push("/");
    }
  }, [params, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-gray-700 font-medium">Google orqali kiryapsiz...</p>
    </div>
  );
}

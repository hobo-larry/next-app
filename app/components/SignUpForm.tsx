// components/SignupForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/api/auth/signin?callbackUrl=/");
    } else {
      const { error } = await res.json();
      setError(error || "Something went wrong. Please try again.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-white p-8 rounded-2xl shadow-md max-w-md mx-auto space-y-6"
>
  <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
  {error && (
        <div className="text-red-600 text-sm font-medium text-center bg-red-50 border border-red-200 px-4 py-2 rounded-md">
          {error}
        </div>
      )}

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="John Doe"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="you@example.com"
    />
  </div>

  <div>
    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
      Password
    </label>
    <input
      id="password"
      name="password"
      type="password"
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="••••••••"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
  >
    Sign Up
  </button>
</form>

  );
}

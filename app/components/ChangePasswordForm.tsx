// components/ChangePasswordForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePasswordForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
    setSuccess(""); // Clear success message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (form.newPassword !== form.confirmNewPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "PUT",
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSuccess("Password changed successfully!");
        setForm({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
        // Optional: Redirect to a profile or dashboard page
        // router.push("/profile");
      } else {
        const { error } = await res.json();
        setError(error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md max-w-md mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Change Password</h2>

      {error && (
        <div className="text-red-600 text-sm font-medium text-center bg-red-50 border border-red-200 px-4 py-2 rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="text-green-600 text-sm font-medium text-center bg-green-50 border border-green-200 px-4 py-2 rounded-md">
          {success}
        </div>
      )}

      <div>
        <label
          htmlFor="currentPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Current Password
        </label>
        <input
          id="currentPassword"
          name="currentPassword"
          type="password"
          onChange={handleChange}
          value={form.currentPassword}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Password
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          onChange={handleChange}
          value={form.newPassword}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label
          htmlFor="confirmNewPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm New Password
        </label>
        <input
          id="confirmNewPassword"
          name="confirmNewPassword"
          type="password"
          onChange={handleChange}
          value={form.confirmNewPassword}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Change Password
      </button>
    </form>
  );
}
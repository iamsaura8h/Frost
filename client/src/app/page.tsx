"use client";

import { useState } from "react";
import { json } from "stream/consumers";

export default function HomePage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-white">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-amber-600 text-center">
            Welcome!
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
          </div>
          <button
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Say Hello"}
          </button>

          {message && (
            <div className="mt-6 text-center text-lg text-amber-700 font-medium">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

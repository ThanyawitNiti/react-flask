import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ConnectAcc</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/regis"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Trusted Accounting Partner
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          The best solution for managing your accounting needs with ease and efficiency.
        </p>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© {new Date().getFullYear()} ConnectAcc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ConnectAcc</h1>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Login</Link>
          <Link to="/register" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to ConnectAcc</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Your trusted accounting platform.</p>
        {/* <Link to="/register" className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </Link> */}
      </header>
    </div>
  );
}

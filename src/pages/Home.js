import React from "react";
import { Link} from "react-router-dom";
import phone from "../pics/whatsapp-color-icon.png"
import line from "../pics/icons8-line-48.png"
export default function Home() {

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">ConnectAcc</h1>
        <div className="space-x-4">
          <Link
            to="/"
             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
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
        <div className="mt-6 flex space-x-4">
        <div className="mt-6">
            <div className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-yellow-600 transition">
              <img src={line} alt="LINE" className="w-6-6"/>
              <span>Add Line: FORWARD</span>
            </div>
        </div>
        <div className="mt-6">
            <div className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-yellow-600 transition">
            <img src={phone} alt="LINE" className="w-6-6"/>
              <span>Phone: 098-123-4567</span>
            </div>
        </div>
      </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© {new Date().getFullYear()} ConnectAcc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

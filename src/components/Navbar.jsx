import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 w-full text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">WealthPlanner</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/calculators" className="hover:text-gray-400">
            Calculators
          </Link>

          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-center transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/calculators"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:bg-gray-700"
          >
            Calculators
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:bg-gray-700"
          >
            About
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

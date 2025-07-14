import React, { useState } from "react";
import logo1 from "./assets/logo1.png";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#page-top">
            <img src={logo1} alt="Majestic Braids Logo" className="h-16" />
          </a>

          {/* Desktop Nav - SHOWS ONLY ON DESKTOP */}
          <div className="md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-black">
              About Us
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-black">
              Gallery
            </a>
            <a href="#services" className="text-gray-600 hover:text-black">
              Services
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-black">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black">
              Contact Us
            </a>
            <a
              href="/book"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-black focus:outline-none"
            >
              {mobileMenuOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - SHOWS ONLY ON MOBILE WHEN TOGGLED */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#about" className="block text-gray-700 hover:text-black">
            About Us
          </a>
          <a href="#portfolio" className="block text-gray-700 hover:text-black">
            Gallery
          </a>
          <a href="#services" className="block text-gray-700 hover:text-black">
            Services
          </a>
          <a
            href="#testimonials"
            className="block text-gray-700 hover:text-black"
          >
            Testimonials
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-black">
            Contact Us
          </a>
          <a
            href="/book"
            className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

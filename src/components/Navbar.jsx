import React, { useState } from "react";
import logo1 from "./assets/logo1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-white shadow">
      <nav className="font-inter mx-auto w-full max-w-screen-2xl relative">
        <div className="flex items-center px-6 py-4 md:px-10 xl:px-20 mt-10 md:mt-0">
          {/* Logo */}
          <a
            href="/"
            className="shrink-0 mx-auto md:mx-0"
          >
            <img
              src={logo1}
              alt="Majestic Braids Logo"
              className="h-20 md:h-28"
            />
          </a>

          {/* Desktop links */}
<div className="ml-auto [display:none] md:flex items-center gap-8 text-[15px] uppercase font-semibold text-gray-800">
  <a href="#aboutus" className="hover:text-[#73C2F4]">About Us</a>
  <a href="#gallery" className="hover:text-[#73C2F4]">Gallery</a>
  <a href="#services" className="hover:text-[#73C2F4]">Services</a>
  <a href="#testimonials" className="hover:text-[#73C2F4]">Testimonials</a>
  <a href="#contact" className="hover:text-[#73C2F4]">Contact Us</a>
  <a href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services" className="hover:text-[#73C2F4]">
    Book Service Now
  </a>
</div>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 text-center text-gray-800 uppercase font-semibold text-[15px]">
            <a href="#aboutus" className="block hover:text-[#73C2F4]">About Us</a>
            <a href="#gallery" className="block hover:text-[#73C2F4]">Gallery</a>
            <a href="#services" className="block hover:text-[#73C2F4]">Services</a>
            <a href="#testimonials" className="block hover:text-[#73C2F4]">Testimonials</a>
            <a href="#contact" className="block hover:text-[#73C2F4]">Contact Us</a>
            <a
              href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
              className="block hover:text-[#73C2F4]"
            >
              Book Service Now
            </a>
          </div>
        )}
      </nav>
    </section>
  );
}

export default Navbar;

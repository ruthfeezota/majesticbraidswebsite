import React from 'react';
import logo1 from "./assets/logo1.png";

function Navbar() {
  return (
    <section className="bg-white">
      <nav className="font-inter mx-auto w-full max-w-screen-2xl relative">
        <div className="flex flex-wrap items-center justify-between px-6 py-6 md:px-10 xl:px-20">
          {/* Logo on the left */}
          <a href="#page-top" className="flex-shrink-0">
            <img src={logo1} alt="Majestic Braids Logo" className="h-32" />
          </a>
          {/* Nav links and CTA */}
          <div className="flex items-center space-x-10 md:space-x-10 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
            {/* Nav Links */}
            <div className="text-gray-800 uppercase flex flex-row flex-wrap justify-center sm:justify-normal gap-4 md:gap-6 text-[15px] ">
              <a href="#aboutus" className="hover:text-teal-600 font-semibold">About Us</a>
              <a href="#gallery" className="hover:text-teal-600 font-semibold">Gallery</a>
              <a href="#services" className="hover:text-teal-600 font-semibold">Services</a>
              <a href="#testimonials" className="hover:text-teal-600 font-semibold">Testimonials</a>
              <a href="#contact" className="hover:text-teal-600 font-semibold">Contact Us</a> 
              <a href="https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start" className="hover:text-teal-600 font-semibold">Book Service Now</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
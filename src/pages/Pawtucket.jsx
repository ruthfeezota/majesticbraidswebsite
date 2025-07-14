import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';


export const Pawtucket = (props) => {
  return (
    // Main container for the entire page, with a background color for visual appeal
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/*
        NOTE: <title> and <meta> tags are typically placed in the <head> section of your public/index.html file
        or managed using a library like react-helmet-async for dynamic content in React applications.
        They are included here as per your original structure, but consider moving them for best practice.
      */}
      <title>Hair Braiding Pawtucket RI | Mobile Braiding Salon Pawtucket | Majestic Braids RI</title>
      <meta
        name="description"
        content="Majestic Braids RI: Your premier mobile hair braiding salon in Pawtucket, RI. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Pawtucket. Book your appointment today for top-rated braids in Pawtucket!"
      />
      <meta
        name="keywords"
        content="hair braiding Pawtucket RI, mobile hair braiding Pawtucket RI, African hair braiding Pawtucket RI, box braids Pawtucket RI, knotless braids Pawtucket RI, Senegalese twists Pawtucket RI, feed in braids Pawtucket RI, boho braids Pawtucket RI, braiding salon Pawtucket RI, braids near me Pawtucket RI, kids braids Pawtucket RI, black hair salons Pawtucket RI, natural hair salon Pawtucket RI, braiding services Pawtucket RI, best braiding salons Pawtucket RI, braiding shops Pawtucket RI, cheap hair braiding Pawtucket RI, lemonade braids Pawtucket RI, hair braiding shops Pawtucket RI, African braiding salons Pawtucket RI"
      />

      {/* Floating "Book Now" Button for easy access */}
      <a
        href="/book"
        className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full shadow-lg z-50 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>

      {/* Navigation Bar component */}
      <Navbar />

      {/* Header section with a video background and prominent call to action */}
      <header id="header">
        <div className="relative">
          {/* Video Background for dynamic visual appeal */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full object-cover z-0 h-full"
            alt="Video of Majestic Braids's Hair Braider Braiding Client's Hair"
          >
            <source src="../img/LizStyle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Semi-transparent overlay to ensure text readability over the video */}
          <div className="absolute inset-0 bg-black opacity-30 z-10 h-full"></div>

          {/* Main content of the header, positioned above the video and overlay */}
          <div className="relative z-20 py-20 md:py-32 lg:py-40 xl:py-48 px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
            <div className="max-w-5xl mx-auto">
              {/* Main heading optimized for Pawtucket hair braiding services */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                Top-Rated Hair Braiding & Mobile Salon in Pawtucket, RI
                {/* Small animated ping to draw attention */}
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              {/* Sub-heading emphasizing mobile service and Pawtucket location */}
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Pawtucket, RI!
              </p>

              {/* Detailed description of services and keywords for SEO */}
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Pawtucket RI," "knotless braids near me in Pawtucket," or "African hair braiding in Pawtucket"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Pawtucket.
              </p>
            </div>

            {/* Call to action button within the header */}
            <div className="mt-10">
              <a
                href="/book"
                className="inline-block bg-[#73C2F4] text-white hover:bg-sky-600 hover:text-white font-semibold py-5 px-10 rounded-full text-lg transition duration-300 uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Braids Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Smaller gallery section to showcase work */}
      <Smallergallery />

      {/* Contact section for inquiries and booking */}
      <Contact />
    </main>
  );
};

export default Pawtucket;

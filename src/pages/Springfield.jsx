import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';

export const Springfield = (props) => {
  return (
    // Main container for the entire page, with a background color for visual appeal
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/*
        NOTE: <title> and <meta> tags are typically placed in the <head> section of your public/index.html file
        or managed using a library like react-helmet-async for dynamic content in React applications.
        They are included here as per your original structure, but consider moving them for best practice.
      */}
      <title>Hair Braiding in Springfield MA | Majestic Braids: Mobile Hair Braiding Springfield | Majestic Braids MA</title>
      <meta
        name="description"
        content="Majestic Braids MA: Your premier mobile hair braiding salon in Springfield, MA. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Springfield. Book your appointment today for top-rated braids in Springfield!"
      />
      <meta
        name="keywords"
        content="hair braiding Springfield MA, mobile hair braiding Springfield MA, African hair braiding Springfield MA, box braids Springfield MA, knotless braids Springfield MA, Senegalese twists Springfield MA, feed in braids Springfield MA, boho braids Springfield MA, braiding salon Springfield MA, braids near me Springfield MA, kids braids Springfield MA, black hair salons Springfield MA, natural hair salon Springfield MA, braiding services Springfield MA, best braiding salons Springfield MA, braiding shops Springfield MA, cheap hair braiding Springfield MA, lemonade braids Springfield MA, hair braiding shops Springfield MA, African braiding salons Springfield MA"
      />

      {/* Floating "Book Now" Button for easy access */}
      <a
        href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
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
              {/* Main heading optimized for Springfield hair braiding services */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                Top-Rated Hair Braiding & Mobile Salon in Springfield, MA
                {/* Small animated ping to draw attention */}
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              {/* Sub-heading emphasizing mobile service and Springfield location */}
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Springfield, MA!
              </p>

              {/* Detailed description of services and keywords for SEO */}
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Springfield MA," "knotless braids near me in Springfield," or "African hair braiding in Springfield"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Springfield.
              </p>
            </div>

            {/* Call to action button within the header */}
            <div className="mt-10">
              <a
                href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
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
    <link rel="canonical" href="https://www.majesticbraids.com/springfield" />
      {/* Smaller gallery section to showcase work */}
      <Smallergallery />

      {/* Contact section for inquiries and booking */}
      <Contact />
    </main>
  );
};

export default Springfield;

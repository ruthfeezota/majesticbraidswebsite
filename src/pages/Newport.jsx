import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';

export const Newport = (props) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <title>Hair Braiding in Newport RI | Majestic Braids: Mobile Hair Braiding Newport | Majestic Braids RI</title>
      <meta
        name="description"
        content="Majestic Braids RI: Your premier mobile hair braiding salon in Newport, RI. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Newport. Book your appointment today for top-rated braids in Newport!"
      />
      <meta
        name="keywords"
        content="hair braiding Newport RI, mobile hair braiding Newport RI, African hair braiding Newport RI, box braids Newport RI, knotless braids Newport RI, Senegalese twists Newport RI, feed in braids Newport RI, boho braids Newport RI, braiding salon Newport RI, braids near me Newport RI, kids braids Newport RI, black hair salons Newport RI, natural hair salon Newport RI, braiding services Newport RI, best braiding salons Newport RI, braiding shops Newport RI, cheap hair braiding Newport RI, lemonade braids Newport RI, hair braiding shops Newport RI, African braiding salons Newport RI"
      />
      <a
        href="https://majesticbraidsshop.square.site/s/appointments"
        className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full shadow-lg z-50 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
      <Navbar />
      <header id="header">
        <div className="relative">
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
          <div className="absolute inset-0 bg-black opacity-30 z-10 h-full"></div>

          <div className="relative z-20 py-20 md:py-32 lg:py-40 xl:py-48 px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                Top-Rated Hair Braiding & Mobile Salon in Newport, RI
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Newport, RI!
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Newport RI," "knotless braids near me in Newport," or "African hair braiding in Newport"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Newport.
              </p>
            </div>
                <link rel="canonical" href="https://www.majesticbraids.com/newport" />
            <div className="mt-10">
              <a
                href="https://majesticbraidsshop.square.site/s/appointments"
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
      <Smallergallery />
      <Contact />
    </main>
  );
};

export default Newport;

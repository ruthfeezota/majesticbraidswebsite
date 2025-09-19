import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';


export const Boston = (props) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    
      <title>Hair Braiding in Boston MA | Majestic Braids: Mobile Hair Braiding Boston | Majestic Braids MA</title>
      <meta
        name="description"
        content="Majestic Braids MA: Your premier mobile hair braiding salon in Boston, MA. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Boston. Book your appointment today for top-rated braids in Boston!"
      />
      <meta
        name="keywords"
        content="hair braiding Boston MA, mobile hair braiding Boston MA, African hair braiding Boston MA, box braids Boston MA, knotless braids Boston MA, Senegalese twists Boston MA, feed in braids Boston MA, boho braids Boston MA, braiding salon Boston MA, braids near me Boston MA, kids braids Boston MA, black hair salons Boston MA, natural hair salon Boston MA, braiding services Boston MA, best braiding salons Boston MA, braiding shops Boston MA, cheap hair braiding Boston MA, lemonade braids Boston MA, hair braiding shops Boston MA, African braiding salons Boston MA"
      />
          <link rel="canonical" href="https://www.majesticbraids.com/boston" />

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
                Top-Rated Hair Braiding & Mobile Salon in Boston, MA
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Boston, MA!
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Boston MA," "knotless braids near me in Boston," or "African hair braiding in Boston"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Boston.
              </p>
            </div>
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

export default Boston;

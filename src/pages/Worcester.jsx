import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';


export const Worcester = (props) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <title>Hair Braiding in Worcester MA | Majestic Braids: Mobile Hair Braiding Worcester | Majestic Braids MA</title>
      <meta
        name="description"
        content="Majestic Braids MA: Your premier mobile hair braiding salon in Worcester, MA. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Worcester. Book your appointment today for top-rated braids in Worcester!"
      />
      <meta
        name="keywords"
        content="hair braiding Worcester MA, mobile hair braiding Worcester MA, African hair braiding Worcester MA, box braids Worcester MA, knotless braids Worcester MA, Senegalese twists Worcester MA, feed in braids Worcester MA, boho braids Worcester MA, braiding salon Worcester MA, braids near me Worcester MA, kids braids Worcester MA, black hair salons Worcester MA, natural hair salon Worcester MA, braiding services Worcester MA, best braiding salons Worcester MA, braiding shops Worcester MA, cheap hair braiding Worcester MA, lemonade braids Worcester MA, hair braiding shops Worcester MA, African braiding salons Worcester MA"
      />
      <a
        href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
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
                Top-Rated Hair Braiding & Mobile Salon in Worcester, MA
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Worcester, MA!
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Worcester MA," "knotless braids near me in Worcester," or "African hair braiding in Worcester"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Worcester.
              </p>
            </div>
                <link rel="canonical" href="https://www.majesticbraids.com/worcester" />
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
      <Smallergallery />
      <Contact />
    </main>
  );
};

export default Worcester;

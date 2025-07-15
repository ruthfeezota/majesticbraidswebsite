import React from 'react';
import Navbar from '../components/Navbar';
import { Contact } from '../components/contact';
import Smallergallery from '../components/Smallergallery';
import GoogleReviews from '../components/GoogleReviews';

export const Pawcatuck = (props) => {
  return (
    // Main container for the entire page, with a background color for visual appeal
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/*
        NOTE: <title> and <meta> tags are typically placed in the <head> section of your public/index.html file
        or managed using a library like react-helmet-async for dynamic content in React applications.
        They are included here as per your original structure, but consider moving them for best practice.
      */}
      <title>Hair Braiding in Pawcatuck CT | Majestic Braids: Mobile Hair Braiding Pawcatuck | Majestic Braids CT</title>
      <meta
        name="description"
        content="Majestic Braids CT: Your premier mobile hair braiding salon in Pawcatuck, CT. Specializing in box braids, knotless braids, Senegalese twists, and more. Expert African hair braiding services brought directly to you in Pawcatuck. Book your appointment today for top-rated braids in Pawcatuck!"
      />
      <meta
        name="keywords"
        content="hair braiding Pawcatuck CT, mobile hair braiding Pawcatuck CT, African hair braiding Pawcatuck CT, box braids Pawcatuck CT, knotless braids Pawcatuck CT, Senegalese twists Pawcatuck CT, feed in braids Pawcatuck CT, boho braids Pawcatuck CT, braiding salon Pawcatuck CT, braids near me Pawcatuck CT, kids braids Pawcatuck CT, black hair salons Pawcatuck CT, natural hair salon Pawcatuck CT, braiding services Pawcatuck CT, best braiding salons Pawcatuck CT, braiding shops Pawcatuck CT, cheap hair braiding Pawcatuck CT, lemonade braids Pawcatuck CT, hair braiding shops Pawcatuck CT, African braiding salons Pawcatuck CT"
      />

      {/* Floating "Book Now" Button for easy access */}
      <a
        href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start&ved=2ahUKEwj2rsnIyL2OAxUXkmoFHdUYDxgQ6156BAgpEAE&opi=89978449&usg=AOvVaw0SNmNlZ3D9iqojKxZTF6H2"
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
              {/* Main heading optimized for Pawcatuck hair braiding services */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                Top-Rated Hair Braiding & Mobile Salon in Pawcatuck, CT
                {/* Small animated ping to draw attention */}
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              {/* Sub-heading emphasizing mobile service and Pawcatuck location */}
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                Majestic Braids brings expert African hair braiding directly to you in Pawcatuck, CT!
              </p>

              {/* Detailed description of services and keywords for SEO */}
              <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
                Searching for "box braids Pawcatuck CT," "knotless braids near me in Pawcatuck," or "African hair braiding in Pawcatuck"?
                Our skilled team delivers stunning results right to your doorstep. We offer a wide range of styles,
                including Senegalese twists, feed-in braids, and trendy boho braids, providing the ultimate convenience
                of a mobile hair salon across Pawcatuck.
              </p>
            </div>

            {/* Call to action button within the header */}
            <div className="mt-10">
              <a
                href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://app.squareup.com/appointments/book/ssrk16cq70u9xm/L90W7ZYT50MKG/start&ved=2ahUKEwj2rsnIyL2OAxUXkmoFHdUYDxgQ6156BAgpEAE&opi=89978449&usg=AOvVaw0SNmNlZ3D9iqojKxZTF6H2"
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

export default Pawcatuck;

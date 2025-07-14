import React from "react";

export const Header = (props) => {
  return (
    <>
      {/* Floating Book Now Button */}
      <a
  href="/book"
  className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white  hover:bg-sky-600 font-semibold py-4 px-8 rounded-full shadow-lg z-50 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Now
</a>

      <header id="header">
        <div className="relative">
          {/* Video Background */}
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

          {/* Overlay and Content */}
          <div className="absolute inset-0 bg-black opacity-30 z-10 h-full"></div>

          <div className="relative z-20 py-20 md:py-32 lg:py-40 xl:py-48 px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                {props.data ? props.data.title : "Loading"}
                <span className="ml-2 animate-ping inline-block rounded-full h-2 w-2 bg-white"></span>
              </h1>
              <p className="text-1xl md:text-3xl mb-8 font-semibold">
                {props.data ? props.data.paragraph : "Loading"}
              </p>

              <p className="text-sm text-gray-300 hidden">
                Looking for braiding salons near me? We specialize in all types of braids, from classic box braids to trendy lemonade braids.
              </p>
            </div>

            {/* Original Button (Optional, remove if you only want the floating one) */}
            <div className="mt-10">
              <a
                href="/book"
                className="inline-block bg-[#73C2F4] text-white hover:bg-sky-600 hover:text-white font-semibold py-5 px-10 rounded-full text-lg transition duration-300 uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

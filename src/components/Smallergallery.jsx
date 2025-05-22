import React from 'react';

function Smallergallery() {
  // Array to hold image data for the gallery
  // Each object contains a src for the image and alt text
  const images = [
    { src: "https://www.majesticbraids.com/img/portfolio/01-large.jpg", alt: "Hairstyle 1" },
    { src: "https://www.majesticbraids.com/img/portfolio/02-large.jpg", alt: "Hairstyle 2" },
    { src: "https://www.majesticbraids.com/img/portfolio/03-large.jpg", alt: "Hairstyle 3" },
    { src: "https://www.majesticbraids.com/img/portfolio/04-large.jpg", alt: "Hairstyle 4" },
    { src: "https://www.majesticbraids.com/img/portfolio/05-large.jpg", alt: "Hairstyle 5" },
    { src: "https://www.majesticbraids.com/img/portfolio/06-large.jpg", alt: "Hairstyle 6" },
  ];

  return (
    <section className="py-16 md:py-20 font-inter"> {/* Added font-inter for consistent font */}
      {/* Changed max-w-7xl and mx-auto to w-full for full screen width */}
      <div className="w-full px-5 md:px-10 text-center">
        {/* Gallery title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">
          Gallery
        </h2>
        {/* Gallery description */}
        <p className="mb-8 mt-4 text-center text-base sm:text-2xl md:text-2xl text-gray-500 md:mb-12 lg:mb-16">
          See Our Stunning Hairstyles, From Your Local African Hair Braiding Expert.
        </p>
        {/* Image grid container */}
        {/*
          - grid: Enables CSS Grid layout
          - grid-cols-1: 1 column on small screens (mobile)
          - sm:grid-cols-2: 2 columns on small-medium screens (tablets)
          - lg:grid-cols-3: 3 columns on large screens (desktops)
          - gap-1: Sets a gap of 1 unit (4px) between grid items
        */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-">
          {/* Map through the images array to render each image */}
          {images.map((image, index) => (
            <a
              key={index} // Unique key for each mapped item
              href="/providence" // Placeholder link, can be updated later
              className="relative flex w-full aspect-square justify-center items-center overflow-hidden rounded-sm group" // Added group for hover effects
            >
              <img
                src={image.src}
                alt={image.alt}
                className="inline-block h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-sm" // Added hover scale effect
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = `https://placehold.co/600x600/cccccc/000000?text=Image+Error`; // Placeholder for error
                }}
              />
              {/* Optional overlay for future use or simple hover effect */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-lg font-medium">View Hairstyle</p>
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Smallergallery;
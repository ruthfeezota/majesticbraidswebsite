import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const imageSize = "w-full object-cover mb-0"; // Adjust margin for tighter spacing

  return (
    <div id="gallery" className="text-center bg-white py-16">
      <div className="mx-auto px-6">
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">Gallery</h2>
          <p className="text-gray-600">See Our Stunning Hairstyles, From Your Local African Hair Braiding Expert.</p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-0"> {/* Using CSS columns */}
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="break-inside-avoid mb-0" // Prevent breaks within images
                >
                  <div className={`${imageSize}`}>
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      alt={d.alt}
                    />
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
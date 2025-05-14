import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="py-20 bg-neutral-50 text-center ">
      <div className="mx-auto px-8 bg-[#2C1755]">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-7xl font-semibold text-gray-800">
            Our Services <span className="text-[#73C2F4] italic">Menu</span>
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Find Your Perfect Braids Style
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="flex flex-col items-center space-y-6" // Center content and use flex-col
                >
                  <div className="relative max-w-60 h-72 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={d.img}
                      alt={d.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center"> {/* Center text content */}
                    <h3 className="text-3xl font-semibold text-white mb-3">
                      {d.name}
                    </h3>
                    <p className="text-2xl font-medium text-white leading-relaxed mb-5 max-w-[300px]">
                      {d.text}
                    </p>
                    <a
                      href={d.link}
                      className="inline-block bg-[#73C2F4] hover:text-white hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-full text-2xl transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};



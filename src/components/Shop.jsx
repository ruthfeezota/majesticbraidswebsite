import React from "react";

export const Shop = (props) => {
  return (
    <div  className="text-center py-16 bg-white ">
      <div className="mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-22 mt-10">
          <h2 className="text-6xl font-semibold text-gray-800">
            Products to buy with your <span className="text-[#73C2F4] italic">Order</span>{" "}
            <span className="hidden">Expert Braiding for All Hair Types </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="space-y-3">
                  {" "}
                  <img src={d.img} alt={d.title} className="w-96 h-96 rounded-full mx-auto object-cover shadow-md" />
                  <div>
                    <h3 className="text-2xl mt-6 font-semibold text-gray-700">{d.title}</h3>
                    <p className="text-gray-600 text-xl">{d.text}</p>
                  </div>
                  <a
                    href={d.link}
                    alt={d.alt}
                    className="inline-block bg-[#73C2F4] hover:bg-sky-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition duration-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
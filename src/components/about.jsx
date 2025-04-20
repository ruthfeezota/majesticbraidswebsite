import React from "react";
import ElizaImage from "../components/assets/ElizaPhoto.png";

export const About = (props) => {
  return (
    <div id="aboutus" className="py-16 bg-neutral-50">
      <div className="mx-auto px-6">
        <div className="flex flex-col md:flex-row flex-wrap -mx-4 items-start"> {/* Stack on mobile, side-by-side on md */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src={ElizaImage}
              className="w-[400px] h-[500px] ml-20 rounded-lg shadow-xl object-cover aspect-[1/1.1] " // Make image take full width on mobile
              alt="Eliza - Majestic Braids Stylist"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="">
              <h2 className=" font-semibold text-gray-800 mb-3 text-7xl">
                Most <span className="text-teal-600 italic">Vibrant </span>Braids in Providence
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5 text-[14px]">
                {props.data ? props.data.paragraph : "Loading Liz's story..."}
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 leading-normal">
                Why Choose Majestic Braids? The Best Mobile Braiding Salon in Providence
              </h3>
              <div className="flex flex-wrap -mx-2 mt-2">
                <div className="w-full sm:w-1/2 px-2 mb-3 sm:mb-0">
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {props.data && props.data.Why
                      ? props.data.Why.map((d, i) => (
                          <li key={`why-${i}`} className="text-md">
                            {d}
                          </li>
                        ))
                      : "Loading reasons..."}
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {props.data && props.data.Why2
                      ? props.data.Why2.map((d, i) => (
                          <li key={`why2-${i}`} className="text-md">
                            {d}
                          </li>
                        ))
                      : "Loading more reasons..."}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
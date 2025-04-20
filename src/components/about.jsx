import React from "react";

import ElizaImage from "../components/assets/ElizaPhoto.png";

export const About = (props) => {
  return (
    <div id="aboutus" className="py-16 bg-white md:p-16 p-6">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 items-start">
          {/* Image Column */}
          <div className="col-span-1 md:pl-20 pl-0">
            <img
              src={ElizaImage}
              className="w-[500px] h-[400px] rounded-lg shadow-xl object-cover mx-auto md:mx-0 md:mt-40 mt-6"
              alt="Eliza - Majestic Braids Stylist"
            />
          </div>

          {/* Text Column */}
          <div className="col-span-1">
            <h2 className="font-semibold text-gray-800 text-5xl md:text-7xl mb-6">
              Most <span className="text-teal-600 italic">Vibrant </span>
              Braids in Providence
            </h2>

            <p className="text-black leading-relaxed text-[16px] mb-6">
              {props.data ? props.data.paragraph : "Loading Liz's story..."}
            </p>

            <h3 className="text-[22px] font-bold text-black mb-3 leading-normal">
              Why Choose Majestic Braids?  <span className="text-teal-600 italic">The Best Mobile Braiding Salon in
              Providence </span>
            </h3>

            <div className="flex flex-wrap -mx-2 mt-2">
              <div className="w-full sm:w-1/2 px-2 mb-3 sm:mb-0">
                <ul className="list-disc list-inside text-black space-y-1">
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
                <ul className="list-disc list-inside text-black space-y-1">
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
  );
};

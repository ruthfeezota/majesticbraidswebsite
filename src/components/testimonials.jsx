import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="py-16 bg-neutral-100">
      <div className="mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-7xl font-semibold text-gray-800">
            What My Clients <span className="text-[#73C2F4] italic">Say</span>
          </h2>
          <p className="text-[14px] text-gray-600 leading-relaxed mt-2">
            Since launching in 2024, we’ve styled many clients, delivering looks
            they love and experiences they rave about!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-inner">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="testimonial-content">
                    <p className="text-gray-700 italic mb-3">"{d.text}"</p>
                    <div className="text-[#73C2F4] font-semibold">
                      - {d.name}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
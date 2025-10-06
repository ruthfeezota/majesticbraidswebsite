import React from "react";

export const Features = (props) => {
  return (
    <div  className="text-center py-16 bg-white ">
      <div className="mx-auto px-6">
{/* 
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">Shop</h2>
          <p className="text-gray-600 text-3xl">Shop Premium Braiding Hair – Ready for Your Appointment</p>
        </div> */}

         <div className="max-w-5xl mx-auto mb-22 mt-10">
          <h2 className="text-7xl font-semibold text-gray-800">
           Our   <span className="text-[#73C2F4] italic"> Most Popular</span>{" "} Services
          </h2>
           <p className="text-gray-600 text-2xl mt-6">Professional Braiding That Lasts and Turns Heads</p>
        </div> 

<div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
  {props.data
    ? props.data.map((d, i) => (
        <div key={`${d.title}-${i}`} className="space-y-3 text-center">
          <img
            src={d.img}
            alt={d.title}
            className="w-[350px] h-[350px] mx-auto object-cover rounded-full shadow-lg"
          />
          <div>
            <h3 className="text-2xl mt-6 font-semibold text-gray-700">
              {d.title}
            </h3>
             <p className="text-xl mt-2 font-semibold text-gray-700">
              {d.price}
            </p>
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



// "Features": [
//     {
//       "img": "img/portfolio/images.jpeg",
//       "title": "Hair Braiding",
//       "link": "https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services",
//       "alt": "Hair Braiding: We offer a wide range of hair braiding services, ensuring you find the perfect style."
//     },    
//     {
//       "img": "img/portfolio/twista.jpg",
//       "title": "Twists",
//       "link": "https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services",
//       "alt": "Twists: Including Senegalese twist hair for a stylish and protective look."
//     },
//     {
//      "img": "img/services/FauxLocs.jpeg",
//       "title": "Faux Locs",
//       "link": "https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services",
//       "alt": "Faux Locs: Get the look of locs without the commitment."
//     },
//     {
//      "img": "img/portfolio/sewIns.png",
//       "title": "Weaves/Sew-Ins",
//       "link": "https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services",
//       "alt": "Weaves/Sew-Ins: Add length and volume with our professional weave services."
//     }
//   ]
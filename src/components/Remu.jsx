import React from 'react'
import Image1 from "../components/assets/BraidBar/BraidBar22.jpeg"

function Remu() {
  return (
    <section className='bg-white'>
    <div
  id="section2"
  className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left bg-white"
>
  {/* Left Column: Text */}
  <div>
    <h2 className="text-5xl font-bold mb-6 text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">NEW SERVICE: <span className='text-gray-600'> Kids Party Braid Bar</span> </h2>
    <p className="mt-3 text-gray-600 text-[16px] mb-6">
      The Braid Bar is our mobile, boutique braid service built for festivals, private parties, and pop-ups — and yes, we also come to your home. Our team of braiding specializes in on-trend and classic braided looks: box braids, cornrows, feed-ins, twists, halo braids, and more.
    </p>
    <ul className="text-gray-700 text-[16px] mb-10">
      <li className="mb-2">✨ Caring braid artists</li>
      <li className="mb-2">✨ Mobile & pop-up friendly</li>
      <li className="mb-2">✨ Kid-ready (ages 3+) and adults welcome</li>
      <li className="mb-2">✨ Temporary color extensions & tinsel options</li>
    </ul>


 <a
    href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services/WONOOQ34BM72MLS4KK2Y2ACD"
    className="mt-8 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full z-50 transition duration-300"
  >
   Book Your Party Now
  </a>



    
  </div>

  {/* Right Column: Image */}
  <div className="flex justify-center lg:justify-end">
    <img
      src={Image1}
      alt="Braided hair showcase"
      className="w-[350px] object-cover rounded-3xl"
    />
  </div>
</div>
</section>
  )
}

export default Remu
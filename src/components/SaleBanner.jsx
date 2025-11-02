import React from 'react';

function SaleBanner() {
  return (
    <section className="relative h-16">
      <div className="absolute top-0 mx-auto flex w-full items-center justify-center bg-[#2C1755] py-4">
        <p className="md:mx-auto text-center text-[#E4CBAA] font-extrabold">
          <a
            href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services/UFZKZIVG7Y4RFJ7N3APS7IMZ"
            className="font-extrabold hover:underline"
          >
            🌟 Women Big Box Braids — Only $100! Limited Time. Book Your Spot Now!
          </a>
        </p>
      </div>
    </section>
  );
}

export default SaleBanner;
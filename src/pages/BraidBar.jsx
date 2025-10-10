import React from "react";
import Navbar from "../components/Navbar";
import { Contact } from "../components/contact";
import Image1 from "../components/assets/BraidBar/BraidBar30.jpeg";
import Image2 from "../components/assets/BraidBar/BraidBar5.png";
import Image3 from "../components/assets/BraidBar/BraidBar34.jpg";
import Image4 from "../components/assets/BraidBar/BraidBar4.png";
import Image5 from "../components/assets/BraidBar/BraidBar2.png";
import Image6 from "../components/assets/BraidBar/BraidBar15.jpg";
import Image8 from "../components/assets/BraidBar/BraidBar16.jpg";
import Image9 from "../components/assets/BraidBar/BraidBar17.jpg";
import Image10 from "../components/assets/BraidBar/BraidBar18.jpeg";
import Image11 from "../components/assets/BraidBar/BraidBar19.jpeg"; 
import Image12 from "../components/assets/BraidBar/BraidBar31.jpg"; 
import HeroVideo from "../components/assets/BraidBar/BraidBarvideo.mp4";
import Poster from "../components/assets/BraidBar/BraidBar13.png";




<main className="relative min-h-screen w-screen overflow-x-hidden">
  <title>
    The Braid Bar | Mobile Hair Braiding Providence RI | Cranston, East Providence, Pawtucket, Warwick, Woonsocket & Surrounding Areas
  </title>
  <meta
    name="description"
    content="The Braid Bar provides expert mobile hair braiding in Providence, RI and surrounding areas within 50 miles. Box braids, knotless braids, feed-ins, twists, tinsel & temporary color. Pop-ups, parties, and in-home appointments. Serving Providence, Cranston, East Providence, Pawtucket, Warwick, Woonsocket, Pawtuxet, Johnston, Lincoln, Smithfield, and nearby Massachusetts towns."
  />
  <meta
    name="keywords"
    content="
      kids hair braiding Providence RI, mobile hair braiding Rhode Island, Rumi K-Pop braids for kids, Demon Hunters braids kids RI, children’s braiding service Providence, kids braid stylist near me, birthday party braids Rhode Island, party braiding service Providence, mobile braid party RI, in-home hair braiding for kids, Providence kids party braids, Cranston kids braiding service, Warwick kids braids near me, kids festival braids Rhode Island, temporary color braids for kids, tinsel braids Rhode Island, clip-in braid extensions for kids, box braids kids Rhode Island, feed-in braids for kids, knotless braids for kids Providence, halo braids children, twist braids kids Rhode Island, mobile hair braiding for parties, pop-up braid service Rhode Island, African hair braiding kids RI, kids hair stylist Rhode Island, professional braid artists Rhode Island, at-home braid appointments, Rumi K-Pop braid party, Demon Hunter braids party service, K-Pop braids for children Providence, themed braids for birthday party, Providence kids braiding events, temporary colored braids for kids, tinsel extensions for children, mobile festival braid service, pop-up braid event Rhode Island, kids hair braiding near me, party braid stylist Rhode Island, mobile braid artist Cranston, Rumi Demon Hunter hair braiding, creative braids for kids Rhode Island, Providence birthday hair stylist, party-ready braids kids, themed hair braiding Rhode Island, K-Pop inspired braids for kids, Providence children’s hair salon, kids hair styling at home RI, mobile kids braid party Rhode Island, special event braids for kids
"
  />

   <link rel="canonical" href="https://majesticbraids.com/kidsbraidbar" />

     <a
    href="mailto:hello@yourbraidbar.com?subject=Booking%20Inquiry"
    className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full z-50 transition duration-300"
  >
    Book Now
  </a>

            </main>
// Components
const Hero = () => (
<header className="relative w-full h-screen">
  {/* Background Image */}
<video
  src={HeroVideo}            // note: use src on <video> or <source src={HeroVideo} />
  poster={Poster}
  autoPlay
  muted
  playsInline
  loop
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover z-0"
  aria-label="Majestic Braids video background"
/>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Content */}
  <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
    <div className="max-w-5xl">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold italic mb-4">
        Kids Party Braid Bar - Kids Love It!
      </h1>
      <p className="text-2xl md:text-3xl mb-8 font-semibold">
        Beautiful, long-lasting braids — brought to your door. Pop-ups, parties, and in-home sessions by professional braid artists.
      </p>
      <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
        Box braids, knotless braids, feed-ins, twists, halo braids, temporary color, and tinsel extensions — Providence's top mobile braid service.
      </p>
      <div className="mt-10">
        <a
          href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services/WONOOQ34BM72MLS4KK2Y2ACD"
          className="inline-block bg-[#73C2F4] text-black hover:bg-sky-600 hover:text-white font-semibold py-5 px-10 rounded-full text-1xl transition duration-300 uppercase "
        >
          Book Your Party Now
        </a>
      </div>
    </div>
  </div>
</header>

);


const HowItWorks = () => (
  <section className="px-6 py-16 bg-white rounded-3xl gap-8 max-w-8xl mx-auto">
<div
  id="section2"
  className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left"
>
  {/* Left Column: Text */}
  <div>
    <h2 className="text-5xl font-bold mb-6 text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">What is the Braid Bar?</h2>
    <p className="mt-3 text-gray-600 text-[16px] mb-6">
      The Braid Bar is our mobile, boutique braid service built for festivals, private parties, and pop-ups — and yes, we also come to your home. Our team of braiding specializes in on-trend and classic braided looks: box braids, cornrows, feed-ins, twists, halo braids, and more.
    </p>
    <ul className="text-gray-700 text-[16px]">
      <li className="mb-2">✨ Caring braid artists</li>
      <li className="mb-2">✨ Mobile & pop-up friendly</li>
      <li className="mb-2">✨ Kid-ready (ages 3+) and adults welcome</li>
      <li className="mb-2">✨ Temporary color extensions & tinsel options</li>
    </ul>
  </div>

  {/* Right Column: Image */}
  <div className="flex justify-center lg:justify-end">
    <img
      src={Image1}
      alt="Braided hair showcase"
      className="w-[500px] object-cover"
    />
  </div>
</div>


     <div id="section3" className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
  {/* Left Column: Image */}
  <div className="flex justify-center lg:justify-start">
    <img
      src={Image3}
      alt="Braid process example"
      className=" w-[500px] object-cover"
    />
  </div>

  {/* Right Column: Text */}
<div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-0">
    <h3 className="text-5xl font-semibold mb-6 text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">How it works</h3>
    <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-3  text-[16px]">
      <li className="mb-4"><strong>Choose a style</strong> from our menu (we’ll show photos & timing estimates).</li>
      <li className="mb-4"><strong>Add color</strong> — clip-in tinsel, temporary extensions, or subtle highlights for the day.</li>
      <li className="mb-4"><strong>Relax</strong> while our braid artist works their magic. We arrive on time with everything needed.</li>
      <li className="mb-4"><strong>Shine on</strong> — finished looks are festival-ready and camera-friendly.</li>
    </ol>

    <div className="mt-6">
      <a
        href="#pricing"
        className="inline-block px-5 py-2 rounded-full bg-[#73C2F4] text-white font-semibold"
      >
        View Pricing
      </a>
    </div>
  </div>
</div>

  </section>
);

const Gallery = () => {
  const images = [
  {
    title: "Braid Style 1",
    smallImage: Image6,
    largeImage: Image6,
    alt: "Braid style 1",
  },
  {
    title: "Braid Style 2",
    smallImage: Image8,
    largeImage: Image8,
    alt: "Braid style 2",
  },
  {
    title: "Braid Style 3",
    smallImage: Image9,
    largeImage: Image9,
    alt: "Braid style 3",
  },
  {
    title: "Braid Style 4",
    smallImage: Image10,
    largeImage: Image10,
    alt: "Braid style 4",
  },
  {
    title: "Braid Style 5",
    smallImage: Image11,
    largeImage: Image11,
    alt: "Braid style 5",
  },
  {
    title: "Braid Style 5",
    smallImage: Image12,
    largeImage: Image12,
    alt: "Braid style 5",
  },

];


return (
  <div id="gallery" className="text-center bg-white py-6">
    <div className="mx-auto px-6">
      <div className="max-w-xl mx-auto mb-12">
        <h2 className="text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">Gallery</h2>
        <p className="text-gray-600 text-[16px]">
          See Our Stunning Hairstyles, From Your Local African Hair Braiding Expert.
        </p>
      </div>

      {/* Single row flex container */}
      <div className="flex flex-wrap justify-center gap-10">
        {images.map((img, i) => (
          <div key={i} className="w-80 h-80 rounded-xl overflow-hidden flex-shrink-0">
            <img src={img.smallImage} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
    </div>
  </div>
  </div>
);
}



const Pricing = () => (
<section id="pricing" className="mt-10 max-w-7xl mx-auto px-6 bg-white rounded-3xl p-8 mb-10 text-center">
  <h3 className="text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">
    Private Parties & Pop-up Pricing
  </h3>
  <p className="mt-2 text-gray-600 max-w-3xl mx-auto text-[16px]">
    Perfect for birthday parties, festivals, markets, or corporate events. We bring a mini salon to your location.
  </p>

  <div className="mt-6 flex justify-center">
    <div className="rounded-2xl  p-6">
      <h4 className="font-semibold text-2xl italic mb-2">Full Braid Bar</h4>
      <p className="text-gray-700 text-[16px]">
        $200 per hour per stylist — festival hair styles, temporary color extensions or clip-in tinsel included. Lasts 1–2 days for temporary color. Stylist can serve ~4–5 guests/hour.
      </p>
    </div>
  </div>

  <div id="booking" className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
    <a
      href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services/WONOOQ34BM72MLS4KK2Y2ACD"
      className="inline-block px-6 py-3 rounded-full bg-[#73C2F4] text-white font-semibold"
    >
      Book Your Party Braid Bar
    </a>
    <a href="tel:+14015550123" className="text-center">
    <span className="text-gray-600 text-[16px]">
      or call/text <strong>(401) 555-0123</strong>
    </span>
    </a>
  </div>
</section>

);


export default function BraidBarPage() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <title>
        The Braid Bar | Mobile Hair Braiding in Providence, RI | Pop-up & Home Appointments
      </title>
      <meta
        name="description"
        content="The Braid Bar brings expert mobile hair braiding to Providence, RI. Box braids, knotless braids, feed-ins, twists, temporary color & tinsel. Pop-ups, private parties, and in-home appointments."
      />
      <meta
        name="keywords"
        content="mobile hair braiding Providence RI, box braids Providence, knotless braids RI, feed-in braids Providence, tinsel braids Providence, African hair braiding RI, braids near me Providence, braid pop-ups Providence"
      />
      <link rel="canonical" href="https://www.yourbraidbar.com/providence" />

      <a
        href="mailto:hello@yourbraidbar.com?subject=Booking%20Inquiry"
        className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full z-50 transition duration-300"
      >
        Book Now
      </a>

      <Navbar />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <Contact />
    </main>
     
  );
}



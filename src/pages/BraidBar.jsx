import React from "react";
import Navbar from "../components/Navbar";
import { Contact } from "../components/contact";
import Image1 from "../components/assets/BraidBar/BraidBar.png";
import Image2 from "../components/assets/BraidBar/BraidBar5.png";
import Image3 from "../components/assets/BraidBar/BraidBar3.png";
import Image4 from "../components/assets/BraidBar/BraidBar4.png";
import Image5 from "../components/assets/BraidBar/BraidBar2.png";
import Image6 from "../components/assets/BraidBar/BraidBar7.png";
import Image8 from "../components/assets/BraidBar/BraidBar8.png";
import Image9 from "../components/assets/BraidBar/BraidBar9.png";
import Image10 from "../components/assets/BraidBar/BraidBar10.png";
import Image11 from "../components/assets/BraidBar/BraidBar11.png"; 
import Image12 from "../components/assets/BraidBar/BraidBar13.png"; 




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
      kids party braids Providence RI, kids braids Providence RI, mobile kids braiding Providence RI, purple braids Providence RI, Rumi braids Providence RI, K-Pop braids Providence RI, Huntrix braids Providence RI, Demon Hunter braids Providence RI, kids braid stylist Providence RI, braid party Providence RI, box braids kids Providence RI, knotless braids kids Providence RI, feed-in braids kids Providence RI, temporary color braids Providence RI, tinsel braids kids Providence RI, Rumi K-Pop Demon Hunter braids Providence RI, Huntrix purple braids Providence RI, kids birthday braids Providence RI, mobile hair braiding Cranston RI, kids party braids Cranston RI, purple braids Cranston RI, Rumi braids Cranston RI, K-Pop braids Cranston RI, Huntrix braids Cranston RI, Demon Hunter braids Cranston RI, box braids kids Cranston RI, knotless braids kids Cranston RI, feed-in braids kids Cranston RI, kids birthday braids Cranston RI, mobile hair braiding East Providence RI, kids party braids East Providence RI, purple braids East Providence RI, Rumi braids East Providence RI, K-Pop braids East Providence RI, Huntrix braids East Providence RI, Demon Hunter braids East Providence RI, box braids kids East Providence RI, knotless braids kids East Providence RI, feed-in braids kids East Providence RI, kids birthday braids East Providence RI, mobile hair braiding Pawtucket RI, kids party braids Pawtucket RI, purple braids Pawtucket RI, Rumi braids Pawtucket RI, K-Pop braids Pawtucket RI, Huntrix braids Pawtucket RI, Demon Hunter braids Pawtucket RI, box braids kids Pawtucket RI, knotless braids kids Pawtucket RI, feed-in braids kids Pawtucket RI, kids birthday braids Pawtucket RI, mobile hair braiding Warwick RI, kids party braids Warwick RI, purple braids Warwick RI, Rumi braids Warwick RI, K-Pop braids Warwick RI, Huntrix braids Warwick RI, Demon Hunter braids Warwick RI, box braids kids Warwick RI, knotless braids kids Warwick RI, feed-in braids kids Warwick RI, kids birthday braids Warwick RI, mobile hair braiding Woonsocket RI, kids party braids Woonsocket RI, purple braids Woonsocket RI, Rumi braids Woonsocket RI, K-Pop braids Woonsocket RI, Huntrix braids Woonsocket RI, Demon Hunter braids Woonsocket RI, box braids kids Woonsocket RI, knotless braids kids Woonsocket RI, feed-in braids kids Woonsocket RI, kids birthday braids Woonsocket RI, mobile hair braiding Rhode Island, kids party braids Rhode Island, Rumi K-Pop Demon Hunter braids RI, Huntrix purple braiding RI, kids braids near me Providence RI, kids party braids near me Providence RI, birthday braids near me Providence RI, K-Pop hair braiding Providence RI, temporary color braids Rhode Island, kids festival braids RI, mobile braid pop-ups RI, Huntrix purple braids near me, Rumi K-Pop braids near me, kids braiding events RI, kids braids pop-up Providence RI, box braids pop-up RI, purple braids pop-up RI, birthday party braiding RI, mobile braiding parties RI, temporary color braid party RI, kids braids party Rhode Island, K-Pop themed braids Providence RI, Huntrix braiding hair Providence RI, Demon Hunter braids for kids RI, kids tinsel braids RI, Rumi braids birthday party Providence RI
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
  <img
    src={Image12}
    alt="Braided hair showcase"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

  {/* Content */}
  <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
    <div className="max-w-5xl">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold italic mb-4">
        The Kids Braid Bar - Mobile Hair Braiding - Majestic Braids
      </h1>
      <p className="text-2xl md:text-3xl mb-8 font-semibold">
        Beautiful, long-lasting braids — brought to your door. Pop-ups, parties, and in-home sessions by licensed braid artists.
      </p>
      <p className="text-base md:text-lg mb-8 text-gray-200 hidden">
        Box braids, knotless braids, feed-ins, twists, halo braids, temporary color, and tinsel extensions — Providence's top mobile braid service.
      </p>
      <div className="mt-10">
        <a
          href="mailto:hello@yourbraidbar.com?subject=Booking%20Inquiry"
          className="inline-block bg-[#73C2F4] text-black hover:bg-sky-600 hover:text-white font-semibold py-5 px-10 rounded-full text-1xl transition duration-300 uppercase "
        >
          Book Your Braids Now
        </a>
      </div>
    </div>
  </div>
</header>

);


const HowItWorks = () => (
  <section className="px-6 py-16 bg-white rounded-3xl gap-8 max-w-8xl mx-auto">
<div id="section2" className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
  {/* Left Column: Text */}
  <div>
    <h2 className="text-5xl font-bold mb-6 text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">What is the Braid Bar?</h2>
    <p className="mt-3 text-gray-600 text-[16px] mb-6">
      The Braid Bar is our mobile, boutique braid service built for festivals, private parties, and pop-ups — and yes, we also come to your home. Our team of licensed cosmetologists specializes in on-trend and classic braided looks: box braids, cornrows, feed-ins, twists, halo braids, and more.
    </p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-[16px]">
      <li>✨Licensed braid artists</li>
      <li>✨ Mobile & pop-up friendly</li>
      <li>✨ Kid-ready (ages 3+) and adults welcome</li>
      <li>✨ Temporary color extensions & tinsel options</li>
    </ul>
  </div>

  {/* Right Column: Image */}
  <div className="flex justify-center lg:justify-end">
    <img
      src={Image1}
      alt="Braided hair showcase"
      className="max-w-md object-cover"
    />
  </div>
</div>


     <div id="section3" className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
  {/* Left Column: Image */}
  <div className="flex justify-center lg:justify-start">
    <img
      src={Image6}
      alt="Braid process example"
      className=" max-w-md object-cover"
    />
  </div>

  {/* Right Column: Text */}
  <div>
    <h3 className="text-5xl font-semibold mb-6 text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic">How it works</h3>
    <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-3  text-[16px]">
      <li><strong>Choose a style</strong> from our menu (we’ll show photos & timing estimates).</li>
      <li><strong>Add color</strong> — clip-in tinsel, temporary extensions, or subtle highlights for the day.</li>
      <li><strong>Relax</strong> while our braid artist works their magic. We arrive on time with everything needed.</li>
      <li><strong>Shine on</strong> — finished looks are festival-ready and camera-friendly.</li>
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
    smallImage: Image1,
    largeImage: Image1,
    alt: "Braid style 1",
  },
  {
    title: "Braid Style 2",
    smallImage: Image2,
    largeImage: Image2,
    alt: "Braid style 2",
  },
  {
    title: "Braid Style 3",
    smallImage: Image3,
    largeImage: Image3,
    alt: "Braid style 3",
  },
  {
    title: "Braid Style 4",
    smallImage: Image4,
    largeImage: Image4,
    alt: "Braid style 4",
  },
  {
    title: "Braid Style 5",
    smallImage: Image5,
    largeImage: Image5,
    alt: "Braid style 5",
  },
  {
    title: "Braid Style 6",
    smallImage: Image6,
    largeImage: Image6,
    alt: "Braid style 6",
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
          <div key={i} className="w-72 h-72 rounded-xl overflow-hidden flex-shrink-0">
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
        $210 per hour per stylist — festival hair styles, temporary color extensions or clip-in tinsel included. Lasts 1–2 days for temporary color. Stylist can serve ~4–5 guests/hour.
      </p>
    </div>
  </div>

  <div id="booking" className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
    <a
      href="mailto:hello@yourbraidbar.com?subject=Booking%20Inquiry"
      className="inline-block px-6 py-3 rounded-full bg-[#73C2F4] text-white font-semibold"
    >
      Email to Book
    </a>
    <span className="text-gray-600 text-[16px]">
      or call/text <strong>(401) 555-0123</strong>
    </span>
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



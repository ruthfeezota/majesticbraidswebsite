import React, { useEffect, useRef, useState } from "react";

// USAGE:
// <Header
//   data={{ title: "Majestic Braids", paragraph: "Look & feel your best." }}
//   slide2={{
//     image: "/img/hero-slide-2.jpg",
//     title: "Pre‑order your hair",
//     text: "Pick it up at your appointment — fast, easy, ready to go.",
//     ctaLabel: "Shop Hair",
//     ctaHref: "https://example.com/shop"
//   }}
//   autoplayMs={6000}
// />

export const Header = ({ data, slide2, autoplayMs = 7000 }) => {
  const slides = ["video", "image"]; // slide 0 = original video, slide 1 = new image
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay
  useEffect(() => {
    if (!autoplayMs) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayMs);
    return () => clearInterval(timerRef.current);
  }, [autoplayMs]);

  // Pause on hover/focus for accessibility
  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (!autoplayMs) return;
    pause();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplayMs);
  };

  return (
    <>
      {/* Floating Book Now Button */}
      <a
        href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
        className="fixed bottom-6 right-6 bg-[#73C2F4] text-white hover:text-white hover:bg-sky-600 font-semibold py-4 px-8 rounded-full shadow-lg z-50 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        BOOK NOW!
      </a>

      <header id="header" className="relative">
        {/* Slider wrapper */}
        <section
          ref={containerRef}
          className="relative overflow-hidden"
          aria-roledescription="carousel"
          aria-label="Hero"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Slides track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
          >
            {/* Slide 1: Original VIDEO hero */}
            <div className="relative w-full shrink-0" style={{ width: `${100 / slides.length}%` }}>
              <div className="relative h-[80vh] min-h-[520px]">
             <video
  autoPlay
  muted
  playsInline
  loop
  className="absolute inset-0 w-full h-full object-cover z-0"
  aria-label="Majestic Braids video background"
>
  <source src="../img/LizStyle.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
                <div className="absolute inset-0 bg-black/30 z-10" />

                <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
                  <div className="max-w-5xl">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 italic">
                      {data ? data.title : "Loading"}
                      <span className="ml-2  inline-block rounded-full h-2 w-2 bg-white align-middle" />
                    </h1>
                    <p className="text-xl md:text-3xl mb-8 font-semibold">
                      {data ? data.paragraph : "Loading"}
                    </p>

                    <div className="mt-2">
                      <a
                        href="https://book.squareup.com/appointments/ssrk16cq70u9xm/location/L90W7ZYT50MKG/services"
                        className="inline-block bg-[#73C2F4] text-black hover:bg-sky-600 hover:text-white font-semibold py-4 px-10 rounded-full text-xl transition duration-300 uppercase"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: IMAGE + text + button */}
            <div className="relative w-full shrink-0" style={{ width: `${100 / slides.length}%` }}>
              <div className="relative h-[80vh] min-h-[520px]">
                {/* Background image */}
                <img
                  src={slide2?.image || "/img/portfolio/bannerboho.png"}
                  alt="Featured styles"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-10 lg:px-20 xl:px-32 text-center text-white">
                  <div className="max-w-4xl">
                    <h2 className="text-6xl md:text-8xl font-bold mb-4 text-white italic">
                      {slide2?.title || "Boho Fever: Pre‑order hair for Boho Braids"}
                    </h2>
                    <p className="text-xl md:text-4xl mb-8 font-medium">
                      {slide2?.text || "Order in advance and we’ll have it ready at your appointment."}
                    </p>
                    <div>
                      <a
                        href={slide2?.ctaHref || "https://majesticbraidsshop.square.site/s/shop"}
                        className="inline-block bg-[#73C2F4] text-black uppercase text-xl hover:bg-sky-600 hover:text-white font-semibold py-4 px-10 rounded-full transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {slide2?.ctaLabel || "Shop Now"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

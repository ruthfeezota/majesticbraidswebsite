import React from "react";
import ElizaImage from "../components/assets/ElizaPhoto.png";

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className={props.className}>
    <path
      fill="currentColor"
      d="M8.143 14.314a1 1 0 0 1-1.414 0l-3.536-3.536a1 1 0 1 1 1.414-1.414l2.829 2.829 7.071-7.071a1 1 0 0 1 1.414 1.414z"
    />
  </svg>
);

export const About: React.FC<{ data?: {
  paragraph?: string;
  Why?: string[];
  Why2?: string[];
} }> = ({ data }) => {
  const paragraph =
    data?.paragraph ??
    "Liz here, your local expert in African hair braiding—creative, precise, and passionate about helping you feel confident with vibrant, healthy styles.";

  const listLeft = data?.Why ?? [
    "Experienced: 10+ years in Providence",
    "Mobile: I come to you",
    "Protective styles that last",
  ];

  const listRight = data?.Why2 ?? [
    "Gentle, healthy hair care",
    "Detail-oriented & punctual",
    "Teaching background for at-home care",
  ];

  return (
    <section id="aboutus" className="bg-white">
      <div className="mx-auto  px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-[#E8F6FF] to-transparent blur-2xl"
            />
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 ">
              <img
                src={ElizaImage}
                alt="Liz, stylist at Majestic Braids, standing in studio"
                className="w-full min-h-[420px] md:max-h-[450px] object-cover object-[70%_30%]
"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">

<h2 className="mt-2 font-semibold text-gray-900 text-4xl md:text-6xl leading-tight text-center md:text-left">
  Most{" "}
  <span className="relative">
    <span className="text-sky-500 italic">Vibrant</span>
    <span
      aria-hidden="true"
      className="absolute left-0 right-0 -bottom-1 h-2 bg-sky-100 rounded-md"
    />
  </span>{" "}
  Braids in Providence
</h2>

            <p className="mt-6 text-gray-700 leading-relaxed font-sm md:font-lg">
              {paragraph}
            </p>

            <h3 className="mt-8 text-xl md:text-2xl font-bold text-gray-900">
              Why Choose Majestic Braids?{" "}
              <span className="text-sky-500 italic">
                The Best Mobile Braiding Salon in Providence
              </span>
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {listLeft.map((item, i) => (
                  <li key={`why-${i}`} className="flex gap-3">
                    <span className="mt-1 shrink-0 p-1.5">
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {listRight.map((item, i) => (
                  <li key={`why2-${i}`} className="flex gap-3">
                    <span className="mt-1 shrink-0 rounded-full p-1.5">
                      <Check className="h-3.5 w-3.5 text-sky-600" />
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

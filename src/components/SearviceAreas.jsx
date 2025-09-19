// ServiceAreas.tsx
import React from "react";

type City = { name: string; href: string };

const DEFAULT_CITIES: City[] = [
  { name: "Providence", href: "/providence" },
  { name: "Cranston", href: "/cranston" },
  { name: "Newport", href: "/newport" },
  { name: "Pawtucket", href: "/pawtucket" },
  { name: "Warwick", href: "/warwick" },
  { name: "Worcester", href: "/worcester" },
];

export const ServiceAreas: React.FC<{
  cities?: City[];
  ctaHref?: string;
  showJsonLd?: boolean;
}> = ({ cities = DEFAULT_CITIES, ctaHref = "/book", showJsonLd = true }) => {
  const areas = cities.map((c) => c.name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile & In-Salon Hair Braiding",
    areaServed: areas,q
    serviceType: "Hair Braiding",
    provider: { "@type": "LocalBusiness", name: "Majestic Braids" },
  };

  return (
    <section aria-labelledby="service-areas-title" className="bg-white">
      <div className="mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
        {/* Title */}
        <h2
          id="service-areas-title"
          className="text-7xl font-semibold mt-6 mb-10 text-[#73C2F4] italic"
        >
          Service Areas
        </h2>

        <p className="mt-4 text-2xl text-gray-600">
          We offer hair braiding in Rhode Island with both salon and mobile
          appointments:
        </p>

        {/* Cities */}
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <li key={city.name}>
              <a
                href={city.href}
                className="inline-flex items-center gap-2 rounded-full border border-sky-600  bg-white px-5 py-2.5 text-2xl font-medium text-sky-600 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {city.name}
                <span aria-hidden="true" className="text-gray-400">
                  •
                </span>
                <span className="text-gray-500">Mobile Braiding</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Extra text */}
        <p className="mt-8 text-2xl text-gray-700">
          Looking for <em>braids near me</em> outside these areas? Ask about
          extended travel.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://majesticbraidsshop.square.site/s/appointments"
            className="inline-flex items-center rounded-full px-7 py-4 text-2xl font-semibold hover:bg-sky-600  bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-black text-[#2C1755]"
          >
            Book Mobile Braiding Now
          </a>
        </div>
      </div>

      {showJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </section>
  );
};

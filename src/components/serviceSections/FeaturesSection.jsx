import React from "react";
import { Link } from "react-router-dom";

function Feature({ number, title, description, ctaText, ctaLink }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start mb-4">
        <div className="bg-orange-500 text-white xl:text-[28px] rounded-[12px] w-[52px] h-[56px] flex items-center justify-center mr-4 flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[28px] mb-2">{title}</h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[16px] text-gray-300 mb-2">{description}</p>
          <Link to={ctaLink} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[14px] text-orange-500 hover:text-white flex items-center">
            {ctaText} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      number: 1,
      title: "Trusted & Reliable",
      description: "We are known for our integrity and commitment to delivering authentic products every time.",
      ctaText: "Learn More",
      ctaLink: "#",
    },
    {
      number: 2,
      title: "Top Quality Products",
      description: "We distribute only the best engine oils that meet international standards for performance.",
      ctaText: "Contact",
      ctaLink: "#",
    },
    {
      number: 3,
      title: "Nationwide Presence",
      description: "With strategic locations across Nigeria, we ensure timely delivery of products to all regions.",
      ctaText: "Explore",
      ctaLink: "#",
    },
    {
      number: 4,
      title: "Customer-Centric Service",
      description: "We prioritize customer satisfaction with personalized service and consistent after-sales support.",
      ctaText: "Learn More",
      ctaLink: "#",
    },
    {
      number: 5,
      title: "Trusted Partnership",
      description:
        "We collaborate with leading brands and manufacturers to bring the highest quality products to our customers.",
      ctaText: "Contact",
      ctaLink: "#",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#3D2A20] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-12 text-left">What Sets Us Apart?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Feature
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              ctaText={feature.ctaText}
              ctaLink={feature.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
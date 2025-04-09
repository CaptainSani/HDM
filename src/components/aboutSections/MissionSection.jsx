import React from "react";
import handraised from "../../assets/images/hand-raised.jpeg";

export function MissionSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0 md:order-last">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-6">
            Our Mission
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-700 mb-6">
              To revolutionize the engine oil distribution in Nigeria by
              offering genuine products, exceptional service, and expert
              guidance, ensuring our customers always get the best.
            </p>
          </div>
          <div>
            <img
              src={handraised}
              alt="Person with arms raised in success pose"
              className="rounded-[32px] w-[437px] h-[575px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
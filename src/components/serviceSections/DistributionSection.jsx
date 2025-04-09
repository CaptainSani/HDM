import React from "react";
import Lady1 from "../../assets/images/Lady1.png";

export function DistributionSection() {
  return (
    <section className="py-12 md:py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Lady1}
              alt="Map showing branch locations"
              className="w-full max-w-[437px] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Nationwide Distribution
            </h2>
            <p className="text-lg md:text-xl">
              To serve you better, HDM LTD has multiple branches across{" "}
              <span className="font-semibold">
                Kano, Abuja FCT, Kaduna, Bauchi, Gombe, Yola, Katsina,
              </span>{" "}
              and beyond.
            </p>
            <p className="text-lg md:text-xl">
              Our extensive network ensures that our customers always have easy access to quality products,
              technical advice, and exceptional service.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

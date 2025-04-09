import React from "react";
import map from "../../assets/images/map-image.jpeg";

export function BranchesSection() {
  return (
    <section className="py-12 md:py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-6">Our Branches</h2>
            <p className="xl:text-[24px]">
              To serve you better, HDM LTD has multiple branches across <span className="font-semibold">Kano, Abuja FCT, Kaduna, Bauchi, Gombe, Yola,
              Katsina,</span> and beyond.
            </p>
            <p className="xl:text-[24px]">
              Our extensive network ensures that our customers always have easy access to quality products, technical
              advice, and exceptional service.
            </p>
          </div>
          <div>
            <img
              src={map}
              alt="Map showing branch locations" className="rounded-[32px] w-[437px] h-[575px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
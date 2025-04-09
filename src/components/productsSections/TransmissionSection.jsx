import React from "react";
import Image from "../../assets/images/tRectangle8.png";

const TransmissionSection = () => {
  return (
    <section className="py-12">
      

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Section (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="gallons"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-3xl font-bold mb-4">Transmission & Gear Oils</h4>
          <div className="text-lg leading-relaxed space-y-3">
            <p>Automatic Transmission Fluid (ATF)</p>
            <p>Manual Gear Oils for Smooth Shifting and Durability</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransmissionSection;

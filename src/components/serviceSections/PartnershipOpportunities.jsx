import React from "react";
import Image from "../../assets/images/handshakeRectangle8.png";

export default function PartnershipOpportunities() {
  return (
    <section className="py-12 md:py-16 bg-[#3d2a25]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Section: Text */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
              Partnership Opportunities
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              We welcome business collaborations with auto shops, fleet operators, and industrial companies looking for
              reliable engine oil supplies.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Handshake between business partners"
              className="w-full max-w-[437px] h-auto md:h-[575px] object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

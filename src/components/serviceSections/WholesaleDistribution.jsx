import React from 'react';
import Image from '../../assets/images/warehouse8.png';

export default function WholesaleDistribution() {
  return (
    <section className="py-12 md:py-16 bg-[#e9deb4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Warehouse with stacked boxes"
              className="w-full max-w-[437px] h-auto md:h-[575px] object-cover rounded-[32px]"
            />
          </div>

          {/* Right Section: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4 leading-tight">
              Wholesale & Retail Distribution
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              We supply engine oils in bulk to dealers, auto workshops, transport companies and industrial clients while
              also catering to individual customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

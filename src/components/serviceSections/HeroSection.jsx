import React from "react";
import Image from "../../assets/images/SsRectangle8.png";

export function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">
              Our Services
            </h1>
            <div className="text-base md:text-lg text-gray-700 space-y-4">
              <p>
                At Hamisu Dantinki Motors LTD, our services are designed to meet a
                diverse range of lubrication needs while ensuring exceptional
                quality and timely delivery across Nigeria.
              </p>
              <p>
                We offer comprehensive wholesale and retail distribution services,
                supplying engine oils and lubricants in bulk to dealers, auto
                workshops, transport companies, and industrial clients, while also
                catering to individual customers.
              </p>
              <p>
                This flexible distribution model ensures that whether you operate
                a large fleet or maintain a personal vehicle, you receive the best
                products available.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Image}
              alt="Hamisu Dantinki Motors Building"
              className="w-full max-w-[437px] h-auto md:h-[575px] object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

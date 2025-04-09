import React from "react";
import AZ from "../../assets/images/azlogoNew.png";
import customer from "../../assets/images/azTeam.png";

export function TestimonialSection() {
  return (
    <section className="py-12 md:py-16 bg-[#3D2A20] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">
          {/* Responsive Image */}
          <div className="w-full">
            <img
              src={customer}
              alt="Excited customer testimonial"
              className="rounded-[32px] w-full max-w-[561px] h-auto object-cover mb-8 md:mb-0 mx-auto"
            />
          </div>

          {/* Testimonial Text */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <p className="text-base sm:text-lg md:text-xl xl:text-2xl italic mb-4">
              "This company is very reliable and they deliver every time. We highly recommend them."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                A-Z Petroleum
              </p>
              <img
                src={AZ}
                alt="a-z Logo"
                className="h-16 sm:h-[100px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

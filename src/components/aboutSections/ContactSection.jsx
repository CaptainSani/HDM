import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/man-with-phone.jpeg";

export function ContactSection() {
  return (
    <section
      className="relative py-12 md:py-16 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 text-left">
        <h2 className="text-2xl md:text-3xl xl:text-[48px] font-semibold mb-6">
          Get In Touch with Us
        </h2>
        <p className="text-base md:text-lg xl:text-[24px] mb-8">
          Contact us today for more information or to place your order.
        </p>

        <div className="flex flex-col sm:flex-row justify-left gap-8">
          <Link
            to="/contact-us"
            className="rounded-[12px] bg-white text-[#2A5674] px-6 py-3 font-medium text-base sm:text-lg hover:bg-gray-300 transition-colors"
          >
            Contact Us
          </Link>
          
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image1 from "../../assets/images/pRectangle8.png";

const HeroSection = () => {
  return (
    <section className="bg-[#D1CAA1] py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-x-10 lg:gap-x-20">
        
        {/* Left Section (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-medium pb-6">Our Products</h2>
          
          <p className="text-lg leading-relaxed">
            At Hamisu Dantinki Motors LTD, we are proud to offer an extensive
            range of premium engine oils, lubricants, and automotive fluids 
            sourced from globally recognized brands renowned for their 
            exceptional quality and performance.
          </p>
          <p className="text-lg leading-relaxed pt-4">
            Our carefully curated selection includes industry leaders such as 
            <strong> TotalEnergies, Mobil, MRS, Castrol, Shell, Conoil, Ammasco, Sea Horse, Abro, LB, Trust Lub, and Hyundai</strong>.
            By partnering with these trusted names, we ensure every product in our portfolio meets rigorous international standards.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={Image1} alt="gallons of oil" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

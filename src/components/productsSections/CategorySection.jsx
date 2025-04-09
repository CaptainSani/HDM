import React from "react";
import Image from "../../assets/images/pRectangle81.png";

const CategorySection = () => {
  return (
    <section className="bg-[#D1CAA1] py-12">
      {/* Centered Heading */}
      <h5 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Product Categories</h5>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Section (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-3xl font-bold mb-4">Engine Oils</h4>
          <div className="text-lg leading-relaxed space-y-3">
            <p>Fully synthetic, semi-synthetic & mineral oils</p>
            <p>High-performance motor oils for gasoline and diesel engines</p>
            <p>Heavy-duty lubricants for trucks, trailers, and machines</p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="gallon"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default CategorySection;

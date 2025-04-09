import React from "react";
import Image from "../../assets/images/consultation.png";

const ExpertSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Section (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h4 className="text-3xl font-bold mb-4">Expert Consultation & Product Recommendation</h4>
          <div className="text-lg leading-relaxed space-y-3">
            <p>Not sure which oil is right for your vehicle or machinery?</p>
            <p>Our team of lubrication experts is always ready to provide professional guidance to help you choose the best product.</p>
          </div>
        </div>
        
        {/* Right Section (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="consultation"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;

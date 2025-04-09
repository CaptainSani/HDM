import React from 'react'
import Image from "../../assets/images/sRectangle8.png"

const SpecialtySection = () => {
  return (
    <section className='bg-[#412722] py-12 '>
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
                <div className="lg:w-1/2 text-center lg:text-left text-amber-50">
                  <h4 className="text-3xl font-bold mb-4">Specialty Lubricants & Additives</h4>
                  <div className="text-lg leading-relaxed space-y-3">
                    <p>Coolants</p>
                    <p>Brake Fluid</p>
                    <p>Fuel Additives for engine optimization</p>
                  </div>
                </div>
        
              </div>

    </section>
  )
}

export default SpecialtySection
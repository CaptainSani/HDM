import React from 'react'
import Image from "../../assets/images/iRectangle8.png"

const IndutrialSection = () => {
  return (
    <section className='bg-[#FC7A1E] py-12'>
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                
                {/* Left Section (Text) */}
                <div className="lg:w-1/2 text-center lg:text-left text-amber-50">
                  <h4 className="text-3xl font-bold mb-4">Industrial Lubricatnts</h4>
                  <div className="text-lg leading-relaxed space-y-3">
                    <p>Hydraulic Oils</p>
                    <p>Grease for machinery and indusrial applications</p>

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
  )
}

export default IndutrialSection
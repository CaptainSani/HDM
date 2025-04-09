import React from 'react';
import happyman from '../../assets/images/excited-man.jpeg';
import Image from '../../assets/images/hamisu1.png';
import Image2 from '../../assets/images/hamisu2.png'

export function CommitmentSection() {
  return (
    <section className="py-12 md:py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold mb-6">Our Commitment to Excellence</h1>
          <p className="text-base sm:text-lg md:text-[20px] text-gray-700 mb-6 max-w-3xl mx-auto">
            At Hamisu Dantinki Motors LTD, we understand that high-performance engines require the best lubricants to
            function optimally. That's why we specialize in distributing superior engine oils, ensuring maximum engine
            protection, fuel efficiency, and longevity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              src={Image}
              alt="Excited customer" className="rounded-[20px] w-[389px] h-[412px] object-cover"
            />
          </div>
          <div>
            <img
              src={happyman} alt="Team members in discussion" className="rounded-[20px] w-[389px] h-[412px] object-cover"
            />
          </div>
          <div>
          <img src={Image2} alt="Man meditating" className="rounded-[20px] w-[389px] h-[412px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}


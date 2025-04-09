import React, { useEffect } from "react";
import Man from "../assets/images/man1.png";
import Horse from "../assets/images/horse.png";
import Startup from "../assets/images/startup.png";
import Moving from "../assets/images/movingicon.png";
import Support from "../assets/images/supporticon.png";
import Innovate from "../assets/images/innovateicon.png";
import Lady1 from "../assets/images/Lady1.png";
import { TestimonialSection } from "./aboutSections/TestimonialSection";
import { ContactSection } from "./aboutSections/ContactSection";
import { Link } from 'react-router-dom';
import image1 from "../assets/images/image-1.svg";
import image2 from "../assets/images/Rectangle2.png";
import image3 from "../assets/images/Rectangle3.png";
import image4 from "../assets/images/image-2.svg";
import image5 from "../assets/images/image-3.svg";
import image6 from "../assets/images/Rectangle6.png";
import image7 from "../assets/images/Rectangle7.png";
import image8 from "../assets/images/image-4.svg"

const Hero = () => {
  useEffect(() => {
    const calculateImageWidths = () => {
      const firstRowImages = document.querySelectorAll('.div-one img');
      let totalWidth = 0;

      firstRowImages.forEach((img, index) => {
        if (index < firstRowImages.length / 2) {
          totalWidth += img.offsetWidth;
        }
      });

      const animationDuration = Math.max(20, totalWidth / 50);

      document.documentElement.style.setProperty('--scroll-duration', `${animationDuration}s`);
    };

    window.addEventListener('load', calculateImageWidths);

    const timer = setTimeout(calculateImageWidths, 500);

    return () => {
      window.removeEventListener('load', calculateImageWidths);
      clearTimeout(timer);
    };
  }, []);

  const firstRowImages = [image1, image2, image3, image4];
  const secondRowImages = [image5, image6, image7, image8];


  return (
    <div>
      <div className="flex items-center justify-center text-center text-6xl font-bold pt-50">
        <div>
          Unleash Performance with
          <span className="block py-5">
            Our Premium <span className="text-orange-500">Engine Oils</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center text-center text-lg font-semi px-4">
        <div>
          <span className="block pt-3">
            Experience the power of superior engine protection withour high
            quality engine oils.
          </span>
          <span className="block pt-3">
            Designed to enhance performance and extend engine life, our products
            are your
          </span>
          <span className="block pt-3">
            trusted choice for optimal vehicle care
          </span>
          <Link to="/about-us">
            <button className="bg-orange-500 text-white text-xl font-semi px-6 py-3 rounded-lg hover:bg-orange-600 mt-6 mb-5 hover:scale-105 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full img-div">
        <div className="div-one">
          {firstRowImages.map((img, index) => (
            <img key={`row1-orig-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}

          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
        </div>
        <div className="div-two">
          {secondRowImages.map((img, index) => (
            <img key={`row2-orig-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
        </div>
      </div>

      <div>
      {/* Efficient Distribution Section */}
      <section className="bg-[#D1CAA1] py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">Efficient Engine Oil Distribution</h2>
        <p className="text-xl max-w-3xl mx-auto mt-5">
          We ensure timely delivery of high-quality engine oils, prioritizing reliability and efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {[
            { img: Man, title: "Why Choose Our Services?", desc: "A seamless distribution experience tailored for you." },
            { img: Horse, title: "Commitment to Quality", desc: "Every delivery meets high standards." },
            { img: Startup, title: "Get Started Today", desc: "Join us for reliable engine oil solutions." },
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="text-center max-w-xs">
              <img src={img} alt={title} className="w-72 h-48 mx-auto object-cover rounded-xl" />
              <h3 className="text-xl font-semibold mt-4">{title}</h3>
              <p className="mt-2 text-lg">{desc}</p>
            </div>
          ))}
        </div>
        <Link to="/services">
          <button className="mt-6 bg-white text-black text-lg px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition duration-300">
            Learn More
          </button>
        </Link>
      </section>

      {/* Quality Section */}
      <section className="bg-[#412722] text-amber-50 py-16 px-4 text-center">
        <h2 className="text-5xl font-bold">Unmatched Quality: Engine oils that</h2>
        <h2 className="text-5xl font-bold mt-3">Exceed Industry Standards</h2>
        <h2 className="text-5xl font-bold mt-3">For Performance</h2>

        <div className="flex flex-wrap justify-center gap-10 pt-16">
          {[{ img: Moving, title: "Wide Distribution", desc: "Ensuring availability nationwide" },
            { img: Support, title: "Dedicated Support", desc: "Exceptional customer service to meet your needs" },
            { img: Innovate, title: "Innovative Solutions", desc: "Advanced formulations for optimal engine performance" }
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="max-w-xs text-center">
              <img src={img} alt={title} className="w-20 h-20 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">{title}</h3>
              <p className="text-lg font-light mt-2">{desc}</p>
              <Link to={index === 0 ? "/about-us" : index === 1 ? "/contact-us" : "/products"}>
                <button className="block text-2xl font-light underline mt-2">Learn more</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-[#FC7A1E] py-16 text-white flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="max-w-lg pl-10">
          <h2 className="text-5xl">Discover Our Impressive</h2>
          <h2 className="text-5xl mt-3">Achievements in Engine Oil</h2>
          <h2 className="text-5xl mt-3 pb-10">Distribution</h2>
          <p className="text-1xl">
            With over 20 years in the industry, we have established ourselves as a trusted leader in engine oil distribution.
          </p>
          <p className="text-1xl mt-4">
            Our commitment to quality and customer satisfaction has resulted in thousands of satisfied clients.
          </p>
          <div className="flex gap-10 mt-7">
            <div>
              <h3 className="text-7xl font-bold">1M+</h3>
              <p className="text-2xl">Gallons of Oil distributed annually.</p>
            </div>
            <div>
              <h3 className="text-7xl font-bold">95%</h3>
              <p className="text-2xl">Client satisfaction rate based on feedback.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <img src={Lady1} alt="Lady" className="max-w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Testimonial & Contact Sections */}
      <TestimonialSection />
      <ContactSection />
    </div>
    </div>
  );
};

export default Hero;

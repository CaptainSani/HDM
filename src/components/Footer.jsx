import React from "react";
import Logo from "../assets/images/logoHDM.svg";
import Facebook from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-gray-100 px-6 py-12 md:px-20">
      {/* Main Content */}
      <div className="flex flex-wrap justify-between gap-10">
        {/* Company Info */}
        <div className="max-w-sm">
          <img src={Logo} alt="Logo" className="w-32 h-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Head Office</h4>
          <p className="text-gray-700">
            No. 275 Naibawa Central Park, Zaria Road, Kano State, Nigeria
          </p>

          <h4 className="text-xl font-semibold mt-4 mb-2">Other Branches</h4>
          <ul className="text-gray-700 space-y-1">
            <li>No. 20 U/Uku Motor Park, Zaria Road, Kano State</li>
            <li>Mariri Motor Park, Maiduguri Road, Opp. Yan Itace, Kano</li>
            <li>No. 1C Kofar Ruwa Market, Kano State</li>
            <li>Kofar Wambai Motor Park, Kano State</li>
            <li>Kabuga, By Muhammadu Buhari Way, Kano State</li>
          </ul>
          <p className="mt-3 text-gray-700">And many more across Nigeria</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-orange-500 transition"><a href="/">Home</a></li>
            <li className="hover:text-orange-500 transition"><a href="/about-us">About Us</a></li>
            <li className="hover:text-orange-500 transition"><a href="/contact-us">Contact Us</a></li>
            <li className="hover:text-orange-500 transition"><a href="/products">Products</a></li>
            <li className="hover:text-orange-500 transition"><a href="/services">Services</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 flex-col gap-y-5">
            <div className="flex flex-row items-center gap-x-3">
            <a
              href="https://www.facebook.com/share/16MTPwjxtB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" className="w-10 h-10 hover:scale-110 transition" />
            </a>
            <p>Facebook</p>
            </div>
            <div className="flex flex-row items-center gap-x-3">
            <a
              href="https://www.instagram.com/hamisudantinki?igsh=MThhcmNuZ3Z1eXdneQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
            </a>
            <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Footer Text */}
      <div className="text-center text-gray-600">
        © {getCurrentYear()} Hamisu Dantinki Motors LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

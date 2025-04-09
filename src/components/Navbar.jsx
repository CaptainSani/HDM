import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/images/logoHDM.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false); // Close menu on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Function to scroll to the top when a link is clicked
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50"
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo - Adjusted Position */}
        <div className="pl-6">
          <Link to="/" onClick={handleClick}>
            <motion.img
              src={Logo}
              alt="logo"
              className="w-32 h-24"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {["About Us", "Products", "Services"].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:text-orange-500 transition"
                onClick={handleClick}
              >
                {item}
              </Link>
            </motion.div>
          ))}

          {/* Contact Us - Shifted Left */}
          <Link to="/contact-us" onClick={handleClick}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition mr-6"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6 text-center mt-4">
          {["About Us", "Products", "Services"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="hover:text-orange-500"
              onClick={handleClick}
            >
              {item}
            </Link>
          ))}

          {/* Contact Us - Mobile View */}
          <Link to="/contact-us" onClick={handleClick}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

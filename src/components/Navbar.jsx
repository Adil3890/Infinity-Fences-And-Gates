import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaBars,
  FaGripLinesVertical,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import logo from "../assets/logo/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for programmatic navigation

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu and navigate to the page
  const handleNavItemClick = (path) => {
    setIsMobileMenuOpen(false); // Close the menu
    navigate(path); // Redirect to the selected page
  };

  return (
    <header className="bg-bluish text-white">
      {/* Top info bar */}
      <div className="container mx-auto flex-col md:flex-row items-center justify-between px-4 md:px-14 py-3 hidden md:flex">
        <div className="flex items-center space-x-6 text-white">
          <span className="flex items-center space-x-2 text-[15px] font-500 leading-[27.8571px]">
            <MdMailOutline className="text-xl" />
            <span>infinityfencesandgates@gmail.com</span>
          </span>
          <FaGripLinesVertical className="text-2xl" />
          <span className="flex items-center space-x-2 text-[15px] font-500 leading-[27.8571px]">
            <FaPhoneAlt className="text-xl" />
            <span>0426 367 181</span>
          </span>
          <FaGripLinesVertical className="text-2xl" />
          <span className="flex items-center space-x-2 text-[15px] font-500 leading-[27.8571px]">
            <FaMapMarkerAlt className="text-xl" />
            <span>Charlemont 3217</span>
          </span>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-2 mt-2 md:mt-0">
          <Link
            to="https://wa.me/0426367181"
            className="text-white bg-green-500 text-xl p-2 rounded-full"
            target="_blank"
          >
            <FaWhatsapp />
          </Link>

          <Link
            to="https://www.facebook.com/share/NWaxwL62epQfCEen/?mibextid=LQQJ4d"
            className="text-white bg-blue-500 text-xl p-2 rounded-full"
            target="_blank"
          >
            <FaFacebookF />
          </Link>

          <a
            href="tel:0426367181"
            className="text-white bg-blue-700 text-xl p-2 rounded-full"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="mailto:abdullah311002@gmail.com"
            className="text-white bg-red-500 text-xl p-2 rounded-full"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-gray-100 text-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-14 max-w-screen-xl">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-start">
            <img
              src={logo}
              alt="Infinity Fences and Gates"
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <div className="flex-grow hidden md:flex items-center justify-between space-x-4">
            {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "CONTACT US"].map(
              (item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="font-lora text-md text-gray-800 hover:text-light-buish transition-transform duration-300 hover:scale-125"
                  >
                    {item}
                  </Link>
                  {index < 4 && (
                    <FaGripLinesVertical className="text-bluish mx-2 text-xl" />
                  )}
                </React.Fragment>
              )
            )}
            <Link
              to="/contactus"
              className="border-2 border-bluish bg-bluish text-white py-2 px-3 rounded-xl hover:bg-white hover:text-bluish font-bold transition-colors duration-300 focus:outline-none"
            >
              BOOK NOW
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-gray-100 transition-all duration-300 ease-in-out`}
        >
          {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "CONTACT US"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() =>
                  handleNavItemClick(
                    `/${item.toLowerCase().replace(/\s+/g, "")}`
                  )
                }
                className="block py-2 px-4 text-sm hover:bg-gray-200 w-full text-left"
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={() => handleNavItemClick("/contactus")}
            className="block py-2 px-4 border-2 border-bluish bg-bluish text-white rounded-xl italic font-bold text-center w-full"
          >
            BOOK NOW
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

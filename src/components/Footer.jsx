import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaBriefcase,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between text-gray-600">
            {/* Logo and Description */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <div className="flex flex-col items-start px-3">
                <img src={logo} alt="Company Logo" className="h-16 mb-4" />
                <p className="text-sm">
                  We provide affordable and professional fencing and gate
                  services throughout Victoria, with a special focus on Infinity
                  and Melbourne. Our commitment to quality ensures that every
                  project is handled with precision, delivering reliable and
                  aesthetically pleasing solutions for both residential and
                  commercial properties.
                </p>
                <Link
                  to="/aboutus"
                  className="text-blue-600 mt-2 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/aboutus" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:underline">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Colorbond Fencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/timber"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Timber Fencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/picket"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Picket Fencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/aluminium"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Aluminum Fencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/pedestrian-driver"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Pedestrian/Driveway Gates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/farm-fencing"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Farm Fencing and Gates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/installation-repair"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Fencing Installation and Repair
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="w-full sm:w-1/4">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span>Infinity Fences and Gates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBriefcase />
                  <span>ABN: 55962786506</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope />
                  <span>infinityfencesandgates@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt />
                  <span>0426 367 181</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkedAlt />
                  <span>Corio, VIC 3214</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-bluish p-4 mt-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-52">
          {/* Text section */}
          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            <p className="text-white">
              © 2019 – 2023 All Rights Reserved by{" "}
              <span className="text-black hover:text-white cursor-pointer">
                INFINITY FENCES AND GATES
              </span>
            </p>
          </div>

          {/* Icons section */}
          <div className="flex space-x-2 mt-2 md:mt-0 mr-12">
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
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import icon
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Button = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 bg-gray-50 h-[300px]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
        NEED ESTIMATES?
      </h2>
      <Link to="/contactus">
        <button className="flex items-center space-x-2 px-6 py-3 border-2 border-bluish rounded-full text-gray-800 font-semibold hover:bg-light-buish hover:text-white transition duration-300">
          <span>CONTACT US NOW</span>
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Button;

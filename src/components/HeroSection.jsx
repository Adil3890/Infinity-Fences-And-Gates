import React, { useState } from "react";
import { motion } from "framer-motion";
import gate1 from "../assets/cards/card3.jpeg";
import gate3 from "../assets/hero/gate3.jpg";
import gate4 from "../assets/hero/gate4.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    src: gate1,
    text: "FENCING CONTRACTOR IN INFINITY",
    description:
      "As the most trusted fencing contractor in your area, we specialize in durable fences, gates, and retaining walls. From installation to repair and maintenance, we cater to both residential and commercial clients, ensuring top-tier craftsmanship and lasting solutions.",
  },
  {
    src: gate3,
    text: "QUALITY FENCE SUPPLIES",
    description:
      "We provide premium-quality fence and gate supplies designed for durability and aesthetic appeal. Whether you're looking to enhance security or style, we offer a range of products to suit your residential or commercial needs, backed by expert guidance and support.",
  },
  {
    src: gate4,
    text: "RELIABLE INSTALLATION",
    description:
      "Our installation services are defined by reliability and precision. From automated gates to boundary fences, we ensure every project is completed to the highest standard, providing you with peace of mind and a product you can trust for years to come.",
  },
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentImage].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8, // Set the desired opacity for the image
        }}
      />

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Text div with animation */}
      <motion.div
        key={currentImage} // Reset animation when currentImage changes
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-5 top-1/4 md:top-1/3 transform -translate-y-1/2 p-4 rounded w-full 
             sm:w-11/12 md:w-3/4 lg:w-1/2"
      >
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
               font-bold leading-tight"
        >
          {images[currentImage].text}
        </h1>

        <p
          className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl 
               text-left leading-relaxed" // Adjusted line height for readability
        >
          {images[currentImage].description}
        </p>

        <Link
          to="/aboutus"
          className="mt-4 inline-block bg-bluish text-white py-2 px-4 rounded 
               text-xs sm:text-sm md:text-base lg:text-lg 
               ml-0 md:ml-8" // Adjust text size and margin-left responsively
        >
          Read More
        </Link>
      </motion.div>

      {/* Dots for changing background image */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === currentImage ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

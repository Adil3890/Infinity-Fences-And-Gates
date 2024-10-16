import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image1 from "../assets/cards/card1.jpeg";
import image2 from "../assets/cards/card2.jpeg";
import image3 from "../assets/cards/card3.jpeg";
import image4 from "../assets/cards/card4.jpeg";
import image5 from "../assets/cards/card5.jpeg";
import image7 from "../assets/cards/card7.jpeg";
import image8 from "../assets/cards/fencing1.jpg";
import image11 from "../assets/cards/Picket-Fencing-1.webp";
import image12 from "../assets/cards/Picket-Fencing-4.webp";

// Sample data for images and categories
const categories = [
  { name: "ALL", filter: "all" },
  { name: "COLORBOND FENCING", filter: "colorbond" },
  { name: "FARM FENCING", filter: "farm" },
  { name: "PICKET FENCING", filter: "picket" },
  { name: "TIMBER FENCING", filter: "timber" },
  { name: "FENCING INSTALLATION AND REPAIR", filter: "installation" },
];

// Sample image data - Replace with actual images
const imageData = [
  { url: image7, category: "colorbond" },
  { url: image2, category: "installation" },
  { url: image1, category: "timber" },
  { url: image5, category: "colorbond" },
  { url: image12, category: "picket" },
  { url: image3, category: "timber" },
  { url: image4, category: "colorbond" },
  { url: image8, category: "farm" },
  { url: image11, category: "picket" },
  // More image data...
];

const FencingGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation(); // Get the current URL path

  // Filter images based on the selected category
  const filteredImages =
    selectedCategory === "all"
      ? imageData
      : imageData.filter((img) => img.category === selectedCategory);

  return (
    <div className="container mx-auto py-10 px-5">
      {/* Category Buttons */}
      <h2 className="text-3xl font-bold text-center mb-6">OUR EXPERIENCE</h2>
      <div className="flex flex-wrap justify-center mb-8 space-y-3 sm:space-y-0 sm:space-x-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category.filter)}
            className={`w-full sm:w-auto px-4 py-2 rounded ${
              selectedCategory === category.filter
                ? "bg-darkblue text-bluish"
                : "bg-gray-200"
            } hover:scale-105 hover:bg-darkblue hover:text-bluish transition-all`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt={`Fence ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Conditionally render the Read More button */}
      {(location.pathname === "/" || location.pathname === "/home") && (
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="mt-4 inline-block bg-bluish text-white py-2 px-4 rounded text-xs md:text-base lg:text-lg md:ml-10"
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  );
};

export default FencingGallery;

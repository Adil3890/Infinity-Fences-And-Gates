import React, { useState } from "react";
import image1 from "../assets/cards/card11.jpg";
import { FaPlus, FaMinus, FaRegHandPointRight } from "react-icons/fa";
import img2 from "../assets/cards/fencing1.jpg";
import img3 from "../assets/cards/fencing2.jpg";
import img4 from "../assets/hero/gate2.png";
import img5 from "../assets/hero/gate3.jpg";
import img6 from "../assets/cards/fencing4.jpg";
import {
  fencingTypes,
  materials,
  gateTypes,
  gateAutomation,
  factorsToConsider,
} from "../assets/data";

const Farm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Farm Fencing Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50">
        <div className="md:w-1/2 text-justify space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Farm Fencing And Gate Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Farm fencing and gate services focus on the installation,
            maintenance, and repair of essential infrastructure for agricultural
            properties. These services play a key role in securing livestock,
            protecting crops, defining property boundaries, and managing access
            across various sections of the farm.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            High-quality fences are critical for keeping livestock safely
            contained and safeguarding crops from wildlife or unauthorized
            entry. Gates provide controlled access points, ensuring ease of
            movement without compromising security. Using durable materials such
            as wood, wire, or metal ensures the longevity of fences and gates in
            different environmental conditions. Well-designed and properly
            maintained fencing not only boosts operational efficiency but also
            helps protect valuable farm resources.
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src={image1}
            alt="Fencing Solutions"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Types of Fencing */}
      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-50">
        {/* Image Section on the Left */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src={img2} // Replace with your desired image path
            alt="Types of Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section on the Right */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
            <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
            <span>1. Types of Fencing</span>
          </h2>
          <div className="space-y-4">
            {fencingTypes.map((type, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 bg-white shadow-md rounded-md"
                  onClick={() => togglePanel(index)}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {type.title}
                  </h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-bluish" />
                  ) : (
                    <FaPlus className="text-bluish" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed p-3 sm:p-4 text-gray-700">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Types of Material */}
      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-50">
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
            <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
            <span>2. Material</span>
          </h2>
          <div className="space-y-4">
            {materials.map((type, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 bg-white shadow-md rounded-md"
                  onClick={() => togglePanel(index)}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {type.title}
                  </h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-bluish" />
                  ) : (
                    <FaPlus className="text-bluish" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed p-3 sm:p-4 text-gray-700">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src={img3}
            alt="Types of Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Types of Gates */}
      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-50">
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src={img4}
            alt="Types of Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
            <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
            <span>3. Gate Types</span>
          </h2>
          <div className="space-y-4">
            {gateTypes.map((type, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 bg-white shadow-md rounded-md"
                  onClick={() => togglePanel(index)}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {type.title}
                  </h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-bluish" />
                  ) : (
                    <FaPlus className="text-bluish" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed p-3 sm:p-4 text-gray-700">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Gates Automation */}
      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-50">
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
            <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
            <span>4. Gate Automation</span>
          </h2>
          <div className="space-y-4">
            {gateAutomation.map((type, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 bg-white shadow-md rounded-md"
                  onClick={() => togglePanel(index)}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {type.title}
                  </h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-bluish" />
                  ) : (
                    <FaPlus className="text-bluish" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed p-3 sm:p-4 text-gray-700">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src={img5}
            alt="Types of Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Factors */}
      <div className="flex flex-col md:flex-row items-start justify-between bg-gray-50">
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <img
            src={img6}
            alt="Types of Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center space-x-2 mb-6">
            <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
            <span>5. Factors</span>
          </h2>
          <div className="space-y-4">
            {factorsToConsider.map((type, index) => (
              <div key={index} className="border-b border-gray-300 pb-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 sm:p-4 bg-white shadow-md rounded-md"
                  onClick={() => togglePanel(index)}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {type.title}
                  </h3>
                  {activeIndex === index ? (
                    <FaMinus className="text-bluish" />
                  ) : (
                    <FaPlus className="text-bluish" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed p-3 sm:p-4 text-gray-700">
                    {type.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Maintainence */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center space-x-2 mb-6">
          <FaRegHandPointRight className="text-bluish text-2xl sm:text-3xl md:text-4xl" />
          <span>6. Maintenance</span>
        </h2>

        <ol className="list-decimal list-inside text-left text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 space-y-2">
          <li>
            Regular cleaning and inspections ensure the longevity of fences and
            gates, preventing wear and tear from becoming major issues over
            time.
          </li>
          <li>
            Applying protective coatings like sealants, stains, or rust
            inhibitors helps shield materials from weather damage, corrosion,
            and decay.
          </li>
          <li>
            Lubricating gate hinges and mechanical components ensures smooth
            operation and reduces the chance of squeaking or malfunctioning
            gates.
          </li>
        </ol>

        <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Proper maintenance not only extends the lifespan of farm fencing and
          gates but also ensures they remain functional, safe, and visually
          appealing. A well-maintained fence contributes significantly to the
          efficiency and security of the agricultural environment.
        </p>
      </div>
    </>
  );
};

export default Farm;

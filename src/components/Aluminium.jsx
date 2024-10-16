import React from "react";
import image1 from "../assets/cards/card10.jpg";
import image2 from "../assets/cards/card11.jpg";
import image3 from "../assets/cards/card12.jpg";
import { FaRegHandPointRight } from "react-icons/fa";
import { aluminumFenceFeatures } from "../assets/data";

const Aluminium = () => {
  return (
    <>
      <div className="flex flex-col space-y-12 p-4 md:p-8 bg-gray-50">
        {/* First Section: Image and Text in Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src={image1}
              alt="Fencing Solutions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center space-x-2">
              <span>Aluminum Fencing</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              If you’re looking for the elegant appearance of a wrought iron
              fence but need a more budget-friendly solution, an aluminum fence
              is the perfect alternative. One of the standout benefits of
              aluminum fencing is its virtually maintenance-free design,
              ensuring long-lasting beauty with minimal upkeep. At Infinity
              Fencing and Gates Service, we offer an extensive selection of
              aluminum fence styles to suit various needs and preferences. For
              unique projects, we also provide custom-designed panels tailored
              to your specific requirements, delivering both style and
              functionality at an affordable price.
            </p>
          </div>
        </div>

        {/* Second Section: Image and Text in Row */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src={image2}
              alt="Fencing Solutions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center space-x-2">
              <FaRegHandPointRight className="text-bluish text-3xl sm:text-4xl md:text-5xl" />
              <span>Quality Fencing</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 px-4">
              As a leading aluminum fence provider in Orland Park and the
              surrounding suburbs, Infinity Fences and Gates is committed to
              delivering the highest quality materials available on the market.
              Our fences feature a specialized powder-coating process that
              creates a more durable exterior finish, making them more resistant
              to scratches compared to standard painted aluminum products. This
              ensures that our fences maintain their appearance and integrity
              over time, even in the harsh weather conditions of the Chicagoland
              area.
            </p>
          </div>
        </div>

        {/* Third Section: Image and Text in Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src={image3}
              alt="Decorative Aluminum Fencing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center space-x-2">
              <FaRegHandPointRight className="text-bluish text-3xl sm:text-4xl md:text-5xl" />
              <span>Decorative Fencing</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Furthermore, aluminum fencing can be finished with decorative
              features, various colors, and optional extras, offering a wide
              range of model combinations to inspire creativity. Aluminum's
              resistance to rust means it does not need painting and involves no
              additional maintenance costs.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              We proudly collaborate with well-known manufacturers, adding a
              variety of decorative aluminum fences to our collection. Our
              long-standing partnerships ensure you have access to high-quality
              materials with stunning finishes that maintain their beauty and
              durability over time.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 bg-white">
        {aluminumFenceFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 mb-8 border-b pb-4 border-gray-200"
          >
            <FaRegHandPointRight className="text-bluish text-3xl sm:text-4xl md:text-5xl" />
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Aluminium;

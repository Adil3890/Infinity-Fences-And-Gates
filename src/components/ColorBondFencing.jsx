import React from "react";
import image1 from "../assets/cards/card7.jpeg";
import image2 from "../assets/cards/card4.jpeg";
import { FaRegHandPointRight } from "react-icons/fa";

const ColorBondFencing = () => {
  const features = [
    {
      title: "WHAT IS COLORBOND FENCING?",
      description:
        "Colorbond fencing is a modern steel fencing solution known for its durability, security, and aesthetic appeal. It is manufactured from high-quality, pre-painted steel designed to withstand harsh weather conditions. This type of fencing offers excellent privacy, strength, and low environmental impact, making it a preferred choice for residential and commercial properties.",
    },
    {
      title: "ROT & RUST RESISTANT",
      description:
        "Colorbond fencing is made from galvanized steel, which prevents rusting and rotting, even when exposed to rain or humidity. Unlike timber fences that attract termites and warp over time, Colorbond fences remain intact and require no treatment for pests. Additionally, they are fire-resistant, making them suitable for areas prone to extreme weather and bushfires.",
    },
    {
      title: "MAINTENANCE-FREE",
      description:
        "Designed with convenience in mind, Colorbond fences require minimal maintenance. With no need for repainting or staining, these fences are resistant to peeling, cracking, and fading over time. Homeowners can enjoy a fence that stays looking fresh and vibrant with just an occasional wash to remove dirt or debris.",
    },
    {
      title: "MULTIPLE USES & AESTHETIC APPEAL",
      description:
        "Colorbond fencing offers versatility, making it suitable for various applications, including boundary fences, garden enclosures, and pool fencing. Available in a wide range of colors and designs, it can complement modern and traditional architectural styles alike. Its sleek, gap-free panels ensure both privacy and visual appeal, enhancing the overall appearance of any property.",
    },
  ];

  return (
    <>
      {/* Section 1: Overview with Text and Image */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-8 bg-gray-50">
        {/* Text Section */}
        <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Colorbond Fencing
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Our fencing solutions offer both security and aesthetic appeal,
            blending seamlessly with your outdoor space. Whether you're looking
            for privacy, durability, or an elegant design, we have the right
            fence for you.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            We use high-quality materials that are weather-resistant and
            long-lasting, ensuring your investment stands the test of time. With
            a variety of styles and colors, your fence will match the character
            of your home perfectly.
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            <li>Custom Fence Design and Installation</li>
            <li>Automatic Sliding Gates</li>
            <li>Pedestrian Access Solutions</li>
            <li>Decorative Metal and Wooden Panels</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src={image1}
            alt="Fencing Solutions"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: Features with Icons */}
      <div className="p-4 md:p-8 bg-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 mb-8 border-b pb-4 border-gray-200"
          >
            <FaRegHandPointRight className="text-blue-500 text-3xl sm:text-4xl md:text-5xl" />
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

      {/* Section 3: Additional Content */}
      <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-8 bg-gray-50">
        <div className="md:w-1/2">
          <img
            src={image2}
            alt="Additional Fencing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-justify space-y-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Choosing the right fence for your property can make a significant
            difference in terms of both security and style. Colorbond fencing is
            built to withstand tough conditions, offering a durable and elegant
            solution that complements any home or commercial space.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Its unique design not only enhances privacy but also ensures it
            stands firm during strong winds and rain. With no gaps or cracks,
            Colorbond fences prevent visibility from the outside while providing
            a seamless, clean look.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            One of the key advantages of Colorbond fencing is that it’s
            resistant to rust, corrosion, and other environmental factors.
            Whether it's heavy rain, direct sunlight, or extreme temperatures,
            this fencing remains intact and retains its color.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Need help deciding the best fencing option for your property? Our
            team of experts is here to provide personalized advice, ensuring you
            make the right choice. Contact us today for a free consultation and
            let us guide you through the process of selecting the perfect
            Colorbond fence for your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default ColorBondFencing;

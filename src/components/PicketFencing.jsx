import React from "react";
import image1 from "../assets/cards/picket.jpg";
import { FaRegHandPointRight } from "react-icons/fa";

const PicketFencing = () => {
  const picketFenceFeatures = [
    {
      title: "Adaptable Design",
      description:
        "Picket fencing complements both traditional and modern garden aesthetics. Whether you prefer a classic look or want to add a contemporary twist with paint or decorative details, a picket fence provides the flexibility to match your personal style.",
    },
    {
      title: "Weather-Resistant Durability",
      description:
        "The spacing between pickets allows strong winds to pass through easily, preventing pressure buildup. This design also reduces snow accumulation, minimizing the weight on your fence and preventing damage during extreme weather conditions.",
    },
    {
      title: "Safety for Kids and Pets",
      description:
        "A picket fence creates a secure boundary, keeping children and pets safe within the garden. It offers peace of mind by preventing little ones or pets from wandering off, while still allowing visibility to monitor outdoor activities or incoming deliveries.",
    },
    {
      title: "Reliable Strength",
      description:
        "Constructed from high-quality wood or vinyl, picket fences are built to last. With proper maintenance, they can withstand harsh weather conditions, including strong winds, thanks to their open design that allows air to pass through easily.",
    },
    {
      title: "Cost-Effective Solution",
      description:
        "Picket fencing is an affordable option that offers long-term savings. With minimal maintenance requirements, these fences often prove to be more cost-effective over time, making them a smart investment for homeowners.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-8 bg-gray-50">
        <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Picket Fencing
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Infinity Fences and Gates is your top choice for high-quality picket
            fences for both residential and commercial properties. As a trusted
            fencing company serving Infinity and nearby suburbs, we are
            dedicated to helping you find the perfect picket fence that combines
            durability with timeless style. Our extensive collection of picket
            fences offers a variety of designs to suit any property, ensuring
            long-lasting beauty and functionality for years to come.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Whether you’re looking for a classic white picket fence to enhance
            curb appeal or a sturdy design to secure your garden or pool, we
            have a wide range of options to choose from. Our picket fences come
            in both traditional and modern styles, offering flexibility to suit
            any landscape or architectural theme.
          </p>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <img
            src={image1}
            alt="Fencing Solutions"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8 px-4 sm:px-8 lg:px-8 text-justify space-y-4">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          A picket fence is a classic fencing style, made from wooden pales
          attached to horizontal rails with evenly spaced gaps to define
          boundaries while maintaining visibility. Traditionally used around
          front gardens, picket fences enhance both the security and appearance
          of a property, providing clear lines of sight from the house. Their
          timeless charm makes them an excellent choice for marking boundaries
          while allowing light and air to pass through.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Thanks to its versatile design, a picket fence (also known as a
          palisade fence) fits seamlessly into both rural and urban landscapes.
          It’s an ideal solution for protecting garden features like ponds or
          swimming pools without obstructing views or appearing too imposing.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          We offer two distinct styles: pointed tops and rounded tops. Our
          picket fences are available in two options: traditional kits,
          assembled on-site with individual pales, rails, and posts, or
          pre-constructed panels that easily slide into slotted posts.
          Traditional picket fencing is especially suited for uneven terrain, as
          individual pales can be adjusted to follow slopes or gradients.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          Beyond the typical applications, picket fences offer great versatility
          and value, making them perfect for pet enclosures, charming pub
          gardens, or any space needing a decorative yet functional boundary.
          Explore our customer projects below for inspiration and see how a
          picket fence can elevate your outdoor space.
        </p>
      </div>

      <div className="p-4 md:p-8 bg-white">
        {picketFenceFeatures.map((feature, index) => (
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

export default PicketFencing;

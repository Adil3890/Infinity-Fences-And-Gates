import React from "react";
import image1 from "../assets/cards/card8.jpeg";
import { FaRegHandPointRight } from "react-icons/fa";

const TimberFencing = () => {
  const woodFenceFeatures = [
    {
      title: "Sustainable Material",
      description:
        "Wood fencing is made from natural, renewable resources, making it an eco-friendly choice. With proper forest management practices, wood remains an abundant and sustainable fencing option.",
    },
    {
      title: "Long-Lasting Durability",
      description:
        "Properly installed and maintained wood fences can last for decades. With protective treatments against moisture, pests, and weather, wood fences are a long-term investment for your property.",
    },
    {
      title: "Customizable Designs",
      description:
        "Wood fences come in various designs, heights, and finishes, allowing homeowners to tailor the style to their specific needs. Whether you prefer rustic charm or a modern aesthetic, wood fencing offers flexibility.",
    },
    {
      title: "Boosts Property Appeal",
      description:
        "A beautifully crafted wood fence enhances your home’s curb appeal and can increase its market value. It creates an inviting, well-defined space that appeals to potential buyers and neighbors alike.",
    },
    {
      title: "Safe Play Area for Kids",
      description:
        "Installing a wooden fence provides a secure area where children can play safely. With proper gate locks, you can ensure your kids stay within the yard, offering peace of mind for parents.",
    },
    {
      title: "Pet-Friendly Boundaries",
      description:
        "Wood fences are perfect for keeping pets safe inside your property. They prevent pets from wandering off and keep other animals out, ensuring your pets can enjoy the outdoors safely.",
    },
    {
      title: "Enhanced Privacy and Security",
      description:
        "Tall, solid wood fences offer excellent privacy by shielding your property from prying eyes. They also provide an added layer of security, creating a comfortable and secluded space for relaxation.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-8 bg-gray-50">
        <div className="md:w-1/2 text-justify space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Timber Fencing
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Are you considering timber fencing for your next project? Timber
            fences are a popular choice among homeowners looking to enhance
            privacy, security, and aesthetics. They offer a natural, warm feel
            that blends beautifully with outdoor spaces. Whether you want to
            shield your backyard from noisy neighbors, busy streets, or create a
            safe environment for your children, a timber fence is a great
            solution.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            With a privacy timber fence, you can transform your outdoor space
            into a peaceful retreat where you can relax, play with your kids, or
            host guests. Beyond functionality, timber fences also boost curb
            appeal, adding value and charm to your property. If you’re aiming
            for both beauty and practicality, a timber fence might be the
            perfect choice for your home.
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
          In situations where aesthetics take priority over function, many
          customers prefer classic timber fences, such as the iconic white
          picket fences seen in movies.
          <span className="italic">
            (Note: Infinity Fences and Gates does not currently offer painting
            or staining services.)
          </span>
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          At Infinity Fences and Gates, we proudly provide one of the most
          diverse selections of timber fence styles available in the market. Our
          mission is to help you find a fence that perfectly aligns with your
          personal taste and design preferences while staying within your
          budget.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          One of the key advantages of Colorbond fencing is that it’s resistant
          to rust, corrosion, and other environmental factors. Whether it's
          heavy rain, direct sunlight, or extreme temperatures, this fencing
          remains intact and retains its color.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          We are committed to sourcing only the highest-quality timber from
          trusted local mills, ensuring durability and beauty. Thanks to our
          partnerships with local suppliers, we offer premium materials at
          competitive prices—passing these savings directly to our customers.
        </p>
      </div>

      <div className="p-4 md:p-8 bg-white">
        {woodFenceFeatures.map((feature, index) => (
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

export default TimberFencing;

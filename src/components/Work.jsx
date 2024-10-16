import React from "react";
import c1 from "../assets/cards/card7.jpeg";
import c3 from "../assets/cards/card3.jpeg";
import c4 from "../assets/cards/card4.jpeg";
import c5 from "../assets/cards/card5.jpeg";
import c6 from "../assets/cards/picket.jpg";

const cardData = [
  {
    title: "COLORBOND FENCING",
    description:
      "Stylish and durable, Colorbond fences offer exceptional privacy and modern appeal, making them a superior alternative to traditional timber fences for Melbourne properties.",
    image: c1,
  },
  {
    title: "TIMBER FENCING",
    description:
      "Add warmth and charm to your property with high-quality timber fencing. Customizable to suit any design, it provides a perfect blend of security and natural beauty.",
    image: c3,
  },
  {
    title: "PICKET FENCING",
    description:
      "Classic and functional, picket fences enhance safety by creating boundaries and providing a charming aesthetic. Ideal for homes near busy streets or areas requiring child safety.",
    image: c6,
  },
  {
    title: "ALUMINUM FENCING",
    description:
      "Lightweight, rust-resistant, and versatile, aluminum fencing offers a sleek, low-maintenance solution for modern homes and businesses with various designs and colors.",
    image: c4,
  },
  {
    title: "CHAIN LINK FENCING",
    description:
      "Affordable and secure, chain link fencing is ideal for residential and commercial spaces, offering durability and reliability for boundary and security purposes.",
    image: c5,
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold text-grayish mb-10">WHAT WE DO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg  border-4  shadow-glow-boder overflow-hidden transform transition-transform duration-300 hover:scale-105 max-w-xs mx-auto" // Adjust max-w-xs for smaller width
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <a
                href="/services"
                className="inline-block text-grayish font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

// FeaturesSection.jsx
import React from "react";
import { FaMedal, FaBalanceScale, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer

const FeaturesSection = () => {
  // Intersection Observers for each card
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: topRef, inView: topInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-bluish py-16 min-h-screen flex items-center justify-center mt-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Material Card - Slide from Left */}
          <div
            ref={leftRef}
            className={`bg-light-buish p-8 rounded-lg text-center shadow-white-glow-hover transition-shadow duration-300 h-96 flex flex-col justify-between ${
              leftInView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div>
              <FaMedal className="text-5xl text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                QUALITY MATERIAL
              </h3>
              <p className="text-white leading-relaxed">
                We believe in providing high-quality products and services based
                on your budget and the best materials you can afford. Our fences
                are built to last, ensuring durability and value for money.
              </p>
            </div>
          </div>

          {/* Competitive Price Card - Slide from Top */}
          <div
            ref={topRef}
            className={`bg-light-buish p-8 rounded-lg text-center shadow-white-glow-hover transition-shadow duration-300 h-96 flex flex-col justify-between ${
              topInView ? "animate-slide-in-top" : "opacity-0"
            }`}
          >
            <div>
              <FaBalanceScale className="text-5xl text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                COMPETITIVE PRICE
              </h3>
              <p className="text-white leading-relaxed">
                Our goal is to offer competitive prices without sacrificing
                quality. We ensure you get the best value for your money,
                meeting your expectations at an affordable price.
              </p>
            </div>
          </div>

          {/* Professional Team Card - Slide from Right */}
          <div
            ref={rightRef}
            className={`bg-light-buish p-8 rounded-lg text-center shadow-white-glow-hover transition-shadow duration-300 h-96 flex flex-col justify-between ${
              rightInView ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <FaUsers className="text-5xl text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                PROFESSIONAL TEAM
              </h3>
              <p className="text-white leading-relaxed">
                Our expert team provides top-level service in fencing and gate
                installation. We're here to support your project from start to
                finish, ensuring satisfaction every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

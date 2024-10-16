import React, { useEffect, useState } from "react";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation after the component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay animation slightly
  }, []);

  return (
    <>
      {/* Custom shadow styles */}
      <style>
        {`
          /* Initial shadow from bottom-right */
          .shadow-custom {
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.5s ease-out;
          }

          /* On hover, shadow moves to top-left */
          .shadow-custom-hover:hover {
            box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 md:p-0">
        {/* Heading outside of the card */}
        <h2 className="text-3xl md:text-4xl font-bold text-grayish mb-6 animate-fade-in text-center">
          WHO WE ARE
        </h2>

        {/* Card content */}
        <div
          className={`bg-white p-6 md:p-8 rounded-3xl w-full max-w-xl md:max-w-2xl transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } shadow-custom hover:shadow-custom-hover`}
        >
          <div className="text-left text-gray-700">
            <p className="mb-4 leading-7 md:leading-8">
              <span className="text-lg md:text-xl font-semibold mb-2 px-2">
                Infinity Fences and Gates
              </span>
              is a premier fencing company specializing in expert fence and gate
              installation, repair, and maintenance. Known for our craftsmanship
              and attention to detail, we have built a reputation for delivering
              high-quality solutions with a focus on customer satisfaction.
            </p>
            <p className="mb-4 leading-7 md:leading-8">
              At Infinity Fences and Gates, we understand that fences do more
              than define boundaries—they enhance security, add value, and bring
              charm to any property. Whether you’re seeking to boost curb
              appeal, ensure privacy, or secure your home or business, our
              skilled team is here to make your vision a reality.
            </p>
            <p className="leading-7 md:leading-8">
              Trust Infinity Fences and Gates for premium fencing solutions
              tailored to meet your needs. Serving Infinity and surrounding
              areas, we are committed to delivering excellence with every
              project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

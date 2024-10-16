// GuaranteeSection.jsx
import React from "react";
import { FaAward, FaChartLine, FaHandshake } from "react-icons/fa";

const GuaranteeSection = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-2 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Guarantee Text */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
              THE INFINITY FENCES AND GATES GUARANTEE
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Every member of the Infinity fences and gates team follows and is
              held to the Infinity fences and gates Guarantee. This ensures that
              no matter what, you only pay for work done to the highest possible
              quality. It’s all part of the Infinity fences and gates Guarantee.
            </p>
          </div>

          {/* Right Side: What Makes Us Different */}
          <div className="space-y-6 sm:space-y-12">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-black">
              WHAT MAKES US DIFFERENT?
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3 sm:space-x-4">
                <FaAward className="text-lg sm:text-2xl text-blue-900" />
                <span className="text-sm sm:text-base md:text-lg text-gray-700">
                  Infinity fences Committed to excellence.
                </span>
              </li>
              <li className="flex items-start space-x-3 sm:space-x-4">
                <FaChartLine className="text-lg sm:text-2xl text-blue-900" />
                <span className="text-sm sm:text-base md:text-lg text-gray-700">
                  Industry-leading training & security
                </span>
              </li>
              <li className="flex items-start space-x-3 sm:space-x-4">
                <FaHandshake className="text-lg sm:text-2xl text-blue-900" />
                <span className="text-sm sm:text-base md:text-lg text-gray-700">
                  Local experts with big business backing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

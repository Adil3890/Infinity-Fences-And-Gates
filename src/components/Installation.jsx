import React from "react";
import image1 from "../assets/cards/card1.jpeg";
import image2 from "../assets/cards/card8.jpeg";
import image3 from "../assets/cards/card7.jpeg";
import { FaRegHandPointRight } from "react-icons/fa";
import { installationProcess } from "../assets/data";

const Installation = () => {
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
              <span>Installation & Repair</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              We provide a wide range of fencing installation services,
              including wood, timber, picket, and Colorbond fences, among
              others. Additionally, we offer custom fencing solutions tailored
              to fit any yard size or shape, ensuring a perfect fit for your
              property. Our skilled professionals are committed to delivering
              high-quality results, no matter the scope of your project. At
              Infinity Fences and Gates, we proudly serve Orland Park and the
              surrounding Chicagoland suburbs. Transparency and communication
              are at the core of our service. We keep you informed throughout
              every step of the installation process, ensuring you know exactly
              how your project is progressing, giving you peace of mind from
              start to finish.
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
              <span>Fencing and Gate Installation Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 px-4">
              Our fencing and gate installation services cover everything you
              need to seamlessly install new gates, fence doors, and related
              hardware. This comprehensive service includes the installation of
              doors, gates, hardware, and any additional accessories required to
              complete your project efficiently. We take pride in manufacturing
              and installing premium-quality steel fences that provide
              exceptional security for homes and businesses. Our fences are
              designed to withstand the elements, requiring minimal maintenance,
              and are built to last for decades. In addition to permanent
              installations, we offer temporary steel fencing solutions for
              hire, ideal for securing commercial and industrial construction
              sites.
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
              <span>Fence Repair and Maintenance</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Our fence repair and maintenance services include thorough
              inspections to identify and address issues with existing fences.
              We repair or replace broken posts, rails, and pickets, and provide
              staining or painting services to protect your fence from weather
              damage. Additionally, we can replace old hardware and install new
              fencing components as needed.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              With expertise across both small and large-scale projects, our
              skilled professionals deliver personalized solutions tailored to
              your needs and budget. Whether it’s routine maintenance or complex
              repairs, we ensure quality workmanship and excellent customer
              service. Contact us today to learn more about our steel fencing
              installation and manufacturing services in Infinity.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 bg-white">
        {installationProcess.map((feature, index) => (
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

export default Installation;

import React from "react";
import image1 from "../assets/hero/gate1.jpg";
import image2 from "../assets/hero/gate2.png";
import image3 from "../assets/hero/gate3.jpg";
import image4 from "../assets/cards/card9.jpg";

import { FaRegHandPointRight } from "react-icons/fa";

const Padestrian = () => {
  return (
    <>
      <div className="flex flex-col p-6 md:p-12 bg-gray-50">
        {/* Row for Image and First Paragraph */}
        <div className="flex flex-col md:flex-row items-start md:items-start md:space-x-8">
          {/* First Paragraph Section */}
          <div className="md:w-2/3 text-justify space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Pedestrian and Driver Gates
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Pedestrian gates allow residents to enter a location or property
              through a narrow entryway, offering both functional and aesthetic
              benefits. These gates can also be motorized, enhancing
              accessibility and convenience—no more fumbling for keys when your
              hands are full of groceries! Here are five reasons why you might
              consider installing a pedestrian gate in your home.
            </p>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={image4}
              alt="Pedestrian Driver Gates"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Remaining Paragraphs Section */}
        <div className="mt-8 space-y-6">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            The purpose of pedestrian driver gates is to regulate pedestrian and
            vehicle access, ensuring only authorized individuals can enter or
            exit a particular area. They enhance security and help manage the
            movement of people efficiently. These gates are often integrated
            with access control systems such as key cards, RFID tags, or
            biometric scanners to verify the identity and authorization of
            individuals before granting entry.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Pedestrian driver gates typically consist of turnstiles or barriers
            that allow one person to pass at a time. Some gates have additional
            features like sensors to detect tailgating (when multiple
            individuals try to enter with a single authorization) or alarms to
            alert security personnel in case of unauthorized access attempts.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            These gates can be automated or manually operated by security
            personnel. Automated gates often use motorized turnstiles or sliding
            barriers that open upon valid authentication. In contrast, manual
            gates require security staff for operation, ensuring compliance with
            access control protocols.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Overall, pedestrian driver gates play a crucial role in maintaining
            security and regulating pedestrian and vehicle access. They prevent
            unauthorized entry, promote safety, and contribute to the efficient
            management of traffic flow.
          </p>
        </div>
      </div>

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
              <FaRegHandPointRight className="text-bluish text-3xl sm:text-4xl md:text-5xl" />
              <span>Turnstiles for Pedestrian Fencing</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Turnstiles are a reliable and widely used type of pedestrian gate,
              designed to control access by allowing only one person to pass
              through at a time. They come in various forms, including tripod
              turnstiles with three rotating arms, waist-height turnstiles for
              monitored access, and full-height turnstiles that provide maximum
              security by extending from floor to ceiling. Turnstiles serve as a
              physical barrier, ensuring security and preventing unauthorized
              entry, making them an ideal solution for managing pedestrian flow
              in high-traffic or restricted areas.
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
              <span>Flap Barriers </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 px-4">
              Flap barriers function similarly to turnstiles but use horizontal
              swinging panels instead of rotating arms. These panels
              automatically open to allow entry when access is authorized and
              close immediately to block unauthorized access. Flap barriers are
              ideal for high-traffic areas such as subway stations, airports,
              and corporate buildings, providing both security and smooth
              pedestrian flow.
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
              <span>Speed Gates </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Speed gates, also known as speed lanes or optical turnstiles,
              provide fast and seamless access control with retractable glass or
              acrylic barriers that slide open for authorized users. Combining
              functionality with aesthetics, speed gates offer a sleek, modern
              design and are commonly installed in high-end buildings, corporate
              offices, and other premium facilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Padestrian;

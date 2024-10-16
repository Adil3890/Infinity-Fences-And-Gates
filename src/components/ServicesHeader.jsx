import React from "react";
import { Link, useLocation } from "react-router-dom"; // React Router components

const ServicesHeader = () => {
  const location = useLocation(); // Hook to get the current route

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-bluish text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8">
          <Link
            to="/services"
            className={`text-lg font-medium ${
              isActive("/services") ? "text-gray-800" : "hover:text-black"
            }`}
          >
            Colorbond
          </Link>
          <Link
            to="/service/timber"
            className={`text-lg font-medium ${
              isActive("/service/timber") ? "text-gray-800" : "hover:text-black"
            }`}
          >
            Timber
          </Link>
          <Link
            to="/service/picket"
            className={`text-lg font-medium ${
              isActive("/service/picket") ? "text-gray-800" : "hover:text-black"
            }`}
          >
            Picket
          </Link>
          <Link
            to="/service/aluminium"
            className={`text-lg font-medium ${
              isActive("/service/aluminium")
                ? "text-gray-800"
                : "hover:text-black"
            }`}
          >
            Aluminium
          </Link>
          <Link
            to="/service/pedestrian-driver"
            className={`text-lg font-medium ${
              isActive("/service/pedestrian-driver")
                ? "text-gray-800"
                : "hover:text-black"
            }`}
          >
            Pedestrian Driver
          </Link>
          <Link
            to="/service/farm-fencing"
            className={`text-lg font-medium ${
              isActive("/service/farm-fencing")
                ? "text-gray-800"
                : "hover:text-black"
            }`}
          >
            Farm Fencing
          </Link>
          <Link
            to="/service/installation-repair"
            className={`text-lg font-medium ${
              isActive("/service/installation-repair")
                ? "text-gray-800"
                : "hover:text-black"
            }`}
          >
            Installation & Repair
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ServicesHeader;

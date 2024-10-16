import React from "react";
import fenceImage from "../assets/cards/card4.jpeg"; // Replace with the path to your image

const AboutSection = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            ABOUT THE INFINITY FENCES AND GATES
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We leverage advanced fencing and gate technologies, combined with
            our extensive expertise, to design secure, functional environments
            tailored to your needs. Our professional services offer reliable
            protection for your home and surroundings, ensuring peace of mind
            under our trusted care and recommended solutions.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We take pride in our commitment to solving fencing challenges for
            Australians, a core value embraced by every member of our team. Our
            work goes beyond building fences—though every installation reflects
            our dedication to excellence and craftsmanship.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <img
            src={fenceImage}
            alt="Fencing Service"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Additional paragraph below the image */}
      <div className="container mx-auto px-4 mt-10">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Infinity Fences and Gates, we offer a broad range of professional
          services, including expert advice, safety inspections, repairs, and
          coordination with insurers, councils, and housing estates. Your fence
          is more than just a barrier—it’s a critical element of your space,
          deserving the expertise only professionals can provide. Whether it’s
          boundary fences, automated gates, noise-reduction barriers, or
          decorative garden fences, our team delivers top-quality solutions. As
          industry leaders, we are committed to exceeding customer expectations
          and addressing every fencing need with precision and care.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import GuaranteeSection from "../components/GuaranteeSection";
import FeaturesSection from "../components/FeaturesSection";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutSection />
      <GuaranteeSection />
      <FeaturesSection />
    </>
  );
};

export default AboutPage;

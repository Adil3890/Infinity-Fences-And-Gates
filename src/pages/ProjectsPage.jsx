import React, { useEffect } from "react";
import FencingGallery from "../components/Gallery";
import FeaturesSection from "../components/FeaturesSection";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FencingGallery />
      <FeaturesSection />
    </>
  );
};

export default ProjectsPage;

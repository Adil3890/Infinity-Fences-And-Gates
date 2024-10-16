import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import Work from "../components/Work";
import Progress from "../components/Progress";
import FencingGallery from "../components/Gallery";
import QuoteForm from "../components/QuoteForm";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Introduction />
      <Work />
      <Progress />
      <FencingGallery />
      <QuoteForm />
    </>
  );
};

export default Homepage;

import React, { useEffect } from "react";
import ColorBondFencing from "../components/ColorBondFencing";
import ServicesHeader from "../components/ServicesHeader";
import Button from "../components/Button";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <ColorBondFencing />
      <Button />
    </>
  );
};

export default ServicesPage;

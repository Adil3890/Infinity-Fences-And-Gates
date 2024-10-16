import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import Installation from "../components/Installation";
import Button from "../components/Button";

const InstallationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <Installation />
      <Button />
    </>
  );
};

export default InstallationPage;

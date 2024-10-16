import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import Aluminium from "../components/Aluminium";
import Button from "../components/Button";

const AluminiumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <Aluminium />
      <Button />
    </>
  );
};

export default AluminiumPage;

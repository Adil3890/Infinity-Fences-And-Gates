import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import Farm from "../components/Farm";
import Button from "../components/Button";

const FarmFencing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <Farm />
      <Button />
    </>
  );
};

export default FarmFencing;

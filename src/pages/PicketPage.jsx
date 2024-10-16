import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import PicketFencing from "../components/PicketFencing";
import Button from "../components/Button";

const PicketPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <PicketFencing />
      <Button />
    </>
  );
};

export default PicketPage;

import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import Padestrian from "../components/Padestrian";
import Button from "../components/Button";

const PadestrianPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <Padestrian />
      <Button />
    </>
  );
};

export default PadestrianPage;

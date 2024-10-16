import React, { useEffect } from "react";
import ServicesHeader from "../components/ServicesHeader";
import TimberFencing from "../components/TimberFencing";
import Button from "../components/Button";

const TimberPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeader />
      <TimberFencing />
      <Button />
    </>
  );
};

export default TimberPage;

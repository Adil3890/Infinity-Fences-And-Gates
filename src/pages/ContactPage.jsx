import React, { useEffect } from "react";
import QuoteForm from "../components/QuoteForm";
import MapComponent from "../components/MapComponent";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <QuoteForm />
      <MapComponent />
    </>
  );
};

export default ContactPage;

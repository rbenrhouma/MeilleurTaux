import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PagesPaths from "../constantes/PagesPaths";

const ScreenFin = props => {
  return (
    <>
      <Header context={props} />
      <Body context={props} />
      <Footer context={props} />
    </>
  );
};
export default ScreenFin;

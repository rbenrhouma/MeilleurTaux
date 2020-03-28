import React, { useState, useEffect } from "react";
import MTInputBar from "./MT/MTInputBar";
import "./style.css";

const GoodLocalisation = props => {
  const { context } = props.context;
  const [country, setCountry] = useState("FR");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {}, [country, zipCode]);

  const handleChange = e => {};

  return (
    <div className="">
      <MTInputBar
        name={"coutry"}
        handleChange={handleChange}
        context={props.context}
        value={country}
        type={"text"}
        type2={"country"}
        odd={true}
        caption={"Dans quel pzys se situe votre projet ? *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <MTInputBar
        name={"zipCode"}
        handleChange={handleChange}
        context={props.context}
        value={zipCode}
        type={"text"}
        type2={"zipCode"}
        odd={true}
        caption={"Ville ou code postal *"}
        txtInfo={"bla bla bla 11111111..."}
      />
      <div style={{ paddingLeft: 50 }}>
        <h4>
          La connaissance de code postal du bien permettra de calculer les frais
          de notaire selon les conditions en vigueur dans le département
          concerné.
        </h4>
        <h4>
          Si vous êtes en recherche de bien sur plusieurs communes, indiquez une
          commune ciblée.
        </h4>
      </div>
    </div>
  );
};
export default GoodLocalisation;

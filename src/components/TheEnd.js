import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import "./style.css";

const axios = require("axios");

const TheEnd = props => {
  const { devis, setDevis } = props.context.context;

  const serverURL = "https://meilleurtauxapi.herokuapp.com/";

  const [devierNum, setDevierNum] = useState("");

  const saveData = async () => {
    if (
      devis.typeBien &&
      devis.usageBien &&
      devis.email &&
      devis.total !== undefined
    ) {
      try {
        const response = await axios.post(
          "https://meilleurtauxapi.herokuapp.com/devis/save",
          {
            typeBien: devis.typeBien,
            etatBien: devis.etatBien,
            usageBien: devis.usageBien,
            situationUser: devis.situationUser,
            typeBienLib: devis.typeBienLib,
            etatBienLib: devis.etatBienLib,
            usageBienLib: devis.usageBienLib,
            situationUserLib: devis.situationUserLib,
            country: devis.country,
            zipCode: devis.zipCode,
            montant: devis.montant,
            travaux: devis.travaux,
            notaire: devis.notaire,
            total: devis.total,
            email: devis.email
          }
        );
        console.log("Devis posté !!!");

        setDevierNum(response.data.key);

        Cookies.remove("devis");
        Cookies.remove("route");
        Cookies.remove("page");
        setDevis({});
      } catch (err) {
        Cookies.remove("devis");
        Cookies.remove("route");
        Cookies.remove("page");
        console.log(err.message);
        console.log(err);
      }
    } else {
      alert("erreur");
    }
  };

  useEffect(() => {
    saveData();
  }, []);

  return (
    <div className="theEndBody">
      <p>Votre numéro de dossier est le : </p>
      <p className="textBold">{`  ${devierNum}`}</p>
    </div>
  );
};
export default TheEnd;

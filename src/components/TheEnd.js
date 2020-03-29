import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import "./style.css";

const axios = require("axios");

const TheEnd = props => {
  const { devis, setDevis } = props.context.context;

  const serverURL = "https://meilleurtauxapi.herokuapp.com/";

  const [devierNum, setDevierNum] = useState("");

  console.log(devis);

  const saveData = async () => {
    if (
      // Champs obligatoires le code postal, email, type de bien ,  état ainsi que le montant total de l'emprunt.
      devis.zipCode &&
      devis.email &&
      devis.typeBien &&
      devis.etatBien &&
      devis.total !== undefined &&
      devis.montant !== undefined
    ) {
      try {
        const response = await axios.post(
          "https://meilleurtauxapi.herokuapp.com/devis/save",
          {
            zipCode: devis.zipCode,
            email: devis.email,
            typeBien: devis.typeBien,
            etatBien: devis.etatBien,
            total: devis.total,
            montant: devis.montant,
            usageBien: devis.usageBien ? devis.usageBien : "0",
            situationUser: devis.situationUser ? devis.situationUser : "",
            typeBienLib: devis.typeBienLib ? devis.typeBienLib : "",
            etatBienLib: devis.etatBienLib ? devis.etatBienLib : "",
            usageBienLib: devis.usageBienLib ? devis.usageBienLib : ":",
            situationUserLib: devis.situationUserLib
              ? devis.situationUserLib
              : "",
            notaire: devis.notaire ? devis.notaire : "0"
          }
        );

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

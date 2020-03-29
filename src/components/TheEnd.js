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
    //  Champs obligatoires : code postal, l'email, le type de bien (et son état) ainsi que le montant total de l'emprunt.
    if (
      devis.zipCode &&
      devis.email &&
      devis.typeBien &&
      devis.usageEtat &&
      devis.total !== undefined
    ) {
      try {
        const response = await axios.post(
          "https://meilleurtauxapi.herokuapp.com/devis/save",
          {
            zipCode: devis.zipCode,
            email: devis.email,
            typeBien: devis.typeBien,
            typeBienLib: devis.typeBienLib,
            usageBien: devis.usageBien,
            usageBienLib: devis.usageBienLib,
            total: devis.total

            // etatBien: devis.etatBien,
            // situationUser: devis.situationUser,
            // etatBienLib: devis.etatBienLib,
            // usageBienLib: devis.usageBienLib,
            // situationUserLib: devis.situationUserLib,
            // country: devis.country,
            // montant: devis.montant,
            // travaux: devis.travaux,
            // notaire: devis.notaire,
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

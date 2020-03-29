import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import cors from "cors";
import "./style.css";

const axios = require("axios");

const TheEnd = props => {
  const { devis, setDevis } = props.context.context;

  const serverURL = "https://meilleurtauxapi.herokuapp.com/";

  const [devierNum, setDevierNum] = useState("");

  // test de l'url
  const config = axios.interceptors.request.use(
    function(config) {
      console.log(config);
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  const saveData = async () => {
    if (
      devis.typeBien &&
      devis.usageBien &&
      devis.email &&
      devis.total !== undefined
    ) {
      try {
        const newData = {
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
        };

        const response = await axios({
          method: "post",
          url: "https://meilleurtauxapi.herokuapp.com/devis/save",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          },
          data: newData
        })
          .then(function(reponse) {
            //On traite la suite une fois la réponse obtenue
            console.log(reponse);
          })
          .catch(function(erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
          });

        // const response = await axios({
        //   method: "put",
        //   url: serverURL + "devis/save",
        //   headers: {},
        //   data: newData
        // });

        console.log("Devis posté !!!");

        console.log("Récupération de la clé");
        console.log(response);
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const ScreenBackOfficeDetail = props => {
  const { id } = useParams();
  const serverURL = "https://meilleurtauxapi.herokuapp.com/";

  const [devis, setDevis] = useState();

  useEffect(() => {
    const createData = devis => {
      return (
        <div>
          <p>Tracking Number : {devis.tracking}</p>
          <p>Type : {devis.goodType}</p>
          <p>Condition : {devis.goodCondition}</p>
          <p>Utilisation : {devis.goodUsage}</p>
          <p>Situation : {devis.userSituation}</p>
          <p>Ville : {devis.city}</p>
          <p>E-mail : {devis.email}</p>
          <p>Prix acquisition : {devis.goodPrice}</p>
          <p>Prix travaux : {devis.buildingCosts}</p>
          <p>Frais notaire : {devis.charges}</p>
          <p>Prix total : {devis.total}</p>
        </div>
      );
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(serverURL + `devis?id=${id}`);
        setDevis(createData(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>{devis}</div>
    </>
  );
};

export default ScreenBackOfficeDetail;

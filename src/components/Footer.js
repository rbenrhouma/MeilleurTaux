import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import MentionsLegales from "./MentionsLegales";
import "./style.css";
const Footer = props => {
  const history = useHistory();
  const { pageIndex, setPageIndex, nextPath, priorPath, devis } = props.context;
  const [requiredFields, setRequiredFields] = useState("");

  const maxPage = 8;

  const onPriorPage = () => {
    if (priorPath) {
      history.push(priorPath);
      setPageIndex(Number(pageIndex) - 1);
    } else {
      alert("Erreur");
      console.log(props);
    }
  };

  const isFormValide = () => {
    let isValid = true;
    setRequiredFields("");
    if (pageIndex === 1) {
      //  type de bien
      isValid = devis.typeBien > 0;
      setRequiredFields("Type de bien");
      return isValid;
    } else if (pageIndex === 2) {
      // Etat du bien
      setRequiredFields("Etat de bien");
      isValid = devis.etatBien > 0;
      return isValid;
    } else if (pageIndex === 3) {
      // Usage du bien
      setRequiredFields("Usage du bien");
      isValid = devis.usageBien > 0;
      return isValid;
    } else if (pageIndex === 4) {
      // Situation actuelle.
      setRequiredFields("Situation actuelle");
      isValid = devis.situationUser > 0;
      return isValid;
    } else if (pageIndex === 5) {
      // Code Postal
      setRequiredFields("Code postal");
      isValid = devis.zipCode !== "";
      return isValid;
    } else if (pageIndex === 6) {
      // Montant.
      setRequiredFields("Montant du bien.");
      isValid = devis.total > 0;
      return isValid;
    } else if (pageIndex === 7) {
      setRequiredFields("email valide et accepter les conditions.");
      isValid = devis.email !== "";
      return isValid;
    }
    return isValid;
  };

  const onNextPage = async () => {
    if (nextPath && isFormValide() === true) {
      history.push(nextPath);
      setPageIndex(Number(pageIndex) + 1);
    } else {
      //alert("Veuillez remplir les champs obligatoires\n");
      console.log(props);
    }
    console.log(props);
  };

  const progression = () => {
    const psc = (100 / 7) * (pageIndex - 1);
    return psc.toFixed(0);
  };

  return (
    <div>
      <div className="pagination" id="btn_form">
        <div className="btnContainer">
          {pageIndex > 1 && pageIndex < maxPage && (
            <a className="prev btPrev " onClick={onPriorPage}>
              <span>Précédent</span>
            </a>
          )}
        </div>
        {pageIndex < maxPage && <ProgressBar pourcentage={progression()} />}
        <div className="btnContainer">
          <div style={{ margin: "10px", color: "red" }}>{requiredFields}</div>
          {pageIndex < maxPage && (
            <a className={"next btNext"} onClick={onNextPage}>
              <span className="btnContainerText">
                {pageIndex === maxPage - 1 ? "VALIDER" : "SUIVANT"}
              </span>
            </a>
          )}
        </div>
      </div>
      <MentionsLegales context={props.context} />
    </div>
  );
};
export default Footer;

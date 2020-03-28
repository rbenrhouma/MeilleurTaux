import React, { useState } from "react";
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
    console.log("-------");
    console.log(devis);
    if (pageIndex === 1) {
      //  type de bien
      setRequiredFields("Type de bien");
      return devis.typeBien > 0;
    } else if (pageIndex === 2) {
      // Etat du bien
      return devis.etatBien > 0;
      setRequiredFields("Etat de bien");
    } else if (pageIndex === 3) {
      // Usage du bien
      return devis.etatBien > 0;
      setRequiredFields("");
    } else if (pageIndex === 4) {
      return devis.etatBien > 0;
      setRequiredFields("");
    } else if (pageIndex === 5) {
      return devis.etatBien > 0;
      setRequiredFields("");
    } else if (pageIndex === 6) {
      return devis.etatBien > 0;
      setRequiredFields("");
    } else if (pageIndex === 7) {
      return devis.etatBien > 0;
      setRequiredFields("");
    }

    return true;
  };

  const onNextPage = () => {
    if (nextPath && isFormValide() === true) {
      history.push(nextPath);
      setPageIndex(Number(pageIndex) + 1);
    } else {
      alert("Veuillez remplir les champs obligatoires\n" + requiredFields);
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

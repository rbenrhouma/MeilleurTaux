import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import MentionsLegales from "./MentionsLegales";
import "./style.css";
const Footer = props => {
  const history = useHistory();
  const { pageIndex, setPageIndex, nextPath, priorPath } = props.context;
  const [isFormValide, setIsFormValide] = useState(true);
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

  const onNextPage = () => {
    if (nextPath && isFormValide === true) {
      history.push(nextPath);
      setPageIndex(Number(pageIndex) + 1);
    } else {
      alert("Veuillez remplir les champs obligatoires");
      console.log(props);
    }
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

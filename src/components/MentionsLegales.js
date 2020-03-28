import React, { useState } from "react";
import "./style.css";

const MentionsLegales = props => {
  const [showText, setShowText] = useState(false);
  const { pageIndex } = props.context;
  const onMentionsLegalClick = () => {
    setShowText(!showText);
  };
  return (
    <div>
      <a onClick={onMentionsLegalClick}>
        <div className="mentionsLegalesTitle">
          <span className={pageIndex < 8 ? "" : "noneElement"}>
            * Champ obligatoire -
          </span>
          <span className="mentionsLegales">Mentions Légales</span>
        </div>
        {showText && (
          <p className="mentionsLegalesText">
            Les informations recueillies sont traitées par le groupe
            Meilleurtaux Finizy aux fins de vous transmettre une proposition
            commerciale. Certaines informations sont obligatoires, en cas de non
            réponse votre demande ne pourra pas être traitée. Vos données
            personnelles peuvent être transmises aux partenaires de Meilleurtaux
            dans le cadre de l'étude de votre demande. Vous disposez d'un droit
            d'accès, de rectification, d'opposition et de portabilité, dans le
            respect des dispositions légales et réglementaires en vigueur, aux
            informations vous concernant. Pour l'exercer, un formulaire est mis
            à votre disposition sur notre site. Pour plus d'information
            concernant le traitement de vos données personnelles, veuillez
            consulter notre politique de données personnelles. - [x Fermer]
          </p>
        )}
      </a>
    </div>
  );
};
export default MentionsLegales;

import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MTInput from "./MTInput";
import MTZipCode from "./MTZipCode";
import MTCountry from "./MTCountry";
import "./MtComponentsStyles.css";
import infoIco from "../../assets/infoIcone.png";

const MTInputBar = props => {
  const {
    name,
    caption,
    odd,
    txtInfo,
    handleChange,
    value,
    type,
    type2,
    icone,
    diasabled
  } = props;


  return (
    <div className={odd === true ? "mtInputBar mtInputBarOdd" : "mtInputBar"}>
      <div className="mtCaption">{caption}</div>

      <div
        data-tip={txtInfo}
        className={
          txtInfo && txtInfo != "" ? "mtInfo  " : "mtInfo hideElement "
        }
      >
        <ReactTooltip multiline={true} />
        <img src={infoIco} alt={"I"} />
      </div>

      {type2 == undefined && (
        <MTInput
          name={name}
          handleChange={handleChange}
          value={value}
          type={type}
          diasabled={diasabled ? diasabled : null}
        />
      )}
      {type2 === "zipCode" && (
        <MTZipCode
          name={name}
          handleChange={handleChange}
          value={value}
          type={type}
          context={props.context}
          diasabled={diasabled ? diasabled : null}
        />
      )}
      {type2 === "country" && (
        <MTCountry
          name={name}
          handleChange={handleChange}
          value={value}
          type={type}
          context={props.context}
          diasabled={diasabled ? diasabled : null}
        />
      )}

      {icone && <img className="mtInputIcone" src={icone} alt={"Conf"} />}
      {type === "number" && <div className="mtCurrency">€</div>}
    </div>
  );
};
export default MTInputBar;

import React from "react";
import ReactTooltip from "react-tooltip";
import infoIco from "../assets/infoIcone.png";
import "./MT/MtComponentsStyles.css";

const Title = props => {
  const { txtInfo } = props;
  return (
    <div className="mtInputBar">
      <div className="title">{props.title}</div>{" "}
      <div
        data-tip={txtInfo}
        className={txtInfo.trim() != "" ? "mtInfo  " : "mtInfo hideElement "}
      >
        <ReactTooltip multiline={true} />
        <img src={infoIco} alt={"I"} />
      </div>
    </div>
  );
};
export default Title;

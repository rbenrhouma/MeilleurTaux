import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./MtComponentsStyles.css";

const MTInput = props => {
  const {
    name,
    caption,
    odd,
    txtInfo,
    handleChange,
    value,
    type,
    diasabled
  } = props;
  return (
    <>
      <input
        className={
          (diasabled ? " mtInputDisabled " : "mtInput ") +
          (type === "number" ? " right " : " mtInput ")
        }
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};
export default MTInput;

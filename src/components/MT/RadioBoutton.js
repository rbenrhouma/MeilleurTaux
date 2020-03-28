import React, { useState } from "react";
import "../style.css";

const RadioBoutton = props => {
  const { index, selectedItem, onSelect, caption, groupField, devis } = props;
  const btnChecked = index === selectedItem;

  return (
    <>
      <div
        onClick={onSelect}
        className={
          btnChecked
            ? "btnRadio btnRadioSelected"
            : "btnRadio btnRadioUnselected"
        }
      >
        <span
          className={
            btnChecked ? "btnRadioSelectedText" : "btnRadioUnSelectedText"
          }
          index={index}
          selectedItem={selectedItem}
        >
          <input className="radioBtn" type="radio" checked={btnChecked} />
          {props.caption}
        </span>
      </div>
    </>
  );
};
export default RadioBoutton;

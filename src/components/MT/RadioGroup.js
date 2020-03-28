import React, { useState, useEffect } from "react";
import RadioBoutton from "./RadioBoutton";

import "../style.css";

const RadioGroup = props => {
  const field = props.InterfaceData[0].field;

  const { InterfaceData } = props;
  const { setDevis, devis } = props.context.context;
  const [selectedText, setSelectedText] = useState("");
  const [selectedItem, setSelectedItem] = useState(() => {
    return -1;
  });

  const onSelectItem = e => {
    const idx = e.target.getAttribute("index") * 1;
    setSelectedItem(idx);
    setSelectedText(e.target.innerText);
  };

  useEffect(() => {
    if (field === "typeBien") {
      devis.typeBien = selectedItem;
      devis.typeBienLib = selectedText;
    } else if (field === "etatBien") {
      devis.etatBien = selectedItem;
      devis.etatBienLib = selectedText;
    } else if (field === "usageBien") {
      devis.usageBien = selectedItem;
      devis.usageBienLib = selectedText;
    } else if (field === "situationUser") {
      devis.situationUser = selectedItem;
      devis.situationUserLib = selectedText;
    }
    console.log(devis);
  }, [selectedItem]);

  return (
    <>
      <div className="radioGroup">
        {InterfaceData &&
          InterfaceData.map((radioBtn, index) => {
            return (
              index > 0 && (
                <RadioBoutton
                  key={index}
                  index={index}
                  selectedItem={selectedItem}
                  groupField={field}
                  caption={radioBtn.caption}
                  onSelect={onSelectItem}
                  devis={devis}
                ></RadioBoutton>
              )
            );
          })}
      </div>
    </>
  );
};
export default RadioGroup;

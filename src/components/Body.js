import React from "react";
import RadioGroup from "./MT/RadioGroup";
import DataPages from "../constantes/InterfaceData";
import Title from "./Title";
import GoodLocalisation from "./GoodLocalisation";
import GoodCost from "./GoodCost";
import ContactDetails from "./ContactDetails";
import TheEnd from "./TheEnd";
import "./style.css";

const Body = props => {
  const { pageIndex, checkFormValide } = props.context;
  const data = DataPages[pageIndex - 1];

  return (
    <>
      {data && (
        <Title title={`${data[0].title}  `} txtInfo={`${data[0].info}`}></Title>
      )}
      <div className="body" id="body_form">
        {pageIndex < 5 && <RadioGroup InterfaceData={data} context={props} />}
        {pageIndex === 5 && <GoodLocalisation context={props} />}
        {pageIndex === 6 && <GoodCost context={props} />}
        {pageIndex === 7 && (
          <ContactDetails checkFormValide={checkFormValide} context={props} />
        )}
        {pageIndex === 8 && (
          <TheEnd numDossier={"00000000000000"} context={props} />
        )}
      </div>
    </>
  );
};
export default Body;

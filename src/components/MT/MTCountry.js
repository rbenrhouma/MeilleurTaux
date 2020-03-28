import React from "react";
import countriesList from "../../constantes/CountryData";

export default function MTCountry(props) {
  const { name, handleChange, value, type, diasabled } = props;

  return (
    <div>
      <select
        onChange={handleChange}
        defaultValue={"DEFAULT"}
        className={diasabled ? " mtInputDisabled " : "mtInput "}
        style={{ width: 400, height: 64 }}
        name="country"
        id="pet-select"
      >
        <option value="DEFAULT">France</option>
        {countriesList.map((option, index) => (
          <option value={option.code} defaultValue={"FR"}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

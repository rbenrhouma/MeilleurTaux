import React, { useState, useEffect } from "react";
import axios from "axios";
import MTInput from "./MTInput";

export default function MTZipCode(props) {
  const { name, handleChange, value, type, diasabled } = props;
  const { devis } = props.context.context;
  console.log(devis);
  const [zipCode, setZipCode] = useState("");
  const [zipCodes, setZipCodes] = useState([]);

  useEffect(() => {}, [zipCodes]);

  const localHandleChange = e => {
    setZipCode(e.target.value);
  };

  useEffect(() => {
    fetchZipCode(zipCode);
    if (devis) devis.zipCode = zipCode;
  }, [zipCode]);

  const fetchZipCode = async e => {
    if (zipCode) {
      const response = await axios
        .get(`https://vicopo.selfbuild.fr/cherche/${zipCode}`)
        .then(response => {
          setZipCodes(response.data.cities);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setZipCodes([]);
    }
  };

  return (
    <>
      <input
        className={
          (diasabled ? " mtInputDisabled " : "mtInput ") +
          (type === "number" ? " right " : " mtInput ")
        }
        type={type}
        name={name}
        onChange={localHandleChange}
        value={zipCode}
        list="browsers"
      />
      <datalist id="browsers">
        {zipCodes.map(option => (
          <option value={option.code + " ( " + option.city + " )"} />
        ))}
      </datalist>
    </>
  );
}

import React, { useState, useEffect } from "react";
import email from "../assets/visuel-desktop-email.jpg";
import MTInputBar from "./MT/MTInputBar";
import conf from "../assets/confidentiel.png";
import "./style.css";

const ContactDetails = props => {
  const { checkFormValide } = props;
  const { devis, setDevis } = props.context.context;

  const [mail, setMail] = useState("");
  const [formeValide, setFormeValide] = useState(false);
  const [eMailValide, setEMailValide] = useState(false);
  const [okMail, setOkMail] = useState(false);

  useEffect(() => {
    setFormeValide(okMail && eMailValide);
    devis.email = mail;
  }, [okMail, eMailValide, mail]);

  const onChange = e => {
    setMail(e.target.value);
  };

  function handleChange(e) {}
  return (
    <div>
      <div className="devisAlertContainer">
        <div className="center">
          Un devis vous sera envoyé mail avec un récapitulatif de vente demande.
        </div>
        <div className="">
          <img src={email} alt={"visuel-desktop-email"} />
        </div>
      </div>
      <MTInputBar
        name={"email"}
        value={mail}
        type={"email"}
        odd={true}
        handleChange={onChange}
        caption={"Adresse email de l'enpreinteur *"}
        txtInfo={"bla bla bla 11111111..."}
        icone={conf}
      />

      <div className="mtCheckboxContainer">
        <input
          className="mtCheckbox"
          type="checkbox"
          id="okmail"
          name="okmail"
          onChange={() => {
            setOkMail(!okMail);
          }}
        />
        <label className="mtCheckboxLabel" for="okmail">
          J'accepte de recevoir par email des propositions de Meilleurtaux.
        </label>
      </div>
    </div>
  );
};
export default ContactDetails;

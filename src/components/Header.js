import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = props => {
  const { pageIndex } = props.context;
  const history = useHistory();

  useEffect(() => {}, []);

  const onClick = () => {
    console.log("Lance back office");
    // // provisoire

    Cookies.remove("devis");
    Cookies.remove("route");
    Cookies.remove("page");

    // Cookies.set("devis", "xxxx");
    // Cookies.remove("route", "xxxx");
    // Cookies.remove("page", "xxxx");

    //history.push("/backoffice");
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <img src={logo} alt={"logo"} />
        <h3>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h3>
      </div>
      <div>
        <div
          className={pageIndex === 8 ? "backObbiceBtn" : "noneElement"}
          onClick={onClick}
        >
          Back Office
        </div>
        <div>
          <input
            type="password"
            className={pageIndex === 8 ? "backObbiceInput" : "noneElement"}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Header;

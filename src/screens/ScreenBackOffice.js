import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import axios from "axios";
import Cookies from "js-cookie";

const ScreenBackOffice = ({ serverURL }) => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");

  const [allDevis, setAllDevis] = useState([]);

  useEffect(() => {
    const devis = allDevis => {
      const tabDevis = [];
      for (let index = 0; index < allDevis.length; index++) {
        const devis = allDevis[index];
        tabDevis.push(
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: index % 2 ? "white" : "#F1F1F1"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                width: "90%"
              }}
              onClick={() => {
                history.push(`/devis/${devis._id}`);
              }}
            >
              <span>Code postal : {devis.zipCode}</span>
              <span>E-mail : {devis.email}</span>
              <span>Type du bien : {devis.typeBien}</span>
              <span>Etat du bien : {devis.etatBien}</span>
              <span>Montant total : {devis.total}</span>
            </div>
            <span
              style={{ marginLeft: "20px" }}
              onClick={async () => {
                try {
                  setIsLoading(true);
                  await axios.post(serverURL + "devis/delete", {
                    id: devis._id
                  });
                  setIsLoading(false);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              X
            </span>
          </div>
        );
      }
      return tabDevis;
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(serverURL + "backoffice");
        setAllDevis(devis(response.data));
        setIsLoading(false);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };
    fetchData();
  }, [isLoading]);

  useEffect(() => {
    const connexion = Cookies.get("connexion");
    if (connexion === "true") {
      setIsLogged(true);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if (password === "tothemoon") {
      setIsLogged(true);
    }
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
    Cookies.set("connexion", "true");
  };

  return (
    <>
      {isLogged === false ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px"
          }}
        >
          <h1>Welcome to Back-Office</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                height: "30px",
                width: "300px"
              }}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : isLoading ? (
        <div
          style={{
            paddingTop: "100px",
            display: "flex",
            flex: "1",
            justifyContent: "center"
          }}
        >
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              Cookies.remove("connexion");
              setIsLogged(false);
            }}
          >
            Déconnexion
          </button>
          {allDevis}
        </div>
      )}
    </>
  );
};

export default ScreenBackOffice;

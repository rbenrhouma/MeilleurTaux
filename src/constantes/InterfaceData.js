export const DataPages = [
  [
    { title: "Type de bien", field: "typeBien", info: "info  type bien" },
    { value: "MAIS", caption: "Maison", default: false },
    { value: "APP", caption: "Appartement", default: true }
  ],
  [
    { title: "Etat du bien", field: "etatBien", info: "info Etat du bien" },
    { value: "ANC", caption: "Ancien", default: false },
    { value: "NEW", caption: "Neuf", default: true }
  ],
  [
    { title: "Usage du bien", field: "usageBien", info: "info Usage du bien" },
    { value: "RPRI", caption: "Résidence principale", default: false },
    { value: "RSEC", caption: "Résidence secondaire", default: true },
    { value: "INVEST", caption: "Investissement", default: false }
  ],
  [
    {
      title: "Votre situation actuelle",
      field: "situationUser",
      info: "info Votre situation actuelle"
    },
    { value: "LOC", caption: "Location", default: false },
    { value: "PROP", caption: "Propriétaire", default: true },
    {
      value: "BLF",
      caption: "Bénéficiaire d'un logement de fonction",
      default: false
    },
    { value: "HTG", caption: "Hébergé à titre gratuit", default: false }
  ],
  // Autres interfaces
  [{ title: "Où se situe le bien à financer", info: "" }],
  [{ title: "Définissons le montant de votre projet", info: "" }],
  [{ title: "Vos coordonnées", info: "" }],
  [{ title: "Et voilà, le formulaire est terminé!", info: "" }]
];
export default DataPages;

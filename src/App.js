import React from "react";
import Navmenu from "./components/navmenu";
import "./App.css";
import Cherifa from "./components/logonom.png";
import Nabil from "./components/logodoc.png";
import Box from "./components/box";
import Box2 from "./components/box2";
import Box3 from "./components/box3";
import Navmenu1 from "./components/navmenu1";

function App() {
  const list = [{ item: "about us" }, { item: "carrer" }];
  const list1 = [
    {
      title: "For patients",
      texte: "Find a doctor, book a visit and solve any health-related doubt",
      image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
      class: "fff"
    },
    {
      title: "For doctors",
      texte: "Save time managing visits and cut no-shows by half",
      image: "https://www.docplanner.com/img/screen-saas@2x.png",
      class: ""
    }
  ];
  const list2 = [
    {
      title: "Leader in 10 countries",
      texte:
        "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
      image: "https://www.docplanner.com/img/flag.png"
    },
    {
      title: "30 million unique patients",
      texte: "visit us every month",
      image: "https://www.docplanner.com/img/visits.png"
    },
    {
      title: "1.5 million appointments",
      texte: "booked last month",
      image: "https://www.docplanner.com/img/patients.png"
    },
    {
      title: "2 million active doctors",
      Text: "trust in our solutions",
      image: "https://www.docplanner.com/img/doctors.png"
    }
  ];
  const list3 = [
    {
      title: "Warsaw",
      button: "see opening",
      image: "https://www.docplanner.com/images/warsaw.png"
    },
    {
      title: "Barcelone",
      button: "see opening",
      image: "https://www.docplanner.com/images/barcelona.png"
    },
    {
      title: "Istanbul",
      button: "see opening",
      image: "https://www.docplanner.com/images/istanbul.png"
    },
    {
      title: "Rome",
      button: "see opening",
      image: "https://www.docplanner.com/images/rome.png"
    },
    {
      title: "Mexico",
      button: "see opening",
      image: "https://www.docplanner.com/images/mexico-city.png"
    },
    {
      title: "Curitiba",
      button: "see opening",
      image: "https://www.docplanner.com/images/curitiba.png"
    }
  ];

  return (
    <div>
      <div className="header">
        <img src={Cherifa} alt="..." className="img" />

        <Navmenu list={list} />
      </div>
      <div className="img1">
        <img src={Nabil} alt="..." />
      </div>
      <div className="h5">
        <h5>Rendre l'expérience des soins de santé plus humaine</h5>
      </div>
      <div className="paragraphe">
        <p className="p">
          Nous voulons que les patients trouvent le médecin parfait et prennent
          un rendez-vous de la manière la plus simple. Le parcours patient doit
          être agréable et c'est pourquoi nous sommes toujours à leurs côtés:
          pour les aider à trouver les meilleurs soins possibles. N'importe
          quand n'importe où.
        </p>
        <p className="p">
          Nous aidons également les médecins à mieux gérer leur pratique et à
          bâtir leur réputation en ligne. Grâce à notre solution intégrée de
          bout en bout, les médecins peuvent non seulement améliorer leur
          présence en ligne, mais aussi consacrer leur temps à ce qui compte
          vraiment: leurs patients.
        </p>
      </div>
      <Box list1={list1} />
      <div className="Box2">
        <div className="Box2-main">
          <h2 className="text10">
            La plus
            <br /> grande plateforme de soins de santé <br />
            au monde
          </h2>
          <p className="text11">
            Nous travaillons à partir de 6 bureaux dans le monde entier, donnant
            vie au groupe Docplanner dans près de 20 pays.
          </p>
        </div>
        <Box2 list2={list2} />
      </div>

      <div className="text12">
        <h3>
          Améliorez la vie de millions de personnes. <br />
          Changez le vôtre pour toujours
        </h3>
      </div>

      <div className="par">
        <p>
          Plus de 1000 coéquipiers partagent notre même vision, nos objectifs et
          <br />
          notre passion. Avec des bureaux à Varsovie, Barcelone, Istanbul, Rome,
          <br />
          Mexico et Curitiba, notre recherche de grands talents ne s'arrête
          <br />
          jamais.
        </p>
      </div>

      <Box3 list3={list3} />
      <div className="middle">
        <Navmenu1 />
      </div>
    </div>
  );
}

export default App;

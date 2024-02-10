import React, { useEffect, useState } from "react";
import { ImPlus } from "react-icons/im";
import "../styles/maincontent.css";

import MujerLeyendo1 from "../elements/mujer-leyendo1.png";
import MujerLeyendo2 from "../elements/mujer-leyendo2.png";
import Marketing from "./marketingsection";

// Declara los props
type MainContentProps = {
  characterinfo: any[];
};

const MainContent: React.FC<MainContentProps> = ({ characterinfo }) => {
  const [profilecharacter, setPorfileCharacter] = useState<any>(null);

  useEffect(() => {
    if (characterinfo.length > 0) {
      setPorfileCharacter(characterinfo[0]);
    }
  }, [characterinfo]);

  return (
    <div className="mainContent">
      <div className="biggerBanner orangefill">
        <div>
          <h2>
            Hola, {profilecharacter && profilecharacter.name}! Tienes ideas
            sobre un nuevo libro?
          </h2>
          <p>Vuelve tus libros tendencia mundial!</p>
          <p>Quieres empezar a escribir una vez más?</p>
          <button className="createDraftButton">
            Crear borrador <ImPlus />
          </button>
        </div>
        <img src={MujerLeyendo1} alt="Mujer Leyendo" className="imagenBanner" />
      </div>

      <Marketing characterinfo={characterinfo}/>

      <div className="biggerBanner grayfill">
        <div>
          <h2>
            {profilecharacter && profilecharacter.name}, Nos gusta tu contenido
            y queremos darte los siguientes tips:
          </h2>
          <ol>
            <li>Lee los comentarios de tus lectores</li>
            <li>Elije el género que quieres para tu público</li>
            <li>Busca siempre a un editor de confianza!</li>
          </ol>
        </div>
        <img src={MujerLeyendo2} alt="Mujer Leyendo" className="imagenBanner" />
      </div>
    </div>
  );
};

export default MainContent;

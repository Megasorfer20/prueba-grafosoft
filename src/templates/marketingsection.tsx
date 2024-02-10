import React from "react";
import "../styles/marketingsection.css";
import Autores from "./autores";
import Recientes from "./reciente";

// Declara los props
type MarketingProps = {
  characterinfo: any[];
};

const Marketing: React.FC<MarketingProps> = ({ characterinfo }) => {
  return (
    <div className="marketingSection">
      <div className="albunes">
        <div className="boxInfo">
          <p>Libreria</p>
          <h3>124</h3>
        </div>
        <div className="boxInfo">
          <p>Me Gusta</p>
          <h3>155 k</h3>
        </div>
        <div className="boxInfo">
          <p>Lectores</p>
          <h3>8 k</h3>
        </div>
        <div className="boxInfo">
          <p>Opiniones</p>
          <h3>163 k</h3>
        </div>
      </div>
      <div className="autores">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>Autores</h1>
          <button className="verTodoButton">Ver Todo</button>
        </div>

        <div>
          <Autores characterinfo={characterinfo} />
        </div>
      </div>
      <div className="reciente">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>Reciente</h1>
          <button className="verTodoButton">Ver Todo</button>
        </div>
        <div>
          <Recientes characterinfo={characterinfo} />
        </div>
      </div>
    </div>
  );
};

export default Marketing;

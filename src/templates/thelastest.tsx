import React, { useState, useEffect } from "react";
import "../styles/thelastest.css";
import { FaGreaterThan } from "react-icons/fa";
import SpacePhoto from "../elements/space.jpeg";
import WoodsPhoto from "../elements/woods.jpg";

// Declara los props
type TheLastestProps = {
  characterinfo: any[];
};

const lastestSections: string[] = ["Reciente", "Popular"];

const TheLastest: React.FC<TheLastestProps> = ({ characterinfo }) => {
  const [selectedSection, setSelectedSection] = useState("0res");
  const [profilecharacter, setPorfileCharacter] = useState<any>(null);
  const [lastestPostInfo, setLastestPostInfo] = useState<any>([]);

  useEffect(() => {
    if (characterinfo.length > 0) {
      setPorfileCharacter([characterinfo[1], characterinfo[2]]);
    }
  }, [characterinfo]);

  useEffect(() => {
    if (profilecharacter) {
      setLastestPostInfo([
        {
          tittle: "La Cuidadela",
          description:
            "Descubre las maravillas escondidas en los bosques de Estados Unidos.",
          date: "May 6, 2020",
          photo: WoodsPhoto,
          photoUser: profilecharacter[0].image,
          nameUser: profilecharacter[0].name,
        },
        {
          tittle: "SpaceX",
          description: "Elon Musk, un emprendedor con otra visión millonaria.",
          date: "May 3, 2020",
          photo: SpacePhoto,
          photoUser: profilecharacter[1].image,
          nameUser: profilecharacter[1].name,
        },
      ]);
    }
  }, [profilecharacter]);

  const handleChangeSection = (index: string) => {
    setSelectedSection(index);
  };

  return (
    <div className="lastestContent">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>Lo último</h1>
        <button className="verTodoButton">Ver Todo</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {lastestSections.map((item, index) => (
          <h4
            key={`${index}res`}
            onClick={() => handleChangeSection(`${index}res`)}
            style={{ margin: "0px 2% 0px 2%", padding: "8px" }}
          >
            {selectedSection === `${index}res` ? <FaGreaterThan /> : ""}
            {item}
          </h4>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        {lastestPostInfo.map((item: any, index: number) => (
          <div className="lastestCard" key={`${index}post`}>
            <img src={item.photo} alt={item.tittle} className="mainphotocard" />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ margin: "5px" }}>{item.tittle}</h2>
              <h5>{item.description}</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.photoUser}
                  alt={item.nameUser}
                  className="userphoto"
                />
                <div>
                  <strong>{item.nameUser}</strong>
                  <br />
                  <small>{item.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheLastest;

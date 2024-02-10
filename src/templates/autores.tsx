import React, { useEffect, useState } from "react";

// Declara los props
type AutoresProps = {
  characterinfo: any[];
};

const Autores: React.FC<AutoresProps> = ({ characterinfo }) => {
  const [profilecharacter, setPorfileCharacter] = useState<any>(null);
  const [lastestPostInfo, setLastestPostInfo] = useState<any>([]);

  useEffect(() => {
    if (characterinfo.length > 0) {
      setPorfileCharacter([
        characterinfo[1],
        characterinfo[2],
        characterinfo[3],
      ]);
    }
  }, [characterinfo]);

  useEffect(() => {
    if (profilecharacter) {
      setLastestPostInfo([
        {
          description: "Diseñador",
          lectors: "143 k",
          photoUser: profilecharacter[0].image,
          nameUser: profilecharacter[0].name,
        },
        {
          description: "Desarrolladora",
          lectors: "136 k",
          photoUser: profilecharacter[1].image,
          nameUser: profilecharacter[1].name,
        },
        {
          description: "Escritor",
          lectors: "128 k",
          photoUser: profilecharacter[2].image,
          nameUser: profilecharacter[2].name,
        },
      ]);
    }
  }, [profilecharacter]);

  return (
    <>

    {lastestPostInfo.map((item:any,index:number) => (
        <div key={`${index}aut`}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding:"1rem"
          }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={item.photoUser} alt={item.nameUser} className="userphoto2" />
          <div>
            <strong>{item.nameUser}</strong>
            <br />
            <small>{item.description}</small>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Lectores</p>
          <h3>163 k</h3>
        </div>
      </div>
      <hr />
      </div>
    ))}
      
    </>
  );
};

export default Autores;

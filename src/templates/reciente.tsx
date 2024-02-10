import React, { useEffect, useState } from "react";

// Declara los props
type RecientesProps = {
  characterinfo: any[];
};

const Recientes: React.FC<RecientesProps> = ({ characterinfo }) => {
  const [profilecharacter, setPorfileCharacter] = useState<any>(null);
  const [lastestPostInfo, setLastestPostInfo] = useState<any>([]);

  useEffect(() => {
    if (characterinfo.length > 0) {
      setPorfileCharacter([
        characterinfo[1],
        characterinfo[2],
        characterinfo[3],
        characterinfo[4],
      ]);
    }
  }, [characterinfo]);

  useEffect(() => {
    if (profilecharacter) {
      setLastestPostInfo([
        {
          date: "May 7",
          nameUser: profilecharacter[0].name,
          action: 'ha comentado en "La Ciudadela"'
        },
        {
          date: "May 5",
          nameUser: profilecharacter[1].name,
          action: "ha comenzado a seguirte"
        },
        {
          date: "May 1",
          nameUser: profilecharacter[2].name,
          action: 'le ha gustado "Inolvidable"'
        },
        {
          date: "Apr 29",
          nameUser: profilecharacter[3].name,
          action: "ha comenzadoa seguirte"
        },
      ]);
    }
  }, [profilecharacter]);

  return (
    <>
      {lastestPostInfo.map((item: any, index: number) => (
        <div key={`${index}recc`}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div>
              <p><strong>{item.nameUser}</strong> {item.action}</p>
              </div>
            </div>
              <p>{item.date}</p>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Recientes;

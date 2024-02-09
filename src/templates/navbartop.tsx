import React, { useState } from "react";
import "../styles/navbar.css";
import BookIcon from "../elements/book.png";
import AddIcon from "../elements/add.png";
import SelectionIcon from "../elements/greater-than.png";

const pageSections: Array<string> = [
  "Inicio",
  "Libros",
  "Editores",
  "Lectores",
];

function NavbarTop() {
  const [selectedSection, setSelectedSection] = useState("0li");

  const handleChangeSection = (index: string) => {
    setSelectedSection(index);
  };

  return (
    <div className="navbarcontent">
      <div className="navButton">
        <img src={BookIcon} alt="BookPhoto" className="BookPhoto" />
      </div>
      <ul className="ul-nav nav-sections">
        {pageSections.map((item, index) => (
          <li
            key={`${index}li`}
            onClick={() => handleChangeSection(`${index}li`)}
            className="nav-listed-eleemets"
          >
            {selectedSection === `${index}li` ? (
              <img src={SelectionIcon} alt=">" className="selectionIcon" />
            ) : (
              ""
            )}
            {item}
          </li>
        ))}
      </ul>
      <div className="navButton create-navsec">
        <strong>Crear</strong> <img src={AddIcon} alt="+" className="addicon" />
      </div>
    </div>
  );
}

export default NavbarTop;

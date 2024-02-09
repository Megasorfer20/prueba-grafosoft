import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Feed from "./templates/feed";
import Navbar from "./templates/navbar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  //Ejecuto el Axios para obtener la info del API de Rick y Morty
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      {
        //Se le hace una llamada al NavBar
      }
      <Navbar />

      {
        //Se le hace una llamda al espacio donde estará el contenido
      }
      <Feed characterinfo={characters} />
    </div>
  );
}

export default App;

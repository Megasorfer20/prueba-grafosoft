import React from "react";
import "./styles/App.css";
import Feed from "./templates/feed";
import Navbar from "./templates/navbar";

function App() {
  return (
    <div className="App">
      {
        //Se le hace una llamada al NavBar
      }
      <Navbar />

      {
        //Se le hace una llamda al espacio donde estará el contenido
      }
      <Feed />
    </div>
  );
}

export default App;

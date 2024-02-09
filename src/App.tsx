import React from 'react';
import './styles/App.css';
import Feed from './templates/feed';
import Navbar from './templates/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Feed/>
    </div>
  );
}

export default App;

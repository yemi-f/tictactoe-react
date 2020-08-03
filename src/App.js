import React from 'react';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App mx-auto vh-100 d-flex align-items-center">
      <div className="inner-app-div mx-auto">
        <Game />
      </div>
    </div>
  );
}

export default App;

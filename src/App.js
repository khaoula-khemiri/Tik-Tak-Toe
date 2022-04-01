import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className = "app">
          <div className = "title">Tic-Tac-Toe</div>
          <Game/>
        
      </div>
    );
  }
}

export default App;

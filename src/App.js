import React, { Component } from 'react';

import './App.css';
import './TicTacToe.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        TicTacToe
        
          <Game/>
        
      </div>
    );
  }
}

export default App;

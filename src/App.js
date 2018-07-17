import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} alt=""/> */}
        <p className="App-intro">
          ScoreBoard App
        </p>
        <Scoreboard/>
      </div>
    );
  }
}

export default App;

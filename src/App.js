import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <p className="App-intro">
      ScoreBoard App
      </p>
      <img src={logo} className="App-logo" alt=""/>
      <Scoreboard/>
      </div>
    );
  }
}

export default App;

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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Scoreboard/>
      </div>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import Player from './Player'
import '../styles/Scoreboard.css'

class Scoreboard extends PureComponent {
  state = {
    players : [
      {name: 'Munish',
      score : 5,
    },
    {name : 'Jackson',
    score : 25
  },
],
}

renderPlayers(players){
  console.log(`renderin players within renderPlayers `)
  console.log(players)
  return players
  
  .map(player =>{
    return (
      <Player 
      name = {player.name} 
      score={player.score} 
      key={player.name} 
      onClick = {()=>this.incrementScore(player.name)}
      onDecrementClick = {()=>this.decrementScore(player.name)}
      />
    )
  });

  
}

incrementScore = (playerName) => {
  console.log(this, 'this in incerementScore');
  // this.setState({
  //     score: this.state.score +1,
  // });
  const newPlayers = this.state.players.map((player)=>{
    if (player.name === playerName){
      return {
        ...player,
        score: player.score+1
      }
    }
    return player
  }).sort((a, b)=> b.score - a.score );
  
  this.setState({
      players : newPlayers
    }
  )
}

decrementScore = (playerName) => {
  console.log(this, 'this in incerementScore');
  // this.setState({
  //     score: this.state.score -1,
  // });
  
  const newPlayers = this.state.players.map((player)=>{
    if (player.name === playerName){
      return {
        ...player,
        score: player.score-1
      }
    }
    return player
  }).sort((a, b)=> b.score - a.score );
  
  this.setState({
      players : newPlayers
    }
  )
}

render() {
  console.log(this.state);
  
  return (
    <div className="scoreboard">
    <ul>
    {this.renderPlayers(this.state.players.sort((a,b)=>b.score- a.score))}
    </ul>
    </div>
  );
}
}

export default Scoreboard;
